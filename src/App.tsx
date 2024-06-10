import { BrowserRouter } from "react-router-dom";
import PageWrap from "./components/PageWrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <PageWrap />
      </BrowserRouter>
    </>
  );
}

export default App;
