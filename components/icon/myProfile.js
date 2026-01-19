import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
  Rect,
  ClipPath,
} from "react-native-svg";

export function MyProfileIcon({ size = 24 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20">
      <Defs>
        <LinearGradient
          id="icon_my_profile_new__0"
          x1="10.0647"
          y1="11.3339"
          x2="17.8583"
          y2="23.9935"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0%" stopColor="#5597FF" />
          <Stop offset="100%" stopColor="#185ECE" />
        </LinearGradient>
        <LinearGradient
          id="icon_my_profile_new__1"
          x1="10.065"
          y1="0.857"
          x2="14.6101"
          y2="15.7761"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0%" stopColor="#5597FF" />
          <Stop offset="100%" stopColor="#185ECE" />
        </LinearGradient>
      </Defs>
      <G>
        <Path
          fill="url(#icon_my_profile_new__0)"
          d="M16.673,13.202a12.63,12.63 0,0 0,-13.221 0A2.589,2.589 0,0 0,2.273 15.385v3.706L17.857,19.091v-3.706A2.59,2.59 0,0 0,16.673 13.202Z"
        />
        <Path
          fill="url(#icon_my_profile_new__1)"
          d="M13.279,2.24a4.545,4.545 0,1 1,-6.428 0,4.545 4.545,0 0,1 6.428,0"
        />
      </G>
    </Svg>
  );
}

export function SettingsIcon({ size = 24 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20">
      <G>
        <Defs>
          <LinearGradient
            id="icon_setting_new__0"
            x1="10.003"
            y1="1.0899"
            x2="16.864"
            y2="25.4144"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0%" stopColor="#5597FF" />
            <Stop offset="100%" stopColor="#185ECE" />
          </LinearGradient>
        </Defs>
        <Path
          d="M9.991,18.884a9.16,9.16 0,0 1,-1.024 -0.059,0.962 0.962,0 0,1 -0.848,-1.008 1.37,1.37 0,0 0,-0.834 -1.34,1.443 1.443,0 0,0 -1.538,0.356 0.963,0.963 0,0 1,-1.312 0.1,8.937 8.937,0 0,1 -1.406,-1.422 0.96,0.96 0,0 1,0.1 -1.3,1.376 1.376,0 0,0 0.356,-1.527 1.347,1.347 0,0 0,-1.26 -0.848L2.207,11.836A1.035,1.035 0,0 1,1.169 10.992a8.937,8.937 0,0 1,0 -2.021,0.947 0.947,0 0,1 0.979,-0.848 1.458,1.458 0,0 0,1.369 -0.834,1.365 1.365,0 0,0 -0.356,-1.538 0.963,0.963 0,0 1,-0.092 -1.321A8.692,8.692 0,0 1,4.507 3.009a0.965,0.965 0,0 1,1.3 0.108,1.447 1.447,0 0,0 1.527,0.356 1.376,1.376 0,0 0,0.844 -1.319,0.962 0.962,0 0,1 0.853,-0.99 8.756,8.756 0,0 1,2 0.007,0.958 0.958,0 0,1 0.848,1 1.374,1.374 0,0 0,0.834 1.34,1.442 1.442,0 0,0 1.538,-0.356 0.96,0.96 0,0 1,1.312 -0.1,8.82 8.82,0 0,1 1.41,1.422 0.965,0.965 0,0 1,-0.1 1.3,1.362 1.362,0 0,0 0.937,2.371 1.032,1.032 0,0 1,1.027 0.851h0a8.937,8.937 0,0 1,0 2.021,0.965 0.965,0 0,1 -1.01,0.85h-0.087a1.362,1.362 0,0 0,-0.91 2.375,0.963 0.963,0 0,1 0.108,1.308 8.825,8.825 0,0 1,-1.438 1.422h0a0.956,0.956 0,0 1,-1.3 -0.108,1.452 1.452,0 0,0 -1.53,-0.356 1.372,1.372 0,0 0,-0.844 1.315,0.96 0.96,0 0,1 -0.853,0.987 9.243,9.243 0,0 1,-0.981 0.06ZM10.016,13.304a3.292,3.292 0,1 1,3.29 -3.291A3.292,3.292 0,0 1,10.016 13.303ZM10.016,7.704A2.311,2.311 0,1 0,12.324 10.016,2.311 2.311,0 0,0 10.016,7.703Z"
          fill="url(#icon_setting_new__0)"
        />
        <Path
          d="M10.016,13.303a3.292,3.292 0,1 1,3.29 -3.291A3.292,3.292 0,0 1,10.016 13.303ZM10.016,7.703A2.311,2.311 0,1 0,12.324 10.016,2.311 2.311,0 0,0 10.016,7.703Z"
          fill="#fff"
          stroke="#fff"
          strokeWidth="0.5"
        />
      </G>
    </Svg>
  );
}

export function SupportIcon({ size = 24 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20">
      <Defs>
        <LinearGradient
          id="icon_support_my_profile__0"
          x1="9.998"
          y1="13.147"
          x2="14.6026"
          y2="21.148"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0%" stopColor="#5597FF" />
          <Stop offset="100%" stopColor="#185ECE" />
        </LinearGradient>
        <LinearGradient
          id="icon_support_my_profile__1"
          x1="16.0735"
          y1="4.017"
          x2="18.3269"
          y2="20.3663"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0%" stopColor="#5597FF" />
          <Stop offset="100%" stopColor="#185ECE" />
        </LinearGradient>
        <LinearGradient
          id="icon_support_my_profile__2"
          x1="9.995"
          y1="0.9928"
          x2="14.5988"
          y2="9.0037"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0%" stopColor="#5597FF" />
          <Stop offset="100%" stopColor="#185ECE" />
        </LinearGradient>
        <LinearGradient
          id="icon_support_my_profile__3"
          x1="3.9265"
          y1="4.018"
          x2="6.1799"
          y2="20.3673"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0%" stopColor="#5597FF" />
          <Stop offset="100%" stopColor="#185ECE" />
        </LinearGradient>
      </Defs>
      <G>
        <Path
          fill="url(#icon_support_my_profile__0)"
          d="M12.401,13.147a3.958,3.958 0,0 1,-4.8 0L4.018,16.726a9,9 0,0 0,11.96 0Z"
        />
        <Path
          fill="url(#icon_support_my_profile__1)"
          d="M16.726,4.019l-3.579,3.579a3.958,3.958 0,0 1,0 4.8l3.579,3.579a9,9 0,0 0,0 -11.96Z"
        />
        <Path
          fill="url(#icon_support_my_profile__2)"
          d="M10,1A8.934,8.934 0,0 0,4.016 3.274l3.579,3.579a3.958,3.958 0,0 1,4.8 0l3.579,-3.579A8.934,8.934 0,0 0,10 1Z"
        />
        <Path
          fill="url(#icon_support_my_profile__3)"
          d="M6.853,7.599 L3.274,4.018a9,9 0,0 0,0 11.96l3.579,-3.579a3.958,3.958 0,0 1,0 -4.8Z"
        />
      </G>
    </Svg>
  );
}

export function FAQIcon({ size = 24 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20">
      <Defs>
        <LinearGradient
          id="icon_faq_my_profile__0"
          x1="10"
          y1="1"
          x2="16.93"
          y2="25.606"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0%" stopColor="#5597FF" />
          <Stop offset="100%" stopColor="#185ECE" />
        </LinearGradient>
      </Defs>
      <G>
        <Path
          d="M10,1a9,9 0,1 0,9 9A9.01,9.01 0,0 0,10 1ZM10,15.25a0.75,0.75 0,1 1,0.75 -0.75A0.75,0.75 0,0 1,10 15.25ZM11.187,10.481a0.753,0.753 0,0 0,-0.437 0.682L10.75,11.5a0.75,0.75 0,1 1,-1.5 0v-0.337A2.26,2.26 0,0 1,10.559 9.119a2.451,2.451 0,0 0,1.316 -1.744,1.875 1.875,0 1,0 -3.75,0 0.75,0.75 0,0 1,-1.5 0,3.375 3.375,0 0,1 6.75,0 3.908,3.908 0,0 1,-2.188 3.107Z"
          fill="url(#icon_faq_my_profile__0)"
        />
      </G>
    </Svg>
  );
}

export function AdminIcon({ size = 24 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20">
      <Defs>
        <LinearGradient
          id="icon_profile_admin__0"
          x1="6.289"
          y1="9.316"
          x2="10.937"
          y2="27.179"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0%" stopColor="#5597FF" />
          <Stop offset="100%" stopColor="#185ECE" />
        </LinearGradient>
        <LinearGradient
          id="icon_profile_admin__1"
          x1="7.465"
          y1="0"
          x2="11.563"
          y2="13.375"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0%" stopColor="#5597FF" />
          <Stop offset="100%" stopColor="#185ECE" />
        </LinearGradient>
        <LinearGradient
          id="icon_profile_admin__2"
          x1="14.896"
          y1="9.223"
          x2="20.531"
          y2="26.639"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0%" stopColor="#5597FF" />
          <Stop offset="100%" stopColor="#185ECE" />
        </LinearGradient>
      </Defs>
      <G>
        <Path
          fill="url(#icon_profile_admin__0)"
          d="M12.418,19.129C12.352,19.09 12.281,19.051 12.215,19.012L11.805,19.188C11,19.531 10.066,19.219 9.629,18.461L8.926,17.242C8.488,16.484 8.688,15.52 9.387,14.992L9.742,14.727C9.742,14.688 9.742,14.649 9.742,14.609C9.742,14.57 9.742,14.531 9.742,14.492L9.387,14.227C8.688,13.699 8.492,12.734 8.926,11.977L9.629,10.758C9.84,10.395 10.172,10.121 10.566,9.988C9.594,9.543 8.535,9.313 7.465,9.316C3.344,9.313 0,12.656 0,16.777V18.941C0,19.527 0.473,20 1.059,20H12.578C12.523,19.863 12.488,19.719 12.469,19.57L12.418,19.129Z"
        />
        <Path
          fill="url(#icon_profile_admin__1)"
          d="M7.465,8.195C9.728,8.195 11.563,6.361 11.563,4.098C11.563,1.835 9.728,0 7.465,0C5.202,0 3.367,1.835 3.367,4.098C3.367,6.361 5.202,8.195 7.465,8.195Z"
        />
        <Path
          fill="url(#icon_profile_admin__2)"
          d="M19.746,15.867L18.906,15.238C18.973,14.824 18.973,14.398 18.906,13.984L19.746,13.356C20.004,13.164 20.074,12.809 19.914,12.527L19.211,11.309C19.051,11.031 18.707,10.914 18.41,11.043L17.445,11.453C17.117,11.188 16.75,10.977 16.359,10.824L16.234,9.781C16.195,9.461 15.926,9.223 15.601,9.223H14.191C13.871,9.223 13.598,9.465 13.559,9.781L13.434,10.824C13.039,10.977 12.676,11.188 12.348,11.453L11.383,11.043C11.086,10.918 10.742,11.031 10.582,11.309L9.879,12.527C9.719,12.805 9.789,13.16 10.047,13.356L10.887,13.984C10.82,14.398 10.82,14.824 10.887,15.238L10.047,15.867C9.789,16.063 9.719,16.418 9.879,16.695L10.582,17.914C10.742,18.191 11.086,18.309 11.383,18.184L12.348,17.77C12.676,18.035 13.043,18.246 13.434,18.398L13.559,19.441C13.598,19.762 13.867,20 14.191,20H15.601C15.922,20 16.195,19.758 16.234,19.441L16.359,18.398C16.75,18.246 17.117,18.035 17.445,17.77L18.41,18.18C18.707,18.305 19.051,18.191 19.211,17.91L19.914,16.691C20.074,16.418 20.004,16.063 19.746,15.867ZM14.894,16.133C14.055,16.133 13.371,15.449 13.371,14.609C13.371,13.769 14.055,13.086 14.894,13.086C15.734,13.086 16.418,13.769 16.418,14.609C16.418,15.449 15.734,16.133 14.894,16.133Z"
        />
      </G>
    </Svg>
  );
}

export function LogoutIcon({ size = 24 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20">
      <Defs>
        <LinearGradient
          id="icon_logout_new__0"
          x1="15.3763"
          y1="5.4984"
          x2="18.553"
          y2="14.7294"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0%" stopColor="#5597FF" />
          <Stop offset="100%" stopColor="#185ECE" />
        </LinearGradient>
        <LinearGradient
          id="icon_logout_new__1"
          x1="5.25"
          y1="0.9995"
          x2="8.1375"
          y2="25.6069"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0%" stopColor="#5597FF" />
          <Stop offset="100%" stopColor="#185ECE" />
        </LinearGradient>
        <LinearGradient
          id="icon_logout_new__2"
          x1="7.9632"
          y1="0.9986"
          x2="12.2265"
          y2="7.8355"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0%" stopColor="#5597FF" />
          <Stop offset="100%" stopColor="#185ECE" />
        </LinearGradient>
        <LinearGradient
          id="icon_logout_new__3"
          x1="10.6848"
          y1="11.7136"
          x2="12.8565"
          y2="18.5989"
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset="0%" stopColor="#5597FF" />
          <Stop offset="100%" stopColor="#185ECE" />
        </LinearGradient>
      </Defs>
      <G>
        <Path
          fill="url(#icon_logout_new__0)"
          d="M15.729,12.086a0.558,0.558 0,0 1,0 -0.8L17.58,9.439L11.812,9.439a0.563,0.563 0,0 1,0 -1.126L17.58,8.313L15.729,6.458a0.562,0.562 0,0 1,0.8 -0.794L19.338,8.476a0.564,0.564 0,0 1,0 0.795L16.524,12.084a0.56,0.56 0,0 1,-0.4 0.167A0.567,0.567 0,0 1,15.729 12.086Z"
        />
        <Path
          fill="url(#icon_logout_new__1)"
          d="M7.5,19a1.546,1.546 0,0 1,-0.465 -0.07l-4.514,-1.5A1.514,1.514 0,0 1,1.5 16L1.5,2.5A1.5,1.5 0,0 1,3 1a1.547,1.547 0,0 1,0.465 0.07l4.513,1.5A1.514,1.514 0,0 1,9 4v13.5A1.5,1.5 0,0 1,7.5 19Z"
        />
        <Path
          fill="url(#icon_logout_new__2)"
          d="M12.938,6a0.563,0.563 0,0 1,-0.562 -0.562L12.376,3.062a0.939,0.939 0,0 0,-0.937 -0.938L3,2.124a0.562,0.562 0,1 1,0 -1.125h8.438A2.064,2.064 0,0 1,13.5 3.062L13.5,5.437A0.563,0.563 0,0 1,12.938 6ZM12.938,6"
        />
        <Path
          fill="url(#icon_logout_new__3)"
          d="M11.438,16.75h-3a0.562,0.562 0,1 1,0 -1.125h3a0.939,0.939 0,0 0,0.937 -0.938L12.375,12.31a0.563,0.563 0,1 1,1.125 0v2.375A2.064,2.064 0,0 1,11.438 16.75ZM11.438,16.75"
        />
      </G>
    </Svg>
  );
}

export function CameraIcon({ size = 32 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32">
      <Path
        d="M16,16m-16,0a16,16 0,1 1,32 0a16,16 0,1 1,-32 0"
        fill="#8b8b8b"
        stroke="#000000"
        strokeOpacity="0"
        strokeWidth="1"
      />
      <Path
        d="M16,16m-15.5,0a15.5,15.5 0,1 1,31 0a15.5,15.5 0,1 1,-31 0"
        fill="#000000"
        fillOpacity="0"
        stroke="#fff"
        strokeWidth="1"
      />
      <G>
        <Path
          d="M24.221,23.11L7.778,23.11A0.778,0.778 0,0 1,7 22.331v-10.1A0.778,0.778 0,0 1,7.778 11.45L11.387,11.45l1.827,-1.944c0.139,-0.144 0.247,-0.261 0.387,-0.261h4.666c0.144,0 0.247,0.117 0.387,0.261L20.482,11.45h3.74a0.778,0.778 0,0 1,0.778 0.774v10.1A0.778,0.778 0,0 1,24.221 23.11ZM16,12.976a4.266,4.266 0,1 0,4.23 4.3v-0.036A4.248,4.248 0,0 0,16 12.976ZM22.61,12.985a0.8,0.8 0,1 0,0.788 0.81v-0.014a0.792,0.792 0,0 0,-0.783 -0.8ZM16,19.906a2.66,2.66 0,1 1,2.646 -2.678s0,0.009 0,0.013A2.655,2.655 0,0 1,16 19.906Z"
          fill="#fff"
        />
      </G>
    </Svg>
  );
}

export function BannerIcon({ width = 252, height = 90 }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 252 90">
      <Defs>
        <ClipPath id="banner-clip">
          <Rect x="0" y="0" width="252" height="100" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#banner-clip)">
        <G transform="scale(0.43) translate(-127, -197)">
          <Path
            fill="#2B76EB"
            d="M137.6,197.4h566.7c5.6,0,10.2,4.6,10.2,10.2v180c0,5.6-4.6,10.2-10.2,10.2H137.6c-5.6,0-10.2-4.6-10.2-10.2v-180C127.4,202,132,197.4,137.6,197.4z"
          />
          <Path
            fill="#458DFC"
            d="M127.4,321.8c0,0,181.3,49,280.7-46.6c15.7-14.4,33.7-26,53.3-34.4c29.3-12.4,61.9-14.4,92.5-5.8l160.6,44.5v105.4c0,7.2-5.8,13-13,13l0,0h-561c-7.2,0-13-5.8-13-13l0,0L127.4,321.8z"
          />
          <Path
            fill="#468EFD"
            d="M127.4,274.9l33.2-8.5l57.3,8.5v123h-77.4c-7.2,0-13-5.8-13-13L127.4,274.9z"
          />
          <Path fill="#468EFD" d="M257.6,325v72.9h-39.7v-71l10.4-5.2" />
          <Path fill="#4E97FD" d="M160.6,266.4v131.5h57.3V274.9" />
          <Path fill="#4F98FE" d="M228.3,321.7v76.2h29.3V325" />
          <Rect x="178.6" y="285.5" fill="#468EFD" width="10.6" height="10.1" />
          <Rect x="194.8" y="287.1" fill="#468EFD" width="10.6" height="10.1" />
          <Rect x="178.6" y="304.4" fill="#468EFD" width="10.6" height="10.1" />
          <Rect x="194.8" y="306" fill="#468EFD" width="10.6" height="11.3" />
          <Rect x="178.6" y="321.7" fill="#468EFD" width="10.6" height="11.3" />
          <Rect x="194.8" y="323.4" fill="#468EFD" width="10.6" height="11.2" />
          <Rect x="178.6" y="339.6" fill="#468EFD" width="10.6" height="11.2" />
          <Rect x="194.8" y="341.2" fill="#468EFD" width="10.6" height="11.3" />
          <Path fill="#3D8BFC" d="M661.8,279.4v118.5h-65.1V289.8l21.8-10.4" />
          <Path
            fill="#3D8BFC"
            d="M714.5,241.3h-41.3l-24.1,9.4v147.1h52.4c7.2,0,13-5.8,13-13L714.5,241.3z"
          />
          <Path
            fill="#4F98FE"
            d="M714.5,241.3h-41.3v156.5h28.3c7.2,0,13-5.8,13-13V241.3z"
          />
          <Rect x="687.4" y="255.2" fill="#468EFD" width="13" height="13" />
          <Rect x="706.3" y="255.2" fill="#468EFD" width="8.2" height="13.6" />
          <Rect x="687.4" y="276.8" fill="#468EFD" width="13" height="13" />
          <Rect x="706.3" y="276.8" fill="#468EFD" width="8.2" height="13.6" />
          <Rect x="687" y="300.1" fill="#468EFD" width="13" height="13" />
          <Rect x="706" y="300.1" fill="#468EFD" width="8.2" height="13.6" />
          <Path fill="#3D8BFC" d="M607.7,335.4h-29.9l-15.6,4.2v58.3h45.5" />
          <Rect x="577.8" y="335.4" fill="#4F98FE" width="29.9" height="62.5" />
          <Rect
            x="618.5"
            y="279.4"
            fill="#4F98FE"
            width="43.3"
            height="118.5"
          />
          <Rect x="634.2" y="293.3" fill="#468EFD" width="12.6" height="12.6" />
          <Rect x="634.2" y="316.6" fill="#468EFD" width="12.6" height="12.6" />
          <Rect x="634.2" y="338.6" fill="#468EFD" width="12.6" height="12.6" />
          <Rect x="652.6" y="293.3" fill="#468EFD" width="9.2" height="12.6" />
          <Rect x="652.5" y="316.6" fill="#468EFD" width="9.3" height="12.6" />
          <Rect x="652.5" y="338.6" fill="#468EFD" width="9.3" height="12.6" />
        </G>
      </G>
    </Svg>
  );
}
