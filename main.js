const quizText = document.getElementById("quiz-text");
const quizImage = document.getElementById("quiz-image");
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const choice3 = document.getElementById("choice-3");
const feedback = document.getElementById("feedback");

const quiz = {
  text: "私が留学した国はどこでしょう？",
  image:
    "https://www.soledu.net/jp/wp-content/uploads/2020/07/sunshine-coast.jpg",
  choices: [
    {
      text: "アメリカ",
      feedback: "不正解！アメリカは、３〜9歳まで住んでいた国です！！",
    },
    {
      text: "オーストラリア",
      feedback: "正解！！！トビタテ留学で高校生の時行きました！",
    },
    {
      text: "セブ島（フィリピン）",
      feedback: "これは今行きたい場所NO.1！！！！",
    },
  ],
};

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text;

  // 画像を表示
  quizImage.src = "./images/" + quiz.image;

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text;
  choice2.textContent = quiz.choices[1].text;
  choice3.textContent = quiz.choices[2].text;
};

const choose = function (choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback;
};

choice1.onclick = function () {
  choose(0);
};
choice2.onclick = function () {
  choose(1);
};
choice3.onclick = function () {
  choose(2);
};

reloadQuiz();
