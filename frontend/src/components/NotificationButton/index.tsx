import aicon from '../../assets/img/Notification-icon.svg'
import{ toast } from 'react-toastify'
import './styles.css'
import { BASE_URL } from './../../utils/request';
import axios from 'axios';

type Props = {
    saleId: number;
}

function handleClick(id :number){
axios(`${BASE_URL}/sales/${id}/notification`)
.then(Response =>{
    toast.info("SMS enviado com sucesso!");
})
}

function NotificationButton({saleId}: Props) {
    return (
        <div className="dsmeta-red-btn" onClick={()=>handleClick(saleId)}>
            <img src={aicon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton
