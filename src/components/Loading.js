import React from 'react'

function Loading() {
    return (
        <div>
            <div className="mt-[25%] grid place-content-center">
                <div class="animate-ping inline-block w-10 h-10 border-4 rounded-full text-red-600 ml-5 mb-2"></div>
                <div className="text-xl font-poppins animate-pulse">
                    <span>Loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Loading