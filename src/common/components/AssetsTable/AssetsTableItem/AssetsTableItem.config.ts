import {AssetsItem} from './AssetsTableItem.types';
import iconsObj from 'assets/icons/iconsObj';
import RoutePath from 'common/modules/routing/routing.enums';

const menuItems: AssetsItem[] = [
  {
    title: 'divider',
    isDivider: true,
  },
  {
    secondaryPricePercentTitle: 15.32,
    link: `${RoutePath.Asset}`,
    secondaryTitle: 'usdtSecondary',
    valueSecondaryTitle: 8310072.32,
    pricePercentDollar: 163.63,
    iconInfoPage: iconsObj.usdt,
    icon: iconsObj.assetsUsdt,
    valueTitle: 8310072.32,
    valueIsMinus: false,
    priceTitle: 1,
    title: 'usdt',
    percent: 49,
    id: 1,
  },
  {
    title: 'divider',
    isDivider: true,
  },
  {
    secondaryPricePercentTitle: 15.32,
    link: `${RoutePath.Asset}`,
    valueSecondaryTitle: 8310072.32,
    secondaryTitle: 'btcSecondary',
    iconInfoPage: iconsObj.bitcoin,
    icon: iconsObj.assetsBitcoin,
    pricePercentDollar: 163.63,
    valueTitle: 1150066.5,
    priceTitle: 48939.13,
    valueIsMinus: false,
    title: 'btc',
    percent: 24,
    id: 2,
  },
  {
    title: 'divider',
    isDivider: true,
  },
  {
    valueSecondaryTitle: 8310072.32,
    secondaryPricePercentTitle: 15.32,
    link: `${RoutePath.Asset}`,
    iconInfoPage: iconsObj.ethereum,
    secondaryTitle: 'ethSecondary',
    pricePercentDollar: 163.63,
    icon: iconsObj.assetsEth,
    valueTitle: 1150066.5,
    valueIsMinus: true,
    priceTitle: 4303.0,
    title: 'eth',
    percent: 23,
    id: 3,
  },
  {
    title: 'divider',
    isDivider: true,
  },
  {
    secondaryPricePercentTitle: 15.32,
    link: `${RoutePath.Asset}`,
    valueSecondaryTitle: 8310072.32,
    secondaryTitle: 'ufoSecondary',
    pricePercentDollar: 163.63,
    iconInfoPage: iconsObj.ufo,
    icon: iconsObj.assetsUfo,
    valueIsMinus: false,
    valueTitle: 1072.32,
    priceTitle: 28,
    title: 'ufo',
    percent: 1,
    id: 4,
  },
  {
    title: 'divider',
    isDivider: true,
  },
  {
    secondaryPricePercentTitle: 15.32,
    valueSecondaryTitle: 8310072.32,
    link: `${RoutePath.Asset}`,
    secondaryTitle: 'gelSecondary',
    pricePercentDollar: 163.63,
    iconInfoPage: iconsObj.gel,
    icon: iconsObj.assetsGel,
    valueIsMinus: false,
    valueTitle: 1072.32,
    priceTitle: 29.53,
    title: 'gel',
    percent: 1,
    id: 5,
  },
  {
    title: 'divider',
    isDivider: true,
  },
  {
    secondaryPricePercentTitle: 15.32,
    link: `${RoutePath.Asset}`,
    valueSecondaryTitle: 8310072.32,
    secondaryTitle: 'cqtSecondary',
    pricePercentDollar: 163.63,
    iconInfoPage: iconsObj.cqt,
    icon: iconsObj.assetsCqt,
    valueTitle: 1072.32,
    valueIsMinus: true,
    priceTitle: 11.45,
    title: 'cqt',
    percent: 1,
    id: 6,
  },
  {
    title: 'divider',
    isDivider: true,
  },
  {
    secondaryPricePercentTitle: 15.32,
    valueSecondaryTitle: 8310072.32,
    secondaryTitle: 'ftmSecondary',
    link: `${RoutePath.Asset}`,
    pricePercentDollar: 163.63,
    iconInfoPage: iconsObj.ftm,
    icon: iconsObj.assetsFtm,
    valueTitle: 1072.32,
    valueIsMinus: false,
    priceTitle: 53.89,
    title: 'ftm',
    percent: 1,
    id: 7,
  },
  {
    title: 'divider',
    isDivider: true,
  },
  {
    secondaryPricePercentTitle: 15.32,
    secondaryTitle: 'maticSecondary',
    valueSecondaryTitle: 8310072.32,
    iconInfoPage: iconsObj.poligon,
    link: `${RoutePath.Asset}`,
    pricePercentDollar: 163.63,
    icon: iconsObj.assetsMatic,
    valueIsMinus: false,
    valueTitle: 1072.32,
    priceTitle: 73.89,
    title: 'matic',
    percent: 1,
    id: 8,
  },
];

export {menuItems};
