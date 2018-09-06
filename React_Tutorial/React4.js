const List= (props) => {
  { /* change code below this line */ }
  return <p></p>
  { /* change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* change code below this line */ }
        <List tasks />
        <h2>Tomorrow</h2>
        <List />
        { /* change code above this line */ }
      </div>
    );
  }
};

//Solution
const List = (props) => {
  { /* change code below this line */ }
  return <p>{props.tasks.join(", ")}</p>
  { /* change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* change code below this line */ }
        <List tasks={["walk dog", "talk to cuz"]} />
        <h2>Tomorrow</h2>
        <List tasks={["hug Grandma", "call Dad", "call Steve"]} />
        { /* change code above this line */ }
      </div>
    );
  }
};
