
import { Link } from "react-router-dom";
import yoda from "../assets/img/Yoda_SWSB.webp"
import "../assets/styles/index.css";

export const Error = () => {

    return (
        <>
            <div className="container d-flex mt-5">
                <div className="row">
                    <img src={yoda} className="col-sm-12 col-md-6 w-50 justify-self-center yoda-img"></img>
                    <div className="col-sm-12 col-md-6 text-center align-self-center error-text neonText3">JOVEN PADAWAN, PERDIDO ESTÁS<br />VOLVER AL INICIO DEBES</div>
                    <Link href="/" className="btn btn-outline-light mt-5 display-3">VOLVER</Link>
                </div>
            </div>
        </>
    );
};
