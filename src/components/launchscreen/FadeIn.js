import {useSpring, animated} from 'react-spring'
import logo from '../../assets/logo.png';

function FadeIn() {
  const props = useSpring({opacity: 1, from: {opacity: 0}, delay: 1000})
  return <animated.div style={props}>
      <img className="margin-img" src={logo} alt="logo" />
  </animated.div>
}

export default FadeIn;