interface ISectionTitleProps {
  title: string;
  className?: string;
};

export const SectionTitle = ({ title, className }: ISectionTitleProps) => {
  return (
    <span className={`text-white tracking-[0.3em] font-medium ${className}`}>
      {title.toUpperCase()}
    </span>
  );
}
