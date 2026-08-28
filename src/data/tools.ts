export interface Tool {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const tools: Tool[] = [
  {
    slug: 'image-toolbox',
    name: '图片工具',
    description: '裁切、压缩、旋转、缩放、格式转换，全部在浏览器本地完成',
    icon: 'tabler:photo',
  },
  {
    slug: 'video-toolbox',
    name: '视频工具',
    description: '视频转 GIF、裁切、缩放、旋转、变速、静音、抽帧，无需上传服务器',
    icon: 'tabler:video',
  },
];
