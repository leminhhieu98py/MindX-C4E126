const URL = "https://5f749eab1cf3c900161cd568.mockapi.io/api/hello";
const submitBtn = document.getElementById("submit");
const updateBtn = document.getElementsByClassName("update");

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

async function updateData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

const dataFromUserInput = {
  createdAt: new Date(),
  name: "Mai",
  interests: ["basketball", "soccer", "dogs"],
  body: {
    height: "1m67",
    weight: "63",
    skinColor: "brown",
  },
};

submitBtn.addEventListener("click", function () {
  console.log(URL, dataFromUserInput);
  postData(URL, dataFromUserInput);
});


for (let i = 0; i < updateBtn.length; i++) {
    updateBtn[i].addEventListener("click", function (e) {
    const id = e.target.dataset.id
    const updateURL = URL + "/" + id
    console.log(id);
    console.log(updateURL, dataFromUserInput);
    updateData(updateURL, dataFromUserInput);
  });
}
