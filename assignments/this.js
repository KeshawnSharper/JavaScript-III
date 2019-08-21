/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding is when this takes the value of the window object
* 2. Implicit binding is when the value of this is given to the previous object before the dot
* 3. New binding is when a constructor function references an instance from within 
* 4. Explicit binding is when call or apply is used to define this 
*
* write out a code example of each explanation above
*/

// Principle 1

function windowThis() {
    console.log(this);
  }
  windowThis();

// Principle 2

// code example for Implicit Binding
const ironMan = { 
    name:"Tony Stark "
}
const captainAmerica = {
    name: 'Keshawn',
    hello: () => {
      console.log(`${this.name}`);
      console.log(this);
    }
  };
  captainAmerica.hello();


// Principle 3

// code example for New Binding
function Humanoid (attr){
  this.team = attr.team
  this.weapons = attr.weapons
  this.language = attr.language
}

  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

// Principle 4

// code example for Explicit Binding
CharacterStats.call(this,attr); // binding this to Person