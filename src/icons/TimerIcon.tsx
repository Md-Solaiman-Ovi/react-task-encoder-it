import React from "react";

const TimerIcon = () => {
  return (
    <div>
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect
          x="0.900024"
          width="19.2"
          height="20"
          fill="url(#pattern0_334_221)"
        />
        <defs>
          <pattern
            id="pattern0_334_221"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_334_221"
              transform="scale(0.0416667 0.04)"
            />
          </pattern>
          <image
            id="image0_334_221"
            width="24"
            height="25"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUJCRkVDRDQ2ODhDMTFFRjg4NEE4QURGRDk2M0JENjAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUJCRkVDRDM2ODhDMTFFRjg4NEE4QURGRDk2M0JENjAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjRFMzlGMkI1N0ZFMTFFRkI3ODI5QjFEQ0YzMjI2N0UiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjRFMzlGMkM1N0ZFMTFFRkI3ODI5QjFEQ0YzMjI2N0UiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5NwOESAAADJklEQVR42pRWS2/TQBB20tSNqAVSTlVDe+EWceJciTtHjvwILkicOCIhJA5ISP0TCKnighAqQhz4A6hRRHmm5N2kjrN+rb02M5tdZ/1qykgjJ97ZmZ1vvpm1FsexVqQnfxeNsrUiW1C9aK3AmBiq8eDCe+sHzIuiOIqF4G945/YvvDfZ/Q5l1s+J81gE1ktPvXDDSawIOg1ZFKKqwVAsNxjhHlzD/xD4tfBn5Jz/GNsP5UYaMgr/H5VB82viPAlYROOMzAhtS58p5xD5iJ8WtDMgB5nsdjp9chufAnNDrmUzcilbJAGk4Z9z9zkuijQTp4hjtoDy//ehfT8uEOkjBZHEeVVoYqjOhqb3HiFT3w1M710Ul8oqgNgYZ0+owmf7oVlmg3o6ch6M5v5ngMfyAuYkNO307TtLJoScCSc9spOBg2die+FMDSCDqLUo0tpeo/5BAzmbunutpqG1dreHWlp0rUTAnsIDVWv35vrSdsOAJxHvDS1KYW818o1nNsoyKO9sO4GvWoEwfhiR5Zmi3Ckr4oSqtHukAVqYGWbSal6jY4t+omHk1fClF0ST+mZV0wqcpWMl0MxEIENACPsYbTVvUAHRrK5Xb+m16hYPAJn4lzjmJ2XQ2MI2Ij6bQLe+hEDP0qf3wLbC7cIwNuFxk/Mf5s543QT9NiD3CMynKNdUcTglwdfOwD5QfSzcYCwLpnRemqLlRST60PSPoX98NRhOWGkjB1+qyXDjGnbADHJzWZ4O7btzJzgbz/0v6mTAAyD/X4kReyTHxNWyMA2kcFGj4R2CPrtT97DCX0LtBEUq7Z7daDW3Z9p/COyB4sbIHgMK311ygdOuwiP+njhPxcUxFIXav+p1qYyNfbW4wqe2GmaiU2FqHiuj2ljv2MIrlpNjZPof0YftsZmAu8Ehws7E5sHbaXOjuml5Yf96vdZcpu+KZmIUWxHaABQBrfIGAzj5FIA9PdizK3xsJVDnpqYYy8j37rn7Yl0GaCN7w/aZqfrKfVVIuLpT51DlN8x3F+9Z/IpAnRJ64i05n4hgo5aF9dLvIaQuNAwru7JwTdK7bBL8E2AApBJJEhe46NYAAAAASUVORK5CYII="
          />
        </defs>
      </svg>
    </div>
  );
};

export default TimerIcon;
