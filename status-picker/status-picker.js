import React, {useState} from "react";
import './status-picker.css'

const Status = ()=>{
    const [status, setStatus]= useState(<h2>"Status"</h2>);

return(
    <div>
        <pre className={status}>{status}</pre>
        <button onClick={()=>setStatus(()=>"Away")} >Away</button>
    <button onClick={()=>setStatus(()=>"Offline")} >Offline</button>
    <button onClick={()=>setStatus(()=>"Active")} >Active</button>
    </div>
)
   
}

export default Status