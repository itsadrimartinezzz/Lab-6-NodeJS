import http from "http"
import fs from "fs/promises"
import path from "path"

const PORT = 3000

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Servidor activo")
    return
  }

//Primer error encontrado se cinfundio un - por un / en content-type
  if (req.url === "/info") {
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end("Ruta de información")
    return
  }
// Segundo error encontrado falta el await para leer el archivo
// Tercer  error encontrado no se estaba transformando el texto a JSON
  if (req.url === "/api/student") {
    const filePath = path.join(process.cwd(), "datos.json")
    const texto = await fs.readFile(filePath, "utf-8")
    const datos = JSON.parse(texto)
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(datos))
    return
  }

//Cuarto error encontrado se estaba usando el codigo incorrecto
// Quinto error encontrado se estaba cerrando mal se habia olvidado el ) para cerrar el callback
  res.writeHead(404, { "Content-Type": "text/plain" })
  res.end("Ruta no encontrada")
})

// Sexto error encontrado se estaba cerrando mal se habia olvidado el ) para cerrar el callback
server.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:3000")
})