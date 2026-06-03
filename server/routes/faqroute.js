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
import authFlex from '../middleware/authFlex.js';

const router = express.Router();

router.post('/add', authFlex, createFAQ);
router.get('/page/:pageId', authFlex, getFAQByPageId);
router.put('/page/:pageId', authFlex, updateFAQByPageId);   // full replace of faqs array
router.delete('/page/:pageId', authFlex, deleteFAQByPageId);
router.get('/', authFlex, getAllFAQs);

// specific faq 
router.put('/page/:pageId/faq/:faqId', authFlex, updateSpecificFAQ);   // update one FAQ
router.delete('/page/:pageId/faq/:faqId', authFlex, deleteSpecificFAQ);

export default router;