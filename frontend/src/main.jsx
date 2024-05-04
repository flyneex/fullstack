import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import Dashboard from './components/admin/Dashboard.jsx'
import Products from './components/admin/Products.jsx'
import Summary from './components/admin/Summary.jsx'
import Users from './components/admin/Users.jsx'
import CartPage from './components/shop/CartPage.jsx'
import FilteredPage from './components/shop/FilteredPage.jsx'
import Login from './components/shop/Login.jsx'
import Register from './components/shop/Register.jsx'
import SingleProduct from './components/shop/SingleProduct.jsx'
import { UserProvider } from './context/UserContext.jsx'
import './index.css'
import Blog from './screens/Blog.jsx'
import NotFound404 from './screens/NotFound404'
import Page from './screens/Page'
import Project from './screens/Project'
import Shop from './screens/Shop.jsx'
import store from './store/store.js'

const router = createBrowserRouter([
	{
		path: '*',
		element: <NotFound404 />,
	},
	{
		path: '/',
		element: <App />,
	},
	{
		path: 'page',
		element: <Page />,
	},
	{
		path: 'project/:slug',
		element: <Project />,
	},
	{
		path: 'blog',
		element: <Blog />,
	},
	{
		path: ':category/:id',
		element: <SingleProduct />,
	},
	{
		path: 'shop/:category',
		element: <FilteredPage />,
	},
	{
		path: 'shop',
		element: <Shop />,
	},
	{
		path: 'login',
		element: <Login />,
	},
	{
		path: 'checkout',
		element: <CartPage />,
	},
	{
		path: 'register',
		element: <Register />,
	},
	{
		path: '/admin',
		element: <Dashboard />,
		children: [
			{
				path: 'summary',
				element: <Summary />,
			},
			{
				path: 'users',
				element: <Users />,
			},
			{ path: 'products', element: <Products /> },
		],
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<UserProvider>
				<RouterProvider router={router}>
					<App />
				</RouterProvider>
			</UserProvider>
		</Provider>
	</React.StrictMode>
)
