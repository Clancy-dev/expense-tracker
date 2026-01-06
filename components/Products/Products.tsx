import React from 'react'
import TableRow from '../TableRow'

export default function Products({productCategory,name,type,tableData}:any) {
  return (
    <div className='w-full min-h-[30vh] shadow-xl bg-white py-4 px-4 rounded-lg'>
          <div className='w-full min-h-[10vh]'>
            <div className='w-full h-[6vh] flex items-center justify-center font-bold text-xl'>
              {productCategory}
            </div>
             <div className='w-full h-[10vh]  flex items-center justify-center text-xl font-bold'>
              {name}
            </div>
          </div>
          <div className='w-full min-h-[15vh]  md:text-lg flex items-center justify-center flex-col'>

            {
                type.map((singleType:any)=>(
                    <div>
                    <p>{singleType.basic}</p>
                    <p>{singleType.standard}</p>
                    <p>{singleType.premium}</p>
                    <p>{singleType.advanced}</p>
                    <p>{singleType.upgrades}</p>
                    </div>                 
                ))
            }
          </div>
          <div className='w-full min-h-[10vh]'>
            <div className='w-full h-[8vh] flex items-center justify-center text-lg font-bold'>
              Market Channels
            </div>

            

<div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
    <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
            <tr>
               
                <th scope="col" className="px-6 py-3 font-medium">
                    Name
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    Email
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    Username
                </th>
                <th scope="col" className="px-6 py-3 font-medium">
                    Password
                </th>
            </tr>
        </thead>
        <tbody>

            {
                tableData.map((singleTableData:any)=>(
                    <TableRow key={singleTableData.id} singleTableData={singleTableData}/>
                ))
            }
           
        </tbody>
    </table>
</div>


          </div>

        </div>
  )
}
