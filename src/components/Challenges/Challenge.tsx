type Props = {
  title: string;
  url: string;
  desc: string;
  image: {
    url: string;
  }
};

export default function Challenge({ title, url, desc, image }: Props) {
  return (
    <a
      href={url}
      className={`
        flex flex-col flex-1 rounded-lg overflow-hidden items-center justify-end
        min-h-[100px] relative hover:scale-105 transition-transform
      `}
      target={"_blank"}
    >
      <img
        src={image.url}
        alt="challenge background"
        className="object-cover rounded-lg overflow-hidden"
      />
      <div className="w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.8)] absolute">
        <p
          className="inline-block w-full text-center text-white font-bold text-lg absolute bottom-2"
        >
          {title}
          <br />
          <span className="text-sm font-normal">{desc}</span>
        </p>
      </div>
    </a>
  );
}
