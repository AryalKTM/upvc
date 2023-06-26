import clsx from "clsx";
import React from "react";

type Props = {
  className?: string;
  id?: string;
};

export default function Section({
  children,
  className,
  id,
}: React.PropsWithChildren<Props>) {
  return (
    <section className={clsx("py-8 lg:py-20 mx-auto", className)} id={id}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
}
