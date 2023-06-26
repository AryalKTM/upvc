import clsx from "clsx";
import React, { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

const Title = ({ children, className }: PropsWithChildren<Props>) => {
  return <h2 className={clsx("font-bold lg:text-4xl text-center text-xl", className)}>{children}</h2>;
};

export default Title;
