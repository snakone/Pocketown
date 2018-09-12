const trainers = require('../models/trainer');  // Pokemon Model = MongoDB Collection

const trainerCtrl = {};  // Create Object. We add Methods to it so We can use them OUTSIDE later

// req: Request - res: Response  // async - await // Wait for MongoDB

trainerCtrl.addTrainer = async (req, res) => {  // Add Trainer to MongoDB

        const trainer = new trainers(req.body);  // Get the html Body -> Pokemon Object
        await trainer.save();  // Save on MongoDB
        res.json('Trainer Saved');
}

trainerCtrl.getTrainerbyID = async (req, res) => {  // Get Pokemon Family

      // Find Trainer in MongoDB
      const filterTrainer = new RegExp(`^${req.params.id}`);  //  Template String ES6 Pattern
      const trainer = await trainers.find({ trainerID: filterTrainer});  // "/^MegaCharizardX/" Pattern
      res.json(trainer);  // Send Pokémon to server as JSON
}


module.exports = trainerCtrl;  // Exports the Object with all the Methods
