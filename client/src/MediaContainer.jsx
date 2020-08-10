import React from 'react';
import PropTypes from 'prop-types';

function MediaContainer({ image }) {
  return <div>{image.url}</div>;
}
MediaContainer.propTypes = {
  image: PropTypes.instanceOf(Object).isRequired,
};

export default MediaContainer;