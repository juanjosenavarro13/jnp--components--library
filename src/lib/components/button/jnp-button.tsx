import { clsx } from "clsx";
import styles from "./jnp-button.module.css";
import { TYPE } from "../../types/color";
import { SIZE } from "../../types/size";

interface JnpButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  borderRadius?: SIZE;
  type?: TYPE;
  className?: string;
}

export function JnpButton({
  label,
  onClick,
  disabled,
  borderRadius = "MD",
  type = "PRIMARY",
  className,
}: Readonly<JnpButtonProps>) {
  const buttonStyle = clsx(styles.Button, className, {
    [styles.borderRadiusSM]: borderRadius === "SM",
    [styles.borderRadiusMD]: borderRadius === "MD",
    [styles.borderRadiusXL]: borderRadius === "XL",
    [styles.PRIMARY]: type === "PRIMARY",
    [styles.SECONDARY]: type === "SECONDARY",
    [styles.SUCCESS]: type === "SUCCESS",
    [styles.DANGER]: type === "DANGER",
    [styles.WARNING]: type === "WARNING",
    [styles.INFO]: type === "INFO",
    [styles.LIGHT]: type === "LIGHT",
    [styles.DARK]: type === "DARK",
    [styles.DISABLED]: disabled,
  });

  return (
    <button className={buttonStyle} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
