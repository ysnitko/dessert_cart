interface QuantityProps {
  result: any[];
  id: number;
  addQuantity: (ids: number) => void;
  decrQuantity: (ids: number) => void;
}

export default function Quantity({
  addQuantity,
  decrQuantity,
  id,
  result,
}: QuantityProps) {
  const findItem = result.find((item) => item.id === id) || 0;

  console.log(id);

  return (
    <div className="flex flex-rows justify-between bg-red-clr w-full h-full rounded-full p-[11px]">
      <button
        className="border-2 rounded-full p-[7px] hover:bg-white reduceQuantity "
        onClick={() => decrQuantity(id)}
      >
        <svg
          className="w-[5px] h-[5px]"
          style={{ fill: 'red' }}
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="2"
          fill="none"
          viewBox="0 0 10 2"
        >
          <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
        </svg>
      </button>
      <span className="text-white">{findItem.quantity}</span>
      <button
        className="border-2 rounded-full p-[7px] hover:bg-white addQuantity "
        onClick={() => addQuantity(id)}
      >
        <svg
          className="w-[5px] h-[5px]"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
        >
          <path
            fill="#fff"
            d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
          />
        </svg>
      </button>
    </div>
  );
}
