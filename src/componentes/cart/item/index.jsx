import { Text, View, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../../themes';

const CartItem = ({ id, categoryId, description, stock, price, brand, image, quantity, ...props }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} resizeMode='contain'/>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.name}>{description} {brand}</Text>
                <Text style={styles.price}>USD {price}</Text>
                <Text style={styles.quantity}>Cantidad: {quantity} </Text>
                <Text style={styles.stock}>Stock: {stock}</Text>
                <View style={styles.actionContainer}>
                    <TouchableOpacity style={styles.increaseButton} onPress={() => { }}>
                        <Text style={styles.increaseButtonText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.decreaseButton} onPress={() => { }}>
                        <Text style={styles.decreaseButtonText}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }} style={styles.deleteButton}>
                        <Ionicons name='trash' size={22} color={COLORS.wihte} />
                    </TouchableOpacity>
                </View>
            </View>


        </View>
    )
}

export default CartItem;
