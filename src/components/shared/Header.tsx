'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenuAlt3 } from 'react-icons/hi'
import { HeadItems, menuVariants } from '../../../lib/consts'
import { IoClose } from 'react-icons/io5'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='md:hidden'>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            key='menu'
            className='fixed inset-0 flex w-full flex-col items-center justify-center bg-main-primary py-3 text-center'
            initial='closed'
            animate='open'
            exit='closed'
            variants={menuVariants}
            transition={{ duration: 0.5 }}
          >
            <IoClose
              onClick={toggleMenu}
              className='fixed right-5 top-10 text-3xl'
            />
            {HeadItems.map((item, index) => (
              <div key={item.name}>
                <Link href={item.href}>
                  <p className='text-lg font-medium capitalize text-additional-white sm:text-2xl'>
                    {item.name}
                  </p>
                </Link>
                {index !== HeadItems.length - 1 && (
                  <div className='divider my-0.5' />
                )}
              </div>
            ))}
          </motion.div>
        ) : (
          <HiMenuAlt3
            onClick={toggleMenu}
            className='text-3xl text-main-primary'
          />
        )}
      </AnimatePresence>
    </div>
  )
}

const Menu = () => {
  return (
    <div className=' hidden w-full items-center justify-between md:flex'>
      <div className='flex w-3/4 justify-evenly px-10'>
        {HeadItems.map(item => (
          <Link href={item.href} key={item.name}>
            <h4 className='text-lg font-normal lg:text-2xl '>{item.name}</h4>
          </Link>
        ))}
      </div>
      <div>
        <h4 className='cursor-pointer font-medium underline'>Login</h4>
      </div>
    </div>
  )
}

const Header = () => {
  return (
    <div className='my-8 flex items-center justify-between'>
      <Link href='/'>
        <h3 className='text-gradient font-extrabold'>shoppes</h3>
      </Link>
      <MobileMenu />
      <Menu />
    </div>
  )
}
export default Header
