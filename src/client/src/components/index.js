import Loading from './Loading';
import Template from './Template';
import _About from './Footer_old/About';
import _Dashboard from './Dashboard';
import _Donate from './Footer_old/Donate';
import _Four04 from './Four04';
import _Landing from './Landing';
import _Login from './Login';
import _Support from './Footer_old/Support';

export const Dashboard = Template(_Dashboard);
export const About = Template(_About);
export const Donate = Template(_Donate);
export const Four04 = Template(_Four04);
export const Landing = Template(_Landing);
export const Login = Template(_Login);
export const Support = Template(_Support);

/**
 * because the Loading component is used in PersistGate (in App.js),
 * which is outside of BrowserRouter,
 * and the Template component has a Link component in the Header component,
 * the Loading copmonent cannot be wrapped in the Template component
 */
export { Loading };
