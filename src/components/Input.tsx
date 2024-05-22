import Image from 'next/image'
import React, { useState } from 'react'

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  label: string
  type?: 'password'
}

const UserInput = ({ label, type, ...props }: Props) => {
  const [passwordVisible, setPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }
  return (
    <div className='flex w-full flex-col items-start justify-start'>
      <p className='text-start font-jakarta text-md'>{label}</p>
      {type === 'password' ? (
        <div className='gradient flex w-full'>
          <input
            {...props}
            type={passwordVisible ? 'text' : 'password'}
            placeholder='Password'
            className='w-full'
          />
          <Image
            alt='show/hidden password'
            src={'/assets/icons/eye-on-outline.svg'}
            width={24}
            height={24}
            onClick={togglePasswordVisibility}
          />
        </div>
      ) : (
        <input
          {...props}
          type='text'
          className='gradient w-full'
          placeholder='Type here...'
        />
      )}
    </div>
  )
}
export default UserInput
