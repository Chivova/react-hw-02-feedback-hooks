import { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <Fragment>
      <h1>{title}</h1>
      {children}
    </Fragment>
  );
}

Section.protoType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
