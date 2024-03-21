const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Project_Countries', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const countrySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: Number,
  name: String,
  iso3: String,
  iso2: String,
  numeric_code: String,
  phone_code: String,
  capital: String,
  currency: String,
  currency_name: String,
  currency_symbol: String,
  tld: String,
  native: String,
  region: String,
  region_id: String,
  subregion: String,
  subregion_id: String,
  nationality: String,
});

const Country = mongoose.model('Country', countrySchema);

app.get('/api/countries/:name', async (req, res) => {
  const { name } = req.params;
  console.log(`Fetching data for name: ${name}`);

  try {
    const country = await Country.findOne({ name });
    console.log('Fetched data:', country);
    res.json({ data: country ? country : null });
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/countries/:name', async (req, res) => {
  const { name } = req.params;
  const { population, capital, language } = req.body;

  try {
    await Country.updateOne(
      { name },
      { $set: { population, capital, language } },
      { upsert: true }
    );
    res.json({ success: true });
  } catch (error) {
    console.error('Error updating data in MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
