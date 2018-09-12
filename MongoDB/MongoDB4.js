/*************UUpdates: Run, edit, then Save**************/

//No clue how this was done. Check this forum post maybe
https://forum.freecodecamp.org/t/beta-mongoose-challenges-perform-classic-updates-by-running-find-edit-then-save/188191

//Solution
let findEditThenSave = function(personId, done) {
let foodToAdd = 'hamburger';

Person.findById(personId, (err, data) => {
    if (err) {
       done(err)
      }
    console.log(data);
     data.favoriteFoods.push(foodToAdd);
      data.save((err, data) => {
       if (err) {
        done(err)
         } else {
           done(null, data)
          }
  });
  });
};

/*************Perform new UPdates using fidoneAndUpdate*************/



The Glitch URL is: https://incredible-decision.glitch.me
