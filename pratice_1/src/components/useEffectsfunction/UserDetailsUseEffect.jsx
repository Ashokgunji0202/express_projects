import React,{ useState,useEffect} from 'react'

const UserDetailsUseEffect = () => {

    const[counter,setCounter] = useState(0);
    const[sync,setSync] = useState(false);

    useEffect(() => {
        console.log("Rendering......")
        console.log(sync)
        document.title = `You Clicked ${counter} times`;
    },[sync]);

    useEffect(() => {
        const controller=new AbortController();
        async function fetchData() {
            try{
                const res =await fetch('https://jsonplaceholder.typicode.com/users',{
                    signal:controller.signal
                });
                const json=await res.json();
                console.log(json);
            }catch(error){
                console.log(error);
            }
        }
        fetchData();
        return () =>{
            controller.abort();
        }
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
