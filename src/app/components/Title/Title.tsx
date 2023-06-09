import clsx from "clsx";
import React, { PropsWithChildren } from "react";

type Props = {
  className?: string;
};

const Title = ({ children, className }: PropsWithChildren<Props>) => {
  return <h2 className={clsx("capitalize", className)}>{children}</h2>;
};

export default Title;
