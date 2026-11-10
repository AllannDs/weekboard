import { useState } from "react";
import { Link } from "react-router-dom";



function App() {
    const DAYS = [{ id: "DOM", label: "DOMINGO" },
    { id: "SEG", label: "SEGUNDA" },
    { id: "TER", label: "TERÇA" },
    { id: "QUA", label: "QUARTA" },
    { id: "QUI", label: "QUINTA" },
    { id: "SEX", label: "SEXTA" },
    { id: "SAB", label: "SÁBADO" }
    ]
    const [session, setSession] = useState(null);
    const [isPassowordRecovery, setisPasswordRecovery] = useState(false);
    const [loading, setLoading] = useState(true);
    const [account, setAccount] = useState(false);


    const [viewMode, setViewMode] = useState('login');

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [sucessMessage, setSucessMessage] = useState('');
    const [erroMessage, setErroMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(e) {
            e.preventDefault();
            setErroMessage('');
            setSucessMessage('');
            setIsSubmitting(true);
    
            try {
                if (viewMode === "login") {
                    const {error} = await supabase.auth.signInWithPassword({
                        email,
                        password,
                    });
                    if (error) throw error;
                } else if (viewMode === "signup") {
                    const {error} = await supabase.auth.signUp({
                        email,
                        password,
                    });
                    if (error) throw error;
                    setSucessMessage('Conta Criada com Sucesso!');
                    setViewMode('login');
                } else if (viewMode === 'forgot') {
                    const {error} = await supabase.auth.resetPasswordForEmail(email, {redirectTo: window.location.origin,
                    });
                    if (error) throw error ;
                    setSucessMessage('Instruções enviadas ao seu email!')
                }
            } catch (err) {
                setErroMessage(err.message)
            } finally {
                setIsSubmitting(false);
            }
            
        }

    return (
        <div>
            {viewMode === 'login' && (
                <div id="mainDiv" className="bg-neutral-100 h-screen w-screen flex items-center justify-center">
                    <div id="loginWindow" className="w-min-96 h-min-96 w-164 aspect-square bg-neutral-300 flex items-center justify-center flex-col">
                        <h1>Welcome</h1>
                        <form className="" action="">
                            <div className="flex flex-col items-center justiy-center">
                                <div id="emailLogin" className="">
                                    <div>
                                        <label>Email</label>
                                        <input type="email" name="emailLogin" id="emailLogin" placeholder="your@email.com" required />
                                    </div>
                                </div>

                                <div id="passwordLogin">
                                    <div><label>Password</label>
                                        <input type="password" name="passwordLogin" id="passwordLogin" placeholder="********" required />
                                    </div>
                                </div>

                                <button type="submit">Sign In</button>
                                <button type="submit" onClick={() => setViewMode('create')}>Create an Account</button>
                                <button type="submit" onClick={() => setViewMode('forgot')}>Forgot the password</button>

                            </div>

                        </form>
                    </div>
                </div>
            )}

            {viewMode === 'create' && (
                <div className="bg-neutral-100 h-screen w-screen flex items-center justify-center">
                    <div id="createWindow" className="w-min-96 w-164 aspect-square bg-neutral-300 flex flex-col items-center justify-center">
                        <h1>Create your account</h1>
                        <form className="" action="">
                            <div className="flex flex-col items-center justify-center">
                                <div id="emailCreate" className="">
                                    <div>
                                        <label htmlFor="">Email: </label>
                                        <input type="email" name="email" id="email" placeholder="" required />
                                    </div>
                                </div>

                                <div id="passwordCreate" className="">
                                    <div>
                                        <label htmlFor="">Password: </label>
                                        <input type="password" name="password" id="password" required />
                                    </div>
                                </div>

                                <div id="conpassCreate" className="">
                                    <div>
                                        <label htmlFor="">Confirm your Password: </label>
                                        <input type="password" name="conpass" id="conpass" required />
                                    </div>
                                </div>

                                <button type="submit" onClick={() => setViewMode('login')}>Create</button>
                                <button type="submit" onClick={() => setViewMode('login')}>Cancel</button>

                            </div>
                        </form>

                    </div>
                </div>
            )}

            {viewMode === 'forgot' && (
                <div className="bg-neutral-100 h-screen w-screen flex items-center justify-center">
                    <div id="forgotpassword" className="w-min-96 w-164 aspect-square bg-neutral-300 flex flex-col items-center justify-center">
                        <h1>Forgot Password</h1>
                        <p>Enter your email adress</p>
                        <input type="text" placeholder="Enter email adress" />
                        <button onClick={() => setViewMode('login')}>Continue</button>
                    </div>
                </div>)}
        </div>




    );
}

export default App;