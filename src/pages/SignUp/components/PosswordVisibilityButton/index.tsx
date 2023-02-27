import EyeInvisibleIcon from "../../../../assets/EyeInvisibleIcon";
import EyeVisibleIcon from "../../../../assets/EyeVisibleIcon";

interface PasswordVisibilityButtonProps {
  visible: boolean;
}

function PasswordVisibilityButton({ visible }: PasswordVisibilityButtonProps) {
  return <div>{visible ? <EyeVisibleIcon /> : <EyeInvisibleIcon />}</div>;
}

export default PasswordVisibilityButton;
