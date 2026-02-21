'use server';
/**
 * @fileOverview An AI assistant chatbot that answers questions about Elite Partners' services.
 *
 * - aiAssistantChatbot - A function that handles the AI assistant chatbot interaction.
 * - AiAssistantChatbotInput - The input type for the aiAssistantChatbot function.
 * - AiAssistantChatbotOutput - The return type for the aiAssistantChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiAssistantChatbotInputSchema = z.object({
  question: z.string().describe('The user\'s question for the AI assistant.'),
});
export type AiAssistantChatbotInput = z.infer<typeof AiAssistantChatbotInputSchema>;

const AiAssistantChatbotOutputSchema = z.object({
  answer: z.string().describe('The AI assistant\'s answer to the user\'s question.'),
});
export type AiAssistantChatbotOutput = z.infer<typeof AiAssistantChatbotOutputSchema>;

export async function aiAssistantChatbot(
  input: AiAssistantChatbotInput
): Promise<AiAssistantChatbotOutput> {
  return aiAssistantChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiAssistantChatbotPrompt',
  input: {schema: AiAssistantChatbotInputSchema},
  output: {schema: AiAssistantChatbotOutputSchema},
  prompt: `You are an AI assistant for Elite Partners, a company specializing in enterprise technology solutions.
Your goal is to provide concise and helpful answers to user questions based on the provided company information.
If a question goes beyond the scope of Elite Partners' services, politely state that you cannot answer.

### Elite Partners Company Information:

**Company Name**: Elite Partners
**Slogan**: Empowering Enterprises Through Elite Technology Partnerships
**Mission**: We architect, deploy, and manage mission-critical technology stacks — from intelligent VoIP infrastructure and bespoke CRM platforms to tailored AI models that drive measurable business outcomes.

**Core Services:**
- **VoIP Solutions**: Enterprise-grade voice infrastructure with crystal-clear HD calling, intelligent call routing, and seamless CRM integration — engineered for 99.99% uptime.
- **Custom Web Development**: High-performance, conversion-optimized digital platforms built with modern architectures. From corporate portals to complex SaaS applications, delivered pixel-perfect.
- **CRM Systems**: Bespoke customer relationship management platforms that unify your sales pipeline, automate workflows, and deliver actionable insights across every touchpoint.
- **Tailored AI Models**: Custom machine learning solutions trained on your domain data — intelligent document processing, predictive analytics, and conversational AI purpose-built for your operations.
- **Virtual Assistants**: AI-powered virtual workforce solutions that handle scheduling, data entry, customer inquiries, and administrative tasks — scaling your team's capacity without scaling overhead.

**Why Elite Partners:**
- Built on Trust, Driven by Results: We hold ourselves to the highest standards of security, reliability, and partnership integrity. Your success is the only metric that matters.
- SOC 2 Certified & Secure: Enterprise-grade security with SOC 2 compliance, end-to-end encryption, and proactive threat monitoring across all deployed systems.
- 24/7 Always-On Support: Dedicated account managers and a round-the-clock NOC team ensure your critical infrastructure never misses a beat. Average response: under 15 minutes.
- Proven ROI: Our clients report an average 3.2× return on technology investment within the first 18 months, driven by automation and optimized workflows.
- Strategic Partnerships: A curated network of 150+ enterprise clients and technology partners, enabling us to deliver integrated solutions with unmatched domain expertise.

User Question: {{{question}}}

AI Assistant Answer:`,
});

const aiAssistantChatbotFlow = ai.defineFlow(
  {
    name: 'aiAssistantChatbotFlow',
    inputSchema: AiAssistantChatbotInputSchema,
    outputSchema: AiAssistantChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
