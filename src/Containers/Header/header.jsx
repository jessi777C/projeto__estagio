import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Transforme Palavras em Ação.</h1>
      <p>
        Converta suas ideias em realidade instantaneamente - Experimente a magia
        da transformação de falas em ações com facilidade e precisão!
      </p>

      <div className="gpt3__header-content__input">
        <input
          type="email"
          placeholder="e-mail
"
        />
        <button type="button">Comece agora</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>pessoas solicitaram acesso a uma visita nas últimas 24 horas</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
