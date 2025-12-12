import React from "react";
import { Link } from "react-router-dom";

class Articles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            users: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => this.setState({articles: json}));

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(json => this.setState({users: json}));
    }

    render() {
        return (
            <div>
                <h1>Articles</h1>
                {this.state.articles.map((article) => {
                    return (
                        <div key = {article.id}>
                            <h2>{article.title}</h2>
                            <h4>Written by {this.state.users.filter(user => user.id === article.userId)[0]?.name}</h4>
                            <Link to = {`/articles/${article.id}`}>Read article</Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Articles;