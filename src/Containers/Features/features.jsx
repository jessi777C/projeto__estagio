import React from "react";
import "./features.css";
const PricingTable = () => {
  return (
    <div className="pricing-table" id="preco">
      <div className="pricing-plan">
        <h2>Plano Básico</h2>
        <p className="price">$10/mês</p>
        <ul>
          <li>Recursos básicos</li>
          <li>Suporte por e-mail</li>
        </ul>
        <button className="btn">Selecionar</button>
      </div>
      <div className="pricing-plan">
        <h2>Plano Padrão</h2>
        <p className="price">$20/mês</p>
        <ul>
          <li>Recursos avançados</li>
          <li>Suporte por e-mail e telefone</li>
        </ul>
        <button className="btn">Selecionar</button>
      </div>
      <div className="pricing-plan">
        <h2>Plano Premium</h2>
        <p className="price">$30/mês</p>
        <ul>
          <li>Todos os recursos</li>
          <li>Suporte 24/7</li>
        </ul>
        <button className="btn">Selecionar</button>
      </div>
    </div>
  );
};

export default PricingTable;
