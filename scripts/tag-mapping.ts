/**
 * Tag name mapping from Chinese to English folder names
 * This allows us to use English paths in URLs while keeping the original Chinese tags in OpenAPI specs
 */

// AI Model API tags (exact match with OpenAPI spec tag names)
export const aiModelTagMapping: Record<string, string> = {
  // Main tags
  获取模型列表: 'list-models',
  'OpenAI格式(Chat)': 'openai-chat',
  'Claude格式(Messages)': 'claude-messages',
  Gemini格式: 'gemini',
  'OpenAI格式(Responses)': 'openai-responses',
  '文本补全(Completions)': 'completions',
  'OpenAI格式(Embeddings)': 'embeddings',
  '重排序(Rerank)': 'rerank',
  Moderations: 'moderations',
  'OpenAI音频(Audio)': 'audio',
  Realtime: 'realtime',
  图片生成: 'image-generation',
  视频生成: 'video-generation',
  未实现: 'not-implemented',
  // Sub-tags
  '编辑(Images)': 'edit-images',
  Qwen千问: 'qwen',
  Kling格式: 'kling',
  Sora兼容格式: 'sora-compatible',
  即梦格式: 'jimeng',
  Files: 'files',
  'Fine-tunes': 'fine-tunes',
  // Lowercase variants (just in case)
  'openai格式(chat)': 'openai-chat',
  'claude格式(messages)': 'claude-messages',
  gemini格式: 'gemini',
  'openai格式(responses)': 'openai-responses',
  'openai格式(embeddings)': 'embeddings',
  'openai音频(audio)': 'audio',
  moderations: 'moderations',
  realtime: 'realtime',
  files: 'files',
  'fine-tunes': 'fine-tunes',
};

// Management API tags (exact match with OpenAPI spec tag names)
export const managementTagMapping: Record<string, string> = {
  系统: 'system',
  系统设置: 'system-settings',
  用户登陆注册: 'user-auth',
  用户管理: 'user-management',
  两步验证: 'two-factor-auth',
  OAuth: 'oauth',
  oauth: 'oauth',
  渠道管理: 'channel-management',
  模型管理: 'model-management',
  令牌管理: 'token-management',
  兑换码: 'redemption',
  充值: 'payment',
  日志: 'logs',
  数据统计: 'statistics',
  任务: 'tasks',
  分组: 'groups',
  供应商: 'vendors',
  安全验证: 'security-verification',
};

// Combined mapping
export const allTagMapping: Record<string, string> = {
  ...aiModelTagMapping,
  ...managementTagMapping,
};

/**
 * Localized titles for each tag in different languages
 */
export const tagTitles: Record<string, Record<string, string>> = {
  // AI Model API
  'list-models': {
    en: 'List Models',
    zh: '获取模型列表',
    ja: 'モデル一覧',
  },
  'openai-chat': {
    en: 'OpenAI Chat Format',
    zh: 'OpenAI格式(Chat)',
    ja: 'OpenAI形式(Chat)',
  },
  'claude-messages': {
    en: 'Claude Messages Format',
    zh: 'Claude格式(Messages)',
    ja: 'Claude形式(Messages)',
  },
  gemini: {
    en: 'Gemini Format',
    zh: 'Gemini格式',
    ja: 'Gemini形式',
  },
  'openai-responses': {
    en: 'OpenAI Responses Format',
    zh: 'OpenAI格式(Responses)',
    ja: 'OpenAI形式(Responses)',
  },
  completions: {
    en: 'Text Completions',
    zh: '文本补全(Completions)',
    ja: 'テキスト補完(Completions)',
  },
  embeddings: {
    en: 'Embeddings',
    zh: 'OpenAI格式(Embeddings)',
    ja: 'OpenAI形式(Embeddings)',
  },
  rerank: {
    en: 'Rerank',
    zh: '重排序(Rerank)',
    ja: 'リランク(Rerank)',
  },
  moderations: {
    en: 'Moderations',
    zh: 'Moderations',
    ja: 'Moderations',
  },
  audio: {
    en: 'Audio',
    zh: 'OpenAI音频(Audio)',
    ja: 'OpenAI音声(Audio)',
  },
  realtime: {
    en: 'Realtime',
    zh: 'Realtime',
    ja: 'Realtime',
  },
  'image-generation': {
    en: 'Image Generation',
    zh: '图片生成',
    ja: '画像生成',
  },
  'video-generation': {
    en: 'Video Generation',
    zh: '视频生成',
    ja: '動画生成',
  },
  'not-implemented': {
    en: 'Not Implemented',
    zh: '未实现',
    ja: '未実装',
  },
  // Sub-tags
  'edit-images': {
    en: 'Edit Images',
    zh: '编辑(Images)',
    ja: '編集(Images)',
  },
  qwen: {
    en: 'Qwen',
    zh: 'Qwen千问',
    ja: 'Qwen',
  },
  kling: {
    en: 'Kling Format',
    zh: 'Kling格式',
    ja: 'Kling形式',
  },
  'sora-compatible': {
    en: 'Sora Compatible Format',
    zh: 'Sora兼容格式',
    ja: 'Sora互換形式',
  },
  jimeng: {
    en: 'Jimeng Format',
    zh: '即梦格式',
    ja: 'Jimeng形式',
  },
  files: {
    en: 'Files',
    zh: 'Files',
    ja: 'Files',
  },
  'fine-tunes': {
    en: 'Fine-tunes',
    zh: 'Fine-tunes',
    ja: 'Fine-tunes',
  },
  // Management API
  system: {
    en: 'System',
    zh: '系统',
    ja: 'システム',
  },
  'system-settings': {
    en: 'System Settings',
    zh: '系统设置',
    ja: 'システム設定',
  },
  'user-auth': {
    en: 'User Authentication',
    zh: '用户登陆注册',
    ja: 'ユーザー認証',
  },
  'user-management': {
    en: 'User Management',
    zh: '用户管理',
    ja: 'ユーザー管理',
  },
  'two-factor-auth': {
    en: 'Two-Factor Authentication',
    zh: '两步验证',
    ja: '二要素認証',
  },
  oauth: {
    en: 'OAuth',
    zh: 'OAuth',
    ja: 'OAuth',
  },
  'channel-management': {
    en: 'Channel Management',
    zh: '渠道管理',
    ja: 'チャネル管理',
  },
  'model-management': {
    en: 'Model Management',
    zh: '模型管理',
    ja: 'モデル管理',
  },
  'token-management': {
    en: 'Token Management',
    zh: '令牌管理',
    ja: 'トークン管理',
  },
  redemption: {
    en: 'Redemption',
    zh: '兑换码',
    ja: '引き換えコード',
  },
  payment: {
    en: 'Payment',
    zh: '充值',
    ja: '支払い',
  },
  logs: {
    en: 'Logs',
    zh: '日志',
    ja: 'ログ',
  },
  statistics: {
    en: 'Statistics',
    zh: '数据统计',
    ja: '統計',
  },
  tasks: {
    en: 'Tasks',
    zh: '任务',
    ja: 'タスク',
  },
  groups: {
    en: 'Groups',
    zh: '分组',
    ja: 'グループ',
  },
  vendors: {
    en: 'Vendors',
    zh: '供应商',
    ja: 'ベンダー',
  },
  'security-verification': {
    en: 'Security Verification',
    zh: '安全验证',
    ja: 'セキュリティ検証',
  },
};

/**
 * Convert a Chinese tag name to English folder name
 */
export function toEnglishFolderName(chineseTag: string): string {
  return allTagMapping[chineseTag] || chineseTag;
}

/**
 * Get localized title for a tag
 */
export function getTagTitle(englishTag: string, lang: string): string {
  return tagTitles[englishTag]?.[lang] || englishTag;
}
