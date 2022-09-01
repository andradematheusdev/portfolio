import classNames from "classnames";

type Props = {
    children?: string;
    rows?: number;
    cols?: number;
    className?: string;
    placeHolder?: string;
    noResize?: boolean;
}

export default function TextArea({children, className, cols = 1, rows, noResize = false, placeHolder}: Props) {
  return (
    <textarea
        rows={rows}
        cols={cols}
        placeholder={placeHolder}
        className={
            classNames(
                `block w-full border border-violet-500 bg-zinc-800 text-white rounded p-4 ${className}`, {'resize-none': noResize}
                )
        }
    >
        {children}
    </textarea>
  )
}