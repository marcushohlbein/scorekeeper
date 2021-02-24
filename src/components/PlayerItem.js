import styled from 'styled-components'

export default function PlayerItem({ name, score, onMinus, onPlus }) {
  return (
    <Player>
      {name}
      <PlayerScore score={Math.min(140, Math.max(0, score * 7))}>
        <button onClick={onMinus}>-</button>
        <span>{score}</span>
        <button onClick={onPlus}>+</button>
      </PlayerScore>
    </Player>
  )
}

const Player = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PlayerScore = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;

  span {
    color: ${props => 'hsl(' + props.score + ', 70%, 60%);'};
  }

  button {
    border: none;
    border-radius: 10px;
    background: #bbb;
    width: 35px;
    height: 35px;
  }
`
