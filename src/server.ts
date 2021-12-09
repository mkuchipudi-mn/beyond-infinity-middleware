process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import ModelnAuthRoute from '@routes/modeln/auth.route';
import NotificationRoute from '@routes/modeln/notification.route';
import SearchCardsRoute from '@routes/modeln/searchcards.route';


validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute(),
new ModelnAuthRoute(), new NotificationRoute(), new SearchCardsRoute()]);

app.listen();
