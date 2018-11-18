/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getLiquidity from './getLiquidity';

export function Thing({ liquidity, qualities }) {
  const stuff = qualities
    .filter(q => q.nature === 'Thing')
    .filter(q => q.category === 'Currency');
  console.info(stuff[0]);

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
  qualities: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const mapStateToProps = state => ({
  qualities: state.myself.qualities,
  liquidity: getLiquidity(state),
});

export default connect(mapStateToProps)(Thing);