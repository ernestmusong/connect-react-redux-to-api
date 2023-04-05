import React from 'react';
import PropTypes from 'prop-types';
 
const User = (props) => {
  const { user } = props;
  return (
    <>
      <li>First name: {user.name.first} <br /> Last name: {user.name.last}</li>
    </>
  );
};

User.propTypes = {
  book: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default User;
