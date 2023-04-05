import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import User from './User';
import { getUsers } from 'redux/users/usersSlice';

const Users = () => {
  const dispatch = useDispatch()
  const { users, isLoading, error } = useSelector((store) => store.users);

  useEffect(() => {
   dispatch(getUsers('random'))
  }, [dispatch])

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div className="error">
        <h1>{error}</h1>
      </div>
    );
  }

  return (
    <ul>
      {users.results.map((user) => (
        <User user={user} />
      ))}
    </ul>
  );
};

export default Users;
