import iconsObj from 'assets/icons/iconsObj';
import {SocialLink} from './SocialLinks.types';
import RoutePath from 'common/modules/routing/routing.enums';

const socialLinks: SocialLink[] = [
  {
    link: RoutePath.Discord,
    icon: iconsObj.discord,
    isExternal: true,
  },
  {
    link: RoutePath.Github,
    icon: iconsObj.github,
    isExternal: true,
  },
  {
    link: RoutePath.Twitter,
    icon: iconsObj.twitter,
    isExternal: true,
  },
];

export {socialLinks};
