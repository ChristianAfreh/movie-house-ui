
import BrandLogo from './BrandLogo';
import MenuList from './MenuList';

export default function LeftSidebar() {
  return (
    <div className="h-screen col-span-1 pt-15 flex flex-col align-center pb-4">
      <BrandLogo />
      <MenuList />
    </div>
  )
}
