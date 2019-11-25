import React from 'react'
import { Link } from 'react-router-dom'


const Result = () => {
  const filterShipsByTerm = ships => {
    const { match } = this.props;
    const searchTerm = match.params.searchTerm || '';
    return ships.filter(ship => ship.reviews.some(({ body = '' }) => body.toLowerCase().includes(searchTerm.toLowerCase())))
  }
  render(){
    const { ships } = this.state
  return(
  <>
  <div className="outer-wrapper">

    {ships.map(ship => (
      <>
        <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{ship.cruise_name.name} {ship.name}</h5>
                <p className="card-text"><small class="text-muted">{ship.reviews.length} Reviews</small></p>
         </div>
        <ul>
          {ship.reviews.map(({ body }) => (
            <li>{body}</li>
          ))}
        </ul>
      </div>
      </>
    ))}
  </div>
</>
  )
}

export default Result
