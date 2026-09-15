import type { Chunk, Sentence } from '../types';

export interface StructureLevel {
  key: string;
  label: string;
  items: Chunk[];
}

export interface Structure {
  trunk: string;
  trunkParts: Chunk[];
  levels: StructureLevel[];
}

const CORE = new Set(['S', 'V', 'O', 'C']);
const CLAUSE = new Set(['Clause']);
const INSERT = new Set(['Appositive', 'Insert']);

export function buildStructure(sentence: Sentence): Structure | null {
  const chunks = sentence.analysis?.chunks;
  if (!chunks || !chunks.length) return null;

  const trunkParts = chunks.filter((c) => CORE.has(c.role)).sort((a, b) => a.start - b.start);
  const trunk = trunkParts.map((c) => c.text).join(' ').trim();

  const levels: StructureLevel[] = [];
  const clause = chunks.filter((c) => CLAUSE.has(c.role)).sort((a, b) => a.start - b.start);
  const insert = chunks.filter((c) => INSERT.has(c.role)).sort((a, b) => a.start - b.start);
  const mod = chunks.filter((c) => c.role === 'M').sort((a, b) => a.start - b.start);

  if (clause.length) levels.push({ key: 'clause', label: '从句', items: clause });
  if (insert.length) levels.push({ key: 'insert', label: '插入语 / 同位语', items: insert });
  if (mod.length) levels.push({ key: 'mod', label: '修饰成分', items: mod });

  return { trunk, trunkParts, levels };
}

export const ROLE_LABEL: Record<string, string> = {
  S: '主语 S',
  V: '谓语 V',
  O: '宾语 O',
  C: '表语 / 补语 C',
  M: '状语 M',
  Clause: '从句',
  Appositive: '同位语',
  Insert: '插入语',
};
