import React, { useEffect } from 'react'

const Navbar = ({ color }) => {

    // case 1: Run on every render
    useEffect(() => {
        alert("i run on every render")
    })

    // case 2: Run only on first render
    useEffect(() => {
        alert("Hey Welcome| this is the first render")
    }, [])

    // case 3: Run only when certain value changed 

    useEffect(() => {
        alert("Hey i am running beacause color was chaneged")
    }, [color])


    // useEffect(()=>{
    //     alert("Color was changed")
    // }, [color])

    return (
        <div>
            i am a Navbar of {color} Color
        </div>
    )
}

export default Navbar
