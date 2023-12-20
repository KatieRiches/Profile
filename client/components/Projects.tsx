// This section will be a list of project
import { Link } from 'react-router-dom'

export default function Projects() {
  return (
    <>
      {/* //Weather app */}
      <div className="container text-center points">
        <div className="row">
          <div className="col">
            <h3>Points Project</h3>
            <p>
              This was a group project that I completed while attending Dev
              Academy. We were asigned free reign to complete a project in 24
              hours. This was also a chance to practice the Agile structure. Our
              project is an app for the Dev Academy teachers to track the
              elusive points they offer students for obscure tasks such as a cat
              showing up in a zoom call.
            </p>
            <h6>Built with: React, TypeScript, and Express</h6>
          </div>
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
          <div className="col">
            <h3>Weather App</h3>
            <p>
              This app I completed after completing the SheCodes Course. It is a
              front-end React Weather app that utilises the OpenWeather API.
              This is one of my earliest introductions to coding and taught me a
              lot about Apis and the process.
            </p>
            <h6>Built with: React</h6>
          </div>
        </div>
      </div>
      {/* //Group project */}
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>Rate My Pie</h3>
            <p>
              This is my current passion project. The idea was conceived by my
              husband a tradie who works in different locationd everyday. He
              wanted an app that would tell him where the best pie was in each
              new suburb he worked in. In from that simple idea we are now here.
            </p>
            <h6>Built with: React, Typescript, Express</h6>
          </div>
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
