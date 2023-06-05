import React from 'react';
import './App.css';
import Home from './pages/Home';

// // Assigns types to variables
// let name: string;
// let age: number | string; // Union allows for multi-type
// let isStudent: boolean;
// let hobbies: string[]; // Array of strings
// let role: [number,string]; // Contains 1 number, 1 string

// // Interfaces allows for subclasses
// interface Person { 
//   name: string;
//   age?: number; // "?" means optional argument
// };
// interface Guy extends Person {
//   profession: string;
// } 

// // Instantiates and assignes a new Person to juanLucas
// let juanLucas: Person = {
//   name: "Juan Lucas",
// }

// // Assigns an array of Persons to lotsOfPeople
// let lotsOfPeople: Person[];

// // Defines a function
// let printName1: (name: string) => never; // Never instead of void -> returns null

// // Defines a function
// function printName2(name: string) { // Implicity has anytpe
//   console.log(name);
// }

function App() {
  return (
    <div>

      <div className="background">
        <div className="orbits">
          <div className="outer-orbit"></div>
          <div className="inner-orbit"></div>
        </div>
        <div className='saturn'>
          <div className='saturn-body'></div>
          <div className='saturn-rings'></div>
        </div>
      </div>

      <Home />

    </div>
  );
};

export default App;