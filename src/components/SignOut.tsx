import React, {useContext}  from 'react'
import { UserContext } from "../UserContext";

export default function SignOut() {
    const [user, setUser] = useContext(UserContext);

    const handleSignOut = (event: any) => {
        event.preventDefault()
        setUser('')

    }
    return (
        <div>
            <p>Hello {user.name}</p>
        <form onSubmit={handleSignOut}>
            <button>Sign Out</button>
        </form>
        </div>
    )
}
