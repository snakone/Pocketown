const pokeItems = require('../models/poke-item');  // pokeItem Model = MongoDB Collection

const pokeItemCtrl = {};  // Create Object. We add Methods to it so We can use them OUTSIDE later

// req: Request - res: Response  // async - await // Wait for MongoDB

pokeItemCtrl.addpokeItem = async (req, res) => {  // Add pokeItem to MongoDB

  const pokeItem = new pokeItems(req.body);  // Get the html Body -> pokeItem Object
  await pokeItem.save();  // Save on MongoDB
  res.json('Held Item Saved');
}

pokeItemCtrl.getpokeItem = async (req, res) => {  // Get ALL pokeItem

    const pokeItem = await pokeItems.find() // Find pokeItem in MongoDB
     .sort({ item: + 1 });  // Sort pokeItem by Name DESC
    res.json(pokeItem);  // Send pokeItem to server as JSON
}

pokeItemCtrl.getpokeItembyId = async (req, res) => {  // Get pokeItem by ID

    const pokeItem = await pokeItems.findById(req.params.id);  // Find by ID
    res.json(pokeItem);  // Send pokeItem to server as JSON
}

pokeItemCtrl.getpokeItembyName = async (req, res) => {  // Get pokeItem by Name

  const filterPokeItem = new RegExp(`^${req.query.pokeItem}`);  //  Template String ES6 Pattern
  const pokeItem = await pokeItems.find({ picture: filterPokeItem});  // "/^Charcoal/" Pattern
  res.json(pokeItem);  // Send pokeItem to server as JSON
}

pokeItemCtrl.updatepokeItem = async (req, res) => {  // Update pokeItem

   const { id } = req.params;  // From req.params only need ID
   const pokeItem = req.body; // pokeItem with updated INFO

   await pokeItems.findByIdAndUpdate(id, {$set: pokeItem},  // Find by ID and Update in MongoDB
                                     {new: true});  // New pokeItem if ID not Match
     res.json({
       status: "Held Item Updated"
     });
}

pokeItemCtrl.deletepokeItem = async (req, res) => {  // Remove pokeItem pokeItem from MongoDB

  await pokeItems.findByIdAndRemove(req.params.id);  // Remove pokeItem by ID
  res.json({
    status: "Held Item Deleted"
  });
}

module.exports = pokeItemCtrl;  // Exports the Object with all the Methods
