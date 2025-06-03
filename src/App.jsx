// Importa hooks e componentes necessários
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { NoItemsMessage } from './styles';
import { Container, TotalList, Input, Button, ListItem, Trash, Check } from './styles';

function App() {
  // Declara estados para lista de tarefas e valor do input
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');

  // Atualiza o estado 'task' conforme o usuário digita
  function inputMudou(event) {
    setTask(event.target.value);
  }

  // Adiciona uma nova tarefa à lista
  function cliqueiNoBotao() {
    if (task.trim()) {
      setList([...list, { id: uuid(), task: task.trim(), finished: false }]);
      setTask('');
    }
  }

  // Marca uma tarefa como finalizada
  function finalizarTarefa(id) {
    const newList = list.map(item =>
      item.id === id ? { ...item, finished: true } : item
    );
    setList(newList);
  }

  // Deleta uma tarefa da lista
  function deletarItem(id) {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  }

  return (
    <Container>
      <TotalList>
        <Input
          value={task}
          onChange={inputMudou}
          placeholder="O que tenho que fazer hoje?"
        />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {list.length > 0 ? (
            list.map(item => (
              <ListItem isFinished={item.finished} key={item.id}>
                <Check onClick={() => finalizarTarefa(item.id)} />
                <li>{item.task}</li>
                <Trash onClick={() => deletarItem(item.id)} />
              </ListItem>
            ))
          ) : (
            <NoItemsMessage>Não há itens na lista</NoItemsMessage>
          )}
        </ul>
      </TotalList>
    </Container>
  );
}

export default App;
