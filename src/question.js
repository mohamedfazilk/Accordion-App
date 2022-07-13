import React from 'react'

function question({ info, title }) {
    return (
        <article>
            <div>
                <h3>{title}</h3>
                <p>{info}</p>
            </div>
        </article>

    )
}

export default question