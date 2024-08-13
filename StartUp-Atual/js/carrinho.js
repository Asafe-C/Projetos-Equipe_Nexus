// puxar elementos

const openBtn = document.getElementById('open_cart_btn')
const cart = document.getElementById('sidecart')
const closeBtn = document.getElementById('close_btn')
const backdrop = document.querySelector('.backdrop')

openBtn.addEventListener('click', openCart)
closeBtn.addEventListener('click', closeCart)
backdrop.addEventListener('click', closeCart)

// Abrir Carrinho

function openCart() {
    cart.classList.add('open')
    backdrop.style.display = 'block'

    setTimeout(() => {
        backdrop.classList.add('show')
    }, 0);
}

// Fechar Carrinho

function closeCart() {
    cart.classList.remove('open')
    backdrop.classList.remove('show')

    setTimeout(() => {
        backdrop.style.display = 'none'
    }, 500);
}

//

// EM MANUTENÇÃO //

document.addEventListener('DOMContentLoaded', (event) => {
    // Função para incrementar o número de itens no carrinho
    function addcarrinho() {
      let itemsNumElement = document.getElementById('items_num');
      let currentItems = parseInt(itemsNumElement.textContent);
      itemsNumElement.textContent = currentItems;
  
      // Atualizar o subtotal
      updateSubtotal();
    }
  
    // Função para atualizar o subtotal
    function updateSubtotal() {
      let itemsNumElement = document.getElementById('items_num');
      let currentItems = parseInt(itemsNumElement.textContent);
      
      let subtotalElement = document.getElementById('subtotal_price');
      let prices = document.querySelectorAll('.preço #valor');
      
      let subtotal = 0;
      prices.forEach((priceElement, index) => {
        if (index < currentItems) {
          subtotal += parseFloat(priceElement.textContent.replace(',', '.'));
        }
      });
      
      subtotalElement.textContent = subtotal.toFixed(2).replace('.', ',');
    }
  
    // Adicionar evento de clique a todos os botões de compra
    let purchaseButtons = document.querySelectorAll('.compra button');
    purchaseButtons.forEach(button => {
      button.addEventListener('click', addcarrinho);
    });
  });

  // botar no carrinho

document.addEventListener('DOMContentLoaded', (event) => {
    const cartItemsContainer = document.querySelector('.cart_items');
    const itemsNumElement = document.getElementById('items_num');
    const subtotalElement = document.getElementById('subtotal_price');
  
    // Função para adicionar item ao carrinho
    function addcarrinho(productId) {
      // Selecionar o produto correspondente pelo ID
      const productElement = document.querySelector(`button[onclick="addcarrinho('${productId}')"]`).closest('.product');
      const productName = productElement.querySelector('h3').textContent;
      const productPrice = parseFloat(productElement.querySelector('.preço #valor').textContent.replace(',', '.'));
      const productImageSrc = productElement.querySelector('img').src;
  
      //Criar o elemento do item no carrinho
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart_item');
      cartItem.innerHTML = `
        <img src="${productImageSrc}" alt="${productName}" class="cart_item_image" />
        <div class="cart_item_details">
          <p class="cart_item_name">${productName}</p>
          <p class="cart_item_price">R$ ${productPrice.toFixed(2).replace('.', ',')}</p>
        </div>
      `;
  
      // Adicionar o item ao container do carrinho
      cartItemsContainer.appendChild(cartItem);
  
      // Incrementar o número de itens no carrinho
      let currentItems = parseInt(itemsNumElement.textContent);
      itemsNumElement.textContent = currentItems + 1;
  
      // Atualizar o subtotal
      updateSubtotal(productPrice);
    }
  
    // Função para atualizar o subtotal
    function updateSubtotal(price) {
      let currentSubtotal = parseFloat(subtotalElement.textContent.replace(',', '.'));
      currentSubtotal += price;
      subtotalElement.textContent = currentSubtotal.toFixed(2).replace('.', ',');
    }
  
    // Adicionar evento de clique a todos os botões de compra
    let purchaseButtons = document.querySelectorAll('.compra button');
    purchaseButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productId = button.getAttribute('onclick').match(/addcarrinho\('(.+)'\)/)[1];
        addcarrinho(productId);
      });
    });
  });
  