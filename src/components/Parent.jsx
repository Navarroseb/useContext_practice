import React, {useContext} from 'react'
import Child from './Child'
import { UserContext } from '../context/userContext'


function Parent({ userData, setUser }) {
    const temp = useContext(UserContext);
    console.log(temp)

    return (
        <>
            <h1>Parent</h1>
            <Child userData={userData} setUser={{setUser}}/>
        </>
    )
}

export default Parent