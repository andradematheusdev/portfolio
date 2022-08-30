type Props = {
    url: string;
}

export default function FigmaLink({url}: Props) {
  return (
    <a href={url} className="absolute bottom-0 right-0" target={"_blank"}>
        <img src="/images/figmalogo.png" alt="Figma" className="h-10 w-10" />
    </a>
  )
}