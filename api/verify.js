// api/verify.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  const { key, hwid } = req.body;
  
  // Sederhana: cek key statis (nanti ganti dengan database)
  const validKeys = ["FREE123", "PREMIUM456"];
  
  if (validKeys.includes(key)) {
    return res.status(200).json({ 
      valid: true, 
      plan: key === "PREMIUM456" ? "premium" : "free",
      message: "Key valid"
    });
  } else {
    return res.status(401).json({ valid: false, message: "Invalid key" });
  }
}
