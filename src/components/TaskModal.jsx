import { useState, useEffect } from "react";

function TaskModal({
    isOpen,
    onClose,
    onSave,
    editingTask,
    daysList,
    isSaving,
}) {

    const [title, setTitle] = useState('');
    const [selectedDays, setSelectedDays] = useState([]);
    const [validationError, setValidationError] = useState('');
    
    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title);
            setSelectedDays(editingTask.days || [])
        } else {
            setTitle('');
            setSelectedDays([]);
        }
    })

    if(!isOpen) return null;

    function handleToggleDay (dayId){
        if (selectedDays.includes(dayId)) {
            setSelectedDays(selectedDays.filter((id) => id !== dayId));
        } else {
            setSelectedDays([...selectedDays, dayId]);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        if(!title.trim()) {
            setValidationError('O título não pode estar vazio');
        }

        if(selectedDays.length === 0) {
            setValidationError('Selecione pelo menos um dia da semana')
        }

        onSave({
            title: title.trim(),
            days: selectedDays,
        });
    }

    return (
        <div id="mainDiv" className="bg-neutral-800/70 h-screen w-screen flex items-center justify-center">
            <div id="taskWindow" className="w-min-96 h-min-64 w-120 aspect-square bg-neutral-300 flex items-center justify-center flex-col">
                <h3>{editingTask ? 'Editar Tarefa' : 'Criar Tarefa'}</h3>
                {validationError && <p className="text-red-600">{validationError}</p>}

                <form onSubmit={handleSubmit}>
                    <div id="taskTitle">
                        <label htmlFor="taskTitle">O que precisa ser feito?</label>
                        <input 
                        type="text"
                        value={title}
                        id="taskTitle" 
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Ex: Treino de perna, Estudar, Fazer lista de compra..."
                        />
                    </div>

                    <div id="chooseDays">
                        <p>Dias da semana:</p>
                        <div id="daysList">
                            {daysList.map((day) => {
                                const isSelected =selectedDays.includes(day.id);
                                return (
                                    <button
                                    key={day.id}
                                    type="button"
                                    onClick={() => handleToggleDay(day.id)}

                                    className={`${isSelected ? 'text-green-500 font-bold' : 'text-red-500 font-bold'}`}
                                    >
                                        {day.label}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    
                    <div id="confirmButtons">
                        <button type="button" disabled={isSaving} onClick={onClose}>
                            Cancelar
                        </button>

                        <button>
                            {isSaving ? 'Salvando...' : editingTask ? 'Salvar Alterações' : 'Criar Tarefa'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default TaskModal