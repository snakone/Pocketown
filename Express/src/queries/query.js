const query = {};

query.Fire = { $or : [{type: /^Fire/}, {type2: /^Fire/}] };

module.exports = query;  // Exports the Object with all the Methods
