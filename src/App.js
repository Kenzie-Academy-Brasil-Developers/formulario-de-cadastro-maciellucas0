import RoutesMain from "./Routes";
import Global from "./Styles/Global";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Global />
      <RoutesMain />
    </>
  );
}

export default App;
