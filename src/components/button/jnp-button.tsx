interface JnpButtonProps {
  label: string;
}
export function JnpButton({ label }: Readonly<JnpButtonProps>) {
  return <button>{label}</button>;
}
