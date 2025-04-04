import Swal from "sweetalert2";
import { v4 } from "uuid";
export function alertRedireccion(redireccion, path, mensaje) {
  let timerInterval;
  Swal.fire({
    title: mensaje,
    html: "La página cambiará en <b></b> milisegundos.",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
      redireccion(path);
    }
  });
}
export function alertaError(titulo, mensaje, icono) {
  Swal.fire({
    title: titulo,
    text: mensaje,
    icon: icono,
    draggable: true
  });
}

export function generaId() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const length = Math.floor(Math.random() * (11 - 8)) + 8;
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
