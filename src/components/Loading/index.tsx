import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

interface ILoadingProps {
  size?: number;
  color?: HexColor;
  dots?: boolean;
}

export const Loading = ({color = "#fff", size = 48, dots}: ILoadingProps) => {
  return (
    <div className="flex w-full items-center justify-center">
      { dots
        ? <div className="flex">
            <BsDot size={size} className="animate-bounce" />
            <BsDot size={size} className="animate-bounce animation-delay-100"/>
            <BsDot size={size} className="animate-bounce animation-delay-200"/>
          </div>
        : <AiOutlineLoading3Quarters size={size} color={color} className={"animate-spin"}/>
      }
    </div>
  )
}
