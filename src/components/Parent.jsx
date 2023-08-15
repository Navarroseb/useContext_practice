import React, {useContext} from 'react'
import Child from './Child'
import { UserContext } from '../context/userContext'


const Parent = () => {
    const { developer } = useContext(UserContext);

    return (
        <>
            <h1>Parent</h1>
            <p>El developer se llama {developer}</p>
            <hr />
            <Child />
        </>
    )
}

export default Parent