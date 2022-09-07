import aicon from '../../assets/img/Notification-icon.svg'

import './styles.css'

function NotificationButton() {
    return (
        <div className="dsmeta-red-btn">
            <img src={aicon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton
