import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "../assets/styles/details.css";
import noAvailable from "../assets/img/no-disponible-SW.png"
import useGlobalReducer from "../hooks/useGlobalReducer";
import icon from "../assets/img/starwars-rebel-svgrepo-com.png"


export const Details = () => {
  const { category, uid } = useParams();
  const { dispatch, store } = useGlobalReducer();
  const [item, setItem] = useState(null);
  const url = `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/${category === "people" ? "character" : category
    }/${uid}.jpg`

  useEffect(() => {
    fetch(`https://www.swapi.tech/api/${category}/${uid}`)
      .then(response => response.json())
      .then(data => setItem(data.result))
  }, [category, uid]);

  if (!item) return <p className="charging">Cargando detalles desde una galaxia lejana…</p>;

  const renderCategoryDetails = () => {
    switch (category) {

      case "films":
        return (
          <div className="col-md-8 details-info">
            <h1 className="details-title">{item.properties.title}</h1>
            <ul className="details-list">
              <li><span>Episode ID:</span> {item.properties.episode_id}</li>
              <li><span>Director:</span> {item.properties.director}</li>
              <li><span>Producer:</span> {item.properties.producer}</li>
              <li><span>Release date:</span> {item.properties.release_date}</li>
            </ul>
          </div>
        );

      case "people":
        return (
          <div className="col-md-8 details-info">
            <h1 className="details-title">{item.properties.name}</h1>
            <ul className="details-list">
              <li><span>Gender:</span> {item.properties.gender}</li>
              <li><span>Skin color:</span> {item.properties.skin_color}</li>
              <li><span>Hair color:</span> {item.properties.hair_color}</li>
              <li><span>Height:</span> {item.properties.height}</li>
              <li><span>Eye color:</span> {item.properties.eye_color}</li>
              <li><span>Mass:</span> {item.properties.mass}</li>
              <li><span>Birth year:</span> {item.properties.birth_year}</li>
            </ul>
          </div>
        );

      case "planets":
        return (
          <div className="col-md-8 details-info">
            <h1 className="details-title">{item.properties.name}</h1>
            <ul className="details-list">
              <li><span>climate:</span> {item.properties.climate}</li>
              <li><span>Surface water:</span> {item.properties.surface_water}</li>
              <li><span>Diameter:</span> {item.properties.diameter}</li>
              <li><span>Rotation period:</span> {item.properties.rotation_period}</li>
              <li><span>Terrain:</span> {item.properties.terrain}</li>
              <li><span>Gravity:</span> {item.properties.gravity}</li>
              <li><span>Orbital period:</span> {item.properties.orbital_period}</li>
              <li><span>Population:</span> {item.properties.population}</li>
            </ul>
          </div>
        );

      case "starships":
        return (
          <div className="col-md-8 details-info">
            <h1 className="details-title">{item.properties.name}</h1>
            <ul className="details-list">
              <li><span>Diameter:</span> {item.properties.diameter}</li>
              <li><span>Climate:</span> {item.properties.climate}</li>
              <li><span>Terrain:</span> {item.properties.terrain}</li>
              <li><span>hyperdrive_rating:</span> {item.properties.hyperdrive_rating}</li>
              <li><span>starship_class:</span> {item.properties.starship_class}</li>
              <li><span>MGLT:</span> {item.properties.MGLT}</li>
              <li><span>pilots:</span> {item.properties.pilots}</li>
              <li><span>manufacturer:</span> {item.properties.manufacturer}</li>
              <li><span>cost_in_credits:</span> {item.properties.cost_in_credits}</li>
              <li><span>model:</span> {item.properties.model}</li>
              <li><span>length:</span> {item.properties.length}</li>
              <li><span>crew:</span> {item.properties.crew}</li>
              <li><span>max_atmosphering_speed:</span> {item.properties.max_atmosphering_speed}</li>
              <li><span>passengers:</span> {item.properties.passengers}</li>
              <li><span>cargo_capacity:</span> {item.properties.cargo_capacity}</li>
              <li><span>name:</span> {item.properties.name}</li>
              <li><span>consumables:</span> {item.properties.consumables}</li>
            </ul>
          </div>
        );

      case "species":
        return (
          <div className="col-md-8 details-info">
            <h1 className="details-title">{item.properties.name}</h1>
            <ul className="details-list">
              <li><span>classification:</span> {item.properties.classification}</li>
              <li><span>designation:</span> {item.properties.designation}</li>
              <li><span>eye_colors:</span> {item.properties.eye_colors}</li>
              <li><span>skin_colors:</span> {item.properties.skin_colors}</li>
              <li><span>language:</span> {item.properties.language}</li>
              <li><span>hair_colors:</span> {item.properties.hair_colors}</li>
              <li><span>average_lifespan:</span> {item.properties.average_lifespan}</li>
              <li><span>average_height:</span> {item.properties.average_height}</li>
            </ul>
          </div>
        );

      case "vehicles":
        return (
          <div className="col-md-8 details-info">
            <h1 className="details-title">{item.properties.name}</h1>
            <ul className="details-list">
              <li><span>consumables:</span> {item.properties.consumables}</li>
              <li><span>cargo_capacity:</span> {item.properties.cargo_capacity}</li>
              <li><span>passengers:</span> {item.properties.passengers}</li>
              <li><span>max_atmosphering_speed:</span> {item.properties.max_atmosphering_speed}</li>
              <li><span>crew:</span> {item.properties.crew}</li>
              <li><span>length:</span> {item.properties.length}</li>
              <li><span>model:</span> {item.properties.model}</li>
              <li><span>cost_in_credits:</span> {item.properties.cost_in_credits}</li>
              <li><span>manufacturer:</span> {item.properties.manufacturer}</li>
              <li><span>vehicle_class:</span> {item.properties.vehicle_class}</li>
              <li><span>pilots:</span> {item.properties.pilots}</li>
            </ul>
          </div>
        );
      default:
        return <p className="charging">No se han encontrado detalles para esta categoría.</p>;
    }
  };

  const addToFavorites = () => {
    const name =
      item.properties.name || item.properties.title;

    dispatch({
      type: "add-fav",
      payload: name
    });
  };

  return (
    <div className="container my-5 details-card">
      <div className="row align-items-center">
        <div className="col-md-4 text-center">
          <img
            src={`https://raw.githubusercontent.com/tbone849/star-wars-guide/refs/heads/master/build/assets/img/${category === "people" ? "characters" : category
              }/${uid}.jpg`}
            onError={(e) => (e.target.src = noAvailable)}
            className="img-fluid details-img"
          />
        </div>

        {renderCategoryDetails()}

        <div className="col-12 text-center mt-4">
          <button
            className="btn btn-danger"
            onClick={addToFavorites}
          >
            <img src={icon} className="icon" />Añadir a favoritos
          </button>
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  match: PropTypes.object,
};