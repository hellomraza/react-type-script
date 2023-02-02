import Greet from "./components/Greet";
import Heading from "./components/Heading";
import PersonList from "./components/PersonList";
import PersonName from "./components/PersonName";
import Status from "./components/Status";

function App() {
  const name = {
    firstName: "Mustafa",
    lastName: "Khan",
  }

  const Persons = [
    "Mustafa",
    "Khan",
    "Mehmood",
  ]
  return (
    <div className="App">
      <Greet name="Mustafa"/>
      <PersonName name={name} />
      <PersonList persons={Persons}/>
      <Status status="error" />
      <Heading>
        <h1>Heading</h1>
      </Heading>
      </div>
  );
}

export default App;
