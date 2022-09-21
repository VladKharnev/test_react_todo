import React from 'react'
import style from './style.module.scss'

export default function Input({onChange}) {

    const handleValueChange = (event) => {
        onChange(event.target.value)
    }

  return (  
    <>
        <input type="text" className={style.add__text} onChange={handleValueChange} placeholder="Новая задача"/>
    </>
  )
}
