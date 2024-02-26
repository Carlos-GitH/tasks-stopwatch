import {useState} from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './app.module.scss';
import Stopwatch from '../components/Stopwatch';
import { Itarefa } from '../types/ITarefa';

function App() {
  const [tarefas, setTarefas] = useState<Itarefa[] | []>([])
  const [selecionado, setSelecionado] = useState<Itarefa>();

  function selecionaTarefa(tarefaSelecionada: Itarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAntigas => tarefasAntigas.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
      if(tarefa.id === selecionado.id) {
        return {
          ...tarefa,
          selecionado: false,
          completado: true
        }
      }
      return tarefa
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
       <Form setTarefas={setTarefas}/>
       <List 
          tarefas = {tarefas} 
          selecionaTarefa={selecionaTarefa}
        />
       <Stopwatch  selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}
        />
    </div>
  )
}

export default App
