import { useState } from 'react'

const DisplayMostVoted = ({votes, text}) => {
    return (
        <>
            <h2>Anecdote with most votes</h2>
            <p>{text}</p>
            <p>has {votes} votes</p>
        </>
    )
}

const DisplayAnnecdote = (props) => {
    // console.log(props.votes)
    return (
        <>
            <h2>Anecdote of the day</h2>
            <p>{ props.text }</p>
            <p>has { props.votes } votes</p>
        </>
    )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      { props.text }
    </button>
  )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]
   
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState({0:0}) 
    const [maxVote, setMaxVote] = useState(0)
    const [maxIndex, setMaxIndex] = useState(0) 

    const handleChangeSelected = () => {
        // console.log('Selected', selected)
        const newSelected = Math.round(Math.random() * (anecdotes.length-1))
        // console.log('New selected', newSelected)
        setSelected(newSelected)
        if (!votes[newSelected]) {
            const newVotes = {...votes}
            newVotes[newSelected] = 0
            // console.log('happy', newVotes)
            setVotes(newVotes)
        }
    }

    const handleVote = () => {
        // console.log('selected', selected)
        // console.log('Votes', votes)
        // console.log(votes[selected])
        const newVotes = {...votes} // , selected:(votes[selected]+1)}
        newVotes[selected] += 1
        setVotes(newVotes)
        if (newVotes[selected] > maxVote) {
            setMaxVote(newVotes[selected])
            setMaxIndex(selected)
        }
        // console.log('New votes', newVotes)
    }

  return (
    <div>
      <DisplayAnnecdote text={anecdotes[selected]} votes={votes[selected]} />
      <Button handleClick={handleVote} text='vote' />
      <Button handleClick={handleChangeSelected} text='next anecdote' />
      <DisplayMostVoted text={anecdotes[maxIndex]} votes={maxVote} />
    </div>
  )
}

export default App