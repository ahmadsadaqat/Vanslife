import { Link } from "react-router-dom";

function App() {
  return (
    <div className="home-container">
      <h1>You got the travel plans, we got the travel vans.</h1>
      <p>
        Add advanture to your life by joining the #vanlife move to make your
        perfect road trip.
      </p>
      <Link to="vans">Find your van</Link>
    </div>
  );
}

export default App;
