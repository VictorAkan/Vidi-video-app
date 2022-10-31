export const LoginForm = ({ message,loginEmail,loginPassword,login,handleLoginEmail,handleLoginPassword,forgotPassword }) => {
    return(
        <div className="flex justify-center">
            <div>
                <form onSubmit={(e) => e.preventDefault()} className="bg-white drop-shadow-md w-96 rounded-md p-4" action="">
                    <div className="heading flex justify-center">
                        <h2 className="text-green-400 font-bold text-4xl">Welcome Back !🤝</h2>
                    </div>
                    <div className="mt-7">
                        <label htmlFor="email">Email:</label>
                        <div>
                            <input type="email" name="email" 
                                className="w-full mt-3 p-3 rounded-md bg-slate-100 focus:outline-none focus:ring focus:ring-green-400"
                                placeholder="email"
                                pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
                                value={loginEmail}
                                onChange={handleLoginEmail}
                            />
                        </div>
                    </div>
                    <div className="mt-5">
                        <label htmlFor="password">Password:</label>
                        <div>
                            <input type="password" name="password" 
                                className="w-full mt-3 p-3 rounded-md bg-slate-100 focus:outline-none focus:ring focus:ring-green-400"
                                placeholder="password"
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                value={loginPassword}
                                onChange={handleLoginPassword}
                            />
                        </div>
                    </div>
                    <div className="mt-9 flex justify-center">
                        <button type="submit"
                            onClick={login}
                            className="text-white bg-green-500 hover:bg-green-400 px-10 p-3 rounded-md"
                        >
                            Login
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <p className="text-sky-500">{message}</p>
                    </div>
                </form>
                <div className="forgot--password flex justify-center mt-5">
                    <button className="hover:text-green-400" onClick={forgotPassword}>
                        Forgot Password...?
                    </button>
                </div>
            </div>
        </div>
    )
}