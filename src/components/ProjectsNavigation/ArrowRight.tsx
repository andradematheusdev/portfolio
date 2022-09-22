import { CaretRight } from "phosphor-react";

type Props = {
  listRef: React.RefObject<HTMLInputElement>;
}

export function ArrowRight({listRef}: Props) {
  function handleClick(){
    listRef.current ? listRef.current.scrollLeft += 341 : null;
  }

  return (
    <a role={"button"} className="flex items-center absolute right-0"><CaretRight size={24} color="#fff" onClick={() => handleClick()}/></a>
  )
}