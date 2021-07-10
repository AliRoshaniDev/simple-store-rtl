import Image from "next/image";

export default function EmojiAndText(props: { emoji: string; text: string }) {
  const { text, emoji } = props;

  return (
    <>
      <div className="w-24 my-6">
        <Image src={emoji} height={100} width={100} alt="emoji" />
      </div>
      <span>{text}</span>
    </>
  );
}
