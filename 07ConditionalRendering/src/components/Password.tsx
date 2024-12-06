import ValidPassword from "./ValidPassword.tsx";
import InvalidPassword from "./InvalidPassword.tsx";

interface PasswordProps {
  isValid: boolean;
}

const Password = ({ isValid }: PasswordProps) => {
  return <>{isValid ? <ValidPassword /> : <InvalidPassword />}</>;
};

export default Password;
