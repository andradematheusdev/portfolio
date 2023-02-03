import { RxCaretLeft } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <a role={"button"} onClick={() => navigate(-1)}>
      <RxCaretLeft size={32} color={"#fff"} />
    </a>
  )
}