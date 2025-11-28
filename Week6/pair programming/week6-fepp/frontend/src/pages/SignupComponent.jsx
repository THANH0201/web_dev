import useField from "../hooks/useField";
import useSignup from "../hooks/useSignup";

const SignupComponent = ({ setIsAuthenticated }) => {
  const emailInput = useField('text');
  const passwordInput = useField('password');
  const password2Input = useField('password');
  const { handleSignup, error, setError} = useSignup(setIsAuthenticated, emailInput.value, passwordInput.value, password2Input.value);
  
  
  return (
    <div>
      <h2>Signup</h2>
      <label>
        email:
        <input {...emailInput}/>
      </label>
      <br />
      <label>
        Password:
        <input
          {...passwordInput}
        />
      </label>
      <label>
        Confirm Password:
        <input
          {...password2Input}
        />
      </label>
      <label className="error-message">
        {error}
      </label>
      <br />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupComponent;