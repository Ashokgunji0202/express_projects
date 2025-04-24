import React,{useEffect} from 'react'

const CreateCustumHook = () => {

    useEffect(() => {
        const resizeEventHandler = (e) => {
            console.log("Window Resized");
        }
        window.addEventListener("resize", resizeEventHandler);
        
    }, [])

  return (
    <div>
      
    </div>
  )
}

export default CreateCustumHook
