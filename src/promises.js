import React from 'react' 


class Promises extends React.Component  {
    constructor(props){
      super(props)
      this.state = {
        futureData: []
      }
    }
    componentDidMount() {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((todo) => todo.json())
      .then((todo) => this.setState ({futureData: todo}))
      .catch(() => console.log("called"));
    }
    render() {
      return (
      <div className="App">
        <h1>{this.state.futureData.userId}</h1>
        <h1>{this.state.futureData.id}</h1>
        <h1>{this.state.futureData.title}</h1>
        <h1>{this.state.futureData.completed}</h1>
      </div>
    );
   }
  }
export default Promises;