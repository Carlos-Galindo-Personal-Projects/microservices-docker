const services = [
    {
        route: '/users',
        target: 'http://microservices-docker-users-1:3001/users',
    },
    {
        route: '/products',
        target: 'http://microservices-docker-products-1:3002/products',
    },
    {
        route: '/categories',
        target: 'http://microservices-docker-products-1:3002/categories',
    }
]

export default services;
