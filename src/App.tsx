import { JnpButton } from "./lib";

function App() {
  return (
    <>
      <JnpButton label="hola" onClick={()=>{console.log('aaa')}} borderRadius="SM"  disabled/>
      <JnpButton label="hola" onClick={()=>{console.log('aaa')}} borderRadius="MD" type="SECONDARY" disabled />
      <JnpButton label="hola" onClick={()=>{console.log('aaa')}} borderRadius="XL" type="PRIMARY" />
    </>
  );
}

export default App;
