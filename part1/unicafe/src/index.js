import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const FeedbackInput = (props) => {
  const {good, setGood, neutral, setNeutral, bad, setBad } = props.survey
  return (
    <div>
    <h1>give feedback</h1>
      <div>
        <button onClick={() => setGood(good + 1)}>
          good
        </button>
        <button onClick={() => setNeutral(neutral + 1)}>
          neutral
        </button>
        <button onClick={() => setBad(bad + 1)}>
          bad
        </button>
      </div>
    </div>
  )
}

const Statistics = (props) => {
  const {good, bad, neutral} = props
  const all = good + bad + neutral
  const average = (good - bad) / all
  const percentPositive = good / all * 100
  if (all !== 0) {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={all} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={percentPositive} />
          </tbody>
        </table>
     </div>
   )
  } else {
    return (
      <p>No Stats Yet</p>
    )
  }
}

const Statistic = (props) => {
  const {text, value} = props
  return (
    <tr>
      <td>{text}</td><td>{value}</td>
    </tr>
  )
}


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const survey = {
    good: good,
    setGood: setGood,
    neutral: neutral,
    setNeutral: setNeutral,
    bad: bad,
    setBad: setBad
  }

  return (
    <div>
      <FeedbackInput survey={survey} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)