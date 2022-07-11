import React from 'react'

interface Props {
    time: number,
    hour: number,
    arr: []
}

function Bar({ time, hour, arr }: Props) {
    return (
        <div className=''>
            {arr.map((val) => (
                <div key={val} className={val <= (hour == 12 ? time % 12 : time) ? "bg-empty h-5 w-80 mb-2" : "bg-full h-5 w-80 mb-2"}></div>
            )
            )}
        </div>
    )
}

export default Bar 