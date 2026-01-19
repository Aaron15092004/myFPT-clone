// components/icons/ApproveNow.js
import Svg, {
  G,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Circle,
  Path,
  Rect,
} from "react-native-svg";

export function ApproveNow({ size = 40 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32">
      <G transform="scale(0.1)">
        <Defs>
          <LinearGradient
            id="linear-gradient"
            x1="186.75"
            y1="112.7"
            x2="293.69"
            y2="76.85"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0" stopColor="#5597FF" />
            <Stop offset="1" stopColor="#185ECE" />
          </LinearGradient>
          <LinearGradient
            id="linear-gradient-2"
            x1="117.2"
            y1="213.1"
            x2="206.43"
            y2="153.07"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0" stopColor="#F9D850" />
            <Stop offset="1" stopColor="#FF6500" />
          </LinearGradient>
          <ClipPath id="circleClip">
            <Circle cx="160" cy="160" r="160" />
          </ClipPath>
        </Defs>
        <Circle cx="160" cy="160" r="160" fill="#DFE8F5" />
        <G clipPath="url(#circleClip)" transform="translate(23 10) scale(0.85)">
          <Path
            fill="#3B7FEA"
            d="M272.11,276.43H47.89a8.59,8.59,0,0,1-8.13-11.35l23.51-69a8.58,8.58,0,0,1,8.12-5.82H247.86A8.59,8.59,0,0,1,256,196l24.25,69A8.59,8.59,0,0,1,272.11,276.43Z"
          />
          <Rect
            fill="#b9d4ff"
            x="78.48"
            y="245.51"
            width="163.03"
            height="13.23"
            rx="6.62"
          />
          <Path
            fill="url(#linear-gradient)"
            d="M268.34,67.9c-13-13.68-36.47-34.07-48.76-19S183,100.51,176.7,109.25a74.93,74.93,0,0,1-11.06,11.32a62.7,62.7,0,0,1,31.49,17.87a59.4,59.4,0,0,1,12.71,21.79a55,55,0,0,1,3.34-4.95a326.92,326.92,0,0,1,30.52-29.61C258,113.76,273.93,98,276.44,95.47S281.4,81.61,268.34,67.9Z"
          />
          <Path
            fill="#185ECE"
            d="M202,133.43a62.7,62.7,0,0,0-31.51-17.88a187.83,187.83,0,0,1-16.65,13a6,6,0,0,0-2.94,6a11.08,11.08,0,0,0-2,14s7.63-9.11,25.91,5.83S183,178.7,183,178.7a13.64,13.64,0,0,0,11.86-2.27a5.45,5.45,0,0,1,3.72-1.34c2,.17,5-2.24,6.5-4.22c1-1.39,6-9.92,9.58-15.64A59.31,59.31,0,0,0,202,133.43Z"
          />
          <Path
            fill="url(#linear-gradient-2)"
            d="M177.59,157.46c-11.2-9.68-22.25-11-26.17-7.37a531.85,531.85,0,0,1-55.63,53.75s-1.88.48-3.46,11.52A100.73,100.73,0,0,1,79.23,251a5.44,5.44,0,0,0-.42,1.37h-.09a2,2,0,0,0,.85.27l1,.09l39.84-46.46a8,8,0,0,1,2.18-7.21c2.69-3,6.63-4,8.76-2.09s1.62,5.87-1.09,8.93a8.25,8.25,0,0,1-6.34,3L82.28,257.16s1.29,1.79,4.63-.88a95.68,95.68,0,0,1,50.4-18.67s4,.07,5.45-1.86l43-60.35S189.22,167.45,177.59,157.46Z"
          />
        </G>
      </G>
    </Svg>
  );
}

export function Reward({ size = 40 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32">
      <Defs>
        <LinearGradient id="linear-gradient-reward" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0%" stopColor="#5597FF" />
          <Stop offset="43%" stopColor="#3B7FEA" />
          <Stop offset="100%" stopColor="#185ECE" />
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-2-reward"
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="1"
        >
          <Stop offset="0" stopColor="#ffe195" />
          <Stop offset="0.49" stopColor="#fe8013" />
          <Stop offset="0.71" stopColor="#ff750b" />
          <Stop offset="1" stopColor="#fa832e" />
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-3-reward"
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="1"
        >
          <Stop offset="0" stopColor="#ffe49d" />
          <Stop offset="0.26" stopColor="#fbc946" />
          <Stop offset="0.71" stopColor="#fd9a25" />
          <Stop offset="1" stopColor="#fe8215" />
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-4-reward"
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="1"
        >
          <Stop offset="0" stopColor="#f7610c" />
          <Stop offset="0.33" stopColor="#ff8d4d" />
          <Stop offset="0.69" stopColor="#de5000" />
          <Stop offset="1" stopColor="#f88b28" />
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-5-reward"
          x1="0.5"
          y1="0"
          x2="0.5"
          y2="1"
        >
          <Stop offset="0" stopColor="#facd48" />
          <Stop offset="0.22" stopColor="#fbaf3d" />
          <Stop offset="0.54" stopColor="#ff820f" />
          <Stop offset="0.83" stopColor="#fe7c11" />
        </LinearGradient>
      </Defs>
      <G transform="scale(0.1582) translate(-59, -55)">
        <Circle fill="#DFE8F5" cx="160" cy="156.1" r="100.75" />
        <Path
          fill="url(#linear-gradient-reward)"
          d="M120.5,111.94h99.88a0,0,0,0,1,0,0v59.29A25.35,25.35,0,0,1,195,196.58H113.38a0,0,0,0,1,0,0V119.06A7.11,7.11,0,0,1,120.5,111.94Z"
        />
        <Path
          fill="#5597FF"
          d="M218.4,181.07s2-12.44-26-10.44V97.57s27.95-2.8,27.95,14.37v59.29S220.34,177.38,218.4,181.07Z"
        />
        <Rect
          fill="#ffffff"
          fillOpacity="0.59"
          strokeOpacity="0.59"
          x="130.16"
          y="128.91"
          width="51.81"
          height="5.92"
          rx="1.71"
        />
        <Rect
          fill="#ffffff"
          fillOpacity="0.59"
          strokeOpacity="0.59"
          x="130.16"
          y="143.62"
          width="51.81"
          height="5.92"
          rx="1.71"
        />
        <Rect
          fill="#ffffff"
          fillOpacity="0.59"
          strokeOpacity="0.59"
          x="157.74"
          y="158.34"
          width="24.22"
          height="5.92"
          rx="1.71"
        />
        <Path
          fill="url(#linear-gradient-2-reward)"
          d="M153,187.13c0-16.2-10-29.89-22.67-30.73H119.79c-13.11.42-17.64,14.7-17.64,31.16s4.5,29.34,17.61,30.11l.15,0h10.15C142.74,216.44,153,203.34,153,187.13Z"
        />
        <Path
          fill="#ffd6ac"
          d="M119.21,217.45c13,0,23.63-13.71,23.63-30.62s-10.58-30.62-23.63-30.62-23.62,13.71-23.62,30.62S106.16,217.45,119.21,217.45Z"
        />
        <Path
          fill="url(#linear-gradient-3-reward)"
          d="M118,216.44c12.37,0,22.41-13.14,22.41-29.36s-10-29.35-22.41-29.35-22.41,13.14-22.41,29.35S105.62,216.44,118,216.44Z"
        />
        <Path
          fill="url(#linear-gradient-4-reward)"
          d="M115.76,209.89c9.11,0,16.49-10,16.49-22.45S124.87,165,115.76,165s-16.48,10-16.48,22.45S106.66,209.89,115.76,209.89Z"
        />
        <Path
          fill="url(#linear-gradient-5-reward)"
          d="M116.77,209.15c8.54,0,15.46-9.6,15.46-21.45s-6.92-21.44-15.46-21.44-15.46,9.6-15.46,21.44S108.23,209.15,116.77,209.15Z"
        />
        <Path
          fill="#fff"
          fillOpacity="0.1"
          d="M97,185.39a6.24,6.24,0,0,0,2.32,0c.64-12.2,8.26-21.84,17.57-21.84s17.05,9.8,17.58,22.15a8.13,8.13,0,0,0,2.51-.06,7.51,7.51,0,0,0,2.44-.39c-1.1-15.57-10.17-27.12-22.34-27.12S96.81,169,95.71,184.54A2.36,2.36,0,0,0,97,185.39Z"
        />
        <Path
          fill="#fff"
          fillOpacity="0.2"
          d="M130,186.16c-.41-10.37-6.46-18.59-13.87-18.59s-13.56,8.35-13.88,18.83A57.89,57.89,0,0,0,130,186.16Z"
        />
        <Path
          fill="#000"
          fillOpacity="0.1"
          d="M139.81,224.47c0,.81-7,1.48-15.61,1.48s-15.6-.67-15.6-1.48,7-1.48,15.6-1.48S139.81,223.65,139.81,224.47Z"
        />
      </G>
    </Svg>
  );
}

export function Discipline({ size = 40 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32">
      <Defs>
        <LinearGradient
          id="a"
          x1="69.38"
          y1="85.71"
          x2="212.22"
          y2="215.24"
          gradientTransform="matrix(1 0 0 -1 0 319.89)"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0.6" stopColor="#5597ff" />
          <Stop offset="2" stopColor="#185ECE" />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1="181"
          y1="53.61"
          x2="225.1"
          y2="93.59"
          gradientTransform="translate(-6.24 52.5)"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0" stopColor="#f9d850" />
          <Stop offset="1" stopColor="#ff6500" />
        </LinearGradient>
      </Defs>
      <Circle cx="16" cy="16" r="16" fill="#DFE8F5" />
      <G transform="scale(0.09) translate(15 15)">
        <Path
          d="m39 228.89 12.28-10.78 4 4.1 91.54-78.84-16.52-17.15 51.13-44.61 53.37 55.27-51.15 44.64L171 168.37l-91.46 78.8 5.81 6-12.28 10.77Z"
          fill="url(#a)"
        />
        <Path
          d="M116.19 120.53a8.57 8.57 0 0 1-11.68-.48l-7.05-7.29a7.61 7.61 0 0 1 .09-10.76l.37-.34 60.52-52.78a8.6 8.6 0 0 1 11.68.43l7 7.35a7.6 7.6 0 0 1-.12 10.76l-.36.33Zm72.17 74.84a7.62 7.62 0 0 0-.86 10.73c.11.13.23.26.35.38l7.05 7.3a8.6 8.6 0 0 0 11.69.49l60.53-52.8a7.61 7.61 0 0 0 .85-10.73 6 6 0 0 0-.34-.37l-7.07-7.37a8.6 8.6 0 0 0-11.66-.44Z"
          fill="#5597FF"
        />
        <Path
          d="M132.54 127.13a8.35 8.35 0 0 1-11.4-.4 7.41 7.41 0 0 1 0-10.48l.39-.36 49.71-43.31a8.36 8.36 0 0 1 11.38.38l.07.07a7.42 7.42 0 0 1-.12 10.49l-.37.34ZM183 179.31a7.41 7.41 0 0 0-.91 10.43c.12.14.24.27.37.4a8.39 8.39 0 0 0 11.42.49l49.65-43.26a7.4 7.4 0 0 0 .9-10.43c-.12-.14-.24-.27-.37-.4h-.05a8.35 8.35 0 0 0-11.38-.52l-.07.06Zm91 84.63H148.64c-5.06 0-8.44-5-6.37-9.35l9.86-20.88a7 7 0 0 1 6.37-3.92h105.36a7 7 0 0 1 6.33 3.85l10.16 20.88c2.14 4.4-1.24 9.42-6.35 9.42"
          fill="#185ECE"
        />
        <Rect
          x="169.72"
          y="99.26"
          width="48.73"
          height="48.73"
          rx="6.03"
          transform="rotate(-41.81 194.057 123.623)"
          fill="url(#b)"
        />
      </G>
    </Svg>
  );
}

export function Learning({ size = 40 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32">
      <Defs>
        <LinearGradient id="ic_learning_01" x1="0%" y1="0%" x2="0%" y2="100%">
          <Stop offset="0%" stopColor="#F9D850" stopOpacity="1" />
          <Stop offset="100%" stopColor="#FF6500" stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <Path d="M32 16A16 16 0 1 1 16 0a16 16 0 0 1 16 16" fill="#DFE8F5" />
      <Path
        d="M15.796 11.217c-3.8 0-6.885 1.816-6.885 4.058v5.227c0 2.24 5.134 2.89 6.885 2.832s6.885-.591 6.885-2.832v-5.227c-.001-2.241-3.084-4.058-6.885-4.058"
        fill="#185ECE"
      />
      <Path
        d="m27.153 14.197-11.281 6.63-11.28-6.63 11.28-6.63Z"
        fill="#5597FF"
      />
      <Path
        d="m16.867 14.172-.477-.333-.4-.275-6.367 3.776v3.817a3.8 3.8 0 0 0-.658 2.147.2.2 0 0 0 0 .05l.01.04v.008a.2.2 0 0 0 .02.042 1.43 1.43 0 0 0 1 .482c.457 0 1.17-.115 1.377-.528a4.6 4.6 0 0 0-.664-2.246v-3.333Z"
        fill="url(#ic_learning_01)"
        fillOpacity="1"
      />
      <Path
        d="m26.733 14.443-10.69 6.285a.294.294 108 0 1-.41-.082.294.294 108 0 1 .086-.408l10.69-6.288a.294.294 108 0 1 .406.084.294.294 108 0 1-.082.409"
        fill="#b9d4ff"
        fillOpacity="0.59"
      />
    </Svg>
  );
}

export function Task({ size = 40 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32">
      <Defs>
        <LinearGradient id="linear-gradient-task" x1="1" y1="0" x2="1" y2="0.4">
          <Stop offset="0%" stopColor="#5597FF" />
          <Stop offset="100%" stopColor="#185ECE" />
        </LinearGradient>
        <LinearGradient id="linear-gradient-2-task" x1="1" y1="0" x2="0" y2="1">
          <Stop offset="0" stopColor="#ffd652" />
          <Stop offset="1" stopColor="#f16522" />
        </LinearGradient>
        <LinearGradient
          id="linear-gradient-3-task"
          x1="1"
          y1="1"
          x2="0.5"
          y2="0"
        >
          <Stop offset="0%" stopColor="#F9D850" />
          <Stop offset="100%" stopColor="#FF6500" />
        </LinearGradient>
      </Defs>
      <G transform="scale(0.15) translate(-46, -55)">
        <Circle fill="#dee7f5" cx="152.08" cy="162.18" r="104.68" />
        <Path
          fill="url(#linear-gradient-task)"
          d="M173.27,216.37h-61.5a4.71,4.71,0,0,1-4.7-4.7V107.13a4.71,4.71,0,0,1,4.7-4.7h86a4.7,4.7,0,0,1,4.7,4.7v79.62Z"
        />
        <Path
          fill="#bbd6ff"
          d="M173.27,216.37v-29.18l29.19-0.44L173.27,216.37z"
        />
        <Rect
          fill="#ffffff"
          fillOpacity="0.39"
          strokeOpacity="0.59"
          x="116.75"
          y="124.89"
          width="43.25"
          height="6.32"
          rx="1.57"
        />
        <Rect
          fill="#ffffff"
          fillOpacity="0.39"
          strokeOpacity="0.59"
          x="115.9"
          y="142.83"
          width="67.78"
          height="6.32"
          rx="1.57"
        />
        <Rect
          fill="#ffffff"
          fillOpacity="0.39"
          strokeOpacity="0.59"
          x="116.75"
          y="161.6"
          width="67.78"
          height="6.32"
          rx="1.57"
        />
        <Rect
          fill="#ffffff"
          fillOpacity="0.39"
          strokeOpacity="0.59"
          x="116.75"
          y="179.09"
          width="67.78"
          height="6.32"
          rx="1.57"
        />
        <Path
          fill="url(#linear-gradient-2-task)"
          d="M148.36,174.61c-.87-5.9-3.38-7.77-3.38-7.77-1.43-1.8-7.13-5.08-7.13-5.08a13.22,13.22,0,0,0-8.61-1.43c-7.62,1.41-10.53,9.46-25.44,13.38-14.66,3.85-29.11,29-5.42,48.19v0l.63.46c.21.15.41.32.61.48l0,0c25.06,17.26,44.44-4.23,43.71-19.59C142.59,187.63,149.3,182.42,148.36,174.61Z"
        />
        <Path
          fill="url(#linear-gradient-3-task)"
          d="M98.37,221.92c.21.16.42.3.64.45l.61.49v0c25.06,17.27,44.44-4.21,43.7-19.57-.65-13.58,4.34-19.29,5-25.68a67,67,0,0,0-9.87,14.62c-8.82,17.15-40.11,3.76-47.25,22.33a40.2,40.2,0,0,0,7.14,7.37Z"
        />
        <Path
          fill="url(#linear-gradient-3-task)"
          d="M107,183.06c2.09-3.46,2.16-7.57,1.67-10.89q-2.3.86-4.66,1.48c-6.92,1.81-13.8,8.31-16.78,16.69A17.4,17.4,0,0,0,107,183.06Z"
        />
        <Path
          fill="#f06623"
          d="M134.78,222.45c-2.77-2.34-9-6.37-17.15-3.83-7.63,2.36-12.27,5.5-16.82,5.09C114.87,232.63,127.05,229.57,134.78,222.45Z"
        />
        <Path
          fill="url(#linear-gradient-3-task)"
          d="M135.09,162.19l.62,3.25a.88.88,0,0,0,.17.4l2.1,2.94a.93.93,0,0,0,.37.31l2.39,1.21a.94.94,0,0,0,.28.1l2,.35a1,1,0,0,0,.42,0l2.36-.58a1,1,0,0,0,.64-1.49c-1.07-1.9-3.88-5.61-10.07-7.64A1,1,0,0,0,135.09,162.19Z"
        />
        <Path
          fill="#93782c"
          d="M137.85,169.78s2.85-10.52,9.87-15.68,8.54.6,8.54.6-7.6,1.4-11.92,7.36-5.78,8.26-5.78,8.26a.59.59,0,0,1-.27.05.49.49,0,0,1-.25-.1.47.47,0,0,1-.16-.21A.53.53,0,0,1,137.85,169.78Z"
        />
        <Path
          fill="#ffd653"
          d="M134.74,160.56c.86,4,4.83,11.39,12.27,9.31C137.14,174.89,134.12,167.43,134.74,160.56Z"
        />
      </G>
    </Svg>
  );
}
