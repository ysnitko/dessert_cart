import Image from "next/image";
import EmptyCart from "./EmptyCart";
import { Dispatch, SetStateAction } from "react";

interface ProductCartProps {
  result: any[];
  setResult: Dispatch<SetStateAction<any[]>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export default function ProductCart({
  result,

  setResult,
  setShowModal,
}: ProductCartProps) {
  const sumQuantity = result.reduce((acc, num) => acc + num.quantity, 0);
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

  const removeProduct = (e: any) => {
    e.stopPropagation();
    const filterItem = result.filter((item) => item.id !== +e.target.id);
    setResult(filterItem);
    console.log(e.target);
  };

  const confirmOrder = () => {
    setShowModal(true);
  };

  return (
    <div>
      <div className="flex flex-col justify-center  gap-8 bg-white rounded-xl p-4 pb-10 h-min">
        <p className="text-red-clr align-left text-2xl font-bold">
          Your Cart ({sumQuantity})
        </p>

        {result.length === 0 ? (
          <EmptyCart />
        ) : (
          <div>
            <ul>
              {result.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center py-4 border-b"
                >
                  <div>
                    <p className="text-rose-900 font-semibold">{item.name}</p>
                    <div className="flex items-center gap-7">
                      <span className="text-red-clr">{item.quantity}x</span>
                      <div className="flex gap-5">
                        <span className="text-rose-500">@ ${item.price}</span>
                        <span className="text-rose-500 font-semibold">
                          ${item.quantity * item.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    id={item.id}
                    className="w-4 h-4 rounded-full border border-border-remove-item p-1 bg-remove-bg bg-no-repeat  bg-center bg-70%"
                    onClick={(e) => removeProduct(e)}
                  >
                    {/* <Image
                      className="w-[10px] h-[10px]"
                      src={"/assets/images/icon-remove-item.svg"}
                      width={10}
                      height={10}
                      alt="remove"
                    /> */}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center py-6">
                <p className="text-rose-500  text-sm font-semibold">
                  Order Total
                </p>
                <span className="text-text-rose-900 font-bold text-2xl">
                  ${parseFloat(sum().toFixed(2))}
                </span>
              </div>
              <div className="flex bg-rose-50 py-4 justify-center items-center gap-2 text-sm rounded-lg">
                <Image
                  src={"/assets/images/icon-carbon-neutral.svg"}
                  width={25}
                  height={25}
                  alt="delivery"
                />
                <p>
                  This is a
                  <span className="text-rose-900 font-semibold">
                    carbon-neutral
                  </span>
                  delivery
                </p>
              </div>
              <button
                className="w-full text-rose-50 rounded-full bg-red-clr p-4 font-semibold text-base mt-3 hover:bg-rose-950"
                onClick={confirmOrder}
              >
                Confirm Order
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
