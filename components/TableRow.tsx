import React from 'react'

export default function TableRow({singleTableData}:any) {
  return (
    <tr className="bg-neutral-primary border-b border-default">

                <td className="px-6 py-4">
                    {singleTableData.channelName}
                    
                </td>
                <td className="px-6 py-4">
                    {singleTableData.email}
                </td>
                <td className="px-6 py-4">
                    {singleTableData.userName}
                    
                </td>
                <td className="px-6 py-4">
                    {singleTableData.password}
                </td>
            </tr>
  )
}
