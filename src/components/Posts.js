import React, { Component } from 'react'

export class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount = async () =>{
        const response = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json()
        this.setState({
            posts: response
        })
    }

    render() {
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.state.posts.map(post => {
                        return (
                            <div key={post.id}>
                                <h3>{post.title}</h3>
                                <p>{post.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Posts
