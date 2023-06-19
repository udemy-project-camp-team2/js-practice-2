const board = document.getElementById("board");

const lists = [
  {
    title: "첫 번째 게시글",
    content: "안녕하세요!",
  },
  {
    title: "두 번째 게시글",
    content: "반갑습니다!",
  },
];

lists.forEach((list) => {
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");
  h3.innerHTML = list.title;
  span.innerHTML = list.content;
  li.classList.add("card");
  li.append(h3, span);
  board.append(li);
});
