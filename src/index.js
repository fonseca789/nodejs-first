import express from 'express';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import indexRouter from './routers/index.js';
const app = express();

const __dirname= dirname(fileURLToPath(import.meta.url));
app.set('views', join(__dirname, 'views'));    // to set views directory
app.set('view engine', 'ejs');
app.use(express.static('public'));  // to serve static files
app.use('/', indexRouter);
app.use(express.static(join(__dirname, 'public')));  // to serve static files

app.listen(process.port || 3000, () => {
  console.log('Server is running on http://localhost:'+ process.port || 3000);
}); 
 