import React from 'react'

function Title({ ads }) {
    return (
        <>
            <div className="">
                <h2 className='text-2xl font-medium'>{ads.adsTitle}</h2>
                <p>Last seen Online 31/01/2023</p>
            </div>

            <div className="flex gap-5 justify-center items-center border rounded-full p-3">
                <h2>Nationality :</h2>
                <h2>{ads.nationality}</h2>
            </div>
        </>
    )
}

export default Title