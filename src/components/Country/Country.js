import React from 'react';

const Country = (props) => {
    const { name, area, flags } = props.country;

    return (
        // <div>
        //     <h3>Country: {name.common}</h3>
        //     <img src={flags.png} alt="" />
        //     <p>Area: {area}</p>
        // </div>
        <div className="col">
            <div className="card h-100">
                <img src={flags.png} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name.common}</h5>
                    <p className="card-text">{area}</p>
                </div>
            </div>
        </div>

    );
};

export default Country;