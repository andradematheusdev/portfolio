type Color = `#${string}`;

interface IBackgroundElementProps {
  size: number;
  color: Color;
  x: number;
  y: number;
  opacity?: number;
}

export const BackgroundElement = ({size, color, x, y, opacity = 20}: IBackgroundElementProps) => {
  return (
    <div
      className={`
        blur-3xl absolute rounded-full z-0 antialiased
      `}
      style={{backgroundColor: color, top: `${y}%`, left: `${x}%`, padding: size, opacity: `${opacity}%`}}
    >a</div>
  )
}
