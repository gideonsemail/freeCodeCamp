//The code editor has an array with some front end frameworks and a stateless functional component named Frameworks().
// Frameworks() needs to map the array to an unordered list, much like in the last challenge.
//Finish writing the map callback to return an li element for each framework in the frontEndFrameworks array. This time, make sure to give each li a key attribute, set to a unique value.
//Original
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = //change this
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};

//Solution
const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map((item, index) => {return <li key={index}>{item}</li>});
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};
//Explanation
//Array.map callback function does take as first parameter the current element of the array you are iterating over in your case ‘item’ and second one is the ‘index’ for each element. 0 ,1… up to the length of the array.

//This time map gets every ‘item’= ‘React’, ‘Angular’, ‘Ember’… from frontEndFrameworks array and each ‘index’ = 0,1,2 … and does return an jsx element, for each iteration, with key attribute and uses jsx assigning style for each index until the array is exhausted.
//First li element has key= 0 …second li element has key = 1 and so on … you can guess what is returned here for {item} .

/*******************************************/

//In the code editor, MyComponent's state is initialized with an array of users. Some users are online and some aren't.
//Filter the array so you see only the users who are online. To do this, first use filter to return a new array containing only the users whose online property is true.
//Then, in the renderOnline variable, map over the filtered array, and return a li element for each user that contains the text of their username.
//Be sure to include a unique key as well, like in the last challenges.

/Original
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    }
  }
  render() {
    const usersOnline = //change code

    const renderOnline = //change code
    return (
       <div>
         <h1>Current Online Users:</h1>
         <ul>
           {renderOnline}
         </ul>
       </div>
    );
  }
};

//Solution
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    }
  }
  render() {
    const usersOnline = this.state.users.filter(users => users.online)
//You are filtering out each individual user, and checking if user.online which is a property in the user object is true, which can be expressed simply by saying user.online instead of user.online === true.
const renderOnline = usersOnline.map((item, i) => {
return <li key={i}>{item.username}</li>
}); 
    return (
       <div>
         <h1>Current Online Users:</h1>
         <ul>
           {renderOnline}
         </ul>
       </div>
    );
  }
};
