document.getElementById('userForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();

  fetch('https://default1c0051dd45964b1a9849d060735057.69.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/4e4dce2290cf4fb38568e3681139f7f9/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=iSotLrXkwNwKB4uwabWRd8RQJIYHg433QTGayfe6B98', {
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

