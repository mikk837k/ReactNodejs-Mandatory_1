import React from "react";

class ToDoCard extends React.Component {
  state = {
    cardData: this.props.toDoCardData,
  };

  render() {
    if (!this.state.cardData.done) {
      return (
        <div className="card_container" data-id={this.state.cardData.id}>
          <h2>{this.state.cardData.title}</h2>
          <h3>Due Date: {this.state.cardData.dueDate}</h3>
          <p>{this.state.cardData.text}</p>
          <div className="wrapper">
            <button className="btn-secondary" onClick={this.props.onDelete}>
              Delete
            </button>
            <button className="btn-primary" onClick={this.props.onComplete}>
              Done
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="card_container"
          style={{ backgroundColor: "#abff99" }}
          data-id={this.state.cardData.id}
        >
          <h2>{this.state.cardData.title}</h2>
          <h3>Due Date: {this.state.cardData.dueDate}</h3>
          <p>{this.state.cardData.text}</p>
          <div className="wrapper">
            <button
              className="btn-secondary btn-disabled"
              disabled
              onClick={this.props.onDelete}
            >
              Delete
            </button>
            <button
              className="btn-primary btn-disabled"
              disabled
              onClick={this.props.onComplete}
            >
              Done
            </button>
          </div>
        </div>
      );
    }
  }
}

export default ToDoCard;
