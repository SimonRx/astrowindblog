export interface Tool {
  slug: string;
  name: string;
  features: string[];
  icon: string;
}

export const tools: Tool[] = [
  {
    slug: 'image-toolbox',
    name: '图片工具',
    features: ['图片裁切', '压缩', '旋转', '缩放', '格式转换'],
    icon: 'tabler:photo',
  },
  {
    slug: 'video-toolbox',
    name: '视频工具',
    features: ['视频转 GIF', '裁切', '缩放', '旋转', '变速', '静音', '抽帧'],
    icon: 'tabler:video',
  },
];
