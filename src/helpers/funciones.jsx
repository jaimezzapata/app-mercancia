// helpers/funciones.js
import Swal from "sweetalert2";

export function alertRedireccion(redireccion, ruta = '/home', mensaje = 'Redireccionando...') {
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
      redireccion(ruta);
    }
  });
}
