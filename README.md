## Sobre

O **ConvêniosBR** é um projeto open source que visa criar uma solução compatível com as plataformas iOS e Android para monitorar os convênios firmados pelo governo federal, através dela o usuário pode:

 * Listar os convênios existentes na sua localidade (estado ou municipio)
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
 * Compartilhar as informações de um determinado convênios via Facebook, Twitter, Email e Whatsapp
 * Acessar a versão acessível do ConvêniosBR

O acesso ao aplicativo é livre, entretanto para algumas funções será necessário o cadastro do usuário, esse cadastro pode ser feito a partir do formulário de inscrição disponível ou a partir do login via Facebook.

## Integração com a API Dados Abertos SICONV

Os dados exibidos nesse projetos são extraídos a partir da [API Dados Abertos SINCONV](http://api.convenios.gov.br/siconv/doc/), no momento essa funcionalidade está em implantação, usando apenas uma base parcial de dados.

## Acessibilidade
O projeto detecta automaticamente quando o usuário possui um recurso de acessibilidade ativado (como o VoiceOver), e a partir desse momento exibe uma navegação em texto no lugar de imagens e ícones, permitindo que pessoas deficientes possam utilizar normalmente o **ConvêniosBR**.


## Instalando e configurando

**Clone este repositório.**

    git clone https://github.com/rxluz/ConveniosBR.git.


**Instale o Ionic CLI e Cordova**

    npm install -g ionic cordova gulp

**Pacotes Node e Bower**

	npm install
	ionic state restore
	bower install

## Executando a versão para Android

Dentro do projeto existe na pasta  `platforms/android/build/outputs/apk` os executáveis para que o projeto possa ser visualizado no Android.


## Executando a versão para iOS

Dentro do projeto existe na pasta  `platforms/ios/` existe o arquivo `ConveniosBR.xcodeproj`, como ele é possível abrir o projeto dentro do Xcode e executar em qualquer dispositivo ou simulador iOS.

## Desenvolvimento

O ConvêniosBR é desenvolvido utilizando o framewok opensource [Ionic 1.2](http://ionicframework.com/), o código fonte para alterações está na pasta `www/`, recomenda-se o conhecimento de [Angular 1.3+](https://angularjs.org/), [Sass](http://sass-lang.com/) e [Apache Cordova](https://cordova.apache.org/).

A partir do Ionic é gerado um código nativo para a plataforma Android e iOS.

## Interfaces do projeto

![Certificate Template](https://github.com/vmassuchetto/certificate-generator/raw/master/doc/certificate-template.png)


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
</table>
