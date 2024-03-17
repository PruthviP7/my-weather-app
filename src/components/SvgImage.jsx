const SvgImage = ({ src, ...rest }) => {
  return <img src={src} alt="" {...rest} />;
};

export default SvgImage;
