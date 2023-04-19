
// validation.js

export function validateEmail(email) {
  const errors = {};

  if (!email) {
    errors.email = "El correo electrónico es requerido.";
  } else if (email.length > 35) {
    errors.email = "El correo electrónico no puede tener más de 35 caracteres.";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "El correo electrónico no es válido.";
  }

  return errors;
}

// validation.js

export function validatePassword(password) {
  const errors = {};

  if (!password) {
    errors.password = "La contraseña es requerida.";
  } else if (password.length < 6 || password.length > 10) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres.";
  } else if (!/\d/.test(password)) {
    errors.password = "La contraseña debe contener al menos un número.";
  }

  return errors;
}
