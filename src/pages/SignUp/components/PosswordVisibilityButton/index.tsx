import EyeInvisibleIcon from "../../../../assets/EyeInvisibleIcon";
import EyeVisibleIcon from "../../../../assets/EyeVisibleIcon";

interface PasswordVisibilityButtonProps {
  visible: boolean;
}

function PasswordVisibilityButton({ visible }: PasswordVisibilityButtonProps) {
  return (
    <div>
      {visible ? (
        <EyeVisibleIcon />
      ) : (
        <EyeInvisibleIcon width={100} height={100} />
      )}
    </div>
  );
}

export default PasswordVisibilityButton;
