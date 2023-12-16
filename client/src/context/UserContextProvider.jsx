import React, { useState } from 'react'
import UserContext from './userContext'


const UserContextProvider = ({children}) => {
  const [user,setUser] = useState({});
  return (
    <UserContext.Provider value={{user,setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider

// Login and register a user results in loading user data into context api