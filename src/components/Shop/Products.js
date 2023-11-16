import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {id: 'p1', price: 6, title:'helo', description:'loremIpsum'},
  {id: 'p2', price: 26, title:'halo', description:'loremIpsum2'},
]

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(item => (
          <ProductItem
            key={item.id}
            title={item.title}
            price={item.price}
            id={item.id}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
