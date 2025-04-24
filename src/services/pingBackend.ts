const API_URL = 'http://localhost:3000'; // ou seu IP/local onde o back roda

export async function pingBackend() {
  try {
    const response = await fetch(`${API_URL}/ping`);
    
    if (response.ok) {
      console.log('%c✅ Back-end está online!', 'color: green');
    } else {
      console.warn(`⚠️ Back-end respondeu com erro: ${response.status}`);
    }
  } catch (err) {
    console.error('❌ Não foi possível conectar ao back-end:', err);
  }
}
