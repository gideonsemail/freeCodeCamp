//The prepareTea and getTea tasks (functions) have been defined for you.Today is your lucky day.
//Could you please at least get 40 cups of tea for FreeCodeCamp team and store them in tea4TeamFCC variable?/**

 /* A long process to prepare tea.
 * @return {string} A cup of tea.
 **/
const prepareTea = () => '🍵'

/*** Get given number of cups of tea.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/


const getTea = (numOfCups) => {
 const teaCups = []

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea()
    teaCups.push(teaCup)
  }

  return teaCups
}

const tea4TeamFCC = null // :(

console.log(tea4TeamFCC)

//Solution
const tea4TeamFCC = getTea(40)


//Can you prepare 27 cups of green tea and 13 cups of black tea and store them in tea4GreenTeamFCC and tea4BlackTeamFCC variables respectively?
//Hint: Use the getTea function applying two arguments — a function (task) for preparing the relevant tea and the number of cups of tea

const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};

// Add your code below this line

const tea4GreenTeamFCC = null; // :(
const tea4BlackTeamFCC = null; // :(

// Add your code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);


//Solution
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27)
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13)
