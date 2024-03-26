import { JnpButton } from "../lib";
import { Section } from "./components/section";

export function Buttons() {
  return (
    <Section title="Botones">
      <JnpButton label="boton primario" />
      <JnpButton label="boton primario" outline />
      <JnpButton label="boton secundario" color="SECONDARY" />
      <JnpButton label="boton secundario" color="SECONDARY" outline />
      <JnpButton label="boton success" color="SUCCESS" />
      <JnpButton label="boton success" color="SUCCESS" outline />
      <JnpButton label="boton danger" color="DANGER" />
      <JnpButton label="boton danger" color="DANGER" outline />
      <JnpButton label="boton warning" color="WARNING" />
      <JnpButton label="boton warning" color="WARNING" outline />
      <JnpButton label="boton info" color="INFO" />
      <JnpButton label="boton info" color="INFO" outline />
      <JnpButton label="boton light" color="LIGHT" />
      <JnpButton label="boton light" color="LIGHT" outline />
      <JnpButton label="boton dark" color="DARK" />
      <JnpButton label="boton dark" color="DARK" outline />
      <JnpButton label="boton disabled" disabled />
      <JnpButton label="boton disabled" disabled outline />
      <JnpButton
        label="boton click"
        onClick={() => {
          alert("click");
        }}
      />
    </Section>
  );
}
