import style from './style.module.scss'
import { nanoid } from 'nanoid'

export default function Button({title, author}) {

  function buildData (){
    const date = new Date ()
    const GlobalMinutes = date.getMinutes() 
    const newMinutes = GlobalMinutes < 10 ? '0' + GlobalMinutes : GlobalMinutes
    const monthGlobal = date.getMonth() + 1
    const newMonth = monthGlobal < 10 ? '0' + monthGlobal : monthGlobal
    const result  = `${date.getHours()}:${newMinutes} ${date.getDate()}.${newMonth}.${date.getFullYear()}`
    return result
}


  async function heandleClick(event){
    if(author && title){
    event.preventDefault()
    const date = buildData()
    const id = nanoid()
    fetch('http://localhost:3001/posts',{
      method: 'post',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({title, author, id, date, checked: false})
    })
  }else{
    
  }
  }

  return (
    <div className={style.btn__add_text} onClick = {heandleClick}>Добавить</div>
  )
}
