import React, { ChangeEvent } from "react";

type Props = {
  value: string | number;
  label: string;
  isDisabled: boolean;
  options: { value: string | number; name: string }[];
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void;
};

const Dropdown = ({ value, label, isDisabled, options, onChange }: Props) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <label
        htmlFor={label}
        className="ml-1 text-xs font-semibold text-gray-300"
      >
        {label}
      </label>
      <select
        disabled={isDisabled}
        id={label}
        value={value}
        onChange={onChange}
        className="cursor-pointer rounded-md bg-gray-700 p-2 transition ease-in hover:bg-gray-800"
      >
        {options.map((item) => (
          <option key={item.value}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
