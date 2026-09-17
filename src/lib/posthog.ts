/**
 * PostHog 接入层。
 *
 * 设计原则（隐私优先）：
 * - 未配置 Key（POSTHOG_KEY 为空）或总开关关闭时，本函数直接 return，
 *   setAnalyticsSink 不会被注入，track() 永久 no-op，网站照常运行。
 * - posthog-js 通过动态 import 加载，不进入主包，不拖慢首屏。
 * - autocapture / session recording 全部关闭，杜绝抓到用户输入。
 */

import { POSTHOG_KEY, POSTHOG_HOST, ANALYTICS_ENABLED } from '../config';
import { setAnalyticsSink, type AnalyticsEvent } from './analytics';

export async function initAnalytics(): Promise<void> {
  // 未开启或没填 Key ⇒ 完全不初始化，一切 no-op
  if (!ANALYTICS_ENABLED || !POSTHOG_KEY) return;

  // 动态加载，避免 posthog-js 进入首屏主包
  // posthog-js 通过 default 导出实例，故取 .default
  const { default: posthog } = await import('posthog-js');

  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    autocapture: false, // 关闭自动捕获，避免抓到用户输入
    capture_pageview: true,
    disable_session_recording: true, // 不录屏
    person_profiles: 'never', // 不做用户画像
    persistence: 'localStorage',
  });

  // 把白名单事件转发给 PostHog；AnalyticsEvent 已锁定只含事件名 + 数值/枚举属性
  setAnalyticsSink((e: AnalyticsEvent) => {
    const { name, ...props } = e as { name: string } & Record<string, unknown>;
    posthog.capture(name, props);
  });
}
