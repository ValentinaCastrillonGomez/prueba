document.addEventListener('DOMContentLoaded', () => {
  const productsContainer = document.querySelector('.products')
  let productsInCart = JSON.parse(localStorage.getItem('PRODUCTS_CART')) || []
  const shoppingIcon = document.getElementById('shopping-cart-icon')
  shoppingIcon.innerText = productsInCart.length

  const showProducts = () => {
    productsContainer.innerHTML = productsInCart.map(product => {
      return (`
        <div class="products__item">
          <h3 class="products__title">${product.name}</h3>
          <strong class="products__price">$${product.price}</strong>
          <p class="products__description">${product.description}</p>
          <button class="products__button products__button--delete" data-id="${product.id}">Eliminar del carrito</button>
        </div>
      `)
    }).join('')

    addListener()
  }

  const addListener = () => {
    document.querySelectorAll('.products__button').forEach(button => {
      button.addEventListener('click', () => {
        const id = button.getAttribute('data-id')
        productsInCart = productsInCart.filter(_product => _product.id !== parseInt(id))
        localStorage.setItem('PRODUCTS_CART', JSON.stringify(productsInCart))
        showProducts()
        shoppingIcon.innerText = productsInCart.length
      })
    })
  }

  showProducts()
})