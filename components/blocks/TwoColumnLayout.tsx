import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  size?: "lg" | "md";
  firstCol?: ReactNode;
  secondCol?: ReactNode;
};

export const TwoColumnLayout = ({
  size = "md",
  firstCol,
  secondCol,
}: Props) => {
  return (
    <div
      className={cn(
        "w-full container grid md:grid-cols-2 gap-10",
        size === "md" && "max-w-7xl"
      )}
    >
      <div className="flex items-center">{firstCol}</div>
      <div className="flex items-center">{secondCol}</div>
    </div>
  );
};
