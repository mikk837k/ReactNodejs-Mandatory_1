import React from "react";
import ToDoCard from "../ToDoCards/ToDoCard";

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ToDoCards: this.props.toDoCards,
      parentUpdateTime: this.props.parentUpdateTime,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ ToDoCards: res });
      });
  }

  static getDerivedStateFromProps(props, state) {
    if (props.parentUpdateTime !== state.parentUpdateTime) {
      return {
        ToDoCards: props.toDoCards,
        parentUpdateTime: props.parentUpdateTime,
      };
    } else {
      return state;
    }
  }

  handleDeleteClick = (e) => {
    fetch(`http://localhost:8080/${e}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ ToDoCards: res });
      });
  };

  handleDoneClick = (e) => {
    fetch(`http://localhost:8080/${e}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ ToDoCards: res });
      });

    

    const card = document.querySelector(`[data-id="${e}"]`);

    card.style.backgroundColor = "#abff99";

    let buttons = card.children[3].childNodes;
    
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
      buttons[i].classList.add("btn-disabled");
    }
  };

  render() {
    return (
      <div className="listWrapper">
        {/* Create a card for each object in array */}
        {this.state.ToDoCards.map((card, index) => {
          return (
            <ToDoCard
              key={index}
              onDelete={() => this.handleDeleteClick(card.id)}
              onComplete={() => this.handleDoneClick(card.id)}
              toDoCardData={card}
            />
          );
        })}
      </div>
    );
  }
}

export default ToDoList;
