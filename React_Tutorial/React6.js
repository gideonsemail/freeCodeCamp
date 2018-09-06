{/*Define propTypes for the Items component to require quantity as a prop and verify that it is of type number.*/}

//Original
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// change code below this line

// change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};

//Solution
Items.propTypes = {quantity: PropTypes.number.isRequired};


{/**************************************************************/}

//Render an instance of the ReturnTempPassword component in the parent component ResetPassword.
//Here, give ReturnTempPassword a prop of tempPassword and assign it a value of a string that is at least 8 characters long.
//SOlution

class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
            { /* change code below this line */ }
            <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>

            { /* change code above this line */ }
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We have generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          { /* change code below this line */ }
          <ReturnTempPassword tempPassword ={'12345678'}/>

          { /* change code above this line */ }
        </div>
    );
  }
};
