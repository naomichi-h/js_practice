const lang = document.querySelector("html").lang;

if (lang === "ja") {
  document.querySelector('option[value="test.html"]').selected = true;
} else if (lang === "en") {
  document.querySelector('option[value="test-en.html"]').selected = true;
} else if (lang === "zh") {
  document.querySelector('option[value="test-zh.html"]').selected = true;
}

document.getElementById("form").select.onchange = function () {
  location.href = document.getElementById("form").select.value;
};
