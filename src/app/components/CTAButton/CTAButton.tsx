import clsx from "clsx";
import { MouseEventHandler } from "react";

type Props = {
    onClick?: MouseEventHandler<HTMLButtonElement>
    text: String;
    className?: String;
}

const CTAButton = ({text, onClick, className}: Props) => {
    return (
        <button onClick={onClick} className={clsx("px-5 py-3 bg-transparent border-2 border-white lg:bg-primary text-white rounded-lg font-bold text-2xl")}>
            {text}
        </button>


    );
}

export default CTAButton;