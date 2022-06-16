import TeamMember from "./TeamMember";

const Team = () => {

  const team = [
    {
      name: 'tehjul',
      position: 'founder / developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi eget consectetur porta, nisl nisi consectetur purus, eget tincidunt nisl nisi eget.'
    },
    {
      name: 'night4dead',
      position: 'developer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi eget consectetur porta, nisl nisi consectetur purus, eget tincidunt nisl nisi eget.'
    }
  ]

  return (
    <div className="team">
      <div className="team_header">
        <h1>Team</h1>
      </div>
      <div className="team_content">
        {
          team.map((member, index) => {
            return (
              <TeamMember key={index} member={member} />
            )
          })
        }
      </div>
    </div>
  );
}

export default Team;