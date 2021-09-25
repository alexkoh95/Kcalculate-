import React from 'react'

const LogDisplayNav = () => {
    return (
        <div className='grid grid-flex grid-cols-4 mx-4'>
            <div className="my-auto hover:bg-white uppercase text-xs tracking-wider">Breakfast</div>
            <div className="my-auto hover:bg-white uppercase text-xs tracking-wider">Lunch</div>
            <div className="my-auto hover:bg-white uppercase text-xs tracking-wider"> Dinner</div>
            <div className="my-auto hover:bg-white uppercase text-xs tracking-wider">Snack</div>
        </div>
    )
}

export default LogDisplayNav
