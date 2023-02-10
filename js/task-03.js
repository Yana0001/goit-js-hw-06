// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);
const imgEl = images.reduce(
  (acc, index) =>
    acc +
    `<li><img src ="${index.url}" alt ="${index.alt}" width = "300" height = "230"></li>`,
  ""
);

galleryEl.insertAdjacentHTML("afterbegin", imgEl);
console.log(galleryEl);

// varII
// const gallery = document.querySelector(".gallery");
// console.log(gallery);
// const imgEl = images.forEach((image) => {
//   gallery.insertAdjacentHTML(
//     "afterbegin",
//     `<li><img src="${image.url}" alt="${images.alt}" width = "150" height = "100"></li>`
//   );
// });
