import path from 'path';
import gateway from 'express-gateway';
//import './user';
//import './tes';
import './webhook';

gateway()
  .load(path.join(__dirname, 'config'))
  .run();
 
