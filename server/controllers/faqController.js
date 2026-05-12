import FAQ from '../models/faq.js';

// ==================== CREATE ====================

export const createFAQ = async (req, res) => {
    try {
        const { pageId, faqs } = req.body;

        if (!pageId) {
            return res.status(400).json({ success: false, message: 'pageId is required' });
        }

        // Check if FAQ already exists for this page
        const existingFAQ = await FAQ.findOne({ pageId });
        if (existingFAQ) {
            return res.status(409).json({ success: false, message: 'FAQ already exists for this page. Use update endpoint.' });
        }

        const newFAQ = new FAQ({ pageId, faqs });
        await newFAQ.save();
        // const newFAQ = new FAQ({ pageId, faqs });
        // await newFAQ.save();

        // const populatedFAQ = await FAQ.findById(newFAQ._id)
        //     .populate('pageId', 'title');

        // res.status(201).json({ success: true, data: populatedFAQ });

        res.status(201).json({ success: true, data: newFAQ });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};

// ==================== READ (by pageId) ====================
// Get FAQ document for a specific page
export const getFAQByPageId = async (req, res) => {
    try {
        const { pageId } = req.params;

        if (!pageId) {
            return res.status(400).json({ success: false, message: 'pageId is required' });
        }

        const faq = await FAQ.findOne({ pageId }).populate('pageId', 'title'); // optional populate

        if (!faq) {
            return res.status(404).json({ success: false, message: 'FAQ not found for this page' });
        }

        res.status(200).json({ success: true, data: faq });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};

// ==================== UPDATE (full replace of faqs array) ====================

export const updateFAQByPageId = async (req, res) => {
    try {
        const { pageId } = req.params;
        const { faqs } = req.body;

        if (!pageId) {
            return res.status(400).json({ success: false, message: 'pageId is required' });
        }

        if (!faqs || !Array.isArray(faqs)) {
            return res.status(400).json({ success: false, message: 'faqs array is required' });
        }

        // Validate each FAQ item (optional but recommended)
        for (let item of faqs) {
            if (!item.question || !item.answer) {
                return res.status(400).json({ success: false, message: 'Each FAQ must have a question and answer' });
            }
        }


        const updatedFAQ = await FAQ.findOneAndUpdate(
            { pageId },
            { pageId, faqs },
            { new: true, upsert: true, runValidators: true }
        ).populate('pageId', 'title');


        res.status(200).json({ success: true, data: updatedFAQ });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};

// ==================== DELETE ====================
// Delete the entire FAQ document for a specific pageId
export const deleteFAQByPageId = async (req, res) => {
    try {
        const { pageId } = req.params;

        if (!pageId) {
            return res.status(400).json({ success: false, message: 'pageId is required' });
        }

        const deletedFAQ = await FAQ.findOneAndDelete({ pageId });

        if (!deletedFAQ) {
            return res.status(404).json({ success: false, message: 'FAQ not found for this page' });
        }

        res.status(200).json({ success: true, message: 'FAQ deleted successfully', data: deletedFAQ });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};

// ==================== GET ALL (optional admin route) ====================
// Get all FAQ documents (useful for admin dashboard)
export const getAllFAQs = async (req, res) => {
    try {
        const faqs = await FAQ.find().populate('pageId', 'title').sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: faqs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};



// controllers/faqController.js (add these functions)

// ==================== UPDATE SPECIFIC FAQ ITEM ====================

export const updateSpecificFAQ = async (req, res) => {
    try {
        const { pageId, faqId } = req.params;
        const { question, answer } = req.body;

        if (!pageId || !faqId) {
            return res.status(400).json({ success: false, message: 'pageId and faqId are required' });
        }

        if (!question && !answer) {
            return res.status(400).json({ success: false, message: 'At least one of question or answer must be provided' });
        }

        // Build update object dynamically
        const updateFields = {};
        if (question) updateFields['faqs.$.question'] = question;
        if (answer) updateFields['faqs.$.answer'] = answer;

        const updatedFAQ = await FAQ.findOneAndUpdate(
            { pageId, 'faqs._id': faqId },
            { $set: updateFields },
            { new: true, runValidators: true }
        );

        const populatedFAQ = await FAQ.findById(updatedFAQ._id)
            .populate('pageId', 'title');

        res.status(200).json({ success: true, data: populatedFAQ });

        if (!updatedFAQ) {
            return res.status(404).json({ success: false, message: 'FAQ document not found for this page or FAQ item not found' });
        }

        res.status(200).json({ success: true, data: updatedFAQ });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};

// ==================== DELETE SPECIFIC FAQ ITEM ====================

export const deleteSpecificFAQ = async (req, res) => {
    try {
        const { pageId, faqId } = req.params;

        if (!pageId || !faqId) {
            return res.status(400).json({ success: false, message: 'pageId and faqId are required' });
        }

        const updatedFAQ = await FAQ.findOneAndUpdate(
            { pageId },
            { $pull: { faqs: { _id: faqId } } },
            { new: true }
        );

        const populatedFAQ = await FAQ.findById(updatedFAQ._id)
            .populate('pageId', 'title');


        if (!updatedFAQ) {
            return res.status(404).json({ success: false, message: 'FAQ document not found for this page' });
        }

        res.status(200).json({ success: true, data: populatedFAQ });
        res.status(200).json({ success: true, message: 'FAQ item deleted successfully', data: updatedFAQ });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error', error: error.message });
    }
};