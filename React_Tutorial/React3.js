{/*Both the Fruits and Vegetables components are defined for you behind the scenes.
  Render both components as children of the TypesOfFood component,
  then render TypesOfFood to the DOM.
  There is a div with id='challenge-node' available for you to use.*/}


class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* change code below this line */}
       <Fruits />
       <Vegetables />

        {/* change code above this line */}
      </div>
    );
  }
};

// change code below this line
ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))


{/**************************************************************/}

{/*There are Calendar and CurrentDate components in the code editor.
//When rendering CurrentDate from the Calendar component, pass in a property of date assigned to the current date from JavaScript's Date object.
//Then access this prop in the CurrentDate component, showing its value within the p tags.
//Note that for prop values to be evaluated as JavaScript, they must be enclosed in curly brackets, for instance date={Date()}.*/}

//Original
const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The current date is: </p>
      { /* change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate />
        { /* change code above this line */ }
      </div>
    );
  }
};

//Solution

const CurrentDate = (props) => {
  return (
    <div>
      { /* change code below this line */ }
      <p>The current date is: {props.date} </p>
      { /* change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* change code below this line */ }
        <CurrentDate={Date()} />
        { /* change code above this line */ }
      </div>
    );
  }
};
