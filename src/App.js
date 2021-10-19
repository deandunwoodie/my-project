import "semantic-ui-css/semantic.min.css";
import "./App.css";
import Create from "./components/Create/Create";
// import Update from "./components/Update/Update";
import Delete from "./components/Delete/Delete";
import Read from "./components/Read/Read";
import Details from "./components/Details/Details";
import { quoteSchema } from "./Validations/QuoteValidation";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header/Header";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Header></Header>
        </div>
        <div>
          <Route exact path="/create" component={Create}></Route>
        </div>
        {/* <div>
          <Route exact path="/update" component={Update}></Route>
        </div> */}
        <div>
          <Route exact path="/read" component={Read}></Route>
        </div>
        <div>
          <Route exact path="/details" component={Details}></Route>
        </div>
        <div>
          <Route exact path="/delete" component={Delete}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
