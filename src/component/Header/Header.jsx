import React, { Component } from 'react'
import PropsTypes from 'prop-types'
import { nanoid } from 'nanoid'
import './Header.css'

export class Header extends Component {

  // 对接受参数类型限制
  static PropsTypes={
    addTask:PropsTypes.func.isRequired
  }

  handlekeyUp = (e) => {
    const { keyCode, target } = e
    if (keyCode !== 13) return
    if(target.value.trim()===''){
      alert("输入不能为空")
      return
    }

    console.log(target.value)
    const taskObj = { id: nanoid(), name: target.value, done: false }
    this.props.addTask(taskObj)
    target.value=''

  }
  render() {

    return (
      <div className="todo-header">
        <input onKeyUp={this.handlekeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}

export default Header