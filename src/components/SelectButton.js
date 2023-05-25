import React from 'react'
import '../App.css'

function SelectButton({children , selected, onClick}) {
  return (
    <span onClick={onClick} className='selectbutton'>
        {children}
    </span>
  )
}

export default SelectButton