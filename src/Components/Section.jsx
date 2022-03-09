import React from "react";
import {useSelector} from 'react-redux'
import Card from './Card'

export default function Section() {
    let games = useSelector((state) => state.games)

  return (
    <div>
        <h2>Latest Games </h2>
        {games?.map((game)=>
        <Card name={game.name} id={game.id} platform={game.platform} image={game.image} price={game.price}/>
        )

        }
        <button>All Games</button>
    </div>
  )}