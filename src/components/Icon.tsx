import { IconType } from "react-icons";

interface IconProps {
  icon: IconType;
  style?: React.CSSProperties;
  [key: string]: any;
}

const Icon = (props: IconProps) => {
  const IconComponent = props.icon as unknown as (
    props: any
  ) => React.JSX.Element;
  const { style = {}, ...otherProps } = props;

  return (
    <IconComponent style={{ display: "block", ...style }} {...otherProps} />
  );
};


export default Icon;