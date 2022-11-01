import React, { Component } from "react";
import CardList from "./components/card/Card-lsit.component";
import "./App.css";
import SearchBox from "./components/searchBox/searchBox";
import HeaderName from "./components/header/HeaderName";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchValue: "",
    };
  }
  handlechange = (e) => {
    this.setState({ searchValue: e.target.value });
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => this.setState({ monsters: data }));
  }
  render() {
    const { monsters, searchValue } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    return (
      <div className="App">
        <HeaderName />
        <SearchBox
          placeHolder={"Enter Monsters Name"}
          handleChange={this.handlechange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
