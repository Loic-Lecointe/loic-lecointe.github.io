type SectionHeadingProps = {
  id: string;
  title: string;
  children?: React.ReactNode;
};

export function SectionHeading({ id, title, children }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <h2
        id={id}
        className="text-3xl leading-[1.05] font-bold text-balance sm:text-5xl"
      >
        {title}
      </h2>
      {children ? (
        <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
          {children}
        </p>
      ) : null}
    </div>
  );
}
