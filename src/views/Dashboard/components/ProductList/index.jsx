import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';

// Externals
import classNames from 'classnames';

// Shared services
import { getProducts } from 'services/product';

// Material helpers
import { withStyles } from '@material-ui/core/styles';

// Material components
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import CircularProgress from '@material-ui/core/CircularProgress';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// Shared components
import Portlet from 'components/Portlet';
import PortletHeader from 'components/PortletHeader';
import PortletLabel from 'components/PortletLabel';
import PortletContent from 'components/PortletContent';
import PortletFooter from 'components/PortletFooter';

// Component styles
import styles from './styles';
import SearchInput from '../../../../components/SearchInput';

const ProductList = ({ classes, className, ...rest }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [productsTotal, setProductsTotal] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);

      const { products, productsTotal } = await getProducts(4);

      setProducts(products);
      setProductsTotal(productsTotal);
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  const renderProducts = () => {
    if (isLoading) {
      return (
        <div className={classes.progressWrapper}>
          <CircularProgress />
        </div>
      );
    }

    if (products.length === 0) {
      return (
        <Typography variant="h6">There are no products available</Typography>
      );
    }

    return (
      <Fragment>
        {products.map((product, i) => (
          <div
            className={classes.product}
            key={i}
          >
            <div className={classes.productImageWrapper}>
              <img
                alt="Product Name"
                className={classes.productImage}
                src={product.imageUrl}
              />
            </div>
            <div className={classes.productDetails}>
              <Link to={`/products/${product.id}`}>
                <Typography
                  className={classes.productTitle}
                  variant="h5"
                >
                  {product.title}
                </Typography>
              </Link>
              <Typography
                className={classes.productTimestamp}
                variant="body2"
              >
                Updated 5hr ago
              </Typography>
            </div>
            <div>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </div>
        ))}
      </Fragment>
    );
  };

  const rootClassName = classNames(classes.root, className);

  return (
    <Portlet
      {...rest}
      className={rootClassName}
    >
      <PortletHeader noDivider>
        <PortletLabel
          subtitle={`${productsTotal} in total`}
          title="Product Sell"
        />
        <SearchInput />
      </PortletHeader>
      <PortletContent className={classes.portletContent}>
        {renderProducts()}
      </PortletContent>
      <PortletFooter className={classes.portletFooter}>
        <Button
          color="primary"
          variant="text"
        >
          View all <ArrowRightIcon />
        </Button>
      </PortletFooter>
    </Portlet>
  );
};

export default withStyles(styles)(ProductList);