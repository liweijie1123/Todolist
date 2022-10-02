import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import Item from '../Item/Item'
import './List.css'

export class List extends Component {

  static PropsTypes={
     task:PropsTypes.array.isRequired,
     updateTask:PropsTypes.func.isRequired,
     deleteTask:PropsTypes.func.isRequired
  }

  render() {
    const{task,updateTask,deleteTask}  =this.props
    let task1 = Array.from(task)
    return (
        <ul className="todo-main">
          {
            task1.map(task=>{
              return (
                <Item key={task.id} {...task} updateTask={updateTask} deleteTask={deleteTask}/>
              )
            })
          }
			</ul>
    )
  }
}

export default List