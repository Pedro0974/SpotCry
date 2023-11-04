import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { NavBarComponent } from "./components/nav-bar/NavBarComponent";
import { FooterComponente } from "./components/footer/FooterComponent";

function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <NavBarComponent />
        <Router />
        <FooterComponente />
      </BrowserRouter>
    </>
  );

};

export default App;
