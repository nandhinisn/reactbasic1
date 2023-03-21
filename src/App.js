import "./styles.css";
import Ptoc from "./ptoc";
import Ctop from "./ctop";
import Displayarray from "./displayarray";
export default function App() {
  const getvalue = (data) => {
    console.log("from children to parent ", data);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Ptoc value="parent to children" />
      <Ctop onSubmit={getvalue} />
      <Displayarray />
    </div>
  );
}
