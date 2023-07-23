import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart/cart.slice';

function ProductDetail({ route }) {
    const dispatch = useDispatch();
    const PRODUCTS = useSelector((state) => state.products.data)
    const { color, productId } = route.params;
    const product = PRODUCTS.find((product) => product.id === productId);
    const onAddToCart = () => {
        dispatch(addToCart(product));
    };
    return (
        <View style={styles.container}>
            <View style={[styles.containerImage, { backgroundColor: color }]}>
                <Image source={{ uri: product.image }} style={styles.image} resizeMode='contain' />
            </View>
            <View style={styles.content}>
                <Text style={styles.textDescription}>{product.resume}</Text>
                <Text style={styles.priceText}>USD {product.price}</Text>
                <Text style={styles.stockText}>Stock: {product.stock}</Text>


                <View style={styles.containerButton}>
                    <TouchableOpacity onPress={onAddToCart} style={styles.addToCartButton}>
                        <Text style={styles.addToCartText}>Agregar al carrito</Text>
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    )
}

export default ProductDetail;