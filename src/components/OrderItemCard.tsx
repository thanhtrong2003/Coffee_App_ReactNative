import { Image, ImageProps, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';

interface OrderItemCardProps {
  type: string;
  name: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  prices: any;
  ItemPrice: string;
}
const OrderItemCard: React.FC<OrderItemCardProps> = ({
  type,
  name,
  imagelink_square,
  special_ingredient,
  prices,
  ItemPrice,
}) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
      style={styles.CardLinearGradient}
    >
      <View style={styles.CardInfoContainer}>
        <View style={styles.CardImageInfoContainer}>
          <Image source={imagelink_square} style={styles.Image} />
          <View>
            <Text style={styles.CardTitle}>{name}</Text>
            <Text style={styles.CardSubTitle}>{special_ingredient}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.CardCurrency}>$
            <Text style={styles.CardPrice}>{ItemPrice}</Text>
          </Text>
        </View>
      </View>

      {prices.map((data: any, index: any) => (
        <View key={index.toString()} style={styles.CardTableRow}>
          <View style={styles.CardTableRow}>
            <View style={styles.SizeBoxLeft}>
              <Text style={[styles.SizeText, {
                fontSize: type == 'Bean'
                  ? FONTSIZE.size_12 : FONTSIZE.size_14,
              }]}>
                {data.size}
              </Text>
            </View>
            <View style={styles.SizeBoxRight}>
              <Text style={styles.Currency}>{data.currency} <Text style={styles.Price}>{data.price}</Text></Text>
            </View>
          </View>

          <View style={styles.CardTableRow}>
            <Text style={styles.CardQuantityPriceText}>X
              <Text style={styles.Price}>{data.quantity}</Text>
            </Text>

            <Text style={styles.CardQuantityPriceText}>
              $ {(data.quantity * data.price).toFixed(2).toString()}
            </Text>
          </View>
        </View>
      ))}
    </LinearGradient>
  );
};



const styles = StyleSheet.create({
  CardLinearGradient: {
    borderRadius: BORDERRADIUS.radius_25,
    gap: SPACING.space_20,
    padding: SPACING.space_20,
  },
  CardInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  CardImageInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_20,

  },
  Image: {
    height: 90,
    width: 90,
    borderRadius: BORDERRADIUS.radius_15,
  },
  CardTitle: {
    fontSize: FONTSIZE.size_18,
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,

  },
  CardSubTitle: {
    fontSize: FONTSIZE.size_12,
    fontFamily: FONTFAMILY.poppins_regular,
    color: COLORS.secondaryLightGreyHex,

  },
  CardCurrency: {
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_20,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  CardPrice: {
    color: COLORS.primaryWhiteHex,
  },
  CardTableRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  SizeBoxLeft: {
    backgroundColor: COLORS.primaryBlackHex,
    flex: 1,
    borderTopLeftRadius: BORDERRADIUS.radius_10,
    borderBottomLeftRadius: BORDERRADIUS.radius_10,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: COLORS.primaryGreyHex,
  },
  SizeText: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.secondaryLightGreyHex,
  },
  SizeBoxRight: {
    backgroundColor: COLORS.primaryBlackHex,
    flex: 1,
    borderTopRightRadius: BORDERRADIUS.radius_10,
    borderBottomRightRadius: BORDERRADIUS.radius_10,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: COLORS.primaryGreyHex,
  },

  Currency: {
    fontSize: FONTSIZE.size_18,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryOrangeHex,
  },
  CardQuantityPriceText: {
    textAlign: 'center',
    flex: 1,
    fontSize: FONTSIZE.size_18,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryOrangeHex,

  },
  Price: {
   color: COLORS.secondaryLightGreyHex,
  },
});
export default OrderItemCard;