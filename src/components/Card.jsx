import React from 'react';

function Card(props) {
    return (
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-100 flex items-center justify-center min-h-screen">
                <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
                    <img className="w-full h-48 object-cover" src={props.image} alt={props.title} />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold text-gray-800">{props.title}</h2>
                        <p className="text-gray-700 text-lg mt-2">{props.description}</p>
                        <a 
                            href={`/listings/${props.id}`} 
                            className="block w-full text-center px-5 py-2.5 shadow-sm rounded border text-base font-medium text-indigo-700 bg-indigo-100 hover:bg-indigo-200 mt-4"
                        >
                            Details
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
