import React, { Component } from 'react'
import axios from 'axios';
import { Bar } from 'react-chartjs-2'

// export class Barchart extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { Data: {} }
//     }
//     componentDidMount() {
//         console.log('reached')
//         axios.get('/api/results').then(res => {
//             const poll = res.data
//             console.log(poll)
//             let true_count = poll[0].counts
//             let false_count = poll[1].counts
//             console.log('trye',true_count)
//             console.log('rywqe',false_count)
//             this.setState({
//                 Data: {
//                     labels: ['True', 'False'],
//                     datasets: [
//                         {
//                             label: 'True',
//                             data: 15,
//                             backgroundColor: "Blue"
//                         }, {
//                             label: 'False',
//                             data: 54,
//                             backgroundColor: "red"

//                         }
//                     ]
//                 }
//             })

//         })
//     }
//     render() {
//         return (
//             <div><Bar data={this.state.Data} options={{ maintainAspectRatio: false }} ></Bar></div>
//         )
//     }
// }

// http://localhost:3004


const Luli = () => {
    // const data = 

    return (
        <h1>Working</h1>
        
    )
}

export default Luli

