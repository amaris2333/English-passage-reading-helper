let cachedVoice: SpeechSynthesisVoice | null = null;

function pickVoice(): SpeechSynthesisVoice | null {
  if (cachedVoice) return cachedVoice;
  if (typeof speechSynthesis === 'undefined') return null;
  const voices = speechSynthesis.getVoices();
  if (!voices.length) return null;
  const preferred = ['Samantha', 'Google US English', 'Microsoft Zira', 'Microsoft Aria', 'Alex', 'Daniel'];
  for (const name of preferred) {
    const v = voices.find((x) => x.name.includes(name));
    if (v) {
      cachedVoice = v;
      return v;
    }
  }
  cachedVoice = voices.find((v) => v.lang.startsWith('en')) ?? voices[0];
  return cachedVoice;
}

if (typeof speechSynthesis !== 'undefined') {
  speechSynthesis.onvoiceschanged = () => {
    cachedVoice = null;
  };
}

export function speak(text: string, rate = 0.9): void {
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
}
