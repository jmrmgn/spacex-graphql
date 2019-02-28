import React from 'react';
import PropTypes from 'prop-types';

const launchItem = props => {
   const { flight_number, mission_name, launch_date_local, launch_success } = props.launch;

   return (
      <div className="card card-body mb-3">
         <div className="row">
            <div className="col-md-9">
               <h4>Mission: {mission_name} </h4>
               <p>Date: {launch_date_local}</p>
            </div>
            <div className="col-md-3">
               <button className="btn btn-secondary">Launch Details</button>
            </div>
         </div>
      </div>
   );
};

launchItem.propTypes = {
   launch: PropTypes.object.isRequired
};

export default launchItem;