import React from 'react';

export default function Login() {
    function handleSubmit(event) {
        event.preventDefault();
      }
    return (
        <>
        <p>BEM VINDO AO JOGO</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input type="email" id="email" placeholder="Digite seu e-mail" />

          <button className="btn" type="submit">Entrar</button>
        </form>  
        </>
    );
}