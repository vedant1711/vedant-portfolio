import type { ReactNode } from "react";

/**
 * Seamless horizontal ticker. Renders two identical copies of `children`
 * side by side and slides the track by -50%, so the loop is continuous.
 */
export default function Marquee({ children }: { children: ReactNode }) {
  return (
    <div className="marquee-mask w-full overflow-hidden">
      <div className="marquee-track">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
