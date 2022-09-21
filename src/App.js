import Header from './Components/Header/Header';
import Input from './Components/Main/Input/Input';
import Button from './Components/Main/Button/Button';
import Footer from './Components/Footer/Footer';
import style from './app.module.scss'
import React, { useState } from 'react'

function App() {

  const [value, setValue] = useState ('')

  const handleValueChange = (value) =>{
      setValue(value)
  }
  
  return (
    <div className={style.container}>
      <Header/>
      <main>
        <form className={style.wrapper__form}>
          <Input onChange = {handleValueChange}/>
          <Button/>
        </form>
      </main>
      <Footer value={value} />
    </div>
  );
}

export default App;
