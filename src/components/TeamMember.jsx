const TeamMember = ({member}) => {
  return (
    <div className="team-member">
      <div className="team-member__image">
        <img src="https://via.placeholder.com/150" alt="Team Member" />
      </div>
      <div className="team-member__info">
        <h3 className="team-member__name">{member.name}</h3>
        <p className="team-member__position">{member.position}</p>
        <p className="team-member__description">
          {member.description}
        </p>
      </div>
    </div>
  );
};

export default TeamMember;