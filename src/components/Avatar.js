const sizeMapping = {
  sm: 'w-8 h-8',
  base: 'w-12 h-12',
  lg: 'w-16 h-16',
}

function Avatar(props) {
  const { size = 'base', className, ...restProps } = props;
  return <img src="https://secure.meetupstatic.com/photos/member/6/6/6/7/thumb_256046215.jpeg" {...restProps} className={`rounded-full ${sizeMapping[size]} ${className}`} />;
}

export default Avatar;
