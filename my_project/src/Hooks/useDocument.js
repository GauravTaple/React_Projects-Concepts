import React, { useEffect } from 'react'

function useDocument(count) {

    useEffect(() => {
        document.title = `Count:------ ${count}`
    }, [count])


    return (
        <div></div>
    )
}

export default useDocument