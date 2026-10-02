# openloop — Design Spec v1 (2026-10-02)

## 1. Outcome yang disepakati
Repo OSS public `github.com/bilhokista/openloop` (MIT): plugin Opencode yang
membotolkan **disiplin kerja** model kuat ( observed gap GPT 6.1 vs Opus 5.5
di task brag + opencode ) sehingga model apapun — terutama yang gratis —
kerja mendekati level itu. Yang dibotolkan loop-nya, bukan otaknya.

## 2. Mekanisme inti (3 aturan, via AGENTS.md always-on)
1. **Plan gate.** Task 3+ langkah wajib jadi todo dulu, max satu `in_progress`.
2. **Skill-first.** Cek dan pakai skill yang cocok sebelum jawab/eksekusi.
3. **Evidence before done.** Klaim selesai wajib ditempeli bukti jalan
   (test/build/output). Tanpa bukti = belum selesai.

## 3. Struktur v1 (6 file, tidak lebih — revisi hasil validasi docs+lokal)
```
openloop/
  AGENTS.md                       3 aturan inti, <60 baris (single source)
  .opencode/plugins/openloop.mjs  injek AGENTS.md + daftar skills/commands
  .opencode/command/openloop.md   cek status on/off
  skills/plan-gate/SKILL.md       cara mecah task + todo
  skills/verify-before-done/SKILL.md  cara buktiin klaim
  README.md                       install 1 baris + contoh
```
`plugin.yaml` dicoret: bukan format native opencode (hasil baca docs
opencode.ai/docs/plugins + bedah plugin ponytail yang jalan).
Tanpa JS berat di v1: `.mjs` hanya injeksi + registrasi, tanpa state.

## 4. Pembuktian (eval A/B, model gratis)
- Subjek: model gratis di config opencode (DeepSeek flash, GLM flash,
  Gemini flash).
- Tugas: task brag yang sama seperti kemarin.
- Skema: tanpa openloop vs dengan openloop. Menang jelas = klaim terbukti.
- v1 SELESA saat: plugin kepasang jalan + eval A/B kelar.

## 5. Batasan eksplisit (TIDAK di v1)
Skill-pack bundel, adaptor harness lain, JS hooks, dan klaim "sebagus Opus"
di README (tulis "nutup gap disiplin").
