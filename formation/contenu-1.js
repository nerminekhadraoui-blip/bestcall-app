/* ==========================================================
   Academia BestCall — contenu de formation (partie 1/2)
   Chaque texte = ["português", "français"]
   Captures : formation/img/<nom>.png
   ========================================================== */
window.BCF = window.BCF || { modules: [] };

BCF.phases = [
  { id: "bases",     t: ["As bases", "Les bases"],                 d: ["Ferramentas, clientes e reflexos.", "Outils, clients et réflexes."] },
  { id: "tel",       t: ["Ao telefone", "Au téléphone"],            d: ["Do acolhimento à ligação com o especialista.", "De l’accueil à la mise en relation."] },
  { id: "paiement",  t: ["Pagamentos", "Paiements"],                d: ["Meios de pagamento, Wallet e cobranças.", "Moyens de paiement, Wallet et recouvrement."] },
  { id: "fidelite",  t: ["Ofertas e fidelidade", "Offres et fidélité"], d: ["Promoções, Wengo Reward e loja.", "Promos, Wengo Reward et boutique."] },
  { id: "compte",    t: ["Conta e reclamações", "Compte et réclamations"], d: ["Gerir a conta, escalar ao N2, Foxi.", "Gérer le compte, escalader au N2, Foxi."] }
];

/* ---------------- PHASE 1 : LES BASES ---------------- */
BCF.modules.push(
{ id: "bienvenue", phase: "bases", c: "#6C5CE7", min: 8,
  title: ["Bem-vindo à equipa", "Bienvenue dans l’équipe"],
  desc: ["O seu papel, as ferramentas e os reflexos essenciais.", "Ton rôle, les outils et les réflexes essentiels."],
  lessons: [
  { t: ["O seu papel", "Ton rôle"], b: [
    { lead: ["Atende os clientes da Wengo por telefone e e-mail. O objetivo: uma resposta rápida, clara e personalizada, e pôr o cliente em contacto com o especialista certo.", "Tu réponds aux clients de Wengo par téléphone et par e-mail. L’objectif : une réponse rapide, claire et personnalisée, et mettre le client en relation avec le bon expert."] },
    { cards: [
      { i: "1", t: ["Gerir chamadas e e-mails", "Gérer appels et e-mails"], p: ["Seguir o procedimento de cada pedido.", "Suivre la procédure de chaque demande."] },
      { i: "2", t: ["Soluções rápidas", "Des solutions rapides"], p: ["Adaptadas à necessidade do cliente.", "Adaptées au besoin du client."] },
      { i: "3", t: ["Dominar as ferramentas", "Maîtriser les outils"], p: ["Bobi, Graam e Foxi, todos os dias.", "Bobi, Graam et Foxi, tous les jours."] },
      { i: "4", t: ["Clientes satisfeitos", "Des clients satisfaits"], p: ["É o resultado de tudo o resto.", "C’est le résultat de tout le reste."] }
    ] },
    { key: ["Horário do serviço: todos os dias das <b>08h às 23h</b>.", "Horaires du service : tous les jours de <b>8h à 23h</b>."] },
    { p: ["Vocabulário: <b>MER</b> = <i>Mise En Relation</i>, ligar o cliente a um especialista. <b>RDV</b> = marcação de uma consulta futura. <b>N2</b> = nível 2, a equipa que trata os pedidos que o N1 (nós) não pode resolver. <b>QPP</b> = consulta por escrito (pergunta).", "Vocabulaire : <b>MER</b> = Mise En Relation, connecter le client à un expert. <b>RDV</b> = rendez-vous pour une consultation future. <b>N2</b> = niveau 2, l’équipe qui traite ce que le N1 (nous) ne peut pas résoudre. <b>QPP</b> = consultation écrite (question)."] }
  ] },
  { t: ["As ferramentas", "Les outils"], b: [
    { cards: [
      { i: "B", cc: "#1B2C54", t: ["Bobi", "Bobi"], p: ["O CRM: ficha cliente, MER, RDV, pagamentos, faturas, reclamações.", "Le CRM : fiche client, MER, RDV, paiements, factures, réclamations."] },
      { i: "G", cc: "#2E9CCA", t: ["Graam", "Graam"], p: ["A telefonia: receber, gerir e qualificar as chamadas. Contém a página Bobi integrada.", "La téléphonie : recevoir, gérer et qualifier les appels. Contient la page Bobi intégrée."] },
      { i: "F", cc: "#E67E22", t: ["Foxi", "Foxi"], p: ["Os tickets: cada e-mail de cliente é seguido como um ticket.", "Les tickets : chaque e-mail client est suivi sous forme de ticket."] },
      { i: "AI", cc: "#16A085", t: ["Gemini", "Gemini"], p: ["O primeiro reflexo perante um código de erro.", "Le premier réflexe face à un code d’erreur."] }
    ] },
    { shot: { f: "bobi-accueil.png", cap: ["A página inicial do Bobi: pesquisar um cliente (e-mail, ID, telefone ou pseudónimo) e os atalhos: criar conta, iniciar chamada, marcar consulta, consulta escrita, transações em curso", "L’accueil de Bobi : rechercher un client (e-mail, ID, téléphone ou pseudo) et les raccourcis : créer un compte, lancer un appel, prendre un RDV, consultation écrite, transactions en cours"] } },
    { warn: ["Lance sempre as chamadas a partir da página Bobi <b>integrada no Graam</b>. Fora do Graam, a MER torna-se indireta e o cliente pode pagar a sobretaxa de telemóvel.", "Lance toujours les appels depuis la page Bobi <b>intégrée dans Graam</b>. Hors de Graam, la MER devient indirecte et le client peut payer la surtaxe mobile."] }
  ] },
  { t: ["Os reflexos essenciais", "Les réflexes essentiels"], b: [
    { lead: ["Estes reflexos evitam erros e tempo perdido. Adote-os em cada análise.", "Ces réflexes évitent les erreurs et le temps perdu. Adopte-les à chaque analyse."] },
    { table: { h: [["Situação", "Situation"], ["O reflexo", "Le réflexe"]], r: [
      [["💶 Pedido de reembolso", "💶 Demande de remboursement"], ["Analisar a transação (tarifa, despesas de telemóvel). Abrir o detalhe da fatura: que vales, quanto em cada meio de pagamento. Antes de responder, ver para onde o reembolso foi devolvido.", "Analyser la transaction (tarif, frais mobile). Ouvrir le détail de la facture : quels bons, combien sur chaque moyen de paiement. Avant de répondre, vérifier où le remboursement a été renvoyé."]],
      [["🔍 Assunto que não está na ficha", "🔍 Sujet absent de la fiche"], ["Separador <b>Risk</b>: procurar uma conta prima (associada) para ter a visão completa.", "Onglet <b>Risk</b> : chercher un compte cousin (associé) pour avoir la vision complète."]],
      [["⚠️ Criar uma reclamação N2", "⚠️ Créer une réclamation N2"], ["Ler antes o histórico de e-mails e SMS para perceber o contexto e evitar duplicados.", "Lire d’abord l’historique e-mails et SMS pour comprendre le contexte et éviter les doublons."]],
      [["🎁 Wallet e vales", "🎁 Wallet et bons"], ["Abrir o detalhe da Wallet (euros ou minutos) e ver os vales específicos (especialista, aniversário…).", "Ouvrir le détail du Wallet (euros ou minutes) et repérer les bons spécifiques (expert, anniversaire…)."]],
      [["❌ Código de erro", "❌ Code d’erreur"], ["Consultar o Gemini. Ver o motivo da falha e com que especialista. Nunca deixar o cliente sem solução.", "Consulter Gemini. Identifier le motif de l’échec et avec quel expert. Ne jamais laisser le client sans solution."]]
    ] } },
    { key: ["Nunca deixe o cliente sem solução: proponha um especialista disponível nos favoritos, um especialista que ainda não consultou, ou uma marcação.", "Ne laisse jamais le client sans solution : propose un expert disponible dans ses favoris, un expert qu’il n’a jamais consulté, ou un rendez-vous."] }
  ] }],
  quiz: [
    { q: ["Um cliente fala de uma dívida que não aparece na ficha. Onde procura?", "Un client parle d’un impayé absent de sa fiche. Où cherches-tu ?"], o: [["No separador Risk, para ver as contas primas", "Dans l’onglet Risk, pour voir les comptes cousins"], ["No Graam", "Dans Graam"], ["Peço-lhe que ligue mais tarde", "Je lui demande de rappeler plus tard"]], a: 0, w: ["O Risk mostra as contas associadas (mesmo cartão, PayPal ou telefone).", "Risk montre les comptes associés (même carte, PayPal ou téléphone)."] },
    { q: ["Antes de criar uma reclamação para o N2, o que faz?", "Avant de créer une réclamation N2, que fais-tu ?"], o: [["Leio o histórico de e-mails e SMS", "Je lis l’historique e-mails et SMS"], ["Nada, crio logo", "Rien, je la crée directement"], ["Ligo ao especialista", "J’appelle l’expert"]], a: 0, w: ["Evita duplicados e dá o contexto.", "Ça évite les doublons et donne le contexte."] },
    { q: ["Aparece um código de erro. Primeiro reflexo?", "Un code d’erreur apparaît. Premier réflexe ?"], o: [["Consultar o Gemini", "Consulter Gemini"], ["Fechar a ficha", "Fermer la fiche"], ["Enviar ao N2", "Envoyer au N2"]], a: 0, w: ["O Gemini dá o significado exato do erro.", "Gemini donne la signification exacte de l’erreur."] }
  ]
},

{ id: "clientes", phase: "bases", c: "#E05297", min: 8,
  title: ["Os tipos de clientes Wengo", "Les types de clients Wengo"],
  desc: ["5 perfis, 5 maneiras de falar com o cliente.", "5 profils, 5 façons de parler au client."],
  lessons: [
  { t: ["Os 5 perfis", "Les 5 profils"], b: [
    { lead: ["O tipo depende do número de consultas e da data da última. Identificá-lo permite adaptar a mensagem e a oferta.", "Le type dépend du nombre de consultations et de la date de la dernière. L’identifier permet d’adapter le message et l’offre."] },
    { table: { h: [["Tipo", "Type"], ["Definição", "Définition"]], r: [
      [["<b>Prospect</b>", "<b>Prospect</b>"], ["Nenhuma consulta paga.", "Aucune consultation payée."]],
      [["<b>Novo</b>", "<b>Nouveau</b>"], ["Menos de 3 consultas, a 1.ª há menos de 30 dias.", "Moins de 3 consultations, la 1re il y a moins de 30 jours."]],
      [["<b>Regular</b>", "<b>Régulier</b>"], ["Mais de 3 consultas e pelo menos 1 nos últimos 30 dias.", "Plus de 3 consultations et au moins 1 dans les 30 derniers jours."]],
      [["<b>Ocasional</b>", "<b>Occasionnel</b>"], ["Pelo menos 1 consulta nos últimos 3 meses, mas pouco frequente.", "Au moins 1 consultation dans les 3 derniers mois, mais peu fréquent."]],
      [["<b>Inativo</b>", "<b>Inactif</b>"], ["Já consultou, mas a última consulta foi há mais de 3 meses.", "A déjà consulté, mais la dernière il y a plus de 3 mois."]]
    ] } },
    { classifier: 1 }
  ] },
  { t: ["O que cada perfil precisa", "Ce dont chaque profil a besoin"], b: [
    { cards: [
      { i: "P", cc: "#2E9CCA", t: ["Prospect", "Prospect"], p: ["Hesita. Explicar o funcionamento, tranquilizar sobre a confidencialidade, propor a oferta de boas-vindas.", "Hésite. Expliquer le fonctionnement, rassurer sur la confidentialité, proposer l’offre de bienvenue."] },
      { i: "N", cc: "#1F8A5B", t: ["Novo", "Nouveau"], p: ["Descobre o serviço. Verificar se a 1.ª experiência correu bem, ajudar a escolher.", "Découvre le service. Vérifier que la 1re expérience s’est bien passée, aider à choisir."] },
      { i: "R", cc: "#6C5CE7", t: ["Regular", "Régulier"], p: ["Fiel. Apoio rápido, valorizar a fidelidade.", "Fidèle. Aide rapide, valoriser sa fidélité."] },
      { i: "O", cc: "#D4A017", t: ["Ocasional", "Occasionnel"], p: ["Pouco frequente. Encontrar o especialista certo para o fidelizar.", "Peu fréquent. Trouver le bon expert pour le fidéliser."] },
      { i: "I", cc: "#B5493A", t: ["Inativo", "Inactif"], p: ["Ausente. Perceber porquê, propor um novo especialista ou uma promoção.", "Absent. Comprendre pourquoi, proposer un nouvel expert ou une promo."] }
    ] },
    { p: ["No Bobi, o estatuto aparece no canto superior esquerdo da ficha: <b>VIP</b> (gastou muito na plataforma, prioridade e atenção especial), <b>Novo</b> (descobrir a necessidade) e <b>Prospect</b> (acompanhar a primeira experiência).", "Dans Bobi, le statut apparaît en haut à gauche de la fiche : <b>VIP</b> (a beaucoup dépensé, priorité et attention particulière), <b>Nouveau</b> (découvrir son besoin) et <b>Prospect</b> (accompagner la première expérience)."] },
    { key: ["Adaptar o apoio a cada perfil: <ul><li>converte mais prospects</li><li>reconquista os inativos</li><li>fideliza os regulares</li></ul>", "Adapter l’aide à chaque profil : <ul><li>convertit plus de prospects</li><li>reconquiert les inactifs</li><li>fidélise les réguliers</li></ul>"] }
  ] }],
  quiz: [
    { q: ["Uma cliente criou conta há 2 semanas e nunca pagou uma consulta.", "Une cliente a créé son compte il y a 2 semaines et n’a jamais payé de consultation."], o: [["Nova", "Nouvelle"], ["Prospect", "Prospect"], ["Ocasional", "Occasionnelle"]], a: 1, w: ["Nenhuma consulta paga = Prospect, mesmo com conta recente.", "Aucune consultation payée = Prospect, même avec un compte récent."] },
    { q: ["10 consultas no total; a última há 5 meses.", "10 consultations au total ; la dernière il y a 5 mois."], o: [["Regular", "Régulier"], ["Inativo", "Inactif"], ["Ocasional", "Occasionnel"]], a: 1, w: ["Última consulta há mais de 3 meses = Inativo.", "Dernière consultation il y a plus de 3 mois = Inactif."] },
    { q: ["Com um cliente inativo, o que faz primeiro?", "Avec un client inactif, que fais-tu d’abord ?"], o: [["Proponho a tarifa por minuto", "Je propose le tarif à la minute"], ["Procuro perceber porque deixou de consultar", "Je cherche à comprendre pourquoi il ne consulte plus"], ["Transfiro para o N2", "Je transfère au N2"]], a: 1, w: ["Compreender o motivo permite propor a solução certa.", "Comprendre la raison permet de proposer la bonne solution."] }
  ]
},

{ id: "fiche", phase: "bases", c: "#1B2C54", min: 12,
  title: ["A ficha cliente no Bobi", "La fiche client dans Bobi"],
  desc: ["Ler a ficha em 30 segundos antes de agir.", "Lire la fiche en 30 secondes avant d’agir."],
  lessons: [
  { t: ["A faixa do topo", "Le bandeau du haut"], b: [
    { shot: { f: "fiche-vue-ensemble.png", cap: ["A ficha completa: faixa do topo, Informações cliente e Ações, depois Informações gerais, Meios de pagamento e Especialistas favoritos", "La fiche complète : bandeau du haut, Infos client et Actions, puis Infos générales, Moyens de paiement et Experts favoris"] } },
    { lead: ["É a primeira coisa que vê ao abrir a ficha. Verifique-a antes de tratar qualquer pedido.", "C’est la première chose que tu vois en ouvrant la fiche. Vérifie-le avant de traiter toute demande."] },
    { shot: { f: "fiche-client-bandeau.png", cap: ["Faixa do topo: criação da conta, última consulta, meio de pagamento, top especialistas e ações", "Bandeau du haut : création du compte, dernière consultation, moyen de paiement, top experts et actions"] } },
    { steps: [
      { t: ["Estatuto", "Statut"], p: ["VIP, Novo ou Prospect: adapta a abordagem.", "VIP, Nouveau ou Prospect : adapte l’approche."] },
      { t: ["Última consulta", "Dernière consultation"], p: ["Antiga? O cliente pode precisar de ser reconquistado: veja se é elegível para uma oferta.", "Ancienne ? Le client est peut-être à reconquérir : vérifie s’il a droit à une offre."] },
      { t: ["Meio de pagamento", "Moyen de paiement"], p: ["Cartão, Wallet, ou os dois.", "Carte, Wallet, ou les deux."] },
      { t: ["Especialistas favoritos", "Experts favoris"], p: ["Propor um favorito melhora a satisfação e a fidelidade.", "Proposer un favori améliore la satisfaction et la fidélité."] }
    ] },
    { shot: { f: "fiche-a-savoir.png", cap: ["Cliente inativo: o bloco «À savoir» diz logo a que oferta tem direito, e «Profil à vérifier» pede para verificar o perfil antes de continuar", "Client inactif : le bloc « À savoir » dit directement à quelle offre il a droit, et « Profil à vérifier » demande de vérifier le profil avant de continuer"] } },
    { shot: { f: "profil-suspendu.png", cap: ["Perfil suspenso: a nota no topo diz porquê. Clique em «Voir les Notes» para mais informação", "Profil suspendu : la note en haut dit pourquoi. Clique sur « Voir les Notes » pour plus d’infos"] } },
    { tip: ["Leia sempre o bloco <b>«À savoir»</b>: indica a oferta de descoberta a que o cliente é elegível.", "Lis toujours le bloc <b>« À savoir »</b> : il indique l’offre découverte à laquelle le client est éligible."] },
    { shot: { f: "fiche-bandeau-nouveau.png", cap: ["Um cliente novo: conta criada há 4 horas, 1 consulta com promoção aplicada, já tem um cartão. Prioridade: descobrir a necessidade", "Un nouveau client : compte créé il y a 4 heures, 1 consultation avec promo appliquée, il a déjà une carte. Priorité : découvrir son besoin"] } },
    { tip: ["A linha <b>«Votre priorité»</b> diz-lhe o que fazer primeiro com este cliente (ex.: «découvrir son besoin»).", "La ligne <b>« Votre priorité »</b> te dit quoi faire en premier avec ce client (ex. : « découvrir son besoin »)."] },
    { p: ["A barra de separadores permite navegar: <b>Informações, Notas, Chamadas, Risk, Transações, Faturas, Meios de pagamento</b>.", "La barre d’onglets permet de naviguer : <b>Informations, Notes, Appels, Risk, Transactions, Factures, Moyens de paiement</b>."] }
  ] },
  { t: ["Informações do cliente e saúde da conta", "Infos client et santé du compte"], b: [
    { shot: { f: "infos-generales.png", cap: ["O bloco Informations générales: pseudónimo com etiquetas (Nouveau, Impayé), anuário, fuso, e-mail com estado, telefone, inscrição, Pay as you go, Wengo Reward", "Le bloc Informations générales : pseudo avec étiquettes (Nouveau, Impayé), annuaire, fuseau, e-mail avec statut, téléphone, inscription, Pay as you go, Wengo Reward"] } },
    { table: { h: [["Campo", "Champ"], ["Para que serve", "À quoi ça sert"]], r: [
      [["Pseudónimo", "Pseudo"], ["Confirmar que fala com o cliente certo.", "Confirmer que tu parles au bon client."]],
      [["Data de nascimento", "Date de naissance"], ["Elemento-chave para verificar a identidade.", "Élément clé pour vérifier l’identité."]],
      [["E-mail", "E-mail"], ["<b>Sem e-mail</b>: pedir um. <b>Desconhecido</b>: e-mail inválido, corrigir.", "<b>Sans e-mail</b> : en demander un. <b>Inconnu</b> : e-mail invalide, à corriger."]],
      [["Anuário de inscrição", "Annuaire d’inscription"], ["Define a língua e as ofertas que o cliente recebe.", "Définit la langue et les offres que le client reçoit."]],
      [["Fuso horário", "Fuseau horaire"], ["Para dar as horas certas ao cliente.", "Pour donner les bonnes heures au client."]],
      [["Pay as you go", "Pay as you go"], ["SIM = Wallet + cartão; NÃO = só Wallet.", "OUI = Wallet + carte ; NON = Wallet seul."]],
      [["Identidade verificada", "Identité vérifiée"], ["Necessária para desbloquear o limite de 2000€.", "Nécessaire pour débloquer le plafond de 2000€."]],
      [["Wengo Reward", "Wengo Reward"], ["Inscrito ou não no programa de fidelidade.", "Inscrit ou non au programme de fidélité."]]
    ] } },
    { shot: { f: "pay-as-you-go.png", cap: ["Data de inscrição, Pay as you go e Wengo Reward na ficha", "Date d’inscription, Pay as you go et Wengo Reward sur la fiche"] } },
    { shot: { f: "fiche-actions.png", cap: ["Informações do cliente, Saúde da conta e Últimas atividades à esquerda; o bloco Ações à direita", "Infos client, Santé du compte et Dernières activités à gauche ; le bloc Actions à droite"] } },
    { p: ["O bloco <b>Ações</b> reúne tudo: Consultation immédiate, Consultation mail, RDV; o que está <b>em curso</b> (consultas live, mail, RDV); <b>Contacto cliente</b> (registar uma reclamação, enviar e-mail/SMS); o <b>histórico</b> (Mail & SMS, reclamações, chamadas, notas e tickets); e <b>Conta</b> (adicionar um meio de pagamento, proposta de recarga).", "Le bloc <b>Actions</b> regroupe tout : Consultation immédiate, Consultation mail, RDV ; ce qui est <b>en cours</b> (consultations live, mail, RDV) ; <b>Contact client</b> (déposer une réclamation, envoyer un mail/SMS) ; l’<b>historique</b> (Mail & SMS, réclamations, appels, notes et tickets) ; et <b>Compte</b> (ajouter un moyen de paiement, proposition de recharge)."] },
    { shot: { f: "email-statuts.png", cap: ["Estado do e-mail: «Inconnu» (inválido, a corrigir) à esquerda, «Actif» à direita", "Statut de l’e-mail : « Inconnu » (invalide, à corriger) à gauche, « Actif » à droite"] } },
    { p: ["Mais abaixo, <b>«Informations détaillées»</b> mostra a identidade verificada, o país, a língua e a origem do cliente, e a <b>Saúde da conta</b> detalhada: estado da conta, do perfil, da faturação, consumo suspenso, suspeita de fraude, cobrança desativada.", "Plus bas, <b>« Informations détaillées »</b> montre l’identité vérifiée, le pays, la langue et l’origine du client, et la <b>Santé du compte</b> détaillée : état du compte, du profil, de la facturation, conso suspendue, suspicion de fraude, recouvrement désactivé."] },
    { shot: { f: "infos-detaillees-selfcare.png", cap: ["Informações detalhadas, saúde da conta e o botão «Selfcare client» (Desktop ou Mobile)", "Infos détaillées, santé du compte et le bouton « Selfcare client » (Desktop ou Mobile)"] } },
    { key: ["O botão <b>«Selfcare client»</b> abre o espaço cliente tal como o cliente o vê (computador ou telemóvel). Muito útil para o guiar passo a passo.", "Le bouton <b>« Selfcare client »</b> ouvre l’espace client tel que le client le voit (ordinateur ou mobile). Très utile pour le guider pas à pas."] },
    { shot: { f: "fiche-selfcare-es.png", cap: ["Cliente espanhol: «Selfcare client» em baixo à esquerda e, à direita, o bloco amarelo «Informations à demander» com a frase para confirmar o e-mail", "Client espagnol : « Selfcare client » en bas à gauche et, à droite, le bloc jaune « Informations à demander » avec la phrase pour confirmer l’e-mail"] } },
    { p: ["Quando faltam dados, o bloco <b>«Informations à demander»</b> dá-lhe a frase a dizer e os botões para confirmar ou atualizar (ex.: o e-mail).", "Quand il manque des données, le bloc <b>« Informations à demander »</b> te donne la phrase à dire et les boutons pour confirmer ou mettre à jour (ex. : l’e-mail)."] },
    { p: ["<b>Saúde da conta</b>: este bloco sobe para o topo da ficha quando há um alerta (ponto vermelho).", "<b>Santé du compte</b> : ce bloc remonte en haut de la fiche quand il y a une alerte (point rouge)."] },
    { shot: { f: "sante-compte.png", cap: ["Saúde da conta sem alerta: tudo verde («Actif», «Aucun problème», «Non»)", "Santé du compte sans alerte : tout est vert (« Actif », « Aucun problème », « Non »)"] } },
    { shot: { f: "bloc-moyens-paiement.png", cap: ["O bloco Moyens de paiement: tipo de pagamento, cartão por defeito (aqui nenhum: «Ajouter une CB»), créditos Wallet em euros e segundos", "Le bloc Moyens de paiement : type de paiement, carte par défaut (ici aucune : « Ajouter une CB »), crédits Wallet en euros et secondes"] } },
    { shot: { f: "dernieres-activites.png", cap: ["Últimas atividades: RDV futuro, RDV passado, último processo de pedido (e em que etapa parou), última consulta, com atalhos", "Dernières activités : RDV à venir, RDV passé, dernier process de demande (et où il s’est arrêté), dernière consultation, avec raccourcis"] } },
    { shot: { f: "actions-bloc.png", cap: ["O bloco Actions completo: consultas, em curso, atividade, contacto cliente, histórico, conta", "Le bloc Actions complet : consultations, en cours, activité, contact client, historique, compte"] } },
    { shot: { f: "conso-suspendue.png", cap: ["Sinais de alerta numa ficha: «Consommation suspendue: Oui», etiqueta «Impayé» no pseudónimo, e-mail «Inconnu» e «Blacklisté»", "Signaux d’alerte sur une fiche : « Consommation suspendue : Oui », étiquette « Impayé » sur le pseudo, e-mail « Inconnu » et « Blacklisté »"] } },
    { chips: [
      { c: "s-bad", k: ["Perfil suspenso", "Profil suspendu"], p: ["Normalmente a pedido do cliente. Não consulta, mas acede ao espaço cliente.", "Souvent à la demande du client. Il ne consulte pas, mais accède à son espace."] },
      { c: "s-bad", k: ["Em cobrança", "En recouvrement"], p: ["O cliente tem consultas por pagar.", "Le client a des consultations impayées."] },
      { c: "s-bad", k: ["Conta inativa", "Compte inactif"], p: ["Não consulta nem acede ao espaço cliente.", "Il ne consulte pas et n’accède pas à son espace."] },
      { c: "s-bad", k: ["Consumo suspenso", "Conso suspendue"], p: ["Atingiu um dos limites de consumo.", "A atteint un des plafonds de consommation."] }
    ] }
  ] },
  { t: ["Especialistas favoritos", "Les experts favoris"], b: [
    { shot: { f: "experts-favoris.png", cap: ["Bloco «Experts favoris»: canais por cor, última consulta, número de consultas, atalhos", "Bloc « Experts favoris » : canaux par couleur, dernière consultation, nombre de consultations, raccourcis"] } },
    { chips: [
      { c: "s-ok", k: ["Verde", "Vert"], p: ["Disponível neste canal.", "Disponible sur ce canal."] },
      { c: "s-mid", k: ["Laranja", "Orange"], p: ["Ocupado.", "Occupé."] },
      { c: "s-bad", k: ["Vermelho", "Rouge"], p: ["Indisponível neste canal.", "Indisponible sur ce canal."] },
      { c: "s-wait", k: ["Cinzento", "Gris"], p: ["Canal não proposto pelo especialista.", "Canal non proposé par l’expert."] }
    ] },
    { shot: { f: "experts-favoris-orange.png", cap: ["Favoritos consultados nos últimos 6 meses: a maioria está ocupada (laranja), Maeve está disponível em telefone e chat (verde)", "Favoris consultés ces 6 derniers mois : la plupart sont occupés (orange), Maeve est disponible en téléphone et chat (vert)"] } },
    { tip: ["Lista muito longa? Filtre: <b>Todos</b>, <b>Disponíveis imediatamente</b>, ou consultados nos últimos 6 meses.", "Liste trop longue ? Filtre : <b>Tous</b>, <b>Disponibles immédiatement</b>, ou consultés ces 6 derniers mois."] }
  ] },
  { t: ["Notas, Chamadas, Risk", "Notes, Appels, Risk"], b: [
    { cards: [
      { i: "N", t: ["Notas", "Notes"], p: ["Histórico das ações na conta. Filtros por data, grupo, tipo, utilizador. Botão <b>+</b> para adicionar: tipo, caixa a marcar e/ou texto, guardar.", "Historique des actions sur le compte. Filtres par date, groupe, type, utilisateur. Bouton <b>+</b> pour ajouter : type, case à cocher et/ou texte, enregistrer."] },
      { i: "C", t: ["Chamadas", "Appels"], p: ["Data, ID da chamada, entrada/saída, operador, duração, qualificação. Dica: cole o ID na pesquisa do Graam para ver tudo.", "Date, ID d’appel, entrant/sortant, opérateur, durée, qualification. Astuce : colle l’ID dans la recherche Graam pour tout voir."] },
      { i: "R", t: ["Risk", "Risk"], p: ["Contas primas: mesmo cartão, mesmo PayPal ou mesmo telefone.", "Comptes cousins : même carte, même PayPal ou même téléphone."] }
    ] },
    { shot: { f: "onglet-notes.png", cap: ["Separador Notas: notas automáticas (fidelidade) e manuais, e à direita o histórico dos tickets", "Onglet Notes : notes automatiques (fidélité) et manuelles, et à droite l’historique des tickets"] } },
    { shot: { f: "ajouter-note.png", cap: ["«Ajouter une note»: tipo (ex.: Service Client), caixas prontas (gesto comercial, número ou horário de contacto) e o texto", "« Ajouter une note » : type (ex. Service Client), cases prêtes (geste commercial, numéro ou horaires de contact) et le texte"] } },
    { tip: ["Deixe uma nota quando o cliente pede para ser contactado num número ou a uma hora específica: as caixas existem para isso.", "Laisse une note quand le client demande à être contacté sur un numéro ou à une heure précise : les cases existent pour ça."] },
    { shot: { f: "risk-onglet.png", cap: ["O separador RISK da ficha", "L’onglet RISK de la fiche"] } },
    { p: ["No Risk há 3 quadros de contas primas: <b>por cartão</b> (CB), <b>por telefone</b> (número usado num pedido de MER, com o número de ocorrências) e <b>por e-mail PayPal</b>. Mais abaixo, o histórico do score Risk e os «Comptes cousins FV2».", "Dans Risk il y a 3 tableaux de comptes cousins : <b>par carte</b> (CB), <b>par téléphone</b> (numéro utilisé pour une demande de MER, avec le nombre d’occurrences) et <b>par e-mail PayPal</b>. Plus bas, l’historique du score Risk et les « Comptes cousins FV2 »."] },
    { shot: { f: "risk-cousins-cb.png", cap: ["Contas primas por cartão (aqui vazio)", "Comptes cousins par CB (ici vide)"] } },
    { shot: { f: "risk-cousins-tel.png", cap: ["Contas primas por telefone: duas contas partilham um número", "Comptes cousins par téléphone : deux comptes partagent un numéro"] } },
    { shot: { f: "risk-cousins-paypal.png", cap: ["Contas primas por e-mail PayPal", "Comptes cousins par e-mail PayPal"] } },
    { shot: { f: "risk-score.png", cap: ["«Historique du score Risk» e o botão para ver as informações de antiga geração", "« Historique du score Risk » et le bouton pour voir les infos d’ancienne génération"] } },
    { shot: { f: "risk-cousins.png", cap: ["Risk → «Comptes cousins»: o caminho que liga duas contas (aqui pelo mesmo número de telefone)", "Risk → « Comptes cousins » : le chemin qui relie deux comptes (ici par le même numéro de téléphone)"] } },
    { p: ["No Risk, a etiqueta de validade do cartão: <b>verde</b> = ativo, <b>laranja</b> = expirado ou apagado, <b>vermelho</b> = crítico, bloqueado no Bobi.", "Dans Risk, la pastille de validité de la carte : <b>vert</b> = active, <b>orange</b> = expirée ou supprimée, <b>rouge</b> = critique, bloquée dans Bobi."] },
    { key: ["A ficha que abre está suspensa ou inativa? O número pode estar ligado a uma ficha antiga. Vá ao <b>Risk</b>: o cliente usa provavelmente outra conta.", "La fiche qui s’ouvre est suspendue ou inactive ? Le numéro est peut-être lié à une vieille fiche. Va dans <b>Risk</b> : le client utilise sûrement un autre compte."] }
  ] },
  { t: ["Transações e faturas", "Transactions et factures"], b: [
    { compare: [
      { cls: "good", h: ["Transações", "Transactions"], tag: ["Consultas", "Consultations"], items: [["ID, data, produto (telefone, chat, vídeo, QPP)", "ID, date, produit (téléphone, chat, vidéo, QPP)"], ["Valor, tarifa aplicada, duração, especialista", "Montant, tarif appliqué, durée, expert"], ["Estado: OK, Reembolso, Erro (a aguardar pagamento)", "Statut : OK, Remboursement, Erreur (en attente de paiement)"]] },
      { cls: "good", h: ["Faturas", "Factures"], tag: ["Pagamentos", "Paiements"], items: [["Data de faturação e de cobrança", "Date de facturation et d’encaissement"], ["Pré-pago ou pós-pago; tipo: transação, recarga Wallet, subscrição", "Prépayé ou postpayé ; type : transaction, recharge Wallet, abonnement"], ["Estado: OK, Erro, Falha, Em curso", "Statut : OK, Erreur, Échec, En cours"]] }
    ] },
    { shot: { f: "factures-liste.png", cap: ["Separador Factures: um Refund (transação), um OK e um Failure (recargas Wallet)", "Onglet Factures : un Refund (transaction), un OK et un Failure (recharges Wallet)"] } },
    { tip: ["Para o detalhe de uma promoção ou de um vale aplicado, clique no ID da transação.", "Pour le détail d’une promo ou d’un bon appliqué, clique sur l’ID de la transaction."] }
  ] }],
  quiz: [
    { q: ["O e-mail do cliente tem o estado «Desconhecido». O que significa?", "L’e-mail du client a le statut « Inconnu ». Que signifie-t-il ?"], o: [["O e-mail é inválido: é preciso corrigi-lo", "L’e-mail est invalide : il faut le corriger"], ["O cliente não tem e-mail", "Le client n’a pas d’e-mail"], ["Tudo está bem", "Tout va bien"]], a: 0, w: ["«Sem e-mail» = nenhum e-mail; «Desconhecido» = e-mail inválido.", "« Sans e-mail » = aucun e-mail ; « Inconnu » = e-mail invalide."] },
    { q: ["Nos favoritos, o ícone do chat está laranja.", "Dans les favoris, l’icône chat est orange."], o: [["O especialista está ocupado", "L’expert est occupé"], ["Está disponível", "Il est disponible"], ["Não faz chat", "Il ne fait pas de chat"]], a: 0, w: ["Verde = disponível, laranja = ocupado, vermelho = indisponível, cinzento = não proposto.", "Vert = dispo, orange = occupé, rouge = indisponible, gris = non proposé."] },
    { q: ["Ao atender, abre uma ficha suspensa. O que faz?", "En décrochant, une fiche suspendue s’ouvre. Que fais-tu ?"], o: [["Vou ao Risk procurar uma conta prima", "Je vais dans Risk chercher un compte cousin"], ["Digo ao cliente que a conta está bloqueada", "Je dis au client que son compte est bloqué"], ["Desligo", "Je raccroche"]], a: 0, w: ["O número pode estar ligado a uma ficha antiga; a conta usada pode ser outra.", "Le numéro peut être lié à une vieille fiche ; le compte utilisé peut être un autre."] }
  ]
},

{ id: "graam", phase: "bases", c: "#2E9CCA", min: 7,
  title: ["Graam, a telefonia", "Graam, la téléphonie"],
  desc: ["Atender, gerir e qualificar cada chamada.", "Décrocher, gérer et qualifier chaque appel."],
  lessons: [
  { t: ["Ligar-se e atender", "Se connecter et décrocher"], b: [
    { steps: [
      { t: ["Abrir o Graam", "Ouvrir Graam"], p: ["E-mail e palavra-passe, depois «Login».", "E-mail et mot de passe, puis « Login »."] },
      { t: ["Abrir o Bobi", "Ouvrir Bobi"], p: ["Com o seu nome de utilizador e palavra-passe.", "Avec ton identifiant et ton mot de passe."] },
      { t: ["Chamada a entrar", "Appel entrant"], p: ["A faixa mostra o número do cliente, o número chamado, a fila e uma mensagem de boas-vindas.", "Le bandeau montre le numéro du client, le numéro appelé, la file et un message d’accueil."] },
      { t: ["Autenticar", "Authentifier"], p: ["A ficha abre-se sozinha no Bobi: clique em «Autenticar» para lhe aceder.", "La fiche s’ouvre toute seule dans Bobi : clique sur « Authentifier » pour y accéder."] }
    ] },
    { shot: { f: "connexion-outils.png", cap: ["Ligar-se: o Bobi com o identificador e palavra-passe, o Graam à direita com o e-mail e palavra-passe", "Se connecter : Bobi avec identifiant et mot de passe, Graam à droite avec e-mail et mot de passe"] } },
    { shot: { f: "graam-interface.png", cap: ["A interface Graam: estatísticas, tipo de chamada (entrada/saída), botão de pausa com a qualificação da pausa, histórico", "L’interface Graam : statistiques, type d’appel (entrant/sortant), bouton pause avec la qualification de la pause, historique"] } },
    { tip: ["Para fazer uma pausa, clique no botão pausa e escolha o motivo (café, almoço, formação, pós-chamada…).", "Pour faire une pause, clique sur le bouton pause et choisis le motif (café, déjeuner, formation, post-appel…)."] },
    { shot: { f: "graam-appel-entrant.png", cap: ["Uma chamada a entrar: número do cliente, fila de espera, número chamado, mensagem de boas-vindas, atender ou desligar", "Un appel entrant : numéro du client, file d’attente, numéro appelé, message d’accueil, décrocher ou raccrocher"] } },
    { key: ["Leia a <b>mensagem de boas-vindas</b> da faixa: dá a frase de acolhimento e a língua da fila (ex.: Espanha).", "Lis le <b>message d’accueil</b> du bandeau : il donne la phrase d’accueil et la langue de la file (ex. : Espagne)."] },
    { shot: { f: "graam-authentifier.png", cap: ["Ao atender, a ficha abre-se no Bobi: clique em «Authentifier»", "En décrochant, la fiche s’ouvre dans Bobi : clique sur « Authentifier »"] } },
    { shot: { f: "graam-bobi-integre.png", cap: ["O Graam à esquerda, a ficha cliente no Bobi à direita, durante a chamada", "Graam à gauche, la fiche client dans Bobi à droite, pendant l’appel"] } },
    { p: ["Todas as chamadas recebidas pelo Graam ficam registadas no bloco «Chamadas» da ficha Bobi.", "Tous les appels reçus via Graam sont enregistrés dans le bloc « Appels » de la fiche Bobi."] }
  ] },
  { t: ["Durante a chamada", "Pendant l’appel"], b: [
    { cards: [
      { i: "⏸", t: ["Pôr em espera", "Mettre en attente"], p: ["Ícone «pausa».", "Icône « pause »."] },
      { i: "●", cc: "#B5493A", t: ["Gravação", "Enregistrement"], p: ["Automática. Para parar: ícone vermelho (fica azul).", "Automatique. Pour l’arrêter : icône rouge (devient bleue)."] },
      { i: "⇄", t: ["Transferir", "Transférer"], p: ["Ícone de transferência para outro agente.", "Icône de transfert vers un autre agent."] }
    ] },
    { shot: { f: "graam-icones.png", cap: ["Os ícones: transferir para outro conselheiro, pôr em espera, parar a gravação (vermelho)", "Les icônes : transférer à un autre conseiller, mettre en attente, arrêter l’enregistrement (rouge)"] } },
    { warn: ["Parar a gravação é <b>obrigatório</b> quando o cliente dá os dados do cartão bancário.", "Couper l’enregistrement est <b>obligatoire</b> quand le client donne ses coordonnées bancaires."] }
  ] },
  { t: ["Depois da chamada", "Après l’appel"], b: [
    { steps: [
      { t: ["«Qualificação de chamada»", "« Qualification d’appel »"], p: ["Depois de cada chamada, sem exceção.", "Après chaque appel, sans exception."] },
      { t: ["Escolher a categoria", "Choisir la catégorie"], p: ["Ex.: Prospect ou Cliente.", "Ex. : Prospect ou Client."] },
      { t: ["Comentário", "Commentaire"], p: ["Se necessário, um resumo curto.", "Si besoin, un court résumé."] },
      { t: ["Guardar", "Enregistrer"], p: ["A qualificação fica gravada.", "La qualification est enregistrée."] }
    ] },
    { shot: { f: "graam-qualification.png", cap: ["Qualificação: Client, Prospect ou Hors-Cibles, depois a subcategoria (Demande de MER/RDV, Gestion compte, Demande d’information, Insatisfaction, Recouvrement), comentário e «Sauvegarder»", "Qualification : Client, Prospect ou Hors-Cibles, puis la sous-catégorie (Demande de MER/RDV, Gestion compte, Demande d’information, Insatisfaction, Recouvrement), commentaire et « Sauvegarder »"] } },
    { p: ["<b>Histórico de chamadas</b>: filtrar por data ou tipo (perdidas, atendidas…), ver o detalhe, ouvir ou descarregar a gravação, modificar uma qualificação, voltar a ligar. <b>Definições</b> (roda dentada): língua e som.", "<b>Historique d’appels</b> : filtrer par date ou type (manqués, répondus…), voir le détail, écouter ou télécharger l’enregistrement, modifier une qualification, rappeler. <b>Paramètres</b> (roue crantée) : langue et son."] },
    { shot: { f: "graam-historique.png", cap: ["O «Journal d’appel»: em cada chamada, detalhes, gravação, descarregar, qualificação, voltar a ligar", "Le « Journal d’appel » : sur chaque appel, détails, enregistrement, télécharger, qualification, rappeler"] } },
    { shot: { f: "graam-detail-appel.png", cap: ["O detalhe de uma chamada: número, data e hora, histórico das chamadas anteriores", "Le détail d’un appel : numéro, date et heure, historique des appels précédents"] } },
    { shot: { f: "graam-appels-manques.png", cap: ["«Mes appels manqués»: clique numa chamada para ver o detalhe e voltar a ligar", "« Mes appels manqués » : clique sur un appel pour voir le détail et rappeler"] } },
    { shot: { f: "graam-parametres.png", cap: ["Definições (roda dentada): língua da aplicação e parâmetros de áudio (toque, periférico)", "Paramètres (roue crantée) : langue de l’appli et paramètres audio (sonnerie, périphérique)"] } }
  ] }],
  quiz: [
    { q: ["O cliente vai dar o número do cartão. O que faz no Graam?", "Le client va donner son numéro de carte. Que fais-tu dans Graam ?"], o: [["Paro a gravação (ícone vermelho → azul)", "Je coupe l’enregistrement (icône rouge → bleue)"], ["Ponho em espera", "Je mets en attente"], ["Nada", "Rien"]], a: 0, w: ["É obrigatório para a segurança dos dados.", "C’est obligatoire pour la sécurité des données."] },
    { q: ["Quando qualifica uma chamada?", "Quand qualifies-tu un appel ?"], o: [["Depois de cada chamada", "Après chaque appel"], ["Só se o cliente reclamar", "Seulement si le client se plaint"], ["No fim do dia", "En fin de journée"]], a: 0, w: ["Cada chamada é qualificada logo a seguir.", "Chaque appel est qualifié juste après."] },
    { q: ["Tem o ID de uma chamada no Bobi. Como vê todos os detalhes?", "Tu as l’ID d’un appel dans Bobi. Comment voir tous les détails ?"], o: [["Colo o ID na pesquisa do Graam", "Je colle l’ID dans la recherche Graam"], ["Pergunto ao N2", "Je demande au N2"]], a: 0, w: ["O ID liga o Bobi ao Graam.", "L’ID relie Bobi à Graam."] }
  ]
}
);

/* ---------------- PHASE 2 : AU TÉLÉPHONE ---------------- */
BCF.modules.push(
{ id: "prospect", phase: "tel", c: "#D4A017", min: 12,
  title: ["Acolher um prospect e criar a conta", "Accueillir un prospect et créer le compte"],
  desc: ["O guião, a criação da conta e a escolha do especialista.", "Le script, la création du compte et le choix de l’expert."],
  lessons: [
  { t: ["O guião de chamada", "Le script d’appel"], b: [
    { lead: ["Siga este guião com um novo cliente. Cada etapa tem um objetivo.", "Suis ce script avec un nouveau client. Chaque étape a un objectif."] },
    { script: [
      { s: ["«Serviço de apoio ao cliente Wengo, bom dia. O meu nome é [Nome]. Como posso ajudá-lo?»", "« Service client Wengo, bonjour. Je m’appelle [Prénom]. Comment puis-je vous aider ? »"], tag: ["Escuta ativa", "Écoute active"] },
      { s: ["«Sem entrar em detalhes, o que procura neste momento? Respostas diretas a curto prazo ou um acompanhamento?»", "« Sans entrer dans les détails, que recherchez-vous en ce moment ? Des réponses directes à court terme ou un accompagnement ? »"], tag: ["Empatia e confiança", "Empathie et confiance"] },
      { s: ["«Para criar a sua ficha: o seu nome? Um e-mail? A sua data de nascimento, para confirmar a maioridade.»", "« Pour créer votre fiche : votre nom ? Un e-mail ? Votre date de naissance, pour confirmer votre majorité. »"], tag: ["Criação da conta", "Création du compte"] },
      { s: ["«Escolha um nome de utilizador para se identificar de forma anónima. O código XXXX dá-lhe acesso ao seu espaço cliente.»", "« Choisissez un pseudo pour vous identifier de façon anonyme. Le code XXXX vous donne accès à votre espace client. »"], tag: ["Anonimato", "Anonymat"] },
      { s: ["«Prefere telefone, chat ou vídeo? Algum tema: amor, trabalho, finanças, família?»", "« Vous préférez téléphone, chat ou vidéo ? Un thème : amour, travail, finances, famille ? »"], tag: ["Propor e valorizar um especialista", "Proposer et valoriser un expert"] },
      { s: ["«Para a sua primeira consulta temos uma oferta especial…» → depois, perguntar o meio de pagamento.", "« Pour votre première consultation nous avons une offre spéciale… » → ensuite, demander le moyen de paiement."], tag: ["Oferta e pagamento", "Offre et paiement"] },
      { s: ["«Envio o seu pedido ao [Especialista]. Estamos disponíveis todos os dias das 8h às 23h. Obrigado por escolher a Wengo!»", "« J’envoie votre demande à [Expert]. Nous sommes disponibles tous les jours de 8h à 23h. Merci d’avoir choisi Wengo ! »"], tag: ["Conclusão", "Conclusion"] }
    ] },
    { key: ["A ordem certa: <b>conta criada → oferta de boas-vindas → quem está disponível e valorizar o especialista → só depois, o meio de pagamento.</b>", "Le bon ordre : <b>compte créé → offre de bienvenue → qui est disponible et valoriser l’expert → seulement ensuite, le moyen de paiement.</b>"] }
  ] },
  { t: ["Criar a conta no Bobi", "Créer le compte dans Bobi"], b: [
    { shot: { f: "creer-compte.png", cap: ["Formulário «Créer un compte»: os campos sublinhados são os que preenche com o cliente", "Formulaire « Créer un compte » : les champs soulignés sont ceux que tu remplis avec le client"] } },
    { steps: [
      { t: ["Anuário", "Annuaire"], p: ["O país do cliente (França, Portugal…). Define as ofertas disponíveis.", "Le pays du client (France, Portugal…). Il définit les offres disponibles."] },
      { t: ["Parceiro", "Partenaire"], p: ["Pergunte como nos conheceu. Parceiro: Wengo.", "Demande comment il nous a connus. Partenaire : Wengo."] },
      { t: ["Nome e telefone", "Prénom et téléphone"], p: ["Prénom e número de telefone (ou móvel).", "Prénom et numéro de téléphone (ou mobile)."] },
      { t: ["E-mail", "E-mail"], p: ["Obrigatório. Se o cliente não tem, marque «Pas d’email».", "Obligatoire. Si le client n’en a pas, coche « Pas d’email »."] },
      { t: ["Data de nascimento e país", "Date de naissance et pays"], p: ["Facilita o pseudónimo e uma oferta no dia de anos. Confirme o país de onde liga.", "Facilite le pseudo et une offre le jour J. Confirme le pays d’où il appelle."] },
      { t: ["Identificador e código PIN", "Identifiant et code PIN"], p: ["O pseudónimo e o código secreto de 4 dígitos: os identificadores pessoais do cliente. Pode mudar o PIN depois no espaço cliente.", "Le pseudo et le code secret à 4 chiffres : les identifiants personnels du client. Il pourra changer son PIN dans son espace."] },
      { t: ["«Créer le compte client»", "« Créer le compte client »"], p: ["Valide a criação.", "Valide la création."] }
    ] },
    { tip: ["Os textos a azul no formulário são as frases a dizer ao cliente. Leia-as!", "Les textes en bleu dans le formulaire sont les phrases à dire au client. Lis-les !"] }
  ] },
  { t: ["Escolher o especialista certo", "Choisir le bon expert"], b: [
    { p: ["Primeiro, compreenda a necessidade: o tema (amor, trabalho…), o tipo (tarologia, numerologia, mediunidade…) e se o cliente já tem um especialista preferido.", "D’abord, comprends le besoin : le thème (amour, travail…), le type (tarologie, numérologie, médiumnité…) et si le client a déjà un expert préféré."] },
    { cards: [
      { i: "€", t: ["Tarifa por minuto", "Tarif à la minute"], p: ["Respeitar o orçamento.", "Respecter le budget."] },
      { i: "★", t: ["Consultas e satisfação", "Consultations et satisfaction"], p: ["Muitas consultas + boa taxa = valor seguro.", "Beaucoup de consultations + bon taux = valeur sûre."] },
      { i: "◎", t: ["Especialidades", "Spécialités"], p: ["A área deve corresponder ao pedido.", "Le domaine doit correspondre à la demande."] },
      { i: "✎", t: ["Descrição e abordagem", "Description et approche"], p: ["Direta ou suave e empática?", "Direct ou doux et empathique ?"] }
    ] },
    { shot: { f: "liste-specialistes.png", cap: ["À direita: a oferta escolhida e os especialistas, com métier, tarifa, estatísticas e descrição. Botão «Sélectionner»", "À droite : l’offre choisie et les experts, avec métier, tarif, stats et description. Bouton « Sélectionner »"] } },
    { steps: [
      { t: ["Escolher a oferta", "Choisir l’offre"], p: ["Aparece a lista dos especialistas dessa oferta.", "La liste des experts de cette offre apparaît."] },
      { t: ["Analisar os perfis", "Analyser les profils"], p: ["Com os critérios acima.", "Avec les critères ci-dessus."] },
      { t: ["«Sélectionner»", "« Sélectionner »"], p: ["No especialista mais adequado.", "Sur l’expert le plus adapté."] },
      { t: ["Confirmar com o cliente", "Confirmer avec le client"], p: ["Antes de lançar.", "Avant de lancer."] }
    ] }
  ] }],
  quiz: [
    { q: ["Depois de criar a conta, qual é o passo seguinte?", "Après avoir créé le compte, quelle est l’étape suivante ?"], o: [["Pedir o meio de pagamento", "Demander le moyen de paiement"], ["Apresentar a oferta de boas-vindas e valorizar um especialista disponível", "Présenter l’offre de bienvenue et valoriser un expert disponible"], ["Desligar", "Raccrocher"]], a: 1, w: ["O pagamento vem sempre no fim.", "Le paiement vient toujours à la fin."] },
    { q: ["O cliente não tem e-mail. O que faz no formulário?", "Le client n’a pas d’e-mail. Que fais-tu dans le formulaire ?"], o: [["Invento um", "J’en invente un"], ["Marco «Pas d’email»", "Je coche « Pas d’email »"], ["Não crio a conta", "Je ne crée pas le compte"]], a: 1, w: ["A caixa «Pas d’email» existe para isso.", "La case « Pas d’email » existe pour ça."] },
    { q: ["Quantos dígitos tem o código PIN?", "Combien de chiffres a le code PIN ?"], o: [["4", "4"], ["6", "6"], ["8", "8"]], a: 0, w: ["Um código secreto de 4 dígitos, que o cliente pode mudar depois.", "Un code secret à 4 chiffres, que le client peut changer ensuite."] }
  ]
},

{ id: "offres-pays", phase: "tel", c: "#E67E22", min: 10,
  title: ["As ofertas de boas-vindas por país", "Les offres de bienvenue par pays"],
  desc: ["Ler uma linha de oferta e propor a certa.", "Lire une ligne d’offre et proposer la bonne."],
  lessons: [
  { t: ["Ler uma linha de oferta", "Lire une ligne d’offre"], b: [
    { lead: ["Cada linha do bloco «Offres découverte» diz tudo: <b>[para quem]</b> preço dos primeiros minutos, depois o preço por minuto, <b>||</b> os canais, e a etiqueta <b>promo</b>.", "Chaque ligne du bloc « Offres découverte » dit tout : <b>[pour qui]</b> prix des premières minutes, puis prix à la minute, <b>||</b> les canaux, et l’étiquette <b>promo</b>."] },
    { shot: { f: "offres-pt-liste.png", cap: ["Portugal: oferta de boas-vindas, pacotes, especialistas em promoção, tarifa ao minuto", "Portugal : offre de bienvenue, forfaits, experts en promo, tarif à la minute"] } },
    { key: ["As ofertas de boas-vindas são para <b>Prospects</b> e muitas vezes também para <b>Inativos há 6 meses ou mais</b>.", "Les offres de bienvenue sont pour les <b>Prospects</b> et souvent aussi pour les <b>Inactifs depuis 6 mois ou plus</b>."] }
  ] },
  { t: ["Portugal e França", "Portugal et France"], b: [
    { table: { h: [["Portugal", "Portugal"], ["Preço", "Prix"]], r: [
      [["Boas-vindas fixo, chat, vídeo", "Bienvenue fixe, chat, vidéo"], ["1€/10 min → 1,40€/min", "1€/10 min → 1,40€/min"]],
      [["Boas-vindas telemóvel", "Bienvenue mobile"], ["3€/10 min → 1,60€/min", "3€/10 min → 1,60€/min"]],
      [["Mais de 10 min", "Plus de 10 min"], ["11€/15 min · 19€/20 min", "11€/15 min · 19€/20 min"]],
      [["Pacotes", "Forfaits"], ["20€/20 min (1,50€/min) · 25€/15 min (1,60€/min) · 39€/25 min (1,60€/min) · Pack Web & Callcenter 15€/12 min (1,50€/min)", "20€/20 min (1,50€/min) · 25€/15 min (1,60€/min) · 39€/25 min (1,60€/min) · Pack Web & Callcenter 15€/12 min (1,50€/min)"]],
      [["Pacotes telemóvel", "Forfaits mobile"], ["17,40€/12 min (1,70€/min) · 24€/20 min (1,70€/min)", "17,40€/12 min (1,70€/min) · 24€/20 min (1,70€/min)"]]
    ] } },
    { shot: { f: "pt-pacotes-mobile.png", cap: ["Portugal: as ofertas e o preço para telemóvel por baixo de cada uma (3€/10 min, 17,40€/12 min, 24€/20 min)", "Portugal : les offres et le prix pour mobile sous chacune (3€/10 min, 17,40€/12 min, 24€/20 min)"] } },
    { shot: { f: "offre-pt-1e.png", cap: ["Portugal: [Prospect ou Inativos 6 meses+] 1€ para 10 min", "Portugal : [Prospect ou Inactifs 6 mois+] 1€ pour 10 min"] } },
    { table: { h: [["França", "France"], ["Preço", "Prix"]], r: [
      [["Astro: Prospects ou Inativos 6 meses", "Astro : Prospects ou Inactifs 6 mois"], ["5€/10 min → 2,50€/min (despesas de telemóvel incluídas)", "5€/10 min → 2,50€/min (frais mobile inclus)"]],
      [["Prospects Newgora", "Prospects Newgora"], ["1€/10 min → 3€/min (fixo ou chat) · 3€/10 min telemóvel → 3,20€/min", "1€/10 min → 3€/min (fixe ou chat) · 3€/10 min mobile → 3,20€/min"]],
      [["Outra oferta", "Autre offre"], ["10 min gratuitos e depois 3€/min", "10 min gratuites puis 3€/min"]]
    ] } },
    { shot: { f: "offre-fr-5e.png", cap: ["França: 5€/10 min e depois 2,50€/min", "France : 5€/10 min puis 2,50€/min"] } },
    { shot: { f: "offre-fr-1e.png", cap: ["França: Prospects Newgora, 1€ os 10 min e depois 3€/min", "France : Prospects Newgora, 1€ les 10 min puis 3€/min"] } }
  ] },
  { t: ["Itália e Espanha", "Italie et Espagne"], b: [
    { table: { h: [["Itália", "Italie"], ["Preço", "Prix"]], r: [
      [["Prospetto", "Prospect"], ["1€/10 min → 1,80€/min (fixo, chat, vídeo)", "1€/10 min → 1,80€/min (fixe, chat, vidéo)"]],
      [["Telemóvel", "Mobile"], ["3€/10 min → +0,20€/min", "3€/10 min → +0,20€/min"]],
      [["Prospetto ou Inativos 6 meses", "Prospect ou Inactifs 6 mois"], ["5€/10 min → 1,90€/min (telemóvel ou fixo)", "5€/10 min → 1,90€/min (mobile ou fixe)"]]
    ] } },
    { shot: { f: "offres-it.png", cap: ["Itália: as duas ofertas Astro", "Italie : les deux offres Astro"] } },
    { table: { h: [["Espanha", "Espagne"], ["Preço", "Prix"]], r: [
      [["Prospectos (boas-vindas)", "Prospects (bienvenue)"], ["10 min gratuitos e depois 1,50€/min", "10 min gratuites puis 1,50€/min"]],
      [["Prospects e Inativos 6 meses", "Prospects et Inactifs 6 mois"], ["1€/10 min e depois 1,50€/min", "1€/10 min puis 1,50€/min"]]
    ] } },
    { shot: { f: "offres-es.png", cap: ["Espanha: as duas ofertas de boas-vindas", "Espagne : les deux offres de bienvenue"] } },
    { shot: { f: "offre-es-expert.png", cap: ["Perfil de um especialista espanhol: métier, tarifa, estatísticas, abordagem", "Profil d’un expert espagnol : métier, tarif, stats, approche"] } }
  ] },
  { t: ["Mudar de anuário", "Changer d’annuaire"], b: [
    { p: ["Cliente inscrito no anuário francês que quer um especialista português ou espanhol? Abra <b>+ FILTRES</b> e mude o <b>Anuário do especialista</b> para ver as ofertas desse país.", "Client inscrit sur l’annuaire français qui veut un expert portugais ou espagnol ? Ouvre <b>+ FILTRES</b> et change l’<b>Annuaire de l’expert</b> pour voir les offres de ce pays."] },
    { shot: { f: "filtres-annuaire.png", cap: ["Filtros: pesquisa, categoria, anuário do especialista, especialidades, género", "Filtres : recherche, catégorie, annuaire de l’expert, spécialités, genre"] } },
    { shot: { f: "lancer-consultation-filtres.png", cap: ["Cliente em França, anuário Portugal selecionado: aparecem os especialistas portugueses", "Client en France, annuaire Portugal sélectionné : les experts portugais apparaissent"] } },
    { tip: ["Portugal: o cliente não vê Multibanco ou MB Way no espaço cliente? Mude o país de faturação: <b>Adresses → Éditer → Portugal</b>.", "Portugal : le client ne voit pas Multibanco ou MB Way dans son espace ? Change le pays de facturation : <b>Adresses → Éditer → Portugal</b>."] }
  ] }],
  quiz: [
    { q: ["Um cliente inativo há 8 meses em Portugal liga. Tem direito à oferta 1€/10 min?", "Un client inactif depuis 8 mois au Portugal appelle. A-t-il droit à l’offre 1€/10 min ?"], o: [["Sim, é para Prospects ou Inativos 6 meses+", "Oui, elle est pour Prospects ou Inactifs 6 mois+"], ["Não, só para prospects", "Non, seulement les prospects"]], a: 0, w: ["Leia o que está entre [ ]: é o público da oferta.", "Lis ce qui est entre [ ] : c’est le public de l’offre."] },
    { q: ["Em Espanha, depois dos 10 min gratuitos, quanto custa o minuto?", "En Espagne, après les 10 min gratuites, combien coûte la minute ?"], o: [["1,50€", "1,50€"], ["3€", "3€"], ["0,50€", "0,50€"]], a: 0, w: ["10 min gratuitos e depois 1,50€/min.", "10 min gratuites puis 1,50€/min."] },
    { q: ["Cliente do anuário francês quer uma especialista portuguesa.", "Client de l’annuaire français veut une experte portugaise."], o: [["Impossível", "Impossible"], ["+ FILTRES → Anuário do especialista: Portugal", "+ FILTRES → Annuaire de l’expert : Portugal"], ["Crio uma nova conta", "Je crée un nouveau compte"]], a: 1, w: ["O filtro de anuário dá acesso às ofertas do país.", "Le filtre d’annuaire donne accès aux offres du pays."] }
  ]
},

{ id: "mer", phase: "tel", c: "#2E86C1", min: 14,
  title: ["Lançar uma MER (chamada, chat, vídeo)", "Lancer une MER (appel, chat, vidéo)"],
  desc: ["As 6 etapas, direta vs indireta, problemas frequentes.", "Les 6 étapes, directe vs indirecte, problèmes fréquents."],
  lessons: [
  { t: ["Antes de lançar: verificar a ficha", "Avant de lancer : vérifier la fiche"], b: [
    { shot: { f: "fiche-cadeau-reward.png", cap: ["Faixas de alerta: vale disponível (azul) e Wengo Reward com informações em falta (amarelo)", "Bandeaux d’alerte : bon cadeau disponible (bleu) et Wengo Reward avec infos manquantes (jaune)"] } },
    { list: [
      ["«Cadeau disponible»: clique em «Ajouter au wallet» para validar o vale.", "« Cadeau disponible » : clique sur « Ajouter au wallet » pour valider le bon."],
      ["Faixa amarela Wengo Reward: ative o programa de fidelidade a cada chamada.", "Bandeau jaune Wengo Reward : active le programme de fidélité à chaque appel."],
      ["Data de nascimento, telemóvel ou e-mail em falta ou inválido? Corrija em «Infos du compte». Se nada faltar, o programa ativa-se sem perguntar nada ao cliente.", "Date de naissance, mobile ou e-mail manquant ou invalide ? Corrige dans « Infos du compte ». Si rien ne manque, le programme s’active sans rien demander au client."],
      ["Saldo de <b>100 pts</b> ou mais: proponha sempre a troca por minutos gratuitos.", "Solde de <b>100 pts</b> ou plus : propose toujours l’échange contre des minutes gratuites."]
    ] }
  ] },
  { t: ["Direta ou indireta?", "Directe ou indirecte ?"], b: [
    { lead: ["Por telefone, a chamada é transferida para o especialista. Por chat ou vídeo, envia ao cliente um link por SMS ou e-mail.", "Par téléphone, l’appel est transféré à l’expert. Par chat ou vidéo, tu envoies au client un lien par SMS ou e-mail."] },
    { compare: [
      { cls: "good", h: ["MER direta", "MER directe"], tag: ["Recomendada", "Recommandée"], items: [["O especialista está disponível já", "L’expert est disponible tout de suite"], ["Fica em linha durante a transferência", "Tu restes en ligne pendant le transfert"], ["Voz: «A ligação foi estabelecida» → pode desligar", "Voix : « La mise en relation est établie » → tu peux raccrocher"], ["Sem sobretaxa de telemóvel", "Pas de surtaxe mobile"]] },
      { cls: "bad", h: ["MER indireta", "MER indirecte"], tag: ["Atenção", "Attention"], items: [["Especialista ocupado / fila de espera", "Expert occupé / file d’attente"], ["Ou lançada fora do Graam (não recomendado)", "Ou lancée hors de Graam (déconseillé)"], ["Desliga; o cliente é chamado na vez dele", "Tu raccroches ; le client est rappelé à son tour"], ["Sobretaxa telemóvel: 0,20€/min (0,30 USD/min)", "Surtaxe mobile : 0,20€/min (0,30 USD/min)"]] }
    ] },
    { tip: ["Se a ligação falhar, a voz anuncia o regresso ao cliente: retome a chamada e pode relançar. Veja o motivo em «Transações em curso».", "Si la connexion échoue, la voix annonce le retour au client : reprends l’appel et relance. Regarde le motif dans « Transactions en cours »."] }
  ] },
  { t: ["As 6 etapas", "Les 6 étapes"], b: [
    { steps: [
      { t: ["Abrir o Bobi", "Ouvrir Bobi"], p: ["Botão «Consultation immédiate». Veja o histórico antes. Com favoritos, lance a partir da lista de favoritos (mais rápido).", "Bouton « Consultation immédiate ». Regarde l’historique avant. Avec des favoris, lance depuis la liste des favoris (plus rapide)."] },
      { t: ["Escolher a oferta", "Choisir l’offre"], p: ["Descoberta, pacote, tarifa por minuto… adaptada ao perfil.", "Découverte, forfait, tarif à la minute… adaptée au profil."] },
      { t: ["Escolher o especialista", "Choisir l’expert"], p: ["«Sélectionner» na lista.", "« Sélectionner » dans la liste."] },
      { t: ["Preparar a chamada", "Préparer l’appel"], p: ["Verificar: especialista, pseudónimo, telefone, canal, tarifa, anuário.", "Vérifier : expert, pseudo, téléphone, canal, tarif, annuaire."] },
      { t: ["Lançar", "Lancer"], p: ["Confirmar o número com o cliente e clicar em «Lancer».", "Confirmer le numéro avec le client et cliquer sur « Lancer »."] },
      { t: ["Confirmar a ligação", "Confirmer la connexion"], p: ["Telefone: verificar o estado. Chat/vídeo: enviar o link por e-mail ou SMS.", "Téléphone : vérifier le statut. Chat/vidéo : envoyer le lien par e-mail ou SMS."] }
    ] },
    { shot: { f: "preparer-appel.png", cap: ["A página de lançamento: vales elegíveis, faixa amarela com a frase a dizer, telefone, canal, especialista, código promo, e à direita a agenda e os fusos horários", "La page de lancement : bons éligibles, bandeau jaune avec la phrase à dire, téléphone, canal, expert, code promo, et à droite l’agenda et les fuseaux"] } },
    { warn: ["Pelos favoritos, a oferta aplicada por defeito é a <b>tarifa por minuto</b>. Para outra oferta, escolha-a no bloco «Oferta» e volte a escrever o nome do especialista.", "Depuis les favoris, l’offre appliquée par défaut est le <b>tarif à la minute</b>. Pour une autre offre, choisis-la dans le bloc « Offre » et retape le nom de l’expert."] },
    { key: ["Confirmar o número de telefone com o cliente antes de clicar em «Lancer» é <b>obrigatório</b>.", "Confirmer le numéro de téléphone avec le client avant de cliquer sur « Lancer » est <b>obligatoire</b>."] }
  ] },
  { t: ["Chat e vídeo: enviar o link", "Chat et vidéo : envoyer le lien"], b: [
    { p: ["Depois de lançar um chat ou vídeo, pergunte ao cliente se quer o link por e-mail ou SMS (campos pré-preenchidos e editáveis).", "Après avoir lancé un chat ou une vidéo, demande au client s’il veut le lien par e-mail ou SMS (champs pré-remplis et modifiables)."] },
    { shot: { f: "envoi-lien-chat.png", cap: ["«Envoyer le lien par mail / par SMS» e, por baixo, as sessões em curso", "« Envoyer le lien par mail / par SMS » et, en dessous, les sessions en cours"] } },
    { shot: { f: "confirmation-email.png", cap: ["A mensagem verde no topo confirma o envio por e-mail…", "Le message vert en haut confirme l’envoi par e-mail…"] } },
    { shot: { f: "confirmation-sms.png", cap: ["…ou por SMS", "…ou par SMS"] } },
    { p: ["O cliente recebe também uma chamada automática que o convida a ir ao espaço cliente.", "Le client reçoit aussi un appel automatique qui l’invite à aller dans son espace."] }
  ] },
  { t: ["Problemas frequentes", "Problèmes fréquents"], b: [
    { table: { h: [["Problema", "Problème"], ["Solução", "Solution"]], r: [
      [["Especialista indisponível", "Expert indisponible"], ["RDV com o mesmo especialista, ou outro especialista agora.", "RDV avec le même expert, ou un autre expert maintenant."]],
      [["O cliente ainda está em espera", "Le client attend toujours"], ["O sistema relança até 2h. Especialista disponível, sem pausa, cliente em 1.ª posição: relançar. Se não quiser esperar: outro especialista ou RDV.", "Le système relance jusqu’à 2h. Expert dispo, pas en pause, client en 1re position : relancer. S’il ne veut pas attendre : autre expert ou RDV."]],
      [["Falha técnica", "Problème technique"], ["Relançar, mudar de canal, outro número ou RDV.", "Relancer, changer de canal, autre numéro ou RDV."]]
    ] } },
    { shot: { f: "limite-depenses.png", cap: ["«Opção limite de despesas»: o cliente indica 30, o Bobi calcula o montante e a duração máxima. Aqui também uma promoção válida de 20%", "« Option limite de dépenses » : le client indique 30, Bobi calcule le montant et la durée maximum. Ici aussi une promo valide de 20%"] } },
    { key: ["França: o cliente quer limitar o gasto (ex.: 30€) e tem cartão? Use a opção <b>limite de despesas</b>: dá logo os minutos autorizados, mesmo em Pay as you go.", "France : le client veut limiter sa dépense (ex. 30€) et a une carte ? Utilise l’option <b>limite de dépenses</b> : elle donne directement les minutes autorisées, même en Pay as you go."] }
  ] }],
  quiz: [
    { q: ["O especialista tem fila de espera. Que tipo de MER?", "L’expert a une file d’attente. Quel type de MER ?"], o: [["Direta", "Directe"], ["Indireta", "Indirecte"]], a: 1, w: ["Fila de espera = indireta: o cliente é chamado na vez dele.", "File d’attente = indirecte : le client est rappelé à son tour."] },
    { q: ["MER direta, cliente em telemóvel. Há sobretaxa?", "MER directe, client sur mobile. Surtaxe ?"], o: [["Sim, 0,20€/min", "Oui, 0,20€/min"], ["Não", "Non"]], a: 1, w: ["A sobretaxa só existe na MER indireta.", "La surtaxe n’existe qu’en MER indirecte."] },
    { q: ["O que é obrigatório antes de «Lancer»?", "Qu’est-ce qui est obligatoire avant « Lancer » ?"], o: [["Confirmar o número com o cliente", "Confirmer le numéro avec le client"], ["Parar a gravação", "Couper l’enregistrement"]], a: 0, w: ["Evita ligar para o número errado.", "Ça évite d’appeler le mauvais numéro."] },
    { q: ["Lançou pelos favoritos, mas o cliente quer a oferta de boas-vindas.", "Tu as lancé depuis les favoris, mais le client veut l’offre de bienvenue."], o: [["Escolho a oferta no bloco «Oferta» e volto a escrever o especialista", "Je choisis l’offre dans le bloc « Offre » et je retape l’expert"], ["Não é possível", "Ce n’est pas possible"]], a: 0, w: ["Por defeito, os favoritos aplicam a tarifa por minuto.", "Par défaut, les favoris appliquent le tarif à la minute."] }
  ]
},

{ id: "erreurs", phase: "tel", c: "#B5493A", min: 7,
  title: ["Erros de ligação", "Erreurs de connexion"],
  desc: ["Ler o código, encontrar a solução, propor uma alternativa.", "Lire le code, trouver la solution, proposer une alternative."],
  lessons: [
  { t: ["O método", "La méthode"], b: [
    { steps: [
      { t: ["Identificar a mensagem", "Identifier le message"], p: ["Quando a ligação falha, aparece um código de erro.", "Quand la connexion échoue, un code d’erreur s’affiche."] },
      { t: ["Compreender o código", "Comprendre le code"], p: ["Gemini ou a pesquisa abaixo.", "Gemini ou la recherche ci-dessous."] },
      { t: ["Aplicar a solução", "Appliquer la solution"], p: ["Outro meio de pagamento, orientar para o banco, ou reclamação N2.", "Autre moyen de paiement, orienter vers la banque, ou réclamation N2."] },
      { t: ["Propor uma alternativa", "Proposer une alternative"], p: ["Favorito disponível, especialista nunca consultado, ou RDV.", "Favori disponible, expert jamais consulté, ou RDV."] }
    ] },
    { shot: { f: "erreur-bandeau-rouge.png", cap: ["Quando a MER falha, aparece uma faixa vermelha com o código (aqui 2040: dívidas em contas primas)", "Quand la MER échoue, un bandeau rouge s’affiche avec le code (ici 2040 : impayés sur des comptes cousins)"] } },
    { errors: 1 },
    { tip: ["Erro 39009: sugira ao cliente dizer ao banco: «Uma tentativa de pagamento com o meu cartão para a Wengo foi recusada. Sou eu que uso este cartão. Por favor, autorizem estas transações.»", "Erreur 39009 : suggère au client de dire à sa banque : « Une tentative de paiement avec ma carte pour Wengo a été refusée. C’est bien moi qui utilise cette carte. Merci d’autoriser ces transactions. »"] }
  ] }],
  quiz: [
    { q: ["Código 39111?", "Code 39111 ?"], o: [["Cartão expirado: pedir outro meio", "Carte expirée : demander un autre moyen"], ["Conta suspensa", "Compte suspendu"]], a: 0, w: ["39111 = cartão expirado.", "39111 = carte expirée."] },
    { q: ["Código 2024?", "Code 2024 ?"], o: [["CVC inválido", "CVC invalide"], ["Cartão já em 3 contas", "Carte déjà sur 3 comptes"]], a: 1, w: ["Um cartão não pode estar em mais de 3 contas.", "Une carte ne peut pas être sur plus de 3 comptes."] },
    { q: ["Código 10601 e o cliente quer desbloquear.", "Code 10601 et le client veut débloquer."], o: [["Desbloqueio eu", "Je débloque moi-même"], ["Informo e envio reclamação ao N2", "J’informe et j’envoie une réclamation au N2"]], a: 1, w: ["Só o N2 desbloqueia uma conta suspensa.", "Seul le N2 débloque un compte suspendu."] }
  ]
},

{ id: "rdv", phase: "tel", c: "#1F8A5B", min: 8,
  title: ["Marcar uma consulta (RDV)", "Prendre un rendez-vous (RDV)"],
  desc: ["As 5 etapas, a regra das 48h e os fusos.", "Les 5 étapes, la règle des 48h et les fuseaux."],
  lessons: [
  { t: ["As 5 etapas", "Les 5 étapes"], b: [
    { lead: ["Marca-se um RDV quando o cliente não está disponível já, ou o especialista não está online.", "On prend un RDV quand le client n’est pas disponible tout de suite, ou que l’expert n’est pas en ligne."] },
    { steps: [
      { t: ["Opção «RDV»", "Option « RDV »"], p: ["Seta do botão «RDV» no Bobi.", "Flèche du bouton « RDV » dans Bobi."] },
      { t: ["Selecionar o especialista", "Sélectionner l’expert"], p: ["Pelo nome, pesquisa livre ou oferta. Sem nome: pesquisa por especialidade.", "Par le nom, recherche libre ou offre. Sans nom : recherche par spécialité."] },
      { t: ["Ver a agenda", "Consulter l’agenda"], p: ["As disponibilidades aparecem automaticamente.", "Les disponibilités s’affichent automatiquement."] },
      { t: ["Preencher", "Remplir"], p: ["Data/hora (fuso!), telefone (repetir em voz alta), canal, mensagem ao especialista.", "Date/heure (fuseau !), téléphone (répéter à voix haute), canal, message à l’expert."] },
      { t: ["Finalizar", "Finaliser"], p: ["«Lancer le rendez-vous». A oferta deve aparecer em «código promocional».", "« Lancer le rendez-vous ». L’offre doit apparaître dans « code promo »."] }
    ] },
    { shot: { f: "rdv-formulaire.png", cap: ["«Marcar uma Consulta»: especialista, fuso horário, data/hora e mensagem. Fora da disponibilidade, a mensagem ao especialista vem pré-preenchida", "« Prendre un RDV » : expert, fuseau horaire, date/heure et message. Hors disponibilité, le message à l’expert est pré-rempli"] } }
  ] },
  { t: ["A regra das 48h", "La règle des 48h"], b: [
    { compare: [
      { cls: "good", h: ["Menos de 48h + disponível", "Moins de 48h + dispo"], tag: ["Automático", "Automatique"], items: [["RDV aceite automaticamente", "RDV accepté automatiquement"], ["Um banner confirma", "Un bandeau le confirme"]] },
      { cls: "bad", h: ["Mais de 48h ou fora do horário", "Plus de 48h ou hors horaires"], tag: ["A validar", "À valider"], items: [["O especialista tem de validar", "L’expert doit valider"], ["Sem validação: anulado 15 min antes", "Sans validation : annulé 15 min avant"], ["Informar sempre o cliente", "Toujours prévenir le client"]] }
    ] },
    { shot: { f: "rdv-auto.png", cap: ["Menos de 48h e no horário: «Demande de RDV finalisée», aceite automaticamente", "Moins de 48h et dans les horaires : « Demande de RDV finalisée », acceptée automatiquement"] } },
    { shot: { f: "rdv-a-valider.png", cap: ["Fora destas condições: «Demande de RDV envoyée», o especialista tem de aceitar", "Hors de ces conditions : « Demande de RDV envoyée », l’expert doit accepter"] } },
    { warn: ["A hora no Bobi é a de <b>Paris</b>. Converta para o fuso do cliente (EUA, Inglaterra, América Latina, Portugal, Turquia…). A agenda mostra o fuso do especialista e do cliente.", "L’heure dans Bobi est celle de <b>Paris</b>. Convertis dans le fuseau du client (USA, Angleterre, Amérique latine, Portugal, Turquie…). L’agenda montre le fuseau de l’expert et du client."] },
    { p: ["Telemóvel: lembre a sobretaxa de 0,20€/min (não existe em rede fixa).", "Mobile : rappelle la surtaxe de 0,20€/min (pas sur un fixe)."] },
    { tip: ["O cliente vê o RDV no espaço pessoal («Os meus especialistas e eu» › «As minhas marcações») e recebe um e-mail.", "Le client voit son RDV dans son espace (« Mes experts et moi » › « Mes rendez-vous ») et reçoit un e-mail."] }
  ] }],
  quiz: [
    { q: ["RDV daqui a 3 dias, no horário do especialista. Automático?", "RDV dans 3 jours, dans les horaires de l’expert. Automatique ?"], o: [["Sim", "Oui"], ["Não, o especialista valida", "Non, l’expert valide"]], a: 1, w: ["Mais de 48h = validação.", "Plus de 48h = validation."] },
    { q: ["O especialista não valida. O que acontece?", "L’expert ne valide pas. Que se passe-t-il ?"], o: [["Fica pendente", "Il reste en attente"], ["Anulado 15 min antes", "Annulé 15 min avant"]], a: 1, w: ["Anulação automática 15 minutos antes.", "Annulation automatique 15 minutes avant."] },
    { q: ["Cliente em Lisboa quer as 15h, hora dele. O que escolhe no Bobi?", "Cliente à Lisbonne veut 15h, son heure. Que choisis-tu dans Bobi ?"], o: [["15h", "15h"], ["16h", "16h"], ["14h", "14h"]], a: 1, w: ["O Bobi está na hora de Paris, uma hora à frente de Lisboa.", "Bobi est à l’heure de Paris, une heure de plus que Lisbonne."] }
  ]
},

{ id: "suivi", phase: "tel", c: "#5D6D7E", min: 9,
  title: ["Seguir os pedidos em curso", "Suivre les demandes en cours"],
  desc: ["Ler os estados, relançar, cancelar, modificar.", "Lire les statuts, relancer, annuler, modifier."],
  lessons: [
  { t: ["As transações em curso", "Les transactions en cours"], b: [
    { p: ["Menu à esquerda do Bobi → <b>«Transações atuais»</b>. Filtrar por especialista, anuário ou cliente. Atalho na ficha: seta ao lado de «consultations live» → «chamadas em curso».", "Menu de gauche de Bobi → <b>« Transactions en cours »</b>. Filtrer par expert, annuaire ou client. Raccourci sur la fiche : flèche à côté de « consultations live » → « appels en cours »."] },
    { cards: [
      { i: "B", t: ["Bridged", "Bridged"], p: ["Hora de início da consulta.", "Heure de début de la consultation."] },
      { i: "R", t: ["Raison", "Raison"], p: ["Estado atual do pedido.", "Statut actuel de la demande."] },
      { i: "D", t: ["Durée autorisée", "Durée autorisée"], p: ["Tempo previsto.", "Durée prévue."] }
    ] },
    { shot: { f: "colonnes-transactions.png", cap: ["Clique em «Bridged», «Raison» e «Durée autorisée» para adicionar as colunas", "Clique sur « Bridged », « Raison » et « Durée autorisée » pour ajouter les colonnes"] } },
    { key: ["Adicione sempre estas <b>3 colunas</b>.", "Ajoute toujours ces <b>3 colonnes</b>."] },
    { shot: { f: "transactions-en-cours.png", cap: ["A lista: data, cliente (estatuto VIP, Regular, Prospect), produto, especialista, em pausa, estado, posição, tentativas e ação", "La liste : date, client (statut VIP, Régulier, Prospect), produit, expert, en pause, état, position, tentatives et action"] } }
  ] },
  { t: ["Os estados de uma MER", "Les statuts d’une MER"], b: [
    { chips: [
      { c: "s-wait", k: "Pending", p: ["Estado inicial. Nada a fazer.", "Statut initial. Rien à faire."] },
      { c: "s-mid", k: "Hunt", p: ["O sistema chama o cliente ou o especialista.", "Le système appelle le client ou l’expert."] },
      { c: "s-ok", k: "Bridged", p: ["Em curso: tudo bem.", "En cours : tout va bien."] },
      { c: "s-bad", k: "Failed", p: ["Tentativas falhadas; o sistema relança durante 2h. Cliente não quer esperar: outro especialista.", "Tentatives échouées ; le système relance pendant 2h. Client pressé : autre expert."] },
      { c: "s-wait", k: "Reset", p: ["Pedido relançado: aguardar.", "Demande relancée : attendre."] }
    ] },
    { shot: { f: "transactions-relancer.png", cap: ["«Failure» com o especialista em pausa: aparece o botão «Relancer». «Demandé» + RDV: é uma marcação à espera", "« Failure » avec l’expert en pause : le bouton « Relancer » apparaît. « Demandé » + RDV : c’est un rendez-vous en attente"] } },
    { p: ["<b>Posição</b> = lugar na fila. Máximo <b>2 horas</b> na fila, depois falha. Informe sempre o cliente da posição. A hora no Bobi é a de Paris.", "<b>Position</b> = place dans la file. Maximum <b>2 heures</b> en file, ensuite échec. Informe toujours le client de sa position. L’heure dans Bobi est celle de Paris."] }
  ] },
  { t: ["Relançar ou cancelar", "Relancer ou annuler"], b: [
    { p: ["<b>Relançar</b> (botão «Reiniciar» → RESET) quando o cliente está em <b>posição 1</b> e:", "<b>Relancer</b> (bouton « Réinitialiser » → RESET) quand le client est en <b>position 1</b> et :"] },
    { list: [["o pedido está em «falha»;", "la demande est en « échec » ;"], ["o especialista está offline;", "l’expert est hors ligne ;"], ["espera há mais de <b>20 min</b> e o especialista não está em pausa.", "attend depuis plus de <b>20 min</b> et l’expert n’est pas en pause."]] },
    { shot: { f: "transactions-terminer.png", cap: ["Dois botões diferentes: «Terminar» nos pedidos Pending, «Terminer la session» nas consultas Bridged", "Deux boutons différents : « Terminar » sur les demandes Pending, « Terminer la session » sur les consultations Bridged"] } },
    { compare: [
      { cls: "good", h: ["«Terminar»", "« Terminar »"], tag: ["Pending", "Pending"], items: [["Cancela um <b>pedido</b> que ainda não começou", "Annule une <b>demande</b> qui n’a pas encore commencé"], ["Só com bloqueio grave ou se o cliente pedir", "Seulement en cas de blocage grave ou si le client le demande"], ["Indicar o motivo e propor sempre um RDV", "Indiquer le motif et toujours proposer un RDV"]] },
      { cls: "bad", h: ["«Terminer la session»", "« Terminer la session »"], tag: ["Bridged", "Bridged"], items: [["Aparece numa consulta <b>em curso</b>", "Apparaît sur une consultation <b>en cours</b>"], ["Corta a comunicação entre cliente e especialista", "Coupe la communication entre le client et l’expert"], ["Nunca tocar", "Ne jamais y toucher"]] }
    ] }
  ] },
  { t: ["Os RDV em curso", "Les RDV en cours"], b: [
    { p: ["Na ficha, bloco Ações → «RDV» em curso. A lista mostra os RDV a vir e passados: n.º, canal, data do RDV (hora de Paris), data do pedido, especialista e estado.", "Sur la fiche, bloc Actions → « RDV » en cours. La liste montre les RDV à venir et passés : n°, canal, date du RDV (heure de Paris), date de prise, expert et statut."] },
    { shot: { f: "rdv-liste-client.png", cap: ["Os RDV de um cliente: um «Annulé» e um «Planifié»", "Les RDV d’un client : un « Annulé » et un « Planifié »"] } },
    { p: ["Clique no n.º do RDV para ver o detalhe: especialista, canal, data, estado, mensagem, origem, promoção aplicada. Os botões em baixo permitem <b>cancelar em nome do cliente</b>, <b>cancelar em nome do especialista</b> ou <b>modificar em nome do cliente</b>.", "Clique sur le n° du RDV pour voir le détail : expert, canal, date, statut, message, origine, promo appliquée. Les boutons en bas permettent d’<b>annuler à la place du client</b>, d’<b>annuler à la place de l’expert</b> ou de <b>modifier à la place du client</b>."] },
    { shot: { f: "rdv-detail.png", cap: ["Detalhe de um RDV planificado, com a promoção aplicada e os 3 botões", "Détail d’un RDV planifié, avec la promo appliquée et les 3 boutons"] } },
    { shot: { f: "rdv-modifier.png", cap: ["«Modifier le rendez-vous à la place du client»: mensagem, telefone, nova data e hora → «Envoyer»", "« Modifier le rendez-vous à la place du client » : message, téléphone, nouvelle date et heure → « Envoyer »"] } },
    { shot: { f: "rdv-statuts-liste.png", cap: ["Na lista: «Planifié» (confirmado) e «Demandé» (à espera do especialista)", "Dans la liste : « Planifié » (confirmé) et « Demandé » (en attente de l’expert)"] } },
    { shot: { f: "rdv-detail-demande.png", cap: ["Um RDV «requested»: o especialista ainda tem de aceitar", "Un RDV « requested » : l’expert doit encore accepter"] } },
    { chips: [
      { c: "s-wait", k: ["Demandé · requested", "Demandé · requested"], p: ["Aguarda validação do especialista.", "Attend la validation de l’expert."] },
      { c: "s-ok", k: ["Planifié · planified", "Planifié · planified"], p: ["Confirmado: vai realizar-se.", "Confirmé : aura lieu."] },
      { c: "s-mid", k: ["Em curso", "En cours"], p: ["A decorrer.", "A lieu maintenant."] },
      { c: "s-ok", k: ["Realizada", "Réalisé"], p: ["Feita.", "Effectué."] },
      { c: "s-bad", k: ["Recusada / Cancelada", "Refusé / Annulé"], p: ["Pelo especialista ou pelo cliente.", "Par l’expert ou le client."] },
      { c: "s-bad", k: ["Erro faturação / Falha", "Erreur facturation / Échec"], p: ["Erro de pagamento ou falha técnica no início.", "Erreur de paiement ou panne au démarrage."] }
    ] },
    { tip: ["Ao cancelar, proponha logo outro horário.", "Quand tu annules, propose tout de suite un autre créneau."] }
  ] }],
  quiz: [
    { q: ["Estado «Bridged»?", "Statut « Bridged » ?"], o: [["Consulta em curso, tudo bem", "Consultation en cours, tout va bien"], ["Falhou", "Échec"]], a: 0, w: ["Bridged = ligação feita.", "Bridged = connexion réussie."] },
    { q: ["Posição 1, espera há 25 min, especialista disponível sem pausa.", "Position 1, attend depuis 25 min, expert dispo pas en pause."], o: [["Espero", "J’attends"], ["Relanço", "Je relance"], ["Cancelo", "J’annule"]], a: 1, w: ["Mais de 20 min em posição 1 → relançar.", "Plus de 20 min en position 1 → relancer."] },
    { q: ["Tempo máximo na fila?", "Durée maximum en file ?"], o: [["30 min", "30 min"], ["2 horas", "2 heures"]], a: 1, w: ["Depois de 2h, o pedido falha.", "Après 2h, la demande échoue."] }
  ]
}
);
