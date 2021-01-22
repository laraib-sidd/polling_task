const express = require('express')
require('./db/mongoose')
const Voter = require('./models/voter');


const app = express()

app.use(express.json())

app.post('/api/vote', async (req, res) => {
    if (req.body) {
        const {
            choice,
            name,
            date
        } = req.body
        const voter = new Voter({
            name,
            time_of_submission: date,
            vote_choice: choice
        })
        try {
            await voter.save()
        } catch (e) {
            res.status(201).send(e)

        }
    }
    res.status(201).send('No Data')
})

app.get('/api/data', async (req, res) => {
    try {
        const voters = await Voter.find()
        res.send(voters)
    } catch (error) {
        res.status(error).send(500)

    }

})

// Helper Function
const get_list = (data) => {
    const groupByDate = {}
    data.forEach(item => {
        if (!groupByDate[item.time_of_submission]) {
            groupByDate[item.time_of_submission] = 0
        }
        groupByDate[item.time_of_submission]++
    });
    const li_dict = []
    for (let [key, value] of Object.entries(groupByDate)) {
        li_dict.push({
            counts: key,
            casted_at: value
        })
    }
    return li_dict
}

app.get('/api/counts', async (req, res) => {
    if (req.query.voting_choice) {
        if (req.query.voting_choice == 'true') {
            const data = await Voter.find({
                "vote_choice": true
            })
            const response_data = get_list(data)
            res.send(response_data)

        }
        if (req.query.voting_choice == 'false') {
            const data = await Voter.find({
                "vote_choice": false
            })
            const response_data = get_list(data)
            res.send(response_data)
        }
    } else {
        return res.status(500).send('No choice')
    }

})

app.get('/api/results', async (req, res) => {
    try {
        const votes = await Voter.find()
        const true_choice = votes.filter(vote => vote.vote_choice == true);
        const false_choice = votes.filter(vote => vote.vote_choice == false);

        const poll_data = [{
                counts: true_choice.length,
                voting_choice: true
            },
            {
                counts: false_choice.length,
                voting_choice: false
            }
        ]

        res.send(poll_data)

    } catch (error) {
        console.log(error)
        res.status(500).send({
            error: 'No Data'
        })

    }


})

module.exports = app;