const { Favorite } = require('../DB_connection');

const deleteFav = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(401).json({ message: 'Faltan datos' });
  }

  try {
    const favorites = await Favorite.findOne({
      where: { id },
    });

    if (favorites) {
      await favorites.destroy();
      const allFavorites = await Favorite.findAll();
      return res.json(allFavorites);
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = deleteFav;
