import React from 'react'

const SectionTitle = ({ text, color, leftOnly, bordered }) => {
    return (
        <div className={`flex flex-col space-y-2 lg:space-y-4 ${leftOnly ? 'text-left items-left' : 'text-center items-center'}`}>
            <h3 className={`font-bold font-lato  text-2xl md:text-4xl lg:text-5xl ${color ? color : 'text-themeDark'}`}>{text}</h3>
            {bordered &&
                <div className='w-[9rem] h-1 bg-themeColor'>
                </div>
            }
        </div>
    )
}

export default SectionTitle