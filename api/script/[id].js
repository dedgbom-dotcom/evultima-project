// api/script/[id].js
export default async function handler(req, res) {
  // Ambil ID dari URL, misal: /api/script/bf10d3b960442ff45c53ce9a2aa618b5
  const { id } = req.query;
  
  // Untuk demo, kita simpan daftar script yang valid (nanti bisa dari database)
  const validScripts = {
    "bf10d3b960442ff45c53ce9a2aa618b5": `-- EvUltima Loader Demo
print("EvUltima loaded successfully!")
-- Script utama untuk game bisa ditambahkan di sini
loadstring([[
  -- contoh script ESP
  print("ESP activated")
]])()
    `,
    "contoh_id_lain": `-- Script untuk game lain`
  };

  if (validScripts[id]) {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(validScripts[id]);
  } else {
    res.status(404).send("Script not found");
  }
}
