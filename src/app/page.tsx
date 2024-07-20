'use client';
import ProductCart from '@/components/ProductCart';
import data from './lib/data.json';
import Card from '@/components/Card';
import Modal from '@/components/Modal';
import { useState } from 'react';

export default function Home() {
  const [result, setResult] = useState<any[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const addQuantity = (ids: number) => {
    const findItem = result.find((item) => item.id === ids);
    if (findItem) {
      setResult(
        result.map((item) =>
          item.id === ids ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  };

  const decrQuantity = (ids: number) => {
    const findItem = result.find((item) => item.id === ids);
    if (findItem) {
      setResult(
        result.map((item) =>
          item.id === ids
            ? {
                ...item,
                quantity:
                  item.quantity <= 1 ? (item.quantity = 1) : item.quantity - 1,
              }
            : item
        )
      );
    }
  };

  return (
    <>
      <div
        className="grid md:grid-cols-cols md:max-w-[1200px] md:w-full sm:w-full justify-center py-20  sm::grid-cols-1 "
        style={{ overflow: showModal ? 'hidden' : '' }}
      >
        <div className="flex flex-col gap-10">
          <h1 className="font-bold text-4xl text-rose-900">Desserts</h1>
          <ul className=" md:flex-row md:flex-wrap md:gap-5 sm:flex sm:flex-col sm:gap-7 ">
            {data.map((item, index) => (
              <Card
                key={index}
                id={item.id}
                src={item.image.desktop}
                name={item.name}
                category={item.category}
                price={parseFloat(item.price.toFixed(2))}
                result={result}
                setResult={setResult}
                addQuantity={addQuantity}
                decrQuantity={decrQuantity}
              />
            ))}
          </ul>
        </div>

        <ProductCart
          result={result}
          setResult={setResult}
          setShowModal={setShowModal}
        />
      </div>
      {showModal && (
        <Modal
          result={result}
          setResult={setResult}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
}
