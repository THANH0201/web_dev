// AppWithCustomHook.jsx
import useField from './useField';
import './App.css';
import useLocalStorage from './useLocalStorage';

const AppWithCustomHook = () => {
  
  const nameInput = useField('text');
  const bornInput = useField('date');
  const heightInput = useField('number');

  // localStorage name
  const [name, setName] = useLocalStorage('name', '');

  const handleSubmit = (event) => {
    event.preventDefault();
    // save name into localStorage when submit
    setName(nameInput.value);
    console.log('Form submitted:', {
      name: nameInput.value,
      born: bornInput.value,
      height: heightInput.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input {...nameInput} />
        </div>
        <br />
        <div>
          Birthdate: <input {...bornInput} />
        </div>
        <br />
        <div>
          Height: <input {...heightInput} />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div>
        <p>Your name is stored in localStorage: {name}</p>
        <p>
          Current values: {nameInput.value} {bornInput.value} {heightInput.value}
        </p>
      </div>
    </div>
  );
};

export default AppWithCustomHook;

// // App.jsx
// import SingleCounter from './SingleCounter';  // Import the SingleCounter component
// import './App.css';  // Import styles for the app

// const App = () => {
//   return (
//     <div className="app-container">
//       <SingleCounter />
//       <SingleCounter />
//       <SingleCounter />
//     </div>
//   );
// };

// export default App;

