type Props = {
  data: {
    title: string;
    url: string;
    desc: string;
  };
};

export default function Challenge({ data }: Props) {
  return (
    <a href={data.url} className="flex flex-col flex-1">
      <span className="text-violet-500 font-bold text-lg">{data.title}</span>
      <span className="text-white text-justify">{data.desc}</span>
    </a>
  );
}
