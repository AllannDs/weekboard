import { useState } from "react";
import { Link } from "react-router-dom";


function App() {
    const [login, setLogin] = useState(false);
    const [account, setAccount] = useState(false);
    
    return (
        <div>
            {!login ? ( 
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
                                    <div><label>Senha</label>
                                        <input type="password" name="passwordLogin" id="passwordLogin" placeholder="********" required />
                                    </div>
                                </div>

                                <button type="submit">Entrar</button>

                                <Link to="/CreateAccount">Create an Account</Link>
                            </div>

                        </form>
                    </div>
                </div>
            ) : (
                <div className="bg-neutral-400 h-screen w-screen">
                    <p>logado</p>
                </div>
            )}


        </div>


    );
}

export default App;