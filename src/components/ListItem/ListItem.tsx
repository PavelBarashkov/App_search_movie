import React from 'react'
import classes from "./listItem.module.css"
import { Container } from 'react-bootstrap'

export const ListItem:React.FC = () => {
  return (
        <li className={classes.item}>Элемент списка</li>
  )
}
