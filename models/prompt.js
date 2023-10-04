import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  },
  location: {
    type: String,
    required :[true, 'Location is required.']
  },
  // image: {
  //   type: Buffer,  // Use Buffer to store the image data
  // }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;