document.getElementById('userForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nombre: nombre,
      apellido: apellido
    })
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('respuesta').textContent = 'Datos enviados correctamente ✔️';
    console.log('Respuesta del servidor:', data);
  })
  .catch(error => {
    document.getElementById('respuesta').textContent = 'Ocurrió un error ❌';
    console.error('Error:', error);
  });
});
