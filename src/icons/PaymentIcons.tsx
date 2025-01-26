import React from "react";

const PaymentIcons = () => {
  return (
    <div className="flex items-center gap-4">
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
      <svg
        width="42"
        height="25"
        viewBox="0 0 42 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="42" height="25" fill="url(#pattern0_77_187)" />
        <defs>
          <pattern
            id="pattern0_77_187"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_77_187"
              transform="matrix(0.0333333 0 0 0.056 0 -0.004)"
            />
          </pattern>
          <image
            id="image0_77_187"
            width="30"
            height="18"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAASCAIAAADDkPmOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUI3RjE3QTNEN0E5MTFFQUJERTU5QUM3MTgyREM5MTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUI3RjE3QTREN0E5MTFFQUJERTU5QUM3MTgyREM5MTkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQjdGMTdBMUQ3QTkxMUVBQkRFNTlBQzcxODJEQzkxOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQjdGMTdBMkQ3QTkxMUVBQkRFNTlBQzcxODJEQzkxOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Picn7QUAAAStSURBVHjaPFVLbxtlFL3fa15+1DFOSwytF21JaUtoFlRZgNjApkIIZQf/jrJhm0oEEDsKEi2FTUUhUKWp3bzaOLFde17fizNOYTQazeP7zj333HPvMEYUCgosEXFDnBGzpEMlOlwkznebrVqt9vTwYOL1mFtrqBk3r15efuOc9N73d9PHg4P96cSQL00RhLzUjoBo6yoMGYvIa+Iu4N4zMnh6h9Gyp097vSVSCyo0tuCJejLef7A3WrhCH33RbbQRL5mVeRgt7OzlX23++sN9epbRjJFTEVlL3JNzgjxVcRz4esm5Inf9bOvj1ZU3VdSSQYBvzMsoKIW7tHr+2s2rF96uIzdjdBhHeWFVtHDtvZW4VX/4995LDQhVQZOjIBDVXiLJpfB2ydtbtfpn7dbN6aiXnrQpp/R5nRVJMG7ERxd7eUSDRBc1xbjXws7q6jjmBwt8fOV8rb89ebFfFsZI72JgasNpflhrOfGYh91ud3FxMQxDvNRax3HMGJtMJp1Oh88P3BP2zw+HrIWA6Liur697TwDBqZ0XKB0Dd8eQBs5lZ24w1Rse15wruWdKGFudtSgJGNakSZFFk5TGE0s5J82FY65UdtrWz5e72Y0rPBTOQWYKCh5yIZj1nhODJpZskiSgk2UZiJRlievpIwlBUiI5cCQGCQHgkBZyQip4jxtkLMS8cNVHx70TqGgmaBTanESuWOl9GCWKJHle5cjhzaCCzriXRJHXPHMSYQ2ck5OGHCRiZyKXxqYELndU6cGdd5XY3jvtwHo6nZ5SqMLi63/UHOouRBAEWoO9/L9CpysNHKP1zs6On78XTEAD7jmDn4mDoxgQPRxNB3HzqPDGKc8iJhRYGM1nL2HOpWzW4I2aETEvZCNq+hy8ZCGTUdy9/3i6NdSplCXjRhRaunl8aAfpwZGov98/YrZXiwm5ERVFAXGDJBiNRkHdhedC2Qyo0RCBS9MUScws7GDSPN3c/CmDr8W8TaCj93CQBWlDijn2TEW7Lh+W4yedeEXVeyaSaYFKsmb4pBjeLeWFevfyhaSgiQgroSQ7Y6jTH/rbd+59/6efcXSeJSXgvsjm4pWxSVbTwxnIo9DCh8fx+KhWUk0qqHn08mRrb+fnf4Z/be9o//TsUtu4yjzHx9Mf7/7+5dcPfvtjNCVe0lzquUVYNUsCiRYgBh9UtYqEEt4paC9YPYrLPJdU2QtbTJHDVbmsHhfPvg7ow6MXaZqJQBWFTpoNqDcrylfo1UWwSmuYFS3EeKveuLb8lsmK54f77eaZQII2V0qtra19c2djaWlpb3qCdhUyePTo0fV3V7a2thY6HUzH2pnW5rffYSlqYzAhoQM5P8fn1jvrLYKzUN365Nbus3673Wbzdrh3/5dR6D/4fD2KorUo3tjY6HYXbn74/sVLl+uvtYejk9XV1cFgV4XKAKIaTxRGUeUQkNJFCU2jIDw4OLC66Pf7SnIAxUmCoZEX2XA41NZittiiHAwG2IKVe/sH29vb6AdIcXw8KjGt/RzNGnQyAJmvjCJh++p3UMnqYJ75pOEOUjnH0G/oKrLVr0LPa+WqxoDsp41T2RsDR1slFXYhEmD/FWAAiH6d8CpbrPIAAAAASUVORK5CYII="
          />
        </defs>
      </svg>
      <svg
        width="42"
        height="25"
        viewBox="0 0 42 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="42" height="25" fill="url(#pattern0_77_188)" />
        <defs>
          <pattern
            id="pattern0_77_188"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_77_188"
              transform="matrix(0.0333333 0 0 0.056 0 -0.004)"
            />
          </pattern>
          <image
            id="image0_77_188"
            width="30"
            height="18"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAASCAIAAADDkPmOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjVGNzQwODdEN0E5MTFFQUFBRDBCQjBCMzEyRkQ5NDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjVGNzQwODhEN0E5MTFFQUFBRDBCQjBCMzEyRkQ5NDYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNUY3NDA4NUQ3QTkxMUVBQUFEMEJCMEIzMTJGRDk0NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNUY3NDA4NkQ3QTkxMUVBQUFEMEJCMEIzMTJGRDk0NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkmS0wYAAASDSURBVHjaVFRLj1RFGP3qdV/d0zAPWjDgA4Zp8DFAxggYE0mID1i7MIaY+Ed065pg3Lt1NHEpMUFcYQyBIDKyYcGAQ8aZbuzHfdTTU93RYKVzb3Xdqq/Od77zHTYYDYlIsIAnBYcHYx5P42yWtiptWMgq4znLfeBpSsGTrUuhrFJMcm+tVSIxxjDGOOc26BBCu2j1+302mEywJCmIwFgwgaxnHvtIyEkd0rwzHprPP/vi1s17CZ9rmmZ+MX1z7dVLn3z4wsF9nFWKODY754JIvfeOUZ7ntW5wGcclwIjo7JlB05EkCXYjHCA004HF3d3dq1evrq+vK6WEEDiIuFLKWRAslmU5m0jpOA+MJANoF1QISIAiEE2cJJdiuFMPdksQUmvbNK5qzVWVvPlgZ7vmRZZJaxTwEgNd8RrjGSnOZKMrTv+OMB2zOUIDCCBjYTQaAQigVVWltcZ89unGjV+wDehm+2e04BMm+CrjzMU6+OnnIOJNkvFg8JenQnhPWzvDp46XaVEmnX5ZU7sAm8nhow8bN1SysS4ViuM8JxGEISuERXBkHaPjNqESEKd1ZNMGn6nM2phBXdPm5iayAe+d+e6BvCX3dubn54Uwy8vLKMpUGMwZg+PPEhAhaqezLNOhIktcEBI0VW20UTI3jWSKbt7f0J323KEjxYvL2LlQ/tnNxq/0Xlo72u2QRdKh1q08NyZKNoBzFlP35OXsHgDHMWuhGaMif8pohyKXmra2tqCN/a1WXhTA++lHH+xh5XNLRaIIogZlCdAYA5T0zABwaIBZb5Ikg7ida2JeniqDlQRl88SN7u9fzJ/fy5zvn3r58PF9YSEtyDuaVHNKcMFd7Z1DQZnj5DibVlUGCK4sx1GSqQI0IaIwQmOybM4hBc3Hxj/sD0c8/frb7weeX7x48f1eJzGavEmDV84kXCiRB88tWpmTjQWNwzeeNVUNraCnvOMySZAjKoNrILVud3E4rrIsB/jdp0Pj7d6lhb4AewQlL2YEQeA39QVQi5fzoo624YNrNJuMxuAWTYPQLoQsU+Dh8uXLjx496vV6H1+6hFR5ohrrizk1GJlvfroGaZ9YOXqyt9KGQdTm52vXL1x4d4r3f6FlAAiPBgRpUYVNDRPhv997cPrMW3fv/rH+3Y91Xa8cO/b48eNjx4/fvn37gXdnz5799f7GX55X5RC0VNJsS18QS4krmzFvoLRAnv9nILMWgrc9efJkMpl0u93z58+j/dI0BTkbGxtXrlxZXV1dWlrCEYh6e3sbUGAvqPysG0HmjGhMouV5ctbT1JLCVHuiaSbvnHv73ffO7ewMvvzqervdPn3m1ObD7tobrx06eOC0bdZWDg3+Hv/w260Q3Ou9I3vyfAHBjRVMwIBc4MSiENlw1McrGpXIrEMXCRhiCCIv5GTiOSzZRxR37txZPXmCMxGyWEah4hO/JCXSXqC/nU+YUCxuZjL6CRtPBlEhUeViil3Ck7CinS+KAsYbWzaJTYHEwRjX0eJsjAC7iJ6MNfSgCB57sAHbJmXtBftHgAEAukm8IG6JY6sAAAAASUVORK5CYII="
          />
        </defs>
      </svg>
      <svg
        width="42"
        height="25"
        viewBox="0 0 42 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="42" height="25" fill="url(#pattern0_77_191)" />
        <defs>
          <pattern
            id="pattern0_77_191"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_77_191"
              transform="matrix(0.0333333 0 0 0.056 0 -0.004)"
            />
          </pattern>
          <image
            id="image0_77_191"
            width="30"
            height="18"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAASCAIAAADDkPmOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDE3OTJDNEZEN0FBMTFFQUExOEQ5Q0VCRDk2RDI5M0MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDE3OTJDNTBEN0FBMTFFQUExOEQ5Q0VCRDk2RDI5M0MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMTc5MkM0REQ3QUExMUVBQTE4RDlDRUJEOTZEMjkzQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMTc5MkM0RUQ3QUExMUVBQTE4RDlDRUJEOTZEMjkzQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmgZvuwAAATISURBVHjaJFRJb1tVFL7jGzwkHuI4TkMTkalUBUETqaWlqkQ3sOiCDSzYsmWJxJ9hXVVIwBZVSLCgggItJZSSkjZR06aJHcfx87P9hjvwvee7sM+794zfOd+h731+ixKhjHYcJ1GplDLVGr/a4F9zwnGM0tZaSjmlVFMS6ZRLL4qiRpEnSaINoY5QxCqlXJkKkhity8yIUWkmM9BxwnmkIsaY1pRzJkgZ7ggheKWSZIca/LiuO+6F3K04Zec47AqvRDmBU0Utc5gxRCepYIQRylR+4CV7zQ+8Tz4h4BOCMZlTXEKI49j3fchpmuISN0gfapNX3KB6IQRqFQXbJ5ZQm9ZnKtYoXEXDMEOBCikySxzBUZY2RrmesHGIkIpOAQq3nMUjksRxKB030eJ0YCiRcZzETAgkVSqVqtP1929c58z4vvvqxUvklcYKSvCIFKRgg8EArqu1KbhutVr/7XWr1WoU9hcWGvuHbfSmWCof90Y//PjbSTdAYowy4TCajkfXPrjx6I/7lOnrV9998vD+Rzdv3r37C/BHscvLywtnF+5tP2y15vb+ehAkY8fJ6knHYefgxTg4PeocIPzC2df0WElOUmop3oXI0ARAQRD0er3Dw8Otra3Nzc3bt79eXFwcj8eID6HRcBGjXC5PMEWhKyvz7Xa72+3u7Ozgd2NjY3t7G+hDoVAowAo6fPbqJ7JQpNK9cu3KxttvbG/vn1tbbzZnl15vxtGQ0nR390kUq1p9emFxPptBz11eW7/3+wNt1eVLF+dbs6dB7/LGWv94MD/bfPaic9Q7VRbtI/TSl98gQrMxY1XsElKdLqlo4Ds8VaOiK6g1KHY4HCKX9nGnXm8GBv2kRmeTcLD3tDXb9Is+SfUohE7531ejwLDEZmMmxlQa5h6dJJJwppOjdrs+7Xz82Yf9k5FJw3LJPTg4aLZao2HCqFOpVEajYwBVaVQxhZy+4zJxGoyEFQXfDfqji7L21a3vXH8aAAoAnfPNJEpJogVjsGm304P93Uat+M+jPxE/CMNhGC8trty5c6de9zEhaEmn07lw/pywdOfZ89Wl1aDfOzrs1pZK0EeVLJ9QFmPapWu5E2kmZEFDcmQQ9odxUGuUo3TQnKvt7j3Zfvr4/JsXei+D7v5p1a0wTfefv/RK5el649eHW05xynDn+59/SjgxoKMjeOPap4DFaisIlZwRlRZ8ceXSKpgihW3MVJHjeBytrq6Hw3GtNvPWufNnzpyRnihNlTzfq9VqxtLmbKvZaKSpnl9Z//vxDmFORuvNL77lzAE1JixHS32/ODc3B4KACMNhCGRr9QoidbudYrFYKJSAoRLjDEntckNERm8yImPuOr3QPTk5EcO4rI2YLAcy2T/5QQcw4Eol+dpSuB+E/VzHhGFISCfLIHctjAfX0mbMiFiMpZjYGkD2wBerhGVSwyh7tRTmzEOCg1ECjTycxPChsZAKRS8jEXMxtOhHFsB6NmNRnnWcSs8Vnou6h2YkZSJsfiY0yxY01ooQEKCdNVkpcAw3+JyQbVLixArbC2FYDgjWTqKVzQ0nG1H4pAcKoALGnczYxgxJGfjFvuOGG1xK7mJAs0HGSePcMncBahjC86wVibhKqbYZICwtsuH/AgwAcvbh70Y+cXkAAAAASUVORK5CYII="
          />
        </defs>
      </svg>
      <svg
        width="42"
        height="25"
        viewBox="0 0 42 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="42" height="25" fill="url(#pattern0_77_192)" />
        <defs>
          <pattern
            id="pattern0_77_192"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_77_192"
              transform="matrix(0.0333333 0 0 0.056 0 -0.004)"
            />
          </pattern>
          <image
            id="image0_77_192"
            width="30"
            height="18"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAASCAIAAADDkPmOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MERENkI1QjJEN0FBMTFFQTkwMTA4NTlCQkY0NzM1RUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MERENkI1QjNEN0FBMTFFQTkwMTA4NTlCQkY0NzM1RUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowREQ2QjVCMEQ3QUExMUVBOTAxMDg1OUJCRjQ3MzVFRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowREQ2QjVCMUQ3QUExMUVBOTAxMDg1OUJCRjQ3MzVFRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnHC7F0AAAT2SURBVHjaZFTNax1VFL/fM/PmvbyP9pGPJiRNmpikxRqkqVUobUTIwpUWdFGIC7Eb/wBdC4I7xVXBjdAWFQSpQsGlHwtLFyaCSYtJbeuryctLJpP33szcuV+eaXf2LobLnXvO+d3f+Z0fnrhyPUVGWamRyxQRvKJyQwixTsOXSccYc1gbYzDDluI+wk7rkCM4sV5Za13KMs55F2mMcQlhnCkqaLMSskfStx4ES+QcIgQ5SmjKOE9tQ2rNy0UAk75ySkM5qzzuCKbE+tagXDKEywlHVmta9qCMsan1bGJslFCCni6MEWO+7wNSSqlSCjJCMSWltRaAl0ol+Cs8zzkXBAF8AWmBxhj46wUBXEO2WJCB8GIx4qXYlJBh1GFB+hW9N107yPO8leVwJ6juCEyxChgNH0SdcrlcO6qDINk/qLfbj6YHOJTc0XnctVwOAyrEqTK51bmllBWFjBHUw8bBFoIXFo5DwK3be/CY995/K2p30thNHj/++Zc3Ll68eO6VYUrR6h/o6tUvzp49s7x8+pf1/RtffW8VLthHmlJoEaQ1xHMYXiQRyjnNmdjJXRTvT01P1tA/c8NmYay8u7F2apQO+tGRkCxfGN7d3P34g09+uvltHctLZ0ZO19DrJxs18zeFrIzkrJRiYTE2rEcAKdDved7TDSDd3Nw8cWJsbm5ufn4+y9Dq6moYhoBoe3s7jtHUVPPy5cudTmdkZGRwsHnr1q+NGqpWq+iZVTTNsVyaDiJ9KwJpG+vJsa0IvfDS9IXlk1//uBWxqbDk7+/tyij76MPPHv5+9/ypY2++Ov/G0pzg6v7WWtmgc8OTiO8ENi3lNpCYayHyGgGkILWiChAPzEgJ3btzZ+P5kxNSorW1tUqlUquF8JTl5eXFxcV2uw26gMPFxVnf5ysrKyClmZmZZ1EzTUAzGGFeSN4T2HOHyv22/vj8/uzW1uP1GA0NNe/togeH4cTk5IszA5ajH9ayf5Ow2kHXv/u51WqtXHo7DoZzIBunxElsHUKGIou9K9ekA4UahAB7UGKeSfYbQTZU3gN+N7qDAHDcPIDHSVX2y2Fq0263W69VoDetgx7ot8YDUNRGL0PWI44Q0LrTHMMYZ0rQAaUx8Xhiu4mL6n46NzpaoU1ozsHd+0lvd9swQkTOzWA16LYTwsP+Xgy9rYumovzAqtahpnYgx55mfsGFzgKVMWijgUFCxQTy+oDKJLCztLREZQK49kR5dnb20b318fHx1b/+fO21l+/c3lg4NZt19qIo6unwudPDBwn69Oo1kPT/FZKxgQSrnKeY9kUSi35OUKWT881Yb0s83jx6JBBZljWbtf3W9u7Dg/TQtFo9TMO4q4ZGG5lEmCLiEsp6zPWRAfk6hG2Oc4ze+Qb4Ap/DRsHYY5MjrU9MjCEtOXFx1KnX65lMYfQhBRhLKhlQ4foR8BurjJd8y9nDxzvKEC4aCamCqyCbBbqP0bs3QXNaSVC4hWaCslzhVpziwnGKLbYAC5bKaRAYmYJMfVscQDWXaVEdyFMtGCeYZxACAYUXtcFFnVbqiawLVIUSC2stPE8I8dTFCssGv/Y8iBKlEi7MjcAeLBCKFa4rhHuyCluGGVSqGJcxHGswd3DiRLniPnYO8BLKaBp1wUlNZoC8EtiaEypVSORUa+CPU09nVsCzsl5IOVEp1INGQS5s40aQ/ifAAEt1xSVHm5mNAAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>
    </div>
  );
};

export default PaymentIcons;
