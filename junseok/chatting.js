const form = document.getElementById("chatting__form");
const input = document.querySelectorAll("input");

form.addEventListener("submit", submitMessageHandler);

function submitMessageHandler(e) {
  e.preventDefault();
  controlFormData();
}

function controlFormData() {
  const formData = new FormData(form);
  const username = formData.get("username");
  const message = formData.get("message");

  if (
    !username ||
    username.trim().length === 0 ||
    !message ||
    message.trim().length === 0
  ) {
    return;
  }

  const chatsContainer = document.getElementById("chats__container");
  const li = document.createElement("li");
  const b = document.createElement("b");
  const span = document.createElement("span");
  const firstLetter = username.slice(0, 1).toUpperCase();
  const restLetters = username.slice(1);
  b.innerHTML = `${firstLetter + restLetters}: `;
  span.innerHTML = message;
  li.append(b, span);
  chatsContainer.append(li);

  for (const pair of formData.entries()) {
    document.querySelector(`input[name=${pair[0]}]`).value = "";
    document.querySelector(`input[name=${pair[0]}]`).blur();
  }
}
