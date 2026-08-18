import { Router } from 'express';
import { AIService } from '../services/ai';

const router = Router();
const aiService = new AIService();

router.post('/generate', async (req, res) => {
  const result = await aiService.generateCode(req.body.prompt);
  res.json({ result });
});

export default router;
