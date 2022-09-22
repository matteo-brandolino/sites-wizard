import { FC, SVGAttributes } from "react";

interface TablerIconProps extends SVGAttributes<SVGElement> { color?: string; size?: string | number; stroke?: string | number; }
type TablerIcon = FC<TablerIconProps>;

export type JSXElementArray = {
  components: JSX.Element[];
};

// 
export type  links = ({
  link: string;
  label: string;
  icon: TablerIcon;
} | undefined)[]