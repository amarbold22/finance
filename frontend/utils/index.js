import { FaHome, FaGift, FaTaxi, FaWineGlassAlt } from "react-icons/fa";

// import { PiForkKnifeFill, PiTShirtFill } from "react-icons/pi";

export const getIcons = (iconName = "home", iconColor = "salmon") => {
  const icons = {
    gift: <FaGift size={30} color={iconColor} />,
    home: <FaHome size={30} color={iconColor} />,
    taxi: <FaTaxi size={30} color={iconColor} />,
    taxi: <FaWineGlassAlt size={30} color={iconColor} />,
  };
  return icons[iconName];
};

export const getCurrencySymbol = (name = "MNT") => {
  const cur = {
    USD: "$",
    MNT: "₮",
    EUR: "€",
    JPY: "¥",
  };
  return cur[name];
};

export const thousandify = (num) => {
  console.log(num);
  return num.toLocaleString(undefined, { maximumFractionDigits: 2 });
};

export const categoryIcons = () => {
  const icons = {
    homeFill: <MdHomeFilled size={30} />,
    home: <FaHome size={30} />,
    badge: <FaIdBadge size={30} />,
    badgeFill: <MdBadge size={30} />,
    friendly: <MdChildFriendly size={30} />,
    intersect: <BsIntersect size={30} />,
    imageFill: <RiImageFill size={30} />,
    mic: <FaMicrophone size={30} />,
    fresh: <FaAirFreshener size={30} />,
    calendar: <FaCalendar size={30} />,
    menuFill: <BsMenuAppFill size={30} />,
    taxi: <FaTaxi size={30} />,
    intersectFill: <PiIntersectFill size={30} />,
    shoppingBag: <MdOutlineShoppingBag size={30} />,
    deliveryDrone: <GiDeliveryDrone size={30} />,
    fiveFill: <PiNumberFiveFill size={30} />,
    sevenFill: <PiNumberCircleSevenFill size={30} />,
    road: <FaRoad size={30} />,
    hourGlass: <MdHourglassTop size={30} />,
    orangeFill: <PiOrangeSliceFill size={30} />,
    globe: <BsGlobe size={30} />,
    peace: <FaPeace size={30} />,
    pencil: <BiPencil size={30} />,
    examFill: <PiExamFill size={30} />,
    watchFill: <PiWatchFill size={30} />,
    bus: <FaBusAlt size={30} />,
    question: <PiQuestionFill size={30} />,
    leaf: <PiLeafFill size={30} />,
    ladder: <PiLadderFill size={30} />,
  };

  return icons;
};