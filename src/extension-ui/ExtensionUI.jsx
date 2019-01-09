/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getLiquidity from './selectors/getLiquidity';
import getTarget from './selectors/getTarget';
// import updateTarget from '../target/updateTarget';

export function ExtensionUI({ liquidity, onClick, target }) {
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
          onClick={onClick}
          // onClick={() => dispatch(updateTarget())}
        >
          (update)
        </button>
      </div>
    </div>
  );
}

ExtensionUI.propTypes = {
  liquidity: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  target: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  liquidity: getLiquidity(state),
  target: getTarget(state),
});

export default connect(mapStateToProps)(ExtensionUI);