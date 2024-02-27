// Write your code here

import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    teamCardData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamCardData()
  }

  getTeamCardData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formateData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamCardData: formateData, isLoading: false})
  }

  render() {
    const {teamCardData, isLoading} = this.state
    console.log(teamCardData)
    console.log(isLoading)
    return (
      <div className="background-style">
        <div className="logo-container">
          <img
            className="logo-img"
            alt="ipl logo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          />
          <h1 className="logo-text">IPL Dashboard</h1>
        </div>
        <ul className="team-list-items">
          {isLoading
            ? 'loading....'
            : teamCardData.map(eachItem => (
                <TeamCard key={eachItem.id} team={eachItem} />
              ))}
        </ul>
      </div>
    )
  }
}

export default Home
