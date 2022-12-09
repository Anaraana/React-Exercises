import { useEffect, useState } from "react";
import axios from "axios";

export default function ChuckNorrisJoke() {
  const [joke, setJoke] = useState({});

  const ChuckNorris = () => {
    axios
    .get("https://api.chucknorris.io/jokes/random")
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        setJoke(res.data);
      }
    })
    .catch((err)=>{
if(err.status === 404){
    console.log('error!')
}
    })
    
  };
  return (
    <div>
        <>
        {/* <pre>{JSON.stringify(joke, null,2)}</pre> */}
        <span>{joke?.value}</span>
        </>
      <button onClick={() => ChuckNorris()}>Jokes</button>
    </div>
  );
}
