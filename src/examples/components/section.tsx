import styles from "./section.module.css";
interface SectionProps {
  children: JSX.Element[] | JSX.Element;
  title: string;
}
export function Section({ children, title }: Readonly<SectionProps>) {
  return (
    <section className={styles.section}>
      <h1>{title}</h1>
      <main>{children}</main>
    </section>
  );
}
