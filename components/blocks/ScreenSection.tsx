import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  direction?: "row" | "column";
  id?: string;
};

export const ScreenSection = ({
  children,
  className,
  id,
  direction = "row",
}: Props) => {
  return (
    <div
      id={id}
      className={cn(
        "w-full h-full min-h-screen flex items-center justify-center",
        direction === "column" && "flex-col",
        className
      )}
    >
      {children}
    </div>
  );
};
