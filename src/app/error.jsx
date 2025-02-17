'use client'
import React from 'react'
import { useEffect } from 'react'

export default function error({error, reset}) {
    useEffect(() => {
        console.log('error', error)

    },[error])
  return (
    <div className="mt-10 text-center">
        <h1>Something went wrong. Please try again</h1>
        <button className="hover:text-amber-600"onClick={() => reset()}>Try Again</button>
    </div>
  )
}
