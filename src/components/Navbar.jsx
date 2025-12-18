import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useState, useEffect } from "react";
import "../assets/styles/navbar.css"


export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer();
	const [favoritesCount, setFavoritesCount] = useState(store.favorites.length);

	useEffect(() => {
		setFavoritesCount(store.favorites.length);
	}, [store.favorites]);

	return (
		<nav className="navbar navbar-expand-lg bg-body-dark">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/"><img src={logo} alt="SWlogo" width="80" height="48" /></Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active text-light" aria-current="page" href="#">Ver todo</Link>
						</li>
						<li className="nav-item dropdown">
							<Link className="nav-link dropdown-toggle  text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Categorías
							</Link>
							<ul className="dropdown-menu dropdown-menu-dark">
								<li><Link className="dropdown-item" to="/species">Especies</Link></li>
								<li><Link className="dropdown-item" to="/starships">Naves</Link></li>
								<li><Link className="dropdown-item" to="/films">Peliculas</Link></li>
								<li><Link className="dropdown-item" to="/people">Personajes</Link></li>
								<li><Link className="dropdown-item" to="/planets">Planetas</Link></li>
								<li><Link className="dropdown-item" to="/vehicles">Vehiculos</Link></li>
							</ul>
						</li>
						<li className="nav-item dropdown">
							<Link
								className="nav-link dropdown-toggle"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Favoritos ({store.favorites.length})
							</Link>

							<ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
								{store.favorites.length === 0 ? (
									<li className="dropdown-item text-muted">
										No hay favoritos
									</li>
								) : (
									store.favorites.map((fav, index) => (
										<li
											key={index}
											className="dropdown-item d-flex justify-content-between align-items-center"
										>
											{fav}
											<span
												className="text-danger"
												style={{ cursor: "pointer" }}
												onClick={() =>
													dispatch({
														type: "delete-fav",
														payload: fav
													})
												}>
												✖
											</span>
										</li>
									))
								)}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};


