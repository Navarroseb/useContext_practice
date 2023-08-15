import React from 'react'
import SubChild from './SubChild'

function Child({ userData }) {
    return (
        <>
            <h3>Child</h3>
            <SubChild />
        </>
    )
}

export default Child