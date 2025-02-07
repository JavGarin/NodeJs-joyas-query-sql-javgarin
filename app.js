const express = require('express');
const joyasRoutes = require('./routes/joyasRoutes');
const reporMiddleware = require('./middleware/reportMiddleware');

const app = express();
app.use(express.json());
app.use(reportMiddleware);

app.use('/joyas', joyasRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});