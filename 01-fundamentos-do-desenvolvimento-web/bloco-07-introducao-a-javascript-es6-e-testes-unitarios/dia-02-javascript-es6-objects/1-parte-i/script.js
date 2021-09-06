// Parte I
// Para os exercícios a seguir, use o seguinte código.

const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phoneNumber = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;
  const address = `R. ${street}, Nº: ${number}, AP: ${apartment}`

  console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, ${address}.`)
}
customerInfo(order);

const customerInfo2 = order => `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}.`;

console.log(customerInfo2(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias. 
  const name = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const coke = order.order.drinks.coke.type;
  const total = order.payment.total = 50;

  console.log(`Olá ${name}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${coke} é R$ ${total}.`)
}

orderModifier(order);

// Agora você vai fazer alguns exercícios de fixação.

// 1. Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

// * Note que o parâmetro da função já está sendo passado na chamada da função.

// 2. Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

// * Modifique o nome da pessoa compradora.
// * Modifique o valor total da compra para R$ 50,00.
