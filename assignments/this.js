/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - refers to the value of 'this' in the window/console of the object

* 2. Implicit Binding - the object left to the dot refers to this (automatice assigns automaticly to the left of the called function to the period.)


* 3. New Binding - constructing a new object by using a new keyword and using this to point to that object.


* 4. Explicit Binding - telling Javscript Engine to set a point to a certain value such as 'call', 'apply', or 'bind'.
*


* write out a code example of each explanation above
*/

// Principle 1

            // code example for Window Binding
            'use strict';
            function ghost(){
            console.log(this.boo);
            }

            const boo = "👻";

            ghost();
            console.log(this);
// Principle 2

// code example for Implicit Binding


            // let myGhost = {
            //   name: 'Casper',
            //   boo: 'boo👻👻',
            //   ghost: function(){
            //     console.log(this.boo);
            //   }
            //   }
            myGhost.ghost();//invoking function here object to the left represents 'this'


            // Principle 3

// code example for New Binding


            //  function food(favorite){
               this.food = favorite; // <- this points to the new keyword when the fucntion is called
            //  }
            let myFavouriteFood = new food('Bacon'); // New binding example.

            //   console.log(`My favourite food is ${myFavouriteFood.food}`);


// Principle 4

// code example for Explicit Binding

            // function ghost(){
            // console.log(this.boo);
            // }
            // let myGhost ={
            //   name: 'Capser',
            //   boo: 'ahhhhhhhhhhh🙀🙀',
            // }
            friendlyGhost = ghost.bind(myGhost) // example of explict binding 

            // friendlyGhost();