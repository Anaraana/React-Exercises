import React, { useState,useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete, MdOutlineCancel, MdSend, MdOutlineSaveAlt } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import "./new-to-do-list.css"


export default function ToDoList() {
  // create a state that saves the todo items
  const [toDoItems, setToDoItems] = useState(localStorage.getItem('my-to-do-list')
  ? JSON.parse(localStorage.getItem('my-to-do-list'))
  : [],);
  // create a state that saves the value of the input field
  const [inputValue, setInputValue] = useState("");
  // create a state that saves if it's a new todo or edit
  const [editItemIdx, setEditItemIdx] = useState(-1);
  // hint: to know which item is being edited, save the item index
// search input field
const [searchInput, setSearchInput]=useState("");
// completed button
const [isCompleted, setIsCompleted]=useState("all")
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.length === 0) {
      alert("Please insert value");
      return;
    } else {
      if (editItemIdx === -1)
        setToDoItems((currState) => {
          return [
            ...currState,
            {
              title: inputValue,
              createdDated: new Date().toUTCString(),
              isCompleted: false,
              id: Math.floor(Math.random()*1000000)
            },
          ];
        });
      else {
        setToDoItems((currState) => {
          return currState.map((saveItem) => {
            return saveItem.id === editItemIdx
              ? { ...saveItem, title: inputValue }
              : saveItem;
          });
        });
        setEditItemIdx(-1);
      }
    }
    setInputValue("");
  };

  // controlled component/input, when user types, save it in the state
  const onInputChange = (e) => {
    if (e.target.value.charAt(0) === " ") {
      alert("Try again");
      return;
    } else setInputValue(e.target.value);
  };
  //create an edit function -better to do it at the end
  const onEdit = (toDo) => {
    setEditItemIdx(toDo.id);
    setInputValue(toDo.title);
  };
  const onDelete = (toDoIdx) => {
    setToDoItems((currState) => {
      return currState.filter((item) => {
        return item.id !== toDoIdx ? true : false;
      });
    });
  };
  const onComplete = (toDoIdx) => {
    // updating the state based on the current state, so use the callback way of to do
    setToDoItems((currState) => {
      return currState.map((currToDo) => {
        return currToDo.id === toDoIdx
          ? {
              ...currToDo,
              isCompleted: !currToDo.isCompleted,
            }
          : currToDo;
      });
    });
  };
  const onEditCancel = () => {
    setEditItemIdx(-1);
    setInputValue("");
  };
  const readFromLocalStorage = () => {
    const savedTodos = localStorage.getItem('my-to-do-list')
    const parsedSavedTodos = JSON.parse(savedTodos)
    if (Array.isArray(parsedSavedTodos))
      setToDoItems(parsedSavedTodos)
    else alert('Not an array!')
  };
  const onSearchField=(e)=>{
    setSearchInput(e.target.value)
  }
 
 


  useEffect(() => {
    const localStorageTodos =
      localStorage.getItem('my-to-do-list')

    if (localStorageTodos) {
      setToDoItems(JSON.parse(localStorageTodos))
    } else {
      localStorage.setItem('my-to-do-list', [])
    }
  }, [])

  useEffect(() => {
    console.log('toDoItems changed')

    localStorage.setItem(
      'my-to-do-list',
      JSON.stringify(toDoItems),
    )
  }, [toDoItems])
  return (
    <div className="toDoListContainer"> <h1>Anar's To Do List</h1>
      <form onSubmit={onFormSubmit}>
        <label>
          Add Chore:
          <input
            placeholder="Add todo Item"
            value={inputValue} /*should read from the state*/
            onChange={onInputChange} /*should update the state*/
          ></input>
        </label>

        <button className="todolist-submit-button" type="submit">{editItemIdx===-1 ?<MdSend /> : <MdOutlineSaveAlt />}
          </button>
      </form>
      <br/>
    <div>
   <label>
    Search: 
    <input 
    placeholder="Search"
    value={searchInput}
    onChange={onSearchField}>
    </input>
   </label>

    </div>
    {["all", "completed", "inCompleted"].map((btnName) => {
            return (
              <button className="todo-status-button"
                onClick={() => {
                  setIsCompleted(btnName);
                }}
              >
                {btnName}
              </button>
            );
          })}

      <br/>
      <div>
        {toDoItems
         .filter((item) => {
          return isCompleted === "completed"
            ? item.isCompleted && item.title.includes(searchInput)
            : isCompleted === "inCompleted"
            ? !item.isCompleted && item.title.includes(searchInput)
            : item.title.includes(searchInput);
        })
        
        .map((toDo, toDoIdx) => {
          return (
            <div className= "smallContainer" key={toDoIdx} style={{ border: "solid darkgray 1px" }} >
              <div
                style={
                  toDo.isCompleted ? { textDecoration: "line-through" } : {}
                }
              >
                {toDo.title}
              </div>
              <div>{toDo.createdDated}</div>
              {/* if is in edit mode, show "cancel" button */}
              {editItemIdx === toDoIdx ? (
                <button className="todolist-edit-button" onClick={onEditCancel}>
                  <MdOutlineCancel />
                </button>
              ) : (
                <div>
                  <button className="todolist-edit-button"  style={{color:"orange"}}onClick={() => onEdit(toDo)}>
                    <FaEdit />
                  </button>
                  <button className="todolist-delete-button" onClick={() => onDelete(toDo.id)}>
                    <MdDelete />
                  </button>
                  <button className="todolist-complete-button"  onClick={() => onComplete(toDo.id)}>
                    <FaRegCheckCircle />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );



  // create an edit function - better to do it at the end

  // create a function that deletes the item from the list (i.e. update the todo items state)

  // create a function that changes the "isCompleted" status

  // updating the state based on the current state, so use the callback way of to do

  // create a function that cancels the edit mode

  /** todo item should include
   * 1. title
   * 2. date
   * 3. button 1 - calls the delete function
   * 4. button 2 - calls the function that changes the isCompleted
   * 5. button 3 - calls the edit function
   */
}

/**
 * Structure of the todo list state data
    [
        {
            title: 'Finish Tic Tac Toe',
            createdDate: '2022-11-01 19:00 PM', // todo item created date
            isCompleted: true
        },
        {
            title: 'Finish Memory Game',
            createdDate: '2022-11-02 19:00 PM', // todo item created date
            isCompleted: false
        }
    ]
 */
