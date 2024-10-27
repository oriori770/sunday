import Child from "./Child";
import { useState } from 'react'
function Parent(props:any) {
    const [dataFromChild, setDataFromChild] = useState("");
    function handleDataFromChild(data:string) {
        setDataFromChild(data);
      }
    return(
        <>
            <div>
                <h1>Data from Child: {dataFromChild}</h1>
                <Child sendDataToParent={handleDataFromChild} />
            </div>
            <Child name={props.name}/>
        </>
    )};
    

export default Parent