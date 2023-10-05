import "./App.css";
import "./components/header";
import Header from "./components/header";
import Aside from "./components/aside";

import { Route, Switch } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage";
import { StyledDiv } from "./style";
import HomePage from "./pages/HomePage";

import ProjectsPage from "./pages/ProjectsPage";
import ReferencesPage from "./pages/ReferencesPage";
import ResumePage from "./pages/ResumePage";
import Certificates from "./pages/CertificatesPage";

function App() {
  return (
    <div className="App">
      <Header />
     
      <StyledDiv >
        <Aside />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/contacts">
            <ContactsPage />
          </Route>
        
          <Route path="/certificates">
            <Certificates />
          </Route>

          <Route path="/projects">
            <ProjectsPage />
          </Route>

          <Route path="/references">
            <ReferencesPage />
          </Route>

          <Route path="/resume">
            <ResumePage />
          </Route>
        </Switch>
      </StyledDiv>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
