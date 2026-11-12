// Suchseite: Pagefind-Oberfläche starten und den Suchbegriff aus ?s=… übernehmen.
window.addEventListener("DOMContentLoaded", function () {
  var ui = new PagefindUI({
    element: "#site-search",
    showImages: false,
    showSubResults: true,
    resetStyles: false,
    pageSize: 10
  });
  var term = new URLSearchParams(window.location.search).get("s");
  if (term) ui.triggerSearch(term);
});
