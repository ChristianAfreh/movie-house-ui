
import UserAvatar from './UserAvatar';
import { BsBell,BsArrowDown } from 'react-icons/bs';
import styles from '../../styles/UserContainer.module.css';

export default function UserContainer() {
  return (
    <div className={styles.userContainerDiv} >
        <div className="text-2xl text-gray-500"><BsBell /></div>
        <span className="font-bold text-lg text-gray-500">Chris Afreh</span>
        <UserAvatar />
        <button><BsArrowDown /></button>
    </div>
  )
}
