Explicação sobre a estrutura do código (chatbot.js)

O arquivo anexo (chatbot.js) contém:

1 - Estrutura de Dados do Cardápio (MENU_DATA): Um objeto Javascript que armazena as categorias e os produtos com seus respectivos IDs, nomes e preços.

2 - Funções Auxiliares: Funções para formatar moeda (formatCurrency), construir a mensagem do carrinho (buildCartMessage), e montar os menus de categorias e produtos.

3 - Lógica Principal (main): A função central que recebe a entrada do usuário, o estado atual da conversa, o carrinho e o último produto selecionado. Ela processa a entrada e retorna a resposta e o novo estado.

4 - Boilerplate do n8n (Comentado): O código que deve ser usado no nó Function do n8n para extrair as variáveis de entrada (text, state, cart, last_product_id) e formatar a saída.
