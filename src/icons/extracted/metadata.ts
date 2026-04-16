// Icon metadata for search and categorization
import { IconMetadata } from '@/types/icon';

export const iconMetadata: Record<string, IconMetadata> = {
  // AI Providers
  openai: { name: 'openai', displayName: 'OpenAI', category: 'ai-provider', keywords: ['gpt', 'chatgpt'], defaultColor: '#00A67E' },
  anthropic: { name: 'anthropic', displayName: 'Anthropic', category: 'ai-provider', keywords: ['claude'], defaultColor: '#D4915D' },
  claude: { name: 'claude', displayName: 'Claude', category: 'ai-provider', keywords: ['anthropic'], defaultColor: '#D4915D' },
  google: { name: 'google', displayName: 'Google', category: 'ai-provider', keywords: ['gemini', 'bard'], defaultColor: '#4285F4' },
  gemini: { name: 'gemini', displayName: 'Gemini', category: 'ai-provider', keywords: ['google'], defaultColor: '#4285F4' },
  deepseek: { name: 'deepseek', displayName: 'DeepSeek', category: 'ai-provider', keywords: ['deep', 'seek'], defaultColor: '#1E88E5' },
  moonshot: { name: 'moonshot', displayName: 'Moonshot', category: 'ai-provider', keywords: ['kimi', 'moonshot'], defaultColor: '#6366F1' },
  kimi: { name: 'kimi', displayName: 'Kimi', category: 'ai-provider', keywords: ['moonshot'], defaultColor: '#6366F1' },
  stepfun: { name: 'stepfun', displayName: 'StepFun', category: 'ai-provider', keywords: ['stepfun', 'step', 'jieyue', '阶跃星辰'], defaultColor: '#005AFF' },
  zhipu: { name: 'zhipu', displayName: 'Zhipu AI', category: 'ai-provider', keywords: ['chatglm', 'glm'], defaultColor: '#0F62FE' },
  minimax: { name: 'minimax', displayName: 'MiniMax', category: 'ai-provider', keywords: ['minimax'], defaultColor: '#FF6B6B' },
  baidu: { name: 'baidu', displayName: 'Baidu', category: 'ai-provider', keywords: ['ernie', 'wenxin'], defaultColor: '#2932E1' },
  alibaba: { name: 'alibaba', displayName: 'Alibaba', category: 'ai-provider', keywords: ['qwen', 'tongyi'], defaultColor: '#FF6A00' },
  tencent: { name: 'tencent', displayName: 'Tencent', category: 'ai-provider', keywords: ['hunyuan'], defaultColor: '#00A4FF' },
  meta: { name: 'meta', displayName: 'Meta', category: 'ai-provider', keywords: ['facebook', 'llama'], defaultColor: '#0081FB' },
  microsoft: { name: 'microsoft', displayName: 'Microsoft', category: 'ai-provider', keywords: ['copilot', 'azure'], defaultColor: '#00A4EF' },
  cohere: { name: 'cohere', displayName: 'Cohere', category: 'ai-provider', keywords: ['cohere'], defaultColor: '#39594D' },
  perplexity: { name: 'perplexity', displayName: 'Perplexity', category: 'ai-provider', keywords: ['perplexity'], defaultColor: '#20808D' },
  mistral: { name: 'mistral', displayName: 'Mistral', category: 'ai-provider', keywords: ['mistral'], defaultColor: '#FF7000' },
  huggingface: { name: 'huggingface', displayName: 'Hugging Face', category: 'ai-provider', keywords: ['huggingface', 'hf'], defaultColor: '#FFD21E' },
  hermes: { name: 'hermes', displayName: 'Hermes', category: 'ai-provider', keywords: ['hermes', 'agent'], defaultColor: '#10B981' },

  // Cloud Platforms
  aws: { name: 'aws', displayName: 'AWS', category: 'cloud', keywords: ['amazon', 'cloud'], defaultColor: '#FF9900' },
  azure: { name: 'azure', displayName: 'Azure', category: 'cloud', keywords: ['microsoft', 'cloud'], defaultColor: '#0078D4' },
  huawei: { name: 'huawei', displayName: 'Huawei', category: 'cloud', keywords: ['huawei', 'cloud'], defaultColor: '#FF0000' },
  cloudflare: { name: 'cloudflare', displayName: 'Cloudflare', category: 'cloud', keywords: ['cloudflare', 'cdn'], defaultColor: '#F38020' },

  // Dev Tools
  github: { name: 'github', displayName: 'GitHub', category: 'tool', keywords: ['git', 'version control'], defaultColor: '#181717' },
  gitlab: { name: 'gitlab', displayName: 'GitLab', category: 'tool', keywords: ['git', 'version control'], defaultColor: '#FC6D26' },
  docker: { name: 'docker', displayName: 'Docker', category: 'tool', keywords: ['container'], defaultColor: '#2496ED' },
  kubernetes: { name: 'kubernetes', displayName: 'Kubernetes', category: 'tool', keywords: ['k8s', 'container'], defaultColor: '#326CE5' },
  vscode: { name: 'vscode', displayName: 'VS Code', category: 'tool', keywords: ['editor', 'ide'], defaultColor: '#007ACC' },

  // Others
  settings: { name: 'settings', displayName: 'Settings', category: 'other', keywords: ['config', 'preferences'], defaultColor: '#6B7280' },
  folder: { name: 'folder', displayName: 'Folder', category: 'other', keywords: ['directory'], defaultColor: '#6B7280' },
  file: { name: 'file', displayName: 'File', category: 'other', keywords: ['document'], defaultColor: '#6B7280' },
  link: { name: 'link', displayName: 'Link', category: 'other', keywords: ['url', 'hyperlink'], defaultColor: '#6B7280' },
};

export function getIconMetadata(name: string): IconMetadata | undefined {
  return iconMetadata[name.toLowerCase()];
}

export function searchIcons(query: string): string[] {
  const lowerQuery = query.toLowerCase();
  return Object.values(iconMetadata)
    .filter(meta =>
      meta.name.includes(lowerQuery) ||
      meta.displayName.toLowerCase().includes(lowerQuery) ||
      meta.keywords.some(k => k.includes(lowerQuery))
    )
    .map(meta => meta.name);
}
