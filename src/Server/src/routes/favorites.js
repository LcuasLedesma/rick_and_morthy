const express = require('express');
const router = express.Router();

const {postFav, deleteFav} = require('../controllers/getFav');

router.post('/', postFav);
router.delete('/:id', deleteFav);

module.exports = router;