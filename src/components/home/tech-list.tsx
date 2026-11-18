type TechListProps = {
  items: readonly string[];
  label: string;
  className?: string;
};

export function TechList({ items, label, className = "" }: TechListProps) {
  return (
    <ul aria-label={label} className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-sm border border-border bg-muted/60 px-2 py-0.5 text-[0.8125rem] leading-6 text-foreground/85"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
