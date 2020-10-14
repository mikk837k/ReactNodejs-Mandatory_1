import React from "react";

class Form extends React.Component {
  handleSubmitClick = (e) => {
    e.preventDefault();

    const { onCardCreation } = this.props;

    const card = {
      id: undefined,
      done: undefined,
      title: undefined,
      dueDate: undefined,
      text: undefined,
    };

    const newCard = Object.create(card);

    newCard.id = Date.now();
    newCard.done = false;
    newCard.title = document.querySelector('[data-type="title"]').value;
    newCard.dueDate = document.querySelector('[data-type="dueDate"]').value;
    newCard.text = document.querySelector('[data-type="text"]').value;

    document.querySelector("form").reset();

    fetch("http://localhost:8080/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCard),
    })
      .then((res) => res.json())
      .then((res) => {
        onCardCreation(res);
      });
  };

  render() {
    return (
      <div className="card_container">
        <form>
          <label>
            Card Title
            <input
              data-type="title"
              type="text"
              placeholder="Add a title here"
              required
              autoFocus
            ></input>
          </label>

          <label>
            Due date
            <input type="date" data-type="dueDate"></input>
          </label>

          <label>
            ToDo - Details
            <textarea placeholder="Add text here" data-type="text"></textarea>
          </label>
          <div className="wrapper">
            <button className="btn-secondary" type="reset">
              Cancel
            </button>
            <button className="btn-primary" onClick={this.handleSubmitClick}>
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
