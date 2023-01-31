interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  url?: string;
  className?: string;
  children?: string;
  blank?: boolean;
  text?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
};

export const Button = ({ url = "", className, children, text, blank, iconLeft, iconRight, ...rest}: IButtonProps) => {
  return (
    <a
      href={url}
      target={blank ? "_blank" : "_self"}
      className={` flex items-center justify-center text-center px-4 py-2 rounded-md transition-colors whitespace-nowrap ${className}`} 
    >
      <button role={"button"} {...rest} >
        <span className="mr-2">{iconLeft}</span>
        <span>{text ?? children}</span>
        <span className="ml-2">{iconRight}</span>
      </button>    
    </a>
  );
}
