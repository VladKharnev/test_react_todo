import React from 'react'
import style from './style.module.scss'

export default function InputTwo({onChange}) {

    const handleAuthorChange = (event) => {
        onChange(event.target.value)
    }

  return (  
    <>
        <input type="text" className={style.add__text} onChange={handleAuthorChange} placeholder="Автор"/>
    </>
  )
}
