const FlashCardService = require('../../services/courses/flashCardService');

exports.getAllFlashCards = async (req, res) => {
  try {
    const flashCards = await FlashCardService.getAllFlashCards();
    res.json(flashCards);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getFlashCardById = async (req, res) => {
  const flashCardId = req.params.id;
  try {
    const flashCard = await FlashCardService.getFlashCardById(flashCardId);
    if (flashCard) {
      res.json(flashCard);
    } else {
      res.status(404).json({ error: 'FlashCard not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createFlashCard = async (req, res) => {
  const { flashcard_id, image, letra, module_id, quizztype_id, created_at, updated_at } = req.body;
  try {
    const newFlashCard = await FlashCardService.createFlashCard({ flashcard_id, image, letra, module_id, quizztype_id, created_at, updated_at });
    res.json(newFlashCard);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateFlashCard = async (req, res) => {
  const flashCardId = req.params.id;
  const { flashcard_id, image, letra, module_id, quizztype_id, created_at, updated_at } = req.body;
  try {
    const updatedFlashCard = await FlashCardService.updateFlashCard(flashCardId, { flashcard_id, image, letra, module_id, quizztype_id, created_at, updated_at });
    if (updatedFlashCard) {
      res.json(updatedFlashCard);
    } else {
      res.status(404).json({ error: 'FlashCard not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};



exports.getFlashCardsByModuleId = async (req, res) => {
  const moduleId = req.params.moduleId;
  try {
    const flashCards = await FlashCardService.getFlashCardsByModuleId(moduleId);
    res.json(flashCards);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
