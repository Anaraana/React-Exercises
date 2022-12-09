import React from 'react';
import {Outlet,useNavigate} from 'react-router-dom'
import './index.css'


export default function PageSharedLayout(){
    const navigate= useNavigate()

    return(
        <div className='project-layout-container'><h1>Projects</h1>
        <div className='main-page'>
            <div  className='menu-buttons-main'style={{width: '20vw'}}>
                <button onClick={()=> navigate('airbnb')}>Airbnb</button>
                <button onClick={()=> navigate('tictactoe')}>Tic-Tac-Toe</button>
                <button onClick={()=> navigate('todolist')}>To Do List</button>
                <button onClick={()=> navigate('StarRating')}>Star Rating</button>
                <button onClick={()=> navigate('Status')}>Status</button>
                <button onClick={()=> navigate('MemoryGame')}>Memory Game</button>
                <button onClick={()=> navigate ('BMIChart')}>BMI Chart</button>
                <button onClick={()=> navigate ('ProfileCard')}>Profile Card</button>
                <button onClick={()=> navigate('LanguageSelector')}>Language Selector</button>
                <button onClick={()=>navigate('EmployeeList')}>Employee List</button>
                <button onClick={()=>navigate('ColorPicker')}>Color Picker</button>
                <button onClick={()=>navigate('ApiCallPlayground')}>Api Call Playground</button>
                <button onClick={()=>navigate('ChuckNorrisJoke')}>Chuck Norris Joke</button>
                <button onClick={()=>navigate('FetchGithub')}>Github Account</button>
                <button onClick={()=>navigate('MovieSearch')}>Movie Search</button>
                <button onClick={()=>navigate ('Shop')}>Shop</button>
                <button onClick={()=>navigate ('Counter')}>Counter</button>
                <button onClick={()=>navigate ('ShoppingList')}>Shopping List</button>
                <button onClick={()=>navigate ('HTMLTablePlayground')}>HTML Table Playground</button>
                <button onClick={()=>navigate('RandomDataTable')}>Random Data Table</button>
            </div>
            <div style={{width: '70vw'}}>
                <Outlet/>
            </div>
        </div>
        </div>
        
    )
}