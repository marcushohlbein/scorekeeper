import styled from 'styled-components'
import Button from './Button'

export default function PlayerItem({ name, score, onMinus, onPlus }) {
  return (
    <Player>
      {name}
      <PlayerScore score={Math.min(140, Math.max(0, score * 7))}>
        <ScoreButton onClick={onMinus}>-</ScoreButton>
        <span>{score}</span>
        <ScoreButton onClick={onPlus}>+</ScoreButton>
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
`

const ScoreButton = styled(Button)`
  width: 35px;
  height: 35px;
`
