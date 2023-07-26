import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/menu'
import Banner from './components/banner'
import Content from './pages/content'
import ContentA from './components/contentA'
import Footer from './components/footer'
import Contacts from './components/contacts'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu />
      <Banner />
      <Contacts direction='column' position='absolute' />
      <ContentA />
      <Footer />
    </>
  )
}

export default App
