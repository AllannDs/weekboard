import { useState } from "react";
import { supabase } from "../supabaseClient";

function AuthScreen(){

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
            setIsSubmitting(false)
        }
        
    }

    return(
        <div></div>
    )
}

export default AuthScreen;