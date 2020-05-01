import React from 'react';

const Header = ({ course }) => {
  return (
    <h1>
      {course.name}
    </h1>
  )
}

const Total = ({ course }) => {
  const sum = course.parts.reduce( (s,p) => {
    console.log(s)

    return s + p.exercises
  }, 0)

  return(
    <h2>Number of exercises {sum}</h2>
  ) 
}

const Part = ({ part }) => {
  return (
    <p  >
      {part.name} {part.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map ( part =>
        <Part  key={part.id} part={part} />
      )}
    </div>
  )
}

const Course = (props) => {
  const { course } = props
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default Course
