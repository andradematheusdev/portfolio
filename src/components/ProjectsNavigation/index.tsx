import { CaretLeft, CaretRight } from "phosphor-react";

interface ILeftArrowProps {
  listRef: React.RefObject<HTMLInputElement>;
}

interface IRightArrowProps {
  listRef: React.RefObject<HTMLInputElement>;
}

export const ArrowLeft = ({listRef}: ILeftArrowProps) => {
  function handleClick(){
    listRef.current ? listRef.current.scrollLeft -= 341 : null;
  }

  return (
    <a role={"button"} className="flex items-center absolute left-0"><CaretLeft size={24} color="#fff" onClick={() => handleClick()} /></a>
  )
}

export const ArrowRight = ({listRef}: IRightArrowProps) => {
  function handleClick(){
    listRef.current ? listRef.current.scrollLeft += 341 : null;
  }

  return (
    <a role={"button"} className="flex items-center absolute right-0"><CaretRight size={24} color="#fff" onClick={() => handleClick()}/></a>
  )
}