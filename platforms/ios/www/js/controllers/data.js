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
    "grantor":"MINISTERIO DA JUSTICA",
    "proponent":"SECRETARIA DE ESTADO DE JUSTICA E CIDADANIA",
    "proponent_address":"ST SAIN ESTAÇÃO SETOR RODOFERROVIARIA ALA CENTRAL, ANDAR TÉRREO, ASA NORTE",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/21044202",
    "proponent_person":"JULIO CESAR FERREIRA PEREIRA",
    "status":"danger",
    "status_tip":"Em execução"
  },
  {
    "id":7,
    "name":"Fortalecimento e promoção da auto-organização feminista das mulheres trabalhadoras da economia solidária.",
    "justification":"O contexto atual é marcado por uma grave e extensa crise, que não é apenas financeira, mas um desequilíbrio de valores e\npráticas sociais, políticas e ambientais que colocam em risco a vida no planeta. Neste cenário, a Economia Solidária tem se\nfortalecido especialmente durante as últimas décadas, como uma resposta a esta realidade econômica e social, tornando-se cada\nvez mais diversificada e consolidada em todos os Estados do país.\nAs mulheres são a maioria das pessoas que constroem a Economia Solidária, porém, a igualdade de participação entre homens e\nmulheres, em todos os seus espaços, ainda é um desafio a ser superado por quem a constrói. O desafio é consolidar a igualdade\nnos direitos e no cotidiano da ação, visto que este tema é transversal em todas as esferas da vida.\nEsta realidade nos leva a refletir sobre qual tem sido a contribuição dos processos vividos pelas mulheres, como sujeitos\npolíticos na Economia Solidária, para construção de novas práticas de superação das desigualdades de gênero. De que forma as\nmulheres estão presentes neste espaço? Quais espaços de poder elas conseguem integrar, e quais não? Como sua atuação\npolítica na economia solidária tem provocado mudanças concretas em suas vidas? Por que e como a economia solidária pode\ncontribuir",
    "warrant":"Portaria nr. 507/2012",
    "grantor":"SECRETARIA DE POLITICAS PARA AS MULHERES",
    "proponent":"CARITAS BRASILEIRA",
    "proponent_address":"SDS, BLOCO P, ED. VENANCIO III, SALA 410",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/3214-5400",
    "proponent_person":"FLAVIO GIOVENALE",
    "status":"warning",
    "status_tip":"Em execução"
  },
  {
    "id":8,
    "name":"Participação de Delegação Brasileira nos XIX JOGOS SUL-AMERICANOS ESCOLARES na cidade de Mar Del\nPlata/Argentina, no período entre 21 a 28 de novembro de 2013.",
    "justification":"Esta será a XIX edição dos Jogos Sul-Americanos Escolares. O Brasil tem participado de todas as edições dos Jogos pois é uma\ngrande oportunidade para os alunos, professores e dirigentes de interagir com nossos países vizinhos tanto no aspecto cultural\nquanto no aspecto técnico/competitivo. A última edição foi realizada no Brasil ano passado nas cidades de Natal/RN e João\nPessoa/PB.",
    "warrant":"Portaria nº 507/2011 e Decreto nº 6.170",
    "grantor":"MINISTERIO DO ESPORTE",
    "proponent":"CONFEDERACAO BRASILEIRA DO DESPORTO ESCOLAR",
    "proponent_address":"SCS QD. 02 ED. SAO PAULO SALA 108",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/39677176",
    "proponent_person":"ANTONIO HORA FILHO",
    "status":"ok",
    "status_tip":"Prestação de Contas em Análise"
  },
  {
    "id":9,
    "name":"Desenvolver a “Educação pela Arte” de educação, inclusão social e acessibilidade por meio da promoção e defesa dos direitos\nhumanos, para contribuir\ncom a formação de 250 (duzentos e cinquenta) crianças, jovens e adultos, pessoas com deficiência e idosos, formando\n“agentes de cidadania” em Direitos Humanos.",
    "justification":"O Instituto de Educação Integrada Garotos do Distrito Federal – IEIG SF vem desenvolvendo trabalhos que visam construir a\npaz e promover a Inclusão Social entre todos que participam de seus Projetos Sociais.\nE para promover a formação do cidadão, preparando-o para um agir constante na construção e no resgate dos valores sociais,\nhumanos, culturais e morais inspirados numa vivência do espírito ético respeitando as diferenças na coletividade e nos direitos\nhumanos pessoais e coletivos, o projeto oferece a todos participantes várias oportunidades direcionadas ao aprimoramento\npessoal e grupal, estimulando-os ao exercício da sociabilidade, da vivência solidária e democrática.\nOs Parâmetros Curriculares Nacionais – PCN/2001 enfatiza que na Educação Física Escolar, o aluno precisa ter acesso às\npráticas da cultura corporal para a construção de um estilo pessoal de práticas, e oferecer instrumentos para que sejam capazes\nde apreciá-las criticamente e desenvolve-las com prazer.\nCom a promulgação da Lei 10.639/03, que institui o ensino de assuntos e historia da África nos currículos escolares, a Capoeira\nganhou maior força para ser reconhecida como conteúdo riquíssimo para o acervo cultural do aluno, desenvolvendo não\nsomente o aspecto motor, mas também o cognitivo e afetivo-social, adentrando as portas de academias, escolas, universidades,\nassociações de bairros, clubes e comunidades, resgatamos sua filosofia a fim de que se cumpra o seu papel de promover a\ncooperação, a solidariedade e a fraternidade entre seus praticantes. E com a sua inserção no contexto educacional, cultural e\nterapêutico tem contribuído, entre outros fatores, para uma enorme reflexão em torno de sua prática, que por sua vez não se\nreduz a uma ação puramente mecânica.\nNo Brasil, segundo estatística do IBGE – Instituto Brasileiro de Geografia e Estatística, os grupos de jovens de 15 a 24 anos\napresentam uma evolução considerável no seu contingente, muito embora, efetivos absolutos apresentem uma tendência de\ncrescimento, este experimenta um paulatino processo de desaceleração a partir da década de 70, ao passo que o grupo de idosos\ncresce de forma bastante acelerada. Os censos populacionais nos anos de 1991 e 1996, respectivamente, enumeraram 28,6 e\n31,1 milhões de pessoas de 15 a 24 anos de idade, representando 19,8% da população brasileira. Deste grupo as mulheres\nrepresentam um quantitativo menor, 14,3 milhões. Informa ainda o censo que no conjunto do País, quase um terço das mulheres\n(27,4%) entre 15 e 24 anos já teve filhos, e naturalmente, é mais elevada a proporção de mulheres do subgrupo de 20 a 24 anos\nque tiveram filhos, 45,1%. Outra informação decorrente é que 13,8% das mulheres deste mesmo subgrupo já tiveram, pelo\nmenos dois filhos.\nO estudo demonstra que o Projeto vem atuando dentro do perfil da vulnerabilidade juvenil no DF, e a importância de ações que\nincentivem a convivência pacífica entre jovens, por meio de atividades culturais e esportivas é muito importante para a\ndiminuição desses números.\nUm dos objetivos estratégicos do Programa Nacional dos Direitos Humanos – PNDH é proteger e defender os direitos das\ncrianças e adolescentes com maior vulnerabilidade, assim, o Projeto “Educação pela Arte” trabalha ações educativas para\ncontribuir para erradicação da violência na família, na escola e na comunidade em geral, pois com um trabalho conjunto com a\nfamília é possível obter resultados favoráveis.\nO projeto visa dar continuidade ao trabalho executado pela Instituição iniciada em 2002 que vem realizando oficinas com\nequipes multidiciplinares de arte educadores, pedagogos, nutricionistas e professores de educação física empenhados em\ncontribuir para a qualidade de vida dos alunos, e, atende à população vulnerável de crianças, jovens, adultos, deficientes físicos\ne idosos, em consonância com as Políticas Públicas de Promoção e Defesa dos Direitos Humanos.\nA Capoeira tem a sua própria linguagem de movimento que está diretamente relacionada ao viver social, e desta forma, gera um\nprocesso onde se interagem as dimensões do conhecimento sócio-afetivo e psicomotor do ser humano, conduzindo-a a uma\nproposta concreta de prática corporal sistematizada e transformadora, construindo e reforçando a cultura da defesa, proteção e\npromoção dos Direitos Humanos e da Cidadania e dignidade dos participantes.",
    "warrant":"Portaria nº 507/2011 e Decreto nº 6.170",
    "grantor":"SECRETARIA DE DIREITOS HUMANOS DA PRESIDÊNCIA DA REPÚBLICA",
    "proponent":"INSTITUTO DE EDUCACAO INTEGRADA GAROTOS SEM FRONTEIRAS - IEIG SF",
    "proponent_address":"Rua 14 lote 31 loja 01",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/32422954",
    "proponent_person":"THEREZINHA BARROS DA SILVA",
    "status":"ok",
    "status_tip":"Prestação de Contas enviada para Análise"
  },
  {
    "id":10,
    "name":"Implantação e modernização de infraestrutura esportiva no ESTÁDIO ABADIÃO em Ceilândia/DF.",
    "justification":"O objetivo da Implantação e modernização de infraestrutura esportiva no ESTÁDIO ABADIÃO em Ceilândia/DF, visa\nbasicamente dotar o referido Estádio de melhores condições de uso do por jogadores, imprensa e torcedores. Atualmente os\nclubes daquela cidade participam não só do campeonato de futebol candango como também de competições de futebol nacional\n– Copa do Brasil – o que desperta o maior interesse da população daquela Região aumentando consideravelmente a sua lotação.\nDentre os benefícios que serão alcançados pela obra estão o conforto e a segurança de todos os usuários no local.",
    "warrant":"Decreto 6170/07",
    "grantor":"MINISTERIO DO ESPORTE",
    "proponent":"SECRETARIA DE ESTADO DE INFRAESTRUTURA E SERVICOS PUBLICOS",
    "proponent_address":"A SAPS - SETOR DE AREAS PUBLICAS SUL LOTE B",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/3306-",
    "proponent_person":"DAVID JOSE DE MATOS",
    "status":"danger",
    "status_tip":"Aguardando Prestação de Contas"
  },
  {
    "id":11,
    "name":"Implantação da PRAÇA DA JUVENTUDE em Samambaia/DF.",
    "justification":"\"A implantação da PRAÇA DA JUVENTUDE em Samambaia/DF se reveste de muita importância não só pela sua localização,\ncomo também a finalidade a que se destina, visando atender prioritariamente aos alunos da rede pública de ensino que terão um\nlocal adequado para realizar práticas esportivas, bem como aulas de educação física. Os benefícios primordiais de sua\nimplantação consistem em ocupar o tempo dos jovens e idosos em atividades sadias, bem como difundir o companheirismo.\nMais que um preceito constitucional garantido a cada cidadão, o esporte é um direito de todos e cabe ao Estado, de acordo com\no art. 217 da Constituição da República de 1988, a tarefa em transformar em realidade esse compromisso com o povo brasileiro.\nO Governo do Distrito Federal situa o esporte como um fator social e o seu principal objetivo é a generalização do direito de\nacesso às práticas esportiva, recreativa e de lazer, contribuindo, dessa maneira, para a criação de hábitos permanentes por todos\nos segmentos da população.\"",
    "warrant":"Decreto 6170/07",
    "grantor":"MINISTERIO DO ESPORTE",
    "proponent":"SECRETARIA DE ESTADO DE INFRAESTRUTURA E SERVICOS PUBLICOS",
    "proponent_address":"A SAPS - SETOR DE AREAS PUBLICAS SUL LOTE B",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/3306-",
    "proponent_person":"DAVID JOSE DE MATOS",
    "status":"danger",
    "status_tip":"Aguardando Prestação de Contas"
  },
  {
    "id":12,
    "name":"Realização da Gymnasiade - Jogos Mundiais Escolares",
    "justification":"HISTÓRICO\nA primeira edição dos Jogos aconteceu na cidade de Wiesbaden, na Alemanha Ocidental, em 1974, e só natação e ginástica\nestiveram no programa. O atletismo só foi incluído na edição seguinte em Orléans, na França. A Gymnasíade, foi um evento\nrealizado a cada 2 anos até 1990, quando passou a ser realizado a cada 4 anos.\nIMPORTÂNCIA\nEsta será a primeira vez que o Brasil receberá uma edição dos JOGOS ESCOLARES MUNDIAIS – GYMNASIADE 2013.\nCom a escolha do Brasil, é uma grande oportunidade de mostrarmos para o mundo a capacidade organizativa, bem como a\npreparação do País para a realização dos grandes eventos esportivos dos quais será sede, neste e nos próximos anos:\nGymnasiade, em 2013, Copa das Confederações, em 2013, Copa do Mundo da FIFA 2014, Copa América 2015 e os Jogos\nOlímpicos e Paraolímpicos Rio 2016.\nA importância dos JOGOS ESCOLARES MUNDIAIS – GYMNASIADE 2013 ganha mais amplitude, quando é disputada aqui\nno centro do poder do país e servirá para chamar a atenção para as questões sociais que evidenciam a necessidade da\ndemocratização do esporte, como direito constitucional.\nAdemais, o evento em questão será fundamental nas áreas de turismo e expansão das instalações esportivas e não esportivas a\nserem utilizadas nos jogos.",
    "warrant":"Portaria nº 507/2011 e Decreto nº 6.170",
    "grantor":"MINISTERIO DO ESPORTE",
    "proponent":"CONFEDERACAO BRASILEIRA DO DESPORTO ESCOLAR",
    "proponent_address":"SCS QD. 02 ED. SAO PAULO SALA 108",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/39677176",
    "proponent_person":"ANTONIO HORA FILHO",
    "status":"warning",
    "status_tip":"Prestação de Contas em Análise"
  },
  {
    "id":13,
    "name":"Implantação do Núcleo de Formação de Agente de Cultura da Juventude Negra – NUFAC, Brasília/DF – para realização de 05\n(cinco) Cursos de Formação Profissional na Área da /cultura, a 120 (cento e vinte) Jovens Negros de Negras, entre 15 a 29\nanos, do ensino fundamental e médio, completo e incompleto, ministrado na modalidade presencial, com carga horária de 200\n(duzentas) hora/aulas por curso, quais sejam: Artesão de Biojóias, Operador de Áudio, Produtor de Vídeo, Produtor Cultural e\nFigurinista, além do Módulo Étnico Racial, cuja realização ocorrerá durante 10 meses, aos jovens residentes das Regiões\nAdministrativas Estrutural e Itapoã.",
    "justification":"Pertinência e relevância do projeto:\nO Projeto visa a autonomia, promoção e inclusão social, bem como a eqüidade de oportunidades nas relações de trabalho.\nAssim, ofertará capacitação profissional e geração de renda sustentável, voltadas para a inclusão dos jovens no mercado formal\nde trabalho, em condições justas e igualitárias. A qualificação profissional assegura meios de elevação da escolaridade,\nconhecimento tecnológico, possível inserção no mercado de trabalho e inclusão produtiva com geração de renda sustentável,\nespecialmente para os que estejam em situação de violência.\nO Distrito Federal está entre as 05 áreas mais violentas do país. Os elevados índices de maus tratos, abandono, conflitos\nfamiliares, abuso econômico e sexual, droga, marginalidade e mortalidade dos jovens nas regiões – foco deste projeto - revelam\na insuficiência de políticas públicas adequadas preventivas e qualificadas para a população negra de baixa renda, sem\nqualificação profissional, sem condições de desfrutar o mínimo de qualidade de vida e dignidade humanas que lhe é de direito.\nEncontram-se à margem da inclusão social, sem oportunidades para superar a realidade vivenciada, enfrentando verdadeiro\nprocesso de desagregação, sem condições de prover as necessidades básicas para os seus dependentes.\nCaracterização dos interesses recíprocos:\nO projeto vem de encontro com os objetivos estatutários da entidade e com as politicas publicas de minimização da divida\nhistórica do Brasil com a população de afrodescendente\nRelação entre a proposta apresentada e os objetivos do programa/ação federal: Associação Positiva de Brasília , formula,\nmonitora, avalia, qualifica e sistematiza as ações, serviços, programas, projetos e benefícios socioassistenciais em conformidade\ncom a Constituição Federal, Lei Orgânica da Assistência Social (LOAS), Política Nacional de Assistência Social/PNAS, Norma\nOperacional Básica do Sistema Único de Assistência Social (NOB/SUAS-2005) e Lei Orgânica do Distrito Federal.\nO direito ao trabalho configura-se como fundamental, e está assegurado, no Brasil, pela Constituição de 1988, no Capítulo II,\nArtigo 6º, quando diz que “[...] são direitos sociais a educação, a saúde, o trabalho, a moradia, o lazer, a segurança, a\nprevidência social [...] na forma desta Constituição [...]”. Ele possibilita o acesso às necessidades básicas de sobrevivência,\ndentre eles a moradia, alimentação, saúde e educação.\nAs questões de raça e etnia são estruturantes das relações sociais, constituindo-se, junto às discriminações de gênero, em um\ndos vetores da exclusão a que está submetida grande parte da população negra no Brasil. Sua construção se dá nas bases das\ndesigualdades, fato que coloca a juventude negra numa condição de desvantagem e exclusão nos espaços sociais, indo desde o\nespaço privado até o ambiente de trabalho. A inserção na Seguridade Social direciona a Assistência Social para seu caráter de\npolítica de Atenção e Proteção Social, articulada a outras políticas do campo social voltadas à garantia de direitos e de\ncondições dignas de vida à população, que deve ofertar ações que garantam as seguranças de sobrevivência, de acolhida e de\nconvívio ou vivência familiar às famílias e indivíduos. Com esse objetivo, se faz necessário buscar parcerias com órgãos\ngovernamentais e não governamentais para efetivação dos direitos preconizados nas leis referendadas.\nProblema a ser resolvido:\nConsiderar a insuficiência de políticas públicas adequadas preventivas e qualificadas para a população negra de baixa renda,\nsem qualificação profissional, sem condições de desfrutar o mínimo de qualidade de vida e dignidade humanas que lhe é de\ndireito e que se encontram à margem da inclusão social, sem oportunidades para superar a realidade vivenciada, enfrentando\nverdadeiro processo de desagregação, sem condições de prover as necessidades básicas para os seus dependentes, capacitando a juventude negra de modo a inseri-la\nna realidade social-economico-politico-histórica do Brasil , minimizando as desvantagens advindas da maioria negra\nsocialmente vulnerável e economicamente dependente de projetos sociais.",
    "warrant":"Portaria Interministerial nº507/2011",
    "grantor":"FUNDACAO CULTURAL PALMARES",
    "proponent":"APB ASSOCIACAO POSITIVA DE BRASILIA",
    "proponent_address":"SDS Bloco C Edifício FBTN 30/64 ( cursos)",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/85194836",
    "proponent_person":"GLAUCIA OLIVEIRA ABREU",
    "status":"danger",
    "status_tip":"Prestação de Contas enviada para Análise"
  },
  {
    "id":14,
    "name":"Realizar o projeto BRASÍLIA DE TODAS AS CULTURAS em escolas e praças públicas em cidades do Distrito Federal.",
    "justification":"A Secretaria de Estado de Cultura de Estado do Distrito Federal - Secult foi reestruturada por meio do Decreto nº 21.675/2000 e\ntem por competências básicas:\n* Criar, manter, preservar, estimular e apoiar direta e/ou indiretamente bibliotecas, centros de ação cultural, museus, arquivos,\nteatros, salas de espetáculos, orquestras, coros, cinemas e outros afins relacionados à área de cultura;\n* Formular e executar a política cultural do Distrito Federal;\n* Propiciar meios de acesso à cultura, através da manutenção dos bens, espaços e instituições culturais do Distrito Federal;\n* Incentivar os programas de valorização e profissionalização dos artistas e técnicos do Distrito Federal;\n* Promover e incentivar festivais, seminários, temporadas e programas de intercâmbio cultural, artístico e científico;\n* Promover, apoiar e patrocinar eventos de cunho artístico e cultural da cidade e Região Integrada de Desenvolvimento do\nEntorno;\nSendo a Secult na esfera estadual o equivalente ao Ministério da Cultura na esfera federal, a missão das duas instituições se\ncomplementam e se fundem num mesmo fim. Considerando a Cultura como uma necessidade básica do cidadão, assim como,\neducação, saúde, segurança etc, fomentar a produção cultural das diversas linguagens artísticas, bem como a difusão e\nfacilitação do acesso de todas as classes sociais se torna um dever do Estado. Sendo assim, utilizar da ferramenta de eventos do\ntipo proposto no projeto objeto deste convênio é uma forma de possibilitar o cumprimento deste dever.\nConsiderando que escolas públicas, e espaços públicos onde trabalhadores e comunidades diversas contém a maior parte das\nclasses sociais consideradas de baixa renda e de pouco acesso aos mecanismos de difusão e consumo cultural, realizar eventos\nmusicais de grupos locais ambientado no cenário de tradição e base de inspiração de novos artistas , construindo um quadro de\nciência dos estilos musicais que formam a rica diversidade musical do país.\nDessa forma, a congruência de criar oportunidade com o aumento do acesso à cultura da população se torna eficiente.\nO projeto permitirá a realização de seis importantes ações e abordará estilos musicais Cultura Popular, Teatro e a Arte Urbana\ndo Grafite e do Hip-Hop. Essas linguagens e ações estarão juntas em um programa de inclusão cultural, sendo suas atividades\nrealizadas em escolas e espaços públicos, de forma gratuita. As ações serão voltadas para a comunidade jovem do Distrito\nFederal e região do Entorno do DF, mostrando a diversidade cultural da produção artística local e nacional. São elas o\nSAMBRASIL, que apresentará a nova geração do samba de Brasília juntamente com artistas nacionais da velha guarda. O\nSOUL BRASÍLIA será uma mostra de música voltado para a valorização e difusão de artistas brasileiros que encontram na\nSoul Music inspiração para suas obras. O FESTIVAL DE MÚSICA UNIVERSITÁRIO DO DF, buscará descobrir novos\ntalentos dos diversos gêneros musicais brasileiros e dar a eles a oportunidade de serem revelados ao país. O REPÚBLICA\nBLUES trará à Brasília o melhor do cenário local, nacional e internacional do blues. O CIRCUITO DE TEATRO E CULTURA\nPOPULAR NAS ESCOLAS vai promover circulação da arte nas escolas públicas do DF. O GRAFITARTE propõe um\nencontro cultural nos segmentos das artes urbanas e da música.",
    "warrant":"DECRETO 6.170 DE 25/07/2007",
    "grantor":"MINISTERIO DA CULTURA",
    "proponent":"SECRETARIA DE ESTADO DE CULTURA DO DISTRITO FEDERAL",
    "proponent_address":"Setor Cultural Norte - Via N2 – Anexo do Teatro Nacional Claudio Santoro",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/33256131",
    "proponent_person":"HAMILTON PEREIRA DA SILVA",
    "status":"warning",
    "status_tip":"Em execução"
  },
  {
    "id":15,
    "name":"Projeto de Acessibilidade nos Atrativos Turístico Prioritários para a Copa do Mundo de 2014 em Brasília - DF.",
    "justification":"Brasília, conhecida como cidade monumento, escolhida para sediar os jogos da Copa do Mundo de 2014 e Olimpíadas de 2016,\npassou a ser Patrimônio Cultural da Humanidade em 7 de dezembro de 1987. Concedido pela UNESCO – Organização das\nNações Unidas para a Educação, a Ciência e a Cultura – o título determina que os bens culturais significativos para a\nhumanidade pertençam a todos os povos, independentemente de localização territorial ou nacionalidade com o objetivo de\npreservar esses bens para que eles possam ser transmitidos e repassados às futuras gerações.\nBrasília, o único bem contemporâneo tombado como Patrimônio Cultural, recebeu o título por ser um marco da arquitetura e\nurbanismo modernos. Criada pelas mãos de Lucio Costa e Oscar Niemeyer, a cidade foi planejada para oferecer uma nova\nproposta de viver e maior qualidade de vida aos seus moradores. O planejamento em quatro escalas – monumental, residencial,\ngregária e de lazer – é o que dá à capital do país as características de cidade ímpar, original e excepcional.\nLevando em consideração os grandes eventos esportivos que acontecerão no Brasil, como a Copa do Mundo de Futebol de\n2014 e as Olimpíadas em 2016, a Secretaria de Estado de Turismo do Governo do Distrito Federal – SETUR/DF vem se\nempenhando para realizar ações relativas à acessibilidade nos 10 (dez) Atrativos Turísticos elencados abaixo (mapa em anexo),\ncom a inserção do Desenho Universal na concepção e na implantação dos projetos arquitetônicos e urbanísticos, de informação\ne comunicação, de transporte coletivo, bem como na execução de obras e nos serviços, tendo como referências básicas as\nNormas Técnicas de Acessibilidade da ABNT e a legislação específica vigente. São eles: TORRE DE TV, CATEDRAL\nMETROPOLITANA, LAGO PARANOÁ (Ponte JK), PRAÇA DOS TRÊS PODERES (incluindo o Panteão, Espaço Lucio\nCosta e Museu Histórico de Brasília), MEMORIAL JK, PALÁCIO DA ALVORADA, PALÁCIO CATETINHO, PALÁCIO\nDO ITAMARATY, PALÁCIO DO PLANALTO e TORRE DE TV DIGITAL.\nA promoção da acessibilidade às pessoas com deficiência e com mobilidade reduzida é obrigatória em cumprimento à\nlegislação e deve ser aplicada a edificações de uso público ou coletivo, vias, praças, logradouros, parques e demais espaços e\nequipamentos de uso público; a veículos de transporte coletivo (ônibus urbanos e interurbanos, vans, micro-ônibus, trens\nurbanos e interurbanos, embarcações fluviais e marítimas, e aeronaves); e a portais e endereços eletrônicos destinados à\nprestação de serviços turísticos.\nAtualmente no país, políticas públicas voltadas à acessibilidade estão sendo adotadas, garantindo, assim, o uso dos espaços por\ntodas as pessoas, inclusive aquelas com deficiência ou mobilidade reduzida.\nOs recursos solicitados serão destinados à contratação de empresa especializada para execução das obras de infraestrutura de\nAcessibilidade nos 10 (dez) Atrativos Turísticos prioritários para a Copa do Mundo de 2014 em Brasília – DF, dentre elas a\nexecução de rampas, piso tátil e sinalização braile, entre outros serviços; conforme projeto executivo em execução, através do\nconvênio nº 020440/2013 deste MTur. As melhorias vindas com a acessibilidade executada favorecerão tanto o turista quanto a\npopulação local e permanecerão para utilização posterior à Copa.",
    "warrant":"Decreto 6170/07",
    "grantor":"MINISTERIO DO TURISMO",
    "proponent":"SECRETARIA DE ESTADO DE TURISMO DO DISTRITO FEDERAL",
    "proponent_address":"ST SDC - CENTRO DE CONVENÇÕES ULYSSES GUIMARÃES, Nº 05, LOTE 05 ANDAR 1",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/3214-2701",
    "proponent_person":"JAIME DE ARAUJO GOES RECENA GRASSI",
    "status":"ok",
    "status_tip":"Aguardando Prestação de Contas"
  },
  {
    "id":16,
    "name":"Organizar e realizar a I Copa Brasil Escolar de Futebol de Campo feminino.",
    "justification":"Os direitos e garantias fundamentais são os direitos políticos, liberdades e oportunidades, que a sociedade deve oferecer a cada\num. A Constituição Federal Brasileira de 1988 dispõe sobre princípios norteadores da alocação das políticas publicas, segundo\no critério de justiça social. Conforme disposto no Art. 217 da Carta Magna, em seu caput:\n“É dever do Estado fomentar práticas desportivas formais e não formais”.\nComo direito de cada um, observados:\nInciso II – A destinação de recursos públicos para a promoção prioritária do desporto educacional e, em casos específicos, para\na do desporto de alto rendimento",
    "warrant":"Portaria nº 507 e Decreto nº 6.170",
    "grantor":"MINISTERIO DO ESPORTE",
    "proponent":"CONFEDERACAO BRASILEIRA DO DESPORTO ESCOLAR",
    "proponent_address":"SCS QD. 02 ED. SAO PAULO SALA 108",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/39677176",
    "proponent_person":"ANTONIO HORA FILHO",
    "status":"danger",
    "status_tip":"Prestação de Contas em Complementação"
  },
  {
    "id":17,
    "name":"Realizar a seletiva nacional da Gymnasiade - Jogos Escolares Mundiais na cidade de Brasilia/DF",
    "justification":"6.1. Dos Direitos Constitucionais\nOs direitos e garantias fundamentais são os direitos políticos, liberdades e oportunidades, que a sociedade deve oferecer a cada\num. A Constituição Federal Brasileira de 1988 dispõe sobre princípios norteadores da alocação das políticas publicas, segundo\no critério de justiça social. Conforme disposto no Art. 217 da Carta Magna, em seu caput:\n“É dever do Estado fomentar práticas desportivas formais e não formais.\nComo direito de cada um, observados:\nInciso II – A destinação de recursos públicos para a promoção prioritária do desporto educacional e, em casos específicos, para\na do desporto de alto rendimento.”",
    "warrant":"Portaria nº 507 e Decreto nº 6.170",
    "grantor":"MINISTERIO DO ESPORTE",
    "proponent":"CONFEDERACAO BRASILEIRA DO DESPORTO ESCOLAR",
    "proponent_address":"SCS QD. 02 ED. SAO PAULO SALA 108",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/39677176",
    "proponent_person":"CARLOS SERGIO RUFINO MOREIRA",
    "status":"warning",
    "status_tip":"Prestação de Contas em Análise"
  },
  {
    "id":18,
    "name":"Projeto Diversidade Cidadã realizar dois eventos e um edital de premiação, a saber: Seminário de Arte e Cultura LGBT;\nEncontro de Arte e Cultura Inclusiva; e\nLançar um edital de seleção para premiação de 13 (treze) instituições sem fins lucrativos e/ou coletivos que desenvolvem\natividades culturais e artísticas relevantes para a diversidade cultural em diferentes linguagens.",
    "justification":"A Secretaria de Estado de Cultura do Distrito Federal, por meio da Subsecretaria de Cidadania e Diversidade Cultural, em\nconsonância com o Plano Nacional de Cultura e Política Nacional de Cultura Viva, vem propor o presente projeto, que\ncompreende um conjunto de ações no campo da diversidade cultural, contemplando a realização de dois eventos e um edital de\npremiação, a saber: o Seminário de Arte e Cultura LGBT; o Encontro de Arte e Cultura Inclusiva; e edital para premiação de 13\n(treze) instituições sem fins lucrativos e/ou coletivos que desenvolvem atividades culturais e artísticas relevantes para a\ndiversidade cultural em diferentes linguagens.\nO projeto ainda cumpre com diretrizes do Programa Nacional de Direitos Humanos – PNDH-3, Decreto N° 7.037, de 21 de\ndezembro de 2009, especialmente no que se refere à Diretriz 10, Garantia de igualdade na diversidade.\nPor compreender que a Lesbofobia, Homofobia, Bifobia, Transfobia bem como outras formas de discriminação e negação de\ndireitos são práticas culturais que precisam ser combatidas, realizaremos o Seminário de Arte e Cultura LGBT, a fim de dar\nvisibilidade não apenas às expressões culturais de Lésbicas, Gays, Bissexuais, Travestis e Transexuais (LGBT) do Distrito\nFederal, mas também às suas pautas.\nO Encontro de Arte e Cultura Inclusiva visa congregar os artistas inclusivos numa ampla programação que possibilite não\napenas o debate acerca do tema, mas também a apresentação da produção artística protagonizada por estes atores/atrizes\nculturais. Mais do que promover capacitação de agentes, o Encontro visa reunir produtores e realizadores de arte e cultura\ninclusiva, a fim de divulgar seus trabalhos, ainda pouco conhecidos pelo público no Distrito Federal. Com isso, fortalecemos\nessa cadeia produtiva e possibilitamos uma articulação entre esses produtores para possíveis parcerias futuras.\nO edital de premiação estipulará critérios para premiar iniciativas de 13 (treze) organizações culturais sem fins lucrativos e/ou\ncoletivos que desenvolvam atividades culturais e artísticas relevantes para a diversidade cultural do Distrito Federal e Entorno,\ncom objetivo de ampliar a Rede de Pontos de Cultura do Distrito Federal. O valor a ser repassado a cada um dos contemplados\nserá de R$40.000,00 (quarenta mil reais). Serão realizadas, em Regiões Administrativas do Distrito Federal, oficinas para\ndivulgação do edital e inscrição de iniciativas interessadas em concorrer à premiação, além de dar publicidade aos termos da\nLei 13.018/2014 e sua regulamentação.\nApós a seleção, será também realizado um programa de capacitação aos beneficiados, visando estimular e orientar quanto à\naplicação dos recursos dos prêmios em atividades que fortaleçam a atuação, a promoção e a continuidade da iniciativa\ncontemplada. No evento de capacitação serão, ainda, trabalhados temas prioritários para o desenvolvimento da economia da\ncultura local e para articulação em rede, alinhados com as politicas do Sistema Nacional de Cultura e da Política Nacional de\nCultura Viva, a serem definidos em conjunto com a Rede de Pontos de Cultura do Distrito Federal.\nSerão realizadas Chamadas Públicas para contratação de atrações artísticas para os eventos, bem como especialistas nos\ndiversos temas para ministrar oficinas e integrar a Comissão de Avaliação de Mérito do edital de premiação.\nO Projeto atenderá, por meio de suas atividades, a aproximadamente 500 (quinhentas) pessoas de forma direta, entre grupos,\nartistas e produtores culturais dos mais diversos segmentos e Regiões Administrativas do Distrito Federal.\nComo resultados, espera-se ampliar o debate em torno da inclusão de segmentos historicamente excluídos do acesso a direitos\nhumanos e políticas públicas de cultura no Brasil, subsidiando a elaboração de indicadores e a proposição de ações voltadas\npara a diversidade cultural brasileira, além de fomentar a continuidade de ações importantes para o desenvolvimento e\nsustentabilidade de expressões da diversidade cultural do Distrito Federal e Entorno.",
    "warrant":"DECRETO 6.170 DE 25/07/2007",
    "grantor":"MINISTERIO DA CULTURA",
    "proponent":"SECRETARIA DE ESTADO DE CULTURA DO DISTRITO FEDERAL",
    "proponent_address":"Setor Cultural Norte - Via N2 – Anexo do Teatro Nacional Claudio Santoro",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/33256131",
    "proponent_person":"LUIS GUILHERME ALMEIDA REIS",
    "status":"ok",
    "status_tip":"Em execução"
  },
  {
    "id":19,
    "name":"Apoiar a realização das seguintes atividades relativas ao Censo Escolar da Educação Básica: execução do processo\ncensitÃ¡rio,da preparação Ã divulgação dos resultados,\nem todos os levantamentos referentes ao ano letivo de 2013; produção e disseminação de informacões estatísticas;\ne realização de atividades de controle de qualidade das informações com vistas a garantir a fidedignidade dos dados.",
    "justification":"Considerando o que determina o Art. 208 CF â EC 59/2009 da ConstituiÃ§Ã£o Federal e o Art. 8Âº da Lei de Diretrizes e\nBases da EducaÃ§Ã£o nÂº 9.394/96, as portarias do Censo Escolar nÂº 264 de 26/03/07 e nÂº 316 de 04/04/08 e a\nrelevÃ¢ncia do Censo Escolar da EducaÃ§Ã£o BÃ¡sica para o repasse de recursos dos programas governamentais, bem como\npara a formulaÃ§Ã£o de polÃticas\neducacionais nas trÃªs esferas de governo e para\ndistintas instituiÃ§Ãμes de Ã¢mbito pÃºblico e privado, para pesquisadores,especialistas do Brasil e de outros paÃses\ne para\norganismos internacionais, a Secretaria de EducaÃ§Ã£o\ndo Estado de EducaÃ§Ã£o do Distrito Federal, firma convÃªnio anualmente com esse Instituto Nacional de Estudos e\nPesquisas Educacionais AnÃsio\nTeixeira (Inep), com o\nobjetivo de obter apoio para a realizaÃ§Ã£o das atividades relacionadas ao Censo Escolar da EducaÃ§Ã£o BÃ¡sica. Esse\napoio do Inep Ã© fundamental para que esta Secretaria garanta a execuÃ§Ã£o do processo CensitÃ¡rio neste Estado. O Censo\nda\nEducaÃ§Ã£o BÃ¡sica Ã© realizado por meio do Sistema EDUCACENSO, o qual demanda esforÃ§os desta Secretaria, no\nsentido de conhecer e executar todas as atividades pertinentes Ã coleta e verificaÃ§Ã£o de informaÃ§Ãμes para orientar,\ncapacitar e\nsupervisionar todo o processo censitÃ¡rio neste Estado, razÃ£o pela qual torna-se fundamental a celebraÃ§Ã£o do ConvÃªnio\nem 2013. Sendo assim, considerando as diversidades regionais e as caracterÃsticas\nprÃ³prias deste Estado, encaminhamos o\npresente plano de trabalho para apreciaÃ§Ã£o e aprovaÃ§Ã£o desse Instituto.",
    "warrant":"PI nº 507/2011",
    "grantor":"INST.NACIONAL DE EST.E PESQUISAS EDUCACIONAIS",
    "proponent":"SECRETARIA DE ESTADO DE EDUCACAO, ESPORTE E LAZER DO DISTRITO FEDERAL",
    "proponent_address":"L2 Norte, 607, Projeção D, sala 227.",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/3901.2342",
    "proponent_person":"DENILSON BENTO DA COSTA",
    "status":"ok",
    "status_tip":"Prestação de Contas Aprovada"
  },
  {
    "id":20,
    "name":"Construção de equipamentos para treinamento e execução de infraestrutura (águas pluviais) na região que abrange o Centro de\nTreinamento.",
    "justification":"Brasilia será sede Copa do Mundo de Futebol em 2014. O Centro de Treinamento do Corpo de Bombeiros Militar do DF será¡\nutilizado como Campo de Treinamento da Seleção Brasileira\nde Futebol. Para tanto, as obras constantes do projeto proposto\nvisam adequar o espaço conforme as exigências da FIFA para os fins propostos.",
    "warrant":"Decreto 6170/07",
    "grantor":"MINISTERIO DO ESPORTE",
    "proponent":"CORPO DE BOMBEIROS MILITAR DO DISTRITO FEDERAL",
    "proponent_address":"SAM LOTE D MODULO E",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/39017911/791",
    "proponent_person":"JULIO CESAR DOS SANTOS",
    "status":"danger",
    "status_tip":"Em execução"
  },
  {
    "id":21,
    "name":"O Projeto Mostra Brasil Candango é a prestação de serviços de exibição de cinema ao ar livre, digital e 35mm (com tela\ninflável, som, e cadeiras) e em salas de aula da rede pública.\nO projeto será realizado nas seguintes cidades/regiões administrativas: Samambaia, Riacho Fundo, Varjão, Itapuã, Paranoá, São\nSebastião, Taguatinga Norte e Ceilândia .",
    "justification":"O acesso do público à cinematografia nacional e por conseguinte do cinema ao seu público prioritário é a grande\nquestão a ser resolvida no cenário do desenvolvimento do setor.\nDado às dificuldades de distribuição do produto nacional, a oferta gratuita ao público escolar e mesmo à população em geral se\nconstitui em instrumento efetivo de formação de público.\nNesta edição da Mostra Brasil Candango, e após percorrer todo o Distrito Federal e seu entorno (parte de Go e MG)\ncom mais de 250.000 expectadores, já e possível atuar junto ao público escolar e populares das comunidades mais\nreceptivas ao projeto. Nesse sentido temos certeza que o público marcará grande presença nos filmes que serão exibidos.\nPor outro lado, verifica-se que a presente proposta é totalmente convergente com a Política de Preservação, Digitalização,\nDifusão\ne Acesso a Acervos Audiovisuais.",
    "warrant":"DECRETO 6.170 DE 25/07/2007",
    "grantor":"MINISTERIO DA CULTURA",
    "proponent":"INSTITUTO LATINOAMERICA - PARA O DESENVOLVIMENTO DA EDUCAO, ARTE, CIENCIA E CULTURA",
    "proponent_address":"SAS Quadra 5 bloco F sala 03",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61-32235997",
    "proponent_person":"ATANAGILDO BRANDOLT DE BRANDOLT",
    "status":"danger",
    "status_tip":"Prestação de Contas Aprovada com Ressalvas"
  },
  {
    "id":22,
    "name":"Realizar o projeto Circuito Especial de Inclusão que objetiva desenvolver um Circuito Especial de Economia Solidária, no\nâmbito do 3º Salão de Negócios da Acessibilidade, Reabilitação e Inclusão Social",
    "justification":"Pelo Censo de 2010 (IBGE) no Distrito Federal, são registradas mais de 570 mil pessoas com deficiência (22,4%). A falta de\nconhecimento e de mecanismos de apoio apropriados faz com que a deficiência seja considerada uma doença crônica e essas\npessoas, capazes de mostrar superação, sejam deixadas para segundo plano.\nA população com deficiência encontra dificuldade de inserção no mercado de trabalho, apesar da exigência legal de cotas (Lei\nnº 8.213/91) para trabalhadores com deficiência, Os motivos vão desde a alegação do despreparo das empresas para recebê-las,\ncomo também da baixa qualificação profissional apresentada. Preconceito, necessidade de adaptação aos ambientes de\ntrabalho, falta de acessibilidade nas edificações, transportes e vias de acesso foram outros obstáculos citados no Censo(IBGE\n2010).\nConforme a Cartilha do Censo 2010 para pessoas com deficiência publicada pela Secretaria de Direitos Humanos da\nPresidência da República – SDH/PR, “a visão dos direitos humanos é baseada na não discriminação e se sustenta em três\npilares principais: igualdade de oportunidades, poder de decisão sobre a própria vida e segurança para exigir os direitos”.\nNesse contexto, a Secretaria de Estado da Micro e Pequena e Economia Solidária do Governo do Distrito Federal- SEMPES\nvem propor ações que visem a inclusão produtiva para o segmento de pessoas com deficiência com o propósito de apoiar no\nprocesso de organização, produção, capacitação, comercialização, acesso a crédito e , incorporação ao processo produtivo. Esta\nSecretaria propõe, portanto, a realização de “Circuito Especial de Economia Solidária” no âmbito do Salão de Negócios da\nAcessibilidade, Reabilitação e Inclusão Social, em Brasília/DF, para a destinação dos recursos oriundos de emenda\nparlamentar. É importante ressaltar que o Salão de Negócios de Acessibilidade, Reabilitação e Inclusão Social, que sediará os\n“Circuitos Especiais de Economia Solidária”, é um espaço de inclusão, anual, sem fins lucrativos, para promoção da pessoa\ncom deficiência que reunirá, durante três dias em Brasilia, milhares de pessoas da sociedade civil, gestores, trabalhadores e do\ncoletivo de pessoas com deficiência, o que contribuirá significativamente para o alcance dos resultados propostos no projeto.\nEssa iniciativa favorece a política de apoio e fomento aos empreendimentos econômicos e solidários da SEMPES, o\nestabelecimento de parcerias, além da integração das políticas públicas e incentivo à participação da sociedade civil nas ações\ndo governo. Desta forma, a inserção da pessoa com deficiência ao processo produtivo, encaminhará este segmento para as\noportunidades de ampliação da geração de renda. Além de ampliar o debate sobre a agenda inclusiva reforça a troca de\ninformações e a comunicação participativa entre governo, setor privado e organizações.. Outro fator de destaque é que essa é\numa demanda latente dos segmentos que trabalham nessa área como, por exemplo, a Cooperativa Central Base de Apoio ao\nSistema ECOSOL no Distrito Federal Base Brasília -, que desenvolve o Salão de Negócios da Acessibilidade, Reabilitação e\nInclusão Social e cede espaço para realização do Circuito, atividade em sintonia com a realidade e a promoção da pessoa com\ndeficiência\nA inclusão de pessoas com deficiência no mercado - não apenas de consumo, mas de geração de renda - não pode ser\nconsiderada uma questão isolada. Elas estão acolhidas em associações, cujas terapias ocupacionais praticadas para superação\ndas dificuldades das suas deficiências e de necessidades de inclusão social, geram um volume de produtos ou serviços, onde a\nprática do cooperativismo poderá ser direcionada para a inserção no processo produtivo emancipatório.\nPara que o quadro de vulnerabilidade social seja transporto, torna-se necessária a constante e cada vez mais qualificada\nformação, produção e difusão de conhecimentos que rompam preconceitos e incentivem a participação de governantes,\norganizações, empresários, gestores e comunidade no processo de inclusão. As ações precisam evidenciar as potencialidades\ndos indivíduos com deficiência, seus direitos como cidadãos e incentivar a participação de todos os setores da sociedade no\nprocesso de inclusão.\nPara atender àqueles em situação de vulnerabilidade social, sintonizado com o Governo Federal, o Viver sem Limite - Plano\nNacional dos Direitos da Pessoa com Deficiência, aderido pelo Governo do Distrito Federal e o Plano DF Sem Miséria foram\ninstituídos com ações estruturadas, integradas e articuladas das diversas políticas públicas a serem executadas pelas Secretarias\nde Estado e empresas públicas do Distrito Federal, para melhoria da qualidade de vida, garantia de renda, acesso a serviços\npúblicos e Inclusão produtiva, geração de renda e emprego.",
    "warrant":"Portaria Interministerial nº 507/2011",
    "grantor":"SECRETARIA DE DIREITOS HUMANOS DA PRESIDÊNCIA DA REPÚBLICA",
    "proponent":"SECRETARIA DE ESTADO DE ECONOMIA E DESENVOLVIMENTO SUSTENTAVEL",
    "proponent_address":"Q SETOR COMERCIAL SUL, QUADRA 09, LOTE A, TORRE B",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/33252434",
    "proponent_person":"ARTHUR BERNARDES DE MIRANDA",
    "status":"warning",
    "status_tip":"Prestação de Contas Aprovada"
  },
  {
    "id":23,
    "name":"Promover a reabilitação e reinserção sustentáveis por meio da geração de trabalho e renda aos usuários e dependentes de crack,\nálcool e outras drogas, no âmbito do Distrito Federal e RIDE, em cumprimento ao Decreto 33.164 de 31.08.2011 e Decreto 32.\n901 de 03.05.2011.",
    "justification":"O movimento da reforma psiquiátrica no Brasil propõe transformar o modelo assistencial em saúde mental e construir um novo\nestado social para os usuários da saúde mental: O estado de cidadão como todos os outros.\nNessa nova perspectiva, os usuários de saúde mental têm, além do acompanhamento terapêutico, o direito de se organizar, se\nconveniar e promover sua inserção no mercado de trabalho.\nA geração de trabalho e renda torna-se uma estratégia para alcançar a reinserção social dos usuários da rede pública de saúde\nmental. A reinserção social assume o caráter de reconstrução das perdas e seu objetivo é a capacitação da pessoa para exercer\nem plenitude o seu direito à cidadania. O exercício da cidadania para o paciente em recuperação significa o estabelecimento ou\nresgate de uma rede social inexistente ou comprometida pelo período de abuso da droga.\nA proposta é criar projetos de geração de trabalho e renda dentro da rede de serviços responsáveis pelos usuários e dependentes\nde crack, álcool e outras drogas, como resultado da demanda dos próprios pacientes por trabalho.\nA importância do trabalho e da geração de renda nesse contexto irá transformar a ocupação em produto e saber formar preço é\num trabalho complementar da saúde mental. Enquanto a saúde mental cuida da parte terapêutica e do acompanhamento, os\noutros integrantes das ações intersetoriais, darão suporte para que esse trabalho gere renda.\nUma coisa é transformar algo em um produto, outra é comercializar esse produto e ganhar dinheiro com isso. Esse Projeto visa\nà promoção e circulação de conhecimentos, a troca de ideias, o aumento da participação dos usuários na gestão coletiva desse\ntrabalho.\nOutro fator importante nesse trabalho é o reconhecimento. Na maioria das vezes os usuários de saúde mental são de baixa\nrenda, portanto, quando eles vendem a alguém um artigo que produzem, veem seus trabalhos reconhecidos e consequentemente\no resultado tem um valor enorme: significa que eles não são inúteis, não são um peso para suas famílias e que podem contribuir\nsocialmente.\nCulturalmente, o “valor” de uma pessoa ou a sua dignidade estão diretamente ligados à sua capacidade de produção.\nDesenvolver uma atividade formal ou informal é para o dependente químico, quase tão importante quanto à manutenção da\nabstinência.\nA discriminação quanto à capacidade do paciente estar apto ao trabalho faz com que ele experimente sentimentos ambivalentes\nde fracasso e de sucesso.\nNas sociedades atualmente, os índices de desemprego são altos, é importante considerar que a dificuldade de inserção no\nmercado de trabalho não depende apenas da aptidão ou do esforço dos indivíduos e sim de fatores que possam facilitar esse\nprocesso de desenvolvimento pessoal e profissional dos cidadãos.\nA reinserção social do dependente de drogas deve ser pensada, planejada e orientada por toda a equipe, a interdisciplinaridade\nalarga o horizonte de possibilidades e permite aos pacientes, leituras específicas para cada nova situação que se apresente.",
    "warrant":"PORTARIA INTERMINISTERIAL Nº 507 MP/MF/CGU",
    "grantor":"FUNDO NACIONAL ANTIDROGAS",
    "proponent":"SECRETARIA DE ESTADO DE JUSTICA E CIDADANIA",
    "proponent_address":"ST SAIN ESTAÇÃO SETOR RODOFERROVIARIA ALA CENTRAL, ANDAR TÉRREO, ASA NORTE.",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/21044202",
    "proponent_person":"JULIO CESAR FERREIRA PEREIRA",
    "status":"ok",
    "status_tip":"Em execução"
  },
  {
    "id":24,
    "name":"Reforma e ampliação da Escola Superior de Ciências da Saúde - ESCS/FEPECS, Unidade de Samambaia/DF, onde funciona o\nCurso de Graduação em Enfermagem.",
    "justification":"A ESCS é uma instituição de Ensino Superior Pública mantida pela Fundação de Ensino e Pesquisa em Ciência da Saúde –\nFEPECS e esta, por sua vez, vinculada à Secretaria de Estado de Saúde do Distrito Federal. Foi criada na perspectiva de formar\nprofissionais de saúde com perfil mais adequado às necessidades da população, em consonância com os princípios e diretrizes\ndo SUS, além de obedecer às diretrizes curriculares nacionais.\nA ESCS oferece cursos de graduação em Medicina e Enfermagem que por meio de proposta metodológica inovadora se propõe\na formar profissionais com capacidade de fortalecimento do SUS.\nPedagogicamente, a opção por metodologias ativas coloca o estudante como sujeito ativo da aprendizagem. Diante de\nproblemas simulados, no ambiente protegido da escola, ou de problemas reais vividos nos serviços de saúde, a integração\nensino-serviço-comunidade é a grande orientadora do processo de aprendizado e produção do conhecimento, que articula as\ndimensões cognitiva, psicológica, social e biológica. Os serviços são cenários privilegiados para a aprendizagem, que se\ncaracteriza pela ação coletiva, pactuada e integrada de estudantes e professores com as equipes da rede pública.\nNesse contexto, o curso de Graduação em Enfermagem funciona na RA XII- Samambaia, cuja estrutura é composta dos\nseguintes espaços: 10 salas de aula; 1 laboratório de Anatomia Histológica/Morfofuncional; 1 laboratório de Enfermagem com\nduas salas conjugadas para aulas práticas; local de depósito; serviços de apoio; sanitários de público e sanitários para PMR;\numa área de convivência com lanchonete e pátio coberto; um auditório com aproximadamente 80 lugares; salas de coordenação\ne uma biblioteca.\nPossui ainda, uma área interna, embora não edificada para estacionamento de veículos.\nNo mesmo terreno se encontra uma ampla área de construção inacabada. Trata-se de fundações, contrapisos, pilares, vigas e\nvedações. Esta construção corresponde a aproximadamente, 70% da área ocupada pela unidade acadêmica.\nO terreno foi cedido à FEPECS pela Administração Regional de Samambaia, para a construção da Escola, embora a construção\ninacabada não tenha sido reaproveitada como parte do projeto.\nA estrutura física atual do Curso de Graduação em Enfermagem da ESCS/ Unidade Samambaia destoa da necessidade atual e,\nprincipalmente, da necessidade futura. Cientes do empenho em melhorar as condições de ensino oferecidas aos docentes e\nestudantes, consideramos que a reforma realizada em parte do terreno ocupado pela escola foi planejada com instalações\nprovisórias para 2 turmas iniciais. Em 2012, formamos a primeira turma, em 2013, formaremos a segunda turma e, atualmente,\nsão realizadas atividades diversas de 4 turmas, em espaços físicos insuficientes para as práticas pedagógicas, sobretudo quando\nconsideramos as metodologias ativas. Nossa situação precária nos leva a fazer uso de salas improvisadas e até da biblioteca, que\npor si é insuficiente.\nCumpre observar que o complexo ESCS-ETESB-EAPSUS-FEPECS está em transformação em direção à criação da\nUniversidade de Ciências da Saúde do Distrito Federal (UNISUS). A meta desejada é iniciar o próximo ano, 2014, já com essa\nestrutura legal aprovada no legislativo e preparada para aprovação pelos órgãos competentes.\nA readequação da estrutura física de todo esse complexo passa a ser prioridade de primeira grandeza, a fim de assegurar meios\npara o bom andamento das atividades compatíveis com a Universidade nascente, cujas demandas extrapolam as de ensino de\ngraduação. De fato, por definição, uma universidade se caracteriza pela indissociabilidade entre ensino-pesquisa-extensão; por\nisso, a ampliação dos espaços físicos torna-se premente.\nDiante do exposto e visando oferecer um ambiente de ensino adequado aos estudantes do Curso de Graduação em Enfermagem\nda ESCS, consideramos necessários:\n1. Realização das reformas necessárias para a criação de mais 8 salas para atividades de Habilidades Profissionais de\nEnfermagem, 1 sala de planejamento para docentes, 1 depósito para guarda de material, 1 depósito e 1 sala de refeição para\nterceirizados, 1 sala para o Centro Acadêmico e 1 ambulatório modelo. Seguem sugestões em planta baixa.\n2. Realização de reformas para ampliação da biblioteca. As dimensões atuais são mínimas e o espaço insuficiente para busca de\ninformações e estudo individual dos estudantes das 4 séries, componentes obrigatórios na metodologia adotada pela escola.\n3. Fechamento do pátio coberto na frente da Escola com vidro temperado articulável devido à exposição a fortes ventos frontais,\nos quais trazem toda a poeira levantada nas obras e terrenos vazios ao redor no período da seca. O fato caracteriza uma situação\nde risco à saúde dos docentes, estudantes e servidores, assim como demanda grande esforço do serviço de limpeza para manter\na área limpa. Já no período das chuvas, o pátio interno de circulação de toda a comunidade acadêmica fica molhado, trazendo\nrisco de acidentes e quedas.",
    "warrant":"Decreto 6.170/2007 e Portaria 507/2011",
    "grantor":"FUNDO NACIONAL DE DESENVOLVIMENTO DA EDUCACAO",
    "proponent":"FUNDACAO DE ENSINO E PESQUISA EM CIENCIAS DA SAUDE",
    "proponent_address":"SMHN Quadra 501 Bloco A",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/33264956",
    "proponent_person":"MARILIA COELHO CUNHA",
    "status":"ok",
    "status_tip":"Aguardando Prestação de Contas"
  },
  {
    "id":25,
    "name":"Apoiar a estruturação do arranjo desenvolvimento local por meio da organização de redes de cooperação solidaria centrado no\nTerritório das Cidades da Estrutural e da Ceilândia, ao articular os empreendimentos da economia solidária que desenvolvem\natividades como abastecimento, comércio varejista, restaurante popular, feira de produtores, gastronomia local, salões de beleza\ne empreendimentos de turismo de bases comunitárias, para a criação de novos canais de comercialização, como espaços virtuais\ne físicos, fomentando a economia local, com ênfase no fortalecimento e consumo sustentáveis.",
    "justification":"A realidade socioeconômica do Distrito Federal tem um traço fundamental que é da desigualdade econômica, informações do\núltimo censo mostra que por exemplo na região do entorno. Na Cidade Estrutural atualmente vivem em média 42 mil pessoas.\nA média de pessoas por família é de 4,2 pessoas. Há, na cidade, cerca de 30 associações civis e 20 prefeituras de quadras.\nDevido a sua localização, a Cidade Estrutural representa uma séria ameaça à integridade da mais antiga e mais importante área\nambiental do Distrito Federal, o Parque Nacional de Brasília. Com mais de 40 anos de existência e 30 mil hectares, o parque é\nimportante para o equilíbrio ecológico do DF. Possui várias espécies da fauna e flora ameaçadas de extinção, além de abastecer\n30% de Brasília com água potável provenientes das represas de Santa Maria e Torto. Já a cidade de Ceilândia surgiu em\ndecorrência da Campanha de Erradicação de Favelas – CEI que foi o primeiro projeto de erradicação de favelas que aconteceu\nno Distrito Federal, na época, realizado pelo governo local. As remoções para a nova cidade foram iniciadas em 27 de março de\n1971, estabelecendo a data de sua fundação a partir da transferência cerca de 80.000 moradores das favelas da Vila do IAPI,\nVila Tenório, Vila Esperança, Vila Bernardo Sayão e Morro do Querosene. A chegada constante de novos migrantes ao Distrito\nFederal e a criação do Programa Habitacional da Sociedade de Habitação de Interesse Social - SHIS levaram o governo a criar\noutras áreas em Ceilândia. Em 1976, foi criada a QNO (Quadra Norte “O” e em 1977, o Núcleo Guariroba, situado na Ceilândia\nSul. Surgiram depois os setores “P” Norte e “P” Sul (1979). Em 1985, foi expandido o Setor “O”, em 1988 ocorreu o acréscimo\ndo Setor “N”, em 1989, o Setor “P” Sul e QNQ e em 1992 o Setor “R”. Inicialmente ficou estabelecida uma área urbana de 20\nKm2 para conter 17 mil lotes, pertencentes a Região Administrativa de Taguatinga - RA III. Hoje a Ceilândia possui uma área\nurbana de 29,10 Km2 e está subdividida em diversos setores: Ceilândia Centro, Ceilândia Sul, Ceilândia Norte, P Sul, P Norte,\nSetor O, Expansão do Setor O, QNQ, QNR, Setores de Indústria e de Materiais de Construção e parte do INCRA (área rural da\nregião administrativa), setor Privê, e condomínios que estão em fase de legalização como o Pôr do Sol e Sol Nascente. A\nRegião Administrativas IX está situada a 26 quilômetros da RA I – Brasília.\nO papel das politicas públicas e Programa de Brasil Sem Miséria\nEm atendimento ao Plano DF Sem Miséria, do Governo do Distrito Federal, e do Plano Brasil sem Miséria, do Governo\nFederal, que baseado abaixo, lança ações que envolvem diversas politicas publicas, com apoio das mais varias secretarias:\n-O Distrito Federal é a unidade da federação com maior índice de desigualdade na distribuição da renda domiciliar per capita;\n-Existem 93 mil famílias na extrema pobreza. Foram identificadas ainda os territórios que apresentam elevados índices de\nvulnerabilidade social;\n-Entre as famílias extremamente pobres, 23,9% tem a mulher como chefe, sem cônjuge, analfabeta e com filhos menores de 15\nanos;\n-15,4% das famílias tem uma pessoa de 4 a 14 anos que não estudo;\n-11,4% das famílias tem renda per capita inferior a meio salario mínimo, com uma pessoa de 60 anos ou mais.\nUtilizando-se da estratégia “Busca Ativa”, do Plano Brasil Sem Miséria, caracterizada por levar o Estado ao cidadão, sem\nesperar que as pessoas mais pobres cheguem até o poder público, o projeto “Rede Feixe de Luz”, pretende levar até as\ncomunidades da Estrutural e da Ceilândia com uma proposta que visa integrar sua economia interna, fomentando os\nempreendimentos das próprias cidades e seus trabalhadores. No Distrito Federal. O eixo de Inclusão Produtiva estabelecidos\nnos dois programas governamentais se estruturou em duas frentes, uma para o meio urbano e outra para o rural. A promoção da inclusão produtiva nas cidades ou meio urbano, se dá a partir da geração de ocupação e renda. Para isso, já estão\nsendo ofertados cursos de qualificação profissional e capacitação, sintonizados com a vocação econômica de cada região ou\nterritório, com destaque para o PRONATEC. O eixo também conta com a ampliação da política de microcrédito (Programa\nCRESCER), Programa Mulheres Mil e com a promoção de ações de incentivo ao microempreendedorismo e à Economia\nPopular e Solidária.",
    "warrant":"PORTARIA 507/2011 E DECRETO 6170/2007",
    "grantor":"MINISTERIO DO TRABALHO E EMPREGO",
    "proponent":"INSTITUTO SOCIO CULTURAL AMBIENTAL E TECNOLOGICO DE PROJETOS DE ECONOMIA SOLIDARIA",
    "proponent_address":"QUADRA QE 28 CONJUNTO CASA 27",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/3034-",
    "proponent_person":"HIGOR DOS SANTOS SANTANA",
    "status":"danger",
    "status_tip":"Em execução"
  },
  {
    "id":26,
    "name":"Fomentar e estimular o aprimoramento e fortalecimento da gestão municipal do SUAS através de parceria com o Colegiado\nNacional de Gestores Municipais de Assistência Social – CONGEMAS, promovendo a mobilização, articulação, orientação e\napoio aos gestores, trabalhadores e conselheiros municipais de assistência social.",
    "justification":"A Pesquisa de Informações Básicas Municipais (MUNIC), realizada em 2009 pelo IBGE, mostra que os Conselhos de\nAssistência Social estão INSTITUÍDOS em 99,3 % dos municípios e que em 93,1% desses entes federados os Planos de\nAssistência Social foram elaborados. Em relação aos Fundos Municipais de Assistência Social, 97,7% dos municípios\ndeclararam possuí-lo, destes 91,4% são unidade orçamentária própria, contudo os dados alertam para o fato de que em 47,6%\ndeste universo, o ordenador de despesas é o prefeito; em 42,6% o ordenador é o secretário ou técnico responsável da área e em\n7,5% o ordenador é o secretário ou técnico de outra área.\nOutra informação importante é relativa à oferta dos serviços socioassistenciais que estão presentes em 98,6% dos municípios,\nsendo que 97,9% dos municípios declararam ofertar serviços de proteção social básica (PSB) e 87,6% afirmaram que ofertam\nserviços de proteção social especial (PSE). Estes dados evidenciam uma ampla cobertura desses serviços, em especial os de\ncaráter preventivo como o Serviço de Proteção e Atendimento Integral à Família (PAIF) que se encontra em 95% dos\nmunicípios.\nEsses dados demonstram o potencial indutivo que a instituição do SUAS exerceu na institucionalização dos órgãos e instanciais\nresponsáveis pela gestão da assistência social em todo país.\nConsiderando que o conjunto dos serviços da proteção social básica e especial se viabiliza nos municípios, da mesma forma, os\ndados dos Conselhos e dos Fundos Municipais, apontam para a necessidade de qualificá-los, o CONGEMAS - Colegiado\nNacional de Gestores Municipais de Assistência Social promove a articulação e capacitação dos gestores municipais e tem sido\num importante parceiro na materialização do direito socioassistencial, na operacionalização e na gestão do SUAS. Sabemos que\no SUAS se implementa através de um conjunto articulado dos três entes federados, mas, sendo o ano de 2013, o início de nova\ngestão municipal, é fundamental que o CONGEMAS faça um esforço coletivo, principalmente, na formação e articulação dos\nnovos gestores municipais de assistência social e na disseminação do SUAS como Sistema responsável por garantir as\nseguranças de acolhida; de renda; de convívio familiar, comunitário e social; do desenvolvimento da autonomia individual,\nsocial e familiar e de sobrevivência a riscos circunstanciais.\nNesta perspectiva o CONGEMAS propõe o estabelecimento deste convenio com o Ministério do Desenvolvimento Social e\nCombate à Fome,- MDS, no intuito de potencializar os esforços nacionais para a consolidação do SUAS, tendo como principais\nMetas a realização do Encontro Nacional dos Gestores Municipais de Assistência Social e dos Encontros Regionais e seu\nprocesso organizativo e avaliativo; além do aprimoramento da produção de conhecimento e da política de informação.\nRessaltamos que o XVI ENCONTRO NACIONAL DE GESTORES MUNICIPAIS DE ASSISTÊNCIA SOCIAL\nACONTECERÁ em abril de 2014, em local ainda ser definido, com a previsão da participação de 3.000 (três mil) gestores\nmunicipais e trabalhadores do SUAS, que discutirão os eixos, diretrizes, metas, procedimentos e fluxos para o aperfeiçoamento\ndo SUAS nos próximos anos. O tema central do encontro será o Financiamento do SUAS: Desigualdades Regionais e a Gestão\nMunicipal, os encontros regionais serão realizados entre o segundo semestre de 2013 e inicio de 2014, e se constituem em uma\nampla mobilização, integração e qualificação dos gestores e trabalhadores do suas, enquanto etapa preparatória para o XVI\nEncontro Nacional que acontecerá em 2014.\nRegistramos que o Encontro Nacional de Gestores Municipais de Assistência Social é uma das agendas anuais do Sistema\nÚnico de Assistência Social (SUAS), constituindo-se em um instrumento qualificado no debate nacional, pois avalia e delibera\nos compromissos dos gestores municipais da assistência social, na materialização do SUAS.\nEm relação a produção de conhecimentos, serão viabilizadas duas cartilhas orientadoras sobre Plano Plurianual e\nregulamentação legal do SUAS nos municípios. Já na política de informação, a mesma será implantada na perspectiva de\npossibilitar aos gestores, trabalhadores e conselheiros acesso as informações atualizadas a cerca das normativas nacionais, em\nespecial, da nova NOB/SUAS aprovada pelo CNAS na Resolução 33 de 12.12.2012, além da divulgação das experiências\nmunicipais exitosas no âmbito do SUAS.",
    "warrant":"Decreto nº 6170 e Portaria Interministerial nº 507/2011",
    "grantor":"MINISTERIO DO DESENV. SOCIAL E COMBATE A FOME",
    "proponent":"COLEGIADO NACIONAL DE GESTORES MUNICIPAIS DE ASSISTENCIA SOCIAL",
    "proponent_address":"SEPN 506 BLOCO C SALA 34 A MEZANINO",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61-33474188",
    "proponent_person":"VALDIOSMAR VIEIRA SANTOS",
    "status":"danger",
    "status_tip":"Prestação de Contas Aprovada com Ressalvas\n\n"
  },
  {
    "id":27,
    "name":"Participação da delegação brasileira na 27ª UNIVERSIADE DE VERÃO, a ser realizada na cidade de Kazan/Rússia.",
    "justification":"O presente projeto apresenta os elementos técnicos, administrativos e financeiros necessários para que a Confederação\nBrasileira do Desporto Universitario possa representar o BRASIL na 27ª UNIVERSIADE DE VERÃO, que irá acontecer na\ncidade de Kazan/Rússia, no período de 06 a 17 de julho de 2013, sendo que a saída da delegação do Brasil será a partir de 27 de\njunho de 2013. A delegação brasileira contará com um quantitativo de 353 pessoas. A participação do BRASIL em tal evento se\njustifica pela necessidade de intercâmbio entre atletas universitários com atletas de diversos Países através da prática sadia da\ncompetição desportiva.\nA participação do BRASIL, através da CBDU, em parceria com o Ministério do Esporte nestas competições de alto nível\ninternacional, se justifica pela necessidade de intercâmbio entre atletas universitários e atletas de diversos Países através da\nprática sadia da competição desportiva e por proporcionar o desenvolvimento da personalidade, a promoção\nde intercâmbio social, cultural e desportivo entre os mesmos.\nA Universíade de verão é um evento multi esportivo mundial que acontece a cada dois anos e reúne os melhores atletas\nUniversitários de seus Países. A CBDU em parceria com o Ministério do Esporte e Comitê Olímpico Brasileiro organiza a\nOlimpíada Universitária Jub’s, evento anual que contribui, juntamente com os eventos nacionais da CBDU, para a formação da\ndelegação Brasileira que participa deste importante evento no contexto esportivo mundial.\nEste momento é bastante significativo para os objetivos de tornar o país uma potência olímpica mundial. A CBDU, juntamente\ncom o COB, Ministério do Esporte e as demais\nConfederações especializadas estão unindo esforços e ações para que o Brasil realize e participe cada vez mais de campeonatos\ndeste nível propiciando aos atletas e dirigentes, experiências internacionais, objetivando a melhor representação possível.\nA 27ª Universiade de Verão é organizada pela FISU – Federetion International University Sport juntamente com o Comitê\nOrganizador do país sede do evento. A participação nos eventos organizados pela FISU é voltada exclusivamente a seus\nfiliados, ou seja, as confederações nacionais de cada país filiado responsável pelo desenvolvimento do\ndesporto universitário e com atribuições legais a tais ações.\nO Processo de seleção do país sede do evento tem seu inicio nas assembleias da entidade onde são abertas as candidaturas para\nos países realizarem os eventos. Após este\nprocesso é definido a sede de cada evento. Com o local e período definido são realizadas as divulgações com o período de\ninscrições e posteriormente a definição dos países inscritos e que adquiriram o direito de participação.\nO projeto tem como objetivo específico o congraçamento dos estudantes universitários brasileiros com os estudantes\nuniversitários de outros países, através da prática sadia do esporte, visando, além do desenvolvimento da personalidade, a\npromoção do intercâmbio social, cultural e desportivo entre os mesmos e, em especial, dar oportunidade do surgimento de\nnovos talentos em competição internacional.\nO Processo de seleção dos atletas é baseado nas competições do calendário nacional da CBDU que servem como seletivas para\nos atletas que participam das mesmas. A convocação de atletas segue o seguinte critério: é preferível que o atleta tenha nível\ntécnico internacional ou que tenha condições de atingir tal nível nos próximos anos; que se\nenquadrem na faixa etária de 18 a 28 anos; que seja universitário e que participe do sistema de competições da CBDU;\nPossibilidade de convocação de atletas universitários que estudem no exterior, mas que possuam nível técnico internacional.\nO projeto que viabiliza a participação da delegação brasileira na 27ª UNIVERSIADE DE VERÃO espera desenvolver o\ndesporto universitário brasileiro, bem como promover o\nintercâmbio dos estudantes de diversos Países, através da prática sadia do esporte. Espera-se ainda um desempenho positivo dos\nparticipantes e organização do evento, além de uma significativa eficácia e eficiência dos resultados dos atletas na competição.\nHaverá um acompanhamento dos resultados técnicos e do desempenho da delegação, através de boletins diários, durante o\nevento, além de reuniões diárias de avaliação com os chefes de equipe e adjuntos e relatórios pós-evento para melhoria nas\npróximas edições.\nPor fim, considerando as últimas orientações da SNELIS quanto aos relatórios de viagens dos beneficiários, com os respectivos\ncomprovantes de embarque, para fins de prestação de contas, bem como considerando a necessidade institucional de organizar e\ncompilar os relatórios das comissões técnicas para elaboração de relatório técnico final, que ensejará também reuniões para\navaliação final da participação da delegação brasileira, solicitamos um prazo de vigência de mais 60 dias após o término do\nevento, no intuito de levantarmos as informações de efetividade do mencionado projeto.",
    "warrant":"Portaria nº 507 e Decreto nº 6.170",
    "grantor":"MINISTERIO DO ESPORTE",
    "proponent":"CONFEDERACAO BRASILEIRA DO DESPORTO UNIVERSITARIO",
    "proponent_address":"SGAN 905 Conjunto D",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/34471113",
    "proponent_person":"LUCIANO ATAYDE COSTA CABRAL",
    "status":"warning",
    "status_tip":"Prestação de Contas em Análise"
  },
  {
    "id":28,
    "name":"Estruturação e o fortalecimento do Conselho de Políticas sobre Drogas do Distrito Federal e dos Conselhos Distritais de\nPolíticas sobre Drogas a serem instalados nas cidades satélites do Distrito Federal e Entorno.",
    "justification":"",
    "warrant":"Portaria Interministerial nº 507 MP/MF/CGU",
    "grantor":"FUNDO NACIONAL ANTIDROGAS",
    "proponent":"SECRETARIA DE ESTADO DE JUSTICA E CIDADANIA",
    "proponent_address":"ST SAIN ESTAÇÃO SETOR RODOFERROVIARIA ALA CENTRAL, ANDAR TÉRREO, ASA NORTE.",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/21044202",
    "proponent_person":"JOAO CARLOS SOUTO",
    "status":"danger",
    "status_tip":"Em execução"
  },
  {
    "id":29,
    "name":"Fabricação, fornecimento e instalação de módulos pré-moldados para abrigos de passageiros padrão DFTrans em paradas de\nônibus no Sistema Público Coletivo - STPC - na Vila Estrutural/DF.",
    "justification":"A instalação de equipamentos urbanos tipo abrigos de passageiros padrão DFTrans em paradas de ônibus na Vila Estrutural/DF\nvisa basicamente em atender àquela população carente de locais apropriados que proporcionem segurança e conforto na\nutilização do transporte público. O benefício é permitir que as pessoas que moram no local possam ir e vir de maneira digna.",
    "warrant":"Decreto 6170/07",
    "grantor":"MINISTERIO DAS CIDADES",
    "proponent":"SECRETARIA DE ESTADO DE INFRAESTRUTURA E SERVICOS PUBLICOS",
    "proponent_address":"A SAPS - SETOR DE AREAS PUBLICAS SUL LOTE B",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/3306-",
    "proponent_person":"DAVID JOSE DE MATOS",
    "status":"warning",
    "status_tip":"Convênio Anulado"
  },
  {
    "id":30,
    "name":"REFORMA DE UNIDADE DE ATENÇÃO ESPECIALIZADA EM SAÚDE",
    "justification":"O Hospital Materno Infantil de Brasília, HMIB, tem importância central na assistência aos recém-nascidos críticos, prematuros\nextremos e portadores de malformações congênitas cirúrgicas, por contar com a única equipe de cirurgia pediátrica com atuação\nneonatal em toda rede da Secretaria de Estado de saúde do Distrito Federal.\nMuitos dos leitos não atendem às exigências da portaria GM/MS 930/2012, com luminosidade, espaçamento entre os leitos\ninadequado, sem convívio para as mães, com posto de reanimação, coleta de exames e enfermagem funcionando conjuntamente\nem um mesmo espaço. Tendo em vista a inadequação da unidade e vislumbrando maiores benefícios ao RN prematuro ou com\nagravos, é que surgiu a necessidade de reforma de um setor disponível no hospital, que poderá atender os requisitos da portaria\nGM/MS 930/2012 e do Método Canguru e proporcionar mais eficiência no atendimento neonatal no HMIB e em toda rede\nSES/DF. Com isso, serão restituídos à internação geral do hospital os leitos atualmente ocupados, aumentando a capacidade\ninstalada de internação do hospital, especialmente leitos cirúrgicos pediátricos e de maternidade.\nAs propostas da nova unidade canguru e do ambulatório de follow up trarão como primeiro benefício, um cuidado mais\nhumanizado aos recém-nascidos internados e em condições de ficarem ao lado de suas mães, com todos os benefícios daí\nextraídos. Como segundo consequência, promoverá a redução do tempo de permanência do Bebê na Unidade de Terapia\nIntensiva Neonatal (UTIN) existente no hospital, resultando em maior giro de leitos e consequente aumento na oferta de leitos\nintensivos, atendendo à alta demanda de pacientes neonatais de maior complexidade de toda a rede SES DF. Como terceira\nconsequência, aumentará a oferta de acompanhamento ambulatorial aos pacientes após a alta, totalizando os cuidados\nprogressivos neonatais, que são a forma mais eficiente, racional, humanizada e que proporciona melhores resultados na\npromoção da sobrevida e saúde dA Reforma do Hospital Materno Infantil de Brasília, HMIB, cujo CNES é 0010537 tem como\nrelevância a adequação da unidade de forma que possa atender a Portaria GM/MS 930/2012 proporcionando uma maior\neficiência na assistência aos recém-nascidos críticos, prematuros extremos e portadores de malformações congênitas cirúrgicas.\nO projeto caracteriza-se pela adoção de zoneamento dividido em dois grupos funcionais principais: área para permanência dos\npacientes e área para serviços e apoio. A unidade terá 15 leitos com 5 enfermarias de 2 leitos e uma de 5 leitos, em sistema de\nalojamento conjunto canguru, em que cada leito é composto de cama para a mãe e berço para o bebê. Além das enfermarias, as\npacientes terão um local de convívio, que também poderá ser utilizado pelos acompanhantes e familiares. No setor de apoio e\nserviços, além do posto de enfermagem a unidade terá locais de apoio, procedimentos, chefias, área para conforto clínico,\nlavanderia para uso das mães e espaço multiuso destinado às atividades de reunião com os pais, familiares, colegiado gestor da\nunidade, entre outras. Da edificação existente permanecerá a estrutura de concreto, que poderá receber recuperação e reforço\nconforme indicação de avaliação especializada.",
    "warrant":"Decreto 6170/07",
    "grantor":"MINISTERIO DA SAUDE",
    "proponent":"FUNDO DE SAUDE DO DISTRITO FEDERAL",
    "proponent_address":"SAIN – Parque Rural, Bloco B, 1º Andar Sala 152",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/33482510",
    "proponent_person":"RICARDO CARDOSO DOS SANTOS",
    "status":"ok",
    "status_tip":"Em execução"
  },
  {
    "id":31,
    "name":"Capacitar potenciais empresários (EP), Micro Empreendedores Individuais (MEI), Micro Empresas (ME), artesões, e\ntrabalhadores manuais, promovendo o empreendedorismo e criando condições técnicas e operacionais para a geração de\npequenos novos negócios fortalecendo os arranjos produtivos locais do DF.",
    "justification":"Após expressivo crescimento do PIB brasileiro entre os anos de 2011 a 2012 e a atual situação do cenário brasileiro torna-se\nindispensável desenvolver um trabalho específico de incentivo e preparação ao empreendedorismo junto ao crescente público.\nEssa realidade só reforça a necessidade de ampliar o seu acesso ao mercado, capacitando e informando para desenvolver outras\nformas de renda e trabalho garantindo sua autonomia econômica e financeira por meio do apoio ao empreendedorismo.\nContudo, é fundamental investir em programas capazes de mobilizar, sensibilizar, capacitar e apoiar processos de inserção\neconômica e social de pequenas empresas, empreendedores individuais e em potencial, mobilizando a sociedade civil e as\ninstituições públicas e privadas para assumirem compromissos voltados para o desenvolvimento sustentável das localidades e\npara a inclusão social. O objetivo do Projeto Capacitação para potenciais empresários (EP), Micro Empreendedores Individuais\n(MEI), Micro Empresas (ME), artesões (potenciais empreendedores), e trabalhadores manuais, é promover o\nempreendedorismo, através da atuação integrada dos potenciais empreendedores (artesãos) e MPEs residentes no Distrito\nFederal e de sua rede sociocultural, capacitando e criando condições técnicas e operacionais para a geração de pequenos novos\nnegócios. Vale destacar que a Secretaria de Estado de Economia e Desenvolvimento Sustentável do Distrito Federal - SEDS\nenvidará esforços para estimular o surgimento de outros projetos que venham usufruir dos conhecimentos adquiridos pelos\nempresários neste, promovendo, desta forma, a divulgação de experiências empresariais dos capacitados e a multiplicação dos\nresultados do Projeto Capacitação para potenciais empresários (EP), Micro Empreendedores Individuais (MEI), Micro\nEmpresas (ME), artesões (potenciais empreendedores), e trabalhadores manuais. Nesse diapasão busca-se a capacitação\nprofissional de diversos atores do setor da economia local, fortalecendo os arranjos produtivos locais do DF.",
    "warrant":"Portaria 507/2011 E DECRETO 6170/2007",
    "grantor":"Presidência da República",
    "proponent":"SECRETARIA DE ESTADO DE ECONOMIA E DESENVOLVIMENTO SUSTENTAVEL",
    "proponent_address":"Q SETOR COMERCIAL SUL, QUADRA 09, LOTE A, TORRE B",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/33252434",
    "proponent_person":"ARTHUR BERNARDES DE MIRANDA",
    "status":"danger",
    "status_tip":"Em execução"
  },
  {
    "id":32,
    "name":"Apoio a Projeto de Infraestrutura Turística - Revitalização do Balneário Veredinha em Brazlândia/DF - 1ª etapa.",
    "justification":"O Distrito Federal (DF) que atualmente conta uma população de aproximadamente 2.570.000 habitantes (IBGE/2010),\nlocalizado na Região Centro Oeste do país, é caracterizado pelo Bioma Cerrado. Brasília, sua capital, inaugurada em 1960 foi\nreconhecida em 1987 pela Organização das Nações Unidas para a Educação, a Ciência e a Cultura (UNESCO) como\nPatrimônio Mundial da Humanidade, sendo o único bem contemporâneo a merecer essa distinção.\nA cidade monumento depois da realização da Copa do Mundo de Futebol 2014, Brasília, quando recebeu vários jogos e\naproximadamente 630.000 turistas, entrou definitivamente no cenário turístico mundial. Diante deste quadro, torna-se\nimprescindível a ampliação da diversidade das ofertas turísticas para que todo o DF possa receber seus turistas de forma\nconvidativa, segura e com qualidade, consequentemente, gerando mais emprego e renda para o Distrito Federal.\nO entorno de Brasília é composto por várias cidades, dentre elas, Brazlandia, que localizada na área de drenagem do lago\nDescoberto - maior manancial de abastecimento de água para o Distrito Federal, tem contribuído muito para o desenvolvimento\ndo turismo na região, principalmente o turismo rural.\nBrazlandia tem grande potencial turístico, sendo muito procurada por suas festas agrícolas, como a do Morango ou a do Leite, e\nreligiosas, como a Festa do Divino ou o Encontro da Mãe com o Filho. A proximidade com a Chapada Imperial, parque com\nvisitação de cachoeiras localizada a aproximadamente 6 Km a norte do núcleo urbano, também constitui ecoturismo na região.\nUm dos espaços de destaque da cidade é a região do Parque Ecológico do Veredinhas, criado pela Lei no 302, de 26 de agosto\nde 1992 regulamentada pelo Decreto no 16.052, de 07 de novembro e 1994. O parque corta o núcleo urbano de Brazlândia no\nsentido norte-sul e foi criado no sentido de preservar a Área de Preservação Permanente - APP do Córrego Veredinha e suas\nnascentes.\nO Plano de Manejo do Parque Veredinhas comporta como uma das diretrizes o estabelecimento de infraestrutura de transporte,\nhospedagem e alimentação na área de influência do parque, considerando a importância do desenvolvimento do turismo como\nvetor de desenvolvimento local e regional.\nO Balneário Veredinhas está inserido na região sul do Parque Veredinhas ao lado do Espelho D água ou Lago Veredinha,\nimportante atrativo turístico da cidade, e foi construído com a função de abrigar atividades esportivas e de lazer. Entretanto,\nhoje se encontra degradado.\nA revitalização do Complexo de Lazer de Brazlândia, conforme PDOT/2009, tem como objetivos: requalificar os espaços\nurbanos, proporcionar espaços de convívio, promover a recuperação ambiental do Lago Veredinhas e do Parque Veredinhas,\npromover as atividades culturais típicas da região, o turismo ecológico sustentável, educação ambiental além de estimular o uso\ncultural e de lazer desses espaços e adjacências.\nA presente proposta visa a revitalização da área, com ações como drenagem, pavimentação e paisagismo, requalificando o\nBalneário Veredinhas (Coordenadas: -15.681498, -48.199268), promovendo a infraestrutura adequada para a primeira etapa da\nexpansão da atividade turística e melhoria dos produtos e serviços ofertados em uma área privilegiada da cidade, com a\nrequalificação dos espaços e garantia de identidade à região, ampliando a eficiência, qualidade e atratividade do turismo no\nDistrito Federal, dinamizando as crescentes atividades comerciais da localidade, estendendo os cuidados à preservação,\nconservação, valorização e organização de infraestrutura, tanto para os turistas quanto à população local.",
    "warrant":"Decreto 6170/07",
    "grantor":"MINISTERIO DO TURISMO",
    "proponent":"SECRETARIA DE ESTADO DE INFRAESTRUTURA E SERVICOS PUBLICOS",
    "proponent_address":"A SAPS - SETOR DE AREAS PUBLICAS SUL LOTE B",
    "proponent_city":"BRASILIA",
    "proponent_phone":"61/3306-",
    "proponent_person":"JULIO CESAR PERES",
    "status":"warning",
    "status_tip":"Em execução"
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
      //$rootScope.notification.show("Monitoramento ativado", 0);
      $rootScope.menu.footer.show([
        {
          icon: "icon ion-flag",
          name: "Denunciar esse convênio",
          action: function(){
            //console.log('ila');
            //console.log($rootScope);
            //alert('ola mundo');
            var options = {
                 location: 'yes',
                 clearcache: 'yes',
                 toolbar: 'yes'
               };
            $cordovaInAppBrowser.open('https://google.com.br', '_blank', options)
            .then(function(event) {
              // success
            })
            .catch(function(event) {
              // error
            });

          }
        }
      ]);


    }
  };

  $scope.finance={
    init: function(id){
        $rootScope.popup.content.start('templates/data.local.finance.html', $scope);
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

  $scope.chartCreated=false;

  $scope.chart=function(id){
    //console.log(id);
    //console.log("chartContainer"+id);
    angular.element(document).ready(function () {



      $scope.chartCreated=true;
      chartTimeline = new CanvasJS.Chart("chartContainer",
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

      chartTimeline.render();


      chartProp = new CanvasJS.Chart("chartPropContainer",
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

  };


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
        $scope.chart($state.params.id);

      break;
    }
  };


});
