import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://tommo.ricmais.com.br/wp-content/uploads/2020/07/Hideo-Kojima.jpg" alt="Hideo Kojima" />
        <div>
          <strong>Hideo Kojima</strong>
          <span>Design de Jogos</span>
        </div>
      </header>
      <p>Hideo Kojima (小島 秀夫) é um designer japonês de jogos eletrônicos e diretor-executivo da  Kojima Productions.
        <br /><br />
        Constantemente reconhecido por fãs e especialistas da indústria de videogame como um dos mais influentes e inovadores diretores e roteiristas de jogos eletrônicos de todos os tempos. 
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 2.500,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;