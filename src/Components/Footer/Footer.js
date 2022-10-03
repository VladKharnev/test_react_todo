import React, { useState } from 'react'
import style from './style.module.scss'

export default function Footer({data}) {

  const [checked, setChecked] = useState();
  
  if(!data){
    return <div>Подождите</div>
  }
  
  function handleChange (id,event){
    if (event.target.id === id){
      setChecked(!checked)
      console.log(event.checked)
    }
  }
   async function updChecked(id,checked,event){
    event.preventDefault()
     fetch('http://localhost:3001/posts' + '/' + id,{
       method: 'PATCH',
       headers: { "Content-type": "application/json" },
       body: JSON.stringify({checked: !checked})
     })
}


  async function heandleClick(event){
    event.preventDefault()
    const id = event.target.parentElement.id
    fetch('http://localhost:3001/posts' + '/' + id, {
      method: 'DELETE'
    })
  }

  return (
    <div>
      <div className={style.list__tasks}>
        {data.map((item,id)=>(
          <div className={`${style.task} ${item.checked === true? `${style.complt}` : `${''}`}`} key={id} id = {item.id}>
            <div><input id={item.id} checked = {item.checked} type="checkbox" onChange={(event) => (handleChange(item.id,event),updChecked(item.id,item.checked,event))} className={style.check__compl}></input><span className={style.info_task}>{item.title}</span><span className={style.info_task}>"{item.author}"</span><span className={style.info_task}>Дата подачи: {item.date}</span></div>
            <div className={style.btn__close} onClick = {(event)=>{heandleClick(event)}}>X</div>
          </div>
        ))}
      </div>
    </div>
  )
}
