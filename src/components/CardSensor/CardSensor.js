import React from 'react'

function CardSensor(props) {
    return (
        <div>
            <div class="flex justify-center">
                <div class="block rounded-lg shadow-xl bg-white max-w-sm text-center">
                    <div class="py-3 px-6 border-b border-gray-300">
                        {/* Title Here */}
                    </div>
                    <div class="p-6">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">{props.title}</h5>
                        <p class="text-gray-700 text-base mb-4">
                            Pada Card ini akan menampilkan informasi tentang <b>{props.title}</b>
                        </p>
                        <p class="text-gray-900 text-5xl font-medium mb-2">100</p>
                        {/* <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button> */}
                    </div>
                    <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                        {/* Dat here Here */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardSensor