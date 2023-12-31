import React from 'react'
import { useContext } from 'react'
import Button from './Button'
import { UserContext } from '../context/userContext'

const SubChild = () => {
    const { user } = useContext(UserContext);
    return (
        <div>
            <h6>SubChild</h6>
            <hr/>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
            <hr/>
            <Button />
        </div>
    )
}



export default SubChild
