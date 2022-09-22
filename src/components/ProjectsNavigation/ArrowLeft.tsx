import { CaretLeft } from "phosphor-react";

type Props = {
  listRef: React.RefObject<HTMLInputElement>;
}

export function ArrowLeft({listRef}: Props) {
  function handleClick(){
    listRef.current ? listRef.current.scrollLeft -= 341 : null;
  }

  return (
    <a role={"button"} className="flex items-center absolute left-0"><CaretLeft size={24} color="#fff" onClick={() => handleClick()} /></a>
  )
}