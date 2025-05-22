// src/componentes/logout.js
import { auth, signOut } from '../../firebase-config.js';

export const logout = () => {
  const section = document.createElement('section');
  section.innerHTML = `<p>Cerrando sesión...</p>`;

  signOut(auth).then(() => {
    setTimeout(() => window.location.hash = '#/', 1000);
  }).catch((error) => {
    section.innerHTML = `<p>Error al cerrar sesión: ${error.message}</p>`;
  });

  return section;
};