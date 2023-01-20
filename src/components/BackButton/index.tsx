import { CaretLeft } from "phosphor-react"
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <a role={"button"} onClick={() => navigate(-1)}>
      <CaretLeft size={24} color={"#fff"} weight={"bold"} />
    </a>
  )
}