type PersonNameProps = {
    name: {
        firstName: string;
        lastName: string;
    }
}

const PersonName = (props:PersonNameProps) => {
  return (
    <div>
      {props.name.firstName} {props.name.lastName}
    </div>
  )
}

export default PersonName
