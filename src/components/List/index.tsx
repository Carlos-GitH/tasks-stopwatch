import style  from './List.module.scss';
import Item from './Item';
import { Itarefa } from '../../types/ITarefa';

interface Props {
    tarefas: Itarefa[],
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

function List({ tarefas, selecionaTarefa }: Props ) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Tarefas do dia</h2>
            <ul>
                {tarefas.map(tarefa => (
                    <Item 
                        selecionaTarefa = {selecionaTarefa}
                        key={tarefa.id}
                        tarefa={tarefa.tarefa}
                        tempo={tarefa.tempo}
                        selecionado={tarefa.selecionado}
                        completado={tarefa.completado}
                        id={tarefa.id}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;