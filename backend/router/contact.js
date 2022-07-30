import express from 'express';
const router = express.Router();
import {
  createContact,
  getContacts,
  deleteContact,
  deleteMultiContacts,
  updateContact,
} from '../controller/contactController.js';

import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(protect, createContact);
router.route('/').get(protect, getContacts);
router.route('/:id').delete(protect, deleteContact).put(protect, updateContact);
router.route('/delete').post(protect, deleteMultiContacts);

export default router;
