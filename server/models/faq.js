import mongoose from 'mongoose';

const FAQSchema = new mongoose.Schema({
    pageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Page',
        required: true
    },
    faqs: [
        {
            question: {
                type: String,
                required: true
            },
            answer: {
                type: String,
                required: true
            },
        }
    ]

}, { timestamps: true });

const FAQ = mongoose.model('FAQ', FAQSchema);

export default FAQ;