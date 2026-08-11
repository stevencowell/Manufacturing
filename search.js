(function () {
  // Student-facing task pages searched from the hub and learning modules.
  const pages = [
    "Task 1 Modules/Observation Checklist Task 1 - Manufacturing.html",
    "Task 1 Modules/Task1 tutorial - Manufacturing.html",
    "Task 1 Modules/module1.html",
    "Task 1 Modules/module2.html",
    "Task 1 Modules/module3.html",
    "Task 1 Modules/task1_index.html",
    "Task 2 Modules/Observation Checklist Task 2 - Manufacturing.html",
    "Task 2 Modules/Task2 tutorial - Manufacturing.html",
    "Task 2 Modules/module1.html",
    "Task 2 Modules/module2.html",
    "Task 2 Modules/module3.html",
    "Task 2 Modules/module4.html",
    "Task 2 Modules/module5.html",
    "Task 2 Modules/module6.html",
    "Task 2 Modules/task2_index.html",
    "module1.html",
    "module3.html",
    "module4.html",
    "module5.html",
    "module6.html",
    "task3_index.html"
  ];

  function isHomePage() {
    const path = window.location.pathname || "";
    return /(?:^|\/)index\.html$/.test(path) || path === "/" || path === "";
  }

  function applyPageContextClass() {
    document.documentElement.classList.toggle("is-home", isHomePage());
    document.documentElement.classList.toggle("is-non-home", !isHomePage());
  }

  function injectStyles() {
    if (document.getElementById("search-style")) return;

    const style = document.createElement("style");
    style.id = "search-style";
    style.textContent = `
      #search-container {
        text-align: center;
        margin: 2rem 0;
        position: relative;
        z-index: 20;
      }
      #search-input {
        width: 60%;
        max-width: 320px;
        min-height: 44px;
        padding: 0.65rem 1rem;
        border: 1px solid #9ca3af;
        border-radius: 4px;
        font: inherit;
      }
      #search-input:focus {
        outline: 3px solid rgba(29, 78, 216, 0.25);
        outline-offset: 1px;
        border-color: #1d4ed8;
      }
      #search-btn {
        min-height: 44px;
        padding: 0.65rem 1rem;
        margin-left: 0.5rem;
        background: #1d4ed8;
        color: #fff;
        border: 0;
        border-radius: 4px;
        cursor: pointer;
        font: inherit;
        font-weight: 600;
      }
      #search-btn:hover { background: #1e40af; }
      #search-btn:focus-visible {
        outline: 3px solid rgba(29, 78, 216, 0.35);
        outline-offset: 2px;
      }
      #search-status {
        display: block;
        margin-top: 0.5rem;
      }
      #search-results {
        max-width: 800px;
        margin: 0 auto;
        padding: 0 1rem;
        text-align: left;
      }
      .search-result {
        margin: 0.75rem 0;
        padding: 0.75rem 1rem;
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 6px;
      }
      .search-result a {
        color: #1e3a8a;
        font-weight: 600;
        display: inline-block;
        margin-bottom: 0.25rem;
        text-decoration: underline;
      }
      .search-snippet {
        color: #4b5563;
        font-size: 0.95rem;
        line-height: 1.5;
      }
      .search-muted { color: #6b7280; font-size: 0.9rem; }
      mark { background: #fff3cd; padding: 0 2px; border-radius: 2px; }

      .is-non-home header { position: relative; }
      .is-non-home #search-container {
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
        margin: 0;
        text-align: right;
      }
      .is-non-home #search-input { width: 220px; max-width: 60vw; }
      .is-non-home #search-results {
        position: fixed;
        top: 4.25rem;
        right: 0.75rem;
        width: 360px;
        max-width: 90vw;
        max-height: 60vh;
        overflow: auto;
        margin: 0;
        padding: 0.5rem;
        background: #fff;
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.16);
        z-index: 50;
      }
      .is-non-home #search-results:empty { display: none; }
      .is-non-home #search-status {
        display: inline-block;
        margin-left: 0.75rem;
        color: #fff;
        vertical-align: middle;
      }

      @media (max-width: 640px) {
        .is-home #search-container {
          display: grid;
          gap: 0.75rem;
          padding: 0 0.25rem;
        }
        .is-home #search-input,
        .is-home #search-btn {
          width: 100%;
          max-width: none;
          margin: 0;
        }
        .is-non-home #search-input { width: 52vw; }
        .is-non-home #search-btn { margin-left: 0.25rem; }
        .is-non-home #search-results {
          left: 0.5rem;
          right: 0.5rem;
          width: auto;
          max-width: none;
          max-height: 50vh;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  function ensureSearchUI() {
    const home = isHomePage();
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const mountTarget = home ? (main || document.body) : (header || main || document.body);
    const resultsTarget = main || document.body;

    let container = document.getElementById("search-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "search-container";
    }

    if (home) {
      const overview = main ? main.querySelector(".overview") : null;
      if (overview) {
        if (container.previousElementSibling !== overview) insertAfter(overview, container);
      } else if (container.parentElement !== mountTarget) {
        mountTarget.insertBefore(container, mountTarget.firstChild);
      }
    } else if (container.parentElement !== mountTarget) {
      mountTarget.insertBefore(container, mountTarget.firstChild);
    }

    let input = document.getElementById("search-input");
    if (!input) {
      input = document.createElement("input");
      input.id = "search-input";
      input.type = "search";
      input.placeholder = "Enter keyword...";
      input.setAttribute("aria-label", "Search Manufacturing task content");
      container.appendChild(input);
    }

    let button = document.getElementById("search-btn");
    if (!button) {
      button = document.createElement("button");
      button.id = "search-btn";
      button.type = "button";
      button.textContent = "Search";
      container.appendChild(button);
    }

    let status = document.getElementById("search-status");
    if (!status) {
      status = document.createElement("span");
      status.id = "search-status";
      status.className = "search-muted";
      status.setAttribute("role", "status");
      status.setAttribute("aria-live", "polite");
      container.appendChild(status);
    }

    let results = document.getElementById("search-results");
    if (!results) {
      results = document.createElement("div");
      results.id = "search-results";
      results.setAttribute("aria-live", "polite");
    }
    if (results.parentElement !== resultsTarget) {
      resultsTarget.insertBefore(results, resultsTarget.firstChild);
    }
    if (home && container.parentElement === results.parentElement && container.nextSibling !== results) {
      insertAfter(container, results);
    }

    return { input, button, status, results };
  }

  function getBasePrefix() {
    return /\/Task(?:%20| )\d+/.test(window.location.pathname) ? "../" : "";
  }

  function escapeHtml(value) {
    return value.replace(/[&<>"']/g, function (character) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[character];
    });
  }

  function buildSnippet(text, query, matchIndex) {
    const start = Math.max(0, matchIndex - 80);
    const end = Math.min(text.length, matchIndex + query.length + 80);
    const slice = text.slice(start, end).replace(/\s+/g, " ");
    const index = slice.toLowerCase().indexOf(query);
    const prefix = start > 0 ? "..." : "";
    const suffix = end < text.length ? "..." : "";

    if (index === -1) return prefix + escapeHtml(slice) + suffix;
    return prefix
      + escapeHtml(slice.slice(0, index))
      + "<mark>"
      + escapeHtml(slice.slice(index, index + query.length))
      + "</mark>"
      + escapeHtml(slice.slice(index + query.length))
      + suffix;
  }

  async function fetchMatch(page, query, base) {
    try {
      const url = base + page.split("/").map(encodeURIComponent).join("/");
      const response = await fetch(url);
      if (!response.ok) return null;

      const html = await response.text();
      const doc = new DOMParser().parseFromString(html, "text/html");
      const title = doc.querySelector("title")?.textContent || page.split("/").pop();
      const bodyText = doc.body?.textContent || html;
      const firstIndex = bodyText.toLowerCase().indexOf(query);
      return firstIndex === -1 ? null : { page, title, bodyText, firstIndex };
    } catch (error) {
      return null;
    }
  }

  async function performSearch() {
    const input = document.getElementById("search-input");
    const status = document.getElementById("search-status");
    const results = document.getElementById("search-results");
    if (!input || !results) return;

    const query = input.value.trim().toLowerCase();
    results.innerHTML = "";
    if (!query) {
      if (status) status.textContent = "";
      return;
    }

    if (status) status.textContent = "Searching...";
    const base = getBasePrefix();
    const found = (await Promise.all(pages.map((page) => fetchMatch(page, query, base))))
      .filter(Boolean)
      .sort((a, b) => a.firstIndex - b.firstIndex)
      .slice(0, 20);

    if (status) status.textContent = "";
    if (found.length === 0) {
      results.innerHTML = '<div class="search-muted">No matching content found.</div>';
      return;
    }

    const fragment = document.createDocumentFragment();
    found.forEach(({ page, title, bodyText, firstIndex }) => {
      const item = document.createElement("div");
      item.className = "search-result";

      const link = document.createElement("a");
      link.href = base + page.split("/").map(encodeURIComponent).join("/");
      link.textContent = title;
      item.appendChild(link);

      const snippet = document.createElement("div");
      snippet.className = "search-snippet";
      snippet.innerHTML = buildSnippet(bodyText, query, firstIndex);
      item.appendChild(snippet);
      fragment.appendChild(item);
    });

    results.appendChild(fragment);
  }

  function initialiseSearch() {
    applyPageContextClass();
    injectStyles();
    const { input, button } = ensureSearchUI();
    button.addEventListener("click", performSearch);
    input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") performSearch();
    });
  }

  window.performSearch = performSearch;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initialiseSearch, { once: true });
  } else {
    initialiseSearch();
  }
})();
