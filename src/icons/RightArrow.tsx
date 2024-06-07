/**
 * @author Goutam Shetty <goutam.shetty@314ecorp.com>
 * @description Right Arrow
 */

import React from "react";

const RightArrow: React.FC<any> = (props) => {
  const { className, ...restProps } = props;

  return (
    <span
      role="img"
      aria-label="RightArrow"
      className={className}
      style={{ display: "flex", alignItems: "center" }}
      {...restProps}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
          fill="#333"
          stroke="#333"
          stroke-width="4"
          stroke-linejoin="round"
        />
        <path
          d="M21 33L30 24L21 15"
          stroke="#FFF"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
  );
};

export default RightArrow;
