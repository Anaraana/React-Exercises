import React from 'react';
import {Outlet,useNavigate} from 'react-router-dom'
import './index.css'


export default function PageSharedLayout(){
    const navigate= useNavigate()

    return(
        <div className='project-layout-container'><h1>Projects</h1>
        <div className='main-page'>
            <div  className='menu-buttons-main'>
                <button className='main-page-buttons'onClick={()=> navigate('airbnb')}>Airbnb</button>
                <button className='main-page-buttons'onClick={()=> navigate('tictactoe')}>Tic-Tac-Toe</button>
                <button className='main-page-buttons'onClick={()=> navigate('todolist')}>To Do List</button>
                <button className='main-page-buttons'onClick={()=> navigate('StarRating')}>Star Rating</button>
                <button className='main-page-buttons'onClick={()=> navigate('Status')}>Status</button>
                <button className='main-page-buttons'onClick={()=> navigate('MemoryGame')}>Memory Game</button>
                <button className='main-page-buttons'onClick={()=> navigate ('BMIChart')}>BMI Chart</button>
                <button className='main-page-buttons'onClick={()=> navigate ('ProfileCard')}>Profile Card</button>
                <button className='main-page-buttons'onClick={()=> navigate('LanguageSelector')}>Language Selector</button>
                <button className='main-page-buttons'onClick={()=>navigate('EmployeeList')}>Employee List</button>
                <button className='main-page-buttons'onClick={()=>navigate('ColorPicker')}>Color Picker</button>
                <button className='main-page-buttons'onClick={()=>navigate('ApiCallPlayground')}>Api Call Playground</button>
                <button className='main-page-buttons'onClick={()=>navigate('ChuckNorrisJoke')}>Chuck Norris Joke</button>
                <button className='main-page-buttons'onClick={()=>navigate('FetchGithub')}>Github Account</button>
                <button className='main-page-buttons'onClick={()=>navigate('MovieSearch')}>Movie Search</button>
                <button className='main-page-buttons'onClick={()=>navigate ('Shop')}>Shop</button>
                <button className='main-page-buttons'onClick={()=>navigate ('Counter')}>Counter</button>
                <button className='main-page-buttons'onClick={()=>navigate ('ShoppingList')}>Shopping List</button>
                <button className='main-page-buttons'onClick={()=>navigate ('HTMLTablePlayground')}>HTML Table Playground</button>
                <button className='main-page-buttons'onClick={()=>navigate('RandomDataTable')}>Random Data Table</button>
                <button className='main-page-buttons' onClick={()=>navigate('ImageSlider')}>Image Slider</button>
                <button className='main-page-buttons' onClick={()=>navigate('CrudApi')}>CRUD API</button>
                <button className='main-page-buttons' onClick={()=>navigate('small-theme-app')}>Change Color</button>
                <button className='main-page-buttons' onClick={()=>navigate('Kahoot')}>Kahoot</button>
            </div>
            <div style={{width: '70vw'}}>
                <Outlet/>
            </div>
        </div>
        </div>
        
    )
}