import React, { Component } from 'react'
import './Footer.css'



export class Footer extends Component {
  handleClearAllDone=()=>{
    this.props.clearAllDone()
  }
  render() {
    var {task} = this.props
    task = Array.from(task)
    const donetask = task.reduce((pre,task)=>{return pre+(task.done ?1:0)},0)
    const totalTask = task.length
    return (
      <div className="todo-footer">
      <label>
        <input type="checkbox"  onChange={e=>{this.props.checkAllTask(e.target.checked)}} checked ={donetask===totalTask&&totalTask!==0? true:false}/>
      </label>
      <span>
        <span>已完成{donetask} </span> / <span>总数 {totalTask}
        </span>
      </span>
      <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
    </div>
    )
  }
}

export default Footer