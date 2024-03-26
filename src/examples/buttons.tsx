import { JnpButton } from "../lib";
import { Section } from "./components/section";

export function Buttons() {
  return (
    <Section title="Botones">
      <JnpButton label="boton primario" />
      <JnpButton label="boton secundario" type="SECONDARY" />
      <JnpButton label="boton success" type="SUCCESS" />
      <JnpButton label="boton danger" type="DANGER" />
      <JnpButton label="boton warning" type="WARNING" />
      <JnpButton label="boton info" type="INFO" />
      <JnpButton label="boton light" type="LIGHT" />
      <JnpButton label="boton dark" type="DARK" />
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
