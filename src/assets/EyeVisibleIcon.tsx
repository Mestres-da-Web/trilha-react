import { SVGProps } from "react";

function EyeVisibleIcon({
  fill = "#a5a5a5",
  ...rest
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20.015"
      height="15.38"
      {...rest}
      viewBox="0 0 20.015 15.38"
    >
      <g id="Group_401" data-name="Group 401" transform="translate(0)">
        <path
          id="Vector"
          d="M2.33,4.66A2.33,2.33,0,1,1,4.66,2.33,2.326,2.326,0,0,1,2.33,4.66Z"
          transform="translate(7.676 5.36)"
          fill={fill}
        />
        <path
          id="Vector-2"
          data-name="Vector"
          d="M10.006,15.38a11.406,11.406,0,0,1-8.77-4.22,5.488,5.488,0,0,1,0-6.94A11.406,11.406,0,0,1,10.006,0a11.447,11.447,0,0,1,8.78,4.22,5.514,5.514,0,0,1,0,6.94A11.447,11.447,0,0,1,10.006,15.38Zm0-11.52a3.83,3.83,0,1,0,3.83,3.83A3.834,3.834,0,0,0,10.006,3.86Z"
          transform="translate(0 0)"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EyeVisibleIcon;
