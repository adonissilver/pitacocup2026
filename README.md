# PROJETO COPA FUNCIONÁRIOS

## Documento de Visão Geral do Ciclo de Vida de Desenvolvimento do Sistema

---

# 0. Product Vision (Visão do Produto)

A Visão do Produto define claramente o propósito do sistema antes mesmo da análise técnica. Seu objetivo é alinhar expectativas e garantir que todos os envolvidos compreendam o valor do projeto.

### Problema que estamos resolvendo

Atualmente não existe uma plataforma própria para que os funcionários realizem palpites sobre os jogos da Copa do Mundo de forma organizada, transparente e automática. Processos manuais geram dificuldades no controle dos palpites, cálculos de pontuação e divulgação dos rankings.

### Quem são os usuários

* Funcionários participantes da competição.
* Organizadores da competição.
* Administradores do sistema.

### Qual o diferencial do sistema

* Interface simples e intuitiva.
* Ranking atualizado automaticamente.
* Destaque para jogos do Brasil.
* Sistema de avatares personalizados.
* Bloqueio automático de palpites após o início das partidas.
* Competição transparente e auditável.
* Funcionamento em computadores e celulares.

### Como saberemos que o projeto foi um sucesso

* Alta participação dos funcionários.
* Redução do trabalho manual dos organizadores.
* Atualização automática dos rankings.
* Boa experiência de uso.
* Estabilidade durante toda a competição.

---

# 1. Análise Inicial

A Análise Inicial busca compreender a necessidade do negócio, definir o escopo do projeto e avaliar sua viabilidade.

Foi identificado que a empresa deseja promover integração entre os funcionários através de uma competição de palpites da Copa do Mundo, utilizando uma plataforma digital própria.

### Subetapas

#### 1.1 Identificação do Problema

Ausência de ferramenta centralizada para controle dos palpites.

#### 1.2 Definição dos Objetivos

Criar uma plataforma capaz de:

* Cadastrar participantes.
* Registrar palpites.
* Calcular pontuações automaticamente.
* Exibir rankings.
* Acompanhar resultados.

#### 1.3 Identificação dos Stakeholders

* Funcionários.
* Organizadores.
* Equipe de desenvolvimento.

#### 1.4 Definição do Escopo Inicial

Incluso:

* Cadastro de usuários.
* Sistema de palpites.
* Ranking.
* Avatares.
* Dashboard.

Fora do escopo inicial:

* Integração com folha de pagamento.
* Premiação financeira automática.
* Aplicativo nativo para celular.

---

# 2. Análise de Requisitos

Nesta etapa são identificadas todas as funcionalidades e regras que o sistema deverá obedecer.

---

## 2.1 Requisitos Funcionais

### RF01 – Cadastro de Usuários

O sistema deverá permitir o cadastro de participantes contendo:

* Nome
* E-mail (opcional)
* Senha
* Avatar

---

### RF02 – Autenticação

O sistema deverá permitir:

* Login
* Logout
* Recuperação futura de acesso

---

### RF03 – Seleção de Avatar

O participante deverá poder:

* Escolher um avatar disponível.
* Alterar seu avatar posteriormente.

---

### RF04 – Visualização de Jogos

O sistema deverá exibir:

* Jogos futuros.
* Jogos em andamento.
* Jogos encerrados.

---

### RF05 – Registro de Palpites

O usuário poderá informar:

* Gols do Time A.
* Gols do Time B.

---

### RF06 – Edição de Palpites

O usuário poderá alterar palpites enquanto o jogo estiver liberado.

---

### RF07 – Bloqueio Automático

O sistema deverá impedir novos palpites quando faltar menos de 1 minuto para o início da partida.

---

### RF08 – Cálculo de Pontuação

O sistema deverá calcular automaticamente a pontuação obtida pelos participantes.

---

### RF09 – Ranking

O sistema deverá gerar ranking atualizado automaticamente.

---

### RF10 – Perfil do Usuário

O sistema deverá exibir:

* Nome.
* Avatar.
* Pontuação total.
* Posição atual no ranking.

---

### RF11 – Dashboard Principal

O sistema deverá apresentar:

* Próximos jogos.
* Jogos em andamento.
* Ranking resumido.
* Destaque para jogos do Brasil.

---

### RF12 – Administração dos Jogos

O administrador deverá poder:

* Inserir jogos.
* Atualizar resultados.
* Corrigir informações.

---

## 2.2 Requisitos Não Funcionais

### RNF01 – Usabilidade

Interface simples para usuários sem conhecimento técnico.

### RNF02 – Responsividade

Funcionamento em:

* Desktop
* Tablet
* Smartphone

### RNF03 – Performance

Carregamento rápido das telas.

### RNF04 – Segurança

Proteção dos dados dos usuários.

### RNF05 – Disponibilidade

Sistema disponível durante todo o período da competição.

---

## 2.3 Regras de Negócio

### RN01 – Prazo para Palpites

Os palpites poderão ser realizados até 1 minuto antes do início da partida.

---

### RN02 – Jogo em Andamento

Nenhum palpite poderá ser criado ou alterado após o início da partida.

---

### RN03 – Resultado Oficial

A pontuação será calculada utilizando apenas o resultado oficial cadastrado pelo administrador.

---

### RN04 – Avatar

Cada participante poderá possuir apenas um avatar ativo por vez.

---

### RN05 – Ranking

O ranking deverá ser atualizado automaticamente após a publicação dos resultados.

---

### RN06 – Critério de Empate

Em caso de empate de pontuação, a posição seguirá a ordem definida pelo sistema.

Inicialmente será utilizada a ordem existente na base de dados.

---

### RN07 – Exibição do Ranking

O sistema deverá:

* Exibir Top 10.
* Exibir a posição individual do usuário mesmo fora do Top 10.

---

### RN08 – Destaque para Jogos do Brasil

Jogos da Seleção Brasileira deverão receber destaque visual no dashboard.

---

# 3. Design do Sistema

Nesta fase ocorre a transformação dos requisitos em uma solução técnica.

### Subetapas

#### 3.1 Arquitetura

* Front-End Web
* Armazenamento Local
* Futuro Banco de Dados

#### 3.2 Modelagem de Dados

Entidades principais:

* Usuário
* Palpite
* Jogo
* Resultado
* Ranking

#### 3.3 UX/UI

Telas previstas:

* Login
* Cadastro
* Dashboard
* Jogos
* Ranking
* Perfil

#### 3.4 Protótipos

Criação dos fluxos visuais e wireframes.

---

# 4. Desenvolvimento

Implementação das funcionalidades definidas anteriormente.

### Subetapas

* Configuração do projeto.
* Desenvolvimento Front-End.
* Implementação das regras de negócio.
* Integração dos componentes.
* Controle de versão.

---

# 5. Integração e Testes

Validação da solução desenvolvida.

### Subetapas

* Testes unitários.
* Testes de integração.
* Testes funcionais.
* Testes de usabilidade.
* Correção de defeitos.
* Homologação.

---

# 6. Implementação

Disponibilização da solução para uso real.

### Subetapas

* Publicação.
* Configuração do ambiente.
* Treinamento dos usuários.
* Acompanhamento inicial.

---

# 7. Operação e Manutenção

Garantia da continuidade do sistema após sua implantação.

### Subetapas

* Correção de bugs.
* Melhorias evolutivas.
* Monitoramento.
* Atualizações.
* Suporte aos usuários.

---

# Situação Atual do Projeto

Fase Atual:

✔ Product Vision – Concluída

✔ Análise Inicial – Concluída

🔄 Análise de Requisitos – Em refinamento

🔄 Design do Sistema – Em andamento

🔄 Desenvolvimento – Iniciado

⏳ Integração e Testes – Não iniciado

⏳ Implementação – Não iniciado

⏳ Operação e Manutenção – Não iniciado
