export type Accent = 'us' | 'uk';

let cachedVoice: SpeechSynthesisVoice | null = null;
const audioCache = new Map<string, HTMLAudioElement>();

function pickVoice(): SpeechSynthesisVoice | null {
  if (cachedVoice) return cachedVoice;
  if (typeof speechSynthesis === 'undefined') return null;
  const voices = speechSynthesis.getVoices();
  if (!voices.length) return null;
  const preferred = ['Samantha', 'Google US English', 'Microsoft Zira', 'Microsoft Aria', 'Alex', 'Daniel'];
  for (const name of preferred) {
    const v = voices.find((x) => x.name.includes(name));
    if (v) { cachedVoice = v; return v; }
  }
  cachedVoice = voices.find((v) => v.lang.startsWith('en')) ?? voices[0];
  return cachedVoice;
}

if (typeof speechSynthesis !== 'undefined') {
  speechSynthesis.onvoiceschanged = () => { cachedVoice = null; };
}

/** 标准词典发音（有道公开词典语音）：type=2 美音，type=1 英音 */
function dictAudioUrl(word: string, accent: Accent): string {
  const w = encodeURIComponent(word.toLowerCase().replace(/[^a-z'\- ]/g, ''));
  return `https://dict.youdao.com/dictvoice?audio=${w}&type=${accent === 'uk' ? 1 : 2}`;
}

/** 优先标准词典真人发音；取不到时回退浏览器 TTS */
export function speak(word: string, accent: Accent = 'us', rate = 0.9): void {
  const url = dictAudioUrl(word, accent);
  let audio = audioCache.get(url);
  if (!audio) {
    audio = new Audio(url);
    audioCache.set(url, audio);
  }
  audio.currentTime = 0;

  let settled = false;
  const fallback = () => {
    if (settled) return;
    settled = true;
    speakWithTts(word, rate);
  };
  audio.addEventListener('error', () => fallback(), { once: true });
  audio.addEventListener('playing', () => { settled = true; }, { once: true });

  audio.play().catch(() => fallback());
  window.setTimeout(() => { if (!settled && audio && audio.paused) fallback(); }, 1500);
}

export function speakWithTts(text: string, rate = 0.9): void {
  if (typeof speechSynthesis === 'undefined') return;
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'en-US';
  u.rate = rate;
  const v = pickVoice();
  if (v) u.voice = v;
  speechSynthesis.speak(u);
}

export function stopSpeak(): void {
  if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
  for (const a of audioCache.values()) { a.pause(); a.currentTime = 0; }
}
