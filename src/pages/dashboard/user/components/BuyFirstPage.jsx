import React from 'react'
import Buttons from './Buttons'

function BuyFirstPage() {
    return (
        <div className='h-full w-full space-y-5'>
            <h1 className='text-2xl font-bold'>Buy First Page Position</h1>
            <Buttons />
            <h1 className='text-2xl font-bold'>Platinum</h1>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                <Card plan={'Platinum'} price={40} position={1} />
                <Card plan={'Platinum'} price={40} position={2} />
                <Card plan={'Platinum'} price={40} position={3} />
                <Card plan={'Platinum'} price={40} position={4} />
                <Card plan={'Platinum'} price={40} position={5} />
                <Card plan={'Platinum'} price={40} position={6} />
            </div>
            <h1 className='text-2xl font-bold'>Gold</h1>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                <Card plan={'Gold'} price={30} position={1} />
                <Card plan={'Gold'} price={30} position={2} />
                <Card plan={'Gold'} price={30} position={3} />
                <Card plan={'Gold'} price={30} position={4} />
                <Card plan={'Gold'} price={30} position={5} />
                <Card plan={'Gold'} price={30} position={6} />
            </div>
            <h1 className='text-2xl font-bold'>Silver</h1>
            <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                <Card plan={'Silver'} price={20} position={1} />
                <Card plan={'Silver'} price={20} position={2} />
                <Card plan={'Silver'} price={20} position={3} />
                <Card plan={'Silver'} price={20} position={4} />
                <Card plan={'Silver'} price={20} position={5} />
                <Card plan={'Silver'} price={20} position={6} />
            </div>
        </div>
    )
}

export default BuyFirstPage


const Card = ({ plan, price, position }) =>
    <div class="card h-80 w-56 border border-[#E8E7E7] flex flex-col justify-center items-center gap-5 p-5 text-center">
        <span class="text-2xl font-medium">{plan}</span>
        <span class="text-xl font-medium">$ {price}</span>
        <span>Bid on {position} Position is Started</span>
        <span>Please Click for participation</span>
    </div>