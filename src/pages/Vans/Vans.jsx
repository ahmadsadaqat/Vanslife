import { useEffect, useState } from "react";
import "../../../server";
import { Link } from "react-router-dom";

function Vans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => setVans(data.vans));
    // .catch((error) => console.log(error));
  }, []);

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">
        {vans.map((van) => (
          <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
              <img src={van.imageUrl} />
              <div className="van-info">
                <h2>{van.name}</h2>
                <p>{van.price}</p>
              </div>
              <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vans;
