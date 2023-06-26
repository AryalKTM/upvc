import clsx from "clsx";

type Props = {
  children: String;
  className?: String;
};

const TextUnderline = ({ children, className }: Props) => {
  return <span className={clsx("underline decoration-primary decoration-[10px] underline-offset-[10px]", className)}>{children}</span>;
};

export default TextUnderline;
