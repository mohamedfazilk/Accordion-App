import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'


const Question = ({ info, title }) => {
    const [showread, setShowRead] = useState(false)
    return (
        <article className='question'>
            <header>
                <h4>{title}</h4>
                <button onClick={() => setShowRead(!showread)} className='btn'>
                    {showread ? <AiOutlineMinus/> : <AiOutlinePlus/>}</button>
            </header>
            {/* //use can use either two methods // */}
            {showread && <p>{info}</p>}
            {/* <p>{showread ? info : null} </p> */}
        </article>

    )
}

export default Question;