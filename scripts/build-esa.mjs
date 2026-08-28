// ESA Pages 专用构建脚本。
// ffmpeg-core.wasm 约 30MB，超过 ESA Pages 单文件 25MB 上限，无法直接托管。
// 生产环境通过 OSS + PUBLIC_FFMPEG_BASE 加载 ffmpeg，因此构建产物 dist/ 中不需要 ffmpeg 文件。
// public/ffmpeg 保留用于本地开发（astro dev），构建完成后删除 dist 产物中的 ffmpeg 目录。
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distFfmpeg = path.join(root, 'dist', 'ffmpeg');

execSync('npm run build', { stdio: 'inherit', cwd: root });

if (fs.existsSync(distFfmpeg)) {
  fs.rmSync(distFfmpeg, { recursive: true, force: true });
  console.log('[build:esa] 已从 dist/ 删除 ffmpeg（改由 OSS 加载，规避 ESA 25MB 单文件限制）');
}