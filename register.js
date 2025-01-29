document.getElementById('register-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('reg-username').value;
  const password = document.getElementById('reg-password').value;
  const confirmPassword = document.getElementById('reg-confirm-password').value;
  const message = document.getElementById('register-message');

  if (password !== confirmPassword) {
    message.textContent = 'Las contraseñas no coinciden.';
    return;
  }

  try {
    const response = await fetch('https://loginfastapi20.onrender.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre_usuario: username,
        contrasena: password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      message.style.color = 'green';
      message.textContent = 'Usuario registrado exitosamente.';
    } else {
      message.style.color = 'red';
      message.textContent = data.detail;
    }
  } catch (error) {
    console.error('Error:', error);2
    message.textContent = 'Error de conexión.';
  }
});