import React from "react";

import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MdHome } from "react-icons/md";

import AboutPage from "../Pages/About/About";
import Form from "../Components/ToDoCards/ToDoCardForm";
import ToDoList from "../Components/ToDoList/ToDoList";

class App extends React.Component {
  state = {
    newCardPosted: false,
    aToDoCards: [],
    updateTime: null,
  };

  handleFormSubmit = (res) => {
    this.setState({ aToDoCards: res, updateTime: Date.now() });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <ul>
              <li>
                <Link to="/">
                  <MdHome size={43} />
                </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </header>
          <Switch>
            <Route exact path="/">
              <Form onCardCreation={this.handleFormSubmit} />
              <ToDoList
                toDoCards={this.state.aToDoCards}
                parentUpdateTime={this.state.updateTime}
              />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
