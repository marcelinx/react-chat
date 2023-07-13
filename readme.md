# Chat utilizando Vite + React com Firebase

Este é um projeto de chat simples, desenvolvido com Vite, React e Firebase. O aplicativo permite que os usuários se comuniquem em tempo real e armazena as mensagens em um banco de dados do Firebase.

## Pré-requisitos

Antes de iniciar, você precisará ter os seguintes requisitos instalados em sua máquina:

- Node.js (versão 12 ou superior)
- npm (gerenciador de pacotes do Node.js)
- Conta do Firebase (gratuita ou paga)

## Configuração

Siga as etapas abaixo para configurar e executar o projeto:

1. Clone este repositório para sua máquina local:

   ```bash
   git clone ...
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-repositorio
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Crie um novo projeto no Firebase e obtenha as credenciais do Firebase (chave de API, ID do projeto, etc.).

5. Renomeie o arquivo `.env.example` para `.env` e substitua os valores das variáveis de ambiente com as suas credenciais do Firebase.

6. Execute o aplicativo localmente:

   ```bash
   npm run dev
   ```

   Isso iniciará o servidor de desenvolvimento do Vite e o aplicativo estará disponível em `http://localhost:5173`.

7. Acesse o aplicativo no seu navegador e você deverá ver a interface do chat.

## Funcionalidades

O chat possui as seguintes funcionalidades:

- Envio e exibição de mensagens em tempo real.
- Identificação do remetente da mensagem.
- Armazenamento das mensagens no banco de dados do Firebase.

## Personalização

Você pode personalizar o projeto para atender às suas necessidades adicionando recursos adicionais, como:

- Autenticação de usuário com Firebase Authentication.
- Adição de emojis ou recursos de formatação de texto nas mensagens.

## Contribuindo

Se você deseja contribuir para este projeto, siga as etapas abaixo:

1. Faça um fork deste repositório e clone-o para sua máquina local.

2. Crie um branch para sua nova funcionalidade ou correção:

   ```bash
   git checkout -b minha-funcionalidade
   ```

3. Faça as alterações necessárias e adicione os arquivos modificados:

   ```bash
   git add .
   ```

4. Faça o commit das suas alterações:

   ```bash
   git commit -m "Minha nova funcionalidade"
   ```

5. Envie suas alterações para o GitHub:

   ```bash
   git push origin minha-funcionalidade
   ```

6. Abra um pull request neste repositório.
