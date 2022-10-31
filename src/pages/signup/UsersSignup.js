import { useState } from "react"
import { Navbar } from "../../components/Navbar"
import { UserForm } from "../../components/SignUp/userForm"
import { QuickUserInfo } from "../../components/SignUp/QuickUserInfo"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase/firebase-config"

export const UsersSignup = () => {
    const register = async () => {
        try {
            const user = createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            )
            console.log(user)
        } catch(error) {
            console.log(error)
        }
    }

    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')

    const handleEmailChange = (event) => {
        setRegisterEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setRegisterPassword(event.target.value)
    }

    return (
        <div>
            <Navbar />
            <div className="flex">
                <QuickUserInfo />
                <UserForm 
                    handleEmailChange={handleEmailChange}
                    handlePasswordChange={handlePasswordChange}
                    registerEmail={registerEmail}
                    registerPassword={registerPassword} 
                    register={register}
                />
            </div>
        </div>
    )
}