import React, { Fragment } from 'react';
import './customerItem.scss';

function CustomerItem({ customer: { id, name, age, email } }) {
  return (
    <Fragment>
      <div className="customer__card card">
        <div className="card__body">
          <h1>Name: {name}</h1>
          <small>ID: {id}</small>
        </div>

        <div className="card__footer">
          <button>Details</button>
        </div>
      </div>
    </Fragment>
  );
}

export default CustomerItem;
