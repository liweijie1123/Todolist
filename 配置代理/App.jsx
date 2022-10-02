import React, { Component } from 'react'
import axios from 'axios'
export class App extends Component {
    getStudentDate=()=>{
        axios.get('http://localhost:3000/api1/students').then(
            response =>{console.log('成功了',response.data)},
            error =>{console.log('成功了',error)}

        )
    }
  render() {
    return (
      <div>
        <button onClick={this.getStudentDate}>点我获取数据</button>

      </div>
    )
  }
}

export default App