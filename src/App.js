import RoutesMain from "./Routes";
import Global from "./Styles/Global";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <RoutesMain />
      <Toaster />
      <Global />
    </>
  );
}

export default App;
