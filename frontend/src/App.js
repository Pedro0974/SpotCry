import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
// import { NavBarComponent } from "./components/nav-bar/NavBarComponent";
// import { FooterComponente } from "./components/footer/FooterComponent";

function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <Router />
      </BrowserRouter>
    </>
  );

};

export default App;
