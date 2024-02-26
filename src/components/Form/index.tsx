import React, { useState } from 'react';
import Button from '../Button';
import style from './Form.module.scss';
import { Itarefa } from '../../types/ITarefa';
import {v4 as uuidv4} from 'uuid';

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<Itarefa[]>>
}

function Form({setTarefas}: Props) {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00");
    function adicionarTarefa(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setTarefas(tarefasAntigas => 
            [
            ...tarefasAntigas, 
            { tarefa,
              tempo, 
                selecionado: false, 
                completado: false, 
                id: uuidv4() 
            }])
            setTarefa("");
            setTempo("00:00");
    }
    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="task" >
                        Adicione uma nova tarefa.
                    </label>
                    <input
                        type="text"   
                        name="task"
                        id="task" 
                        value={tarefa}
                        onChange={e => setTarefa(e.target.value)}
                        placeholder='O que vai ser feito?'
                        required
                    />
                </div>
                <div className={style.inputContainer}>
                    <label htmlFor="time" >
                        Time
                    </label>
                    <input
                        type="time"
                        name="time"
                        value={tempo}
                        onChange={e => setTempo(e.target.value)}
                        id="time"
                        step="1"
                        min="00:00:00"
                        max="01:30:00"
                        required
                    />
                </div>
                <Button type="submit">
                    Adicionar
                </Button>
            </form>
    )
}

export default Form;