import PropTypes from 'prop-types';

const ownerShape = {
  name: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default ownerShape;
