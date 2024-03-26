import { clsx } from "clsx";
import { TYPE } from "../../types/color";
import { SIZE } from "../../types/size";
import styles from "./jnp-button.module.css";

interface JnpButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  borderRadius?: SIZE;
  color?: TYPE;
  className?: string;
  type?: "submit" | "reset" | "button";
  outline?: boolean;
  size?: SIZE;
}

export function JnpButton({
  label,
  onClick,
  disabled,
  className,
  color = "PRIMARY",
  type = "button",
  outline = false,
  borderRadius = "MD",
  size = "MD",
}: Readonly<JnpButtonProps>) {
  const buttonStyle = clsx(
    styles.Button,
    className,
    styles[color],
    styles[`size${size}`],
    styles[`borderRadius${borderRadius}`],
    { [styles.DISABLED]: disabled },
    { [styles.OUTLINE]: outline },
  );

  return (
    <button
      type={type}
      className={buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
