import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Airbnb from "./airbnb/parent";
import TicTacToe from "./tic-tac-toe/tic-tac-toe";
import ToDoList from "./new-to-do-list/new-to-do-list";
import PageSharedLayout from "./menu/layout";
import RatingStar from "./star-ratings/star-rating";
import Status from "./status-picker/status-picker";
import MemoryGame from './memory-game/memory-game';
import BMIChart from "./bmi-tracker";
import ProfileCard from "./profile-card/profile-card-parent";
import LanguageSelector from "./language-picker/language-picker";
import EmployeeList from './employee-list/index';
import ColorPicker from "./color-picker/color.picker";
import ApiCallPlayground from "./api-call-playground";
import ChuckNorrisJoke from "./chuck-norris-joke";
import FetchGithub from "./api-github";
import MovieSearch from "./movie-search";
import Shop from "./shopping";
import DrinkDetails from "./shopping/drinkDetails";
import Counter from "./counter-example/use-reducer";
import ShoppingList from "./shopping-list";
import HTMLTablePlayground from "./table-playground";
import RandomDataTable from "./table-exercise";
import ImageSlider from "./image-slider";
import CrudApi from "./crud-api-exercise";

import EmployerEdit from "./crud-api-exercise/employer-edit";
import AppGitHub from "./component-tree";
import ChangeColor from "./small-theme-app";
import Kahoot from "./Kahoot";




// import TicTacToe from './tic-tac-toe/tic-tac-toe';
// import LanguageSelector from "./language-picker/language-picker";
// import PageSharedLayout from "./router-playground/layout";

// import Page1 from "./router-playground/page1";
// import Page2 from "./router-playground/page2";
// import Page3 from "./router-playground/page3";

// export default App;
// import "./App.css";

// import ProfileCard from "./profile-card/profile-card-parent";
// import NameField from "./name-field/name-field-parent"
// import AirBnb from "./airbnb/parent";
// import DemoUses from "./component/useState-demo";
// import DemoUseState from "./component/useState-demo/object-example";
// import Fireworks from "./fireworks/fireworks";
// import Counter from "./counter-example/counter-example";
// // import Status from "./status-picker/status-picker";
// import LanguageSelector from "./language-picker/language-picker";
// import DemoUsesStates from "./component/useState-demo";
// import DemoUseState from "./component/useState-demo/object-example";
// import ToDoList from "./to-do-list/parent";
// import CarOwnerParent from "./car-owners-props/parent";
// import DataManupilationEx from "./sample-data/sample-data";
// import RatingStar from "./star-ratings/star-rating";
// import ControlledComp from "./controlled-comp/controlled-comp";
// import TicTacToe from "./tic-tac-toe/tic-tac-toe";
// import UpdatedToDoList from "./new-to-do-list/new-to-do-list"
// import LocalStoragePlayground from "./localStorage-playground/index";
// import MemoryGame from "./memory-game/memory-game";
// import UseEffectPlayground from "./useEffect-playground/useEffect";
// import BMIChart from "./bmi-tracker/index";
// import ToDoList from "./khulug-todo";
// import { EmployeeList } from "./employee-list";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageSharedLayout />}>
            <Route path="airbnb" element={<Airbnb />}></Route>
            <Route path="tictactoe" element={<TicTacToe />}></Route>
            <Route path="todolist" element={<ToDoList />}></Route>
            <Route path="LanguageSelector" element={<LanguageSelector/>}></Route>
            <Route path='StarRating' element={<RatingStar />}></Route>
            <Route path='Status' element={<Status />}></Route>
            <Route path='MemoryGame' element={<MemoryGame />}>MemoryGame</Route>
            <Route path='BMIChart' element={<BMIChart/>}>BMIChart</Route>
            <Route path='ProfileCard' element={<ProfileCard/>}>ProfileCard</Route>
            <Route path="EmployeeList" element={<EmployeeList/>}>EmployeeList</Route>
            <Route path="ColorPicker" element={<ColorPicker/>}></Route>
            <Route path="ApiCallPlayground" element={<ApiCallPlayground/>}>ApiCallPlayground</Route>
            <Route path='ChuckNorrisJoke' element={<ChuckNorrisJoke/>}></Route>
            <Route path="FetchGithub" element={<FetchGithub/>}></Route>
            <Route path="MovieSearch" element={<MovieSearch/>}></Route>
            <Route path="Shop" >
              <Route index element={<Shop/>}/> 
              <Route path=":idDrink" element={<DrinkDetails/>}  />
            </Route>
            <Route path="Counter2" element={<Counter/>}></Route>
            <Route path="ShoppingList" element={<ShoppingList/>}></Route>
            <Route path="HTMLTablePlayground" element={<HTMLTablePlayground/>}></Route>
            <Route path="RandomDataTable" element={<RandomDataTable/>}></Route>
            <Route path='ImageSlider' element={<ImageSlider/>}></Route>
            <Route path='CrudApi'>
              <Route index element={<CrudApi/>}/>
              <Route path=":apiId" element={<EmployerEdit/>}></Route>

            </Route>
            <Route path="employer-edit" element={<EmployerEdit/>}></Route>
            <Route path="component-tree" element={<AppGitHub/>}></Route>
            <Route path="small-theme-app" element={<ChangeColor/>}></Route>
            <Route path="Kahoot" element={<Kahoot/>}></Route>
          </Route>
          {/* <Route path='/page1' element= {<Page1/>}></Route>
        <Route path='/page2' element= {<Page2/>}></Route>
        <Route path='/page3' element= {<Page3/>}></Route>
        <Route path="/TicTacToe" element={<TicTacToe />}></Route> */}
        </Routes>
      </BrowserRouter>
      {/* <CarOwnerParent /> */}
      {/* <ToDoList/> */}
      {/* <AirBnb/> */}
      {/* <DemoUseState /> */}
      {/* <Fireworks /> */}
      {/* <Counter/> */}
      {/* <Status /> */}
      {/* <LanguageSelector /> */}
      {/* <NameField /> */}
      {/* <ProfileCard /> */}
      {/* <DataManupilationEx /> */}
      {/* <RatingStar /> */}
      {/* <TicTacToe /> */}
      {/* <ControlledComp /> */}
      {/* <UpdatedToDoList /> */}
      {/* <LocalStoragePlayground /> */}
      {/* <MemoryGame /> */}
      {/* <UseEffectPlayground /> */}
      {/* < BMIChart /> */}
      {/* <ToDoList /> */}
      {/* <EmployeeList /> */}
    </div>
  );
}

export default App;
