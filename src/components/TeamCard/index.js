// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {team} = props
  const {id, name, teamImageUrl} = team

  return (
      <li className="card-container"></li>
    <Link to={`https://apis.ccbp.in/ipl/${id}`} className="link-style">
      
        <img className="team-logo" alt="name" src={teamImageUrl} />
        <h1 className="team-name">{name}</h1>
      
    </Link>
    </li>
  )
}

export default TeamCard
