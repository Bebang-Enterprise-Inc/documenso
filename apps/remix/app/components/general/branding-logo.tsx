import type { HTMLAttributes } from 'react';

export type LogoProps = HTMLAttributes<HTMLDivElement>;

export const BrandingLogo = ({ ...props }: LogoProps) => {
  return (
    <div className="flex items-center gap-2" {...props}>
      <img
        src="/static/logo.png"
        alt="BEI"
        className="h-6 w-6"
      />
      <span className="text-lg font-bold tracking-tight">
        Bebang Enterprise Inc.
      </span>
    </div>
  );
};
