import React, { useState } from 'react'

// function App() {
//   const [title, setTitle] = useState('hello')

//   function updateTitle(){
//     setTitle(Math.random())
//   }

//   return (
//     <div>
//     <button onClick={updateTitle}>Update Title 1</button>
//     <Header title={title} />
//     <br />
//     <Header title='world'/>
//     <Header title='world'/>
//     <Header title='world'/>
//     <Header title='world'/>
//     </div>
//   )
      
// }


// const Header = React.memo(function ({title}) {
//   return (
//     <div>
//       {title}
//     </div>
//   )
// })

function App(){
  const [todos, setTodos] = useState([{
    id :1,
    title : 'go to gym',
    description : 'going to gym'
  },
  {
    id :2,
    title : 'eat food',
    description : 'eating you food'
  },
  {
    id :3,
    title : 'play cricket',
    description : 'playing cricket'
  }
])
function addTodo(){

  setTodos([...todos, {
    id:4,
    title : Math.random(),
    description : Math.random()
  }])
}
  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
    {todos.map(todo=><Todo title={todo.title} description={todo.description} /> )}
    </div>
  )
}

function Todo({title, description}){
  return(
    <div>
      <h2>
        {title}
      </h2>
      <h3>
        {description}
      </h3>
    </div>
  )
}

export default App
