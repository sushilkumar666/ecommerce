import React, { useState } from 'react'

function Filter() {
    const [length, setLength] = useState(5000);

    return (
        <div className='flex flex-col text-left  bg-white border border-black m-2'>

            <div className='text-xl font-semibold px-4 py-3 border-b border-gray'>Filters</div>

            <div className='px-4 py-3 font-semibold border-b border-gray '>
                CATEGORIES
                <div className='text-gray-500 leading-8 text-sm'>&lt; Mobiles & Accessories</div>

            </div>
            <div className='px-4 py-3 font-semibold '>
                PRICE
                <div className=''> <input
                    type="range"
                    min={5000}
                    max={300000}
                    value={length}
                    className='cursor-pointer'
                    onChange={(e) => { setLength(e.target.value) }}
                /> </div>
            </div>
            <div>{length}</div>
        </div>

    )
}

export default Filter