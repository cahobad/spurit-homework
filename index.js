/* Product start */
const productForm = document.querySelector('#product-form');
const buttonAddProductToCart = document.querySelector('#product-form-add-to-cart');
const buttonBuyProduct = document.querySelector('#product-form-submit');

buttonBuyProduct.addEventListener('click', sendProductForm);
buttonAddProductToCart.addEventListener('click', addProductToCart);

const buttonIncreaseProductAmount = document.querySelector('#product-increase-amount');
const buttonDecreaseProductAmount = document.querySelector('#product-decrease-amount');

buttonIncreaseProductAmount.addEventListener('click', () => {
  document.querySelector('#product-quantity').value = Number(document.querySelector('#product-quantity').value) + 1;
});

buttonDecreaseProductAmount.addEventListener('click', () => {
  const currentAmount = Number(document.querySelector('#product-quantity').value);

  if (currentAmount > 1) {
    document.querySelector('#product-quantity').value = currentAmount - 1;
  }
});


function updateAmountProductsInCart() {
  const productAmountInCart = document.querySelector('#product-amount-cart').textContent;

  const productQuantityToAddInCart = document.querySelector('#product-quantity').value;

  document.querySelector('#product-amount-cart').textContent = Number(productAmountInCart) + Number(productQuantityToAddInCart);
}

function getProductParameters() {
  const product = {
    name: null,
    price: null,
    size: null,
    color: null,
    quantity: null,
  }
  product.name = document.querySelector('#product-name').textContent;
  product.price = document.querySelector('#product-price').textContent;

  const productSizes = document.getElementsByName('size');

  for (let i = 0; i < productSizes.length; i++) {
    if (productSizes[i].checked) {
      product.size = productSizes[i].value;
      break;
    }
  }

  const productColors = document.getElementsByName('color');

  for (let i = 0; i < productColors.length; i++) {
    if (productColors[i].checked) {
      product.color = productColors[i].value;
      break;
    }
  }

  product.quantity = document.querySelector('#product-quantity').value;

  return product;
}

function addProductToCart() {
  updateAmountProductsInCart();
  const product = getProductParameters();

  console.log('Пользователь желает добавить в корзину данный продукт:');
  console.log(product);
}

function sendProductForm(event) {
  event.preventDefault();
  const product = getProductParameters();

  console.log('Пользователь желает купить данный продукт:')
  console.log(product);
} 



function updateCurrentProductColor(newColor) {
  if (!newColor) return false;

  newColor = newColor.replace('-', ' ');

  document.querySelector('#product-current-color').textContent = newColor;
}

const productColors = document.getElementsByName('color');

productColors.forEach(color => {
  color.addEventListener('change', () => {
    updateCurrentProductColor(color.value)
  })
});



/* Product end */