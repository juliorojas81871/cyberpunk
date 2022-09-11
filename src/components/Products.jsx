import React from 'react'
import PageSection from './PageSection'
import { products } from "../utils/constants";

const Products = () => {
  return (
    <PageSection
        name='products'
        title='Products'
        subtitle={`Plainly lamplight whether evermore thereat tell, we or scarce bird spoken he whether on, sinking thy again sent what eyes tinkled his explore these. Within melancholy sad bird not respiterespite..`}
    >
    <div className='grid lg:grid-cols-2 gap-12 text-black'> 
        {products.map(({id, icon, title, subtitle}) => (
            <div key={id} className='group bg-gradient-to-r from-thOrange to-thBlue rounded-lg p-8 text-center'>
            <div className='flex items-center justify-center duration-300 group-hover:scale-110'>
                <div className='bg-black rounded-full p-5 m-4'>{icon}</div>
            </div>
                <h1 className='text-3xl lg:text-5xl my-8 capitalize'>{title}</h1>
                <p className='text-lg'>{subtitle}</p>
            </div>
        ))}
    </div>

    </PageSection>
  )
}

export default Products