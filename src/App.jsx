import './App.css';
import React, { Component } from 'react'
import axios from 'axios'
import Footer from './component/Footer/Footer'
import Header from './component/Header/Header';
import List from './component/List/List';

export default class App extends Component {
  state = {
    task: []
  }
  // 子给父传参
  addTask = async (taskObj) => {
    const { task } = this.state
    const newTask = [taskObj, ...task]
    await this.setState({ task: newTask })
    await this.updateList()
  }
  updateList = () => {

    const { task } = this.state
    console.log(task)
    axios.post('/update', task)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  sendHistory=(taskObj)=>{
    axios.post('/history', taskObj)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  updateTask = async (id, done) => {
    const { task } = this.state
    const newtask = task.map((taskobj) => {
      if (taskobj.id === id) return { ...taskobj, done }
      else return taskobj
    })
    await this.setState({ task: newtask })
    await this.updateList()
  }

  deleteTask = async (id) => {
    const { task } = this.state
    task.forEach((item)=>{
      if(item.id===id)
        this.sendHistory(item)
    })
    const newTask = task.filter((taskobj) => {
      return taskobj.id !== id
    })

    await this.setState({ task: newTask })
    await this.updateList()
  }

  checkAllTask = async (done) => {
    const { task } = this.state
    const newTask = task.map((taskObj) => {
      return { ...taskObj, done }
    })
    await this.setState({ task: newTask })
    await this.updateList()
  }
  clearAllDone = async () => {
    const { task } = this.state
   task.forEach((item)=>{
    if(item.done)
    this.sendHistory(item)
   })
    const newTask = task.filter((taskObj) => {
      return !taskObj.done
    })
    await this.setState({ task: newTask })
    await this.updateList()
  }

  componentDidMount() {
    axios.get(`/list`, { l: 1 }).then(
      response => { this.setState({ task: response.data }) },
      error => { this.props.updateApp({ isLoading: false, err: error.message }) }
    )
  }
  render() {
    const { task } = this.state
    // console.log({data:JSON.stringify(task)})
    return (
      <div className='todo-container'>
        <div className="todo-wrap">
          <Header addTask={this.addTask} />
          <List task={task} updateTask={this.updateTask} deleteTask={this.deleteTask} />
          <Footer task={task} checkAllTask={this.checkAllTask} clearAllDone={this.clearAllDone} />
        </div>
      </div>
    )
  }
}

