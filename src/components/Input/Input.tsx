type Props = {
    className?: string;
    placeHolder?: string;
    type?: 'text' | 'tel' | 'email';
    name?: string;
    id?: string;
}

export default function TextInput({className, placeHolder, type = "text", name, id}: Props) {
  return (
    <input
        type={type}
        name={name}
        id={id}
        className={
          `block w-full border border-violet-500 bg-zinc-800 text-white rounded h-14 p-4 ${className}`
        }
        placeholder={placeHolder}
    />
  )
}