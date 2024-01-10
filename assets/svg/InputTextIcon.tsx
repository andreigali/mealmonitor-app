import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { SvgNavIconProps } from "./props";

const InputTextIcon: React.FC<SvgNavIconProps> = ({ color }) => (
  <Svg width={22} height={14} viewBox="0 0 22 14" fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.9987 0.000957918C14.9979 -0.0588232 18.9547 2.68989 21.3661 5.34109L21.3692 5.34456C21.7753 5.7954 22 6.38067 22 6.98743C22 7.5942 21.7753 8.17947 21.3692 8.6303L21.3664 8.63343C19.0106 11.226 15.0631 14.0373 10.9987 13.9766C6.93418 14.0373 2.98753 11.226 0.633426 8.63315L0.630843 8.63031C0.224751 8.17947 3.05176e-05 7.5942 3.05176e-05 6.98743C3.05176e-05 6.38067 0.224757 5.7954 0.630849 5.34457L0.63362 5.34149C3.0426 2.68986 6.9995 -0.0588235 10.9987 0.000957918ZM2.07481 6.6473C1.99111 6.7408 1.9448 6.8619 1.9448 6.98743C1.9448 7.113 1.99113 7.23412 2.07487 7.32763C4.28854 9.76506 7.74429 12.0863 10.9823 12.0318C10.9932 12.0316 11.0041 12.0316 11.0151 12.0318C14.2531 12.0863 17.7097 9.76511 19.9253 7.32751C20.009 7.23402 20.0553 7.11294 20.0553 6.98743C20.0553 6.86195 20.009 6.74089 19.9253 6.6474C17.6621 4.15998 14.1955 1.89206 11.0151 1.94572C11.0042 1.9459 10.9932 1.9459 10.9823 1.94572C7.80179 1.89206 4.33505 4.16019 2.07481 6.6473Z"
      fill={color}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9061 4.79842C11.6185 4.67931 11.3103 4.61804 10.999 4.61812C10.5302 4.61812 10.0717 4.75712 9.68196 5.01753C9.2922 5.27794 8.9884 5.64808 8.80899 6.08114C8.62958 6.5142 8.5826 6.99073 8.67401 7.45048C8.76541 7.91024 8.99109 8.33257 9.3225 8.66407C9.65391 8.99557 10.0762 9.22136 10.5359 9.31289C10.9956 9.40442 11.4722 9.35757 11.9053 9.17827C12.3384 8.99897 12.7086 8.69528 12.9691 8.30558C13.2297 7.91589 13.3688 7.4577 13.3689 6.98895C13.3691 6.67765 13.3079 6.36911 13.1888 6.08146C13.0698 5.79382 12.8953 5.53245 12.6752 5.3123C12.4551 5.09215 12.1938 4.91753 11.9061 4.79842ZM10.9987 2.67335C11.5654 2.67323 12.1266 2.78478 12.6503 3.00163C13.1739 3.21851 13.6498 3.53646 14.0505 3.93732C14.4513 4.33818 14.7691 4.81408 14.9858 5.33783C15.2025 5.8615 15.3139 6.42273 15.3137 6.98947M10.9987 2.67335C10.1454 2.6734 9.31105 2.92644 8.60155 3.40047C7.89199 3.87456 7.33893 4.5484 7.0123 5.33679C6.68568 6.12518 6.60016 6.99271 6.76656 7.8297C6.93296 8.66669 7.34381 9.43555 7.94715 10.0391C8.5505 10.6426 9.31924 11.0536 10.1562 11.2202C10.9931 11.3869 11.8607 11.3016 12.6492 10.9752C13.4376 10.6487 14.1116 10.0959 14.5859 9.38642C15.0601 8.67705 15.3134 7.84275 15.3137 6.98947"
      fill={color}
    />
  </Svg>
);
export default InputTextIcon;
