import PropTypes from 'prop-types';

const participantShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
};

export default participantShape;
