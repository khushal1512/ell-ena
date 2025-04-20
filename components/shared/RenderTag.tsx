import React from 'react'
import { Badge } from '../ui/badge'


interface Props {
    name: string; 
    totalTasks?: number; 
    showCount?: boolean;
}
const RenderTag = ( { totalTasks, name, showCount} : Props) => {
  return (
    <div className='flex justify-between gap-2'>
        <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
            {name}
        </Badge>
        {showCount && (
            <p className='small-medium text-dark500_light700'>
                {totalTasks}
            </p>
        )}
    </div>
  )
}

export default RenderTag