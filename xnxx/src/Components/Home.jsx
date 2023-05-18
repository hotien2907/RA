import React, { useState } from 'react'
import Heading from './Heading'
import Content from './Content'
import Footer from './Footer'

function Home() {
    const [players, setPlayers] = useState([
        { name: 'MarkDommm', point: 0, status: '' },
        { name: 'Pitou', point: 0, status: '' },

    ])

    return (
        <div id="container">
            <Heading player={players} />
            <Content player={players} setPlayer={setPlayers} />
            <Footer player={players} setPlayer={setPlayers} />
        </div>

    )
}

export default Home