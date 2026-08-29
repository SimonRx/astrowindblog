import { getCollection } from 'astro:content';

// 构建期生成全文搜索索引：{ slug: 清洗后的正文文本 }
// 清洗：去 markdown 标记/HTML/多余空白（保留中文与英文，去数字避免日期噪音可选）
export async function GET() {
  const posts = await getCollection('post');
  const index: Record<string, string> = {};

  for (const post of posts) {
    if (post.data.draft) continue;
    const slug = post.id.replace(/\.[^.]+$/, '');
    const body = post.body || '';
    const cleaned = body
      .replace(/[#*`>_~\-\[\]()!|\\]/g, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\d+/g, ' ') // 去数字，削弱日期/版本噪音
      .replace(/\s+/g, ' ')
      .trim();
    index[slug] = cleaned;
  }

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}