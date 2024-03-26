import styles from "./container.module.css";
interface ContainerProps {
  children: JSX.Element | JSX.Element[];
}
export function Container({ children }: Readonly<ContainerProps>) {
  return <div className={styles.container}>{children}</div>;
}
