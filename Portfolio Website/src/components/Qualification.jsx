import React from 'react'

const Qualification = () => {
    return (
        <div className='bg-black text-white py-20' id='qualification'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>Qualification</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'></div>
            </div>
            <div className='text-center'>
                <div className='gap-2 mb-5'>
                    <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-2'>Diploma in Computer Engineering</h3>
                    <h4 className='text-xl'>Institute of Printing Technology & Govt. Polytechnic College</h4>
                    <p className='text-lg'>CGPA:7.9</p>
                    <p>2021-2024</p>
                </div>
                <div className='mb-5'>
                    <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-2'>Higher Secondary Education</h3>
                    <h4 className='text-xl'>Govt. H.S.S vellinezhi</h4>
                    <p className='text-lg'>86%</p>
                    <p>2019-2021</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-2'>High School Education</h3>
                    <h4 className='text-xl'>Govt. H.S.S Vellinezhi</h4>
                    <p className='text-lg'>98%</p>
                    <p>2018-2019</p>
                </div>
            </div>
        </div>

    )
}

export default Qualification