import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
  { text: '首页', href: getPermalink('/') },
  { text: '工具', href: getPermalink('/tools') },  // 或你实际想指向的页面
  { text: '博客', href: getBlogPermalink() },
  { text: '关于', href: getPermalink('/about') },
],
  actions: []
};

export const footerData = {
  links: [],           // 留空
  secondaryLinks: [],  // 留空
  socialLinks: [],     // 留空
  footNote: `
  <div class="flex justify-center w-full">
    <div class="text-center text-sm text-muted space-y-1">
      <p>© 2026 二咪喵喵。保留所有权利。</p>
      <p>
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">闽ICP备2026021587号</a>
        &nbsp;·&nbsp;
        <a href="https://beian.mps.gov.cn/#/query/webSearch?code=35010202002207" target="_blank" rel="noopener noreferrer">闽公网安备35010202002207号</a>
      </p>
    </div>
  </div>
`,
};