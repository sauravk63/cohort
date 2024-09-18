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

// let counter = 4;
// function App(){
//   const [todos, setTodos] = useState([{
//     id :1,
//     title : 'go to gym',
//     description : 'going to gym'
//   },
//   {
//     id :2,
//     title : 'eat food',
//     description : 'eating you food'
//   },
//   {
//     id :3,
//     title : 'play cricket',
//     description : 'playing cricket'
//   }
// ])
// function addTodo(){

//   setTodos([...todos, {
//     id:counter++,
//     title : Math.random(),
//     description : Math.random()
//   }])
// }
//   return (
//     <div>
//       <button onClick={addTodo}>Add a todo</button>
//     {todos.map(todo=><Todo title={todo.title} description={todo.description} key={todo.id}/> )}
//     </div>
//   )
// }

// function Todo({title, description}){
//   return(
//     <div>
//       <i>
//         {title}
//       </i>
//       &nbsp; - &nbsp;
//       <b>
//         {description}
//       </b>
//       <hr />
//     </div>
//   )
// }

function App(){
  return(
    <div>
      <CardWrapper>
        <TextComponent />
      </CardWrapper>
      <br />
      <CardWrapper>
        hello there
      </CardWrapper>
    </div>
  )
}

function CardWrapper({children}){
  console.log(children);
  
  return (
    <div style={{border:'2px solid black', padding:20}}>
      {children}
    </div>
  )
}

function TextComponent(){
  return <div>
    hello from text c
  </div>
}


export default App
