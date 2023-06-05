import React from 'react';
import './Home.css';

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

const Home: React.FC = () => {
  return (
    <div>

    <div className="background">
      <div className="orbits">
      <div className="outer-orbit"></div>
      <div className="inner-orbit"></div>
      </div>
    </div>

    <div className="home-headers">
      <div className='main-header'>
      <h1 className="main-header-emoji">👋🏽</h1>
      <h1 className="main-header-greeting">kamusta!</h1>
      </div>
      <h2 className="sub-header">
        i’m juan lucas, a computer science major @ uc berkeley
      </h2>
    </div>

    </div>
  );
};

export default Home;