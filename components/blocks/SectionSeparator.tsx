import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  size?: "md" | "lg";
};
export const SectionSeparator = ({ size = "md" }: Props) => {
  return <hr className={cn("border-none py-10", size === "lg" && "py-20")} />;
};
