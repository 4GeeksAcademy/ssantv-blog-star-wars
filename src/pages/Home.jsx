import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { Peliculas } from "../components/Peliculas.jsx";
import { Personajes } from "../components/Personajes.jsx";
import { Planetas } from "../components/Planetas.jsx";
import { Vehiculos } from "../components/Vehiculos.jsx";
import { Especies } from "../components/Especies.jsx";
import { Naves } from "../components/Naves.jsx";

import "../assets/styles/home.css";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(() => {
		fetchFilms();
		fetchPeople();
		fetchPlanets();
		fetchShips();
		fetchSpecies();
		fetchVehicles();
	}, []);

	const fetchFilms = async () => {
		const response = await fetch(`${store.url}films/`);
		const data = await response.json();
		dispatch({ type: "set-films", payload: data.result || [] });
	};

	const fetchPeople = async () => {
		const response = await fetch(`${store.url}people/`);
		const data = await response.json();
		dispatch({ type: "set-people", payload: data.results || [] });
	};

	const fetchPlanets = async () => {
		const response = await fetch(`${store.url}planets/`);
		const data = await response.json();
		dispatch({ type: "set-planets", payload: data.results || [] });
	};

	const fetchSpecies = async () => {
		const response = await fetch(`${store.url}species/`);
		const data = await response.json();
		dispatch({ type: "set-species", payload: data.results || [] });
	};

	const fetchShips = async () => {
		const response = await fetch(`${store.url}starships/`);
		const data = await response.json();
		dispatch({ type: "set-starships", payload: data.results || [] });
	};

	const fetchVehicles = async () => {
		const response = await fetch(`${store.url}vehicles/`);
		const data = await response.json();
		dispatch({ type: "set-vehicles", payload: data.results || [] });
	};

	return (
		<div className="accordion-container">
			<div className="accordion accordion-flush" id="accordionFlushExample">
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
							Especies
						</button>
					</h2>
					<div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
						<div className="accordion-body">
							<Especies />
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
							Naves
						</button>
					</h2>
					<div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
						<div className="accordion-body">
							<Naves />
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
							Peliculas
						</button>
					</h2>
					<div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
						<div className="accordion-body">
							<Peliculas />
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header">
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
							Personajes
						</button>
					</h2>
					<div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
						<div className="accordion-body">
							<Personajes />
						</div>
					</div>
				</div>

				<div className="accordion-item">
					<h2 className="accordion-header">
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
							Planetas
						</button>
					</h2>
					<div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
						<div className="accordion-body">
							<Planetas />
						</div>
					</div>
				</div>
				<div className="accordion-item">
					<h2 className="accordion-header">
						<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
							Vehiculos
						</button>
					</h2>
					<div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
						<div className="accordion-body">
							<Vehiculos />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}; 