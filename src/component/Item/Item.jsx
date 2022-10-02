import React, { Component } from 'react'
import './Item.css'

export class Item extends Component {
   state={
    mouse:false
   }
  //  鼠标移动判断
  handleMouse=(flag)=>{
    return ()=>{
      this.setState({mouse:flag})
    }
  }

  handleCheck=(id)=>{
    return(e)=>{
      this.props.updateTask(id,e.target.checked)
    }

  }

  handleDelete=(id)=>{
    if(window.confirm('确定删除吗？')){
    this.props.deleteTask(id)
    }
  }

  render() {
    const {id,name,done} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor:mouse? 'orange':'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
          <span>{name}</span>
        </label>
        <button onClick={()=>this.handleDelete(id)} className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
      </li>

    )
  }
}

export default Item