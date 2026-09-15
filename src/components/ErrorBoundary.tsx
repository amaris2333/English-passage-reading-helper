import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  message: string;
}

/**
 * 全局错误兜底：任何组件在渲染期抛错时，
 * 显示可恢复的错误页而不是整页白屏。
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, message: '' };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, message: error?.message || String(error) };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[ErrorBoundary]', error, info?.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;
    return (
      <div style={{
        minHeight: '100vh', display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 14,
        fontFamily: 'system-ui, sans-serif', color: '#333', padding: 24, textAlign: 'center',
      }}>
        <div style={{ fontSize: 40 }}>😕</div>
        <h1 style={{ fontSize: 20, fontWeight: 500, margin: 0 }}>页面出了点问题</h1>
        <p style={{ fontSize: 14, color: '#777', maxWidth: 460, lineHeight: 1.7, margin: 0 }}>
          你的文章、笔记、收藏和批注都<b>安全地保存在本地</b>，没有丢失。<br />
          通常刷新一次即可恢复；如果反复出现，可尝试清空浏览器缓存后重进。
        </p>
        <div style={{ display: 'flex', gap: 10, marginTop: 6 }}>
          <button
            onClick={() => window.location.reload()}
            style={{ padding: '8px 20px', borderRadius: 8, border: '1px solid #ccc', cursor: 'pointer', fontSize: 14 }}
          >
            刷新页面
          </button>
          <button
            onClick={() => this.setState({ hasError: false, message: '' })}
            style={{ padding: '8px 20px', borderRadius: 8, border: '1px solid #ccc', cursor: 'pointer', fontSize: 14, background: '#f7f7f7' }}
          >
            尝试继续
          </button>
        </div>
        <details style={{ marginTop: 12, maxWidth: 560, width: '100%', textAlign: 'left' }}>
          <summary style={{ fontSize: 12, color: '#999', cursor: 'pointer' }}>技术详情（反馈问题时请附上）</summary>
          <pre style={{
            fontSize: 11, color: '#a33', whiteSpace: 'pre-wrap', wordBreak: 'break-all',
            background: '#fafafa', padding: 10, borderRadius: 6, marginTop: 6,
          }}>{this.state.message}</pre>
        </details>
      </div>
    );
  }
}
