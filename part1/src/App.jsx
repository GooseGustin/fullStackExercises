const Header = (props) => {
    const courseName = props.course.name 
    return (
        <>
            <h1>{courseName}</h1>
        </>
    )
}

const Total = (props) => {
    const course = props.parts
    const theSum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
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
    const course = props.parts 
    return (
        <>
            <Part data={course.parts[0]} />
            <Part data={course.parts[1]} />
            <Part data={course.parts[2]} />
        </>
    )
}

const App = () => {
    const course = {
        name: 'Half stack application development',
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
            <Content parts={course} />
            <Total parts={course} />
        </div>
    )
}

export default App 