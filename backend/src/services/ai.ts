import { HfInference } from '@huggingface/inference';

const hf = new HfInference(process.env.HF_TOKEN);

export class AIService {
  async generateCode(prompt: string) {
    if (!process.env.HF_TOKEN) return "Please set HF_TOKEN for AI capabilities.";
    const response = await hf.textGeneration({
      model: 'Qwen/Qwen2.5-Coder-32B-Instruct',
      inputs: prompt,
    });
    return response.generated_text;
  }
}
