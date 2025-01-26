interface PaymentImageProps {
  cssClass?: string;
  imageSource?: string;
  width?: number;
}

const PaymentImage = ({ imageSource, cssClass, width }: PaymentImageProps) => {
  return (
    <div>
      <img src={`${imageSource}`} width={width} height={5} alt="" />
      <svg
        width="42"
        height="25"
        viewBox="0 0 42 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="42" height="25" fill="url(#pattern0_77_185)" />
        <defs>
          <pattern
            id="pattern0_77_185"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_77_185"
              transform="matrix(0.0333333 0 0 0.056 0 -0.004)"
            />
          </pattern>
          <image
            id="image0_77_185"
            width="30"
            height="18"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAASCAIAAADDkPmOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDRGMjYzQkJEN0E5MTFFQThCODVBNUI3NTk0OEQxMjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDRGMjYzQkNEN0E5MTFFQThCODVBNUI3NTk0OEQxMjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENEYyNjNCOUQ3QTkxMUVBOEI4NUE1Qjc1OTQ4RDEyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENEYyNjNCQUQ3QTkxMUVBOEI4NUE1Qjc1OTQ4RDEyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgzw0cMAAAPsSURBVHjanFRbT1xVFF77MuecmTOUDlgu06EWVIJCihcSYkK12LTRBBMSHzVR342XZ5/8B7wQnvwDfTMYG0iD1cYn08a2xAwRlIFmGBgYZuac4dz2xbUHQ5qUB+nOZO0166zznW+tvddHvHoVAGKKhtmJhZukCq3WmhBCNUMbpKR5rAB9DD+VkzANVPHjfMaY1D5IlbGder1OvCA2qSxEa8dptIpFaAnuCixpox+lTIQqmxAuQINm0uADJXWEBp0CzWNmK6WBNLNOWjQxi5kPnmkh8bb9zz/e2z/zl3EeBIHDHEYtrolhzbQ0HME3HLUtCZeQAgqSaNMuxgxHdgKquEqoFkAktkdiEUAFEdiQWGgrZUkJsQzoWVnr9nrWR8pCGHSMJElCTO/CKJPJkFi0GrXd6l8YLcfu0Njb9BysbTX/2dzsudhf3lOdnZ1XXnO2yvCguFapVEZ63enpiUC6q6u1hrc3MjL06gXIEUZDPHoZ0kRRaXqNcFwp/ECL852dnR9+vjPZ1OPvTi8vLy8tL3/xzVe3bq0MDw9ns9fn5uZ8pQuFgrdVv3ZtYnMzXlhYiJJwdnZ28OZbMVNOuwLOEVbyDMukWErhhaAqe2ko53YcPa6tbDcdAT8+2hq7fkPleiotffXF0bWNym6tMTMzc+PmZL4DCcHiyqM4XYh5+Mfm4ScUHKHSIFQsQg621cGRspTSshzLSkltW7ilUuX9/bt3H8dxPDU1dXh4iO3L5/OXC3RgYABLKa49/PLzjzFtY2Ojr69PqARb5Hmtbk7SDqeWpUSIsJTaAbGOJNOHKvFUl90/3uKD2xX5268P8r0vjeX7wvKTblp75QUodMG3X3966er790r+9z/9fm+9UTyoDVx5XXVkmzLyJBdplogmkKCDEyJ9ioyQtVJmupAIJYDUGo3G3t7e6Oio65JSqeQ4TiZDb9/+pVgsdnd3Yxqe6uLiIlJbWlpaXV31fb9arWLFCIL3mlKKV4UrzTCkqJCRSNsZBvS9Nwbv3/Hw/c/eeTkvo6z3ZOxyb3AU3/+zsrv70LHohyO9kznn79317z76YHzizZofz8/P+9WyF+bTzjkSRjJOU6WI3zowM8URPSWUPMJ4Nru+UXNd92KvzcJof39fOLnzFzLbDWg0wLGg6zy4IRwc+LmerOWCoFAqBf0u5DvTnSrA0VfCNhLU9PDKcSwBe3IsSW0N0s8xSlgonrwRNUpxfOjJg1Pn7f8vbO7xECJuFBk545QBSqdRBoTT+lhvjA+noxN9ujaIJMEzwxshhXBso5f8hPLT9jkWsj7REHQMtBKoXurZxp0VGvvQFqYIe3J8bP8KMADdkDOKPpUwAwAAAABJRU5ErkJggg=="
          />
        </defs>
      </svg>
    </div>
  );
};

export default PaymentImage;
