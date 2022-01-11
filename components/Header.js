import Image from "next/image";
import { HomeIcon, BadgeCheckIcon, CollectionIcon, LightningBoltIcon, SearchIcon, UserIcon } from "@heroicons/react/outline"
import HeaderItem from "./HeaderItem";
const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row justify-between items-center m-5">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="HOME" Icon={HomeIcon} />
                <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
                <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
                <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
                <HeaderItem title="SEARCH" Icon={SearchIcon} />
                <HeaderItem title="ACCOUNT" Icon={UserIcon} />
                
            </div>
            <Image src="https://links.papareact.com/ua6" className="object-contain" height={100} width={200} alt="logo" />
        </header>
    )
}

export default Header
