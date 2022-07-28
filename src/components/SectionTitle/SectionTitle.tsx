type Props = {
  title: string;
  className?: string;
};

export default function SectionTitle({ title, className }: Props) {
  return (
    <span className={`text-white tracking-[0.3em] font-medium ${className}`}>
      {title.toUpperCase()}
    </span>
  );
}
