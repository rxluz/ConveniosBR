app.controller('Data', function($scope, $ionicSideMenuDelegate, $rootScope, $ionicBackdrop, $state, $cookies, $ionicPopup, $q,$localstorage, $ionicScrollDelegate, $ionicPopover, $cordovaCamera, $timeout, $cordovaSocialSharing, $cordovaInAppBrowser) {
  $scope.$watch(function(){return $state.current.name;}, function(v){
    $scope.view(v);
  });

  $rootScope.nearPlaces= [
  {
    "id":1,
    "name":"Reaparelhamento da Polícia Civil do Distrito Federal mediante aquisição de viaturas.",
    "justification":"O Distrito Federal possui atualmente um índice populacional na ordem de 2.852 MILHÕES de habitantes, distribuídos em várias Regiões Administrativas, sendo certo que boa parte delas fazem limites territorial com o Entorno do Distrito Federal, o qual pertence ao estado de Goiás, região esta com significativos índices de criminalidade; Em referidas Regiões nota-se a incidência de algumas manchas de criminalidade, sendo certo que um dos objetivos institucionais da PCDF mira-se na implementação de ações com vista a diminuição de tais índices de criminalidade.\nFrise-se que a aquisição das viaturas que versa o presente Convênio certamente possibilitará o desenvolvimento das ações referidas, revelando-se importante ferramenta de combate ao crime e aos criminosos. Com esse intuito é que se pretende adquirir 27 (vinte e sete) veículos sedan caracterizados para substituição de parte da frota que se encontra obsoleta e antieconômica.\nDestacamos que a aquisição será de relevante expressão, visto que a Polícia Civil do Distrito Federal enfrentará o grande desafio de atuar, juntamente com as demais forças policiais, na segurança dos grandes eventos que o ocorrerão no Brasil a partir do ano de 2016.\nSendo a recomposição da frota de veículos de crucial importância, pois terá impacto direto no atendimento das demandas, tanto da população residente do Distrito Federal e entorno, bem como, àquelas relacionadas ao público (turistas nacionais e estrangeiros, delegações diversas, profissionais de imprensa entre outros), vinculados aos grandes eventos a serem realizados.\na) DIAGNÓSTICO: Conforme devidamente esclarecido na justificativa técnica que compõe o Projeto/Termo de Referência, para se chegar ao quantitativo pretendido, se considerou o recurso financeiro disponibilizado e o perfil dos veículos a serem adquiridos, de tal forma que se possa renovar parte da frota que está obsoleta com a maior quantidade e melhor aquisição possível. É importante ressaltar que as aquisições visam a renovação e não o incremento de novos veículos.\nEm síntese, reafirmamos que a aquisição será de relevância estratégica, visto que a Polícia Civil do Distrito Federal enfrentará o grande desafio de atuar, juntamente com as demais forças policiais, na segurança dos grandes eventos que o ocorrerão no Brasil a partir do ano de 2016. Consoante calendário oficial, Olimpíadas (2016) e Universíade (2019), adventos de ampla divulgação e repercussão nacional e internacional. b) RELAÇÃO ENTRE A PROPOSTA E OS, OBJETIVOS E DIRETRIZES DO PROGRAMA FEDERAL (PRONASCI OU FNSP): A pretensa aquisição permitirá de forma direta o alcance dos objetivos e diretrizes traçadas pelo PRONASCI, eis que resultará em ações típicas que permitirão melhorias dos índices de Segurança Pública local. O reaparelhamento dos órgãos de segurança pública contemplando as unidades da Polícia Civil do Distrito Federal com viaturas ágeis e apropriadas para atender aos diversos tipos de ocorrências está em conformidade com a previsão contida no Art.4o da Lei 10.201/2001 e alterações propostas pela Lei 10.746/2003, que instituiu o Fundo nacional de Segurança Pública.Neste sentido a proposta está em convergência com a Lei 10.201 no seu Art. 4o que prevê: O FNSP apoiará projetos na área de segurança pública destinados, dentre outros, a: (Redação dada pela Lei no 10.746, de 10.10.2003). O FNSP apoiará projetos na área de segurança pública destinados , dentre outros, a: I - reequipamento, treinamento e qualificação das polícias civis e militares, corpos de bombeiros militares e guardas municipais. c) CARACTERIZAÇÃO DOS INTERESSES RECÍPROCOS ENTRE O PROPONENTE E A UNIÃO:\nO alcance das melhorias dos índices de Segurança Pública vem de encontro aos objetivos esperados pelo Proponente bem como pela União. O combate à criminalidade são objetivos que vão ao encontro dos interesses da União em reestruturar e Qualificar as Polícias Judiciárias dos Entes Federativos, proporcionando assim a redução de delitos criminosos acima referenciados. O Programa Segurança Pública com Cidadania - Apoio à Estruturação, Reaparelhamento, Modernização Organizacional e Tecnológica das Instituições de Segurança Pública do Governo Federal, consoante à proposta apresentada no. 36.425/2015, que visa reestruturar a PCDF, possuem interesses pertinentes, haja vista que o objetivo é promover o reaparelhamento da segurança pública, proporcionando melhores condições",
    "warrant":"Decreto 6170/07",
    "grantor":"MINISTERIO DA JUSTICA",
    "proponent":"\nSECRETARIA DE ESTADO DE SEGURANCA PUBLICA DO DISTRITO FEDERAL",
    "proponent_address":"SAM conjunto A bloco A Edifício Sede da SSP",
    "proponent_city":"BRASILIA",
    "proponent_phone":"\n61/ 3901-5085",
    "proponent_person":"ISABEL SEIXAS DE FIGUEIREDO",
    "status":"danger",
    "status_tip":"Prestação de contas rejeitada"
  },
  {
    "id":2,
    "name":"Pavimentação asfáltica no Distrito Federal.",
    "justification":"A execução de pavimentação asfáltica no Distrito Federal é uma obra de infraestrutura urbana fundamental para a circulação de automóveis e o transporte público com segurança e mobilidade.\nAtualmente as pessoas necessitam se deslocarem de casa para o trabalho com segurança e redução dos tempos de viagem. A pavimentação asfáltica é uma obra de grande apelo das comunidades mais carentes.",
    "warrant":"Decreto 6170/07",
    "grantor":"MINISTERIO DAS CIDADES",
    "proponent":"\nSECRETARIA DE ESTADO DE INFRAESTRUTURA E SERVICOS PUBLICOS",
    "proponent_address":"\nA SAPS - SETOR DE AREAS PUBLICAS SUL LOTE B",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61)3306-",
    "proponent_person":"JULIO CESAR PERES",
    "status":"warning",
    "status_tip":"Aguardando Prestação de Contas"
  },
  {
    "id":3,
    "name":"REFORMA DE UNIDADE DE ATENÇÃO ESPECIALIZADA EM SAÚDE",
    "justification":"O Hospital Materno Infantil de Brasília, HMIB, tem importância central na assistência aos recém-nascidos críticos, prematuros extremos e portadores de malformações congênitas cirúrgicas, por contar com a única equipe de cirurgia pediátrica com atuação neonatal em toda rede da Secretaria de Estado de saúde do Distrito Federal.\nMuitos dos leitos não atendem às exigências da portaria GM/MS 930/2012, com luminosidade, espaçamento entre os leitos inadequado, sem convívio para as mães, com posto de reanimação, coleta de exames e enfermagem funcionando conjuntamente em um mesmo espaço. Tendo em vista a inadequação da unidade e vislumbrando maiores benefícios ao RN prematuro ou com agravos, é que surgiu a necessidade de reforma de um setor disponível no hospital, que poderá atender os requisitos da portaria GM/MS 930/2012 e do Método Canguru e proporcionar mais eficiência no atendimento neonatal no HMIB e em toda rede SES/DF. Com isso, serão restituídos à internação geral do hospital os leitos atualmente ocupados, aumentando a capacidade instalada de internação do hospital, especialmente leitos cirúrgicos pediátricos e de maternidade.\nAs propostas da nova unidade canguru e do ambulatório de follow up trarão como primeiro benefício, um cuidado mais humanizado aos recém-nascidos internados e em condições de ficarem ao lado de suas mães, com todos os benefícios daí extraídos. Como segundo consequência, promoverá a redução do tempo de permanência do Bebê na Unidade de Terapia Intensiva Neonatal (UTIN) existente no hospital, resultando em maior giro de leitos e consequente aumento na oferta de leitos intensivos, atendendo à alta demanda de pacientes neonatais de maior complexidade de toda a rede SES DF. Como terceira consequência, aumentará a oferta de acompanhamento ambulatorial aos pacientes após a alta, totalizando os cuidados progressivos neonatais, que são a forma mais eficiente, racional, humanizada e que proporciona melhores resultados na promoção da sobrevida e saúde dA Reforma do Hospital Materno Infantil de Brasília, HMIB, cujo CNES é 0010537 tem como relevância a adequação da unidade de forma que possa atender a Portaria GM/MS 930/2012 proporcionando uma maior eficiência na assistência aos recém-nascidos críticos, prematuros extremos e portadores de malformações congênitas cirúrgicas. O projeto caracteriza-se pela adoção de zoneamento dividido em dois grupos funcionais principais: área para permanência dos pacientes e área para serviços e apoio. A unidade terá 15 leitos com 5 enfermarias de 2 leitos e uma de 5 leitos, em sistema de alojamento conjunto canguru, em que cada leito é composto de cama para a mãe e berço para o bebê. Além das enfermarias, as pacientes terão um local de convívio, que também poderá ser utilizado pelos acompanhantes e familiares. No setor de apoio e serviços, além do posto de enfermagem a unidade terá locais de apoio, procedimentos, chefias, área para conforto clínico, lavanderia para uso das mães e espaço multiuso destinado às atividades de reunião com os pais, familiares, colegiado gestor da unidade, entre outras. Da edificação existente permanecerá a estrutura de concreto, que poderá receber recuperação e reforço conforme indicação de avaliação especializada.",
    "warrant":"",
    "grantor":"MINISTERIO DA SAUDE",
    "proponent":"\nFUNDO DE SAUDE DO DISTRITO FEDERAL",
    "proponent_address":"\nSAIN – Parque Rural, Bloco B, 1o Andar Sala 152",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61 33482510",
    "proponent_person":"RICARDO CARDOSO DOS SANTOS",
    "status":"ok",
    "status_tip":"Em execução"
  },
  {
    "id":4,
    "name":"Este convênio tem como objeto garantir a funcionamento do Centro de Recondicionamento do Gama/DF e assim realizar atividade de recebimento, triagem, recondicionamento e doação de equipamentos eletroeletrônico que sertão doados em perfeita condição de uso para revitalização dos pontos de inclusão digital localizados no Distrito Federal e Estado de Goiás. Ofertar oportunidade de capacitação profissional para jovens em situação de vulnerabilidade social e de públicos prioritários das políticas de inclusão digital, desenvolver atividades de sensibilização em temáticas relacionadas à educação para a cidadania, mercado de trabalho, preservação do meio ambiente e resíduos eletroeletrônicos.",
    "justification":"Em pesquisa realizada pelo IBGE (PNAD 2013) 49,4% dos domicílios do país não possuem acesso à internet. Portanto, mais da metade da população está sem possibilidade de utilizar essa tecnologia. Com os computadores recondicionados, é possível e viável estabelecer uma relação entre políticas de acesso à informação e as políticas de inclusão digital que, de alguma forma, beneficiam a camada mais carente da população.\nA enorme inovação tecnológica tem um lado bom de sempre melhorar e facilitar as atividades e necessidades do homem, porém, em função da alta velocidade da inovação, os equipamentos eletroeletrônicos têm seu tempo útil de uso reduzido drasticamente. O resultado é que equipamentos de informática que ainda podem ser utilizados tornam-se obsoletos, o que aumenta o problema do lixo eletroeletrônico. Nesse contexto o Centro de Recondicionamento de Computadores vem com uma proposta inovadora de ampliar a vida útil desses equipamentos, através do recondicionamento, reduzindo o impacto ambiental que esses equipamentos causariam ao serem descartados.\nOutra dificuldade que a sociedade brasileira enfrenta ainda é a falta de oportunidade de profissionalização para adolescentes e jovens de baixa renda. Sem perspectivas de emprego ou mesmo sem educação de qualidade, ou que apresente perspectivas reais de empregabilidade, os adolescentes e jovens, por vezes, são vítimas fáceis da violência, do envolvimento em assaltos, tráfico e uso de drogas, ou ainda da inserção precoce, ilegal e de forma precária no mercado de trabalho. Estes fenômenos têm sido cada vez mais comuns no Distrito Federal e em diversas cidades do entorno.\nConsiderando que as diretrizes e políticas públicas apontam para um aumento significativo da quantidade de jovens nestas condições, o CRC Gama oferece capacitação profissional voltada para a população de baixa renda. Neste sentido, o projeto acrescenta uma resposta concreta ao problema do índice expressivo de desemprego na faixa etária de 18 a 29 anos, no Distrito Federal e Entrono. (Censo 2010. – Instituto Brasileiro de Geografia e Estatística, Rio de Janeiro).\nDesde o ano de 2006, o Centro de Recondicionamento de Computadores – CRC Gama promove a Inclusão Digital e a formação profissional de jovens de baixa renda em situação de vulnerabilidade social e de públicos prioritários da política de inclusão digital. A Capacitação é realizada por meio da oferta dos cursos de operação, manutenção, configuração e recondicionamento de computadores, cursos de lógica de programação, fundamentos de redes e atividades de sensibilização em temáticas relacionadas à preservação do meio ambiente e lixo eletrônico.\nDentre os benefícios do Projeto, além da inserção dos jovens de baixa renda no mercado de trabalho através da capacitação profissional e geração de renda, desenvolve práticas para a sustentabilidade do planeta, captando e recebendo doações de computadores que são recondicionados e doados em perfeitas condições de uso para projetos de inclusão digital, como escolas públicas, bibliotecas públicas, telecentros e projetos sociais, o que contribui para a melhoria da aprendizagem geral, para a ampliação de redes de conhecimento, de negócios, de oportunidades e para facilitar a vida dos cidadãos.\n O CRC Gama oferece à comunidade local um espaço moderno e funcional, sobretudo acolhedor, para as diversas atividades desenvolvidas, com perspectiva de formação e desenvolvimento para jovens a partir dos 14 anos. Além disto, as doações de equipamentos de informática recondicionados, inclusive para as escolas públicas da comunidade, significam um salto em termos de democratização da informática para as localidades de baixa renda.\nA continuidade do projeto CRC Gama-DF é uma resposta às demandas da comunidade por computadores em plena condição de uso e formação dos jovens, sendo uma iniciativa pioneira no Gama e até mesmo no DF. Isto significa acesso a fontes de informação e tecnologia, perspectiva de aprendizagem, desenvolvimento e capacitação profissional para os jovens de baixa renda.",
    "warrant":"",
    "grantor":"MINISTERIO DAS COMUNICACOES",
    "proponent":"\nASSOCIACAO DE APOIO A FAMILIA AO GRUPO E A COMUNIDADEDF",
    "proponent_address":"QI 06 Lts. 20/80",
    "proponent_city":"\nBRASILIA",
    "proponent_phone":"(61) 3384-0156",
    "proponent_person":"\nVANDA ARAUJO SILVA",
    "status":"ok",
    "status_tip":"Em execução"
  },
  {
    "id":5,
    "name":"\nRealizar o processo de seleção de grupos e coletivos de quadrilhas juninas para participar do projeto BRASÍLIA JUNINA - Circuito de Quadrilhas Juninas, que consiste em apresentações de quadrilhas juninas em Regiões Administrativas do Distrito Federal e difusão das manifestações tradicionais de Cultura Popular.",
    "justification":"A Secretaria de Estado de Cultura do Distrito Federal, por meio da Subsecretaria de Fomento e Incentivo Cultural, vem propor o presente projeto, que compreende a um conjunto de ações no campo da cultura popular, contemplando a realização de um edital de seleção para circulação de grupos ou coletivos de quadrilha junina que desenvolvam atividades culturais e artísticas relevantes para a difusão e promoção da cultura popular junina no âmbito de Distrito Federal.\nOriginária das antigas danças populares de áreas rurais da França e Inglaterra, a Quadrilha Junina foi introduzida no Brasil no início do século 19, por membros da elite imperial. Durante o Império, a quadrilha era a dança que abria os bailes da Corte. Depois se popularizou, saindo dos salões palacianos para as ruas e clubes populares, com o povo assimilando a sua coreografia e dando-lhe novas características.\nCom essa popularização, a quadrilha se tornou uma dança de corporações profissionais, como a dos Barbeiros Cariocas que a executavam nas Folias do Divino. Como a festa do Divino Espírito Santo é celebrada muito próxima ao mês de junho e das datas dedicadas aos santos deste mês, ela passou a ser dançada ao ar livre, nas festas juninas em louvor a Santo Antônio, São Pedro e São João.\nAssim, a atual proposta visa dar continuidade à valorização dos grupos ou coletivos de Quadrilhas Juninas do DF, pela necessidade de atender a uma demanda local em relação ao grande número de quadrilhas juninas e grupos que se dedicam a manter e preservar, difusão e promoção das manifestações tradicionais e populares da região. Bem como, pelo desenvolvimento da manifestação cultural democrática, que abrange e acolhe as esferas sociais e econômicas, principalmente para as classes C e D, sem quaisquer distinções de raça, etnias, orientação sexual etc.\nPara o Distrito Federal como um todo é importante à divulgação e a manutenção da cultura popular de quadrilhas juninas, isso significa evocar sua história e sua originalidade, visto que essa é a vocação natural.\nO edital de chamamento público estipulará critérios para seleção de grupos ou coletivos de quadrilha junina que desenvolvem atividades culturais e artísticas relevantes para a difusão e promoção da cultura popular junina no âmbito de Distrito Federal. O valor a ser repassado a cada um dos selecionados será de R$ 12.000,00 (doze mil reais).\nApós o processo de seleção, será realizado o Circuito das Quadrilhas Juninas protagonizadas pelos grupos ou coletivos selecionados, visando a difusão e a promoção das atividades socioculturais tradicionais. As apresentações acontecerão em Regiões Administrativas do Distrito Federal. Além das apresentações, as vencedoras promoverão oficinas sobre a tradição dos Festejos Juninos em Escolas Públicas do Distrito Federal.\nO Projeto atenderá, por meio de suas atividades, aproximadamente 1000 (mil) pessoas de forma direta e indireta, entre instituições culturais, coletivos e grupos de cultura popular, produtores culturais de cultura popular e o público integrante deste segmento cultural, compreendido por crianças, jovens e adultos da comunidade em que a instituição está inserida.\nAinda, o Projeto ora apresentado está em consonância ao Plano Nacional de Cultura (Lei No 12.343, de 2 de dezembro de 2010), atendendo aos seguintes critérios, dentre outros:\nI. Reconhecer e valorizar a diversidade cultural, étnica e regional.\nII. Valorizar e difundir as criações artísticas e os bens culturais.\nIII. Universalizar o acesso à arte e à cultura.\nIV. Reconhecer os saberes, conhecimentos e expressões tradicionais e os direitos de seus detentores.\nV. Ampliar a comunicação e possibilitar a troca entre os diversos agentes culturais, criando espaços, dispositivos e condições para iniciativas compartilhadas, o intercâmbio e a cooperação, aprofundando o processo de integração nacional, absorvendo os recursos tecnológicos, garantindo as conexões locais com os fluxos culturais contemporâneos e centros culturais internacionais, estabelecendo parâmetros para a globalização da cultura.\nDestaca-se, também, que o projeto em pauta está diretamente relacionado aos objetivos e diretrizes",
    "warrant":"Decreto 6170/07",
    "grantor":"MINISTERIO DA CULTURA",
    "proponent":"\nSECRETARIA DE ESTADO DE CULTURA DO DISTRITO FEDERAL",
    "proponent_address":"\nSetor Cultural Norte - Via N2 – Anexo do Teatro Nacional Claudio Santoro",
    "proponent_city":"\nBRASILIA",
    "proponent_phone":"61/33256131",
    "proponent_person":"\nLUIS GUILHERME ALMEIDA REIS",
    "status":"danger",
    "status_tip":"Prestação de contas rejeitada"
  },
  {
    "id":6,
    "name":"Construção dos Centros de Detenção Provisória CDP1, CDP2, CDP3 e CDP4 no Setor C, Complexo Penitenciário da Papuda, totalizando 3.200 vagas.",
    "justification":"\nO sistema Penitenciário do Distrito Federal, enquanto órgão responsável pela execução penal e pelas ações de planejamento e coordenação do Sistema Penitenciário no Estado toma para si o desafio de oferecer as condições necessárias pra o cumprimento das determinações legais e das diretrizes estabelecidas pelo Governo Federal, com o intuito de realizar complexas modificações no tratamento e na execução penal, por meio de ações estratégicas e estruturantes.\nNesse contexto, a proposta cadastrada tem o objetivo de criar mais um estabelecimento prisional com capacidade de 3.200 vagas, o que trará grande melhoria no déficit de vagas hoje existente.\nVale salientar que o Sistema Penitenciário do Distrito federal é composto de 06 estabelecimentos penais, totalizando um número de 6.595 vagas. Porém esses estabelecimentos estão abrigando uma média de 12.000 presos, ou seja, há praticamente 100% de excedentes na lotação dos presídios. Buscando solucionar o déficit de vagas que aflige o Sistema Penitenciário local, fazem-se necessárias ações buscando minorar tal problemática. Assim, a construção de mais um estabelecimento prisional além de melhorar o atendimento ao preso com novas instalações, estará melhorando consideravelmente o problema de falta de vagas no DF.",
    "warrant":"Decreto 6170/07",
    "grantor":"",
    "proponent":"",
    "proponent_address":"",
    "proponent_city":"",
    "proponent_phone":"",
    "proponent_person":"",
    "status":"",
    "status_tip":""
  }
];

//alert(1);


  $scope.shareAnywhere = function() {
      $cordovaSocialSharing.share("Urban Maps", "Urban Maps", "", "https://urban.ma");
  };

  $scope.height="180px";

  $scope.resources={
    whell: false,
    visual: false,
    hearing: false,
    mental: false,
    test: function(){
      alert('ola');
    }
  };



  $scope.comments={
    flag: {
      init: function(id){
        if($rootScope.acb.voiceover()===true){
          alert('Comentário denunciado com sucesso');
          //$rootScope.notification.show("Comentário denunciado com sucesso", 0);
        }else{
          $rootScope.menu.footer.show([
            {
              icon: "icon flaticon-round-1",
              name: "Marcar como impróprio",
              action: function(){
                //console.log('ila');
                //console.log($rootScope);

              }
            }
          ]);
        }

      }
    },

    all: {
      close: function(){
        $rootScope.modal.close.start();
        $rootScope.popupIsOpen=false;
      },

      init: function(id){
        $rootScope.popupIsOpen=true;
        $rootScope.popup.content.start('templates/data.local.comments.html', $scope);
      }
    }
  };


  $scope.timeline={
    init: function(id){
        $rootScope.popup.content.start('templates/data.local.timeline.html', $scope);
    }
  };

  $scope.follow={
    init: function(id){
      $rootScope.notification.show("Monitoramento ativado", 0);
    }
  };

  $scope.finance={
    init: function(id){
        $rootScope.popup.content.start('templates/data.local.finance.html', $scope);
    }
  };



  $scope.photo={
    add: {
      init: function(id, popupIsOpen){
        $scope.photo.add.clear(id);



        $rootScope.menu.footer.show([
          {
            icon: "icon flaticon-camera",
            name: "Tirar uma foto",
            action: function(){
              $scope.photo.add.take(id);

            }
          },
          {
            icon: "icon flaticon-square",
            name: "Foto da biblioteca",
            action: function(){
              $scope.photo.add.choose(id);
            }
          }
        ]);
      },

      clear: function(id){
        //essa função limpa a lista de fotos toda a vez que o usuário muda de local, impedindo que fotos que foram adicionadas anteriormente sejam vistas na adição de um novo local
        if($scope.photo.add.id!=id){
          $scope.photo.add.id=id;
          $scope.photo.add.list=[];
        }
      },

      id: false,

      take: function(id){
        var options = {
         quality: 75,
         destinationType: Camera.DestinationType.DATA_URL,
         sourceType: Camera.PictureSourceType.CAMERA,
         allowEdit: true,
         encodingType: Camera.EncodingType.JPEG,
         targetWidth: 300,
         targetHeight: 300,
         popoverOptions: CameraPopoverOptions,
         saveToPhotoAlbum: false
        };

         $cordovaCamera.getPicture(options).then(function (imageData) {
             //$scope.imgURI = "data:image/jpeg;base64," + imageData;
             $scope.photo.add.popup.start(1, imageData);
         }, function (err) {
             // An error occured. Show a message to the user
         });
      },

      choose: function(id){
        var options = {
         quality: 75,
         destinationType: Camera.DestinationType.DATA_URL,
         sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
         allowEdit: true,
         encodingType: Camera.EncodingType.JPEG,
         targetWidth: 300,
         targetHeight: 300,
         popoverOptions: CameraPopoverOptions,
         saveToPhotoAlbum: false,
         limit: 10
        };

         $cordovaCamera.getPicture(options).then(function (imageData) {
             $scope.imgURI = "data:image/jpeg;base64," + imageData;
             $scope.photo.add.popup.start(1, imageData);
         }, function (err) {
             // An error occured. Show a message to the user
         });
      },

      popup: {
        start: function(id, imageData){
          $scope.photo.add.list.push("data:image/jpeg;base64,"+imageData);
          //console.log($scope.photo.add.list);

          if(!$scope.photo.add.popup.isOpen){
            $rootScope.popup.content.start('templates/data.local.photo.list.html', $scope);
            $scope.photo.add.popup.isOpen=true;
          }

        },

        isOpen: false,

        close: function(){
          $scope.photo.add.popup.isOpen=false;
          $rootScope.modal.close.start();
        }
      },

      list: [],

      delete: {
        start: function($index){
          //console.log($index+"oi");
          $scope.photo.add.delete.id=$index;
          $timeout(function(){
            $scope.photo.add.list.splice($index);
            $scope.photo.add.delete.id=false;
          }, 600);

        },

        class: function($index){

          if($index===$scope.photo.add.delete.id){
            return ['delete'];
          }else{
            return [];
          }

        },

        id: false
      }

    },

    fullScreen: {
      init: function(){

        $rootScope.sliderStyle={
          height: (window.screen.height-200)+"px"
        };

        $rootScope.popup.alert.show(
          'Galeria de fotos', {
            url: "templates/data.local.photo.full.html"
          },
          function(){}
        );

      }
    }
  };

  $scope.scrollData=function(){
    //scrollInfos.init()
    $rootScope.$apply(function(){
      if($ionicScrollDelegate.getScrollPosition().top>180){
        $rootScope.header.class="bar-local-scroll";
        $rootScope.header.title=$scope.infos.name;
      }else{
        $rootScope.header.class="bar-local";
        $rootScope.header.title="";

      }
    });

    //console.log($rootScope.header.class);

  };

  $scope.review={
    init: function(id){
      $rootScope.popup.content.start('templates/data.local.review.html', $scope);
    }
  };



  $scope.getInfos=function(id){
    for(var x in $rootScope.nearPlaces){
      if($rootScope.nearPlaces[x].id==id){
        $scope.infos=$rootScope.nearPlaces[x];
        //console.log($rootScope.nearPlaces[x]);
      }
    }

  };


  angular.element(document).ready(function () {
    var chart = new CanvasJS.Chart("chartContainer",
    {
      animationEnabled: true,
      title:{
        text: "Cronograma de gastos",
        verticalAlign: "bottom", // "top", "center", "bottom"
        horizontalAlign: "left" // "left", "right", "center"
      },

      backgroundColor: "lightgray",

      data: [
        {
        type: "spline",
        showInLegend: false,
        dataPoints: [
          { label: "Jan/15", y: 21 },
          { label: "Fev/15", y: 44},
          { label: "Mar/15", y: 35 },
          { label: "Abr/15", y: 45 },
          { label: "Mai/15", y: 75 },
          { label: "Jun/15", y: 58 },
          { label: "Jul/15", y: 18 },
          { label: "Ago/15", y: 30 },
          { label: "Set/15", y: 11}
        ]
        }
      ]
    });

    chart.render();


    var chartProp = new CanvasJS.Chart("chartPropContainer",
    {
      animationEnabled: true,
      title:{
        text: "Convênios desse proponente",
        verticalAlign: "bottom", // "top", "center", "bottom"
        horizontalAlign: "left" // "left", "right", "center"
      },

      backgroundColor: "lightgray",

      data: [
        {
        type: "column",
        showInLegend: false,
        dataPoints: [
          { label: "2013", y: 21 },
          { label: "2014", y: 44},
          { label: "2015", y: 35 },
          { label: "2016", y: 45 }
        ]
        }
      ]
    });

    chartProp.render();
  });


//console.log($state.params);
  $scope.view=function(v){
    switch(v){
      case 'data.local':
        $rootScope.header.config({
          visible: true,
          back: true,
          filter: false,
          menu: false,
          search: true,
          share: true,
          bottom: false,
          title: "",
          class: "bar-local"
        });

        $scope.getInfos($state.params.id);

      break;
    }
  };


});
