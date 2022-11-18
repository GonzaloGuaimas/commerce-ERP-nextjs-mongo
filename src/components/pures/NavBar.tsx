import React from 'react'
import { Menubar } from 'primereact/menubar'
import { Button } from 'primereact/button'
import Image from 'next/image'
import { useRouter } from 'next/router'

export const NavBar = () => {
  const router = useRouter()
  const navToPage = (route: any) => {
    void router.push(route)
  }
  const MenuItems = () => {
    return (
        <div>
            <Button className='p-button-danger p-button-text' onClick={() => { navToPage('/orders') }}><Image alt={''} src={'/item-sell.png'} width={35} height={35}></Image></Button>
            <Button className='p-button-danger p-button-text' onClick={() => { navToPage('/orders') }}><Image alt={''} src={'/item-orders.png'} width={35} height={35}></Image></Button>
            <Button className='p-button-danger p-button-text' onClick={() => { navToPage('/products') }}><Image alt={''} src={'/item-clothes.png'} width={35} height={35}></Image></Button>
            <Button className='p-button-danger p-button-text' onClick={() => { navToPage('/orders') }}><Image alt={''} src={'/item-user.png'} width={35} height={35}></Image></Button>
        </div>
    )
  }
  const MenuItemsRight = () => {
    return (
        <div style={{ marginRight: '1rem' }}>
            <Button label="Salir" className='p-button-danger' icon="pi pi-power-off"/>
        </div>
    )
  }

  return (
    <Menubar
    className='navBar'
    start={MenuItems()}
    end={MenuItemsRight()}/>
  )
}
