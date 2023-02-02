type GreetProps = {
  name: string;
  message?: number;
};



const Greet = (props:GreetProps) => {
  return <div>Greet {props.name}, message {props.message}</div>;
};

export default Greet;
