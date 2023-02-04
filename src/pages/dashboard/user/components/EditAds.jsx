import React from 'react'
import { useParams } from 'react-router-dom'
import Buttons from './Buttons'

function EditAds() {
  const {id} = useParams()
  return (
    <div className='h-full w-full space-y-5'>
            <h1 className='text-2xl font-bold'>Edit</h1>
            <Buttons />
            {id}
        </div>
  )
}

export default EditAds