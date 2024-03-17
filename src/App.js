import { Toaster } from "react-hot-toast";
import Main from "./components/Main";
import './theme/fonts.css';

function App() {
  return (
    <>
      <Main />
      <Toaster position="bottom-center" />

    </>
  );
}

export default App;
