import Generic from './meta/Generic';
import Loading from './Loading';
import uAbout from './Footer/About';
import uDashboard from './Dashboard';
import uDonate from './Footer/Donate';
import uFour04 from './Four04';
import uLanding from './Landing';
import uLogin from './Login';
import uSupport from './Footer/Support';

export const Dashboard = Generic(uDashboard);
export const About = Generic(uAbout);
export const Donate = Generic(uDonate);
export const Four04 = Generic(uFour04);
export const Landing = Generic(uLanding);
export const Login = Generic(uLogin);
export const Support = Generic(uSupport);

/**
 * because the Loading component is used in PersistGate (in App.js),
 * which is outside of BrowserRouter,
 * and the Generic component has a Link component in the Header component,
 * the Loading copmonent cannot be wrapped in the Generic component
 */
export { Loading };
