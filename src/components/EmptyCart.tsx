import Image from "next/image";

export default function EmptyCart() {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <Image
        className="w-30 h-30"
        src={"/assets/images/illustration-empty-cart.svg"}
        width={120}
        height={120}
        alt="empty"
      />
      <p className="text-sm text-rose-500 font-semibold">
        You added items will appear here
      </p>
    </div>
  );
}
