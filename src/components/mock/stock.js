import ekosPerfume from '../../assets/ekos-perfume.jpg';
import cremaEkos from '../../assets/crema-natura.webp';
import kitLimpieza from '../../assets/kit-limpieza.jpg';
import desodorante from '../../assets/desodorante-roll.jpg';

const stock = [
    {
        id: 1,
        name: 'Pulpa Manos Castaña',
        description: 'Crema Ekos Natura de 75g',
        price: 3000,
        prod_img: cremaEkos,
        category: 'cremas',
        stock: 5,
    },
    {
        id: 2,
        name: 'Ekos Alma Femenino',
        description: 'Perfuma de alta gama',
        price: 13000,
        prod_img: ekosPerfume,
        category: 'perfumes',
        stock: 8,
    },
    {
        id: 3,
        name: 'Kit Limpieza + tónico Chronos',
        description: 'Escencial para tu cuidado diario',
        price: 4060,
        prod_img: kitLimpieza,
        category: 'limpieza',
        stock: 10,
    },
    {
        id: 4,
        name: 'Desodorante roll on aclarador',
        description: 'Desodorante en roll',
        price: 790,
        prod_img: desodorante,
        category: 'limpieza',
        stock: 3,
    },
];

export default stock;
