import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getReserveLevel from './getReserveLevel';

export function ReserveDisplay({ reserveLevel }) {
  if (reserveLevel <= 0) {
    return null;
  }
  return (
    <div className="flgf__reserve-display">
      Reserved:
      {' '}
      {reserveLevel}
    </div>
  );
}

ReserveDisplay.propTypes = {
  reserveLevel: PropTypes.number.isRequired,
};

const mapStateToProps = (state, props) => ({
  reserveLevel: getReserveLevel(state, props),
});

export default connect(mapStateToProps)(ReserveDisplay);