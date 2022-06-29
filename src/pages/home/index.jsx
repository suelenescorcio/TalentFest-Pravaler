import { useNavigate } from 'react-router-dom';
import InfoCard from '../../components/infoCards';
import Header from '../../components/header';
import Button from '../../components/button';
import { BiDownArrowAlt } from 'react-icons/bi';
import './style.css';

function Home() {
  const navigate = useNavigate();
  return (
    <main className='main-section'>
      <Header />
      <section className='about-section'>
      <InfoCard className='about orange'>
        <h1>Sobre o Pravaler</h1>
        <p>
          O PRAVALER é uma fintech de soluções financeiras que facilita o acesso
          à educação no Brasil. Somos para calouros e também pra veteranos! Vem
          com a gente!
        </p>
        <p>
          Mais que atender um mercado, no Pravaler a gente persegue um ideal:
          “Tornar a educação acessível para quem quer transformar a própria
          história, transformar sua comunidade, o seu país e o mundo”. Aqui,
          nosso sonho é tão grande quanto o seu, seja você aluno ou Instituição
          de Ensino.
        </p>
        <p>
          Nos esforçamos para entender os desafios de quem tem a educação como
          valor e sabe como ela pode transformar vidas. É pra essas pessoas que
          trabalhamos e ajudamos a construir caminhos para quem quer vencer. A
          gente acredita que a educação tem que ser pra todo mundo e não medimos
          esforços para que isso seja uma realidade!
        </p>
      </InfoCard>
      <InfoCard className='about yellow'>
        <h1>Como funciona</h1>
        <p>
          A contratação é semestral e você pode contratar a qualquer momento do
          seu curso. Cada semestre você paga, mais ou menos, em 1 ano. As
          parcelas do mês caem quase pela metade. E só começa a pagar a próxima
          contratação quando finalizar a anterior, ou seja, as parcelas nunca se
          acumulam com o PRAVALER! Se você financiar todos os semestres de um
          curso de 4 anos, você terá 8 anos para pagar aproximadamente.
        </p>
        <div className='about-brown'>ESCOLHA DO CURSO</div>
        <BiDownArrowAlt size={28}/>
        <div className='about-brown'>SIMULAÇÃO</div>
        <BiDownArrowAlt size={28}/>
        <div className='about-brown'>ENVIO DE CADASTRO</div>
      </InfoCard>
      <InfoCard className='about pink'>
        <h1>Comparar Cursos</h1>
        <p>
          Pensando na escolha dos cursos, criamos uma plataforma que possibilita
          ao aluno comparar cursos entre si.
        </p>
        <h2>Vantagens</h2>
        <p>É tudo <span>online</span></p>
        <p>Não tem limite de <span>vagas</span></p>
        <p>Opções de financiamento estudantil <span>sem juros</span></p>
        <p>Não precisa de <span>conta em banco</span></p>
        <p>Pode pedir a <span>qualquer momento do ano</span></p>
        <p>Financia o valor <span>total da mensalidade</span></p>
      </InfoCard>
      </section>
      <Button
        type='click'
        className='button-comparator'
        onClick={() => {
          navigate('/comparator');
        }}
      >
        Comparar os cursos
      </Button>
    </main>
  );
}

export default Home;
