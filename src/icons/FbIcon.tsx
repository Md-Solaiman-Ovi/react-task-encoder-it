import React from "react";

const FbIcon = () => {
  return (
    <div className="group">
      <svg
        className="transition-colors duration-300 ease-in-out"
        width="9"
        height="15"
        viewBox="0 0 9 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.51528 14.2291H5.34862V8.5554H7.90145L8.18195 5.73623H5.34862V4.31248C5.34862 4.12462 5.42324 3.94445 5.55608 3.81161C5.68892 3.67877 5.86909 3.60415 6.05695 3.60415H8.18195V0.770813H6.05695C5.11764 0.770813 4.2168 1.14395 3.55261 1.80814C2.88842 2.47233 2.51528 3.37317 2.51528 4.31248V5.73623H1.09862L0.818115 8.5554H2.51528V14.2291Z"
          fill="currentColor" // Use currentColor for dynamic styling
        />
      </svg>
    </div>
  );
};

export default FbIcon;
