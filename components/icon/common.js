import Svg, { G, Path } from "react-native-svg";

export function SearchIcon({ size = 20, color = "#8b8b8b" }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20">
      <Path
        d="M18.363,19.091a0.729,0.729 0,0 1,-0.517 -0.213l-4.174,-4.174a7.791,7.791 0,1 1,1.032 -1.032l4.174,4.172a0.729,0.729 0,0 1,-0.516 1.248ZM8.701,2.37A6.333,6.333 0,0 0,6.238 14.535,6.333 6.333,0 0,0 11.165,2.867 6.275,6.275 0,0 0,8.701 2.37Z"
        fill={color}
        stroke={color}
      />
    </Svg>
  );
}

export function GridIcon({ size = 20, color = "#666" }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20">
      <G>
        <Path
          d="M9.111,2.037A0.37,0.37 0,0 0,8.741 1.667L2.037,1.667A0.37,0.37 0,0 0,1.667 2.037v6.7a0.37,0.37 0,0 0,0.37 0.37h6.7a0.37,0.37 0,0 0,0.37 -0.37ZM8.367,8.367L2.408,8.367L2.408,2.408L8.367,2.408ZM8.367,8.367"
          fill={color}
          stroke={color}
          strokeWidth="0.6"
        />
        <Path
          d="M18.333,2.037a0.37,0.37 0,0 0,-0.37 -0.37h-6.7a0.37,0.37 0,0 0,-0.37 0.37v6.7a0.37,0.37 0,0 0,0.37 0.37h6.7a0.37,0.37 0,0 0,0.37 -0.37ZM17.593,8.367h-5.963L11.63,2.408h5.963ZM17.593,8.367"
          fill={color}
          stroke={color}
          strokeWidth="0.6"
        />
        <Path
          d="M9.111,11.259a0.37,0.37 0,0 0,-0.37 -0.37L2.037,10.889a0.37,0.37 0,0 0,-0.37 0.37v6.7a0.37,0.37 0,0 0,0.37 0.37h6.7a0.37,0.37 0,0 0,0.37 -0.37ZM8.37,17.559L2.408,17.559v-5.926L8.367,11.633ZM8.37,17.559"
          fill={color}
          stroke={color}
          strokeWidth="0.6"
        />
        <Path
          d="M18.333,11.259a0.37,0.37 0,0 0,-0.37 -0.37h-6.7a0.37,0.37 0,0 0,-0.37 0.37v6.7a0.37,0.37 0,0 0,0.37 0.37h6.7a0.37,0.37 0,0 0,0.37 -0.37ZM17.592,17.559h-5.963v-5.926h5.963ZM17.592,17.559"
          fill={color}
          stroke={color}
          strokeWidth="0.6"
        />
      </G>
    </Svg>
  );
}

export function ListIcon({ size = 22, color = "#666" }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 22">
      <G>
        <Path
          d="M20.625,3.666L5.958,3.666a0.458,0.458 0,0 0,0 0.917h14.667a0.458,0.458 0,0 0,0 -0.917Z"
          fill={color}
          stroke={color}
          strokeWidth="0.5"
        />
        <Path
          d="M20.625,10.274L5.958,10.274a0.458,0.458 0,0 0,0 0.917h14.667a0.458,0.458 0,0 0,0 -0.917Z"
          fill={color}
          stroke={color}
          strokeWidth="0.5"
        />
        <Path
          d="M20.625,16.882L5.958,16.882a0.458,0.458 0,1 0,0 0.917h14.667a0.458,0.458 0,1 0,0 -0.917Z"
          fill={color}
          stroke={color}
          strokeWidth="0.5"
        />
        <Path
          d="M3.209,15.048a2.292,2.292 0,1 0,2.292 2.292A2.294,2.294 0,0 0,3.209 15.048ZM3.209,18.715a1.375,1.375 0,1 1,1.375 -1.375A1.377,1.377 0,0 1,3.209 18.715Z"
          fill={color}
          stroke={color}
          strokeWidth="0.5"
        />
        <Path
          d="M3.209,8.441a2.292,2.292 0,1 0,2.292 2.292A2.294,2.294 0,0 0,3.209 8.441ZM3.209,12.108a1.375,1.375 0,1 1,1.375 -1.375A1.377,1.377 0,0 1,3.209 12.108Z"
          fill={color}
          stroke={color}
          strokeWidth="0.5"
        />
        <Path
          d="M3.209,1.833a2.292,2.292 0,1 0,2.292 2.292A2.294,2.294 0,0 0,3.209 1.833ZM3.209,5.5a1.375,1.375 0,1 1,1.375 -1.375A1.377,1.377 0,0 1,3.209 5.5Z"
          fill={color}
          stroke={color}
          strokeWidth="0.5"
        />
      </G>
    </Svg>
  );
}

export function ArrowIcon({ size = 14, color = "#8b8b8b" }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 14">
      <G>
        <Path
          d="M3.524,13.295a0.725,0.725 0,0 0,0.45 -0.158L10.927,7.545a0.717,0.717 0,0 0,-0 -1.117L4.003,0.864a0.717,0.717 0,1 0,-0.9 1.117L9.333,6.987 3.074,12.02a0.716,0.716 0,0 0,0.45 1.275Z"
          fill={color}
        />
      </G>
    </Svg>
  );
}

export function CloseCircleIcon({ size = 20, color = "#ffffff" }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20">
      <G>
        <Path d="M10,2a8,8 0,1 0,8 8A8,8 0,0 0,10 2Z" fill="#939299" />
        <Path
          d="M13,7.5l-0.5,-0.5 -2.5,2.5 -2.5,-2.5 -0.5,0.5 2.5,2.5 -2.5,2.5 0.5,0.5 2.5,-2.5 2.5,2.5 0.5,-0.5 -2.5,-2.5z"
          fill="#ffffff"
          strokeWidth="0.7"
          stroke="#ffffff"
        />
      </G>
    </Svg>
  );
}
