function Header(){
  return(
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>Fundamentos do React - João Ferreira</h1>
        <p>
          Conceitos fundamentais do React de que você precisará para praticamente qualquer aplicativo que for criar!
        </p>
      </header>
  );
}

function Aluno(props) {
  return(
    <div>
      <h2>{props.nome}</h2>
      <p>Curso: {props.curso}</p>
    </div>
  );
}

function CoreConcept(){
  return(
    <li>
      <h3>Componentes</h3>
      <p>Blocos fundamentais de uma interface. </p>
    </li>
  );
}

function CoreConcept2(props) {
  return (
    <li>
      <h1>Título: {props.title}</h1>
      <h2>Descrição: {props.description}</h2>
      <img src={props.image} />
    </li>
);
}

import componentImg from './assets/components.png'
import configImg from './assets/config.png'

const Alunos = [
  {nome: "Joao", idade: 11},
  {nome: "Maria", idade: 12},
  {nome: "Pedro", idade: 11},
  {nome: "Ana", idade: 14},
];

for(let i=0;i< Alunos.length; i++){
  console.log("Nome: ",Alunos[i].nome);
  console.log("Idade: ",Alunos[i].idade);
}

//console.log(Alunos[0].nome);
//console.log(Alunos[0].idade);
//console.log(Alunos[1].nome);
//console.log(Alunos[1].idade);

import { CORE_CONCEPTS } from './data.js'


function CoreConcept3(title, description, image){
  return(
    <li>
      <h3>(title)</h3>
      <p>(description)</p>
      <img src= {image} />
    </li>
  )
}

const alunos2=['Ana', 'Bruno', 'Carla'];

function App() {
  return (
    <>
      <section>
        <ul>
          {alunos2.map((aluno) => <li key={aluno}>{aluno}</li>)}
        </ul>
      </section>

      <section id="core-concepts">
        <h2>Substituir 4 chamadas por map()</h2>
        <ul>
          {CORE_CONCEPTS.map((concept) => (
            <CoreConcept
              key={concept.title}
              title={concept.title}
              description={concept.description}
              image={concept.image}
            />
          ))}
        </ul>
      </section>
    </>
  );
}


export default App;