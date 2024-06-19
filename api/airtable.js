const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const apiKey = 'sk-proj-FylWBJdtCj0Jfp2sH4aMT3BlbkFJM8jTsXAh4MI6b5BJN1uB'; // Guarda l'API Key com una variable d'entorn
  const baseId = 'appo7jeZiBUGhhFLQ';
  const tableName = 'tbl6xCBtl9pKaGzwm'; // El nom de la taula

  const url = `https://api.airtable.com/v0/${baseId}/${tableName}`;

  const headers = {
    Authorization: `Bearer ${apiKey}`,
  };

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data); // Retorna les dades en format JSON
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
