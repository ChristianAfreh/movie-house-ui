
import Avatar from 'react-avatar';
import avatarImg from '../../assets/avatarImg/alexander-avatar.jpg'

export default function UserAvatar() {
  return (
    <div className="py-1 px-1">
        <Avatar name="Chris Afreh" src={avatarImg} color="grey" round={true} size="50px"/>
    </div>
  )
}
