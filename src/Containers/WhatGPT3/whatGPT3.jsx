import React from "react";
import Feature from "../../Components/feature/feature";
import "./whatGPT3.css";

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature
        title="CHECKSPEECH AI"
        text="Imagine um aplicativo de conversão de fala que transforma a maneira como você interage com o seu dispositivo, oferecendo uma experiência de usuário excepcional. Com uma interface intuitiva e fácil de usar, esse aplicativo permite que você transforme rapidamente suas palavras em texto e vice-versa, simplificando sua comunicação e aumentando sua produtividade."
      />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">
        As possibilidades estão além da sua imaginação.
      </h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature
        title="Chatbots"
        text="Eficiência Notável: Ganhe tempo ao converter instantaneamente suas palavras em ações, tornando a comunicação mais ágil e produtiva."
      />
      <Feature
        title="Knowledgebase"
        text="Precisão Inigualável: Experimente a conversão de falas com uma precisão impressionante, garantindo que suas mensagens sejam interpretadas com perfeição."
      />
      <Feature
        title="Education"
        text="Versatilidade Ilimitada: Desde transcrições rápidas até comandos complexos, nosso aplicativo oferece uma ampla gama de funcionalidades para atender a todas as suas necessidades de conversão de fala

        "
      />
    </div>
  </div>
);

export default WhatGPT3;
