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
      className={`flex items-center justify-center text-center px-4 py-2 rounded-full transition-colors whitespace-nowrap ${className}`}
      target={blank ? "_blank" : "_self"}
    >
      {text}
    </a>
  );
}
