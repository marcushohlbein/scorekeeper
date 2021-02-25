import React from 'react'
import styled from 'styled-components/macro'
export default function HistoryEntry({ nameOfGame, players }) {
  return (
    <HistoryGameName>
      {nameOfGame}
      {players.map((player, index) => (
        <HistoryPlayerName key={index} className="HistoryEntry__player">
          <span>{player.name}</span>
          <span>{player.score}</span>
        </HistoryPlayerName>
      ))}
    </HistoryGameName>
  )
}

const HistoryGameName = styled.section`
  display: grid;
  gap: 10px;
`
const HistoryPlayerName = styled.section`
  display: flex;
  justify-content: space-between;
`
