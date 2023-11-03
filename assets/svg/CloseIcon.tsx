import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { SvgNavIconProps } from "./props";

const CloseIcon: React.FC<SvgNavIconProps> = ({ size, color }) => (
  <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.7071 0.292893C20.0976 0.683417 20.0976 1.31658 19.7071 1.70711L1.70711 19.7071C1.31658 20.0976 0.683417 20.0976 0.292893 19.7071C-0.0976311 19.3166 -0.0976311 18.6834 0.292893 18.2929L18.2929 0.292893C18.6834 -0.0976311 19.3166 -0.0976311 19.7071 0.292893Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
      fill={color}
    />
  </Svg>
);
export default CloseIcon;
