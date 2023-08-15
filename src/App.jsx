import Parent from "./components/Parent"
import { useState } from "react";
import { UserProvider } from "./context/userContext";


function App() {
  const [user, setUser] = useState({
    name: 'Jane',
    age: 35
  });
  return (
    <>
      <div>
        <UserProvider>
          <Parent userData={user} setUser={setUser}/>
        </UserProvider>
      </div>
    </>
  )
}

export default App
