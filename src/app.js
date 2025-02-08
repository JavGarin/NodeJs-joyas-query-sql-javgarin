const express = require('express');
const joyasRoutes = require('./routes/joyasRoutes');
const reporMiddleware = require('./middlewares/reportMiddleware');

const app = express();
app.use(express.json());
app.use(reporMiddleware); 

app.use('/joyas', joyasRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});