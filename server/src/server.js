import 'dotenv/config';
import app from './app.js';
import { connectDB } from './configs/db.js';

const port = process.env.PORT || 5000;

await connectDB();

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
