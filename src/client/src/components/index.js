import Generic from './meta/Generic';
import Loading from './Loading';
import Template from './Template';
import _About from './Footer/About';
import _Dashboard from './Dashboard';
import _Donate from './Footer/Donate';
import _Four04 from './Four04';
import _Landing from './Landing';
import _Login from './Login';
import _Support from './Footer/Support';

export const Dashboard = Generic(_Dashboard);
export const About = Generic(_About);
export const Donate = Generic(_Donate);
export const Four04 = Generic(_Four04);
export const Landing = Template(_Landing);
export const Login = Generic(_Login);
export const Support = Generic(_Support);

/**
 * because the Loading component is used in PersistGate (in App.js),
 * which is outside of BrowserRouter,
 * and the Generic component has a Link component in the Header component,
 * the Loading copmonent cannot be wrapped in the Generic component
 */
export { Loading };
