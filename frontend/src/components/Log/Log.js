import React from 'react'
import LogDisplay from './LogDisplay'

const Log = () => {
    return (
        <div>
            <h1>this is log page</h1>
            <div className='grid grid-cols-2'>
            <div>search component here 1</div>
            
                <div>
                    <LogDisplay />
            </div>
            
            </div>
            </div>
    )
}

export default Log
