import React from 'react'

const HeaderItem = ({Icon, title}) => {
    return (
        <div className='group flex flex-col hover:text-white cursor-pointer w-12 sm:w-20 items-center'>
          <Icon className="h-8 group-hover:animate-bounce mb-1" />
          <p className='tracking-widest  opacity-0 group-hover:opacity-100'>{title}</p>
        </div>
    )
}

export default HeaderItem
