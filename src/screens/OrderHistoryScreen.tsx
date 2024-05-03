import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useStore } from '../store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/EmptyListAnimation';
import PopUpAnimation from '../components/PopUpAnimation';
import OrderHistoryCard from '../components/OrderHistoryCard';


const OrderHistoryScreen = ({ navigation }: any) => {
  const OrderHistoryList = useStore((state: any) => state.OrderHistoryList);
  const tabBarHeight = useBottomTabBarHeight();
  const [showAnimation, setShowAnimation] = useState(false);
  const navigationHandler = ({ index, id, type }: any) => {
    navigation.push('Details',
      { index, id, type }
    );
  };
  const buttonPressHandler = () => {
    setShowAnimation(true);
    setTimeout(() => {
      setShowAnimation(false);
    }, 2000);
  };

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />

      {showAnimation ? <PopUpAnimation style={styles.LottieAnimation} source={require('../lottie/download.json')} /> : <></>}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <View style={[styles.ScrollViewInnerView,
        { marginBottom: tabBarHeight }
        ]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title="Order History" />
            {OrderHistoryList.length == 0 ? (
              <EmptyListAnimation title={'No order history here'} />
            ) : (
              <View style={styles.ListItemContainer}>
                {OrderHistoryList.map((data: any, index: any) => (
                  <OrderHistoryCard
                    key={index.toString()}
                    navigationHandler={navigationHandler}
                    CartList={data.CartList}
                    CartListPrice={data.CartListPrice}
                    OrderDate={data.OrderDate}
                  />
                ))}
              </View>)}
          </View>

          {OrderHistoryList.length > 0 ?
            <TouchableOpacity style={styles.ButtonDownLoad} onPress={() => {
              buttonPressHandler();
            }}>
              <Text style={styles.ButtonText}>DownLoad</Text>
            </TouchableOpacity>
            : <></>}
        </View>
      </ScrollView>
    </View>
  )
}



const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  LottieAnimation: {
    height: 250,
  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  ItemContainer: {
    flex: 1,
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,
  },
  ButtonDownLoad: {
    backgroundColor: COLORS.primaryOrangeHex,
    height: SPACING.space_36 * 2,
    borderRadius: BORDERRADIUS.radius_20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: SPACING.space_20,
  },
  ButtonText: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  }
});
export default OrderHistoryScreen;