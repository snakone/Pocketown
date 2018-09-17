const trainers = require('../models/trainer');  // Trainer Model = MongoDB Collection

const trainerCtrl = {};  // Create Object. We add Methods to it so We can use them OUTSIDE later

// req: Request - res: Response  // async - await // Wait for MongoDB

trainerCtrl.addTrainer = async (req, res) => {  // Add Trainer to MongoDB

        const trainer = new trainers(req.body);  // Get the html Body -> Trainer Object
        await trainer.save();  // Save on MongoDB
        res.json('Trainer Saved');
}

trainerCtrl.getTrainers = async (req, res) => {  // Get Trainer List

    const trainer = await trainers.find();  // Find Trainers in MongoDB
    res.json(trainer);  // Send Trainers to server as JSON
}

trainerCtrl.getTrainerbyID = async (req, res) => {  // Get Trainer by ID

      const filterTrainer = new RegExp(`^${req.params.id}`);  //  Template String ES6 Pattern
      const trainer = await trainers.find({ trainerID: filterTrainer});  // "/^MegaCharizardX/" Pattern
      res.json(trainer);  // Send Trainer to server as JSON
}

trainerCtrl.updateTrainer = async (req, res) => {  // Update Trainer

   const { id } = req.params;  // From req.params only need Trainer ID
   const trainer = req.body; // Trainer with updated INFO

   await trainers.findByIdAndUpdate(id, {$set: trainer},  // Find by ID and Update in MongoDB
                                     {new: true});  // New Trainer if ID not Match
     res.json({
       status: "Trainer Updated"
     });
}

trainerCtrl.deleteTrainer = async (req, res) => {  // Remove Trainer from MongoDB

  await trainers.findByIdAndRemove(req.params.id);  // Remove by ID
  res.json({
    status: "Trainer Deleted"
  });
}

trainerCtrl.updateStatus = async (req, res) => {  // Update Status Online

   const { id } = req.params;  // From req.params only need Trainer ID
   const status = req.body; // Status? Online or Offline

   await trainers.update({trainerID: id}, {$set: status},  // Find trainerID and Update in MongoDB
                                     {new: true});  // New Status if ID not Match
     res.json({
       status: "Status Updated"
     });
}


module.exports = trainerCtrl;  // Exports the Object with all the Methods
