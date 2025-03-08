import { Smokum } from 'next/font/google'
import React from 'react'
import { FaArrowUp } from "react-icons/fa";

export const GoToTop = () => {
    const goToBtn =() =>{
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    }
  return (
    
    <div className="top-buttonarrow" onClick={goToBtn}>
        <FaArrowUp className="top-btn--icon"/>
    </div>
  )
}
