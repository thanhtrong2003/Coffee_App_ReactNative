import { Dimensions, ImageBackground, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import CustomIcon from './CustomIcon';
import BGIcon from './BGIcon';

const CARD_WIDTH = Dimensions.get('window').width * 0.32;
interface CoffeeCardProps {
  id: string;
  name: string;
  index: number;
  type: string;
  roasted: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  average_rating: string;
  price: any;
  buttonPressHandler: any;
}


const CoffeeCard: React.FC<CoffeeCardProps> = ({
  id,
  name,
  index,
  type,
  roasted,
  imagelink_square,
  special_ingredient,
  average_rating,
  price,
  buttonPressHandler,
}) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.CardLinearGradientContainer}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
    >
      <ImageBackground source={imagelink_square}
        style={styles.CardImageBG}
        resizeMode="cover"
      >
        <View style={styles.CardRatingContainer}>
          <CustomIcon
            name={'star'}
            color={COLORS.primaryOrangeHex}
            size={SPACING.space_18} />
          <Text style={styles.CardRatingText}>{average_rating}</Text>
        </View >
      </ImageBackground>


      <Text style={styles.CardName}>{name}</Text>
      <Text style={styles.CardTitle}>{special_ingredient}</Text>

      <View style={styles.CardFooterRow}>
        <Text style={styles.CardCurrency}>
          $ <Text style={styles.CardPrice}>{price.price}</Text>
        </Text>

        <TouchableOpacity onPress={() => {
          buttonPressHandler({ id, index, type, roasted, imagelink_square, special_ingredient, name, prices: [{ ...price, quantity: 1 }] })
        }}>
          <BGIcon
            color={COLORS.primaryWhiteHex}
            name={'add'}
            BGColor={COLORS.primaryOrangeHex}
            size={FONTSIZE.size_10}
          />
        </TouchableOpacity>
      </View>


    </LinearGradient >
  );
};


const styles = StyleSheet.create({
  CardLinearGradientContainer: {
    padding: SPACING.space_15,
    borderRadius: BORDERRADIUS.radius_25,
  },
  CardImageBG: {
    width: CARD_WIDTH,
    height: CARD_WIDTH,
    borderRadius: BORDERRADIUS.radius_20,
    marginBottom: SPACING.space_15,
    overflow: 'hidden',
  },
  CardRatingContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryGreyHex,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    paddingHorizontal: SPACING.space_10,
    gap: SPACING.space_10,
    borderBottomLeftRadius: BORDERRADIUS.radius_20,
    borderTopRightRadius: BORDERRADIUS.radius_20,
    top: 0,
    right: 0,
  },
  CardRatingText: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_14,
    lineHeight: 22,
  },
  CardName: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_semibold,
  },
  CardTitle: {
    color: COLORS.primaryWhiteHex,
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_10,
  },
  CardFooterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: SPACING.space_10,
  },
  CardCurrency: {
    color: COLORS.primaryOrangeHex,
    fontFamily: FONTFAMILY.poppins_light,
    fontSize: SPACING.space_18,
  },
  CardPrice: {
    color: COLORS.primaryWhiteHex,
  },
});

export default CoffeeCard;