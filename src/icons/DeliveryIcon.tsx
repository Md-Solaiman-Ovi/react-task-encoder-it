import React from "react";

const DeliveryIcon = () => {
  return (
    <div>
      <svg
        width="33"
        height="26"
        viewBox="0 0 33 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect x="0.899902" width="32" height="26" fill="url(#pattern0_25_37)" />
        <defs>
          <pattern
            id="pattern0_25_37"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_25_37"
              transform="scale(0.03125 0.0384615)"
            />
          </pattern>
          <image
            id="image0_25_37"
            width="32"
            height="26"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAaCAYAAADWm14/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTE5N0M1Qjg1N0ZGMTFFRjhBMjM5Q0M2MzdDNjA0NDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTE5N0M1Qjc1N0ZGMTFFRjhBMjM5Q0M2MzdDNjA0NDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUVBN0U2QjE1N0ZFMTFFRkI2ODI4M0RGMzk5MDNFRkMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUVBN0U2QjI1N0ZFMTFFRkI2ODI4M0RGMzk5MDNFRkMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7f/D75AAAGH0lEQVR42sRXe1BU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"
          />
        </defs>
      </svg>
    </div>
  );
};

export default DeliveryIcon;
