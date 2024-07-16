'use client';
import Image from 'next/image';
import Quantity from './Quantity';
import { useState, Dispatch, SetStateAction } from 'react';

interface CardProps {
  id: number;
  src: string;
  name: string;
  category: string;
  price: number;
  result: any[];
  setResult: Dispatch<SetStateAction<any[]>>;
  addQuantity: (ids: number) => void;
  decrQuantity: (ids: number) => void;
}

export default function Card({
  id,
  src,
  name,
  category,
  price,
  result,
  setResult,
  addQuantity,
  decrQuantity,
}: CardProps) {
  const imagePath = src.split('').splice(1).join('');
  const [addCart, setAddCart] = useState<boolean>(false);

  const finditemInOrder = result.find((item) => item.id === id);

  const addCartDessert = () => {
    setAddCart(true);
    setResult([
      ...result,
      { id: id, name: name, quantity: 1, price: price, src: src },
    ]);
  };

  return (
    <li className="flex flex-col gap-1">
      <div className="flex flex-col justify-center items-center relative mb-8">
        <Image
          src={imagePath}
          width={240}
          height={240}
          alt={name}
          className="w-60 h-60 rounded-xl"
          style={{
            outline:
              addCart && finditemInOrder ? '2px hsl(14, 86%, 42%) solid' : '',
          }}
        />
        <div className=" flex justify-center items-center absolute bottom-0 translate-y-1/2  rounded-full w-2/3  text-rose-900">
          {addCart && finditemInOrder ? (
            <Quantity
              id={id}
              result={result}
              addQuantity={addQuantity}
              decrQuantity={decrQuantity}
            />
          ) : (
            <button
              className="flex justify-center items-center gap-2 py-3 rounded-full  bg-white w-full h-full text-sm font-semibold  border-[1px] border-border-cart-btn hover:text-red-clr  hover:border-border-cart-hover "
              onClick={() => addCartDessert()}
            >
              <Image
                src="/assets/images/icon-add-to-cart.svg"
                width={20}
                height={20}
                alt="cart"
              />
              <span>Add to Cart</span>
            </button>
          )}
        </div>
      </div>
      <p className="text-sm text-rose-500 opacity-50">{category}</p>
      <p className="font-semibold text-rose-900 ">{name}</p>
      <p className="text-red-clr font-semibold">${price}</p>
    </li>
  );
}
