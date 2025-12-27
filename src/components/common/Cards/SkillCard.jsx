
function SkillCard ({ skillName, skillPercentage, skillDescription }) {

    return (
        <div className="skill-box">
            <div className="skill-header">
                <span className="skill-name">{skillName}</span>
                <span className="skill-percentage">{skillPercentage}%</span>
            </div>

            <div className="skill-bar">
                <div className="skill-level" style={{width: `${skillPercentage}%`}}></div>
            </div>

            <div className="skill-description-box">
                <p className="skill-description-text">{skillDescription}</p>
            </div>
        </div>
    );
}

export default SkillCard;
