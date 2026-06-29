import { FcGoogle } from 'react-icons/fc';
import { LiaStarSolid } from 'react-icons/lia';

import {
	LuPhone,
	LuClock,
	LuDollarSign,
	LuHeart,
	LuLayers2,
	LuMapPinCheckInside,
	LuMedal,
	LuMessageCircle ,
	LuQuote,
	LuShield,
	LuSmile,
	LuStar,
	LuZap,
} from 'react-icons/lu';

export const iconMap = {
	shield: LuShield,
	star: LuStar,
	chat: LuMessageCircle ,

	// cards
	heart: LuHeart,
	clock: LuClock,
	medal: LuMedal,
	usd: LuDollarSign,

	// services
	implants: LuLayers2,
	smile: LuSmile,
	zap: LuZap,

	// testomonies
	stars: LiaStarSolid,
	quote: LuQuote,
	google: FcGoogle,

	// footer 
	location:LuMapPinCheckInside,
	phone: LuPhone,
};
