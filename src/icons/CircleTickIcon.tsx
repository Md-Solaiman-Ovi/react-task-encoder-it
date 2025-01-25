import React from "react";

const CircleTickIcon = () => {
  return (
    <div>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect
          x="0.0999756"
          width="24"
          height="24"
          fill="url(#pattern0_25_46)"
        />
        <defs>
          <pattern
            id="pattern0_25_46"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_25_46" transform="scale(0.0416667)" />
          </pattern>
          <image
            id="image0_25_46"
            width="24"
            height="24"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJBQzRDMDVENTdGRTExRUZBQ0UzOThDRThFMTFGRjg1IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJBQzRDMDVFNTdGRTExRUZBQ0UzOThDRThFMTFGRjg1Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkFDNEMwNUI1N0ZFMTFFRkFDRTM5OENFOEUxMUZGODUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkFDNEMwNUM1N0ZFMTFFRkFDRTM5OENFOEUxMUZGODUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5XycasAAAFCUlEQVR42lxWbWhWZRi+7uec877v1KXNqE1cQ7I/5TAsUlc0KhuE9cMWWSEj9qPUEeQPobQPIwfRhzRIpaD60366/ZnFUhBpaEYfmCaFBK1J+9OctTm38/HcXc95nzNfd+DiOee8z7nur+u+n1ew7SwWXAGR+fsNEGzh2ko0ENa/N8Rl4hwUg1y/EyM3fCuSPyNcQG78Bke4j1hEDBGHiNEFe1uIJ/2+GeJN4rznKByhf9cjcCaV6CG6iV5iAFVH2ok2osnvHSdOESfzL4BORrCX62fEwWoAorURFFb3E/cT93ljrxM7a4gXXuOesOoMcIxoJN4oOI3Pm/WeO/IOojnPL/COJ3e/p0Tikfp3TbB2P70/R4+b1eomH2mPKp9Ug7Am593e89uJH4lbiNhHKd4R8Z6rXy2MSTWzayQMfqKxdTDBY3z/Q54+1sT4jW/7MPmhOUoU5KUa0tpL5lfVEoljEbOcRr7ykfV6ThiRYANU6hjmQJ5zwRoihpgSofNEYq8b4tvAQippjGVmWtvWri6VQ5NoKncrzB7uOELUE+tpoLQFaobERM7cTgTkCZg6KXNv5O4FARmdKJw9+hcFJdSrwfLkquzZ+gC6HiXXXBzQJPeVtkOYTQkGiU6mKGtlloeqUjRN9M4SkotA2T1a21u0F4VYJAnqkgns6GrHikbIh32Dyq3CemRVgZgHuQ4TdxkNZhpMkI1am7QZ8kZWbJDBp7IQDyEMypKcaSnPjOPlrjaspBxeOXAcf2qzXGMSkU2rUGSidiMDvkTMOoXYvM0TbQoCmsgyDZFIKZvmDxapCWH5xuW9ksWozybx0rYONNLPdw8fxSSDzoQpsrOKyFmxLtaWqkjMYiO2BJMG9JyPWYo4tVi2JEL3461YvWgKoUbQdDEawhKWJVfQ88xDWLUS2P3BCVy8toIar1SVTt+RKUWV0Jc5FwWFYFkpDY3Su9DkXQlTVycT/13Rm+sr2L1jE5bGk7gV/6Iy9Tde2PowmleFeO/wMKaC5eS7ialztbIuwup404wR6yibLMqgM8bAXlbNWlKTnkqFP87FJo2W4uP+Ezo6Bnz6ajvuKV/ErufX4847gF0HTuCPpJEzgApLp4u5ph5iWCfidAppTkXKThquzZ9ghCep9HFW0sCUVZY04pP+43r+t6v4qO9ZNNxWQW/f17hCeV/LKkhnOUBDx2l9r1DDagJmhG6ZERajg1wXAl27fZo7XmSE/Wop5MA8wjCTNE3CmF6e+X0UP4/VS//wWUwkZSSm7PqFoCBcI7rcV7ND+bgG0PdV9FuS97IQB0W6foGfhF9yPA24wcX7NcWoyN1T1fnxIFLTz8ZpUGrGCs8Dy7lmO2ngOT4/Xcyit4i9/n4zMZGTWycJVtBxEBIYnR90zqYzrCYmSG7/YVE2Q1KGlr6WH0TUUDGundefE98QfxHriF8ZTeTyEJVKecdxalIY6lCMa5JR52Kd5/dy5bd2uMrFd+zZ4og0/uA44w+NSz5NLqqxJI4DP7bZzlKAs0dZ0JSHUtqaf6PmGIs8kh+xeSRxVtQgz647Iuj1DUeml4ibLRv9OQx/Pp8mRpzueT1FcpeWL+j1IVcYGsgnY60B9gtHFnvbe+/m+RLuGvSpG/Onmbsif+p1UKVbSDpFsn15kZ3MeUDMe73AADtFav+2rKeBTjcViVlisS+y+xdBveICDRwh6fd5SZhzrllRHnf9L8AAQa4XoK07V9cAAAAASUVORK5CYII="
          />
        </defs>
      </svg>
    </div>
  );
};

export default CircleTickIcon;
