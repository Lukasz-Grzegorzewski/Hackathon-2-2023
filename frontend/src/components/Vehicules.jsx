import React, { useState } from "react";
import axios from "axios";


function Vehicules() {


    const [displayVehicule, setDisplayVehicule] = useState([]);

    const getVehicule = () => {

        axios
            .get(`http://localhost:5000/vehicules`)
            .then((res) => {
                setDisplayVehicule(res.data)
            })
            .catch((err) => {
                console.warn(err)
            })
    }

    const vehiculeUrl = `http://localhost:5000/`

    return (
        <div className="vehicule">
            <button type="button" onClick={getVehicule}>Voir les véhicules disponible</button>
            <div>
                {displayVehicule.length > 0 &&
                    <div className="vehicule_card">
                        {displayVehicule.map((v) =>
                            <div key={v.id}>
                                <div className="vehicule_card_name">{v.name}</div>
                                <div className="vehicule_card_kmH">{v.kmH} km/h</div>
                                <img className="vehicule_card_img" src={vehiculeUrl + v.url} alt="vehicule" />
                            </div>
                        )}
                    </div>}

            </div>
        </div>
    );
}

export default Vehicules;
