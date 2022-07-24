import React from 'react'

export default function doctor_card({id, img, name, department, experience, hospital}) {
  return (
    <div className="container shadow doctor-card">
      <div className="doctor-card-circle-avatar"></div>
      <h5 className="doctor-card-name">Dr.{name}</h5>
      <p className="doctor-card-dept">{department}</p>
      <p className="doctor-card-exp">{experience} years experience</p>
      <h6 className="doctor-card-hospital-name">{hospital}</h6>
      <button className="btn btn-large doctor-card-view-profile-button">
        View Profile
      </button>
    </div>
  );
}
