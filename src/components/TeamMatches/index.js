import {Component} from 'react'

class TeamMatches extends Component {
  state = {
    bannerData: [],
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const fetchData = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await fetchData.json()
    console.log(data)
    const updateBannerData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        id: data.latest_match_details.id,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        competingTeam: data.latest_match_details.competing_team,
        firstInnings: data.latest_match_details.first_innings,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: {
        competingTeam: data.recent_matches.competingTeam,
        competingTeamLogo: data.recent_matches.competing_team_logo,
        date: data.recent_matches.date,
        firstInnings: data.recent_matches.first_innings,
        id: data.recent_matches.id,
        manOfTheMatch: data.recent_matches.man_of_the_match,
        matchStatus: data.recent_matches.match_status,
        result: data.recent_matches.result,
        secondInnings: data.recent_matches.second_innings,
        umpires: data.recent_matches.umpires,
        venue: data.recent_matches.venue,
      },
    }
    this.setState({bannerData: updateBannerData})
  }

  teamMatches = () => {
    const {bannerData} = this.state
    const {teamBannerUrl} = bannerData
    return (
      <div>
        <img alt="name" src={teamBannerUrl} />
        <h1>Latest Matches</h1>
      </div>
    )
  }

  render() {
    return this.teamMatches()
  }
}

export default TeamMatches
