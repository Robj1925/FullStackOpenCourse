
const Header = (props) => {
  console.log(props)
  return (
  <div>
    <h1>{props.course}</h1>
  </div>
  );

}
const Content = (props) => {
  return (
    <div>
      <p>{props.name} {props.content}</p>
    </div>
  );
}
const Total = (props) => {
  console.log(props)
  return(
    <div>
      <p>Number of exercises {props.num1 + props.num2 + props.num3}</p>
    </div>
  );
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
  <div>
    <Header 
    course={course}
    />
   <Content
    name={part1} 
    content={exercises1}
   />
   <Content
    name={part2}
    content={exercises2}
   />
   <Content
    name={part3}
    content={exercises3}
   />
   <Total
   num1={exercises1}
   num2={exercises2}
   num3={exercises3}
   />
  </div>
  )
} 

export default App;
