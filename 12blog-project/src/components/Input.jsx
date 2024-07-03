import React, { useId } from "react";

const Input = React.forwardRef(
  (
    { label, type = "text", placeholder = "", className = "", ...props },
    ref
  ) => {
    const id = useId();
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={id} className="className='inline-block mb-1 pl-1' ">
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
