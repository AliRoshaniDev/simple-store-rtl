import EmojiAndText from "./EmojiAndText";

export default function MenuEmptyCart() {
  return (
    <div className="h-auto text-right w-full whitespace-no-wrap rounded-lg text-sm md:text-base text-gray-600 hover:text-gray-800">
      <div className="flex flex-col px-2 py-2 h-full">
        <div className="flex flex-col items-center">
          <EmojiAndText text="سبد خرید شما خالیست !" emoji="/images/icons/sad.png" />
        </div>
      </div>
    </div>
  );
}
