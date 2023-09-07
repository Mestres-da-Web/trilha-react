interface ButtonIconProps {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

const ButtonIcon = ({ icon: Icon }: ButtonIconProps) => {
  return <Icon style={{ marginRight: 10 }} />;
};

export default ButtonIcon;
