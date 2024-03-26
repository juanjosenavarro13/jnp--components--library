import { JnpButton } from "../lib";
import { Section } from "./components/section";

export function Buttons() {
  return (
    <Section title="Botones">
      <JnpButton label="boton primario" />
      <JnpButton label="boton secundario" color="SECONDARY" />
      <JnpButton label="boton success" color="SUCCESS" />
      <JnpButton label="boton danger" color="DANGER" />
      <JnpButton label="boton warning" color="WARNING" />
      <JnpButton label="boton info" color="INFO" />
      <JnpButton label="boton light" color="LIGHT" />
      <JnpButton label="boton dark" color="DARK" />
      <JnpButton label="boton disabled" disabled />
      <JnpButton
        label="boton click"
        onClick={() => {
          alert("click");
        }}
      />
    </Section>
  );
}
