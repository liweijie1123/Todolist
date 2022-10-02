import React, { Component } from 'react'


import './List.css'
export default class List extends Component {
    render() {
        const { users,isFirst,isLoading,err } = this.props
        console.log(users)
        return (
            
            <div className="row">
                {
                    isFirst? <h2>欢迎使用点击搜索</h2>:
                    isLoading ? <h2>Loading</h2>:
                    err ? <h2>{err}</h2>:
                    users.map((userobj) => {
                        return <div key={userobj.id} className="card">
                            <a rel='noreferrer' href={userobj.html_url} target="_blank">
                                <img alt='head' src={userobj.avatar_url} style={{ width: '100px' }} />
                            </a>
                            <p className="card-text">{userobj.login}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}


 