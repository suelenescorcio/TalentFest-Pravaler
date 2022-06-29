import { Link } from 'react-router-dom';
import Header from '../../components/header';
import Input from '../../components/input';
import Button from '../../components/button';
import '../home/style.css';
import './style.css';

function Dice() {
  return (
    <main className="main-section">
      <Header className="logo-dice" />
      <h1 className="subtitle">Cadastro</h1>
      <h3 className="subtitle course-name">Dados Pessoais</h3>
      <Input
        className="input-form"
        type="text"
        placeholder={'Nome e Sobrenome'}
      />
      <Input
        className="input-form"
        type="number"
        placeholder={'Telefone - (12) 34567-8910'}
      />
      <Input
        className="input-form"
        type="email"
        placeholder={'email@email.com'}
      />

      <h4 className="course-name">curso escolhido:</h4>
      <Link className="subtitle course-name course-link" to="/comparator">
        alterar curso
      </Link>

      <h3 className="subtitle course-name">Endereço</h3>
      <Input className="input-form" type="text" placeholder={'Rua'} />
      <Input className="input-form" type="text" placeholder={'Bairro'} />
      <div className="city-uf">
        <Input className="input-form" type="text" placeholder={'Cidade'} />
        <Input
          className="input-form uf"
          type="text"
          placeholder={'UF'}
          maxLength="2"
        />
      </div>

      <Button type="submit" className="button-comparator button-registration">
        Cadastre-se
      </Button>
    </main>
  );
}

export default Dice;
