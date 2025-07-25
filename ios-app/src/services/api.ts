const API_BASE_URL = 'http://localhost:8000/api';

export const api = {
  async getUVIndex(lat: number, lng: number) {
    try {
      const response = await fetch(`${API_BASE_URL}/uv-index?lat=${lat}&lng=${lng}`);
      if (!response.ok) throw new Error('Failed to fetch UV index');
      return await response.json();
    } catch (error) {
      console.error('Error fetching UV index:', error);
      return getMockUVData();
    }
  },

  async getSatelliteData(lat: number, lng: number) {
    try {
      const response = await fetch(`${API_BASE_URL}/satellite/data?lat=${lat}&lng=${lng}`);
      if (!response.ok) throw new Error('Failed to fetch satellite data');
      return await response.json();
    } catch (error) {
      console.error('Error fetching satellite data:', error);
      return getMockSatelliteData();
    }
  },
};

function getMockUVData() {
  return {
    result: {
      uv: 6.5,
      uv_time: new Date().toISOString(),
      uv_max: 8.2,
      ozone: 320,
      safe_exposure_time: {
        st1: 45,
        st2: 60,
        st3: 75,
        st4: 90,
        st5: 120,
        st6: 150,
      },
    },
  };
}

function getMockSatelliteData() {
  return {
    vegetationHealth: 75 + Math.random() * 20,
    waterStress: 20 + Math.random() * 30,
    soilMoisture: 40 + Math.random() * 40,
    cropYield: 60 + Math.random() * 30,
    pestRisk: 10 + Math.random() * 40,
    diseaseRisk: 15 + Math.random() * 35,
  };
}
