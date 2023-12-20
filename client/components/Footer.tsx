import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className="card text-center">
      <div className="card-header">The important stuff!</div>
      <div className="card-body">
        <h5 className="card-title">Contact me!</h5>
        <p className="card-text">
          If this resonates with you, feel free to contact me!
        </p>
        <Link to="/" className="btn btn-light">
          Back to the top!
        </Link>
      </div>
      <div className="card-footer text-body-secondary">
        Open source code built by Katie Riches
      </div>
    </div>
  )
}
