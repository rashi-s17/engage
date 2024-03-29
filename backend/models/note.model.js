const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  user_id: { type: String, required: true},
  user_type: { type: String, required: true },
  content: { type: String, required: true }
}, {
  timestamps: true,
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;