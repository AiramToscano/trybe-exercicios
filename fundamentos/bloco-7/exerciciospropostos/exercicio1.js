const order1 = {
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

const customerInfo = (order1) => {
    const name1 = order1.order.delivery.deliveryPerson;
    const name2 = order1.name;
    const phonenumber1 = order1.phoneNumber;
    const street1 = order1.address.street;


}
customerInfo(order1);

const orderModifier = (order1) => {
    const drink = order1.order.drinks.coke.type;
    const name = {
        order: {
            delivery: {
                deliveryPerson: 'Airam',
            }
        },
        payment: {
            total: 50,
        },
    };
    Object.assign(order1, name);
    const name1 = name.order.delivery.deliveryPerson;
    const pagamentoTotal = name.payment.total;
    console.log(` Olá ${name1}, o total do seu pedido de marguerita, pepperoni e ${drink} é R$ ${pagamentoTotal}`);
}

orderModifier(order1);