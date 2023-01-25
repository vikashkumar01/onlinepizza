import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPizza } from '../Redux/Actions/pizzaAction'
import Pizza from '../Component/Pizza'
import Filter from '../Component/Filter'

const Menu = () => {

  const dispatch = useDispatch()
  const { pizzas } = useSelector((state) => state.pizzas)


  useEffect(() => {

    dispatch(getAllPizza())
  }, [dispatch])


  return (
    <div className="menu">

      <div className="menuHead">
        <h1>Menu</h1>
      </div>

      <div className='filterSection'>
        <Filter />
      </div>

      <div className="category">

        {
          pizzas && pizzas.map((pizza, i) => (
            <Pizza pizza={pizza} key={i} />
          ))
        }

      </div>

    </div>
  )
}

export default Menu