import React,{ useState,useEffect, use} from 'react'

const UserDetailsUseEffect = () => {

    const[counter,setCounter] = useState(0);
    const[sync,setSync] = useState(false);

    useEffect(() => {
        console.log("Rendering......")
        console.log(sync)
        document.title = `You Clicked ${counter} times`;
    },[sync]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`,{
            method:"GET"
        }).then((res) => res.json()).then((data) => console.log(data));
    },[])
  return (
    <div>
        <h1>You Clicked {counter} times</h1>
        <button onClick={() => setCounter((count)=>count+1)}>Click</button>
        <button onClick={()=> setSync((c)=>!c)}>Sync</button>
      
    </div>
  )
}

export default UserDetailsUseEffect
