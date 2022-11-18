import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/base_datos', {
});
moongose.connect('mongodb://localhost/usuarios', {
})
.then(()=> console.log("Conexion a MongoDB"))
.catch((error) => console.log("Error: " + error))
