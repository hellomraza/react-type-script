
type PersonListProps = {
    persons: string[]
}

// OR 
// type PersonListProps = {
//     persons: {
//         firstName: string;   
//         lastName: string;
//      }[]
// }
const PersonList = (props:PersonListProps) => {
  return (
    <div>
      {props.persons.map((person) => (
        <h2>{person}</h2>
        ))}
         
    </div>
  )
}

export default PersonList
