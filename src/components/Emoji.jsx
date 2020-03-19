import React, { Component } from "react";
import "../scss/emoji.scss";

export default class Emoji extends Component {
  emojiToClipboard = e => {
    let copyText = e.target.closest(".emoji-box").querySelector(".to-copy");

    let textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    textArea.setSelectionRange(0, 99999);
    document.execCommand("Copy");
    textArea.remove();

    alert(`${copyText.innerText} sent to clipboard...`);
  };

  render() {
    return (
      <div className="emojiBox">
        <div>
          <h1>
            {this.props.title}
            <span className="to-copy">{this.props.symbol}</span>
          </h1>
          <p>{this.props.keywords}</p>
          <div className="btn-wrap">
            <button className="myButton">copy</button>
          </div>
        </div>
      </div>
    );
  }
}
