type StatusProps = {
    status: "success" | "error" | "loading"
}

const Status = (props:StatusProps) => {
    let message;
    if (props.status === "success") {
        message = "Success"
    } else if (props.status === "error") {
        message = "Error"
    } else if (props.status === "loading") {
        message = "Loading"
    } 

  return (
    <div>
     <h2>
            {message}
     </h2>
    </div>
  )
}

export default Status
