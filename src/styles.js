import styled from 'styled-components'

import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #1c1c1c 100%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const TotalList = styled.div`
   background: white;
   padding:30px 20px;
    border-radius: 5px;

    ul{
        padding: 0;
        margin-top: 60;
        
    }
    `

 export const Input = styled.input`
   border: 2px solid rgba(209, 211, 212, 0.4);
   border-radius: 5px;
   height: 40px;
   margin-top: 60px;
   width: 340px;
    margin-right: 40px;
    text-align: center;

`
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
  &:hover {opacity: 0.8; transition: 0.3s; }
 
    
    `
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
    
    li{
        list-style: none;
    }
    `

    export const Trash = styled(FcEmptyTrash)`
    cursor: pointer;
    `
    export const Check = styled(FcCheckmark)`
    cursor: pointer;
    `
    export const NoItens = styled.h3`
    background: #282856;
    color: red;
    `
   export const NoItemsMessage = styled.h3`
 color: #ff0000; 
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`

    