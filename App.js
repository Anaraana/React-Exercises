// import './App.css';
// import PersonComponent from './person';
// const names = ["anar", "huluguu", "mandahaa", "ziggy", "jaagii"]
// function App() {
//   return (
//     <div className="App">
//     {names.map((firstName, nameIdx)=>{
//       return (
//         <PersonComponent firstName= {firstName} key={nameIdx} />
//       )
//     }
//     )}
//     {/* <PersonComponent firstName= 'Anar'/>
//     <PersonComponent firstName='Huluguu'/>
//      <PersonComponent firstName= 'Mandahaa'/> */}
//     </div>
//   );
// }

// export default App;
import "./App.css";
import ProfileCard from "./profile-card/profile-card-parent";
// import NameField from "./name-field/name-field-parent"
// import Airbnb from "./airbnb/parent";
// import DemoUses from "./component/useState-demo";
// import DemoUseState from "./component/useState-demo/object-example";
// import Fireworks from "./fireworks/fireworks";
// import Counter from "./counter-example/counter-example";
import Status from "./status-picker/status-picker";
import Language from "./language-picker/language-picker";
// import DemoUsesStates from "./component/useState-demo";
// import DemoUseState from "./component/useState-demo/object-example";
// import ToDoList from "./to-do-list/parent";
import CarOwnerParent from "./car-owners-props/parent";


function App() {
  return (
    <div className="App">
      {/* <CarOwnerParent /> */}
      {/* <ToDoList/> */}
      {/* <Airbnb/> */}
      {/* <DemoUseState /> */}
      {/* <Fireworks /> */}
      {/* <Counter/> */}
      {/* <Status /> */}
      <Language />
      {/* <NameField /> */}
      {/* <ProfileCard /> */}
    
    </div>
  );
}

export default App;
