import React from "react";

const RightArrowCircleIcon = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 -right-14 hidden cursor-pointer md:block"
    >
      <svg
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.563 11.3587L24.4358 21.1413L25.645 20.0978L17.7723 10.3152L16.563 11.3587Z"
          fill="white"
          fill-opacity="0.8"
        />
        <path
          d="M17.774 10.3152L25.6468 20.0978C26.3191 20.9326 25.1099 21.976 24.4375 21.1413L16.5648 11.3586C15.8925 10.5239 17.1017 9.48038 17.774 10.3152Z"
          fill="white"
          fill-opacity="0.8"
        />
        <path
          d="M17.7723 30.9239L25.645 21.1413L24.4358 20.0978L16.563 29.8804L17.7723 30.9239Z"
          fill="white"
          fill-opacity="0.8"
        />
        <path
          d="M16.5648 29.8804L24.4375 20.0978C25.1099 19.263 26.3191 20.3065 25.6468 21.1413L17.774 30.9239C17.1017 31.7587 15.8925 30.7152 16.5648 29.8804Z"
          fill="white"
          fill-opacity="0.8"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.3182 1.86951C10.3182 1.86951 2.21091 10.2646 2.21091 20.6195C2.21091 30.9744 10.3182 39.3696 20.3182 39.3696C30.3181 39.3696 38.4255 30.9744 38.4255 20.6195C38.4255 10.2646 30.3181 1.86951 20.3182 1.86951ZM20.3182 0.239079C9.44752 0.239079 0.636364 9.363 0.636364 20.6195C0.636364 31.8761 9.44752 41 20.3182 41C31.1888 41 40 31.8761 40 20.6195C40 9.363 31.1888 0.239079 20.3182 0.239079Z"
          fill="white"
          fill-opacity="0.8"
        />
      </svg>
    </div>
  );
};

export default RightArrowCircleIcon;
