// import { useState} from "react";

import Search from "./views/Search";

const App = () => <Search />;

export default App;

// // COMPONENTE FUNCIONAL
// function App() {
//   //primer valor tal cual y el segundo el seter, una fc que actualiza el estado
//   const [email, setEmail ] = useState("");
//   const [password, setPassword ] = useState("");

//   //constantes de estado
//   const handleEmailChange = (event) => setEmail(event.target.value);
//   //dos formas de pasar el value.
//   const handlePasswordChange = ({ target : { value } }) => setPassword(value)

//   const handleFormSubmit = (event) => {
//     //funcion para que no se refresque la pagina
//     event.preventDefault();
//     alert(`Usuario: ${email}, Password: ${password}`)
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleFormSubmit}>
//         <h2> Iniciar Sesión </h2>
//         <label>
//           Correo
//           <input type="email" value={email} onChange={handleEmailChange} />  
//         </label>
//         <label>
//           Contraseña
//           <input type="password" value={password} onChange={handlePasswordChange} />  
//         </label>
//         <button type ="submit">
//           Enter  
//         </button>  
//       </form>      
//     </div>
//   );
// }

// export default App;

