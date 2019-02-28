import React from 'react';
import PropTypes from 'prop-types';

const rocketItem = props => {
   const { rocket_id, rocket_name, rocket_type } = props.rocket;
   return (
      <div className="card card-body mb-3">
         <div className="row">
            <div className="col-md-12">
               <h4>Name: {rocket_name}</h4>
               <h5>ID: {rocket_id}</h5>
               <h5>Type: {rocket_type}</h5>
            </div>
         </div>
      </div>
   );
};

rocketItem.propTypes = {
   rocket: PropTypes.object.isRequired
}

export default rocketItem;