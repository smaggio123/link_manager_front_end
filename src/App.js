import './App.css';
import HomePage from './components/HomePage.js'
import LoginForm from './components/LoginForm';
import React,{useState} from 'react';


function App() {

  const adminUser = {
    email: "admin@admin.com",
    password: "password"
  }

  const [user,setUser] = useState({name: "",email:""});
  const [error,setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
      setUser({
        name: details.name,
        email:details.email
      })
    }
    else{
      setError("Details don't match")
    }
  }

  const Logout = () =>{
    console.log("logout");
    setUser({name:"",email:""})
  }

  return (
    <div className="App">
      {(user.email != "") ?(
        <HomePage Logout={setUser}/>
      ):(
        <LoginForm Login={Login} error={error}/>
      )}
      
    </div>
  );
}

export default App;
