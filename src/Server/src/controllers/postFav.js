const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;

  if (!name || !origin || !status || !image || !species || !gender) {
    return res.status(401).json({ message: 'Faltan datos' });
  }

  try {
    const [favorite, created] = await Favorite.findOrCreate({
      where: { name, origin, status, image, species, gender },
    });

    if (created) {
      return res.json(favorite);
    } else {
      return res.status(400).json({ message: 'El personaje ya existe' });
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = postFav;
