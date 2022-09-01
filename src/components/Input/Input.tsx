type Props = {
    className?: string;
    placeHolder?: string;
    type?: 'text' | 'tel' | 'email';
}

export default function TextInput({className, placeHolder, type = "text"}: Props) {
  return (
    <input
        type={type}
        name=""
        id=""
        className={
          `block w-full border border-violet-500 bg-zinc-800 text-white rounded h-14 p-4 ${className}`
        }
        placeholder={placeHolder}
    />
  )
}