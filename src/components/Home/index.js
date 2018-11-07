import React,  { Component } from 'react';
import Axios from 'axios';

import RepositoryItem from '../RepositoryItem';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            repositories: []
        }
    }
    componentDidMount() {
        Axios.get(`https://api.github.com/search/repositories?q=stars:>=10000+language:go&sort=stars&order=desc`)
        .then(res => {
            this.setState({ repositories: res.data.items });
        });
    }

    render() {
        const { repositories } = this.state;

        return (
            <div className="repository-container">
                {
                    repositories.map(repository => <RepositoryItem
                    key={repository.id}
                    {...repository}
                    />)
                }
            </div>
        )
    }
}

export default Home;