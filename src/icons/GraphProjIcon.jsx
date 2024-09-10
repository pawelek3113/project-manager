export default function GraphProjIcon({
  color = "white",
  width = "64",
  height = "64",
  ...props
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      {...props}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M19.9497 17.9497L15 13H22C22 14.933 21.2165 16.683 19.9497 17.9497Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M20 10C20 6.13401 16.866 3 13 3V10H20Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M2 12C2 16.4183 5.58172 20 10 20C12.2091 20 14.2091 19.1046 15.6569 17.6569L10 12V4C5.58172 4 2 7.58172 2 12Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
}
