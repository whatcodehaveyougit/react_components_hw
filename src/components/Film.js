import React from 'react'

function Film({ title, url }){
    return (
        <a href={url}> 
            <li> { title } </li>
        </a>
    )
}

export default Film