import "./App.css";



function App() {
  return (
    <div className="App">
      <div className="main-container">
      <Buttons name="Button 1" description="Description 1" />
      <Buttons name="Button 2" description="Description 2" />
      <Buttons name="Button 3" description="Description 3" />
      <Buttons name="Button 4" description="Description 4" />
      <Buttons name="Button 5" description="Description 5" />
      <Buttons name="Button 6" description="Description 6" />
      <Buttons name="Button 7" description="Description 7" />
      <Buttons name="Button 8" description="Description 8" />
      <Buttons name="Button 9" description="Description 9" />
      <Buttons name="Button 10" description="Description 10" />
      <Buttons name="Button 11" description="Description 11" />
      <Buttons name="Button 12" description="Description 12" />
      </div>
    </div>
  );
}

const Buttons = (props) => {
  const { name, description } = props;
  return (
    <div className="button">
      <div className="button-container">
        <div className="button-image"></div>
        <div className="button-name">{name}</div>
        <div className="button-description">{description}</div>
      </div>
    </div>
  );
};

export default App;
