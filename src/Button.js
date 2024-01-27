import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) { 
  return <button className={styles.btn}>{text}</button>
}//랜덤한 class 이름을 가지므로 동일한 클래스 이름을 사용할 수 있음
Button.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Button;