import type { HTMLAttributes } from 'react';

export type LogoProps = HTMLAttributes<HTMLImageElement>;

export const BrandingLogoIcon = ({ className, ...props }: LogoProps) => {
  return (
    <img
      src="/static/logo.png"
      alt="BEI"
      className={className || "h-6 w-6"}
      {...props}
    />
  );
};
