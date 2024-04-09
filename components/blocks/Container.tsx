import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
  className?: string;
  size?: "lg" | "md";
  id?: string;
};

export const Container = ({ children, className, id, size = "lg" }: Props) => {
  return (
    <div
      id={id}
      className={cn(
        "container relative overflow-clip rounded-xl p-16",
        size === "md" && "max-w-7xl",
        className
      )}
    >
      {children}
    </div>
  );
};
