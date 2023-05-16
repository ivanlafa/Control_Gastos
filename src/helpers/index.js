export const generarId = () => {
    const randomString = Math.random().toString(36).substr(2, 10);
    const fecha = Date.now().toString(36)
  
    return randomString + fecha
  }


//  export const handleEliminar = () => {
//     Swal.fire({
//       title: "Estás seguro de eliminar?",
//       text: "No puedes revertir esta acción!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Si, eliminalo!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         eliminarPaciente(id); //llamar el prop y enviar el id
//         Swal.fire("Eliminado!", "Tu cita se ha eliminado.", "success");
//       }
//     });
//   };


export const formatearFecha = fecha => {
  const fechaNueva = new Date(fecha);
  const opciones = {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }

  return fechaNueva.toLocaleDateString('es-ES',opciones)
}