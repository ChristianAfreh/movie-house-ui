
import UserAvatar from './UserAvatar';
import { BsBell, BsLockFill } from 'react-icons/bs';
import { RiMoonClearFill } from 'react-icons/ri';
import styles from '../../styles/UserContainer.module.css';

export default function UserContainer() {
  return (
    <div className={styles.userContainerDiv} >
        <button className="rounded-full bg-gray-200 p-4 text-gray-500 text-lg"><RiMoonClearFill /></button>
        <button className="rounded-full bg-gray-200 p-4 text-gray-500 text-lg"><BsBell /></button>
        <button className='rounded-full bg-gray-200 p-4 text-gray-500 text-lg'><BsLockFill /></button>
        <button><UserAvatar /></button>
        
    </div>
  )
}
