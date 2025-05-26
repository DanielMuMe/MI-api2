// src/componentes/perfil.js
import { auth, signInWithEmailAndPassword } from '../firebase-config.js';

export const perfil = () => {
  const section = document.createElement('section');
  const user = auth.currentUser;

  if (user) {
    section.innerHTML = `
      <h2>Tu Perfil</h2>
      <p>Email: ${user.email}</p>
      <button id="btn-logout">Cerrar Sesión</button>
    `;

    section.querySelector('#btn-logout').addEventListener('click', () => {
      window.location.hash = '#/logout';
    });
  } else {
    section.innerHTML = `<p>No hay usuario autenticado.</p>`;
  }

  return section;
};