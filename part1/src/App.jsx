const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
}

const Total = (props) => {
    const theSum = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
    return (
        <>
            <p>Number of exercises {theSum} </p>
        </>
    )
}

const Part = (props) => {
    console.log('Using Part')
    return (
        <>
            <p>{props.data.name} {props.data.exercise}</p>
        </>
    )
}

const Content = (props) => {
    return (
        <>
            <Part data={props.parts[0]} />
            <Part data={props.parts[1]} />
            <Part data={props.parts[2]} />
        </>
    )
}

const App = () => {
    const course = 'Half stack application development'
    const parts = [
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

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

export default App 