import React from 'react'

function Card(props) {
  return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                <img
                className="w-full"
                src={props.image}
                alt={props.image}
                />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.title}</div>
                <p className="text-gray-700 text-base">
                    {props.description}
                </p>
                </div>
            </div>
        </div>
  )
}

export default Card
