// This section will be a list of project
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <>
      {/* //Weather app */}
      <div className="container text-center points">
        <div className="row">
          <div className="col">Points Project</div>
          <div className="col icon">
            <Link
              to="https://fabulous-crostata-77a7eb.netlify.app/"
              target="_blank"
            >
              <img
                className="projects"
                src="client/public/images/points.png"
                alt="Screenshot of the Points app"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* //Rate my pie */}
      <div className="container text-center">
        <div className="row">
          <div className="col icon">
            <Link
              to="https://katieriches.github.io/weather-app/"
              target="_blank"
            >
              <img
                className="projects"
                src="client/public/images/weather.png"
                alt="Screenshot of the Weather app"
              />
            </Link>
          </div>
          <div className="col">Weather App</div>
        </div>
      </div>
      {/* //Group project */}
      <div className="container">
        <div className="row">
          <div className="col"> Rate My Pie</div>
          <div className="col icon">
            <Link
              to="https://github.com/KatieRiches/rate-my-pie"
              target="_blank"
            >
              <img
                className="projects"
                src="client/public/images/pie.png"
                alt="Screenshot of the rate my pie app"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
