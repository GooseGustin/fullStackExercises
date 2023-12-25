import { useState } from 'react'

const Header = () => <div><h2>give feedback</h2></div>

const Button = ({func, text}) => {
    return (
        <button onClick={func}>
            {text}
        </button>
    )
}

const computeSumAveragePostive = (good, neutral, bad) => {
    const sum = good + neutral + bad
    const average = (good*1 + bad*(-1)) / sum 
    const percentagePositive = good / sum * 100
    return [sum, average, percentagePositive]
}

const StatisticLine = (props) => (
    <tr>
        <td>{props.text}</td> 
        <td>{props.value}</td>
    </tr>
)

const Statistics = (props) => {
    const data = props.data
    const [sum, average, percentagePositive] = computeSumAveragePostive(data.good_stat, data.neutral_stat, data.bad_stat)
    if (sum===0) {
        return (
            <>
                <h2>statistics</h2>
                <p>No feedback given</p>
            </>
        )
    }
    return (
        <>
            <h2>statistics</h2>
            <table>
                <tbody>
                <StatisticLine text='good' value={data.good_stat} />
                <StatisticLine text='neutral' value={data.neutral_stat} />
                <StatisticLine text='bad' value={data.bad_stat} />
                <StatisticLine text='all' value={sum} />
                <StatisticLine text='average' value={average} />
                <StatisticLine text='positive' value={percentagePositive + ' %'} />
                </tbody>
            </table>
        </>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0) 
    const [bad, setBad] = useState(0)

    const stats = {
        good_stat: good, 
        neutral_stat: neutral, 
        bad_stat: bad 
    }

    const updatedGood = good + 1
    const updatedNeutral = neutral + 1
    const updatedBad = bad + 1

    return (
        <div>
            <Header />
            {/* Button * 3 */}
            <Button func={() => setGood(updatedGood)} text="good" />
            <Button func={() => setNeutral(updatedNeutral)} text="neutral" />
            <Button func={() => setBad(updatedBad)} text="bad" />
            {/* Data */}
            <Statistics data={stats} />
        </div>
    )
}

export default App
