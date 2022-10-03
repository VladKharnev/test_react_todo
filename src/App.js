import Header from './Components/Header/Header';
import InputOne from './Components/Main/InputOne/InputOne';
import InputTwo from './Components/Main/InputTwo/InputTwo';
import Button from './Components/Main/Button/Button';
import Footer from './Components/Footer/Footer';
import style from './app.module.scss'
import { useState, useEffect } from 'react'

function App() {

  const [title, setTitle] = useState ('')
  const [author, setAuthor] = useState ('')

  const handleValueChange = (title) =>{
    setTitle(title)
  }

  const handleAuthorChange = (author) => {
    setAuthor(author)
  }

  const [data, setData] = useState(null)

  useEffect(()=>{
    fetch('http://localhost:3001/posts').then((response)=> response.json().then(data=>{setData(data)}))
  })
  

  return (
    <div className={style.container}>
      <Header/>
      <main>
        <form className={style.wrapper__form}>
          <InputOne onChange = {handleValueChange}/>
          <InputTwo onChange = {handleAuthorChange}/>
          <Button title={title} author = {author}/>
        </form>
      </main>
      <Footer title={title} data = {data} author = {author}/>
    </div>
  );
}

export default App;
