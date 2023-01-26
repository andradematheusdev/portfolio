type Props = {
    className?: string;
    children?: string;
    text?: string;
  };
  
  export const SubmitButton = ({className, children, text}: Props) => {
    return (
      <button
        className={`flex items-center justify-center text-center px-4 py-2 rounded transition-colors whitespace-nowrap ${className}`}
      >
        {text ?? children}
      </button>
    );
  }
  