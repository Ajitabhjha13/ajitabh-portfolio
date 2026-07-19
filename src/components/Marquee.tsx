import { Asterisk } from "lucide-react";

/** Infinite scrolling strip of items, duplicated for a seamless loop. */
export default function Marquee({
  items,
  className = "",
  itemClassName = "",
  duration = 28,
  outline = false,
}: {
  items: string[];
  className?: string;
  itemClassName?: string;
  duration?: number;
  outline?: boolean;
}) {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span
            className={`whitespace-nowrap px-6 font-display text-5xl font-bold uppercase tracking-tight md:px-10 md:text-7xl ${
              outline ? "text-stroke" : ""
            } ${itemClassName}`}
          >
            {item}
          </span>
          <Asterisk className="h-8 w-8 text-accent md:h-10 md:w-10" strokeWidth={1.5} />
        </span>
      ))}
    </div>
  );

  return (
    <div className={`relative flex overflow-hidden ${className}`} aria-hidden>
      <div
        className="flex animate-marquee"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
