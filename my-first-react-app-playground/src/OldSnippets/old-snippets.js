// const App = props => {

//   // array destructiring [ state, reference function to set new state]
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: "sven_1", age: 30 },
//       { name: "sven_2", age: 31 },
//       { name: "sven_3", age: 32 }
//     ],
//     otherState: "other state man !"
//   });

//   const [otherState, setOtherState] = useState({
//     otherState: "other state man !"
//   })

//   console.log(personsState, otherState);

//   const swtchNameHandler = () => {
//     console.log("CLicked SwitchName Handler");
//     // this.state.persons[0].name = 'sven_new_1';
//     setPersonsState( {
//       persons: [
//         { name: "sven_1_new", age: 30 },
//         { name: "sven_2", age: 31 },
//         { name: "sven_3", age: 32 }
//       ]
//     } );

//     setOtherState( {
//       otherState: "other state man ! " + Math.floor(Math.random() * 30)
//     } )
//   };

//   return (
//     <div className="App">
//       <button onClick={swtchNameHandler}>Switch Name</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >
//         My Hobbies are: drumming and programming
//       </Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
//     </div>
//   );
// };

// export default App;

// function App() {

//   return (
//   <div className="App">
//       <Person name="sven_1" age="32" />
//       <Person name="sven_2" age="33">My Hobbies are: drumming and programming</Person>
//       <Person name="sven_3" age="34" />
//   </div>
// );
// }

// export default App;

/* this.swtchNameHandler.bind(this, 'El Svenno') */
/* Anonymous Function with reference to switchNameHandler */
/* onClick={() => this.swtchNameHandler("El Svenno")} */
/* style={style} */
/* { this.state.showPersons === true ? <div > */
/* </div> : <div>Nothing !</div> */
/* 
<Person name={this.state.username} change={this.manipulateUsernameHandler}/>
<Person name={this.state.username} change={this.manipulateUsernameHandler}/>
<Person name={this.state.username} change={this.manipulateUsernameHandler}/> 
*/

// const IOstyle = {
//   backgroundColor: "lightgrey",
//   font: "inherit",
//   border: "1px solid blue",
//   padding: '8px',
//   cursor: 'pointer'
// }

// style={IOstyle}
