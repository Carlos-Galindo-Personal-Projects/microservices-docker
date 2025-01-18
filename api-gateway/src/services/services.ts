const services = [
    {
        route: '/users',
        target: 'http://localhost:3001/users',
    },
    {
        route: '/products',
        target: 'http://localhost:3002/products',
    },
    {
        route: '/categories',
        target: 'http://localhost:3002/categories',
    }
]

export default services;
