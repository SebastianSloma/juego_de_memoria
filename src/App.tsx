import React from "react"
import { Grid } from "./App.styles"
import { shuffleArray } from "./utils"
import { createBoard } from "./setup"
import { CardType } from "./setup"

function App() {
  const [cards, setCards] = React.useState<CardType[]>(shuffleArray(createBoard()))
  const[gameWon, setGameWon] = React.useState(false)
  const[clickedCard, setClickedCard] = React.useState<undefined | CardType>(undefined)
  

  return (
    
       
  <div>
<Grid>
  {cards.map(card =>(
    <p>{card.id}</p>
  ))}
</Grid>
  </div>
  )
}

export default App
