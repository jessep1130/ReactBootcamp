class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Jesse" from="Goo" />
        <Hello to="Cher" from="Sonny" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))