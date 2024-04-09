import React from "react";
import { Badge } from "../ui/badge";

type Props = {
  title?: string;
  description?: string;
  imgSrc?: string;
  isNew?: boolean;
};

export const ResourceCard = ({ title, description, imgSrc, isNew }: Props) => {
  return (
    <div className="rounded-xl p-4 grid grid-rows-3 bg-muted gap-4 aspect-square group transition-all cursor-pointer shadow-sm hover:-translate-y-2 hover:shadow-lg">
      <div className="w-full h-full rounded-xl row-span-2 relative overflow-clip shadow-lg">
        {isNew && <Badge className="absolute top-2 left-2 z-10">Nuevo</Badge>}
        <img
          src={imgSrc}
          alt="Conference Image"
          className="absolute w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500"
        />
      </div>
      <div className="w-full h-full flex flex-col gap-2">
        <h4 className="font-semibold ">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};
