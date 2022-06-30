import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { useState } from 'react';
import Header from '../../components/header';
import Input from '../../components/input';
import Button from '../../components/button';
import '../home/style.css';
import './style.css';
import Message from '../../components/message';

function Dice() {
let courseSelected = localStorage.getItem('Name');

const navigate = useNavigate();
const handleNavigate = () =>{
localStorage.removeItem('Name');
navigate('/comparator');
};

const [message, setMessage] = useState('');
const [value, setValue] = useState('');

  function checkFields(){
    if(value !== ''){
      setMessage('Cadastro realizado com sucesso!');
    }else{
      setMessage('Por favor, preencha todos os campos');
    }
    setValue();
  }

  return (
    <main className="main-section">
      <Header className="logo-dice" />
      <FaArrowLeft size="30" color="#FF6312" cursor='pointer' className='icons' onClick={() => {
                navigate('/comparator');
              }} />
      <h1 className="subtitle">Cadastro</h1>
      <h3 className="subtitle course-name">Dados Pessoais</h3>
      <Input
        className="input-form"
        type="text"
        placeholder={'Nome Sobrenome'}
        value={value}/>
      <Input
        className="input-form"
        type="number"
        placeholder={'Telefone - (12) 34567-8910'}
        value={value}/>
      <Input
        className="input-form"
        type="email"
        placeholder={'email@email.com'}
        value={value}/>

      <h4 className="course-name"><span className="course-name-bold" >Curso escolhido: </span>{courseSelected}</h4>
      <Button className="subtitle course-name course-link" onClick={handleNavigate}>
        alterar curso
      </Button>

      <h3 className="subtitle course-name">Endereço</h3>
      <Input className="input-form" type="text" placeholder={'Rua'} value={value}/>
      <Input className="input-form" type="text" placeholder={'Bairro'} value={value}/>
      <div className="city-uf">
        <Input className="input-form" type="text" placeholder={'Cidade'} value={value}/>
        <Input
          className="input-form uf"
          type="text"
          placeholder={'UF'}
          maxLength="2"
          value={value}/>
      </div>
      <Message text={message} className='message-register'/>
      <Button type="submit" className="button-comparator button-registration"
      onClick={checkFields}
        >
        Cadastre-se
      </Button>
    </main>
  );
}

export default Dice;
