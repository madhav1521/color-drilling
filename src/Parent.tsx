import { useState } from "react"
import Child from "./Child"
export const Parent = () => {
const [count, setCount] = useState<number>()

const parentFunction = (points: number) => {
  setCount(points)
}
return(
    <div>
	<div>
	   <h2>Parent Component</h2><br/>
	   {count && `Received: ${count} points from child`}
	   <Child parentFunction={parentFunction}/>
	</div>
    </div>
 )
}
export default Parent