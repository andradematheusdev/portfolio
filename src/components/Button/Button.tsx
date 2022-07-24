type Props = {
  url?: string;
  className?: string;
  text: string;
  blank?: boolean;
};

export default function Button({ url = "#", className, text, blank }: Props) {
  return (
    <a
      href={url}
      className={`flex w-[200px] items-center justify-center py-2  rounded-full transition-colors ${className}`}
      target={blank ? "_blank" : "_self"}
    >
      {text}
    </a>
  );
}
