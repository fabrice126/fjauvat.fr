import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import Projects from './views/Projects/Projects';
import Resume from './views/Resume/Resume';

const routes = [
	{
		path      : '/',
		component : Home,
		exact     : true,
		key       : '1',
	},
	{
		path      : '/resume',
		component : Resume,
		exact     : true,
		key       : '2',
	},
	{
		path      : '/projects',
		component : Projects,
		exact     : true,
		key       : '3',
	},
	{
		path      : '/contact',
		component : Contact,
		exact     : true,
		key       : '4',
	},
];
export default routes;
