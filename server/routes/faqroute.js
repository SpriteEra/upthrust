// routes/faqRoutes.js
import express from 'express';
import {
    createFAQ,
    getFAQByPageId,
    updateFAQByPageId,
    deleteFAQByPageId,
    getAllFAQs,
    updateSpecificFAQ,
    deleteSpecificFAQ
} from '../controllers/faqController.js';

const router = express.Router();

router.post('/add', createFAQ);
router.get('/page/:pageId', getFAQByPageId);
router.put('/page/:pageId', updateFAQByPageId);   // full replace of faqs array
router.delete('/page/:pageId', deleteFAQByPageId);
router.get('/', getAllFAQs);

// specific faq 
router.put('/page/:pageId/faq/:faqId', updateSpecificFAQ);   // update one FAQ
router.delete('/page/:pageId/faq/:faqId', deleteSpecificFAQ);

export default router;