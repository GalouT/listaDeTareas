const fecha = document.getElementById('fecha');
const input = document.querySelector('input');
const botonAgregar = document.querySelector('#botonAgregar');
const ul = document.querySelector('ul');
const sinTareas = document.querySelector('.sinTareas');

const FECHA = new Date();
fecha.innerHTML = FECHA.toLocaleDateString('es', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

botonAgregar.addEventListener('click', (e) => {
  e.preventDefault();

  if (input.value === '') {
    return;
  }

  const texto = input.value;
  // aca lo que hice fue agregar mas estilos al elemento p median js
  // para que al escribir mucho no se desborde el contenedor
  const li = document.createElement('li');
  const p = document.createElement('p');
  p.style.height = 'auto';
  p.style.wordBreak = 'break-all';
  p.style.marginRight = '10px';

  p.textContent = texto;

  li.appendChild(p);
  li.appendChild(addDeleteBtn());
  ul.appendChild(li);

  input.value = '';

  sinTareas.style.display = 'none';
});

function addDeleteBtn() {
  const botonBorrar = document.createElement('button');

  botonBorrar.textContent = '-';

  botonBorrar.addEventListener('click', (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll('li');
    if (items.length === 0) {
      sinTareas.style.display = 'block';
    }
  });

  return botonBorrar;
}
