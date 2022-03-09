// Directories
const swarmController = require('../controller/swarmController');

module.exports = function (app, express) {

  const router = express.Router();


  /***************
   * GET Routes *
   ***************/

  // Views

  // DTC Scribbles Page (testing purposes)
  router.get('/api/swarm', swarmController.swarmServer)

  // Functions


  /***************
   * POST Routes *
   ***************/



  app.use('/', router);

}