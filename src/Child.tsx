import { useState } from "react"

interface ChildProps {
  parentFunction: Function
}

const Child = (props:ChildProps) => {
 const [points, setPoints] = useState<number>()
  return(
    <div style={{padding: 30}}>
      <div>
        <h3>Child Component</h3>
        <p>Send : <input value={points} onChange={(e) => setPoints(+e.target.value)}/> points to Parent</p>
        <p style={{textAlign: "center"}}><button onClick={() => props.parentFunction(points)}>Send to parent</button></p>
      </div>
  </div>
  )
 }
 export default Child
