import http from "http"
import fs from "fs/promises"
import path from "path"

//IMPORTANTEEEEEE
//Cmabie el puerto debido a que en la pt1 ya estaba usando el puerto 3000 y no se podia correr ambos al mismo tiempo
const PORT = 3004

const server = http.createServer(async (req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Servidor activo")
    return
  }


  if (req.url === "/info") {
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify({
      mensaje: "Holaa! Probando me escuchan?Comando estelar",
      curso: "Sistemas y Tecnologías Web",
      tecnologia: "Node.js"
    }))
    return
  }
  
  if (req.url === "/saludo") {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end("Hola, bienvenidos a Sunnyside soy Lotso!") //aprovechando que estaba viendo toy story XD
    return
  }


  if (req.url === "/api/status") {
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify({
      ok: true,
      status: "Todo funcionando correctamente",
      puerto: PORT
    }))
    return


  }
  if (req.url === "/api/student") {
    const filePath = path.join(process.cwd(), "datos.json")
    const texto = await fs.readFile(filePath, "utf-8")
    const datos = JSON.parse(texto)
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(datos))
    return
  }


  res.writeHead(404, { "Content-Type": "text/plain" })
  res.end(`La ruta ${req.url} no fue encontrada`)
})


server.listen(PORT, () => {
  console.log("Servidor corriendo en http://localhost:3004")
})