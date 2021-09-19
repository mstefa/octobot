const { Router } = require('express');
const ghwebhooks = require('./ghwebhooks.js');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/gh', ghwebhooks);

router.get('/ping', async function(req, res) {
  const info = {
    response: 'pong',
    status: 'ok',
  };
  try {
    res.json(info);
  }
  catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
