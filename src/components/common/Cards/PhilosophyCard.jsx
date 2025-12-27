
function PhilosophyCard ({icon, title, text}) {

    return (
        <div className="philosophy-card">
              <div className="card-icon">
                {icon}
              </div>

              <h3 className="card-title">{title}</h3>

              <p className="card-text">
                {text}
              </p>
        </div>
    );
}

export default PhilosophyCard;