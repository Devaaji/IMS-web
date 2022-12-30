import NextImage from '../nextimage';
import LogoPindadImages from '../../../assets/images/LogoWhite.png';

const PindadLogoWhite = ({ multiplySize = 1, responsive = false }) => {
  const baseWidth = 128 * multiplySize;
  const baseHeight = 88 * multiplySize;
  return (
    <NextImage
      src={LogoPindadImages}
      width={baseWidth}
      height={baseHeight}
      layout={responsive ? 'responsive' : undefined}
      priority
    />
  );
};

export default PindadLogoWhite;
