import RoutesMain from "./Routes";
import Global from "./Styles/Global";
import { Toaster } from "react-hot-toast";
import Modal from "./Components/Modal";

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
