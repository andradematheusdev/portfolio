import classNames from "classnames";

type Props = {
  name?: string;
  id?: string;
  children?: string;
  rows?: number;
  cols?: number;
  className?: string;
  placeHolder?: string;
  noResize?: boolean;
};

export const TextArea = ({
  children,
  className,
  cols = 1,
  rows,
  noResize = false,
  placeHolder,
  name,
  id,
}: Props) => {
  return (
    <textarea
      name={name}
      id={id}
      rows={rows}
      cols={cols}
      placeholder={placeHolder}
      className={classNames(
        `
                block
                w-full
                border
                border-violet-500 bg-zinc-800 text-white
                rounded
                p-4
                focus:outline-none
                focus:border-violet-800
                ${className}`,
        { "resize-none": noResize }
      )}
    >
      {children}
    </textarea>
  );
};
