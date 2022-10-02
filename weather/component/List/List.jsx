import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import { nanoid } from 'nanoid'

import './List.css'
export default class List extends Component {

    state = {
        city:'',
        weather:[],
        isFirst:true,
        isLoading:false,
        err:'' //存储请求相关的信息
      
    }
    componentDidMount(){
        PubSub.subscribe('send',(_,stateobj)=>{
            this.setState(stateobj)
        })
    }
    render() {
        const { weather,isFirst,isLoading,err } = this.state
        console.log(weather)
        return (
            
            <div className="row">
                {
                    isFirst? <h2>欢迎使用点击搜索</h2>:
                    isLoading ? <h2>Loading</h2>:
                    err ? <h2>{err}</h2>:
                    weather.map((wertherobj) => {
                        return <div key={nanoid()} className="card">
                            <div>{this.state.city}</div>
                           <div>天气：{wertherobj.wea}</div>
                           <div>{wertherobj.week}</div>
                           <div>{wertherobj.date}</div>
                        </div>
                    })
                }
            </div>
        )
    }
}


 