import { useState } from "react";
//import { supabase } from "../supabaseClient";

function UpdatePasswordScreen({onPasswordUpdated}) {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [statusMessage, setStatusMessage] = useState('')
    const [isError, setIsError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleUpdatePassword(e) {
        e.preventDefault();

        if (newPassword !== confirmPassword) {
            setIsError(true)
            setStatusMessage('As senhas não coincidem.');
            return;
        }

        if(newPassword.length < 6){
            setIsError(true);
            setStatusMessage('A senha deve ter mais de 6 dígitos');
            return;
        }

        setIsSubmitting(true);
        setIsError(false);

        /*try{
            const {error} = await supabase.auth.updateUser({
                password: newPassword,
            });

            if (error) throw error;
            setStatusMessage("Senha alterada com sucesso!");

            setTimeout(() => {
                onPasswordUpdated();
            }, 1500)
        } catch (err) {
            setIsError(true);
            setStatusMessage(err.message);
        } finally {
            setIsSubmitting(false);
        }*/
    }

    return(
        <div id="mainDiv" className="bg-neutral-100 h-screen w-screen flex items-center justify-center">
            <div id='forgotWindow' className="w-min-96 h-min-96 w-164 aspect-square bg-neutral-300 flex items-center justify-center flex-col">
                <h1>Create a New Password</h1>
                {statusMessage && (
                    <p className={`${isError ? 'text-green-600' : 'text-red-600'}`}>{statusMessage}</p>
                )}

                <form onSubmit={handleUpdatePassword}>
                    <div>
                        <label htmlFor="newPassword">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            required
                            value ={newPassword}
                            onChange={(e) => {setNewPassword(e.target.value)}}
                            placeholder="Create a new Password"
                        />
                    </div>

                    <div>
                        <label htmlFor="confirmPassword">Confirm New Password</label>
                        <input 
                            type="password"
                            id="confirmPassword" 
                            required
                            value={confirmPassword}
                            onChange={(e) => {setConfirmPassword(e.target.value)}}
                            placeholder="Confirm New Password"
                            />
                    </div>

                    <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Save"}</button>
                </form>
            </div>
        </div>
    )
}

export default UpdatePasswordScreen;