type Props = {
  url?: string;
  className?: string;
  children?: string;
  blank?: boolean;
  text?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

export const Button = ({ url = "", className, children, text, blank, iconLeft, iconRight}: Props) => {
  return (
    <a
      href={url}
      className={`
        flex items-center justify-center text-center px-4 py-2 rounded-md transition-colors whitespace-nowrap
        ${className}
      `}
      target={blank ? "_blank" : "_self"}
    >
     <span className="mr-2">{iconLeft}</span>
     <span>{text ?? children}</span>
     <span className="ml-2">{iconRight}</span>
    </a>
  );
}
