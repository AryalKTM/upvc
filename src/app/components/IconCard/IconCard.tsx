import clsx from "clsx";
import React from "react";
import "./IconCard.css";

type Props = {
  icon: React.ReactElement;
  title: String;
  description: String;
  className?: String;
};

const IconCard = ({ icon, title, description, className }: Props) => {
  return (
    <div className={clsx("flex flex-row gap-4 p-6", className)}>
      <div className="icon">{icon}</div>
      <div className="">
        <h3 className="font-bold text-xl lg:text-3xl">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default IconCard;
