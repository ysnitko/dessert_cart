"use client";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface ModalProps {
  result: any[];
  setResult: Dispatch<SetStateAction<any[]>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ result, setResult, setShowModal }: ModalProps) {
  console.log(result);

  const sum = () => {
    let total = 0;
    for (let index = 0; index < result.length; index++) {
      const element = result[index];
      if (result.length === 1) {
        return element.price * element.quantity;
      } else {
        total += result[index].price * result[index].quantity;
      }
    }
    return total;
  };

  const newOrder = () => {
    setShowModal(false);
    setResult([]);
  };

  return (
    <div className="absolute">
      <div className="h-dvh w-screen bg-rose-900 opacity-35  "></div>
      <div className="w-2/3 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-lg rounded-xl p-9 flex flex-col gap-7 opacity-100">
        <Image
          src={"/assets/images/icon-order-confirmed.svg"}
          width={50}
          height={50}
          alt="confirm"
        />
        <div className="flex flex-col gap-3">
          <p className="text-4xl font-bold text-rose-900">Order Confirmed</p>
          <p className="text-rose-500">We hope you enjoy your food</p>
        </div>
        <div className="bg-rose-50 rounded-xl px-6 py-3">
          <ul>
            {result.map((item) => (
              <li
                key={item.id}
                className="flex flex-row justify-between items-center py-4 border-b "
              >
                <div className="flex gap-4">
                  <Image
                    className="rounded-md w-12 h-12"
                    src={`${item.src.split("").splice(1).join("")}`}
                    width={48}
                    height={18}
                    alt={item.name}
                  />
                  <div className="flex flex-col justify-between">
                    <p className="text-sm text-rose-900 font-semibold">
                      {item.name}
                    </p>
                    <div className="flex gap-5 text-sm">
                      <span className="text-red-clr font-semibold">
                        {item.quantity}x
                      </span>
                      <span className="text-rose-500">@ ${item.price}</span>
                    </div>
                  </div>
                </div>
                <div className="text-rose-500 font-semibold">
                  ${item.quantity * item.price}
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center py-6">
            <p className="text-rose-500 text-sm font-semibold">Order Total</p>
            <span className="text-text-rose-900 font-bold text-2xl">
              ${parseFloat(sum().toFixed(2))}
            </span>
          </div>
        </div>
        <button
          className="w-full text-rose-50 rounded-full bg-red-clr p-4 font-semibold text-base mt-3 hover:bg-rose-950"
          onClick={newOrder}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
