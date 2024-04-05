import React from 'react'
import { Pagination } from 'react-bootstrap'

function CPaginiation({total,current,onChangePage}) {
    
    let items =[]
    if(current >1){
        items.push(<Pagination.Prev key="Prev" onClick={() => onChangePage(current-1)} />)
    }
    for(let page = 1; page <= total ; page++){
        items.push(
        <Pagination.Item key={page} data-page={page} active={page === current} onClick={() => onChangePage(page)}>
            {page}
        </Pagination.Item>
        )
    }

    if(current < total){
        items.push(<Pagination.Next key="Next" onClick={() => onChangePage(current+1)} />)
    }

  return (
    <>
    <hr/>
    <Pagination>
        {items}
    </Pagination>
    </>
  )
}

export default CPaginiation