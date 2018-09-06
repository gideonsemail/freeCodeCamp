const JSX = (
  <div className="myDiv">
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);
// change code below this line
ReactDOM.render(JSX, document.getElementById('challenge-node'))

{/* notice the self closing tags and new syntax below */}
const JSX = (
  <div>

    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />

  </div>
);

{/*********************************************************/}

{/* Creating React components*/}

{/* First way to create a React component: A stateless functional component*/}
const MyComponent = function() {
  // change code below this line
  return (
    <div>
    <p>"This is some text"</p>
    </div>
  );
}


{/* The other way to define a React component is with the ES6 class syntax.*/}
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <h1>Hello React!</h1>
      </div>
    )
  }
};
