type Color = `#${string}`;

interface IBackgroundElementProps {
  size: number;
  color: Color;
  x: number;
  y: number;
}

export const BackgroundElement = ({size, color, x, y}: IBackgroundElementProps) => {
  return (
    <div
      className={`
        blur-3xl absolute rounded-full opacity-20 z-0
      `}
      style={{backgroundColor: color, top: `${y}%`, left: `${x}%`, padding: size}}
    >a</div>
  )
}
