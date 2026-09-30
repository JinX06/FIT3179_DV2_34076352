var chartSpecs = [];

var editorURL = "https://vega.github.io/editor/";
var publishedDataURL = "https://jinx06.github.io/FIT3179_DV2_34076352/";

// Only the Editor copy uses public data URLs; the website keeps relative paths.
function editorSpecification(specification) {
  return JSON.parse(JSON.stringify(specification, function(key, value) {
    return key === "url" && typeof value === "string"
      ? new URL(value, publishedDataURL).href : value;
  }));
}

function addEditorAction(element, specification) {
  var action = document.createElement("a");
  action.textContent = "Open in Vega Editor";
  action.href = editorURL;
  action.target = "_blank";
  action.rel = "noopener";
  action.addEventListener("click", function(event) {
    event.preventDefault();
    var editor = window.open(editorURL, "_blank");
    if (!editor) {
      action.textContent = "Allow popups to open Vega Editor";
      return;
    }
    action.textContent = "Open in Vega Editor";
    var origin = new URL(editorURL).origin;
    var message = {mode: "vega-lite", renderer: "svg", config: {},
      spec: JSON.stringify(editorSpecification(specification), null, 2)};
    var attempts = 0;
    var timer;
    function stop() {
      window.clearInterval(timer);
      window.removeEventListener("message", acknowledge);
    }
    function acknowledge(reply) {
      if (reply.source === editor && reply.origin === origin) stop();
    }
    window.addEventListener("message", acknowledge);
    timer = window.setInterval(function() {
      if (editor.closed || attempts >= 120) {
        stop();
        if (!editor.closed) action.textContent = "Retry opening Vega Editor";
        return;
      }
      editor.postMessage(message, origin);
      attempts += 1;
    }, 250);
  });
  element.querySelector(".vega-actions").appendChild(action);
}

function renderChart(chart) {
  var chartId = chart.chartId;
  var specification = chart.specification;
  vegaEmbed("#" + chartId, specification + "?v=framing-review", {actions: {export: true, source: true, compiled: true, editor: false}, renderer: "svg"})
    .then(function(result) {
      // Keep Vega-Embed's native menu and give its icon an accessible name.
      var element = document.getElementById(chartId);
      var heading = element.parentElement.querySelector(".panel-label") || element.closest("figure").querySelector("h3");
      var summary = element.querySelector("summary");
      summary.setAttribute("aria-label", "Chart actions: " + heading.textContent);
      addEditorAction(element, result.spec);
    })
    .catch(function(error) {
      var element = document.getElementById(chartId);
      element.classList.add("chart-error");
      element.innerText = "This chart could not load. Reload the page to try again.";
      console.error(chartId, error);
    });
}

// This deferred script runs after the HTML containers exist. Vega-Lite handles
// container width, and each specification keeps its fixed chart height.
function renderCharts() {
  chartSpecs.forEach(renderChart);
}

// Vega measures chart text once at startup. Load both real Source Sans weights
// first; either success or a font-file failure starts charts with the CSS fallback.
Promise.all([
  document.fonts.load('400 14px "Source Sans 3"'),
  document.fonts.load('700 14px "Source Sans 3"')
]).then(renderCharts, renderCharts);
