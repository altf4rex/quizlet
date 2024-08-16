import React from 'react'
import { BurgerMenu } from './BurgerMenu'
import { Logo } from './Logo'
import { SearchInput } from './SearchInput'
import { CreateButton } from './CreateButton'
import { UpgradePremium } from './UpgradePremium'
import { UserAccount } from './UserAccount'

export const TopNavBar = () => {
  return (
    <header className='flex justify-between'>
        <div>
            <BurgerMenu />
            <Logo />
        </div>
        <SearchInput />
        <div>
            <CreateButton />
            <UpgradePremium />
            <UserAccount />
        </div>
    </header>
  )
}
