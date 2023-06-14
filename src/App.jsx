import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={<Home/>} />
          <Route path="/instructors" component={<instructors/>} />
          <Route path="/classes" component={<classes/>} />
          <Route path="/dashboard" component={<dashboard/>} />
          <Route path="/*" component={<NotFoundPage/>} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
