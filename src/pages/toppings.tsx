import * as React from 'react'

// Import components
import PizzaAddToppings from './../components/pizzaAddToppings'

// Import interfaces
import { PizzaItemObjInterface, ToppingsPageInterface } from './../interfaces'

const ToppingsPage = (props: ToppingsPageInterface) => {
  // Handle adding new pizza ingredient as topping
  function handleAddItem(itemToAdd: PizzaItemObjInterface) {
    if (itemToAdd.toppings.length > 3) {
      props.pizzaItem.price = props.pizzaItem.price + 0.5
    }
    props.pizzaItem.toppings = itemToAdd.toppings

    // Update pizzaItem state
    props.setPizzaItem(props.pizzaItem)
  }

  return (
    <PizzaAddToppings
      toppingsNames={props.toppingsNames}
      pizzaItem={props.pizzaItem}
      handleAddItem={handleAddItem}
    />
  )
}
export default ToppingsPage
