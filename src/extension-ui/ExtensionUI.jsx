/* eslint-disable no-console */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getLiquidity from './getLiquidity';

export function ExtensionUI({ liquidity }) {
  return (
    <Fragment>
      <div className="flgf__total-wealth">
        <span style={{ marginRight: '.5rem' }}>
          Total Wealth:
        </span>
        <span className="price">
          {(liquidity / 100).toFixed(2)}
        </span>
      </div>
    </Fragment>
  );
}

ExtensionUI.propTypes = {
  liquidity: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  liquidity: getLiquidity(state),
});

export default connect(mapStateToProps)(ExtensionUI);