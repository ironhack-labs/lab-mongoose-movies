const router = express.Router();
const Celebrity = require("../modelsCelebrity")


router.get('/', (req, res, next) => {
    Celebrity.find().exec((err, drones) => {
        res.render('celebrities/index', {
            celebrities: celebrities
        });
    });
});
