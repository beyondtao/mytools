import "./style.css";

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-900 text-white p-4">
      <h1 class="text-xl font-bold mb-4">🧰 Tools</h1>

      <ul class="space-y-2">
        <li class="cursor-pointer rounded px-2 py-1 hover:bg-gray-800 hover:text-blue-300">
          Barcode Generator
        </li>
        <li class="cursor-pointer rounded px-2 py-1 hover:bg-gray-800 hover:text-blue-300">
          QR Code
        </li>
      </ul>
    </aside>

    <!-- Main -->
    <main class="flex-1 bg-gray-100 p-6">
      <h2 class="text-2xl font-semibold">Welcome</h2>
      <p class="text-gray-600 mt-2">Select a tool from the left.</p>
    </main>
  </div>
`;
