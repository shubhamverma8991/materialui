import "./App.css";
import Navbar from "./component/Navbar";
import Test from "./component/test";
import Homepage from "./component/Homepage";
import { ThemeContextProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      {/* <Test /> */}
      <Navbar />
      <Homepage />
    </ThemeContextProvider>
  );
}

export default App;
