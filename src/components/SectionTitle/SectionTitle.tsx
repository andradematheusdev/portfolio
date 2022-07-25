type Props = {
  title: string;
  className?: string;
};

export default function SectionTitle({ title, className }: Props) {
  return (
    <div
      className={`flex flex-col w-full text-4xl items-center justify-center font-bold h-[80px] mb-16 mt-16 ${className}`}
    >
      <span className="text-white border-b-2 border-violet-700 pb-4">{title}</span>
    </div>
  );
}
