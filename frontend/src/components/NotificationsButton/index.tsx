import axios from 'axios';
import icon from '../../assets/imgs/notification-icon.svg';
import { Props } from '../../models/sale';
import { BASE_URL } from '../../utils/request';
import './style.css'

const handleClick = (id : number) => {
  axios(`${BASE_URL}/sales/${id}/notification`)
  .then((response) => {});
} 

const NotificationButton = ({saleId} : Props) => {
  return (
    <button type="button" className='dsmeta-red-btn' onClick={() => handleClick(saleId)}>
       <img src={icon} alt="Notification" />
    </button>
  )
}

export default NotificationButton;
