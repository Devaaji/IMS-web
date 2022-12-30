import NextImage from '../nextimage';
import LogoIMS from '../../../assets/images/logoIMS.png';

const IMSLogo = ({ multiplySize = 1, responsive = false }) => {
  const baseWidth = 50 * multiplySize;
  const baseHeight = 50 * multiplySize;
  return (
    <NextImage
      src={LogoIMS}
      width={baseWidth}
      height={baseHeight}
      layout={responsive ? 'responsive' : undefined}
      priority
    />
  );
};

export default IMSLogo;
