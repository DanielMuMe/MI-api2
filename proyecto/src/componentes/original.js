// src/componentes/original.js
export const original = () => {
  const section = document.createElement('section');
  section.innerHTML = `
    <h2>Combinador de Nombres</h2>
    <input type="text" id="nombre1" placeholder="Primer nombre">
    <input type="text" id="nombre2" placeholder="Segundo nombre">
    <button id="generar">Generar combinación</button>
    <p id="resultado"></p>
  `;

  section.querySelector('#generar').addEventListener('click', async () => {
    const n1 = section.querySelector('#nombre1').value.trim();
    const n2 = section.querySelector('#nombre2').value.trim();

    if (!n1 || !n2) {
      section.querySelector('#resultado').textContent = 'Por favor ingresa ambos nombres.';
      return;
    }

    try {
      const res = await fetch('https://randomapi.com/api/6n5d5z?key=KEY_DE_RANDOMAPI ');
      const data = await res.json();

      const randomName = data.results[0].name.first;
      const combinado = `${n1}${n2} ${randomName}`;
      section.querySelector('#resultado').textContent = 'Nombre combinado: ' + combinado;
    } catch (error) {
      console.error('Error al llamar a la API:', error);
      section.querySelector('#resultado').textContent = 'Hubo un error al obtener datos.';
    }
  });

  return section;
};