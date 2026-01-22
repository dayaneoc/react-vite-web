import s from'./App.module.css'
import ping from '/imgTeste.webp'
import {useState} from 'react'

function App() {
  const [qualAparece, setQualAparece] = useState('')

  console.log(qualAparece)
  return (
    <>
      {/*qualAparece === 'texto' && <h1 className={s.titulo}>olá</h1>}
      {qualAparece === 'imagem' && <img src={ping} alt="Foto teste" />*/}
      {qualAparece === 'texto' ? <h1 className={s.titulo}>olá</h1> : qualAparece === 'outro' ? <p>outro</p> : 
      qualAparece === "imagem" ? <img src={ping} alt="Foto teste" /> : ""}

      <br />

      <button onClick={() => setQualAparece('texto')}>texto</button>
      <br />
      <button onClick={() => setQualAparece('imagem')}>imagem</button>

    </>
  )
}

export default App
