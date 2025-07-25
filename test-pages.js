// Script para testar todas as páginas do sistema
const fetch = require('node-fetch');

const pages = [
  'http://localhost:8000',
  'http://localhost:8000/dashboard',
  'http://localhost:8000/satellite',
  'http://localhost:8000/weather-dashboard',
  'http://localhost:8000/water-history',
  'http://localhost:8000/satellite-enhanced'
];

async function testPages() {
  console.log('🧪 Testando todas as páginas...\n');
  
  for (const page of pages) {
    try {
      const response = await fetch(page);
      console.log(`✅ ${page} - Status: ${response.status}`);
    } catch (error) {
      console.log(`❌ ${page} - Erro: ${error.message}`);
    }
  }
  
  console.log('\n✅ Teste concluído!');
}

testPages();
