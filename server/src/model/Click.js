const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  team: String,
  session: String,
});

mongoose.model('Click', schema);

export default mongoose.model('Click');
