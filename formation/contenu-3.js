/* ==========================================================
   Academia BestCall — contenu de formation (partie 3/3)
   Détails supplémentaires demandés par Marta : pour chaque module,
   une leçon « Em detalhe / En détail » (tout le guide, sans résumé)
   et une leçon « Casos práticos / Cas pratiques » (mises en situation),
   plus des questions de quiz.
   Ces leçons sont ajoutées à la fin de chaque module, avant le quiz.
   ========================================================== */
window.BCF = window.BCF || { modules: [] };

BCF.extra = {

/* ---------------- 1. Bienvenue ---------------- */
bienvenue: { lessons: [
  { t: ["Em detalhe: o guia e os objetivos", "En détail : le guide et ses objectifs"], b: [
    { lead: ["O guia do conselheiro existe para quatro coisas: facilitar a gestão das chamadas e dos e-mails, dar soluções rápidas e personalizadas, usar bem as ferramentas e aumentar a satisfação do cliente.", "Le guide du conseiller sert à quatre choses : faciliter la gestion des appels et des e-mails, donner des solutions rapides et personnalisées, bien utiliser les outils et augmenter la satisfaction du client."] },
    { table: { h: [["Parte do guia", "Partie du guide"], ["O que contém", "Ce qu’elle contient"]], r: [
      [["Procedimentos de CHAMADA", "Procédures d’APPEL"], ["Todas as etapas para gerir uma chamada: MER, RDV, seguimento, pagamentos, conta, fidelidade, reclamações.", "Toutes les étapes pour gérer un appel : MER, RDV, suivi, paiements, compte, fidélité, réclamations."]],
      [["Procedimentos de E-MAIL", "Procédures E-MAIL"], ["As boas práticas para responder aos e-mails (no Foxi).", "Les bonnes pratiques pour répondre aux e-mails (dans Foxi)."]],
      [["Ferramentas", "Outils"], ["Bobi (ficha cliente), Graam (telefone), Foxi (tickets).", "Bobi (fiche client), Graam (téléphone), Foxi (tickets)."]]
    ] } },
    { p: ["Os pedidos de chamada dividem-se em 6 famílias. Ao atender, pergunte-se logo em qual está:", "Les demandes au téléphone se rangent en 6 familles. En décrochant, demande-toi tout de suite dans laquelle tu es :"] },
    { cards: [
      { i: "1", t: ["Contacto e marcação", "Mise en relation et RDV"], p: ["O cliente quer falar com um especialista agora ou mais tarde.", "Le client veut parler à un expert maintenant ou plus tard."] },
      { i: "2", t: ["Seguimento de pedidos", "Suivi des demandes"], p: ["Uma MER ou um RDV já existe e algo não corre bem.", "Une MER ou un RDV existe déjà et quelque chose ne va pas."] },
      { i: "3", t: ["Pagamento e faturação", "Paiement et facturation"], p: ["Cartão, Wallet, fatura, dívida, oferta.", "Carte, Wallet, facture, impayé, offre."] },
      { i: "4", t: ["Conta do cliente", "Compte client"], p: ["Dados pessoais, desbloqueio, supressão.", "Données personnelles, déblocage, suppression."] },
      { i: "5", t: ["Fidelidade", "Fidélité"], p: ["Pontos Wengo Reward e recompensas.", "Points Wengo Reward et récompenses."] },
      { i: "6", t: ["Reclamações", "Réclamations"], p: ["O que o N1 não resolve e vai para o N2.", "Ce que le N1 ne règle pas et qui part au N2."] }
    ] },
    { key: ["Identificar a família do pedido nos primeiros 30 segundos = saber logo que procedimento seguir e que módulo rever.", "Identifier la famille de la demande dans les 30 premières secondes = savoir tout de suite quelle procédure suivre et quel module revoir."] }
  ] },
  { t: ["Casos práticos", "Cas pratiques"], b: [
    { case: { s: ["Uma cliente liga: «Fiz um pedido de consulta há uma hora e a especialista ainda não me ligou.»", "Une cliente appelle : « J’ai fait une demande de consultation il y a une heure et l’experte ne m’a toujours pas appelée. »"], q: ["Que família de pedido é, e qual é o primeiro reflexo?", "Quelle famille de demande, et quel est le premier réflexe ?"], a: [
      ["Família 2: seguimento de um pedido em curso.", "Famille 2 : suivi d’une demande en cours."],
      ["Abrir «Transações em curso» e ler o estado, a posição na fila e se a especialista está em pausa.", "Ouvrir « Transactions en cours » et lire le statut, la position dans la file et si l’experte est en pause."],
      ["Nunca a deixar sem solução: relançar se for o caso, ou propor outra especialista disponível ou um RDV.", "Ne jamais la laisser sans solution : relancer si besoin, ou proposer une autre experte disponible ou un RDV."]
    ] } },
    { case: { s: ["Um cliente fala de uma dívida que não vê na ficha que tem aberta.", "Un client parle d’un impayé que tu ne vois pas sur la fiche ouverte."], q: ["Onde procura?", "Où cherches-tu ?"], a: [
      ["No separador Risk: contas primas (mesmo cartão, PayPal ou telefone).", "Dans l’onglet Risk : comptes cousins (même carte, PayPal ou téléphone)."],
      ["A dívida está provavelmente noutra conta do mesmo cliente.", "L’impayé est sûrement sur un autre compte du même client."]
    ] } },
    { case: { s: ["Aparece o erro 39009 ao lançar uma MER.", "L’erreur 39009 apparaît au lancement d’une MER."], q: ["O que faz, por ordem?", "Que fais-tu, dans l’ordre ?"], a: [
      ["Consultar o Gemini (ou a tabela de erros) para confirmar: transação recusada pelo banco.", "Consulter Gemini (ou le tableau des erreurs) pour confirmer : transaction refusée par la banque."],
      ["Tentar uma segunda vez, depois propor outro meio (outro cartão, PayPal, pré-pago).", "Tenter une deuxième fois, puis proposer un autre moyen (autre carte, PayPal, prépayée)."],
      ["Se o cliente quiser usar o mesmo cartão: dar-lhe a frase para o banco autorizar a Wengo.", "Si le client veut garder la même carte : lui donner la phrase pour que la banque autorise Wengo."]
    ] } }
  ] }],
  quiz: [
    { q: ["Um cliente quer mudar o e-mail da conta. Que família de pedido?", "Un client veut changer l’e-mail de son compte. Quelle famille de demande ?"], o: [["Conta do cliente", "Compte client"], ["Reclamações", "Réclamations"], ["Pagamento", "Paiement"]], a: 0, w: ["Dados pessoais = gestão da conta.", "Données personnelles = gestion du compte."] },
    { q: ["Antes de dizer a um cliente onde está o seu reembolso, o que verifica?", "Avant de dire au client où est son remboursement, que vérifies-tu ?"], o: [["O detalhe da fatura reembolsada (para que meio voltou o dinheiro)", "Le détail de la facture remboursée (sur quel moyen l’argent est revenu)"], ["Só o estado «Refund»", "Seulement le statut « Refund »"]], a: 0, w: ["O reembolso pode voltar ao cartão ou à Wallet: veja os fluxos.", "Le remboursement peut revenir sur la carte ou le Wallet : regarde les flux."] }
  ]
},

/* ---------------- 2. Tipos de clientes ---------------- */
clientes: { lessons: [
  { t: ["Em detalhe: perfil, necessidades e o seu papel", "En détail : profil, besoins et ton rôle"], b: [
    { lead: ["Para cada tipo de cliente, o guia diz quem ele é, de que precisa e o que o conselheiro deve fazer. Use esta tabela como cábula ao telefone.", "Pour chaque type de client, le guide dit qui il est, ce dont il a besoin et ce que le conseiller doit faire. Utilise ce tableau comme antisèche au téléphone."] },
    { table: { h: [["Tipo", "Type"], ["Perfil", "Profil"], ["Necessidades", "Besoins"], ["O seu papel", "Ton rôle"]], r: [
      [["<b>Prospect</b>", "<b>Prospect</b>"], ["Criou conta, nunca pagou uma consulta. Pode hesitar: falta de confiança, dúvidas sobre o funcionamento, limites financeiros.", "A créé un compte, n’a jamais payé de consultation. Peut hésiter : manque de confiance, doutes sur le fonctionnement, contraintes financières."], ["Sentir-se seguro; perceber como funciona (escolha do especialista, pagamento, confidencialidade); um incentivo para começar.", "Se sentir en confiance ; comprendre comment ça marche (choix de l’expert, paiement, confidentialité) ; un coup de pouce pour se lancer."], ["Explicar claramente; reforçar confidencialidade e profissionalismo; destacar a 1.ª consulta, as avaliações, a experiência do especialista; propor a oferta adequada.", "Expliquer clairement ; insister sur la confidentialité et le professionnalisme ; mettre en avant la 1re consultation, les avis, l’expérience de l’expert ; proposer l’offre adaptée."]],
      [["<b>Novo</b>", "<b>Nouveau</b>"], ["Inscrito há menos de um mês, menos de 3 consultas, em fase de descoberta.", "Inscrit depuis moins d’un mois, moins de 3 consultations, en phase de découverte."], ["Ser acompanhado na primeira experiência; encontrar o especialista certo; respostas precisas.", "Être accompagné dans sa première expérience ; trouver le bon expert ; des réponses précises."], ["Verificar se a 1.ª experiência correu bem (senão: reembolso, novo especialista…); aconselhar a escolha; incentivar a explorar outros perfis; tirar os obstáculos.", "Vérifier que la 1re expérience s’est bien passée (sinon : remboursement, nouvel expert…) ; conseiller le choix ; encourager à explorer d’autres profils ; lever les obstacles."]],
      [["<b>Inativo</b>", "<b>Inactif</b>"], ["Já consultou, a última vez há mais de 3 meses. Motivos possíveis: má experiência, esquecimento, necessidades diferentes.", "A déjà consulté, la dernière fois il y a plus de 3 mois. Raisons possibles : mauvaise expérience, oubli, besoins différents."], ["Ser compreendido; recuperar o interesse; garantia de uma experiência melhor.", "Être compris ; retrouver l’intérêt ; avoir la garantie d’une meilleure expérience."], ["Perguntar porque deixou de consultar; propor o apoio certo (novo especialista, explicar o que mudou); lembrar os benefícios; partilhar promoções.", "Demander pourquoi il a arrêté ; proposer l’aide adaptée (nouvel expert, expliquer ce qui a changé) ; rappeler les avantages ; partager les promos."]],
      [["<b>Regular</b>", "<b>Régulier</b>"], ["Mais de 3 consultas e pelo menos 1 nos últimos 30 dias. Fiel e envolvido.", "Plus de 3 consultations et au moins 1 dans les 30 derniers jours. Fidèle et impliqué."], ["Continuar satisfeito; ser reconhecido; acesso rápido.", "Rester satisfait ; être reconnu ; un accès rapide."], ["Apoio rápido e eficaz; valorizar a fidelidade (ofertas, recomendações); comunicação personalizada.", "Aide rapide et efficace ; valoriser la fidélité (offres, recommandations) ; communication personnalisée."]],
      [["<b>Ocasional</b>", "<b>Occasionnel</b>"], ["Pelo menos 1 consulta nos últimos 3 meses mas pouco frequente: menos de 3 consultas com 1 nos últimos 30 dias, OU mais de 3 sem nenhuma nos últimos 30 dias.", "Au moins 1 consultation ces 3 derniers mois mais peu fréquent : moins de 3 consultations dont 1 ces 30 derniers jours, OU plus de 3 sans aucune ces 30 derniers jours."], ["Encontrar o especialista que o fidelize; criar confiança; ser incentivado a consultar mais.", "Trouver l’expert qui le fidélisera ; créer la confiance ; être encouragé à consulter plus."], ["Perceber o que o faria vir mais vezes; tranquilizar sobre o funcionamento; destacar ofertas.", "Comprendre ce qui le ferait revenir plus souvent ; rassurer sur le fonctionnement ; mettre en avant les offres."]]
    ] } },
    { key: ["Adaptar a resposta ao perfil serve para: converter mais prospects, reter os novos, reconquistar os inativos e fidelizar os regulares.", "Adapter la réponse au profil sert à : convertir plus de prospects, retenir les nouveaux, reconquérir les inactifs et fidéliser les réguliers."] }
  ] },
  { t: ["Casos práticos", "Cas pratiques"], b: [
    { case: { s: ["Uma cliente: 2 consultas no total, a 1.ª há 12 dias. Diz: «Não gostei muito da última especialista.»", "Une cliente : 2 consultations au total, la 1re il y a 12 jours. Elle dit : « Je n’ai pas trop aimé la dernière experte. »"], q: ["Que tipo é e o que faz?", "Quel type et que fais-tu ?"], a: [
      ["Nova (menos de 3 consultas, 1.ª há menos de 30 dias).", "Nouvelle (moins de 3 consultations, 1re il y a moins de 30 jours)."],
      ["Perguntar o que não correu bem e o que procura (tema, estilo direto ou suave).", "Demander ce qui ne s’est pas bien passé et ce qu’elle cherche (thème, style direct ou doux)."],
      ["Propor outra especialista que corresponda e incentivá-la a explorar outros perfis.", "Proposer une autre experte qui correspond et l’encourager à explorer d’autres profils."],
      ["Se houve problema técnico ou promo não aplicada, ver se há direito a reembolso.", "S’il y a eu un problème technique ou une promo non appliquée, voir si un remboursement est possible."]
    ] } },
    { case: { s: ["Um cliente com 15 consultas não consulta há 5 meses. Liga para perguntar o saldo de pontos.", "Un client avec 15 consultations n’a pas consulté depuis 5 mois. Il appelle pour connaître son solde de points."], q: ["Além de responder, o que pode fazer?", "En plus de répondre, que peux-tu faire ?"], a: [
      ["É um Inativo: aproveitar para perceber porque deixou de consultar.", "C’est un Inactif : en profiter pour comprendre pourquoi il ne consulte plus."],
      ["Verificar se tem direito à oferta para Inativos 6 meses+ (bloco «À savoir» e ofertas).", "Vérifier s’il a droit à l’offre Inactifs 6 mois+ (bloc « À savoir » et offres)."],
      ["Se tiver 100 pts ou mais, propor a troca por minutos gratuitos.", "S’il a 100 pts ou plus, proposer l’échange contre des minutes gratuites."]
    ] } }
  ] }],
  quiz: [
    { q: ["4 consultas no total, nenhuma nos últimos 30 dias, a última há 2 meses.", "4 consultations au total, aucune ces 30 derniers jours, la dernière il y a 2 mois."], o: [["Regular", "Régulier"], ["Ocasional", "Occasionnel"], ["Inativo", "Inactif"]], a: 1, w: ["Mais de 3 consultas e nenhuma nos últimos 30 dias, mas uma nos últimos 3 meses = Ocasional.", "Plus de 3 consultations, aucune ces 30 jours, mais une ces 3 mois = Occasionnel."] },
    { q: ["O que um Prospect mais precisa?", "De quoi un Prospect a-t-il le plus besoin ?"], o: [["Sentir confiança e perceber o funcionamento", "Se sentir en confiance et comprendre le fonctionnement"], ["Ser reconhecido pela fidelidade", "Être reconnu pour sa fidélité"]], a: 0, w: ["A fidelidade é para os Regulares.", "La fidélité, c’est pour les Réguliers."] }
  ]
},

/* ---------------- 3. Fiche client ---------------- */
fiche: { lessons: [
  { t: ["Em detalhe: cada campo da ficha", "En détail : chaque champ de la fiche"], b: [
    { table: { h: [["Campo", "Champ"], ["Para que serve / o que verificar", "À quoi il sert / ce qu’il faut vérifier"]], r: [
      [["Estatuto VIP", "Statut VIP"], ["Gastou muito na plataforma: atenção especial, pedidos tratados com prioridade, serviço rápido e personalizado.", "A beaucoup dépensé sur la plateforme : attention particulière, demandes traitées en priorité, service rapide et personnalisé."]],
      [["Última consulta", "Dernière consultation"], ["Antiga? O cliente pode precisar de ser reconquistado: verifique ofertas e promoções.", "Ancienne ? Le client est peut-être à reconquérir : vérifie offres et promos."]],
      [["Anuário de inscrição", "Annuaire d’inscription"], ["Define a língua e o conteúdo das comunicações e das ofertas que recebe.", "Définit la langue et le contenu des communications et des offres qu’il reçoit."]],
      [["Fuso horário", "Fuseau horaire"], ["País onde o cliente está: essencial para os RDV.", "Pays où se trouve le client : essentiel pour les RDV."]],
      [["Data de inscrição", "Date d’inscription"], ["Diz se é um cliente novo ou antigo.", "Dit si c’est un client nouveau ou ancien."]],
      [["Identidade verificada", "Identité vérifiée"], ["SIM = enviou o documento. Necessário para continuar a consultar acima de 2000€ por mês.", "OUI = il a envoyé sa pièce. Nécessaire pour continuer à consulter au-delà de 2000€ par mois."]],
      [["Wengo Reward", "Wengo Reward"], ["Inscrito ou não: bom motivo para fidelizar ou propor ofertas.", "Inscrit ou non : bonne raison de fidéliser ou de proposer des offres."]]
    ] } },
    { p: ["<b>Bloco Meios de pagamento</b>: tipo (pré-pago = recarga antes; pós-pago = paga depois), o cartão por defeito (se não houver, o atalho «Ajouter une CB» abre o formulário) e os créditos Wallet por moeda («voir le détail»).", "<b>Bloc Moyens de paiement</b> : type (prépayé = recharge avant ; postpayé = paie après), la carte par défaut (s’il n’y en a pas, le raccourci « Ajouter une CB » ouvre le formulaire) et les crédits Wallet par devise (« voir le détail »)."] },
    { p: ["<b>Bloco Últimas atividades</b>: consultas e RDV recentes ou futuros. Dois atalhos: «Consultation immédiate» (página de lançamento já preenchida) e «RDV» (página de marcação já preenchida).", "<b>Bloc Dernières activités</b> : consultations et RDV récents ou à venir. Deux raccourcis : « Consultation immédiate » (page de lancement pré-remplie) et « RDV » (page de prise de RDV pré-remplie)."] },
    { p: ["<b>Bloco Ações</b>: fazer uma chamada, fazer uma pergunta (consulta por escrito), marcar RDV, adicionar um meio de pagamento, editar dados pessoais, subscrições, reclamação, enviar e-mail/SMS predefinidos (e ver o histórico), avaliações, programa de fidelidade.", "<b>Bloc Actions</b> : lancer un appel, poser une question (consultation écrite), prendre un RDV, ajouter un moyen de paiement, modifier les infos perso, abonnements, réclamation, envoyer un e-mail/SMS prédéfini (et voir l’historique), avis, programme de fidélité."] },
    { p: ["<b>Separador Notas</b>: filtros por data (início–fim), grupo (Atendimento, Ligação, Monitorização, Cobrança), tipo e utilizador. Algumas ações criam notas automáticas. Para acrescentar: «+», tipo, caixa(s) e/ou texto, guardar.", "<b>Onglet Notes</b> : filtres par date (début–fin), groupe (Service client, Mise en relation, Suivi, Recouvrement), type et utilisateur. Certaines actions créent des notes automatiques. Pour en ajouter : « + », type, case(s) et/ou texte, enregistrer."] },
    { p: ["<b>Separador Chamadas</b>: data e hora, ID da chamada (cole-o na pesquisa do Graam), entrada/saída, operador, telefone Wengo e do cliente, campanha (ex.: chamada de saída), duração e qualificação.", "<b>Onglet Appels</b> : date et heure, ID de l’appel (colle-le dans la recherche Graam), entrant/sortant, opérateur, téléphone Wengo et du client, campagne (ex. appel sortant), durée et qualification."] },
    { p: ["<b>Separador Risk</b>: «Autres occurrences de moyens de paiement» (contas primas por cartão: cliente, cartão, validade verde/laranja/vermelho, adicionado em, outras informações); em baixo «Liste des numéros de téléphone» e contas primas por telefone (cliente, número, ocorrências); depois contas primas por e-mail PayPal.", "<b>Onglet Risk</b> : « Autres occurrences de moyens de paiement » (comptes cousins par carte : client, carte, validité vert/orange/rouge, ajouté le, autres infos) ; en bas « Liste des numéros de téléphone » et comptes cousins par téléphone (client, numéro, occurrences) ; puis comptes cousins par e-mail PayPal."] }
  ] },
  { t: ["Casos práticos", "Cas pratiques"], b: [
    { case: { s: ["Ao atender, abre uma ficha com o estado «Inativo» e «Profil suspendu». O cliente diz que consultou ontem.", "En décrochant, une fiche s’ouvre avec « Inactif » et « Profil suspendu ». Le client dit qu’il a consulté hier."], q: ["O que se passa?", "Que se passe-t-il ?"], a: [
      ["O número está provavelmente ligado a uma ficha antiga.", "Le numéro est sûrement lié à une vieille fiche."],
      ["Ir ao Risk → contas primas por telefone: encontrar a conta realmente usada.", "Aller dans Risk → comptes cousins par téléphone : trouver le compte vraiment utilisé."],
      ["Ler a nota de suspensão para perceber o motivo antes de responder.", "Lire la note de suspension pour comprendre le motif avant de répondre."]
    ] } },
    { case: { s: ["Um cliente quer ser contactado só depois das 18h.", "Un client veut être contacté seulement après 18h."], q: ["Como garante que os colegas sabem?", "Comment t’assurer que les collègues le savent ?"], a: [
      ["Separador Notas → «+» → tipo Service Client.", "Onglet Notes → « + » → type Service Client."],
      ["Marcar «Client souhaite être contacté aux horaires suivants» e escrever o horário.", "Cocher « Client souhaite être contacté aux horaires suivants » et écrire l’horaire."],
      ["Guardar: a nota fica no histórico para todos.", "Enregistrer : la note reste dans l’historique pour tous."]
    ] } }
  ] }],
  quiz: [
    { q: ["Onde vê se o cliente tem uma consulta futura marcada?", "Où vois-tu si le client a une consultation à venir ?"], o: [["Últimas atividades", "Dernières activités"], ["Separador Risk", "Onglet Risk"]], a: 0, w: ["Últimas atividades mostra consultas e RDV recentes e futuros.", "Dernières activités montre les consultations et RDV récents et à venir."] },
    { q: ["No Risk, o cartão de uma conta prima está a vermelho.", "Dans Risk, la carte d’un compte cousin est en rouge."], o: [["Estado crítico, uso bloqueado no Bobi", "Statut critique, usage bloqué dans Bobi"], ["Cartão expirado", "Carte expirée"]], a: 0, w: ["Verde = ativo, laranja = expirado/apagado, vermelho = crítico.", "Vert = active, orange = expirée/supprimée, rouge = critique."] }
  ]
},

/* ---------------- 4. Graam ---------------- */
graam: { lessons: [
  { t: ["Em detalhe: do início ao fim de uma chamada", "En détail : du début à la fin d’un appel"], b: [
    { steps: [
      { t: ["Ligar-se", "Se connecter"], p: ["Graam: e-mail + palavra-passe → «Connexion». Bobi: identificador + palavra-passe.", "Graam : e-mail + mot de passe → « Connexion ». Bobi : identifiant + mot de passe."] },
      { t: ["Escolher o tipo de chamadas", "Choisir le type d’appels"], p: ["Todas (entrada e saída), só entrada ou só saída.", "Toutes (entrants et sortants), entrants seulement ou sortants seulement."] },
      { t: ["Ler a faixa ao tocar", "Lire le bandeau à la sonnerie"], p: ["Número do cliente, número chamado, fila (ex.: Client ES), mensagem de boas-vindas a dizer.", "Numéro du client, numéro appelé, file (ex. Client ES), message d’accueil à dire."] },
      { t: ["Atender e autenticar", "Décrocher et authentifier"], p: ["A ficha abre no Bobi: «Authentifier». Se não houver ficha, criar a conta (prospect).", "La fiche s’ouvre dans Bobi : « Authentifier ». S’il n’y a pas de fiche, créer le compte (prospect)."] },
      { t: ["Durante a chamada", "Pendant l’appel"], p: ["Espera (pausa), transferência para outro conselheiro, gravação: parar obrigatoriamente antes dos dados do cartão.", "Attente (pause), transfert à un autre conseiller, enregistrement : à couper obligatoirement avant les données de carte."] },
      { t: ["Qualificar", "Qualifier"], p: ["Client / Prospect / Hors-Cibles → subcategoria (Demande de MER/RDV, Gestion compte client, Demande d’information, Insatisfaction, Recouvrement) → comentário → «Sauvegarder».", "Client / Prospect / Hors-Cibles → sous-catégorie (Demande de MER/RDV, Gestion compte client, Demande d’information, Insatisfaction, Recouvrement) → commentaire → « Sauvegarder »."] }
    ] },
    { p: ["<b>Pausas</b>: botão pausa no topo e escolher o motivo (Brief, Café, Almoço, Formação, Mail, Meeting, Pós-chamada…). <b>Definições</b> (roda dentada): língua, receber chamadas na aplicação, ligar de novo em caso de corte, abrir o link do Bobi a cada nova chamada, toque e periférico de áudio.", "<b>Pauses</b> : bouton pause en haut et choisir le motif (Brief, Café, Déjeuner, Formation, Mail, Meeting, Post-appel…). <b>Paramètres</b> (roue crantée) : langue, recevoir les appels dans l’appli, rappeler en cas de coupure, ouvrir le lien Bobi à chaque nouvel appel, sonnerie et périphérique audio."] },
    { p: ["<b>Histórico</b>: «Mes appels manqués» e «Journal d’appel», filtros por data, telefone e fila. Em cada chamada: detalhes, ouvir a gravação, descarregar, adicionar/modificar a qualificação, voltar a ligar.", "<b>Historique</b> : « Mes appels manqués » et « Journal d’appel », filtres par date, téléphone et file. Sur chaque appel : détails, écouter l’enregistrement, télécharger, ajouter/modifier la qualification, rappeler."] }
  ] },
  { t: ["Casos práticos", "Cas pratiques"], b: [
    { case: { s: ["Fim da chamada: o cliente só queria saber o horário do serviço.", "Fin de l’appel : le client voulait seulement connaître les horaires du service."], q: ["Como qualifica?", "Comment qualifies-tu ?"], a: [
      ["Client (ou Prospect se não tiver conta) → Demande d’information.", "Client (ou Prospect s’il n’a pas de compte) → Demande d’information."],
      ["Comentário curto se útil, depois «Sauvegarder».", "Commentaire court si utile, puis « Sauvegarder »."]
    ] } },
    { case: { s: ["Tem uma chamada perdida de um número desconhecido.", "Tu as un appel manqué d’un numéro inconnu."], q: ["O que faz?", "Que fais-tu ?"], a: [
      ["Histórico → «Mes appels manqués» → clicar na chamada.", "Historique → « Mes appels manqués » → cliquer sur l’appel."],
      ["Ver a data e o histórico de chamadas desse número.", "Voir la date et l’historique des appels de ce numéro."],
      ["Voltar a ligar com o botão de telefone.", "Rappeler avec le bouton téléphone."]
    ] } }
  ] }],
  quiz: [
    { q: ["Uma chamada sem relação com a Wengo (engano). Que qualificação?", "Un appel sans rapport avec Wengo (erreur). Quelle qualification ?"], o: [["Hors-Cibles", "Hors-Cibles"], ["Prospect", "Prospect"]], a: 0, w: ["Hors-Cibles = fora do público.", "Hors-Cibles = hors du public visé."] },
    { q: ["Onde muda a língua do Graam?", "Où changes-tu la langue de Graam ?"], o: [["Definições (roda dentada)", "Paramètres (roue crantée)"], ["No Bobi", "Dans Bobi"]], a: 0, w: ["A roda dentada no topo à direita.", "La roue crantée en haut à droite."] }
  ]
},

/* ---------------- 5. Prospect ---------------- */
prospect: { lessons: [
  { t: ["Em detalhe: como valorizar um especialista", "En détail : comment valoriser un expert"], b: [
    { lead: ["Ao propor um especialista, não diga só o nome: explique porque é a escolha certa. O guia dá 5 argumentos.", "En proposant un expert, ne donne pas juste le nom : explique pourquoi c’est le bon choix. Le guide donne 5 arguments."] },
    { cards: [
      { i: "1", t: ["Experiência e competências", "Expérience et compétences"], p: ["Selecionados pela experiência em vidência, mediunidade e astrologia; respostas claras sobre amor, trabalho, decisões importantes.", "Sélectionnés pour leur expérience en voyance, médiumnité et astrologie ; réponses claires sur l’amour, le travail, les décisions importantes."] },
      { i: "2", t: ["Consultas honestas", "Consultations honnêtes"], p: ["Respostas francas, sem rodeios, para avançar com clareza; previsões reconhecidas pela precisão.", "Réponses franches, sans détour, pour avancer avec clarté ; prédictions reconnues pour leur précision."] },
      { i: "3", t: ["Amabilidade e escuta", "Bienveillance et écoute"], p: ["Tempo para compreender cada situação, apoio emocional, ajudam a recuperar a serenidade.", "Du temps pour comprendre chaque situation, soutien émotionnel, aident à retrouver la sérénité."] },
      { i: "4", t: ["Resolver e decidir", "Résoudre et décider"], p: ["Orientam as escolhas de vida com conselhos concretos.", "Orientent les choix de vie avec des conseils concrets."] },
      { i: "5", t: ["Satisfação", "Satisfaction"], p: ["Muito bem avaliados; muitos clientes voltam a marcar.", "Très bien notés ; beaucoup de clients reviennent."] }
    ] },
    { p: ["Use os dados do perfil para provar o que diz: número de consultas, taxa de satisfação, especialidades (tarologia, numerologia, mediunidade, reiki, coaching espiritual), descrição e estilo (rápido e direto ou suave e empático) e as avaliações dos clientes.", "Utilise les données du profil pour prouver ce que tu dis : nombre de consultations, taux de satisfaction, spécialités (tarologie, numérologie, médiumnité, reiki, coaching spirituel), description et style (rapide et direct ou doux et empathique) et les avis clients."] },
    { script: [
      { s: ["«Para o amor, recomendo a [Nome]: tem mais de 19 000 consultas com 99% de satisfação e é conhecida por respostas diretas.»", "« Pour l’amour, je vous recommande [Prénom] : elle a plus de 19 000 consultations avec 99 % de satisfaction et elle est connue pour ses réponses directes. »"], tag: ["Valorizar com factos", "Valoriser avec des faits"] },
      { s: ["«Se preferir alguém mais suave e à escuta, a [Nome] dedica tempo a perceber cada situação.»", "« Si vous préférez quelqu’un de plus doux et à l’écoute, [Prénom] prend le temps de comprendre chaque situation. »"], tag: ["Adaptar ao estilo", "Adapter au style"] }
    ] },
    { warn: ["Não invente números: leia-os no perfil do especialista na lista (métier, tarifa, estatísticas, descrição).", "N’invente pas de chiffres : lis-les sur le profil de l’expert dans la liste (métier, tarif, stats, description)."] }
  ] },
  { t: ["Casos práticos", "Cas pratiques"], b: [
    { case: { s: ["Um prospect diz: «Nunca fiz isto, tenho medo que seja caro e que os meus dados sejam partilhados.»", "Un prospect dit : « Je n’ai jamais fait ça, j’ai peur que ce soit cher et que mes données soient partagées. »"], q: ["Como responde?", "Comment réponds-tu ?"], a: [
      ["Tranquilizar: a consulta é confidencial, ele usa um pseudónimo anónimo e um código para o espaço cliente.", "Rassurer : la consultation est confidentielle, il utilise un pseudo anonyme et un code pour son espace client."],
      ["Apresentar a oferta de boas-vindas do país (ex.: Portugal 1€ por 10 min) para experimentar sem risco.", "Présenter l’offre de bienvenue du pays (ex. Portugal 1€ pour 10 min) pour essayer sans risque."],
      ["Valorizar um especialista disponível; só no fim, o meio de pagamento.", "Valoriser un expert disponible ; seulement à la fin, le moyen de paiement."]
    ] } },
    { case: { s: ["O prospect não sabe que especialista escolher.", "Le prospect ne sait pas quel expert choisir."], q: ["Que perguntas faz?", "Quelles questions poses-tu ?"], a: [
      ["Qual é o tema (amor, trabalho, finanças, família, desenvolvimento pessoal)?", "Quel est le thème (amour, travail, finances, famille, développement personnel) ?"],
      ["Prefere um tipo de consulta (tarologia, numerologia, mediunidade…)?", "Préfère-t-il un type de consultation (tarologie, numérologie, médiumnité…) ?"],
      ["Respostas diretas a curto prazo ou acompanhamento?", "Des réponses directes à court terme ou un accompagnement ?"],
      ["Telefone, chat ou vídeo? E qual o orçamento?", "Téléphone, chat ou vidéo ? Et quel budget ?"]
    ] } }
  ] }],
  quiz: [
    { q: ["Que argumento usar com uma cliente que quer «a verdade sem rodeios»?", "Quel argument avec une cliente qui veut « la vérité sans détour » ?"], o: [["Consultas honestas e diretas", "Consultations honnêtes et directes"], ["Apoio emocional", "Soutien émotionnel"]], a: 0, w: ["Adapte o argumento à expectativa.", "Adapte l’argument à l’attente."] },
    { q: ["Pode dizer um número de consultas de memória?", "Peux-tu donner un nombre de consultations de mémoire ?"], o: [["Não, leio-o no perfil", "Non, je le lis sur le profil"], ["Sim, aproximado", "Oui, approximatif"]], a: 0, w: ["Os números vêm do perfil do especialista.", "Les chiffres viennent du profil de l’expert."] }
  ]
},

/* ---------------- 6. Offres pays ---------------- */
"offres-pays": { lessons: [
  { t: ["Em detalhe: escolher a oferta certa", "En détail : choisir la bonne offre"], b: [
    { table: { h: [["Situação do cliente", "Situation du client"], ["Oferta a propor", "Offre à proposer"]], r: [
      [["Prospect ou Inativo há 6 meses ou mais", "Prospect ou Inactif depuis 6 mois ou plus"], ["Oferta de boas-vindas do país (lida entre [ ] na linha).", "Offre de bienvenue du pays (lue entre [ ] dans la ligne)."]],
      [["Quer controlar o gasto", "Veut maîtriser sa dépense"], ["Pacote de preço fixo (ex.: 20€/20 min).", "Forfait à prix fixe (ex. 20€/20 min)."]],
      [["Sempre o mesmo especialista, sem interesse em ofertas", "Toujours le même expert, pas intéressé par les offres"], ["Tarifa por minuto ([TODOS] Tarifa ao minuto).", "Tarif à la minute ([TOUS] Tarif à la minute)."]],
      [["Cliente ativo que gosta de experimentar", "Client actif qui aime essayer"], ["Especialistas em promoção ou a oferta do dia.", "Experts en promo ou l’offre du jour."]]
    ] } },
    { p: ["Leia cada linha assim: <b>[para quem]</b> preço dos primeiros minutos (preço por minuto a seguir) <b>||</b> canais. A etiqueta verde «promo» indica uma oferta promocional. Os preços para telemóvel aparecem numa linha própria.", "Lis chaque ligne ainsi : <b>[pour qui]</b> prix des premières minutes (prix à la minute ensuite) <b>||</b> canaux. L’étiquette verte « promo » indique une offre promotionnelle. Les prix pour mobile apparaissent sur une ligne à part."] },
    { warn: ["Pacote «sem ultrapassagem» (França): a consulta para no fim do tempo comprado. Diga-o ao cliente antes.", "Forfait « sans dépassement » (France) : la consultation s’arrête à la fin du temps acheté. Dis-le au client avant."] },
    { tip: ["Portugal: se o cliente não vê Multibanco ou MB Way, o país de faturação está errado. Bloco Compte → «Adresses» → «Éditer» → país Portugal → «Enregistrer».", "Portugal : si le client ne voit pas Multibanco ou MB Way, le pays de facturation est faux. Bloc Compte → « Adresses » → « Éditer » → pays Portugal → « Enregistrer »."] }
  ] },
  { t: ["Casos práticos", "Cas pratiques"], b: [
    { case: { s: ["Prospect em Portugal, vai ligar do telemóvel e quer 15 minutos.", "Prospect au Portugal, il appellera depuis son mobile et veut 15 minutes."], q: ["Que lhe diz?", "Que lui dis-tu ?"], a: [
      ["Boas-vindas telemóvel: 3€ pelos 10 primeiros minutos, depois 1,60€/min.", "Bienvenue mobile : 3€ les 10 premières minutes, puis 1,60€/min."],
      ["Ou, para 15 minutos certos: 11€/15 min.", "Ou, pour 15 minutes pile : 11€/15 min."],
      ["Deixar o cliente escolher e confirmar o canal.", "Laisser le client choisir et confirmer le canal."]
    ] } },
    { case: { s: ["Cliente do anuário francês quer uma especialista espanhola.", "Client de l’annuaire français veut une experte espagnole."], q: ["Como faz?", "Comment fais-tu ?"], a: [
      ["Na página «Lancer une consultation», abrir «+ FILTRES».", "Sur la page « Lancer une consultation », ouvrir « + FILTRES »."],
      ["Mudar «Annuaire de l’expert» para Espanha: aparecem as ofertas e especialistas desse país.", "Changer « Annuaire de l’expert » en Espagne : les offres et experts de ce pays apparaissent."]
    ] } }
  ] }],
  quiz: [
    { q: ["Pacote «sem ultrapassagem» acaba. O que acontece?", "Forfait « sans dépassement » terminé. Que se passe-t-il ?"], o: [["A consulta para", "La consultation s’arrête"], ["Continua à tarifa por minuto", "Elle continue au tarif minute"]], a: 0, w: ["Sem ultrapassagem = para no fim.", "Sans dépassement = arrêt à la fin."] },
    { q: ["O cliente português não vê MB Way.", "Le client portugais ne voit pas MB Way."], o: [["Mudo o país de faturação para Portugal", "Je change le pays de facturation en Portugal"], ["Envio ao N2", "J’envoie au N2"]], a: 0, w: ["Adresses → Éditer → Portugal.", "Adresses → Éditer → Portugal."] }
  ]
},

/* ---------------- 7. MER ---------------- */
mer: { lessons: [
  { t: ["Em detalhe: o que acontece depois de «Lancer»", "En détail : ce qui se passe après « Lancer »"], b: [
    { steps: [
      { t: ["Música de espera", "Musique d’attente"], p: ["Assim que lança uma MER direta, ouve música: fique em linha.", "Dès que tu lances une MER directe, tu entends une musique : reste en ligne."] },
      { t: ["O servidor de voz guia-o", "Le serveur vocal te guide"], p: ["Anuncia as etapas da ligação.", "Il annonce les étapes de la connexion."] },
      { t: ["Sucesso", "Succès"], p: ["«A ligação foi estabelecida» → pode desligar.", "« La mise en relation est établie » → tu peux raccrocher."] },
      { t: ["Falha", "Échec"], p: ["«A ligação falhou, vai voltar ao contacto com o cliente» → retoma o cliente, pode relançar e vê o motivo em «Transações em curso».", "« La mise en relation a échoué, vous allez revenir au client » → tu reprends le client, tu peux relancer et tu vois le motif dans « Transactions en cours »."] }
    ] },
    { p: ["<b>Verificar antes de «Lancer»</b>: nome do especialista, pseudónimo do cliente, número de telefone (confirmar em voz alta), canal, tarifa escolhida e o anuário (importante se o especialista estiver em vários anuários).", "<b>À vérifier avant « Lancer »</b> : nom de l’expert, pseudo du client, numéro de téléphone (confirmer à voix haute), canal, tarif choisi et l’annuaire (important si l’expert est sur plusieurs annuaires)."] },
    { p: ["<b>Chat e vídeo</b>: depois de lançar, pergunte se prefere o link por e-mail ou por SMS (campos pré-preenchidos e editáveis). Uma mensagem no topo confirma o envio. O cliente recebe também uma chamada automática que o convida a ir ao espaço cliente.", "<b>Chat et vidéo</b> : après le lancement, demande s’il préfère le lien par e-mail ou par SMS (champs pré-remplis et modifiables). Un message en haut confirme l’envoi. Le client reçoit aussi un appel automatique qui l’invite à aller dans son espace."] },
    { warn: ["MER indireta + telemóvel = sobretaxa de 0,20€/min (0,30 USD/min). Lançar fora da página Bobi integrada no Graam torna a MER indireta: evite.", "MER indirecte + mobile = surtaxe de 0,20€/min (0,30 USD/min). Lancer hors de la page Bobi intégrée dans Graam rend la MER indirecte : à éviter."] }
  ] },
  { t: ["Casos práticos", "Cas pratiques"], b: [
    { case: { s: ["Cliente fiel quer a sua especialista favorita, que está ocupada (laranja).", "Client fidèle veut son experte favorite, qui est occupée (orange)."], q: ["O que propõe?", "Que proposes-tu ?"], a: [
      ["Explicar que ela está em consulta: MER indireta, o cliente fica na fila e é chamado na vez dele (até 2h).", "Expliquer qu’elle est en consultation : MER indirecte, le client est en file et rappelé à son tour (jusqu’à 2h)."],
      ["Avisar da sobretaxa se for chamado no telemóvel.", "Prévenir de la surtaxe s’il est rappelé sur mobile."],
      ["Ou propor um RDV com ela, ou outra especialista disponível agora.", "Ou proposer un RDV avec elle, ou une autre experte disponible maintenant."]
    ] } },
    { case: { s: ["Lança um chat. O cliente diz que não recebeu nada.", "Tu lances un chat. Le client dit qu’il n’a rien reçu."], q: ["O que verifica?", "Que vérifies-tu ?"], a: [
      ["O e-mail ou o número usado (campos editáveis) e o spam.", "L’e-mail ou le numéro utilisé (champs modifiables) et les spams."],
      ["Reenviar pelo outro canal (SMS em vez de e-mail).", "Renvoyer par l’autre canal (SMS au lieu d’e-mail)."],
      ["Ver o estado da sessão em «Transações em curso».", "Voir le statut de la session dans « Transactions en cours »."]
    ] } }
  ] }],
  quiz: [
    { q: ["A voz diz «A ligação falhou». O que faz?", "La voix dit « La mise en relation a échoué ». Que fais-tu ?"], o: [["Retomo o cliente e vejo o motivo nas transações em curso", "Je reprends le client et je regarde le motif dans les transactions en cours"], ["Desligo", "Je raccroche"]], a: 0, w: ["Nunca deixar o cliente sem solução.", "Ne jamais laisser le client sans solution."] },
    { q: ["Porque confirmar o anuário antes de lançar?", "Pourquoi confirmer l’annuaire avant de lancer ?"], o: [["O especialista pode estar em vários anuários (ofertas diferentes)", "L’expert peut être sur plusieurs annuaires (offres différentes)"], ["Não é preciso", "Ce n’est pas utile"]], a: 0, w: ["O anuário muda as ofertas e a tarifa.", "L’annuaire change les offres et le tarif."] }
  ]
},

/* ---------------- 8. Erreurs ---------------- */
erreurs: { lessons: [
  { t: ["Em detalhe: as famílias de erros", "En détail : les familles d’erreurs"], b: [
    { table: { h: [["Família", "Famille"], ["Códigos", "Codes"], ["O que fazer", "Que faire"]], r: [
      [["Bloqueio Wengo", "Blocage Wengo"], ["2024, 2025, 2026, 10128, 10570, 10601, 10602, 10608, 120020", "2024, 2025, 2026, 10128, 10570, 10601, 10602, 10608, 120020"], ["Ler o código; muitas vezes outro meio de pagamento; contas suspensas/bloqueadas → informar e reclamação N2.", "Lire le code ; souvent un autre moyen de paiement ; comptes suspendus/bloqués → informer et réclamation N2."]],
      [["Erro do cartão (banco)", "Erreur carte (banque)"], ["39009, 39100, 39103, 39104, 39111, 39118", "39009, 39100, 39103, 39104, 39111, 39118"], ["Tentar de novo se fizer sentido, outro meio, ou o cliente fala com o banco.", "Réessayer si ça a du sens, autre moyen, ou le client appelle sa banque."]],
      [["Fraude / risco", "Fraude / risque"], ["2003, 2009, 2029, 2030, 2033, 2040, 2041, 2042, 120021, 120026", "2003, 2009, 2029, 2030, 2033, 2040, 2041, 2042, 120021, 120026"], ["Não insistir. Ver o Risk e as contas primas; explicar sem acusar; se necessário, N2.", "Ne pas insister. Regarder Risk et les comptes cousins ; expliquer sans accuser ; si besoin, N2."]]
    ] } },
    { p: ["Ao falhar uma MER, o Serviço Vigie mostra o motivo e com que especialista. Leia-o antes de responder ao cliente.", "Quand une MER échoue, le service Vigie montre le motif et avec quel expert. Lis-le avant de répondre au client."] },
    { key: ["Depois de qualquer erro, proponha logo uma alternativa: um favorito disponível, um especialista que o cliente ainda não consultou, ou um RDV.", "Après toute erreur, propose tout de suite une alternative : un favori disponible, un expert que le client n’a jamais consulté, ou un RDV."] }
  ] },
  { t: ["Casos práticos", "Cas pratiques"], b: [
    { case: { s: ["Erro 39100 com um cliente que quer pagar pela Wallet.", "Erreur 39100 avec un client qui veut payer par Wallet."], q: ["O que explica?", "Qu’expliques-tu ?"], a: [
      ["Fundos insuficientes: é preciso o equivalente a pelo menos 10 minutos de consulta.", "Fonds insuffisants : il faut l’équivalent d’au moins 10 minutes de consultation."],
      ["Propor recarregar a Wallet (cartão da conta, PayByLink ou Multibanco) ou adicionar um cartão.", "Proposer de recharger le Wallet (carte du compte, PayByLink ou Multibanco) ou d’ajouter une carte."]
    ] } },
    { case: { s: ["Erro 120020 num prospect que quer a oferta de boas-vindas.", "Erreur 120020 sur un prospect qui veut l’offre de bienvenue."], q: ["O que significa e o que faz?", "Que signifie-t-il et que fais-tu ?"], a: [
      ["A oferta já foi usada noutra conta (mesmo telefone).", "L’offre a déjà été utilisée sur un autre compte (même téléphone)."],
      ["Explicar com calma que a oferta é uma por pessoa e propor a tarifa por minuto ou um pacote.", "Expliquer calmement que l’offre est unique par personne et proposer le tarif minute ou un forfait."]
    ] } }
  ] }],
  quiz: [
    { q: ["Erro 39103?", "Erreur 39103 ?"], o: [["CVC inválido: voltar a digitar", "CVC invalide : le ressaisir"], ["Cartão expirado", "Carte expirée"]], a: 0, w: ["Se persistir: outro meio ou o banco.", "Si ça persiste : autre moyen ou la banque."] },
    { q: ["Erro 2040 (dívidas em contas primas).", "Erreur 2040 (impayés sur comptes cousins)."], o: [["Vejo o Risk e as contas primas", "Je regarde Risk et les comptes cousins"], ["Relanço até passar", "Je relance jusqu’à ce que ça passe"]], a: 0, w: ["Erros de risco: não insistir.", "Erreurs de risque : ne pas insister."] }
  ]
},

/* ---------------- 9. RDV ---------------- */
rdv: { lessons: [
  { t: ["Em detalhe: preencher o RDV sem erros", "En détail : remplir le RDV sans erreur"], b: [
    { table: { h: [["Campo", "Champ"], ["Como preencher", "Comment le remplir"]], r: [
      [["Pseudónimo", "Pseudo"], ["Pré-preenchido.", "Pré-rempli."]],
      [["Data e hora", "Date et heure"], ["As disponibilidades aparecem sozinhas. Verifique o fuso do cliente (aparece numa chamada recebida). Fora da disponibilidade: possível, mas o especialista tem de validar.", "Les disponibilités s’affichent seules. Vérifie le fuseau du client (affiché sur un appel entrant). Hors disponibilité : possible, mais l’expert doit valider."]],
      [["Telefone", "Téléphone"], ["Repetir o número em voz alta. Telemóvel = +0,20€/min (não na rede fixa).", "Répéter le numéro à voix haute. Mobile = +0,20€/min (pas sur un fixe)."]],
      [["Canal", "Canal"], ["Telefone, chat ou vídeo.", "Téléphone, chat ou vidéo."]],
      [["Mensagem ao especialista", "Message à l’expert"], ["Fora da disponibilidade é pré-preenchida; pode modificá-la a pedido do cliente.", "Hors disponibilité elle est pré-remplie ; tu peux la modifier à la demande du client."]],
      [["Código promocional", "Code promo"], ["Se escolheu uma oferta, ela deve aparecer aqui. Senão, repita a operação antes de confirmar.", "Si tu as choisi une offre, elle doit apparaître ici. Sinon, recommence avant de confirmer."]]
    ] } },
    { p: ["<b>Boas práticas</b>: explicar sempre as etapas (sobretudo se o especialista tem de validar); avisar logo se o RDV está fora da disponibilidade; lembrar que o RDV aparece no espaço cliente («Os meus especialistas e eu» → «As minhas marcações») e que chega um e-mail; atenção aos fusos (EUA, Inglaterra, América Latina, Portugal, Turquia).", "<b>Bonnes pratiques</b> : toujours expliquer les étapes (surtout si l’expert doit valider) ; prévenir tout de suite si le RDV est hors disponibilité ; rappeler que le RDV apparaît dans l’espace client (« Mes experts et moi » → « Mes rendez-vous ») et qu’un e-mail arrive ; attention aux fuseaux (USA, Angleterre, Amérique latine, Portugal, Turquie)."] }
  ] },
  { t: ["Casos práticos", "Cas pratiques"], b: [
    { case: { s: ["Cliente em São Paulo quer um RDV amanhã às 20h, hora dela.", "Cliente à São Paulo veut un RDV demain à 20h, son heure."], q: ["O que verifica?", "Que vérifies-tu ?"], a: [
      ["O fuso: o Bobi está na hora de Paris; calcular a hora certa a marcar.", "Le fuseau : Bobi est à l’heure de Paris ; calculer la bonne heure à saisir."],
      ["Se essa hora está no horário do especialista: menos de 48h + disponível = automático.", "Si cette heure est dans les horaires de l’expert : moins de 48h + dispo = automatique."],
      ["Repetir a hora ao cliente na hora local dele.", "Répéter l’heure au client dans son heure locale."]
    ] } },
    { case: { s: ["RDV daqui a 4 dias, fora do horário do especialista.", "RDV dans 4 jours, hors horaires de l’expert."], q: ["O que diz ao cliente?", "Que dis-tu au client ?"], a: [
      ["O pedido foi enviado, mas o especialista tem de o aceitar.", "La demande est envoyée, mais l’expert doit l’accepter."],
      ["Sem validação, é anulado automaticamente 15 min antes.", "Sans validation, il est annulé automatiquement 15 min avant."],
      ["Vai receber um e-mail e pode ver o estado no espaço cliente.", "Il recevra un e-mail et peut voir le statut dans son espace."]
    ] } }
  ] }],
  quiz: [
    { q: ["Escolheu uma oferta mas ela não aparece em «código promocional».", "Tu as choisi une offre mais elle n’apparaît pas dans « code promo »."], o: [["Repito a operação antes de confirmar", "Je recommence avant de confirmer"], ["Confirmo na mesma", "Je confirme quand même"]], a: 0, w: ["Senão o cliente paga a tarifa normal.", "Sinon le client paie le tarif normal."] },
    { q: ["Onde vê o cliente os seus RDV?", "Où le client voit-il ses RDV ?"], o: [["«Os meus especialistas e eu» → «As minhas marcações»", "« Mes experts et moi » → « Mes rendez-vous »"], ["Só por e-mail", "Seulement par e-mail"]], a: 0, w: ["E recebe também um e-mail.", "Et il reçoit aussi un e-mail."] }
  ]
},

/* ---------------- 10. Suivi ---------------- */
suivi: { lessons: [
  { t: ["Em detalhe: ler uma linha de «Transações em curso»", "En détail : lire une ligne des « Transactions en cours »"], b: [
    { table: { h: [["Coluna", "Colonne"], ["O que lhe diz", "Ce qu’elle te dit"]], r: [
      [["Data", "Date"], ["Hora do pedido (hora de Paris).", "Heure de la demande (heure de Paris)."]],
      [["Cliente", "Client"], ["Pseudónimo e estatuto (VIP, Regular, Prospect).", "Pseudo et statut (VIP, Régulier, Prospect)."]],
      [["Produto", "Produit"], ["Chamada, chat, vídeo, RDV.", "Appel, chat, vidéo, RDV."]],
      [["Especialista / Em pausa", "Expert / En pause"], ["Com quem e se o especialista está em pausa (não relançar se estiver).", "Avec qui et si l’expert est en pause (ne pas relancer s’il l’est)."]],
      [["Estado", "État"], ["Pending, Hunt, Bridged, Failed, Reset, Demandé (RDV).", "Pending, Hunt, Bridged, Failed, Reset, Demandé (RDV)."]],
      [["Posição", "Position"], ["Lugar na fila do especialista.", "Place dans la file de l’expert."]],
      [["Tentativas", "Tentatives"], ["Quantas vezes o sistema já tentou ligar.", "Combien de fois le système a déjà essayé."]],
      [["Bridged / Raison / Durée autorisée", "Bridged / Raison / Durée autorisée"], ["Início real, estado atual e duração prevista: adicione sempre estas 3 colunas.", "Début réel, statut actuel et durée prévue : ajoute toujours ces 3 colonnes."]]
    ] } },
    { p: ["O tempo de espera depende do número de clientes na fila e da duração das consultas em curso. Informe sempre o cliente da posição e explique isto.", "Le temps d’attente dépend du nombre de clients dans la file et de la durée des consultations en cours. Informe toujours le client de sa position et explique-le."] },
    { warn: ["Antes de cancelar um pedido a pedido do cliente, proponha sempre um RDV com o especialista. E só cancele com bloqueio grave (todas as transações deste cliente ou especialista com problema) ou se o cliente pedir.", "Avant d’annuler une demande à la demande du client, propose toujours un RDV avec l’expert. Et n’annule qu’en cas de blocage grave (toutes les transactions de ce client ou expert en échec) ou si le client le demande."] }
  ] },
  { t: ["Casos práticos", "Cas pratiques"], b: [
    { case: { s: ["Cliente em posição 3 há 40 minutos, especialista disponível. O cliente está impaciente.", "Client en position 3 depuis 40 minutes, expert disponible. Le client s’impatiente."], q: ["Relança?", "Tu relances ?"], a: [
      ["Não: só se relança em posição 1.", "Non : on ne relance qu’en position 1."],
      ["Explicar a posição e que a espera depende das consultas em curso.", "Expliquer la position et que l’attente dépend des consultations en cours."],
      ["Se não quiser esperar: outro especialista disponível agora ou um RDV.", "S’il ne veut pas attendre : un autre expert disponible maintenant ou un RDV."]
    ] } },
    { case: { s: ["Cliente quer mudar o RDV de amanhã para sexta-feira.", "Cliente veut déplacer son RDV de demain à vendredi."], q: ["Como faz?", "Comment fais-tu ?"], a: [
      ["Ações → RDV em curso → clicar no n.º do RDV.", "Actions → RDV en cours → cliquer sur le n° du RDV."],
      ["«Modifier le rendez-vous à la place du client»: nova data e hora, telefone, mensagem → «Envoyer».", "« Modifier le rendez-vous à la place du client » : nouvelle date et heure, téléphone, message → « Envoyer »."],
      ["Avisar que, se for fora da disponibilidade ou a mais de 48h, o especialista tem de validar.", "Prévenir que, si c’est hors dispo ou à plus de 48h, l’expert doit valider."]
    ] } }
  ] }],
  quiz: [
    { q: ["Especialista «em pausa» e cliente em posição 1 há 25 min.", "Expert « en pause » et client en position 1 depuis 25 min."], o: [["Não relanço: explico e proponho alternativa", "Je ne relance pas : j’explique et je propose une alternative"], ["Relanço", "Je relance"]], a: 0, w: ["A regra dos 20 min vale só se o especialista não estiver em pausa.", "La règle des 20 min vaut seulement si l’expert n’est pas en pause."] },
    { q: ["Estado do RDV «Demandé».", "Statut de RDV « Demandé »."], o: [["Aguarda validação do especialista", "Attend la validation de l’expert"], ["Já realizado", "Déjà effectué"]], a: 0, w: ["Demandé = requested.", "Demandé = requested."] }
  ]
},

/* ---------------- 11. Paiement ---------------- */
paiement: { lessons: [
  { t: ["Em detalhe: cartão, link ou mensagem?", "En détail : carte, lien ou message ?"], b: [
    { table: { h: [["Situação", "Situation"], ["Melhor solução", "Meilleure solution"], ["Porquê", "Pourquoi"]], r: [
      [["Cliente regular com cartão na conta", "Client régulier avec une carte sur le compte"], ["Usar o cartão da conta", "Utiliser la carte du compte"], ["Mais rápido.", "Plus rapide."]],
      [["Cliente com o cartão à mão e à vontade", "Client avec sa carte en main et à l’aise"], ["Adicionar o cartão por telefone (SVI seguro)", "Ajouter la carte par téléphone (SVI sécurisé)"], ["Pagamento imediato, consulta sem interrupção.", "Paiement immédiat, consultation sans interruption."]],
      [["Sem cartão registado / quer pagar um montante fixo", "Pas de carte enregistrée / veut payer un montant fixe"], ["PayByLink (recarga da Wallet)", "PayByLink (recharge du Wallet)"], ["Link seguro, sem manipular dados de cartão; o montante fica definido e a consulta para quando o saldo acaba.", "Lien sécurisé, pas de manipulation de carte ; le montant est fixé et la consultation s’arrête quand le solde est épuisé."]],
      [["Não quer dar o cartão por telefone", "Ne veut pas donner sa carte au téléphone"], ["Mensagem «adicionar um cartão» ou «recarregar o porta-moedas»", "Message « ajouter une carte » ou « recharger le porte-monnaie »"], ["O cliente faz tudo sozinho no espaço cliente.", "Le client fait tout seul dans son espace."]]
    ] } },
    { p: ["<b>Para que serve cada etapa do cartão</b>: parar a gravação protege os dados; o SVI seguro deixa o cliente digitar a validade e o CVV no teclado sem que o conselheiro os ouça; retomar o formulário só se o cliente bloquear; uma autorização de 0,00€ valida o cartão.", "<b>À quoi sert chaque étape de la carte</b> : couper l’enregistrement protège les données ; le SVI sécurisé laisse le client taper la date et le CVV au clavier sans que le conseiller les entende ; reprendre le formulaire seulement si le client bloque ; une autorisation de 0,00€ valide la carte."] },
    { key: ["Pergunte sempre se o cliente quer guardar o cartão. Sem cartão guardado, terá de introduzir os dados antes de cada consulta.", "Demande toujours si le client veut garder sa carte. Sans carte enregistrée, il devra ressaisir ses données avant chaque consultation."] }
  ] },
  { t: ["Casos práticos", "Cas pratiques"], b: [
    { case: { s: ["Durante o SVI, o cliente não consegue digitar o CVV.", "Pendant le SVI, le client n’arrive pas à taper le CVV."], q: ["O que faz?", "Que fais-tu ?"], a: [
      ["Ficar em linha: a chamada volta para si.", "Rester en ligne : l’appel revient vers toi."],
      ["«Reprendre la main sur le formulaire», introduzir os dados e «Valider».", "« Reprendre la main sur le formulaire », saisir les données et « Valider »."],
      ["A gravação tem de estar parada.", "L’enregistrement doit être coupé."]
    ] } },
    { case: { s: ["Cliente quer apagar o cartão mas tem uma consulta em espera.", "Le client veut supprimer sa carte mais a une consultation en attente."], q: ["O que lhe diz?", "Que lui dis-tu ?"], a: [
      ["Não é possível apagar com um pedido em curso.", "Impossible de supprimer avec une demande en cours."],
      ["Repetir o pedido depois da consulta (ou cancelar o pedido se ele quiser).", "Refaire la demande après la consultation (ou annuler la demande s’il le souhaite)."]
    ] } }
  ] }],
  quiz: [
    { q: ["Para que serve o SVI seguro?", "À quoi sert le SVI sécurisé ?"], o: [["O cliente digita validade e CVV sem que o conselheiro ouça", "Le client tape date et CVV sans que le conseiller entende"], ["Gravar a chamada", "Enregistrer l’appel"]], a: 0, w: ["Segurança dos dados bancários.", "Sécurité des données bancaires."] },
    { q: ["Cliente quer pagar exatamente 30€, sem cartão guardado.", "Client veut payer exactement 30€, sans carte enregistrée."], o: [["PayByLink de 30€", "PayByLink de 30€"], ["Pay as you go", "Pay as you go"]], a: 0, w: ["O montante fica definido pelo link.", "Le montant est fixé par le lien."] }
  ]
},

/* ---------------- 12. Wallet ---------------- */
wallet: { lessons: [
  { t: ["Em detalhe: verificar um crédito em 4 pontos", "En détail : vérifier un crédit en 4 points"], b: [
    { steps: [
      { t: ["Há saldo?", "Y a-t-il du solde ?"], p: ["Valor atual maior que 0 = utilizável; 0 = consumido.", "Valeur actuelle supérieure à 0 = utilisable ; 0 = consommé."] },
      { t: ["Está válido?", "Est-il valide ?"], p: ["Data de validade ultrapassada = já não se usa.", "Date de validité dépassée = inutilisable."] },
      { t: ["Que restrições?", "Quelles contraintes ?"], p: ["Só um especialista? Só chamada, ou chamada e chat? Uma única transação? Combinável com promo (Promo verde) ou não (Promo vermelho)?", "Un seul expert ? Appel seulement, ou appel et chat ? Une seule transaction ? Cumulable avec une promo (Promo vert) ou non (Promo rouge) ?"] },
      { t: ["Está bloqueado?", "Est-il bloqué ?"], p: ["«Autorisations du Wallet»: um pedido pendente reserva 10 min de saldo.", "« Autorisations du Wallet » : une demande en attente réserve 10 min de solde."] }
    ] },
    { p: ["<b>Moedas</b>: escolha sempre a moeda certa antes de uma transação. EUR para especialistas na Europa; USD para especialistas latinos (clientes latino-americanos).", "<b>Devises</b> : choisis toujours la bonne devise avant une transaction. EUR pour les experts en Europe ; USD pour les experts latinos (clients latino-américains)."] },
    { warn: ["Um presente de especialista só serve para consultas à tarifa por minuto, e não se combina com outros vales nem promoções.", "Un cadeau d’expert ne sert qu’aux consultations au tarif minute, et ne se cumule pas avec d’autres bons ni des promos."] }
  ] },
  { t: ["Casos práticos", "Cas pratiques"], b: [
    { case: { s: ["Cliente tem um presente de 5 min da especialista Luna e quer usá-lo com a especialista Maeve.", "Client a un cadeau de 5 min de l’experte Luna et veut l’utiliser avec l’experte Maeve."], q: ["É possível?", "Est-ce possible ?"], a: [
      ["Verificar «Utilisation limitée à l’Expert» na descrição do crédito.", "Vérifier « Utilisation limitée à l’Expert » dans la description du crédit."],
      ["Se está limitado à Luna, só funciona com ela: propor uma consulta com a Luna (botões ao lado).", "S’il est limité à Luna, il ne marche qu’avec elle : proposer une consultation avec Luna (boutons à côté)."]
    ] } },
    { case: { s: ["Cliente recarregou 30€ e quer lançar uma segunda consulta enquanto a primeira está em espera.", "Client a rechargé 30€ et veut lancer une deuxième consultation pendant que la première est en attente."], q: ["O que explica?", "Qu’expliques-tu ?"], a: [
      ["O primeiro pedido bloqueia o saldo (10 min reservados).", "La première demande bloque le solde (10 min réservées)."],
      ["Para outra consulta, recarregar mais ou cancelar o pedido pendente para libertar o saldo.", "Pour une autre consultation, recharger plus ou annuler la demande en attente pour libérer le solde."]
    ] } }
  ] }],
  quiz: [
    { q: ["Cliente latino com especialista latino. Que Wallet?", "Client latino avec un expert latino. Quel Wallet ?"], o: [["USD", "USD"], ["EUR", "EUR"]], a: 0, w: ["A Wallet EUR é só para especialistas na Europa.", "Le Wallet EUR est seulement pour les experts en Europe."] },
    { q: ["Um crédito «Utilisable pour 1 consultation uniquement» de 10€; a consulta custou 6€.", "Un crédit « Utilisable pour 1 consultation uniquement » de 10€ ; la consultation a coûté 6€."], o: [["O crédito fica consumido nessa consulta", "Le crédit est consommé sur cette consultation"], ["Sobram 4€ para outra", "Il reste 4€ pour une autre"]], a: 0, w: ["Uma única transação.", "Une seule transaction."] }
  ]
},

/* ---------------- 13. Facturation (Pay as you go…) ---------------- */
facturation: { lessons: [
  { t: ["Em detalhe: regularizar sem erro", "En détail : régulariser sans erreur"], b: [
    { steps: [
      { t: ["Ler o resumo", "Lire le résumé"], p: ["N.º de faturas, montante em dívida (não o total das faturas), antiguidade, última tentativa e o motivo.", "Nombre de factures, montant dû (pas le total des factures), ancienneté, dernière tentative et son motif."] },
      { t: ["Ler a ação recomendada", "Lire l’action recommandée"], p: ["Ex.: fraude do banco → não voltar a tentar o mesmo cartão; fundos insuficientes → começar pela fatura mais pequena.", "Ex. : fraude banque → ne pas retenter la même carte ; fonds insuffisants → commencer par la plus petite facture."] },
      { t: ["Escolher o motivo", "Choisir le motif"], p: ["O cliente enviou um e-mail / está em linha / outro (precisar).", "Le client a envoyé un mail / il est en ligne / autre (préciser)."] },
      { t: ["Selecionar faturas e meio", "Sélectionner factures et moyen"], p: ["Wallet ou cartão; para outro cartão, «Basculer» os fluxos.", "Wallet ou carte ; pour une autre carte, « Basculer » les flux."] },
      { t: ["Tentar e informar", "Tenter et informer"], p: ["Avisar que o débito é imediato.", "Prévenir que le débit est immédiat."] }
    ] },
    { p: ["<b>Pedido de autorização</b>: quando a MER é validada, o sistema verifica se a conta poderá ser debitada no fim da consulta. Se a consulta não acontecer, é anulado (pode aparecer como reembolso ou a linha desaparece), até 30 dias úteis. Recusado = «Fundos insuficientes»: o cliente verifica a conta ou junta outro meio.", "<b>Demande d’autorisation</b> : quand la MER est validée, le système vérifie que le compte pourra être débité en fin de consultation. Si la consultation n’a pas lieu, elle est annulée (peut apparaître comme un remboursement ou la ligne disparaît), jusqu’à 30 jours ouvrés. Refusée = « Fonds insuffisants » : le client vérifie son compte ou ajoute un autre moyen."] },
    { warn: ["Faturas em chargeback já não aceitam cartão: só transferência, e só o N2 regulariza. O cliente só volta a consultar depois disso.", "Les factures en chargeback n’acceptent plus la carte : seulement le virement, et seul le N2 régularise. Le client ne peut reconsulter qu’après."] }
  ] },
  { t: ["Casos práticos", "Cas pratiques"], b: [
    { case: { s: ["Cliente: «Vejo 300€ em dívida no e-mail, mas só me faltam pagar 40€!»", "Client : « Je vois 300€ d’impayé dans l’e-mail, mais il ne me reste que 40€ à payer ! »"], q: ["Quem tem razão?", "Qui a raison ?"], a: [
      ["Provavelmente o cliente: 300€ é o total das faturas com dívida, não o valor em dívida.", "Sûrement le client : 300€ est le total des factures avec impayé, pas le montant dû."],
      ["Ler o montante real em dívida no resumo e explicá-lo.", "Lire le montant réellement dû dans le résumé et l’expliquer."]
    ] } },
    { case: { s: ["Cliente com Pay as you go = NÃO quer que a consulta continue no cartão quando a Wallet acabar.", "Client avec Pay as you go = NON veut que la consultation continue sur sa carte quand le Wallet est vide."], q: ["O que faz?", "Que fais-tu ?"], a: [
      ["Explicar as duas opções: SIM = Wallet e depois cartão, sem corte; NÃO = para a 0€.", "Expliquer les deux options : OUI = Wallet puis carte, sans coupure ; NON = arrêt à 0€."],
      ["Com o acordo dele, mudar para SIM (precisa de um cartão na conta).", "Avec son accord, passer à OUI (il faut une carte sur le compte)."]
    ] } }
  ] }],
  quiz: [
    { q: ["Ação recomendada «Fonds insuffisants». Por onde começa?", "Action recommandée « Fonds insuffisants ». Par où commencer ?"], o: [["Pela fatura mais pequena", "Par la plus petite facture"], ["Por todas de uma vez", "Par toutes à la fois"]], a: 0, w: ["Mais hipóteses de passar.", "Plus de chances de passer."] },
    { q: ["Quanto tempo pode levar a anulação de um pedido de autorização?", "Combien de temps peut prendre l’annulation d’une demande d’autorisation ?"], o: [["Até 30 dias úteis", "Jusqu’à 30 jours ouvrés"], ["24h", "24h"]], a: 0, w: ["Depende do banco.", "Ça dépend de la banque."] }
  ]
},

/* ---------------- 14. Recouvrement ---------------- */
recouvrement: { lessons: [
  { t: ["Em detalhe: a chamada de cobrança passo a passo", "En détail : l’appel de recouvrement pas à pas"], b: [
    { script: [
      { s: ["«Bom dia, [Nome], fala [Nome] do serviço de cobranças da Wengo. Ligo por causa de faturas que ainda estão por regularizar.»", "« Bonjour [Prénom], [Prénom] du service recouvrement de Wengo. Je vous appelle au sujet de factures qui restent à régulariser. »"], tag: ["Apresentar-se", "Se présenter"] },
      { s: ["«Pode regularizar agora com cartão ou recarregando o porta-moedas. Também é possível por transferência.»", "« Vous pouvez régulariser maintenant par carte ou en rechargeant votre porte-monnaie. C’est aussi possible par virement. »"], tag: ["Pedir a regularização imediata", "Demander la régularisation immédiate"] },
      { s: ["«Em que data concreta pode pagar? Vou programar uma chamada para esse dia.»", "« À quelle date précise pouvez-vous payer ? Je vais programmer un appel ce jour-là. »"], tag: ["Se for mais tarde", "Si c’est plus tard"] }
    ] },
    { p: ["<b>Meios aceites</b>: cartão, recarga da Wallet, transferência (IBAN enviado pelo Bobi; o comprovativo vai para o e-mail de cobranças do país) e cheque só em França (MyBestPro – 75 rue d’Amsterdam – 75008 Paris, com o pseudónimo no verso).", "<b>Moyens acceptés</b> : carte, recharge du Wallet, virement (IBAN envoyé via Bobi ; le justificatif va à l’e-mail recouvrement du pays) et chèque seulement en France (MyBestPro – 75 rue d’Amsterdam – 75008 Paris, avec le pseudo au dos)."] },
    { p: ["<b>Prestações</b>: uma chamada programada por data (ex.: 05/11 e 05/12), e o robô de cobrança desativado até à última data, para que seja o conselheiro a cobrar nas datas combinadas.", "<b>Mensualités</b> : un appel programmé par date (ex. 05/11 et 05/12), et le robot de recouvrement désactivé jusqu’à la dernière date, pour que ce soit le conseiller qui prélève aux dates convenues."] },
    { warn: ["Cada tentativa manual custa dinheiro à Wengo (já existe um sistema automático): só com contacto real com o cliente ou e-mail recebido.", "Chaque tentative manuelle coûte de l’argent à Wengo (il existe déjà un système automatique) : seulement avec un vrai contact client ou un e-mail reçu."] }
  ] },
  { t: ["Casos práticos", "Cas pratiques"], b: [
    { case: { s: ["Cliente em França: «Pago 60€ em 3 vezes, a partir do dia 10.»", "Client en France : « Je paie 60€ en 3 fois, à partir du 10. »"], q: ["O que faz no Bobi?", "Que fais-tu dans Bobi ?"], a: [
      ["Programar 3 chamadas (10 deste mês, 10 do seguinte, 10 do outro): motivo Recouvrement, «à une date précise», «vers moi».", "Programmer 3 appels (le 10 de ce mois, du suivant, du suivant) : motif Recouvrement, « à une date précise », « vers moi »."],
      ["Desativar o robô até à data da última prestação.", "Désactiver le robot jusqu’à la date de la dernière mensualité."],
      ["Deixar uma nota de cobrança com o acordo.", "Laisser une note de recouvrement avec l’accord."]
    ] } },
    { case: { s: ["Ninguém atende, cai na caixa de voz.", "Personne ne répond, ça tombe sur la messagerie."], q: ["O que faz a seguir?", "Que fais-tu ensuite ?"], a: [
      ["Anular a pausa pós-chamada de 1 min 30 manualmente.", "Annuler la pause post-appel de 1 min 30 manuellement."],
      ["Qualificar a chamada no Graam (sem nota duplicada no Bobi).", "Qualifier l’appel dans Graam (pas de note en double dans Bobi)."]
    ] } }
  ] }],
  quiz: [
    { q: ["Cheque para regularizar: em que país?", "Chèque pour régulariser : dans quel pays ?"], o: [["Só França", "Seulement la France"], ["Todos", "Tous"]], a: 0, w: ["Com o pseudónimo no verso.", "Avec le pseudo au dos."] },
    { q: ["Porque não fazer tentativas manuais sem contacto?", "Pourquoi ne pas faire de tentatives manuelles sans contact ?"], o: [["Custam dinheiro à Wengo e o robô já tenta", "Ça coûte à Wengo et le robot essaie déjà"], ["São proibidas", "C’est interdit"]], a: 0, w: ["Justificar sempre o motivo.", "Toujours justifier le motif."] }
  ]
},

/* ---------------- 15. Offres ---------------- */
offres: { lessons: [
  { t: ["Em detalhe: condições de cada oferta", "En détail : conditions de chaque offre"], b: [
    { table: { h: [["Oferta", "Offre"], ["Para quem", "Pour qui"], ["Condições", "Conditions"], ["O que dizer", "Quoi dire"]], r: [
      [["Oferta do dia", "Offre du jour"], ["Todos", "Tous"], ["Tempo limitado; uma vez (vale) ou várias vezes no dia (desconto, pacote).", "Durée limitée ; une fois (bon) ou plusieurs fois dans la journée (réduction, forfait)."], ["Lembrar a data de validade.", "Rappeler la date de validité."]],
      [["Descoberta / boas-vindas", "Découverte / bienvenue"], ["Prospects (nunca consultaram ou menos de 5 min)", "Prospects (jamais consulté ou moins de 5 min)"], ["Uma vez; se cortada antes de 5 min, pode voltar a usar.", "Une fois ; si coupée avant 5 min, réutilisable."], ["Ideal para experimentar.", "Idéal pour essayer."]],
      [["Pacotes", "Forfaits"], ["Todos", "Tous"], ["Duração e preço fixos; preço por minuto geralmente mais baixo.", "Durée et prix fixes ; prix à la minute en général plus bas."], ["Para quem quer controlar o gasto.", "Pour qui veut maîtriser sa dépense."]],
      [["Ofertas de especialistas", "Offres d’experts"], ["Clientes desse especialista", "Clients de cet expert"], ["Desconto por algumas horas ou um fim de semana.", "Réduction quelques heures ou un week-end."], ["Só certos especialistas, por tempo limitado.", "Seulement certains experts, pour un temps limité."]],
      [["Vales de especialistas", "Bons d’experts"], ["Clientes do especialista", "Clients de l’expert"], ["Aplicado automaticamente; um por consulta; não combinável.", "Appliqué automatiquement ; un par consultation ; non cumulable."], ["Verificar a validade nos detalhes da Wallet.", "Vérifier la validité dans le détail du Wallet."]],
      [["Vales Wengo", "Bons Wengo"], ["Aniversário, 30 dias após inscrição (prospect), 30 dias após 1.ª chamada (novo), 180 dias sem transação", "Anniversaire, 30 jours après inscription (prospect), 30 jours après 1er appel (nouveau), 180 jours sans transaction"], ["Data de nascimento, e-mail, telefone e sem dívidas.", "Date de naissance, e-mail, téléphone et pas d’impayé."], ["Ativar pela faixa azul ou proposta de recarga.", "Activer par le bandeau bleu ou la proposition de recharge."]]
    ] } },
    { p: ["Quando clica numa linha de oferta, ela é ativada e aparece a lista de especialistas dessa oferta. A oferta escolhida fica visível no lançamento da chamada. Confirme que o cliente percebeu as condições (tempo limitado, uso único) antes de ativar.", "Quand tu cliques sur une ligne d’offre, elle est activée et la liste des experts de cette offre apparaît. L’offre choisie reste visible au lancement de l’appel. Vérifie que le client a compris les conditions (durée limitée, usage unique) avant d’activer."] }
  ] },
  { t: ["Casos práticos", "Cas pratiques"], b: [
    { case: { s: ["O cliente tem um vale de especialista e quer usá-lo com a oferta do dia.", "Le client a un bon d’expert et veut l’utiliser avec l’offre du jour."], q: ["É possível?", "Est-ce possible ?"], a: [
      ["Não: um vale de especialista não se combina com outras promoções.", "Non : un bon d’expert ne se cumule pas avec d’autres promos."],
      ["Ajudar a escolher: o vale (com esse especialista) ou a oferta do dia.", "Aider à choisir : le bon (avec cet expert) ou l’offre du jour."]
    ] } },
    { case: { s: ["Faltam o e-mail e o telemóvel, e o cliente tem um vale de aniversário disponível.", "Il manque l’e-mail et le mobile, et le client a un bon anniversaire disponible."], q: ["O que faz?", "Que fais-tu ?"], a: [
      ["Pedir e corrigir o e-mail e o telemóvel em «Infos du compte».", "Demander et corriger l’e-mail et le mobile dans « Infos du compte »."],
      ["Depois ativar o vale (faixa azul ou proposta de recarga → «Accepter» → OK).", "Puis activer le bon (bandeau bleu ou proposition de recharge → « Accepter » → OK)."]
    ] } }
  ] }],
  quiz: [
    { q: ["Vale Wengo de 180 dias: para quem?", "Bon Wengo à 180 jours : pour qui ?"], o: [["Clientes sem transação há 180 dias", "Clients sans transaction depuis 180 jours"], ["Novos clientes", "Nouveaux clients"]], a: 0, w: ["Serve para reconquistar.", "Il sert à reconquérir."] },
    { q: ["Promoção de especialista: quanto tempo dura?", "Promo d’expert : combien de temps dure-t-elle ?"], o: [["Tempo limitado (horas, fim de semana)", "Temps limité (heures, week-end)"], ["Um mês", "Un mois"]], a: 0, w: ["Avisar o cliente.", "Prévenir le client."] }
  ]
},

/* ---------------- 16. Wengo Reward ---------------- */
reward: { lessons: [
  { t: ["Em detalhe: tabela completa dos pontos", "En détail : tableau complet des points"], b: [
    { table: { h: [["Consulta", "Consultation"], ["Pontos", "Points"], ["Promo fim de semana", "Promo week-end"]], r: [
      [["5 min", "5 min"], ["1", "1"], ["2", "2"]], [["10 min", "10 min"], ["2", "2"], ["4", "4"]], [["15 min", "15 min"], ["3", "3"], ["6", "6"]],
      [["20 min", "20 min"], ["4", "4"], ["8", "8"]], [["25 min", "25 min"], ["5", "5"], ["10", "10"]], [["30 min", "30 min"], ["6", "6"], ["12", "12"]],
      [["QPP simples", "QPP simple"], ["2", "2"], ["4", "4"]], [["Estudo QPP completo", "Étude QPP complète"], ["4", "4"], ["8", "8"]]
    ] } },
    { p: ["Avaliações, favoritos, apadrinhamento e QPP não são duplicados ao fim de semana: só as consultas.", "Les avis, favoris, parrainages et QPP ne sont pas doublés le week-end : seulement les consultations."] },
    { p: ["<b>Mensagens das faixas</b> (o que o cliente vê e pode ouvir de si): «Faltam informações para se inscrever no Wengo Rewards! Verifique e-mail, telemóvel e data de nascimento» e «Inscreva-se agora! Nos últimos 30 dias acumulou pelo menos X pontos».", "<b>Messages des bandeaux</b> (ce que le client peut entendre de toi) : « Il manque des informations pour vous inscrire à Wengo Rewards ! Vérifiez e-mail, mobile et date de naissance » et « Inscrivez-vous maintenant ! Ces 30 derniers jours vous auriez cumulé au moins X points »."] },
    { p: ["<b>Histórico das operações</b>: créditos («Transação», «Avaliação») e débitos («Fatura em caixa» = troca por recompensa). Pode filtrar pela coluna «#», pela data, pelos pontos ou pelo especialista.", "<b>Historique des opérations</b> : crédits (« Transaction », « Avis ») et débits (« Facture en caisse » = échange contre récompense). Tu peux filtrer par la colonne « # », la date, les points ou l’expert."] }
  ] },
  { t: ["Perguntas frequentes", "Questions fréquentes"], b: [
    { faq: [
      { q: ["Como se inscreve um cliente?", "Comment inscrire un client ?"], a: ["Com e-mail válido, telemóvel e data de nascimento. É gratuito e o conselheiro pode fazê-lo.", "Avec un e-mail valide, un mobile et une date de naissance. C’est gratuit et le conseiller peut le faire."] },
      { q: ["Quantos pontos para uma recompensa?", "Combien de points pour une récompense ?"], a: ["Depende. Algumas a partir de 20–30 pontos (ex.: caixa astro), outras mais.", "Ça dépend. Certaines dès 20–30 points (ex. box astro), d’autres plus."] },
      { q: ["Quanto tempo valem os pontos?", "Combien de temps les points sont-ils valables ?"], a: ["12 meses; cada novo ponto prolonga todo o saldo por 12 meses.", "12 mois ; chaque nouveau point prolonge tout le solde de 12 mois."] },
      { q: ["O cliente pode perder os pontos?", "Le client peut-il perdre ses points ?"], a: ["Sim: se atingir 2000 sem trocar, ou se uma fatura ficar por pagar mais de 15 dias.", "Oui : s’il atteint 2000 sans échanger, ou si une facture reste impayée plus de 15 jours."] },
      { q: ["Há limites?", "Y a-t-il des limites ?"], a: ["200 pontos/mês por consultas; 2000 no total.", "200 points/mois via consultations ; 2000 au total."] },
      { q: ["Porque não ganhou pontos depois de uma consulta?", "Pourquoi pas de points après une consultation ?"], a: ["Fatura por pagar, consulta curta demais, teto atingido, ou gesto comercial (minutos grátis, crédito oferecido).", "Facture impayée, consultation trop courte, plafond atteint, ou geste commercial (minutes gratuites, crédit offert)."] },
      { q: ["Os pacotes impedem os pontos?", "Les forfaits empêchent-ils les points ?"], a: ["Não. Só os gestos comerciais. Descontos clássicos e pacotes são compatíveis.", "Non. Seulement les gestes commerciaux. Réductions classiques et forfaits sont compatibles."] },
      { q: ["Como se trocam os pontos?", "Comment échanger les points ?"], a: ["No espaço cliente ou com um conselheiro pelo Bobi.", "Dans l’espace client ou avec un conseiller via Bobi."] },
      { q: ["Que recompensas existem?", "Quelles récompenses ?"], a: ["Caixas astro, minutos de consulta, vales, presentes físicos, bilhetes para eventos.", "Box astro, minutes de consultation, bons, cadeaux physiques, billets pour des événements."] }
    ] }
  ] },
  { t: ["Casos práticos", "Cas pratiques"], b: [
    { case: { s: ["Sábado: cliente com 14 pontos pergunta o que pode ganhar. A recompensa mais barata custa 20.", "Samedi : client avec 14 points demande ce qu’il peut gagner. La récompense la moins chère coûte 20."], q: ["O que lhe diz?", "Que lui dis-tu ?"], a: [
      ["Faltam 6 pontos.", "Il manque 6 points."],
      ["Com a promo de fim de semana, uma consulta de 15 min dá 6 pontos: chega para a recompensa.", "Avec la promo week-end, une consultation de 15 min rapporte 6 points : ça suffit pour la récompense."]
    ] } },
    { case: { s: ["Cliente deixou 4 avaliações este mês e só recebeu pontos por 3.", "Client a laissé 4 avis ce mois et n’a reçu des points que pour 3."], q: ["Porquê?", "Pourquoi ?"], a: [
      ["Só as avaliações dos 3 primeiros especialistas do mês dão pontos.", "Seuls les avis sur les 3 premiers experts du mois rapportent des points."],
      ["Confirmar em «Logs de rejet»: «três avaliações já deixadas este mês».", "Confirmer dans « Logs de rejet » : « trois avis déjà laissés ce mois »."]
    ] } }
  ] }],
  quiz: [
    { q: ["Consulta de 25 min ao fim de semana.", "Consultation de 25 min le week-end."], o: [["10 pontos", "10 points"], ["5 pontos", "5 points"]], a: 0, w: ["5 pontos duplicados.", "5 points doublés."] },
    { q: ["Uma única avaliação pode dar até…", "Un seul avis peut rapporter jusqu’à…"], o: [["13 pontos", "13 points"], ["5 pontos", "5 points"]], a: 0, w: ["5 + 5 + 3.", "5 + 5 + 3."] }
  ]
},

/* ---------------- 17. Boutique ---------------- */
boutique: { lessons: [
  { t: ["Em detalhe: as caixas e o que contêm", "En détail : les box et leur contenu"], b: [
    { table: { h: [["Caixa", "Box"], ["Conteúdo", "Contenu"]], r: [
      [["Horizonte 2025", "Horizon 2025"], ["Consulta + horóscopo 2025", "Consultation + horoscope 2025"]],
      [["Tarot Amor 2025", "Tarot Amour 2025"], ["Consulta + Tarot Amor 2025", "Consultation + Tarot Amour 2025"]],
      [["Tarot 2025", "Tarot 2025"], ["Consulta + Tarot 2025", "Consultation + Tarot 2025"]],
      [["Mercúrio retrógrado", "Mercure rétrograde"], ["Consulta para aprender a canalizar a energia", "Consultation pour apprendre à canaliser l’énergie"]],
      [["Horas espelho", "Heures miroirs"], ["Consulta + Tarot dos Anjos", "Consultation + Tarot des Anges"]],
      [["Compatibilidade", "Compatibilité"], ["Consulta + estudo de pontuação amorosa", "Consultation + étude de score amoureux"]],
      [["Amor e Tarot", "Amour et Tarot"], ["Consulta + Tarot Cigano do Amor", "Consultation + Tarot Gitan de l’Amour"]],
      [["Numerológica 2025", "Numérologique 2025"], ["Consulta + tema numerológico personalizado", "Consultation + thème numérologique personnalisé"]],
      [["Love Box", "Love Box"], ["Consulta + leitura da cruz celta do amor", "Consultation + lecture de la croix celtique de l’amour"]]
    ] } },
    { key: ["Cada caixa inclui uma consulta de 15 min (França) ou 20 min (outros países) com um especialista participante, por telefone, vídeo ou chat.", "Chaque box inclut une consultation de 15 min (France) ou 20 min (autres pays) avec un expert participant, par téléphone, vidéo ou chat."] },
    { p: ["Se o cliente hesitar, sugira-lhe visitar a loja para ver as opções e clicar em «Ver o produto» para a descrição completa. O cliente deve perceber bem o que compra, para evitar confusões.", "Si le client hésite, propose-lui de visiter la boutique pour voir les options et de cliquer sur « Voir le produit » pour la description complète. Le client doit bien comprendre ce qu’il achète, pour éviter les malentendus."] }
  ] },
  { t: ["Casos práticos", "Cas pratiques"], b: [
    { case: { s: ["Cliente quer oferecer a Box Love a uma amiga.", "Cliente veut offrir la Love Box à une amie."], q: ["Como a guia?", "Comment la guides-tu ?"], a: [
      ["Espaço cliente → Loja → Love Box → «Oferecer a um amigo».", "Espace client → Boutique → Love Box → « Offrir à un ami »."],
      ["Introduzir o e-mail da amiga e uma mensagem, depois pagar.", "Saisir l’e-mail de l’amie et un message, puis payer."]
    ] } },
    { case: { s: ["Cliente comprou um estudo e não o encontra.", "Client a acheté une étude et ne la trouve pas."], q: ["Onde está?", "Où est-elle ?"], a: [
      ["Espaço cliente → menu → «Os meus conteúdos» → «Produtos à la carte».", "Espace client → menu → « Mes contenus » → « Produits à la carte »."],
      ["Os estudos só se veem aí (não chegam por e-mail).", "Les études ne se voient que là (elles n’arrivent pas par e-mail)."]
    ] } }
  ] }],
  quiz: [
    { q: ["O cliente tem um código promocional para a loja.", "Le client a un code promo pour la boutique."], o: [["«Tenho um código promocional» no cesto, antes de pagar", "« J’ai un code promo » dans le panier, avant de payer"], ["Depois do pagamento", "Après le paiement"]], a: 0, w: ["O desconto aplica-se automaticamente.", "La réduction s’applique automatiquement."] },
    { q: ["A Box Horizon em França inclui uma consulta de…", "La Box Horizon en France inclut une consultation de…"], o: [["15 min", "15 min"], ["20 min", "20 min"]], a: 0, w: ["20 min nos outros países.", "20 min dans les autres pays."] }
  ]
},

/* ---------------- 18. Compte ---------------- */
compte: { lessons: [
  { t: ["Em detalhe: o que muda e o que o cliente recebe", "En détail : ce qui change et ce que le client reçoit"], b: [
    { table: { h: [["Alteração", "Modification"], ["Notas", "Remarques"]], r: [
      [["Nacionalidade, fuso horário", "Nationalité, fuseau horaire"], ["«Validar» depois de cada bloco.", "« Valider » après chaque bloc."]],
      [["E-mail", "E-mail"], ["Escrever duas vezes. O cliente recebe um e-mail automático.", "À saisir deux fois. Le client reçoit un e-mail automatique."]],
      [["Telefone principal / telemóvel", "Téléphone principal / mobile"], ["E-mail automático ao cliente. Caixa para aceitar ofertas por SMS.", "E-mail automatique au client. Case pour accepter les offres par SMS."]],
      [["Palavra-passe, código PIN do SVI", "Mot de passe, code PIN du SVI"], ["Escrever duas vezes.", "À saisir deux fois."]],
      [["Data de nascimento", "Date de naissance"], ["Necessária para Wengo Reward e vales.", "Nécessaire pour Wengo Reward et les bons."]],
      [["Identificador de ligação", "Identifiant de connexion"], ["Tem de continuar igual ao pseudónimo: não se modifica.", "Doit rester identique au pseudo : ne se modifie pas."]],
      [["Newsletter (6 opções)", "Newsletter (6 options)"], ["Sim/Não por opção, depois «Validar».", "Oui/Non par option, puis « Valider »."]]
    ] } },
    { p: ["<b>Desbloqueio de consumo</b>: se a identidade não está verificada, explique que o documento é obrigatório por razões legais; envie o pedido por e-mail (ou SMS se não houver e-mail). Quando o documento é validado, «Identidade verificada» passa a SIM e pode desbloquear.", "<b>Déblocage de la consommation</b> : si l’identité n’est pas vérifiée, explique que la pièce est obligatoire pour des raisons légales ; envoie la demande par e-mail (ou SMS s’il n’y a pas d’e-mail). Une fois la pièce validée, « Identité vérifiée » passe à OUI et tu peux débloquer."] }
  ] },
  { t: ["Casos práticos", "Cas pratiques"], b: [
    { case: { s: ["Cliente francês bloqueado com 1659€ consumidos este mês. Identidade verificada: Não.", "Client français bloqué avec 1659€ consommés ce mois. Identité vérifiée : Non."], q: ["O que faz?", "Que fais-tu ?"], a: [
      ["Explicar o limite e que o documento é obrigatório.", "Expliquer le plafond et que la pièce est obligatoire."],
      ["Enviar «Demande de pièce d’identité pour consommation bloquée» (categoria Compte client).", "Envoyer « Demande de pièce d’identité pour consommation bloquée » (catégorie Compte client)."],
      ["Quando a identidade for validada: perfil conso → «Modifier le profil» → «Débloquer le client».", "Une fois l’identité validée : profil conso → « Modifier le profil » → « Débloquer le client »."]
    ] } },
    { case: { s: ["Cliente quer apagar a conta.", "Client veut supprimer son compte."], q: ["Primeiros passos?", "Premières étapes ?"], a: [
      ["Enviar «Demande d’informations pour la suppression du compte» (Compte client).", "Envoyer « Demande d’informations pour la suppression du compte » (Compte client)."],
      ["Verificar dívidas (a pagar primeiro) e saldo na Wallet (propor uma consulta ou reembolso via N2).", "Vérifier les impayés (à régler d’abord) et le solde Wallet (proposer une consultation ou un remboursement via N2)."]
    ] } }
  ] }],
  quiz: [
    { q: ["Mudou o e-mail do cliente. O que acontece?", "Tu as changé l’e-mail du client. Que se passe-t-il ?"], o: [["Recebe um e-mail automático", "Il reçoit un e-mail automatique"], ["Nada", "Rien"]], a: 0, w: ["Também para o telefone principal e telemóvel.", "Aussi pour le téléphone principal et le mobile."] },
    { q: ["Cliente sem e-mail precisa de enviar o documento de identidade.", "Client sans e-mail doit envoyer sa pièce d’identité."], o: [["Envio o pedido por SMS", "J’envoie la demande par SMS"], ["Impossível", "Impossible"]], a: 0, w: ["E-mail se houver, senão SMS.", "E-mail s’il y en a un, sinon SMS."] }
  ]
},

/* ---------------- 19. Réclamations ---------------- */
reclamations: { lessons: [
  { t: ["Em detalhe: escrever uma boa reclamação", "En détail : rédiger une bonne réclamation"], b: [
    { compare: [
      { cls: "bad", h: ["Mal escrita", "Mal rédigée"], tag: ["Devolvida", "Renvoyée"], items: [["«Cliente quer reembolso.»", "« Client veut remboursement. »"], ["Sem data, sem transação, sem especialista", "Sans date, sans transaction, sans expert"], ["O N2 tem de voltar a perguntar: atraso", "Le N2 doit redemander : retard"]] },
      { cls: "good", h: ["Bem escrita", "Bien rédigée"], tag: ["Tratada", "Traitée"], items: [["«Consulta n.º 22910401 de 02/11 com Vivi Médium cortada aos 3 min (sem som). Cliente pede reembolso.»", "« Consultation n° 22910401 du 02/11 avec Vivi Médium coupée à 3 min (pas de son). Le client demande le remboursement. »"], ["Tipo certo: Remboursement/Facturation", "Bon type : Remboursement/Facturation"], ["E-mail do cliente verificado", "E-mail du client vérifié"]] }
    ] },
    { key: ["Releia antes de guardar: «Se eu fosse o N2, percebia sem perguntar nada?»", "Relis avant d’enregistrer : « Si j’étais le N2, je comprendrais sans rien demander ? »"] },
    { p: ["<b>Insatisfação Wengo</b> (sem ligação a um especialista): fazer perguntas precisas para perceber a origem e registar com linguagem clara e concisa. <b>Insatisfação com especialista</b>: ajuda a sinalizar especialistas problemáticos; sem reembolso; o cliente pode escrever ao especialista pela mensagem do espaço cliente; propor outro (homem ou mulher, tema, especialidade) ou pedir um gesto comercial ao especialista.", "<b>Insatisfaction Wengo</b> (sans lien avec un expert) : poser des questions précises pour comprendre l’origine et enregistrer de façon claire et concise. <b>Insatisfaction expert</b> : sert à signaler les experts problématiques ; pas de remboursement ; le client peut écrire à l’expert via la messagerie de son espace ; proposer un autre (homme ou femme, thème, spécialité) ou demander un geste commercial à l’expert."] }
  ] },
  { t: ["Casos práticos", "Cas pratiques"], b: [
    { case: { s: ["Pacote de 20 min (20€) cortado aos 10 min por problema da plataforma.", "Forfait 20 min (20€) coupé à 10 min par un problème de la plateforme."], q: ["Que soluções existem?", "Quelles solutions ?"], a: [
      ["Problema técnico da plataforma: reembolso total do pacote.", "Problème technique de la plateforme : remboursement total du forfait."],
      ["Se não fosse da plataforma: reembolso parcial (10€) ou crédito de 10 min para nova sessão.", "Si ce n’était pas la plateforme : remboursement partiel (10€) ou crédit de 10 min pour une nouvelle séance."],
      ["Reclamação Remboursement/Facturation com n.º, data, especialista e motivo.", "Réclamation Remboursement/Facturation avec n°, date, expert et motif."]
    ] } },
    { case: { s: ["Cliente pede para não receber mais SMS.", "Client demande à ne plus recevoir de SMS."], q: ["O que faz?", "Que fais-tu ?"], a: [
      ["Verificar as opções da newsletter e a caixa SMS em «Infos du compte» e pô-las em «Não».", "Vérifier les options newsletter et la case SMS dans « Infos du compte » et les mettre sur « Non »."],
      ["Se já estiverem em «Não»: reclamação indicando o número a não contactar (confirmar com a Marta o tipo atual).", "Si elles sont déjà sur « Non » : réclamation en indiquant le numéro à ne plus contacter (confirmer avec Marta le type actuel)."]
    ] } }
  ] }],
  quiz: [
    { q: ["O que é indispensável numa reclamação de reembolso?", "Qu’est-ce qui est indispensable dans une réclamation de remboursement ?"], o: [["N.º e data da transação, especialista e motivo", "N° et date de transaction, expert et motif"], ["Só o nome do cliente", "Seulement le nom du client"]], a: 0, w: ["Senão o pedido volta para trás.", "Sinon la demande revient."] },
    { q: ["Pacote cortado aos 8 min de 20, sem culpa da plataforma. Crédito possível?", "Forfait coupé à 8 min sur 20, sans faute de la plateforme. Crédit possible ?"], o: [["12 min de crédito", "12 min de crédit"], ["8 min", "8 min"]], a: 0, w: ["O tempo não usado.", "Le temps non utilisé."] }
  ]
},

/* ---------------- 20. Foxi ---------------- */
foxi: { lessons: [
  { t: ["Em detalhe: tratar um ticket do início ao fim", "En détail : traiter un ticket du début à la fin"], b: [
    { steps: [
      { t: ["Escolher na sua lista", "Choisir dans sa liste"], p: ["Ex.: «Client PT». Os não lidos têm fundo colorido (azul cliente, violeta Bobi, cinzento CRM).", "Ex. « Client PT ». Les non lus ont un fond coloré (bleu client, violet Bobi, gris CRM)."] },
      { t: ["Ver se alguém já está no ticket", "Voir si quelqu’un est déjà dessus"], p: ["Olho âmbar = um colega está a ler: combinem.", "Œil ambre = un collègue le lit : coordonnez-vous."] },
      { t: ["Atribuir-se", "S’assigner"], p: ["Painel Actions → «Moi». Estado «Em curso».", "Panneau Actions → « Moi ». Statut « En cours »."] },
      { t: ["Ler e verificar", "Lire et vérifier"], p: ["Ler o e-mail (traduzido; «Voir original» se necessário), a análise IA e a ficha Bobi do contacto.", "Lire l’e-mail (traduit ; « Voir original » si besoin), l’analyse IA et la fiche Bobi du contact."] },
      { t: ["Classificar", "Classer"], p: ["Grupo, categoria e subcategoria certos (a IA sugere, confirme).", "Bon groupe, catégorie et sous-catégorie (l’IA propose, tu confirmes)."] },
      { t: ["Responder", "Répondre"], p: ["Escrever na sua língua: a resposta é traduzida no envio. Use a sugestão IA como base, nunca sem a reler.", "Écrire dans ta langue : la réponse est traduite à l’envoi. Utilise la suggestion IA comme base, jamais sans la relire."] },
      { t: ["Fechar o ciclo", "Boucler"], p: ["«Em espera cliente» se espera uma resposta, «Resolvido» se terminou, ou «Escalar em N2».", "« En attente client » si tu attends une réponse, « Résolu » si c’est fini, ou « Escalader en N2 »."] }
    ] },
    { tip: ["Os filtros ficam no URL: copie-o para partilhar uma vista com uma colega.", "Les filtres sont dans l’URL : copie-la pour partager une vue avec une collègue."] }
  ] },
  { t: ["Casos práticos", "Cas pratiques"], b: [
    { case: { s: ["E-mail de cliente PT: «Fui cobrado duas vezes pela mesma consulta.»", "E-mail d’un client PT : « J’ai été débité deux fois pour la même consultation. »"], q: ["Como trata?", "Comment le traites-tu ?"], a: [
      ["Atribuir-se, abrir a ficha Bobi pelo link do contacto.", "S’assigner, ouvrir la fiche Bobi via le lien du contact."],
      ["Ver transações e faturas: é um débito duplo ou um pedido de autorização?", "Regarder transactions et factures : double débit ou demande d’autorisation ?"],
      ["Se for autorização: responder a explicar (anulação até 30 dias úteis). Se for débito duplo: reclamação N2 e responder com o prazo de 48h.", "Si c’est une autorisation : répondre en expliquant (annulation jusqu’à 30 jours ouvrés). Si c’est un double débit : réclamation N2 et répondre avec le délai de 48h."]
    ] } },
    { case: { s: ["O cliente responde a um ticket que já tinha fechado.", "Le client répond à un ticket que tu avais fermé."], q: ["O que acontece e o que faz?", "Que se passe-t-il et que fais-tu ?"], a: [
      ["O ticket volta automaticamente a «Em curso».", "Le ticket repasse automatiquement « En cours »."],
      ["Ler a nova mensagem e tratá-la como um ticket aberto.", "Lire le nouveau message et le traiter comme un ticket ouvert."]
    ] } }
  ] }],
  quiz: [
    { q: ["A resposta sugerida pela IA está em francês e o cliente é português.", "La réponse suggérée par l’IA est en français et le client est portugais."], o: [["É traduzida no envio; releio antes", "Elle est traduite à l’envoi ; je la relis avant"], ["Traduzo à mão", "Je traduis à la main"]], a: 0, w: ["«Sera traduit automatiquement… à l’envoi».", "« Sera traduit automatiquement… à l’envoi »."] },
    { q: ["Espera uma resposta do cliente. Que estado?", "Tu attends une réponse du client. Quel statut ?"], o: [["Em espera cliente", "En attente client"], ["Fechado", "Fermé"]], a: 0, w: ["Fechado é definitivo.", "Fermé est définitif."] }
  ]
}

};

/* ---- Fusion dans les modules existants (avant le quiz) ---- */
(function () {
  (BCF.modules || []).forEach(function (m) {
    var x = BCF.extra[m.id];
    if (!x) return;
    m.lessons = m.lessons.concat(x.lessons || []);
    m.quiz = m.quiz.concat(x.quiz || []);
    m.min = m.min + 6 * (x.lessons || []).length;
  });
})();
