import React from 'react'

const VerfiedUser = () => {


    // if Used Switch case also possible
    
   //NOT_VERIFIED,VERIFIED,DISABLE
    const USER_STATUS="VERIFIED";
    if(USER_STATUS==="VERIFIED"){
        return (
            <div>
                <span>You are Verfied. Congrates! Click here to access Your Daseboard</span>
            </div>
        )
    }else if(USER_STATUS==="NOT_VERIFIED"){
        return (
            <div>
                <span>You are not verified.please verify your Email or mobile number</span>
            </div>
        )
    }
    else if(USER_STATUS==="DISABLE"){
        return (
            <div>
                <span>Your acount is Disabled</span>
            </div>
        )
    }
 
}

export default VerfiedUser
