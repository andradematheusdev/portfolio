import { CaretRight } from "phosphor-react";

type Props = {
  url: string;
  blank?: boolean;
  className?: string;
}

export const ViewMore = ({url, blank = false, className}: Props) => {
  return (
    <a href={url} target={blank ? '_blank' : '_self'} className={`flex flex-row items-center whitespace-nowrap ${className}`}>Ver Mais <CaretRight /></a>
  )
}