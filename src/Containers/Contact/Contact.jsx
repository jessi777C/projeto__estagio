import React, { useState } from "react";
import "./Contact.css";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!consent) {
      alert(
        "Você precisa concordar com a política de privacidade para enviar o formulário."
      );
      return;
    }
    // Aqui você pode adicionar lógica para enviar o formulário para o backend
    setSubmitted(true);
  };

  return (
    <div className="contact-form" id="contact">
      {submitted ? (
        <p>O formulário foi enviado com sucesso!</p>
      ) : (
        <form className="form_header" onSubmit={handleSubmit}>
          <label className="label-text">
            Nome:
            <input
              className="input-field"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="label-text">
            E-mail:
            <input
              className="input-field"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="label-text">
            Telefone:
            <input
              className="input-field"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label className="label-text">
            País:
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Selecione o país</option>
              <option value="BR">Brasil</option>
              <option value="US">Estados Unidos</option>
              {/* Adicione outros países conforme necessário */}
            </select>
          </label>
          <label className="label-text">
            Mensagem:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <label className="label-text">
            <input
              className="input-field"
              type="checkbox"
              checked={consent}
              onChange={() => setConsent(!consent)}
            />
            Eu concordo com a política de privacidade.
          </label>

          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
