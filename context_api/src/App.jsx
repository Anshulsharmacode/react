import UsercontextProvider from "./context/usecontextprovider"
import Login from './components/login'
import Profile from "./components/profile"
function App() {
  
 return (
    <UsercontextProvider>
      
      <Login />
     <Profile/>
    </UsercontextProvider>
  )
}

export default App
