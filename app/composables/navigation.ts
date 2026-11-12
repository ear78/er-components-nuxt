export const useNavigation = () => {
  // Used for the show/hide scroll navigation
  const showNav = useState('showNav', () => true);
  return { showNav };
};
