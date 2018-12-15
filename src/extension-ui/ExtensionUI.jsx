/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getLiquidity from './getLiquidity';
import getTarget from './getTarget';
import makeUpdateTarget from './makeUpdateTarget';

export function ExtensionUI({ dispatch, liquidity, target }) {
  const updateTarget = makeUpdateTarget();
  return (
    <div className="flgf__wealth-and-target">
      <div className="flgf__total-wealth">
        <span className="flgf__label">
          Total Wealth:
        </span>
        <span className="price flgf__value">
          {(liquidity / 100).toFixed(2)}
        </span>
      </div>
      <div className="flgf__to-target">
        <span className="flgf__label">
          To Target:
        </span>
        <span className="price flgf__value">
          {Math.max(0, (target - (liquidity / 100))).toFixed(2)}
        </span>
        <button
          className="button--link button--link-inverse flgf__update-button"
          onClick={() => dispatch(updateTarget)}
        >
          (update)
        </button>
      </div>
    </div>
  );
}

ExtensionUI.propTypes = {
  dispatch: PropTypes.func.isRequired,
  liquidity: PropTypes.number.isRequired,
  target: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  liquidity: getLiquidity(state),
  target: getTarget(state),
});

export default connect(mapStateToProps)(ExtensionUI);