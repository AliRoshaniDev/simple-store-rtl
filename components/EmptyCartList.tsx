import Image from "next/image";

export default function EmptyCartList() {
  return (
    <div className="h-auto text-right w-full whitespace-no-wrap rounded-lg text-sm md:text-base text-gray-600 hover:text-gray-800">
      <div className="flex flex-col px-2 py-2 h-full">
        <div className="flex flex-col items-center">
          <div className="w-24 my-6">
            <Image src="/images/icons/sad.png" height={100} width={100} alt="Sad emoji" />
          </div>
          <span>سبد خرید شما خالیست !</span>
        </div>
      </div>
    </div>
  );
}
