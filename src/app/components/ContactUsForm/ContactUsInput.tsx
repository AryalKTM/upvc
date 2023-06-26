import React from "react";

type Props = {
  label: string;
  id: string;
  type: string;
  props?: object;
  name: string;
};

export default function ContactUsInput({
  label,
  id,
  type,
  name,
  props,
}: Props) {
  return (
    <div className="my-2">
      <label htmlFor={id} className="text-lg block">
        {label}
        <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        id={id}
        className="text-lg border-2 border-black rounded-lg w-full p-2"
        name={name}
        {...props}
      />
    </div>
  );
}
