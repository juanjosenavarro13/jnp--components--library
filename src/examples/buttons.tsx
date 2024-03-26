import { JnpButton } from "../lib";
import { Section } from "./components/section";

export function Buttons() {
  return (
    <Section title="Botones">
      <JnpButton label="boton primario" />
      <JnpButton label="boton secundario" type="SECONDARY" />
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
