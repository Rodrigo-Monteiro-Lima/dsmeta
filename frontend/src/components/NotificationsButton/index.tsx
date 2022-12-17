import icon from '../../assets/imgs/notification-icon.svg';
import './style.css'

const NotificationButton = () => {
  return (
    <button type="button" className='dsmeta-red-btn'>
      <img src={icon} alt="Notification" />
    </button>
  )
}

export default NotificationButton;
