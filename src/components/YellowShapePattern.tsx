type YellowShapePatternProps = {
  className?: string;
};

export function YellowShapePattern({ className = "" }: YellowShapePatternProps) {
  return (
    <div
      className={`relative h-56 w-full max-w-md md:h-72 ${className}`}
      aria-hidden
    >
      <div className="absolute right-0 top-0 h-40 w-40 rotate-12 bg-[#f6d86b] md:h-52 md:w-52" />
      <div className="absolute right-16 top-10 h-44 w-44 -rotate-6 bg-[#ffe28a]/90 md:right-20 md:h-56 md:w-56" />
      <div className="absolute bottom-0 right-8 h-36 w-36 rotate-[28deg] bg-[#efc94c] md:h-48 md:w-48" />
      <div className="absolute bottom-8 left-4 h-28 w-28 rotate-45 bg-[#fff3bf]" />
    </div>
  );
}
