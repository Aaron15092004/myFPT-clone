import Svg, {
  G,
  Defs,
  LinearGradient,
  Stop,
  Circle,
  Path,
  Rect,
} from "react-native-svg";

export function EmployeeInfo({ size = 40 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32">
      <Defs>
        <LinearGradient
          id="linear-gradient-employee"
          x1="0"
          y1="0"
          x2="0"
          y2="1"
        >
          <Stop offset="0" stopColor="#FFD653" />
          <Stop offset="0.4" stopColor="#FF6500" />
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-2-employee"
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="1"
        >
          <Stop offset="0" stopColor="#5597FF" />
          <Stop offset="1" stopColor="#185ECE" />
        </LinearGradient>
      </Defs>
      <G transform="scale(0.06)">
        <Circle fill="#DFE8F5" cx="265" cy="270" r="265" />
        <G transform="scale(1.075) translate(-50,-210)">
          <Path
            fill="#3762ac"
            d="M435,438.51l-8.68,186.89H226.66V438.51H435z"
          />
          <Rect
            fill="url(#linear-gradient-employee)"
            x="207.77"
            y="410.43"
            width="205.79"
            height="192"
            rx="20.94"
          />
          <Path
            fill="url(#linear-gradient-2-employee)"
            d="M418.66,460.47l3.57,164.93H211.34l-32.68-141h105.19l16.6-24H418.66z"
          />
          <Path
            fill="#5597FF"
            d="M173,319.53s-.51,50.56,36.77,68.43L148,427.79S110.74,413,102.57,360.38Z"
          />
          <Path
            fill="#185ECE"
            d="M444.7,343.53S422.74,366,422.23,391l40.34,19.41s3.58-28.6,23.49-42.39Z"
          />
          <Rect
            fill="#b9d4ff"
            x="349.98"
            y="596.04"
            width="55.26"
            height="14.88"
            rx="5.93"
          />
        </G>
      </G>
    </Svg>
  );
}
