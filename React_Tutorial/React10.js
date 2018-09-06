//MyComponent has a visibility property which is initialized to false. The render method returns one view if the value of visibility is true, and a different view if it is false.

//Currently, there is no way of updating the visibility property in the component's state.
//The value should toggle back and forth between true and false. There is a click handler on the button which triggers a class method called toggleVisibility().
//Define this method so the state of visibility toggles to the opposite value when the method is called. If visibility is false, the method sets it to true, and vice versa.

//Finally, click the button to see the conditional rendering of the component based on its state.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this)
    // change code above this line
  }
  // change code below this line
toggleVisibility() {
  this.setState({
    visibility: !this.state.visibility
  })
}
  // change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};


//The Counter component keeps track of a count value in state. There are two buttons which call methods increment() and decrement().
// Write these methods so the counter value is incremented or decremented by 1 when the appropriate button is clicked.
// Also, create a reset() method so when the reset button is clicked, the count is set to 0.

//Original
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // change code below this line

    // change code above this line
  }
  // change code below this line

  // change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};

//Solution
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // change code below this line
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
    // change code above this line
  }
  // change code below this line
  increment() {
  this.setState({
    count: this.state.count + 1
  })
}
decrement() {
  this.setState({
    count: this.state.count - 1
  })
}
reset() {
  this.setState({
    count: 0
  })
}

// change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
