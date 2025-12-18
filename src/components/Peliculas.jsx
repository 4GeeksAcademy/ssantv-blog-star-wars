import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
import icon from "../assets/img/starwars-rebel-svgrepo-com.png"
import "../assets/styles/categories.css"


export const Peliculas = () => {
  const { store, dispatch } = useGlobalReducer();

  const addToFavorites = (title) => {
    dispatch({
      type: "add-fav",
      payload: title
    });

  };

  return (
    <div className="row categories">
      {store.films.map((el) => (
        <div key={el.uid} className="col-12 col-md-6 col-lg-3 mb-3">
          <div className="card h-100">
            <Link to={`/details/films/${el.uid}`} className="text-decoration-none text-dark">
              <img
                src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/films/${el.uid}.jpg`}
                onError={(e) => (e.target.src = noAvailable)}
                className="card-img-top"
                alt={el.properties.title}
              />
              <div className="card-body d-flex align-items-center justify-content-center">
                <h5 className="card-title text-center">
                  {el.properties.title}
                </h5>
              </div>
            </Link>
            <div className="card-footer text-center">
              <button
                    className="btn btn-danger"
                onClick={() => addToFavorites(el.properties.title)}
              >
                <img src={icon} className="icon" /> Favorito
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
