const toggle = document.querySelector(".toggle");
const togglee = document.querySelector(".togglee");
const icone = document.querySelector(".fa-bars");
const iconT = document.querySelector(".fa-moon");
const list = document.querySelector(".list");
const body = document.querySelector("body");
const p = document.querySelector(".title-right p");
const h3 = document.querySelector(".title-right h3");
const hero = document.querySelector(".hero");
const ulP = document.querySelectorAll(".txt-price > ul >li >a");
const h1 = document.querySelectorAll(".txt-price > h1");
const title = document.querySelector(".title-price> h1");
const shadow = document.querySelector(".shadow-card ");
const pp = document.querySelectorAll(".txt-card > p");
const img = document.querySelector(".img >img");
const pname = document.querySelector(" .text-p >h3");
const position = document.querySelector("span");
const para = document.querySelector("p");
const btnleft = document.querySelector(".left-b");
const btnright = document.querySelector(".right-b");
const carad = document.querySelector(".card-p");
const navigation = document.querySelector(".navagation");
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navigation.classList.add("scrolled");
  } else {
    navigation.classList.remove("scrolled");
  }
});
const people = [
  {
    pname: "ktri",
    position: "IT Manager",
    imgSaruce: "tri1.jpg",
    paragrapht:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt libero, rerum facere quisquam suscipit qui error quibusdam voluptate odit accusantium ab dignissimos tenetur labore magni officiis sunt similique! Non libero ipsum a tempora odit ducimus, vel quibusdam rerum mollitia ipsa, facere numquam beatae, enim quasi ea maiores hic commodi cumque assumenda iste repudiandae totam odio explicabo? Aut magnam alias laboriosam?",
  },
  {
    pname: "Mony",
    position: "IT Manager",
    imgSaruce: "tri3.jpg",
    paragrapht:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt libero, rerum facere quisquam suscipit qui error quibusdam voluptate odit accusantium ab dignissimos tenetur labore magni officiis sunt similique! Non libero ipsum a tempora odit ducimus, vel quibusdam rerum mollitia ipsa, facere numquam beatae, enim quasi ea maiores hic commodi cumque assumenda iste repudiandae totam odio explicabo? Aut magnam alias laboriosam?",
  },
  {
    pname: "Phirun",
    position: "Web Developer",
    imgSaruce: "tri4.jpg",
    paragrapht:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt libero, rerum facere quisquam suscipit qui error quibusdam voluptate odit accusantium ab dignissimos tenetur labore magni officiis sunt similique! Non libero ipsum a tempora odit ducimus, vel quibusdam rerum mollitia ipsa, facere numquam beatae, enim quasi ea maiores hic commodi cumque assumenda iste repudiandae totam odio explicabo? Aut magnam alias laboriosam?",
  },
  {
    pname: "Raksa",
    position: "Designer",
    imgSaruce: "tri5.jpg",
    paragrapht:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt libero, rerum facere quisquam suscipit qui error quibusdam voluptate odit accusantium ab dignissimos tenetur labore magni officiis sunt similique! Non libero ipsum a tempora odit ducimus, vel quibusdam rerum mollitia ipsa, facere numquam beatae, enim quasi ea maiores hic commodi cumque assumenda iste repudiandae totam odio explicabo? Aut magnam alias laboriosam?",
  },
];
const color = ["blue-light-beams_1160-943.avif", "bg2.webp", "bg1.avif"];
const number = Math.floor(Math.random() * color.length);

toggle.addEventListener("click", function () {
  if (icone.classList.contains("fa-bars")) {
    icone.classList.replace("fa-bars", "fa-times");
  } else {
    icone.classList.replace("fa-times", "fa-bars");
  }

  list.classList.toggle("active");
});

window.onload = function () {
  hero.style.backgroundImage =
    "linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(" +
    color[number] +
    ")";
  hero.style.backgroundPosition = "center";
  hero.style.backgroundRepeat = "no-repeat";
  hero.style.backgroundSize = "cover";
};
togglee.addEventListener("click", function () {
  const isSwitchOn = togglee.classList.contains("switch");
  togglee.classList.toggle("switch");
  if (iconT.classList.contains("fa-moon")) {
    iconT.classList.replace("fa-moon", "fa-sun");
  } else {
    iconT.classList.replace("fa-sun", "fa-moon");
  }
  body.classList.toggle("mode");
  p.classList.toggle("mode");
  h3.classList.toggle("mode");
  para.classList.toggle("mode");
  ulP.forEach((a) => a.classList.toggle("bg"));
  h1.forEach((h) => h.classList.toggle("bg"));
  title.classList.toggle("bg");
  shadow.classList.toggle("bg");
  pp.forEach((p) => {
    p.style.color = isSwitchOn ? "black" : "white";
  });
});

window.addEventListener("DOMContentLoaded", function () {
  const randomNumber = Math.floor(Math.random() * people.length);
  show(randomNumber);
});

let counter = 0;
show = function (p) {
  const person = people[p];
  img.src = person.imgSaruce;
  pname.textContent = person.pname;
  position.textContent = person.position;
  para.textContent = person.paragrapht;
};
console.dir(pname);

btnright.addEventListener("click", function () {
  if (counter == people.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  show(counter);
});
btnleft.addEventListener("click", function () {
  if (counter == 0) {
    counter = people.length - 1;
  } else {
    counter--;
  }
  show(counter);
});

// animation

const islide = document.querySelectorAll(".img-slide > img");
const imgslide = document.querySelector(".img-slide");
const prvbtn = document.querySelector(".prv-btn");
const Nbtn = document.querySelector(".N-btn");

let count = 0;
Nbtn.addEventListener("click", next);
function next() {
  islide[count].style.animation = " nextIn 0.5s forwards";
  if (count === islide.length - 1) {
    count = 0;
  } else {
    count++;
  }
  islide[count].style.animation = " In 0.5s forwards";
}
prvbtn.addEventListener("click", prv);
function prv() {
  islide[count].style.animation = " prv 0.5s forwards";
  if (count === 0) {
    count = islide.length - 1;
  } else {
    count--;
  }
  islide[count].style.animation = " P 0.5s forwards";
}

function autoslid() {
  deleteInterval = setInterval(function () {
    next();
  }, 2000);
}
autoslid();
imgslide.addEventListener("mouseover", function () {
  clearInterval(deleteInterval);
});
imgslide.addEventListener("mouseleave", function () {
  autoslid();
});
let isScrolling;
const $backToTop = $(".back-to-top");

$backToTop.hide();

$(window).scroll(function () {
  clearTimeout(isScrolling);

  $backToTop.fadeIn("slow");

  isScrolling = setTimeout(function () {
    $backToTop.fadeOut("slow");
  }, 1000);
});

$backToTop.click(function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
});
