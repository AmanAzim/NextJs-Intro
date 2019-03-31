import React from 'react'
import Link from 'next/link'


const error=()=>{
    return(
        <div>
            <h1>Something went wrong</h1>
            <p>Try <Link href="/"><a>Going back</a></Link></p>
        </div>
    )
};

export default error;
