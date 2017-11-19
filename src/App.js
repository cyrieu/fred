// @flow
import React, { Component } from "react";
import BudgetChooser from "./components/BudgetChooser/BudgetChooser";
import CenterContent from "./components/shared/CenterContent";

class App extends Component {
  render() {
    return (
      <CenterContent>
        <BudgetChooser />
      </CenterContent>
    );
  }
}

export default App;
