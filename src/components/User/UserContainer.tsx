
import UserAvatar from './UserAvatar';
import { BsBell, BsLockFill, BsMoon } from 'react-icons/bs';
import styles from '../../styles/UserContainer.module.css';

export default function UserContainer() {
  return (
    <div className={styles.userContainerDiv} >
        <button className="rounded-full bg-gray-200 p-4 text-gray-500 text-lg"><BsMoon /></button>
        <button className="rounded-full bg-gray-200 p-4 text-gray-500 text-lg"><BsBell /></button>
        <button className='rounded-full bg-gray-200 p-4 text-gray-500 text-lg'><BsLockFill /></button>
        <UserAvatar />
        
    </div>
  )
}
