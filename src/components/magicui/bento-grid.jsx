import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BentoGrid = ({ children, className, ...props }) => {
  return (
    <div
      className={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}) => (
  <div
    className={cn(
      "group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-xl",
      // light styles
      "bg-background p-6",
      // shadows & dark mode
      "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      "transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
    {...props}
  >
    {/* Background image rendered absolutely */}
    {background && (
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        {background}
      </div>
    )}

    {/* Foreground content */}
    <div className="relative z-10 flex flex-col gap-3 transition-transform duration-300 group-hover:-translate-y-6">
      {Icon && (
        <Icon className="h-10 w-10 text-neutral-700 dark:text-neutral-300" />
      )}
      <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
        {name}
      </h3>
      <p className="max-w-lg text-neutral-400">{description}</p>
    </div>

    {/* Optional CTA button (you can enable this) */}
    {/* 
    <div className="absolute bottom-0 z-10 flex w-full translate-y-10 items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4 rtl:rotate-180" />
        </a>
      </Button>
    </div>
    */}

    {/* Hover overlay */}
    <div className="pointer-events-none absolute inset-0 z-0 transition-all duration-300 group-hover:bg-black/5 dark:group-hover:bg-white/5" />
  </div>
);

export { BentoCard, BentoGrid };