import axios from 'axios'
import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './Search.css'

export default class Search extends Component {


    search = () => {
       
        // 连续结构赋值+重命名
        const { keyWordNode: { value: city } } = this
        PubSub.publish('send',{isFirst:false,isLoading:true,city:city})
        console.log(city)
        // /api1/search/users?q=${keyWord}
        // https://v0.yiketianqi.com/api?unescape=1&version=v91&appid=43656176&appsecret=I42og6Lm&ext=&cityid=&city=
        axios.get(`https://v0.yiketianqi.com/api?unescape=1&version=v91&appid=43656176&appsecret=I42og6Lm&ext=&cityid=&city=${city}`).then(
            response => {
                PubSub.publish('send',{ isLoading: false, weather: response.data.data})
              
            },
            error => {
                PubSub.publish('send',{ isLoading: false, err: error.message })
            }
        )
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">查找天气</h3>
                <div>
                    <input ref={c => this.keyWordNode = c} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
