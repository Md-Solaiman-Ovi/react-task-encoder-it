import React from "react";

const BmwIcon = () => {
  return (
    <div>
      <svg
        width="71"
        height="70"
        viewBox="0 0 71 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect
          x="0.666748"
          width="70"
          height="70"
          fill="url(#pattern0_303_3541)"
        />
        <defs>
          <pattern
            id="pattern0_303_3541"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_303_3541" transform="scale(0.0142857)" />
          </pattern>
          <image
            id="image0_303_3541"
            width="70"
            height="70"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM3ODhENzM0NjU2MDExRUZCRTY0ODhCQTNFOTRBOTVEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM3ODhENzM1NjU2MDExRUZCRTY0ODhCQTNFOTRBOTVEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Qzc4OEQ3MzI2NTYwMTFFRkJFNjQ4OEJBM0U5NEE5NUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Qzc4OEQ3MzM2NTYwMTFFRkJFNjQ4OEJBM0U5NEE5NUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6vxbGgAAAczUlEQVR42uxcZ3hV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"
          />
        </defs>
      </svg>
    </div>
  );
};

export default BmwIcon;
