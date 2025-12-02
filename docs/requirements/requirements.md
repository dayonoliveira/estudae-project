# Requisitos

### Requisitos funcionais e não funcionais

- **Realização de cadastro e login de usuários**
 	- Estudantes e Voluntários fazem cadastro (nome, e-mail, senha, tipo de usuário);
 	- Os usuários utilizam e-mail e senha para fazer login;
- **Diferenciação de perfis de acesso**
 	- Estudante: Solicita ajuda/tutoria;
 	- Voluntário: Oferece doação;
- **Doação de livros e materiais**
 	- Voluntário cadastra materiais disponíveis (ex: livros, cadernos, mochilas);
 	- Estudantes podem solicitar o material;
 	- Estudantes e Voluntários confirmam a conclusão da doação;
 	- Registro da retirada/doação concluída;
- **Sistema de Busca/Match**
 	- Doação:
  		- Voluntários cadastram materiais de doação;
  		- Estudantes veem materiais disponibilizados por Voluntários;
- **Administração da conta**
 	- Usuário pode ver todas as solicitações feitas;
 	- Usuário pode modificar seus dados de perfil, menos o seu tipo de usuário;
 	- Um usuário pode ter um perfil de cada tipo, mas as informações e dados dos perfis não podem se misturar;
 	- O usuário pode excluir seus perfis se assim desejar, mas deve ser informado que o sistema irá apagar tudo;

### Regras de negócio

- **Regras de negócio de tempo de resposta:**
 	- A API de back-end não deve demorar mais de 2 segundos para retornar uma resposta;
 	- Após o retorno da API ser concluído, as aplicações WEB e Mobile não devem apresentar demora ao exibir as informações para os usuários;
 	- Caso seja implementado algum sistema de *websocket*, a exibição dos dados deve ser feita o mais rápida possível, não passando de 1 segundo;
- **Regras de negócio de usabilidade:**
 	- Todas as funcionalidades que o usuário encontrar na plataforma WEB, ele deve encontrar na plataforma Mobile. Para isso será usado o mesmo mecanismo de *roles* nas duas plataformas;
 	- Ao solicitar a exclusão de um ou mais perfis, deve fazer uma autenticação via e-mail do usuário para confirmar a exclusão;
 	- Fazer tratamento de erro em todos os fluxos com mensagens compreensíveis e que guiem o usuário à resolver o problema;
- **Regras de negócio de segurança:**
 	- Deverá ser feita uma validação do e-mail tanto no front-end com validação de máscara de campo, quanto no back-end com envio de e-mail de confirmação;
 	- Para segurança da senha do usuário, será usado o bcrypt para gerar o hash da senha e salvar no banco. Para a validação, é enviada a senha e o processo de validação é feito no back-end;
 	- O sistema terá um mecanismo de *roles* para gerenciar os perfis de acesso e impossibilitar o acesso de funcionalidades que não pertencem aquele tipo de usuário;
 	- Ao fazer login, deve ser feita uma validação das funcionalidades que serão mostradas para os usuários com base no tipo de usuário cadastrado (Estudante, Mentor e Voluntário);
- **Regras de negócio de disponibilidade:**
 	- Deve ficar acessível online 99,9% do tempo;
 	- O usuário deve ter conexão à internet para usar as aplicações;

### Casos de uso

1. **Cadastro/Login**  
   - Usuário cria conta ou entra no sistema.
2. **Estudante solicita tutoria**  
   - Estudante escolhe matéria e horário.  
   - Sistema registra pedido e busca Mentor compatível.
3. **Estudante solicita material**  
   - Estudante seleciona material disponível.  
   - Sistema registra pedido e busca Voluntário que ofereça.
4. **Mentor oferece tutoria**  
   - Mentor cadastra matérias que domina e horários livres.  
   - Sistema disponibiliza para matching com Estudantes.
5. **Voluntário cadastra material**  
   - Voluntário registra livros/materiais disponíveis para doação.  
   - Sistema disponibiliza para matching com Estudantes.
6. **Sistema conecta (Matching)**  
   - Cruza pedidos de Estudantes com ofertas de Mentores/Voluntários.  
   - Gera proposta de conexão entre as partes.
7. **Confirmar agendamento ou retirada**  
   - Estudante e Mentor confirmam data/hora da tutoria.  
   - Estudante e Voluntário confirmam retirada/envio do material.  
   - Sistema salva compromisso no banco e notifica.
8. **Avaliar experiência (opcional)**  
   - Após sessão ou doação, usuários deixam feedback.  
   - Sistema atualiza reputação para futuras interações.

### Perfis de usuário

- Estudante
- Mentor
- Voluntário
