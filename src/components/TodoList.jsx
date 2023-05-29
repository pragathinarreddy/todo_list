import React, { useState } from 'react'

function TodoList() {
    const [value, setValue] = useState("")
    const [todos, setTodos] = useState([])


    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let newOne = {
            id : Date.now(),
            value : value ,
            watch : false
        }
        
        setTodos([...todos, newOne])
        setValue("")

    }

    const handleWatch = (id) => {
        let comingTodos = todos.map((each) => {
            if(each.id === id){
                return {
                    ...each, watch : !each.watch
                }
            }
            return(each)
        })
        setTodos(comingTodos)
        
    }
    const handleDelete = (id) => {
        let deletedTodos = todos.filter((each) => {
            if(each.id !== id){
                return{
                    ...each

                }
            }
        })
        setTodos(deletedTodos)
        

    }

  return (
    <div>
        <div className='container'>
            <h1 className='heading'>MOVIE LIST</h1>
            <form onSubmit={(event) => handleSubmit(event)} action="">
            <input value={value} onChange={(event) => handleChange(event)} className='input' type="text" placeholder='Enter your todo list' />

            </form>
            {
                todos.map((each) => {
                    return(
                        <>
                        <div className='text flex'>
                        <h2 className='value'>{each.value}</h2>
                        <button  className='watch' onClick={() => handleWatch(each.id)}>{each.watch === true ? "To watch" : "watched"}</button>
                        <h2 onClick={() => handleDelete(each.id)} className='cross'>X</h2>

                        </div>
                        <hr  className='line'/>
                        </>
                    )
                })
            }
        </div>
    </div>
  )
}

export default TodoList
