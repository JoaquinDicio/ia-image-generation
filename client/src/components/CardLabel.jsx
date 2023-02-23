import React from "react";

export default function CardLabel({ owner, prompt }) {
  return (
    <div className="d-flex flex-column rounded my-3 mx-2 p-3 shadow-sm card-label">
      <div className="card-label-user-info d-flex align-items-center">
        <div className="user-icon d-flex align-items-center justify-content-center">
          <p className="p-0 m-0 bold">{owner[0]}</p>
        </div>
        <p className="text-white user-name bold">{owner}</p>
      </div>
      <p className="text-white m-0 my-3 mb-0 ">{prompt}</p>
    </div>
  );
}
