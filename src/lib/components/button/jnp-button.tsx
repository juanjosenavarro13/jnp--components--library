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
}

export function JnpButton({
  label,
  onClick,
  disabled,
  borderRadius = "MD",
  color = "PRIMARY",
  type = "button",
  className,
  outline = false,
}: Readonly<JnpButtonProps>) {
  const buttonStyle = clsx(
    styles.Button,
    className,
    styles[color],
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
