
function ConfirmModal({ isOpen, onCancel, onConfirm, isDeleting}) {
    if(!isOpen) return null;

    return(
        <div id="mainDiv" className="bg-neutral-800/70 h-screen w-screen flex items-center justify-center">
            <div id="confirmWindow" className="w-min-96 h-min-64 w-120 aspect-square bg-neutral-300 flex items-center justify-center flex-col">
                <h3>Excluir Tarefa</h3>
                <p>Tem certeza que deseja excluir essa tarefa?</p>

                <div>
                    <button onClick={onCancel} disabled={isDeleting}>
                        Manter
                    </button>
                    <button onClick={onConfirm} disabled={isDeleting}>
                        {isDeleting ? 'Excluindo...' : 'Sim, excluir'}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal