import { CaretLeft } from "phosphor-react"
import { useNavigate } from "react-router-dom"

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <a role={"button"} onClick={() => navigate(-1)}>
      <CaretLeft size={24} color={"#fff"} weight={"bold"} />
    </a>
  )
}

export default BackButton