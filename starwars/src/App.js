import React, {useState, useEffect} from 'react';
import './App.css';
import CardBuilder from './components/CardBuilder'
import Header from './components/Header'
import Footer from './components/Footer'
import axios from 'axios'

const App = () => {

  const [text, setText] = useState()
  const [search, updateSearch] = useState()

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/`).then(res => {
        setText(res.data.results)
        // setNext(res.data.next)
        console.log(res.data)
    })
},[])
  function handleClick (e) {
   updateSearch(e.target.value)
    console.log(search)
  }

  function handleSubmit (e) {
    return handleClick(e); 
  }

  // const submit = () => {
  //   text
  // }
 
  return (
    <div className="App">
      <Header/>
      <CardBuilder/>
      <form>
        <input onChange = {(e) => handleClick(e) } type="text" placeholder = 'search character'></input>
        <button onClick = {(e) => {
          e.preventDefault()
          console.log(text.filter((elem) => elem.name === search))
        }}>submit</button>
      </form>
      <Footer/>
    </div>
  );
}

export default App;
