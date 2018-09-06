//Add a style attribute to the div in the code editor to give the text a color of red and font size of 72px.

//Solution
class Colorful extends React.Component {
  render() {
    return (
      //Notice how we camelCase the "fontSize" property? Hyphenated words like font-size are invalid syntax for JavaScript object properties, so React uses camel case.
      <div style={{color: "red", fontSize: 72}}>Big Red</div>
    );
  }
};

//If you have a large set of styles, you can assign a style object to a constant to keep your code organized.
//Uncomment the styles constant and declare an object with three style properties and their values.
//Give the div a color of "purple", a font-size of 40, and a border of "2px solid purple". Then set the style attribute equal to the styles constant.

//Original

const styles = {
  style={{color: "purple", font-Size: 40, border: "2px solid purple"}}
}
// change code above this line
class Colorful extends React.Component {
  render() {
    // change code below this line
    return (
      <div style={{color: "yellow", fontSize: 24}}>Style Me!</div>
    );
    // change code above this line
  }
};

//Solution

const styles = {
  color: "purple", fontSize: 40, border: "2px solid purple"}
// change code above this line
class Colorful extends React.Component {
  render() {
    // change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // change code above this line
  }
};
