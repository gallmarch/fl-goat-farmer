/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getLiquidity from './getLiquidity';

export function Thing({ liquidity }) {
  return (
    <div className="flgf__total-wealth">
      Total Wealth:
      <span className="price">
        {(liquidity / 100).toFixed(2)}
      </span>
    </div>
  );
}

Thing.propTypes = {
  liquidity: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  liquidity: getLiquidity(state),
});

export default connect(mapStateToProps)(Thing);