require('./db/mongoose')
const Voter = require('./models/voter');

const RandomName = () => Math.floor(Math.random() * 6);
const RandomChoice = () => Math.floor(Math.random() * 2);

const names = ['Laraib', 'shaquib', 'shayan', 'rayan', 'ayaan', 'amaan']
const choices = [true, false]
const dates = ['2021-01-10', '2021-01-11', '2021-01-12', '2021-01-13', '2021-01-14', '2021-01-15']



const createMockData = async () => {
    const voter = new Voter({
        name: names[RandomName()],
        vote_choice: choices[RandomChoice()],
        time_of_submission: dates[RandomName()]
    })
    console.log(voter)
    try {
        await voter.save()
    } catch (error) {
        console.log(error)
    }
}

const check_date = async () => {
    const data = await Voter.find({
        "vote_choice": true
    })
    const groupByDate = {}
    data.forEach(item => {
        if (!groupByDate[item.time_of_submission]) {
            groupByDate[item.time_of_submission] = 0
        }
        groupByDate[item.time_of_submission]++
    });
    const li_dict = []
    for(let[key,value] of Object.entries(groupByDate)){
        const dict = {}
        dict[key] = value
        li_dict.push(dict)
    }
    return li_dict
}

check_date()
// for (let index = 0; index < 10; index++) {
//     // console.log(createMockData())
//     createMockData()
// }
// console.log('heos')

// const createMockData1 = async () => {
//     const data = {
//         choice: 'true',
//         name: 'Laraib',
//         date: '2021-03-04'
//     }
//     const voter = new Voter({
//         name: data['name'],
//         vote_choice: data['choice'],
//         time_of_submission: data['date']
//     })
//     await voter.save()
// }

// createMockData1()
// console.log('done')

// Response Data 


// Voter.find().then(res => {
//     console.log(res)
//     // d = res[0]['time_of_submission']
//     // console.log(`${d.getFullYear()}-0${d.getMonth()+1}-${d.getDate()}`)
// })


// for (index = 0; index < 10; index++) {
//     createMockData()
// }
// console.log('done')
// console.log('done')

// function randomDate(start, end) {
//     return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
// }

// const date2 = moment(new Date(+(new Date()) - Math.floor(Math.random()*10000000000)))
// .format('MM/DD/YYYY');
// const date = randomDate(new Date(2012, 0, 1), new Date())
// console.log(date.date2)