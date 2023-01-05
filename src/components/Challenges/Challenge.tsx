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
        flex flex-col flex-1 rounded-lg overflow-hidden items-center justify-center hover:scale-105
        transition-transform min-h-[150px] p-2
      `}
      target={"_blank"}
    >
      <img
        src={image.url}
        alt="challenge background"
        className="object-cover rounded-lg overflow-hidden mb-4"
      />
      <span className="text-white font-bold text-lg">{title}</span>
      <span className="text-white text-center">{desc}</span>
    </a>
  );
}
