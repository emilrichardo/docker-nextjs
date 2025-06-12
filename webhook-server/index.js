const express = require('express');
const { exec } = require('child_process');

const app = express();
app.use(express.json());

app.post('/deploy', (req, res) => {
  console.log("[WEBHOOK] Push recibido, desplegando...");

  exec('/projects/keys/deploy.sh', (err, stdout, stderr) => {
    if (err) {
      console.error('[ERROR deploy.sh]', err);
      return res.status(500).send("Error ejecutando deploy");
    }
    console.error('[STDERR deploy.sh]', stderr);
    console.log('[STDOUT deploy.sh]', stdout);
    return res.status(200).send("Deploy ejecutado");
  });
});

app.listen(4000, '0.0.0.0', () => {
  console.log("Webhook escuchando en 0.0.0.0:4000");
});
