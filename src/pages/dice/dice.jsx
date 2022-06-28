import Header from '../../components/header';
import Imput from '../../components/input';
import Button from  '../../components/button';



function Dice() {
  return (

    <>
      <Header />
      <h2 className="subtitle">Cadastro</h2>
      <h3>Dados Pessoais</h3>
      <Imput type="text" placeholder={'Nome e Sobrenome'} />
      <Imput type="number" placeholder={'Telefone'} />
      <Imput type="email" placeholder={'email@email.com'} />

      <h4>curso escolhido:</h4>
      <h4>alterar curso</h4>

      <h3>Endereço</h3>
      <Imput type="number" placeholder={'Cep'} />
      <Imput type="text" placeholder={'Rua'} />
      <Imput type="text" placeholder={'Bairro'} />
      <Imput type="text" placeholder={'Cidade'} />
      <Imput type="text" placeholder={'UF'} />



    <Button
    type="click" >Cadastre-se</Button>

    </>
  );
}

export default Dice;