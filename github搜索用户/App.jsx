import React, { Component } from 'react'
import Search  from './component/Search/Search'
import List from './component/List/List'


export default class App extends Component {
  state = {
    users:[],
    isFirst:true,
    isLoading:false,
    err:'' //存储请求相关的信息
  
  }

  updateApp=(obj)=>{
      this.setState(obj)
  }
  render() {
    return (
      <div className="container">
        <Search updateApp={this.updateApp}/>
        <List {...this.state}/>
      </div>
    )
  }
}
