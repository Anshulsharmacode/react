import './App.css'
import Card from './components/card'

function App() {
  const data = {
    username: "anshul"
  }
  const names = ['h', 'd', 'a', 't', 'a', 'g'];
  const prices =[100,3,43,63,645,343]
  const cards = [];
  for (let index = 0; index < names.length; index++) {
    const name = names[index];
    const price =prices[index]
    cards.push(<Card key={index} names={name} prices={price}/>);
  }
  
  return (
    <>
      {cards}
    </>
  )
}

export default App
