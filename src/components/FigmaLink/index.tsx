interface IFigmaLinkProps {
    url: string;
}

export const FigmaLink = ({url}: IFigmaLinkProps) => {
  return (
    <a href={url} className="absolute bottom-0 right-0" target={"_blank"} title="Abrir no Figma">
        <img src="/images/figmalogo.png" alt="Figma" className="h-10 w-10" />
    </a>
  )
}