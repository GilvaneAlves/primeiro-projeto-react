import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { NoItemsMessage } from './styles';

import { Container, TotalList, Input, Button, ListItem, Trash, Check } from './styles';


function App() {
  const [list, setList] = useState([])
  const [task, setTask] = useState('')


  function inputMudou(event) {
    setTask(event.target.value)

  }

  function cliqueiNoBotao() {
    if (task) {
      setList([...list, { id: uuid(), task, finished: false }])
    }


  }
  function finalizarTarefa(id) {

    const newList = list.map(item => (item.id === id ? { ...item, finished: true } : item

    ))

    setList(newList)
  }
  function deletarItem(id) {
    const newList = list.filter((item) => item.id !== id)
    setList(newList)
  }

  return (
    <Container>
      <TotalList>
        <Input onChange={inputMudou} placeholder="o que tenho que fazer hoje?" />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {
            list.length > 0 ? (
              list.map(item => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <Check onClick={() => finalizarTarefa(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => deletarItem(item.id)} />
                </ListItem>
              ))
            ) : (<NoItemsMessage>Não há itens na lista</NoItemsMessage>)
          }

        </ul>
      </TotalList>
    </Container>
  )
}

export default App
