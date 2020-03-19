import React, { Component } from "react";
import emojiList from "../emojiList.json";
import Emoji from "./Emoji.jsx";
import "../scss/emoji.scss";

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filteredList: emojiList,
      searchResults: 0
    };
  }

  filterByKeywords = event => {
    let searchTerm = event.target.value.toLowerCase();
    let temp = [];
    emojiList
      .filter(item => item.keywords.toLowerCase().includes(searchTerm))
      .map((e, i) => {
        return temp.push(e);
      });

    this.setState({
      filteredList: temp,
      searchResults: temp.length
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="emoji-wrapper">
          <i>Search For Emoji:</i>
          <input
            placeholder="Search"
            className="autocomplete"
            type="text"
            onChange={this.filterByKeywords}
          />

          {this.state.filteredList.map((ele, i) => {
            return this.state.searchResults ? (
              <Emoji
                key={i}
                keywords={ele.keywords}
                title={ele.title}
                symbol={ele.symbol}
              />
            ) : null;
          })}
        </div>
      </React.Fragment>
    );
  }
}
