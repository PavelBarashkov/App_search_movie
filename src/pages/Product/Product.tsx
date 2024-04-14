import React from 'react'
import { ProductPage } from '../../layouts/ProductPage/ProductPage'
import { ProductCard } from '../../modules'

export const Product:React.FC = () => {
  return (
    <ProductPage card={<ProductCard/>}/>
  )
}
