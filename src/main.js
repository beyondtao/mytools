import "./style.css";
// 重要 i18n
import { t } from "./i18n";

const tools = [
  { id: "welcome", name: "Welcome" },
  { id: "barcode", name: "Barcode Generator" },
  { id: "qrcode", name: "QR Code" },
];

function renderMain(toolId) {
  if (toolId === "barcode") {
    return `
      <h2 class="text-2xl font-semibold">Barcode Generator</h2>
      <p class="text-gray-600 mt-2">Next step: we will generate a barcode here.</p>

      <div class="mt-6 rounded-xl bg-white p-4 shadow">
        <label class="block text-sm font-medium text-gray-700">Barcode Content</label>
        <input
          class="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring"
          placeholder="e.g. PJ-2026-0001"
        />
        <button class="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-white hover:opacity-90">
          Generate
        </button>
      </div>
    `;
  }

  if (toolId === "qrcode") {
    return `
      <h2 class="text-2xl font-semibold">QR Code</h2>
      <p class="text-gray-600 mt-2">Next step: we will generate a QR code here.</p>

      <div class="mt-6 rounded-xl bg-white p-4 shadow">
        <label class="block text-sm font-medium text-gray-700">Text / URL</label>
        <input
          class="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring"
          placeholder="https://blog.iostao.com"
        />
        <button class="mt-4 rounded-lg bg-gray-900 px-4 py-2 text-white hover:opacity-90">
          Generate
        </button>
      </div>
    `;
  }

  // welcome
  return `
    <h2 class="text-2xl font-semibold">Welcome</h2>
    <p class="text-gray-600 mt-2">Select a tool from the left.</p>

    <div class="mt-6 rounded-xl bg-white p-4 shadow">
      <p class="text-gray-700">
        This is your toolbox hub. We'll plug tools in like LEGO: barcode, QR, printing, labels…
      </p>
    </div>
  `;
}

function renderApp(activeId) {
  return `
    <div class="flex h-screen overflow-hidden">
      <!-- Sidebar -->
      <aside class="w-64 bg-gray-900 text-white p-4">
        <h1 class="text-xl font-bold mb-4">🧰 Tools</h1>

        <ul class="space-y-1">
          ${tools
            .map((t) => {
              const active =
                t.id === activeId
                  ? "bg-gray-800 text-blue-300"
                  : "text-white hover:bg-gray-800 hover:text-blue-300";
              return `
                <li>
                  <button
                    class="w-full text-left rounded-lg px-2 py-2 ${active}"
                    data-tool="${t.id}"
                  >
                    ${t.name}
                  </button>
                </li>
              `;
            })
            .join("")}
        </ul>

        <div class="mt-6 text-xs text-gray-400">
          <p>v0.1</p>
        </div>
      </aside>

      <!-- Main -->
      <main class="flex-1 bg-gray-100 p-6">
        ${renderMain(activeId)}
      </main>
    </div>
  `;
}

const app = document.querySelector("#app");
let activeToolId = "welcome";

function mount() {
  app.innerHTML = renderApp(activeToolId);

  // bind events
  app.querySelectorAll("[data-tool]").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeToolId = btn.dataset.tool;
      mount();
    });
  });
}

mount();
