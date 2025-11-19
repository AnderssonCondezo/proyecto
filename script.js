document.getElementById('userForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Obtener los valores de los campos
  const nombre = document.getElementById('nombre').value.trim();
  const apellido = document.getElementById('apellido').value.trim();

  // Comprobar si los campos no están vacíos
  if (!nombre || !apellido) {
    document.getElementById('respuesta').textContent = 'Por favor, complete ambos campos. ❌';
    return;
  }

  // Crear el cuerpo de la solicitud
  const requestBody = {
    nombre: nombre,
    apellido: apellido
  };

  // URL de la API (podrías poner esto en una variable o archivo de configuración)
  const apiUrl = 'https://default1c0051dd45964b1a9849d060735057.69.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/4e4dce2290cf4fb38568e3681139f7f9/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=iSotLrXkwNwKB4uwabWRd8RQJIYHg433QTGayfe6B98';

  // Realizar la solicitud fetch
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
  .then(response => {
    // Verificar si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor');
    }
    return response.json();
  })
  .then(data => {
    document.getElementById('respuesta').textContent = 'Datos enviados correctamente ✔️';
    console.log('Respuesta del servidor:', data);

    // Limpiar los campos
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
  })
  .catch(error => {
    document.getElementById('respuesta').textContent = 'Ocurrió un error ❌';
    console.error('Error:', error);
  });
});

