export const generarId = () => {
    const randomString = Math.random().toString(36).substr(2, 10);
    const fecha = Date.now().toString(36)
  
    return randomString + fecha
  }
  