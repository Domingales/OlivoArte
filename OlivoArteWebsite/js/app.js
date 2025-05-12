function handleFormSubmission(event) {
  event.preventDefault();

  const notification = document.getElementById('notification');
  notification.classList.remove('hidden');

  setTimeout(() => {
    notification.classList.add('hidden');
  }, 5000);

  // Abrir cliente de correo con los datos (simulación)
  const form = event.target;
  const mensaje = form.mensaje.value;
  window.location.href = `mailto:info@olivoarte.es?subject=Consulta personalizada&body=${encodeURIComponent(mensaje)}`;

  return false;
}
