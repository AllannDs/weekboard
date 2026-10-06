function CreateAccount() {

    return(
        <div className="bg-neutral-100 h-screen w-screen flex items-center justify-center">
            <div id="createWindow" className="w-164 aspect-square bg-neutral-300 flex flex-col items-center justify-center">
                <h1>Create your account</h1>
                <form className="" action="">
                    <div className="flex flex-col items-center justify-center">
                        <div id="emailCreate" className="">
                            <div>
                                <label htmlFor="">Email: </label>
                                <input type="email" name="email" id="email" placeholder="" required/>
                            </div>
                        </div>

                        <div id="passwordCreate" className="">
                            <div>
                                <label htmlFor="">Password: </label>
                                <input type="password" name="password" id="password" required/>
                            </div>
                        </div>

                        <div id="conpassCreate" className="">
                            <div>
                                <label htmlFor="">Confirm your Password: </label>
                                <input type="password" name="conpass" id="conpass" required/>
                            </div>
                        </div>

                        <button type="submit">Create</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default CreateAccount;