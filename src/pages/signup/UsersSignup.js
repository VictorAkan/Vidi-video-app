import { useState } from "react"
import { UserForm } from "../../components/SignUp/userForm"
import { QuickUserInfo } from "../../components/SignUp/QuickUserInfo"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase/firebase-config"
import { Validate } from "../../components/Validator/Validate"

export const UsersSignup = () => {
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [name, setName] = useState('')
    const [registerSuccess, setRegisterSuccess] = useState(false)

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            )
            console.log(user)
            setRegisterSuccess(true)
        } catch(error) {
            console.log(error)
            setRegisterSuccess(false)
        }
    }

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setRegisterEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setRegisterPassword(event.target.value)
    }

    return (
        <div>
            {registerSuccess ? <Validate name={name} /> : <div className="flex">
                <QuickUserInfo />
                <UserForm 
                    handleEmailChange={handleEmailChange}
                    handlePasswordChange={handlePasswordChange}
                    registerEmail={registerEmail}
                    registerPassword={registerPassword} 
                    register={register}
                    onChangeName={onChangeName}
                    name={name}
                />
            </div>}
        </div>
    )
}