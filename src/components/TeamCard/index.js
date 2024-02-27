// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {team} = props
  const {id, name, teamImageUrl} = team

  return (
    <Link className="link-style" to={`/team-matches/${id}`}>
      <li className="card-container">
        <img className="team-logo" alt={name} src={teamImageUrl} />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
