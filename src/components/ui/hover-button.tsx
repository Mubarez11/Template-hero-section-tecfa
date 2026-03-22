import * as React from "react";

export interface HoverSlatButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  initialText: string;
  hoverText: string;
  variant?: "light" | "dark";
  size?: "sm" | "md";
}

const HoverSlatButton = React.forwardRef<
  HTMLDivElement,
  HoverSlatButtonProps
>(({ initialText, hoverText, variant = "light", size = "md", className, ...props }, ref) => {
  if (initialText.length !== hoverText.length) {
    console.error("Initial and hover text must have the same length.");
    return null;
  }

  const isDark = variant === "dark";
  const isSmall = size === "sm";

  return (
    <div
      ref={ref}
      className={`group flex cursor-pointer ${className}`}
      {...props}
    >
      {initialText.split("").map((char, index) => (
        <div
          key={index}
          className={`relative flex items-center justify-center overflow-hidden font-bold uppercase tracking-wider transition-all duration-700 ${
            isSmall ? 'h-10 w-8 text-xs' : 'h-14 w-10 text-sm'
          } ${
            isDark 
              ? 'bg-white text-black' 
              : 'bg-black text-white'
          }`}
        >
          <div
            className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
              isDark 
                ? 'bg-black text-white' 
                : 'bg-white text-black'
            } ${
              index % 2 === 0 ? "translate-y-full" : "-translate-y-full"
            } group-hover:translate-y-0`}
          >
            {hoverText[index]}
          </div>
          {char}
        </div>
      ))}
    </div>
  );
});

HoverSlatButton.displayName = "HoverSlatButton";

export default HoverSlatButton;
