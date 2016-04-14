# Conteúdo desse documento
--------
* [Sobre](https://github.com/rxluz/ConveniosBR#sobre)
	* [Integração com a API Dados Abertos SICONV](https://github.com/rxluz/ConveniosBR#integração-com-a-api-dados-abertos-siconv)
	* [Acessibilidade](https://github.com/rxluz/ConveniosBR#acessibilidade)
* [Instalando e configurando](https://github.com/rxluz/ConveniosBR#instalando-e-configurando)
	* [Executando a versão para Android](https://github.com/rxluz/ConveniosBR#executando-a-versão-para-android)
	* [Executando a versão para iOS](https://github.com/rxluz/ConveniosBR#executando-a-versão-para-ios)
	* [Desenvolvimento](https://github.com/rxluz/ConveniosBR#desenvolvimento)
* [Interfaces do projeto](https://github.com/rxluz/ConveniosBR#interfaces-do-projeto)
	* [Ícone e apresentação](https://github.com/rxluz/ConveniosBR#Ícone-e-apresentação)
	* [Login, notificações, menu](https://github.com/rxluz/ConveniosBR#login-notificações-menu)
	* [Home, dicas e sistema de busca](https://github.com/rxluz/ConveniosBR#home-dicas-e-sistema-de-busca)
	* [Informações de um convênio](https://github.com/rxluz/ConveniosBR#informações-de-um-convênio)
	* [Outras interfaces](https://github.com/rxluz/ConveniosBR#outras-interfaces)
* [Status do desenvolvimento](https://github.com/rxluz/ConveniosBR#desenvolvimento-consolidado)
	* [Desenvolvimento consolidado](https://github.com/rxluz/ConveniosBR#desenvolvimento-consolidado)
	* [Desenvolvimento em andamento](https://github.com/rxluz/ConveniosBR#desenvolvimento-em-andamento)
	* [Bugs conhecidos](https://github.com/rxluz/ConveniosBR#bugs-conhecidos)

# Sobre
--------

O **ConvêniosBR** é um projeto [open source](https://github.com/rxluz/ConveniosBR/blob/master/LICENSE.md) que visa criar uma solução compatível com as plataformas [iOS](https://github.com/rxluz/ConveniosBR/tree/master/platforms/ios) e [Android](https://github.com/rxluz/ConveniosBR/tree/master/platforms/android/build/outputs/apk) para monitorar os convênios firmados pelo governo federal, através dela o usuário pode:

 * Listar os convênios existentes na sua localidade (região, estado, municipio)
 * Ver informações especificas de um determinado convênio
 * Monitorar um convênio e receber atualizações de status
 * Denunciar irregularidades em um determinado convênio a partir da plataforma [e-OUV](https://sistema.ouvidorias.gov.br/publico/Manifestacao/RegistrarManifestacao.aspx).
 * Receber via email relatórios dos convênios monitorados
 * Acessar gráficos e outras informações estatísticas sobre um proponente ou convênio.
 * Efetuar pesquisas por texto ou voz para encontrar um determinado convênio
 * Efetuar filtros nas informações dispostas no APP
 * Postar comentários sobre um convênio ou consultar os comentários postados por outros usuários
 * Visualizar informações financeiras de um convênio
 * Visualizar o cronograma de atividades de um convênio
 * Visualizar informações sobre o concedente, proponente e interveniente
 * Compartilhar as informações de um determinado convênio via Facebook, Twitter, Email e Whatsapp
 * Acessar a versão acessível do ConvêniosBR

O acesso ao aplicativo é livre, entretanto para algumas funções será necessário o cadastro do usuário, esse cadastro pode ser feito a partir do formulário de inscrição disponível ou a partir do login via Facebook.

## Integração com a API Dados Abertos SICONV

Os dados exibidos nesse projetos são extraídos a partir da [API Dados Abertos SINCONV](http://api.convenios.gov.br/siconv/doc/), no momento essa funcionalidade está em implantação, usando apenas uma base parcial de dados.

## Acessibilidade
O projeto detecta automaticamente quando o usuário possui um recurso de acessibilidade ativado (como o VoiceOver), e a partir desse momento exibe uma navegação em texto no lugar de imagens e ícones, permitindo que pessoas deficientes possam utilizar normalmente o **ConvêniosBR**, também foi adicionado a busca por voz para facilitar busca de informações dentro do aplicativo.


# Instalando e configurando
--------------------------

**Caso você deseje apenas visualizar o projeto num smartphone Android baixe o APK disponível em [`platforms/android/build/outputs/apk`](https://github.com/rxluz/ConveniosBR/tree/master/platforms/android/build/outputs/apk), para versão web acesse esse [link](http://api.appock.co/convenios.br/www).**

**Clone este repositório.**

    git clone https://github.com/rxluz/ConveniosBR.git.


**Instale o Ionic CLI e Cordova**

    npm install -g ionic cordova gulp

**Pacotes Node e Bower**

	npm install
	ionic state restore
	bower install

## Executando a versão para Android

Dentro do projeto existe na pasta  [`platforms/android/build/outputs/apk`](https://github.com/rxluz/ConveniosBR/tree/master/platforms/android/build/outputs/apk) os executáveis para que o projeto possa ser visualizado no Android.


## Executando a versão para iOS

Dentro do projeto existe na pasta  [`platforms/ios/`](https://github.com/rxluz/ConveniosBR/tree/master/platforms/ios) existe o arquivo `ConveniosBR.xcodeproj`, como ele é possível abrir o projeto dentro do Xcode e executar em qualquer dispositivo ou simulador iOS.

## Desenvolvimento

O ConvêniosBR é desenvolvido utilizando o framewok opensource [Ionic 1.2](http://ionicframework.com/), o código fonte para alterações está na pasta `www/`, recomenda-se o conhecimento de [Angular 1.3+](https://angularjs.org/), [Sass](http://sass-lang.com/) e [Apache Cordova](https://cordova.apache.org/).

A partir do Ionic é gerado um código nativo para a plataforma Android e iOS.


# Interfaces do projeto
-------------------------------------
**Os screenshots abaixo não contém informações reais, servindo apenas como referência estrural do projeto**

## Ícone e apresentação
<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2662_1024.jpg" style="float: left !important;" width=50%></img>
Ícone

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2663_1024.jpg" style="float: right !important;" width=50%></img>
Splash screen

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2664_1024.jpg" style="float: right !important;" width=50%></img>
Apresentação 1 (onboarding)

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2665_1024.jpg" style="float: right !important;" width=50%></img>
Apresentação 2 (onboarding)

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2666_1024.jpg" style="float: right !important;" width=50%></img>
Apresentação 3 (onboarding)

## Login, notificações, menu

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2667_1024.jpg" style="float: right !important;" width=50%></img>
Identificação (Login)


<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2669_1024.jpg" style="float: right !important;" width=50%></img>
Inscrição

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2671_1024.jpg" style="float: right !important;" width=50%></img>
Sistema de notificações

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2678_1024.jpg" style="float: right !important;" width=50%></img>
Menu de opções rápidas

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2670_1024.jpg" style="float: right !important;" width=50%></img>
Menu deslogado

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2672_1024.jpg" style="float: right !important;" width=50%></img>
Menu logado

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2673_1024.jpg" style="float: right !important;" width=50%></img>
Opções do usuário

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2674_1024.jpg" style="float: right !important;" width=50%></img>
Editar perfil

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2675_1024.jpg" style="float: right !important;" width=50%></img>
Alterar senha

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2676_1024.jpg" style="float: right !important;" width=50%></img>
Cancelar conta

## Home, dicas e sistema de busca
<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2677_1024.jpg" style="float: right !important;" width=50%></img>
Tela principal (home)

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2697_1024.jpg" style="float: right !important;" width=50%></img>
Sistema de dicas

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2679_1024.jpg" style="float: right !important;" width=50%></img>
Formulário de busca

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2680_1024.jpg" style="float: right !important;" width=50%></img>
Busca por voz

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2681_1024.jpg" style="float: right !important;" width=50%></img>
Resultados da busca

## Informações de um convênio
<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2683_1024.jpg" style="float: right !important;" width=50%></img>
Visualização inicial do convênio e gráfico de cronograma de gastos

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2686_1024.jpg" style="float: right !important;" width=50%></img>
Gráfico convênios desse proponente

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2684_1024.jpg" style="float: right !important;" width=50%></img>
Abas de concedente, proponente e interveniente e justificativa do convênio

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2685_1024.jpg" style="float: right !important;" width=50%></img>
Principais comentários para um convênio

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2687_1024.jpg" style="float: right !important;" width=50%></img>
Opção para denunciar um convênio

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2688_1024.jpg" style="float: right !important;" width=50%></img>
Informações financeiras de um convênio (inicio)

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2689_1024.jpg" style="float: right !important;" width=50%></img>
Informações financeiras de um convênio (fim)

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2690_1024.jpg" style="float: right !important;" width=50%></img>
Cronograma de atividades de um convênio

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2699_1024.jpg" style="float: right !important;" width=50%></img>
Lista de todos os comentários de um convênio

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2691_1024.jpg" style="float: right !important;" width=50%></img>
Marcar um comentário como impróprio

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2692_1024.jpg" style="float: right !important;" width=50%></img>
Compartilhar as informações do convênio


## Outras interfaces
<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2693_1024.jpg" style="float: right !important;" width=50%></img>
Envio de feedback e solicitação de suporte

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2694_1024.jpg" style="float: right !important;" width=50%></img>
Sobre o ConvêniosBR (inicio)

<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2695_1024.jpg" style="float: right !important;" width=50%></img>
Sobre o ConvêniosBR (fim)


<img src="https://raw.githubusercontent.com/rxluz/ConveniosBR/master/thumbs/thumb_IMG_2696_1024.jpg" style="float: right !important;" width=50%></img>
Colaboradores do ConvêniosBR




# Status do desenvolvimento
----------------------------------------------------------
## Desenvolvimento consolidado
Os seguintes itens já tiveram o seu desenvolvimento concluído:
<table>
  <tr>
    <td>id</td>
    <td>nome</td>
    <td>prioridade</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Identificação via email e senha</td>
    <td>Alta</td>
  </tr>
 <tr>
    <td>2</td>
    <td>Identificação via facebook</td>
    <td>Média</td>
  </tr>
 <tr>
    <td>3</td>
    <td>Formulário de inscrição integrado ao Facebook</td>
    <td>Alto</td>
  </tr>
 <tr>
    <td>4</td>
    <td>Alterar minha senha</td>
    <td>Alto</td>
  </tr>
 <tr>
    <td>5</td>
    <td>Sair</td>
    <td>Alto</td>
  </tr>
 <tr>
    <td>6</td>
    <td>Notificações internas (toast)</td>
    <td>Alto</td>
  </tr>
   <tr>
    <td>7</td>
    <td>Interfaces bem-vindo (onboarding)</td>
    <td>Média</td>
  </tr>
   <tr>
    <td>8</td>
    <td>Lista de convênios próximo (home)</td>
    <td>Alto</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Lista de convênios monitorados</td>
    <td>Alto</td>
  </tr>
  <tr>
    <td>11</td>
    <td>Sistema de dicas (tips)</td>
    <td>Média</td>
  </tr>
  <tr>
    <td>12</td>
    <td>Busca por voz</td>
    <td>Média</td>
  </tr>
  <tr>
    <td>13</td>
    <td>Menu</td>
    <td>Alta</td>
  </tr>
  <tr>
    <td>14</td>
    <td>Informações gerais do convênio</td>
    <td>Alta</td>
  </tr>
  <tr>
    <td>15</td>
    <td>Gráfico Cronograma de Gastos</td>
    <td>Média</td>
  </tr>
  <tr>
    <td>15</td>
    <td>Gráfico Convênios do Proponente por ano</td>
    <td>Média</td>
  </tr>
  <tr>
    <td>16</td>
    <td>Informações financeiras do convênio</td>
    <td>Média</td>
  </tr>
  <tr>
    <td>17</td>
    <td>Cronograma do convênio</td>
    <td>Média</td>
  </tr>
  <tr>
    <td>18</td>
    <td>Compartilhar o convênio no Facebook, Twitter, Whatsapp e Email</td>
    <td>Média</td>
  </tr>
 <tr>
    <td>19</td>
    <td>Visualizar os comentários</td>
    <td>Alta</td>
  </tr>
 <tr>
    <td>20</td>
    <td>Feedback e suporte</td>
    <td>Alta</td>
  </tr>
 <tr>
    <td>20</td>
    <td>Sobre o ConvêniosBR</td>
    <td>Baixa</td>
  </tr>
 <tr>
    <td>20</td>
    <td>Lista de colaboradores</td>
    <td>Baixa</td>
  </tr>
</table>



## Desenvolvimento em andamento

<table>
  <tr>
    <td>id</td>
    <td>nome</td>
    <td>prioridade</td>
  </tr>
  <tr>
    <td>21</td>
    <td>Consolidação da identidade visual, padronização de cores e estilos das interfaces</td>
    <td>Média</td>
  </tr>
  <tr>
    <td>22</td>
    <td>Integração com a API Dados Abertos Sinconv</td>
    <td>Alta</td>
  </tr>
  <tr>
    <td>23</td>
    <td>Algoritmo da Busca</td>
    <td>Alta</td>
  </tr>
  <tr>
    <td>24</td>
    <td>Filtrar resultados</td>
    <td>Alta</td>
  </tr>
  <tr>
    <td>25</td>
    <td>Consolidação da acessibilidade em todas as interfaces</td>
    <td>Alta</td>
  </tr>
  <tr>
    <td>26</td>
    <td>Envio do email de monitoramento para usuários inscritos</td>
    <td>Alta</td>
  </tr>
  <tr>
    <td>26</td>
    <td>Gerenciar comentários (adicionar, gostar, denunciar, excluir)</td>
    <td>Alta</td>
  </tr>
  <tr>
    <td>27</td>
    <td>API para o banco de dados de informações especificas</td>
    <td>Alta</td>
  </tr>
  <tr>
    <td>27</td>
    <td>API para o banco de dados de informações especificas</td>
    <td>Alta</td>
  </tr>
  <tr>
    <td>28</td>
    <td>Vídeo de divulgação do projeto</td>
    <td>Média</td>
  </tr>
  <tr>
    <td>29</td>
    <td>Redes sociais</td>
    <td>Média</td>
  </tr>
</table>


## Bugs conhecidos

<table>
  <tr>
    <td>id</td>
    <td>nome</td>
    <td>prioridade</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Ao clicar em um botão o botão pode ficar invisível</td>
    <td>Alta</td>
  </tr>
  <tr>
    <td>2</td>
    <td>O teclado não é exibido quando a busca é exibida ou permanece ligado apos a busca ser finalizada</td>
    <td>Alta</td>
  </tr>
  <tr>
    <td>3</td>
    <td>O menu de opções rápidas aparece em interfaces internas</td>
    <td>Média</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Ao clicar em um convênio as vezes o mesmo não é carregado</td>
    <td>Alta</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Os gráficos não são exibidos quando se aciona um segundo convênio (é necessário fechar o aplicativo e abrir novamente)</td>
    <td>Alta</td>
  </tr>
  <tr>
    <td>4</td>
    <td>O titulo de algumas interfaces aparece descentralizado</td>
    <td>Média</td>
  </tr>

  <tr>
    <td>5</td>
    <td>As opções de login e inscreva-se aparecem na tela de apresentação mesmo que o usuário esteja logado</td>
    <td>Alta</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Ao clicar em compartilhar a tela de compartilhamento as vezes aparece duplicada</td>
    <td>Alta</td>
  </tr>
  <tr>
    <td>7</td>
    <td>O botão curtir aparece ativado para todos os comentários</td>
    <td>Alta</td>
  </tr>
  <tr>
    <td>8</td>
    <td>A opção fechar informações sobre status da acessibilidade não funciona corretamente</td>
    <td>Média</td>
  </tr>
 </table>
