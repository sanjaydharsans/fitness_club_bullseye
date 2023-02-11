import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const Note = ({libs,deletelib}) => {
    
    return libs.map(lib=>(
        
        <tr key={lib.is}>
            <td>{lib.is}</td>
            <td>{lib.title}</td>
            <td>{lib.author}</td>
            <td className='delete-btn' onClick={()=>deletelib(lib.is)}>
                <Icon icon={trash}/>
            </td>           
        </tr>            
    
))
}
