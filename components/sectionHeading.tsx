import React from 'react';


type sectionHeadingProps = {
    children: React.ReactNode,
}

const SectionHeading = ({children}: sectionHeadingProps) => {

    return (
        <h2 className='text-3xl font-medium capitalize mb-8
        text-center text-black dark:text-white'>
                {children}
        </h2>
    )
}

export default SectionHeading