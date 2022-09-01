type Props = {
  url?: string;
  className?: string;
  children?: string;
  blank?: boolean;
  text?: string;
  type?: 'button' | 'submit';
};

export default function Button({ url = "", className, children, text, blank}: Props) {
  return (
    <a
      href={url}
      className={`flex items-center justify-center text-center px-4 py-2 rounded-full transition-colors whitespace-nowrap ${className}`}
      target={blank ? "_blank" : "_self"}
    >
      {text ?? children}
    </a>
  );
}
