// Filter für die eingefrorene Bibliographie: blendet Einträge aus, die den Suchtext nicht enthalten.
document.addEventListener("DOMContentLoaded", function () {
  var input = document.getElementById("bib-filter-input");
  var count = document.getElementById("bib-filter-count");
  var entries = Array.prototype.slice.call(document.querySelectorAll(".zp-Entry"));
  if (!input || !entries.length) return;
  var texts = entries.map(function (e) { return e.textContent.toLowerCase(); });
  function apply() {
    var words = input.value.toLowerCase().split(/\s+/).filter(Boolean);
    var shown = 0;
    entries.forEach(function (e, i) {
      var hit = words.every(function (w) { return texts[i].indexOf(w) !== -1; });
      e.style.display = hit ? "" : "none";
      if (hit) shown++;
    });
    count.textContent = words.length ? shown + " von " + entries.length + " Einträgen" : entries.length + " Einträge";
  }
  input.addEventListener("input", apply);
  apply();
});
