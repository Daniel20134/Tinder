import Cards from "../model/Cards.js";
// Get all hotels
export const getAllCards = async (req, res) => {
    try {
      const cards = await Cards.find({});
      res.status(200).json(cards);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const createNewCard = async (req, res) => {
    try {
      const card = await Cards.create(req.body);
      console.log(card);
      res.status(200).json(card);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const getSingleCard = async (req, res) => {
    try {
      const { id } = req.params;
      const card = await Cards.findById(id);
      if(!card) return res.status(404).json({message : "Card not found"})
      res.status(200).json(card);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  export const updateCard = async (req, res) => {
    try {
      const {id} = req.params
      const card = await Cards.findByIdAndUpdate(id ,req.body)
      if(!card) return res.status(404).json({message : "Card not found"})
       const updatedCard = await Cards.findById(id) 
      res.status(200).json(updatedCard)
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  
  export const deleteSingleCard = async (req, res) => {
      try {
        const { id } = req.params;
        const card = await Cards.findByIdAndDelete(id);
        res.status(200).json({message : "Card deleted succesfully"});
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };