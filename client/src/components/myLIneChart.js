import React, { Component } from 'react';
import axios from 'axios'
import { Line } from 'react-chartjs-2'
export class Linechart extends Component {
    constructor(props) {
        super(props)
        this.state = { Data: {} }
    }
    componentDidMount() {
        axios.get('/api/counts?voting_choice=true')
            .then(res => {
                console.log(res);
                const poll = res.data
                let vote_count = []
                let vote_time = [];
                poll.forEach(record => {
                    vote_count.push(record.counts);
                    vote_time.push(record.casted_at);
                });
                this.setState({
                    Data: {
                        labels: vote_time,
                        datasets: [{
                            label: 'Vote Check',
                            data: vote_count,
                            backgroundColor: "Blue"
                        }]
                    }
                })

            })
    }
    render() {
        return (
            <div><Line data={this.state.Data} options={{ maintainAspectRatio: false }} /></div>
        )
    }
}

export default Linechart