import Products from '@/components/Products/Products'
import { ProductsData } from '@/data'
import React from 'react'

export default function page() {
  return (
    <div className='w-full min-h-screen bg-white py-14 px-4 flex flex-col gap-14'>
        {
          ProductsData.map((product)=>(
            <Products key={product.id} productCategory={product.productCategory} name={product.name} type={product.type} tableData={product.tabledata}/>
          )

          )
        }
        
      
    </div>
  )
}
