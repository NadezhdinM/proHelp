import React, { useContext } from 'react';
import { Context } from '../..';
import './patient.scss';

const Patient = () => {
    const {store} = useContext(Context);

    return (
        <div className="patient">
            <div className="patient__img">
                <img src="#" alt="" />
            </div>
            <div className="patient__info">
                <h4>{store.user.profile.first_name} {store.user.profile.last_name[0]}. {store.user.profile.middle_name[0]}.</h4>
                <p>Дата рождения</p>
                <p><b>{store.user.profile.birth_date}</b></p>
            </div>
        </div>
    );
}

export default Patient;
