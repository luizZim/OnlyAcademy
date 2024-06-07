const express = require('express');
const bodyParser = require('body-parser');
const mercadopago = require('mercadopago');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


mercadopago.configure({
  publicKey: 'TEST-7f9fc16f-c6e2-4e6e-a7c0-4eb963911145',
  access_token: 'TEST-1413699680451685-060419-0b469eb7657c1620cbce0db872d33d08-314220097' 
});

app.post('/plano', async (req, res) => {
  const { title, unit_price, quantity } = req.body;
  const preference = {
    items: [
      {
        title,
        unit_price,
        quantity,
      },
    ],
  };

  try {
    const response = await mercadopago.preferences.create(preference);
    res.json({ init_point: response.body.init_point });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
