interface UserStatusProps {
  loggedIn: boolean;
  isAdmin: boolean;
}

const UserStatus = ({ loggedIn, isAdmin }: UserStatusProps) => {
  return (
    <>
      {loggedIn && isAdmin && <p>Welcome Admin!</p>}
      {loggedIn && !isAdmin && <p>Welcome User!</p>}
    </>
  );
};

export default UserStatus;
