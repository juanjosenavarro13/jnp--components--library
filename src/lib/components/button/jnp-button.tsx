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
}

export function JnpButton({
  label,
  onClick,
  disabled,
  borderRadius = "MD",
  color = "PRIMARY",
  type = "button",
  className,
}: Readonly<JnpButtonProps>) {
  const buttonStyle = clsx(styles.Button, className, {
    [styles.borderRadiusSM]: borderRadius === "SM",
    [styles.borderRadiusMD]: borderRadius === "MD",
    [styles.borderRadiusXL]: borderRadius === "XL",
    [styles.PRIMARY]: color === "PRIMARY",
    [styles.SECONDARY]: color === "SECONDARY",
    [styles.SUCCESS]: color === "SUCCESS",
    [styles.DANGER]: color === "DANGER",
    [styles.WARNING]: color === "WARNING",
    [styles.INFO]: color === "INFO",
    [styles.LIGHT]: color === "LIGHT",
    [styles.DARK]: color === "DARK",
    [styles.DISABLED]: disabled,
  });

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
