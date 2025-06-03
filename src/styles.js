// Importa styled-components e ícones
import styled from 'styled-components';
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

// Container principal com fundo gradiente e centralização
export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #1c1c1c 100%);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Área que contém a lista de tarefas
export const TotalList = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 5px;

  ul {
    padding: 0;
    margin-top: 60px;
  }
`;

// Campo de entrada para novas tarefas
export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  height: 40px;
  margin-top: 60px;
  width: 340px;
  margin-right: 40px;
  text-align: center;
`;

// Botão para adicionar tarefas
export const Button = styled.button`
  background: #8052ec;
  border-radius: 5px;
  font-weight: 900;
  font-size: 17px;
  height: 40px;
  border: none;
  color: white;
  width: 130px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: 0.3s;
  }
`;

// Item da lista, com cor de fundo variável conforme finalização
export const ListItem = styled.div`
  background: ${props => props.isFinished ? '#d9f7be' : '#e4e4e4'};
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 10px;
  width: 500px;

  li {
    list-style: none;
  }
`;

// Ícone de lixeira para deletar tarefa
export const Trash = styled(FcEmptyTrash)`
  cursor: pointer;
`;

// Ícone de check para marcar tarefa como finalizada
export const Check = styled(FcCheckmark)`
  cursor: pointer;
`;

// Mensagem exibida quando não há itens na lista
export const NoItemsMessage = styled.h3`
  color:rgb(74, 15, 82);
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;
