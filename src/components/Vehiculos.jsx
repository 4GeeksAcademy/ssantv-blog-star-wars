import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.
import noAvailable from "../assets/img/no-disponible-SW.png"
import icon from "../assets/img/starwars-rebel-svgrepo-com.png"
import "../assets/styles/categories.css"

export const Vehiculos = () => {
  const { store, dispatch } = useGlobalReducer()

  const addToFavorites = (vehicle) => {
    dispatch({
      type: "add-fav",
      payload: vehicle
    });
  };

  return (
        <div className="row categories">
          {store.vehicles.map((el) => (
            <div key={el.uid} className="col-12 col-md-6 col-lg-3 mb-3">
              <div className="card h-100">
                <Link to={`/details/vehicles/${el.uid}`} className="text-decoration-none">
                  <img
                    src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/vehicles/${el.uid}.jpg`}
                    onError={(e) => (e.target.src = noAvailable)}
                    className="card-img-top"
                    alt={`${el.name} image`}
                  />
                  <div className="card-body d-flex align-items-center justify-content-center">
                    <h5 className="card-title text-center">
                      {el.name}
                    </h5>
                  </div>
    
                </Link>
                <div className="card-footer text-center">
                  <button
                    className="btn btn-danger"
                    onClick={() => addToFavorites(el.name)}
                  >
                    <img src={icon} className="icon" /> Favorito
                  </button>
                </div>
              </div>
            </div>
          ))
          }
        </div >
      );
    };