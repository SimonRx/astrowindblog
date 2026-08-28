declare module 'gif.js' {
  interface GIFOptions {
    repeat?: number;
    quality?: number;
    workers?: number;
    workerScript?: string;
    background?: string;
    width?: number | null;
    height?: number | null;
    transparent?: string | null;
    dither?: string | boolean;
    debug?: boolean;
    globalPalette?: boolean;
  }

  interface FrameOptions {
    delay?: number;
    copy?: boolean;
  }

  class GIF {
    constructor(options?: GIFOptions);
    running: boolean;
    setOptions(options: GIFOptions): void;
    setOption(key: string, value: unknown): void;
    addFrame(image: HTMLImageElement | HTMLCanvasElement | CanvasRenderingContext2D, options?: FrameOptions): number;
    render(): void;
    abort(): void;
    on(event: 'progress', callback: (progress: number) => void): void;
    on(event: 'finished', callback: (blob: Blob) => void): void;
    on(event: 'abort' | 'start', callback: () => void): void;
  }

  export default GIF;
}
