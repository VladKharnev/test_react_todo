import React from 'react'
import add_task from './add_task.png'
import style from './style.module.scss'

export default function Header() {
  return (
    <div className={style.title}>
        <h1 className={style.title__name}>Список дел</h1>
        <div className={style.plus__task}>
            <img src={add_task} className={style.plus__task_img} alt='plus'/>
        </div>
    </div>
  )
}
