import { useState } from 'react'
import './App.css'
import {CONTENT_INFO} from "./content"
import Header from './component/Header'
import Content from './component/Content'
import Footer from './component/Footer'
import Menu from './component/Menu'

function App() {
  const [open, setOpen]=useState(false)
  const [menuName, setMenuName]=useState('island')
  return (
    <>
    <div>
      <section className={open?"main-structure active":"main-structure"}>
        <Header open={open} setOpen={setOpen}/>
        <Content menuName={menuName} />
        <Footer/>

    </section>
        <Menu setMenuName={setMenuName} />       
   
    </div>
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
    </>
  )
}

export default App
