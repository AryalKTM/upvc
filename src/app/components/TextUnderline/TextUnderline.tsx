type Props = {
  children: String;
};

const TextUnderline = ({ children }: Props) => {
  return <span className="underline">{children}</span>;
};

export default TextUnderline;
