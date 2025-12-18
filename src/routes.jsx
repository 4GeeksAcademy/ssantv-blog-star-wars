// Import necessary components and functions from react-router-dom.
import yodaImg from "./assets/img/Yoda_SWSB.webp"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { Especies } from "./components/Especies";
import { Naves } from "./components/Naves";
import { Peliculas } from "./components/Peliculas";
import { Personajes } from "./components/Personajes";
import { Planetas } from "./components/Planetas";
import { Vehiculos } from "./components/Vehiculos";
import { Error } from "./components/Error";

export const router = createBrowserRouter(
  createRoutesFromElements(
   
    <Route path="/" element={<Layout />} errorElement={<Error/>} >

      <Route path="/" element={<Home />} />
      <Route path="/details/:category/:uid" element={<Details />} />
      <Route path="/species" element={<Especies />} />
      <Route path="/starships" element={<Naves />} />
      <Route path="/films" element={<Peliculas />} />
      <Route path="/people" element={<Personajes />} />
      <Route path="/planets" element={<Planetas />} />
      <Route path="/vehicles" element={<Vehiculos />} />

    </Route>
  )
);