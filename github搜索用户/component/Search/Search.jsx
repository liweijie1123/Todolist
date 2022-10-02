import axios from 'axios'
import React, { Component } from 'react'
import './Search.css'

export default class Search extends Component {


    search=()=>{
        // 连续结构赋值+重命名
        const {keyWordNode:{value:keyWord}} = this
        this.props.updateApp({isFirst:false,isLoading:true})
        console.log(keyWord)
        // `https:\\api.github.com/search/users?q=${keyWord}`
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response =>{this.props.updateApp({isLoading:false,users:response.data.items})},
            error =>{this.props.updateApp({isLoading:false,err:error.message})}
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c=>this.keyWordNode=c} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
