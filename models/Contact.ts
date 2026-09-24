import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

/**
 * Starter model — jab form banao to fields yahan apne hisab se badal lena.
 */
const contactSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    service: { type: String, trim: true },
    message: { type: String, required: true, trim: true, maxlength: 2000 },
  },
  { timestamps: true }, // createdAt / updatedAt khud aa jayenge
);

export type ContactDoc = InferSchemaType<typeof contactSchema>;

// Dev ma model dobara compile na ho (OverwriteModelError se bachne ke liye)
const Contact = (mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema)) as Model<ContactDoc>;

export default Contact;
