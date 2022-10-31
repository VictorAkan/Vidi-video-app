import { Navbar } from "../../components/Navbar";
import { LoginForm } from "../../components/Login/LoginForm";
import { useState } from "react";
import { signInWithEmailAndPassword,sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../../firebase/firebase-config"

export const Login = () => {
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleLoginEmail = (e) => {
        setLoginEmail(e.target.value)
    }

    const handleLoginPassword = (e) => {
        setLoginPassword(e.target.value)
    }
    
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword,
            )
            console.log(user)
        } catch(error) {
            console.log(error.message)
        }
    }

    const forgotPassword = async () => {
        try{
            await sendPasswordResetEmail(auth, loginEmail)
            console.log('Password reset email sent');
            setMessage('Password reset email has been sent')
            setInterval(() => {
                setMessage('')
            }, 4000);
        } catch(error) {
            console.log(error.message);
        }
    }

    return (
        <main>
            <Navbar />
            <LoginForm 
                loginEmail={loginEmail}
                loginPassword={loginPassword}
                login={login}
                handleLoginEmail={handleLoginEmail}
                handleLoginPassword={handleLoginPassword}
                forgotPassword={forgotPassword}
                message={message}
            />
        </main>
    )
}