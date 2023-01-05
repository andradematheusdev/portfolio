type Props = {
  title: string;
  url: string;
  desc: string;
};

export default function Challenge({ title, url, desc }: Props) {
  return (
    <a
      href={url}
      className="
        flex flex-col flex-1 rounded-lg overflow-hidden items-center justify-center hover:scale-110 transition-transform
        bg-[url('/images/bg.jpg')] bg-no-repeat bg-center bg-cover min-h-[150px]
      "
      target={"_blank"}
    >
      <span className="text-white font-bold text-lg">{title}</span>
      <span className="text-white text-center">{desc}</span>
    </a>
  );
}
