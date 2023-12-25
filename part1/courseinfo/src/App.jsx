import { useState } from 'react'

const Header = (props) => {
    // console.log(props)
    return <h1>{props.course.name}</h1>
}

const Part = (props) => {
    const ind = props.index 
    const part = props.parts[ind]
    return (
        <>
            <p>
                {part.name} {part.exercises}
            </p>
        </>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part index={0} parts={props.parts} />
            <Part index={1} parts={props.parts} />
            <Part index={2} parts={props.parts} />
        </div>
    )
}

const Total = (props) => {
    const first = props.parts[0].exercises
    const second = props.parts[1].exercises
    const third = props.parts[2].exercises
    return (
        <><p>
            Total: {first + second + third}
        </p></>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development', 
        parts: [
            {
                name: 'Fundamentals of React', 
                exercises: 10
            }, 
            {
                name: 'Using props to pass data', 
                exercises: 7
            }, 
            {
                name: 'State of a component', 
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default App
