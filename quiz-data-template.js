// Duplikat file ini untuk set soal baru, lalu ubah nama file datanya.
// Setelah itu, di quiz-template.html ubah baris:
// <script src="./quiz-data-template.js"></script>
// menjadi nama file data baru kamu.

window.QUIZ_CONFIG = {
  label: "Simulator CBT",
  title: "Judul Set Soal",
  subtitle: "Subjudul atau keterangan sumber soal",
  durationMinutes: 100,
  shuffleOptions: true
};

window.QUESTIONS = [
  {
    q: "1. Tulis pertanyaan pertama di sini.",
    options: [
      "Pilihan A",
      "Pilihan B",
      "Pilihan C",
      "Pilihan D",
      "Pilihan E"
    ],
    answer: 0,
    explain: "Tulis pembahasan singkat di sini. answer: 0 berarti pilihan pertama adalah jawaban benar."
  },
  {
    q: "2. Tulis pertanyaan kedua di sini.",
    options: [
      "Pilihan A",
      "Pilihan B",
      "Pilihan C",
      "Pilihan D",
      "Pilihan E"
    ],
    answer: 2,
    explain: "answer: 2 berarti pilihan ketiga adalah jawaban benar."
  }
];
