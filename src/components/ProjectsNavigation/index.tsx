import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

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
    <a role={"button"} className="flex items-center absolute left-0"><RxCaretLeft size={32} color="#fff" onClick={() => handleClick()} /></a>
  )
}

export const ArrowRight = ({listRef}: IRightArrowProps) => {
  function handleClick(){
    listRef.current ? listRef.current.scrollLeft += 341 : null;
  }

  return (
    <a role={"button"} className="flex items-center absolute right-0"><RxCaretRight size={32} color="#fff" onClick={() => handleClick()}/></a>
  )
}