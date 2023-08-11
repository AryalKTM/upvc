import clsx from "clsx";

type Props = { 
  className?: string;
  classNameCircle?:string;
}

export default function Environment({className, classNameCircle}:Props) {
  return (
    <svg
      width="82"
      height="82"
      viewBox="0 0 82 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="41" cy="41" r="39" stroke="#FEFEFE" strokeWidth="4" className={clsx(classNameCircle)}/>
      <path
        d="M25 55.8975V52.6975C25 52.6975 33 49.4975 41 49.4975C49 49.4975 57 52.6975 57 52.6975V55.8975H25ZM39.88 35.2575C37.96 29.0175 28.2 30.4575 28.2 30.4575C28.2 30.4575 28.52 42.9375 37.64 41.0175C37 36.3775 34.6 35.0975 34.6 35.0975C39.08 35.0975 39.4 40.5375 39.4 40.5375V47.8975H42.6V41.1775C42.6 41.1775 42.6 34.9375 47.4 33.3375C47.4 33.3375 44.2 38.1375 44.2 41.3375C55.4 42.4575 55.4 27.0975 55.4 27.0975C55.4 27.0975 41.16 25.4975 39.88 35.2575Z"
        fill="#FEFEFE"
        className={clsx(className)}
      />
    </svg>
  );
}
