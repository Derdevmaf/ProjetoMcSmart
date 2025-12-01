/**
 * Lógica de Chatbot para Whatsapp
 * Este código deve ser copiado e colado integralmente em um nó "Function" do n8n.
 * Ele espera receber no input as variáveis de estado: text, state, cart, last_product_id, last_interaction_time.
 */

// =================================================================================================
// 1. ESTRUTURA DE DADOS DO CARDÁPIO
// =================================================================================================

const MENU_DATA = {
    "1": {
        name: "Promoções - McSmart Locker 🏷️",
        products: [
            { id: "P101", name: "Combo Smart", price: 25.90 },
            { id: "P102", name: "Duplo Cheddar", price: 19.90 }
        ]
    },
    "2": {
        name: "Sanduíches 🍔",
        products: [
            { id: "P201", name: "Big Mac", price: 22.50 },
            { id: "P202", name: "McChicken", price: 18.00 }
        ]
    },
    "3": {
        name: "Acompanhamentos 🍟",
        products: [
            { id: "P301", name: "Batata Frita Média", price: 10.00 },
            { id: "P302", name: "Nuggets 4 unidades", price: 8.50 }
        ]
    },
    "4": {
        name: "Bebidas 🥤",
        products: [
            { id: "P401", name: "Coca-Cola 350ml", price: 7.00 },
            { id: "P402", name: "Suco de Laranja", price: 8.00 }
        ]
    },
    "5": {
        name: "Sobremesas 🍦",
        products: [
            { id: "P501", name: "McFlurry", price: 12.00 },
            { id: "P502", name: "Casquinha", price: 4.50 }
        ]
    },
    "6": {
        name: "Outras opções",
        products: [
            { id: "P601", name: "Molho Extra", price: 3.00 },
            { id: "P602", name: "Guardanapos Extra", price: 0.00 }
        ]
    }
};

// =================================================================================================
// 2. FUNÇÕES AUXILIARES
// =================================================================================================

function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function buildCartMessage(cart) {
    if (!cart || cart.length === 0) {
        return "Seu carrinho está vazio.";
    }
    let total = 0;
    let message = "🛒 *Seu Carrinho:*\n\n";
    const groupedCart = cart.reduce((acc, item) => {
        const key = item.id;
        if (!acc[key]) {
            acc[key] = { ...item, quantity: 0, totalItemPrice: 0 };
        }
        acc[key].quantity += 1;
        acc[key].totalItemPrice += item.price;
        total += item.price;
        return acc;
    }, {});
    for (const key in groupedCart) {
        const item = groupedCart[key];
        message += `*${item.quantity}x* ${item.name} (${formatCurrency(item.price)} un.) - Total: ${formatCurrency(item.totalItemPrice)}\n`;
    }
    message += `\n*Total do Pedido:* ${formatCurrency(total)}\n`;
    return message;
}

function buildCategoryMenu(cart) {
    let menu = "*Escolha uma categoria digitando o número correspondente:*\n\n";
    for (const key in MENU_DATA) {
        menu += `${key}- ${MENU_DATA[key].name}\n`;
    }
    if (cart && cart.length > 0) {
        menu += "\n*7- 🛍️ Ver Carrinho*\n";
    }
    return menu;
}

function buildProductsMessage(categoryKey) {
    const category = MENU_DATA[categoryKey];
    if (!category) {
        return "Categoria inválida. Por favor, digite 'voltar' para o menu de categorias.";
    }
    let message = `*Produtos em ${category.name}:*\n\n`;
    category.products.forEach((product) => {
        const menuNumber = product.id.substring(1);
        message += `${menuNumber} - ${product.name} | ${formatCurrency(product.price)}\n`;
    });
    message += "\n*Para adicionar um produto, digite o número dele no cardápio (e.g., 101).*\n";
    message += "\n↩️ *Digite 'voltar' para retornar ao menu de categorias.*\n";
    return message;
}

function findProductByMenuNumber(menuNumber) {
    for (const categoryKey in MENU_DATA) {
        const category = MENU_DATA[categoryKey];
        for (const product of category.products) {
            if (product.id.substring(1) === menuNumber) {
                return product;
            }
        }
    }
    return null;
}

// =================================================================================================
// 3. LÓGICA PRINCIPAL DO CHATBOT
// =================================================================================================

/**
 * Função principal que processa a entrada do usuário e determina a resposta e o próximo estado.
 * @param {string} user_input A mensagem do usuário.
 * @param {string} current_state O estado atual da conversa.
 * @param {Array<Object>} current_cart O carrinho atual.
 * @param {string|null} last_product_id O ID do último produto selecionado para confirmação.
 * @param {number|null} last_interaction_time Timestamp da última interação (em milissegundos).
 * @param {number|null} simulated_current_time Tempo atual simulado para testes (opcional).
 * @returns {Object} Um objeto contendo a resposta, o próximo estado, o novo carrinho, o último produto e o novo timestamp.
 */
function main(user_input, current_state, current_cart, last_product_id, last_interaction_time, simulated_current_time = null) {
    const input = user_input.trim().toLowerCase();
    const currentTime = simulated_current_time || Date.now();
    const TIMEOUT_MS = 30 * 60 * 1000; // 30 minutos

    let response = "";
    let next_state = current_state;
    let new_cart = [...current_cart];
    let new_last_product_id = last_product_id;
    let new_last_interaction_time = last_interaction_time;
    let is_valid_interaction = false;

    // 3.1. Tratamento de Timeout
    if (current_state !== "start" && current_state !== "initial_choice" && last_interaction_time && (currentTime - last_interaction_time > TIMEOUT_MS) && current_state !== "timeout_prompt") {
        response = "Olá! Percebemos que você ficou inativo por 30 minutos. Deseja continuar seu pedido ou começar do zero?\n\n*👍 Sim, continuar pedido*\n*🔄 Começar do zero*";
        next_state = "timeout_prompt";
        return { response, next_state, new_cart, new_last_product_id, new_last_interaction_time };
    }

    // 3.2. Lógica de "voltar"
    if (input === "voltar") {
        is_valid_interaction = true;
        if (current_state.startsWith("categoria_")) {
            response = buildCategoryMenu(new_cart);
            next_state = "menu";
        } else if (current_state.startsWith("confirmar_") && new_last_product_id) {
            const categoryKey = new_last_product_id.substring(1, 2);
            response = buildProductsMessage(categoryKey);
            next_state = "categoria_" + categoryKey;
        } else {
            is_valid_interaction = false; // Não é uma ação de "voltar" válida
        }
        if (is_valid_interaction) {
            new_last_product_id = null;
            new_last_interaction_time = currentTime;
            return { response, next_state, new_cart, new_last_product_id, new_last_interaction_time };
        }
    }

    // 3.3. Lógica de Estados
    switch (current_state) {
        case "start":
            response = "Olá! Seja bem-vindo(a) ao nosso serviço de pedidos via WhatsApp. Como podemos te ajudar hoje?\n\n*1- Ver Cardápio*\n*2- Surpreenda-me* (Ver promoções)";
            next_state = "initial_choice";
            is_valid_interaction = true;
            break;

        case "initial_choice":
            if (input === "1") {
                response = buildCategoryMenu(new_cart);
                next_state = "menu";
                is_valid_interaction = true;
            } else if (input === "2") {
                response = buildProductsMessage("1");
                next_state = "categoria_1";
                is_valid_interaction = true;
            } else {
                response = "Opção inválida.";
            }
            break;

        case "menu":
            if (input >= "1" && input <= "6") {
                response = buildProductsMessage(input);
                next_state = "categoria_" + input;
                is_valid_interaction = true;
            } else if (input === "7" && new_cart.length > 0) {
                response = buildCartMessage(new_cart) + "\n\n*1- ➕ Adicionar mais itens*\n*2- 🧾 Ver resumo e fechar*";
                next_state = "cart_review";
                is_valid_interaction = true;
            } else {
                response = "Opção inválida.";
            }
            break;

        case "cart_review":
            if (input === "1") {
                response = buildCategoryMenu(new_cart);
                next_state = "menu";
                is_valid_interaction = true;
            } else if (input === "2") {
                if (new_cart.length === 0) {
                    response = "Você precisa ter ao menos 1 item no carrinho para finalizar o pedido. Por favor, adicione itens ou digite *1* para voltar ao menu.";
                } else {
                    response = buildCartMessage(new_cart) + "\n\n*Pedido finalizado com sucesso!* Agradecemos a preferência. Em breve, um de nossos atendentes entrará em contato para confirmar a entrega e o pagamento.";
                    next_state = "start";
                    new_cart = [];
                }
                is_valid_interaction = true;
            } else {
                response = "Opção inválida.";
            }
            break;

        case "timeout_prompt":
            if (input === "👍" || input === "sim" || input.includes("continuar")) {
                response = buildCategoryMenu(new_cart);
                next_state = "menu";
                is_valid_interaction = true;
            } else if (input === "🔄" || input.includes("zero")) {
                new_cart = [];
                response = "Seu carrinho foi esvaziado. " + buildCategoryMenu(new_cart);
                next_state = "menu";
                is_valid_interaction = true;
            } else {
                response = "Opção inválida. Por favor, escolha *👍 Sim, continuar pedido* ou *🔄 Começar do zero*.";
            }
            break;

        default:
            // Tratamento de estados dinâmicos (categoria_ e confirmar_)
            if (current_state.startsWith("categoria_")) {
                const isNumeric = /^\d+$/.test(input);
                
                if (isNumeric) {
                    const product = findProductByMenuNumber(input);
                    if (product) {
                        response = `Você deseja adicionar *${product.name}* (${formatCurrency(product.price)}) ao seu pedido? Digite *sim* ou *não*.`;
                        next_state = "confirmar_" + product.id;
                        new_last_product_id = product.id;
                        is_valid_interaction = true;
                    } else {
                        // É um número, mas não existe na lista
                        response = "Opção inválida.";
                    }
                } else {
                    // Não é um número (mensagem aleatória, emoji, etc.)
                    response = "Escolha uma das opções acima.";
                }
            } else if (current_state.startsWith("confirmar_")) {
                const productToConfirm = findProductByMenuNumber(last_product_id.substring(1));
                if (input === "sim") {
                    new_cart.push(productToConfirm);
                    response = buildCartMessage(new_cart) + "\n\n*1- ➕ Adicionar mais itens*\n*2- 🧾 Ver resumo e fechar*";
                    next_state = "cart_review";
                    new_last_product_id = null;
                    is_valid_interaction = true;
                } else if (input === "não" || input === "nao") {
                    const categoryKey = last_product_id.substring(1, 2);
                    response = buildProductsMessage(categoryKey);
                    next_state = "categoria_" + categoryKey;
                    new_last_product_id = null;
                    is_valid_interaction = true;
                } else {
                    response = "Opção inválida.";
                }
            } else {
                // Se nenhum estado correspondeu, é uma mensagem fora de contexto
                response = "Escolha uma das opções acima.";
            }
            break;
    }

    // 3.4. Atualização do Timestamp
    if (is_valid_interaction) {
        new_last_interaction_time = currentTime;
    } else if (response === "Opção inválida.") {
        // Não atualiza o timestamp para entradas inválidas, mantendo o timeout.
    } else {
        // Para entradas fora de contexto, a resposta é "Escolha uma das opções acima."
        // O estado e o carrinho são mantidos, e o timestamp não é atualizado.
        response = (response === "") ? "Escolha uma das opções acima." : response;
    }

    return { response, next_state, new_cart, new_last_product_id, new_last_interaction_time };
}

// Exportar para testes
module.exports = { main, MENU_DATA };


// =================================================================================================
// 4. BOILERPLATE DO N8N
// =================================================================================================

/*
const items = $input.all();
const inputData = items[0].json;

const user_input = inputData.text || "";
const current_state = inputData.state || "start";
const current_cart = inputData.cart || [];
const last_product_id = inputData.last_product_id || null;
const last_interaction_time = inputData.last_interaction_time || Date.now();

// A função main no n8n deve ser chamada sem o simulated_current_time
const result = main(user_input, current_state, current_cart, last_product_id, last_interaction_time);

return [{
    json: {
        text: result.response,
        state: result.next_state,
        cart: result.new_cart,
        last_product_id: result.new_last_product_id,
        last_interaction_time: result.new_last_interaction_time
    }
}];
*/
