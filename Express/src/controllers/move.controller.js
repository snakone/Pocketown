const moves = require('../models/move');  // Move Model = MongoDB Collection

const moveCtrl = {};  // Create Object. We add Methods to it so We can use them OUTSIDE later

// req: Request - res: Response  // async - await // Wait for MongoDB

moveCtrl.addMove = async (req, res) => {  // Add Move to MongoDB

  const move = new moves(req.body);  // Get the html Body -> Move Object
  await move.save();  // Save on MongoDB
  res.json('Move Guardado');
}

moveCtrl.getMove = async (req, res) => {  // Get ALL Move

    const move = await moves.find() // Find Move in MongoDB
     .sort({ pokedex: + 1 });  // Sort Move by Pokedex DESC
    res.json(move);  // Send Move to server as JSON
}

moveCtrl.getMovebyId = async (req, res) => {  // Get Move by ID

    const move = await moves.findById(req.params.id);  // Find by ID
    res.json(move);  // Send Move to server as JSON
}

moveCtrl.updateMove = async (req, res) => {  // Update Move

   const { id } = req.params;  // From req.params only need ID
   const move = req.body; // Move with updated INFO

   await moves.findByIdAndUpdate(id, {$set: move},  // Find by ID and Update in MongoDB
                                     {new: true});  // New Move if ID not Match
     res.json({
       status: "Move actualizado"
     });
}

moveCtrl.deleteMove = async (req, res) => {  // Remove Move from MongoDB

  await moves.findByIdAndRemove(req.params.id);  // Remove by ID
  res.json({
    status: "Move Eliminado"
  });
}

module.exports = moveCtrl;  // Exports the Object with all the Methods
