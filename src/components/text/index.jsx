import React from 'react';
import PropTypes from 'prop-types';

const Text = (props) => { /* Normally we can do destructuring here, but tag name must be 'props.element' */
  const { id, className, content, children } = props;
  return (
    <props.element id={id} className={className}>
      {
        content ? content : children
      }
    </props.element>
  );
}

Text.propTypes = {
  element: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  content: PropTypes.string,
  children: PropTypes.node
};

Text.defaultProps = {
  element: 'span'
};

export default Text;