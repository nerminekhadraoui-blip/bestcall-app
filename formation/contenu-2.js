/* ==========================================================
   Academia BestCall — contenu de formation (partie 2/2)
   ========================================================== */
window.BCF = window.BCF || { modules: [] };

/* ---------------- PHASE 3 : PAIEMENTS ---------------- */
BCF.modules.push(
{ id: "paiement", phase: "paiement", c: "#8E44AD", min: 12,
  title: ["Meios de pagamento", "Moyens de paiement"],
  desc: ["Pré-pago vs pós-pago, adicionar e apagar um cartão.", "Prépayé vs postpayé, ajouter et supprimer une carte."],
  lessons: [
  { t: ["Pré-pago ou pós-pago?", "Prépayé ou postpayé ?"], b: [
    { compare: [
      { cls: "good", h: ["Pré-pago (Wallet)", "Prépayé (Wallet)"], tag: ["Saldo", "Solde"], items: [["Usa o saldo da carteira", "Utilise le solde du portefeuille"], ["A chamada é cortada quando o saldo acaba", "L’appel est coupé quand le solde est épuisé"]] },
      { cls: "good", h: ["Pós-pago (cartão)", "Postpayé (carte)"], tag: ["Débito depois", "Débit après"], items: [["Cartão bancário ou pré-pago na conta", "Carte bancaire ou prépayée sur le compte"], ["Debitado depois da consulta", "Débitée après la consultation"], ["A chamada não é cortada", "L’appel n’est pas coupé"]] }
    ] },
    { p: ["Meios aceites: cartão bancário, cartão pré-pago, PayPal; Portugal: <b>Multibanco</b> e <b>MB Way</b>; Espanha: <b>Bizum</b>.", "Moyens acceptés : carte bancaire, carte prépayée, PayPal ; Portugal : <b>Multibanco</b> et <b>MB Way</b> ; Espagne : <b>Bizum</b>."] },
    { warn: ["<b>Maestro</b> e <b>American Express</b> não funcionam na plataforma.", "<b>Maestro</b> et <b>American Express</b> ne fonctionnent pas sur la plateforme."] },
    { shot: { f: "fiche-ajouter-moyen.png", cap: ["Bloco Ações → Compte: «Ajouter un moyen de paiement» e «Proposition de recharge wallet»", "Bloc Actions → Compte : « Ajouter un moyen de paiement » et « Proposition de recharge wallet »"] } },
    { p: ["Para tudo isto: ficha cliente → botão <b>«Ajouter un moyen de paiement»</b>. Daí pode adicionar um cartão, recarregar a Wallet, ou enviar um e-mail/SMS ao cliente.", "Pour tout ça : fiche client → bouton <b>« Ajouter un moyen de paiement »</b>. De là tu peux ajouter une carte, recharger le Wallet, ou envoyer un e-mail/SMS au client."] }
  ] },
  { t: ["Adicionar um cartão por telefone", "Ajouter une carte par téléphone"], b: [
    { steps: [
      { t: ["Mostrar o formulário", "Afficher le formulaire"], p: ["Tipo «Cartão de crédito» → «Afficher le formulaire».", "Type « Carte de crédit » → « Afficher le formulaire »."] },
      { t: ["Parar a gravação", "Couper l’enregistrement"], p: ["No Graam: botão vermelho que fica azul. Verifique que foi tido em conta.", "Dans Graam : bouton rouge qui devient bleu. Vérifie que c’est pris en compte."] },
      { t: ["Número e titular", "Numéro et titulaire"], p: ["Os 16 dígitos e o nome no cartão.", "Les 16 chiffres et le nom sur la carte."] },
      { t: ["Transferir para o SVI seguro", "Transférer vers le SVI sécurisé"], p: ["O cliente digita validade e CVV no teclado. Fique em linha: a chamada volta para si.", "Le client tape la date d’expiration et le CVV au clavier. Reste en ligne : l’appel revient vers toi."] },
      { t: ["Retomar se necessário", "Reprendre si besoin"], p: ["«Reprendre le contrôle du formulaire» se o cliente bloquear, depois «Valider».", "« Reprendre le contrôle du formulaire » si le client bloque, puis « Valider »."] }
    ] },
    { shot: { f: "graam-enregistrement.png", cap: ["Antes do cartão: parar a gravação no Graam (ícone vermelho)", "Avant la carte : couper l’enregistrement dans Graam (icône rouge)"] } },
    { shot: { f: "carte-formulaire-svi.png", cap: ["Número e nome no cartão, depois «Transférer cet appel au SVI sécurisé». As frases a azul são as que diz ao cliente", "Numéro et nom sur la carte, puis « Transférer cet appel au SVI sécurisé ». Les phrases en bleu sont à dire au client"] } },
    { shot: { f: "carte-svi-en-cours.png", cap: ["O botão passa a «En cours…» durante a transferência. «Reprendre la main sur le formulaire» se o cliente bloquear", "Le bouton passe à « En cours… » pendant le transfert. « Reprendre la main sur le formulaire » si le client bloque"] } },
    { p: ["Se retomar o formulário, vê o formulário completo com um guião em cada etapa: número, validade, CVV, nome, e a pergunta «quer que o cartão fique associado à sua conta?». É feita uma autorização de 0,00€ no cartão para o validar.", "Si tu reprends la main, tu vois le formulaire complet avec un script à chaque étape : numéro, validité, CVV, nom, et la question « voulez-vous que la carte reste associée à votre compte ? ». Une autorisation de 0,00€ est faite sur la carte pour la valider."] },
    { shot: { f: "carte-formulaire-adyen.png", cap: ["O formulário completo (Adyen), com as frases a dizer e as caixas a marcar no fim", "Le formulaire complet (Adyen), avec les phrases à dire et les cases à cocher à la fin"] } },
    { tip: ["Para tranquilizar: os dados são encriptados e o cartão é guardado pela Adyen, o prestador de pagamento. Se o cliente não quiser guardar o cartão, terá de introduzir os dados antes de cada consulta.", "Pour rassurer : les données sont cryptées et la carte est conservée par Adyen, le prestataire de paiement. Si le client ne veut pas garder sa carte, il devra saisir ses données avant chaque consultation."] },
    { key: ["Marque a caixa «J’enregistre ma carte bancaire pour faciliter mes prochaines consultations».", "Coche la case « J’enregistre ma carte bancaire pour faciliter mes prochaines consultations »."] }
  ] },
  { t: ["Sem o cartão à mão?", "Pas de carte sous la main ?"], b: [
    { p: ["O cliente não tem o cartão ou não quer dá-lo por telefone? Envie-lhe uma mensagem para ele o fazer sozinho no espaço cliente: bloco Ações → <b>«Envoyer un mail / un SMS»</b>.", "Le client n’a pas sa carte ou ne veut pas la donner au téléphone ? Envoie-lui un message pour qu’il le fasse seul dans son espace : bloc Actions → <b>« Envoyer un mail / un SMS »</b>."] },
    { shot: { f: "fiche-envoyer-mail.png", cap: ["O botão «Envoyer un mail / un SMS» no bloco Contact client", "Le bouton « Envoyer un mail / un SMS » dans le bloc Contact client"] } },
    { steps: [
      { t: ["Categoria «Gestion espace client»", "Catégorie « Gestion espace client »"], p: ["O anuário (Portugal, França…) define a língua da mensagem.", "L’annuaire (Portugal, France…) définit la langue du message."] },
      { t: ["Escolher a mensagem", "Choisir le message"], p: ["<b>[Accès et fonctionnalités] Ajouter une carte bancaire depuis l’espace client</b>, ou <b>Recharger et gérer le porte-monnaie</b> (PayPal, MB Way, Multibanco…).", "<b>[Accès et fonctionnalités] Ajouter une carte bancaire depuis l’espace client</b>, ou <b>Recharger et gérer le porte-monnaie</b> (PayPal, MB Way, Multibanco…)."] },
      { t: ["Verificar o conteúdo", "Vérifier le contenu"], p: ["O corpo do e-mail e o SMS aparecem por baixo.", "Le corps de l’e-mail et le SMS s’affichent en dessous."] },
      { t: ["Enviar", "Envoyer"], p: ["«Envoyer par email» ou «Envoyer par SMS».", "« Envoyer par email » ou « Envoyer par SMS »."] }
    ] },
    { shot: { f: "message-ajout-carte.png", cap: ["Mensagem «Ajouter une carte bancaire depuis l’espace client». Em cima: os últimos e-mails e SMS enviados ao cliente", "Message « Ajouter une carte bancaire depuis l’espace client ». En haut : les derniers e-mails et SMS envoyés au client"] } },
    { shot: { f: "message-porte-monnaie.png", cap: ["Mensagem «Recharger et gérer le porte-monnaie»", "Message « Recharger et gérer le porte-monnaie »"] } },
    { shot: { f: "email-recharge.png", cap: ["O e-mail que o cliente recebe (aqui em espanhol)", "L’e-mail que reçoit le client (ici en espagnol)"] } },
    { tip: ["Antes de enviar, veja o bloco «Dernier e-mail et SMS envoyés»: evita enviar duas vezes a mesma mensagem.", "Avant d’envoyer, regarde le bloc « Dernier e-mail et SMS envoyés » : ça évite d’envoyer deux fois le même message."] },
    { p: ["México: e-mail sobre o cartão <b>OXXO</b>. Argentina: <b>Mercadopago</b> e <b>Naranja X</b>.", "Mexique : e-mail sur la carte <b>OXXO</b>. Argentine : <b>Mercadopago</b> et <b>Naranja X</b>."] }
  ] },
  { t: ["Apagar um cartão", "Supprimer une carte"], b: [
    { steps: [
      { t: ["Separador «Moyens de paiement»", "Onglet « Moyens de paiement »"], p: ["Escolha o cartão a apagar.", "Choisis la carte à supprimer."] },
      { t: ["Apagar", "Supprimer"], p: ["Um pop-up confirma.", "Une pop-up confirme."] }
    ] },
    { warn: ["Impossível apagar se o cliente tiver <b>dívidas</b> (pagar primeiro) ou um <b>pedido de consulta em curso</b> (tentar depois da consulta).", "Impossible de supprimer si le client a des <b>impayés</b> (régler d’abord) ou une <b>demande de consultation en cours</b> (réessayer après)."] }
  ] }],
  quiz: [
    { q: ["Antes de pedir os dados do cartão?", "Avant de demander la carte ?"], o: [["Paro a gravação no Graam", "Je coupe l’enregistrement dans Graam"], ["Nada", "Rien"]], a: 0, w: ["Segurança dos dados.", "Sécurité des données."] },
    { q: ["Cartão American Express?", "Carte American Express ?"], o: [["Aceite", "Acceptée"], ["Não funciona: outro meio", "Ne marche pas : autre moyen"]], a: 1, w: ["Maestro e Amex não funcionam.", "Maestro et Amex ne fonctionnent pas."] },
    { q: ["O cliente quer apagar o cartão mas tem uma dívida.", "Le client veut supprimer sa carte mais a un impayé."], o: [["Apago na mesma", "Je supprime quand même"], ["Explico que tem de pagar primeiro", "J’explique qu’il doit régler d’abord"]], a: 1, w: ["O sistema bloqueia a supressão com dívidas.", "Le système bloque la suppression avec impayés."] }
  ]
},

{ id: "wallet", phase: "paiement", c: "#16A085", min: 12,
  title: ["A Wallet (carteira Wengo)", "Le Wallet (portefeuille Wengo)"],
  desc: ["Tipos, saldos, recargas e saldo bloqueado.", "Types, soldes, recharges et solde bloqué."],
  lessons: [
  { t: ["Os 3 tipos de Wallet", "Les 3 types de Wallet"], b: [
    { cards: [
      { i: "W", t: ["Wallet WGD", "Wallet WGD"], p: ["Creditada em <b>minutos</b> (vales, presentes).", "Créditée en <b>minutes</b> (bons, cadeaux)."] },
      { i: "€", t: ["Wallet EUR", "Wallet EUR"], p: ["Em euros, clientes europeus, só para especialistas na Europa.", "En euros, clients européens, uniquement pour experts en Europe."] },
      { i: "$", t: ["Wallet USD", "Wallet USD"], p: ["Em dólares, clientes latino-americanos e especialistas latinos.", "En dollars, clients latino-américains et experts latinos."] }
    ] },
    { p: ["A Wallet é alimentada de duas formas: <b>presentes de especialistas</b> (só para consultas à tarifa por minuto, não combináveis com promoções ou pacotes) e <b>recargas do cliente</b> (sem restrições, combináveis com promoções e pacotes).", "Le Wallet est alimenté de deux façons : <b>cadeaux d’experts</b> (uniquement pour des consultations au tarif minute, non cumulables avec promos ou forfaits) et <b>recharges du client</b> (sans restriction, cumulables avec promos et forfaits)."] },
    { key: ["Sem cartão bancário, o cliente precisa de um saldo de pelo menos <b>10 minutos de consulta</b> para consultar.", "Sans carte bancaire, le client doit avoir un solde d’au moins <b>10 minutes de consultation</b> pour consulter."] }
  ] },
  { t: ["Ler o conteúdo da Wallet", "Lire le contenu du Wallet"], b: [
    { table: { h: [["Coluna", "Colonne"], ["O que diz", "Ce qu’elle dit"]], r: [
      [["Data", "Date"], ["Quando o crédito foi adicionado. Clique para ver o histórico de consumo.", "Quand le crédit a été ajouté. Clique pour voir l’historique de consommation."]],
      [["Valor inicial", "Montant initial"], ["O crédito de partida (ex.: 5 min, 15 min).", "Le crédit de départ (ex. 5 min, 15 min)."]],
      [["Valor atual", "Montant actuel"], ["Maior que 0 = ainda utilizável. 0 = consumido.", "Supérieur à 0 = encore utilisable. 0 = consommé."]],
      [["Descrição", "Description"], ["Nome da oferta e restrições: validade, chamada e/ou chat, número de transações, não combinável.", "Nom de l’offre et restrictions : validité, appel et/ou chat, nombre de transactions, non cumulable."]]
    ] } },
    { p: ["<b>Saldo da Wallet</b>: Total, <b>Disponível</b> (realmente utilizável), Promocional (oferecido), <b>Reservado</b> (bloqueado para uma transação em curso).", "<b>Solde du Wallet</b> : Total, <b>Disponible</b> (réellement utilisable), Promotionnel (offert), <b>Réservé</b> (bloqué pour une transaction en cours)."] },
    { tip: ["Crédito inutilizável apesar de válido? Verifique se está bloqueado por uma transação pendente e se o canal escolhido corresponde às restrições do crédito.", "Crédit inutilisable malgré sa validité ? Vérifie s’il est bloqué par une transaction en attente et si le canal choisi correspond aux restrictions du crédit."] }
  ] },
  { t: ["O saldo bloqueado", "Le solde bloqué"], b: [
    { lead: ["Quando o cliente pede uma consulta com a Wallet, o sistema bloqueia o equivalente a <b>10 minutos</b> para o especialista escolhido.", "Quand le client demande une consultation avec son Wallet, le système bloque l’équivalent de <b>10 minutes</b> pour l’expert choisi."] },
    { table: { h: [["Pedido em curso", "Demande en cours"], ["Duração do bloqueio", "Durée du blocage"]], r: [
      [["QPP (sem resposta do especialista)", "QPP (sans réponse de l’expert)"], ["7 dias", "7 jours"]],
      [["Chat", "Chat"], ["cerca de 30 minutos", "environ 30 minutes"]],
      [["Chamada", "Appel"], ["2h30", "2h30"]]
    ] } },
    { p: ["No espaço cliente, a Wallet pode parecer vazia quando o saldo está só bloqueado. No Bobi, o valor aparece em <b>«Autorisations wallet»</b>.", "Dans l’espace client, le Wallet peut sembler vide quand le solde est juste bloqué. Dans Bobi, le montant apparaît dans <b>« Autorisations wallet »</b>."] },
    { key: ["Para libertar o saldo: <b>cancelar a transação pendente</b> (em «consultations live»). O saldo volta automaticamente.", "Pour libérer le solde : <b>annuler la transaction en attente</b> (dans « consultations live »). Le solde revient automatiquement."] }
  ] },
  { t: ["Recarregar a Wallet", "Recharger le Wallet"], b: [
    { steps: [
      { t: ["«Ajouter un moyen de paiement»", "« Ajouter un moyen de paiement »"], p: ["Tipo: <b>«Créditer le wallet par CB, lien de paiement, Multibanco…»</b>, moeda (EUR ou USD), depois «Afficher le formulaire».", "Type : <b>« Créditer le wallet par CB, lien de paiement, Multibanco… »</b>, devise (EUR ou USD), puis « Afficher le formulaire »."] },
      { t: ["Método de pagamento", "Méthode de paiement"], p: ["<b>PayByLink</b>, <b>Moyen de paiement du compte</b> ou <b>Multibanco</b>.", "<b>PayByLink</b>, <b>Moyen de paiement du compte</b> ou <b>Multibanco</b>."] },
      { t: ["Montante", "Montant"], p: ["«Montant fixe» ou «Utiliser une offre», depois «Valider».", "« Montant fixe » ou « Utiliser une offre », puis « Valider »."] }
    ] },
    { shot: { f: "wallet-type.png", cap: ["Escolher o tipo «Créditer le wallet…» e a moeda", "Choisir le type « Créditer le wallet… » et la devise"] } },
    { shot: { f: "wallet-paybylink.png", cap: ["Os três métodos: PayByLink, meio de pagamento da conta, Multibanco", "Les trois méthodes : PayByLink, moyen de paiement du compte, Multibanco"] } },
    { shot: { f: "wallet-moyen-compte.png", cap: ["«Moyen de paiement du compte»: o cartão preferido aparece por defeito", "« Moyen de paiement du compte » : la carte préférée s’affiche par défaut"] } },
    { compare: [
      { cls: "good", h: ["Tem cartão na conta", "A une carte sur le compte"], tag: ["Opção 1", "Option 1"], items: [["«Moyen de paiement du compte»", "« Moyen de paiement du compte »"], ["Cartão, moeda (EUR Europa, USD América Latina), valor → Valider", "Carte, devise (EUR Europe, USD Amérique latine), montant → Valider"]] },
      { cls: "good", h: ["Sem cartão", "Pas de carte"], tag: ["Opção 2", "Option 2"], items: [["<b>Paybylink</b>: link seguro por e-mail ou SMS", "<b>Paybylink</b> : lien sécurisé par e-mail ou SMS"], ["Cartão, PayPal, Paysafecard, Google Pay, Bizum (ES), Multibanco/MB Way (PT)", "Carte, PayPal, Paysafecard, Google Pay, Bizum (ES), Multibanco/MB Way (PT)"]] }
    ] },
    { shot: { f: "paybylink-notification.png", cap: ["PayByLink: o link e a data de validade. Enviar por e-mail ou SMS", "PayByLink : le lien et sa date de validité. Envoyer par e-mail ou SMS"] } },
    { shot: { f: "paybylink-paiement.png", cap: ["O que o cliente vê ao abrir o link: Google Pay, cartão, Paysafecard, PayPal", "Ce que voit le client en ouvrant le lien : Google Pay, carte, Paysafecard, PayPal"] } },
    { tip: ["O link tem uma data de validade: diga ao cliente para pagar antes.", "Le lien a une date de validité : dis au client de payer avant."] },
    { p: ["<b>Paybylink</b>: menos riscos (sem manipular o cartão), valor definido antes, a consulta para quando o saldo acaba. <b>Cartão</b>: rápido, sem interrupção mesmo se a consulta durar mais.", "<b>Paybylink</b> : moins de risques (pas de manipulation de carte), montant fixé d’avance, la consultation s’arrête quand le solde est épuisé. <b>Carte</b> : rapide, sans interruption même si la consultation dure plus."] }
  ] },
  { t: ["O que o cliente vê", "Ce que voit le client"], b: [
    { lead: ["Para guiar o cliente, é preciso saber o que ele vê no espaço dele. Use «Selfcare client» na ficha para abrir a mesma página.", "Pour guider le client, il faut savoir ce qu’il voit dans son espace. Utilise « Selfcare client » sur la fiche pour ouvrir la même page."] },
    { shot: { f: "espace-client-portemonnaie.png", cap: ["Espaço cliente → «Gestão da conta cliente»: o saldo do porta-moedas", "Espace client → « Gestion du compte client » : le solde du portefeuille"] } },
    { shot: { f: "espace-wallet.png", cap: ["A página Wengo Wallet: saldo, creditar, opções, histórico", "La page Wengo Wallet : solde, créditer, options, historique"] } },
    { steps: [
      { t: ["Separador «Creditar»", "Onglet « Créditer »"], p: ["Escolher 10€, 15€, 30€, 50€, 100€ ou 250€, ou «Prefiro escolher o valor».", "Choisir 10€, 15€, 30€, 50€, 100€ ou 250€, ou « Je préfère choisir le montant »."] },
      { t: ["Verificar o país", "Vérifier le pays"], p: ["«Efetuo esta compra em Portugal (alterar)»: o país muda os meios de pagamento propostos.", "« J’effectue cet achat au Portugal (modifier) » : le pays change les moyens de paiement proposés."] },
      { t: ["Escolher o meio de pagamento", "Choisir le moyen de paiement"], p: ["Cartão guardado, cartão bancário, Multibanco, PayPal, Paysafecard, MB WAY.", "Carte enregistrée, carte bancaire, Multibanco, PayPal, Paysafecard, MB WAY."] }
    ] },
    { shot: { f: "espace-wallet-creditar.png", cap: ["Os montantes: 100€ e 250€ dão <b>5% oferecidos</b>", "Les montants : 100€ et 250€ donnent <b>5% offerts</b>"] } },
    { shot: { f: "espace-wallet-paiement.png", cap: ["Os meios de pagamento em Portugal, com MB WAY selecionado", "Les moyens de paiement au Portugal, avec MB WAY sélectionné"] } },
    { key: ["Recarregar <b>100€ ou mais</b> pelo espaço cliente = <b>+5% oferecidos</b>. Um bom argumento para clientes regulares.", "Recharger <b>100€ ou plus</b> depuis l’espace client = <b>+5% offerts</b>. Un bon argument pour les clients réguliers."] }
  ] }],
  quiz: [
    { q: ["A Wallet do cliente parece vazia no espaço dele, mas ele recarregou ontem.", "Le Wallet du client semble vide dans son espace, mais il a rechargé hier."], o: [["Vejo «Autorisations wallet»: o saldo pode estar bloqueado", "Je regarde « Autorisations wallet » : le solde est peut-être bloqué"], ["Peço outra recarga", "Je demande une autre recharge"]], a: 0, w: ["Uma transação pendente bloqueia 10 min de saldo.", "Une transaction en attente bloque 10 min de solde."] },
    { q: ["Quanto tempo fica bloqueado o saldo de uma chamada pendente?", "Combien de temps reste bloqué le solde d’un appel en attente ?"], o: [["30 min", "30 min"], ["2h30", "2h30"], ["7 dias", "7 jours"]], a: 1, w: ["Chamada 2h30, chat ~30 min, QPP 7 dias.", "Appel 2h30, chat ~30 min, QPP 7 jours."] },
    { q: ["Que recarga no espaço cliente dá 5% oferecidos?", "Quelle recharge dans l’espace client donne 5% offerts ?"], o: [["50€", "50€"], ["100€", "100€"], ["30€", "30€"]], a: 1, w: ["100€ e 250€ dão 5% oferecidos.", "100€ et 250€ donnent 5% offerts."] },
    { q: ["Um presente de especialista pode ser usado com um pacote?", "Un cadeau d’expert peut-il servir avec un forfait ?"], o: [["Sim", "Oui"], ["Não, só à tarifa por minuto", "Non, seulement au tarif minute"]], a: 1, w: ["Presentes de especialistas não se combinam com promoções nem pacotes.", "Les cadeaux d’experts ne se cumulent ni avec les promos ni avec les forfaits."] }
  ]
},

{ id: "facturation", phase: "paiement", c: "#C0392B", min: 10,
  title: ["Pay as you go, autorizações e dívidas", "Pay as you go, autorisations et impayés"],
  desc: ["Explicar sem confundir, regularizar sem erro.", "Expliquer sans embrouiller, régulariser sans erreur."],
  lessons: [
  { t: ["Pay as you go", "Pay as you go"], b: [
    { compare: [
      { cls: "good", h: ["OUI", "OUI"], tag: ["Wallet + cartão", "Wallet + carte"], items: [["Primeiro a Wallet, depois o cartão", "D’abord le Wallet, puis la carte"], ["A consulta não é cortada a 0€", "La consultation n’est pas coupée à 0€"], ["Faturado pela duração real", "Facturé selon la durée réelle"]] },
      { cls: "bad", h: ["NON", "NON"], tag: ["Só Wallet", "Wallet seul"], items: [["Limitado ao saldo", "Limité au solde"], ["A consulta para quando o saldo acaba", "La consultation s’arrête à 0"], ["Por defeito se o cliente só recarregou a Wallet", "Par défaut si le client a seulement rechargé son Wallet"]] }
    ] },
    { shot: { f: "pay-as-you-go.png", cap: ["Na ficha: Pay as you go «Oui»", "Sur la fiche : Pay as you go « Oui »"] } },
    { key: ["Antes de mudar (botão Sim/Não), garanta que o cliente percebe as <b>duas opções</b>.", "Avant de changer (bouton Oui/Non), assure-toi que le client comprend les <b>deux options</b>."] }
  ] },
  { t: ["O Pedido de Autorização", "La Demande d’Autorisation"], b: [
    { lead: ["Uma <b>verificação temporária</b> dos fundos antes da consulta, não um débito. Muitas vezes o cliente recebe um SMS e pensa que foi debitado.", "Une <b>vérification temporaire</b> des fonds avant la consultation, pas un débit. Souvent le client reçoit un SMS et croit avoir été débité."] },
    { p: ["Onde ver: ficha → «Moyens de paiement» → «Historique des actions».", "Où le voir : fiche → « Moyens de paiement » → « Historique des actions »."] },
    { script: [
      { s: ["«Garanto-lhe que o pedido de autorização não é um débito. É uma verificação temporária dos fundos para a consulta.»", "« Je vous rassure, la demande d’autorisation n’est pas un débit. C’est une vérification temporaire des fonds pour la consultation. »"], tag: ["Explicar", "Expliquer"] },
      { s: ["«Se a consulta não se realizar, é anulado. Pode levar até 30 dias úteis.»", "« Si la consultation n’a pas lieu, elle est annulée. Cela peut prendre jusqu’à 30 jours ouvrés. »"], tag: ["Anulação", "Annulation"] },
      { s: ["«Foi recusado por falta de fundos. Pode verificar a sua conta ou adicionar outro meio de pagamento.»", "« Elle a été refusée par manque de fonds. Vous pouvez vérifier votre compte ou ajouter un autre moyen de paiement. »"], tag: ["Recusado", "Refusé"] }
    ] }
  ] },
  { t: ["Regularizar dívidas", "Régulariser les impayés"], b: [
    { p: ["Ficha → bloco «État du compte» (no topo se houver dívidas) → página <b>Recouvrement</b>.", "Fiche → bloc « État du compte » (en haut s’il y a des impayés) → page <b>Recouvrement</b>."] },
    { warn: ["O total das faturas com dívida <b>não é</b> o valor em dívida. Ex.: fatura de 300€, faltam 40€ → total 300€, dívida real 40€.", "Le total des factures avec impayé <b>n’est pas</b> le montant dû. Ex. : facture de 300€, il reste 40€ → total 300€, dette réelle 40€."] },
    { compare: [
      { cls: "good", h: ["Com a Wallet", "Avec le Wallet"], tag: ["Saldo", "Solde"], items: [["Verificar o saldo", "Vérifier le solde"], ["Selecionar as faturas", "Sélectionner les factures"], ["«Tenter le prélèvement sur le portefeuille»", "« Tenter le prélèvement sur le portefeuille »"]] },
      { cls: "good", h: ["Com o cartão", "Avec la carte"], tag: ["Cartão", "Carte"], items: [["Ver os cartões registados", "Voir les cartes enregistrées"], ["Outro cartão? «Sélection des flux financiers»", "Autre carte ? « Sélection des flux financiers »"], ["«Tenter le paiement»", "« Tenter le paiement »"]] }
    ] },
    { key: ["Antes de cada tentativa, <b>justifique a ação</b> no formulário (cliente em linha, e-mail recebido…). Cada tentativa manual tem um custo para a Wengo.", "Avant chaque tentative, <b>justifie l’action</b> dans le formulaire (client en ligne, e-mail reçu…). Chaque tentative manuelle a un coût pour Wengo."] }
  ] },
  { t: ["Chargeback e robô", "Chargeback et robot"], b: [
    { p: ["<b>Chargeback</b> = pagamento contestado no banco; o dinheiro é retirado à Wengo. Só se regulariza por <b>transferência bancária</b>, e só o <b>N2</b> valida. Depois o cliente pode voltar a consultar. Se pedir o IBAN: e-mail Bobi «como regularizar a sua situação».", "<b>Chargeback</b> = paiement contesté auprès de la banque ; l’argent est repris à Wengo. Régularisable uniquement par <b>virement</b>, et seul le <b>N2</b> valide. Ensuite le client peut reconsulter. S’il demande l’IBAN : e-mail Bobi « comment régulariser votre situation »."] },
    { p: ["<b>Robô de cobrança</b>: tenta cobrar sozinho. Se o cliente negociar prestações, <b>desative-o</b> (verde «Não» → laranja «Sim») e escolha a data de reativação.", "<b>Robot de recouvrement</b> : il tente de prélever tout seul. Si le client négocie un paiement en plusieurs fois, <b>désactive-le</b> (vert « Non » → orange « Oui ») et choisis la date de réactivation."] }
  ] }],
  quiz: [
    { q: ["Pay as you go = NON e a Wallet chega a 0€.", "Pay as you go = NON et le Wallet arrive à 0€."], o: [["Continua no cartão", "Ça continue sur la carte"], ["A consulta para", "La consultation s’arrête"]], a: 1, w: ["NON = limitado à Wallet.", "NON = limité au Wallet."] },
    { q: ["SMS de «débito» e a consulta não aconteceu.", "SMS de « débit » et la consultation n’a pas eu lieu."], o: [["É um pedido de autorização, será anulado (até 30 dias úteis)", "C’est une demande d’autorisation, elle sera annulée (jusqu’à 30 jours ouvrés)"], ["Reembolso imediato", "Remboursement immédiat"]], a: 0, w: ["Não é um débito.", "Ce n’est pas un débit."] },
    { q: ["Fatura em chargeback?", "Facture en chargeback ?"], o: [["Cartão", "Carte"], ["Transferência, validada pelo N2", "Virement, validé par le N2"]], a: 1, w: ["O sistema já não aceita cartão.", "Le système n’accepte plus la carte."] }
  ]
},

{ id: "recouvrement", phase: "paiement", c: "#7D3C98", min: 9,
  title: ["Cobranças: chamadas de saída", "Recouvrement : appels sortants"],
  desc: ["Ligar a um cliente com dívidas e seguir a promessa.", "Appeler un client en impayé et suivre sa promesse."],
  lessons: [
  { t: ["Com o cliente em linha", "Avec le client en ligne"], b: [
    { lead: ["A maioria das chamadas acaba na caixa de voz. Dedique-se aos clientes com quem consegue falar.", "La plupart des appels tombent sur messagerie. Concentre-toi sur les clients que tu arrives à joindre."] },
    { p: ["Lembre as faturas pendentes e peça a regularização imediata: cartão, recarga da Wallet, transferência, ou cheque (só França) para <b>MyBestPro – 75 rue d’Amsterdam – 75008 Paris</b>, com o pseudónimo no verso.", "Rappelle les factures en attente et demande la régularisation immédiate : carte, recharge du Wallet, virement, ou chèque (France uniquement) à <b>MyBestPro – 75 rue d’Amsterdam – 75008 Paris</b>, avec le pseudo au dos."] },
    { p: ["IBAN ou outro meio? Envie um e-mail ou SMS pelo Bobi. O comprovativo de transferência vai para o e-mail de cobranças do país (ver Ficha memória → Contactos).", "IBAN ou autre moyen ? Envoie un e-mail ou un SMS depuis Bobi. Le justificatif de virement va à l’e-mail recouvrement du pays (voir Fiche mémo → Contacts)."] },
    { warn: ["Depois de cada chamada há uma <b>pausa automática de 1 min 30</b> para qualificar e deixar uma nota. Se o cliente não atendeu, anule a pausa manualmente.", "Après chaque appel il y a une <b>pause automatique de 1 min 30</b> pour qualifier et laisser une note. Si le client n’a pas répondu, annule la pause manuellement."] }
  ] },
  { t: ["Pagar mais tarde ou em prestações", "Payer plus tard ou en plusieurs fois"], b: [
    { steps: [
      { t: ["Pedir uma data concreta", "Demander une date précise"], p: ["Para verificar se o cliente cumpre.", "Pour vérifier que le client tient parole."] },
      { t: ["Programar a chamada", "Programmer l’appel"], p: ["Escolher o número; Motif: <b>Recouvrement</b>; <b>à une date précise</b>; data e hora segundo os seus dias de presença; <b>«vers moi»</b>; validar.", "Choisir le numéro ; Motif : <b>Recouvrement</b> ; <b>à une date précise</b> ; date et heure selon tes jours de présence ; <b>« vers moi »</b> ; valider."] },
      { t: ["2 ou 3 prestações", "2 ou 3 mensualités"], p: ["Uma chamada programada por data. Ex.: 05/11 e 05/12 → 2 chamadas.", "Un appel programmé par date. Ex. : 05/11 et 05/12 → 2 appels."] },
      { t: ["Parar o débito automático", "Arrêter le prélèvement automatique"], p: ["Se tem cartão: desative o robô até à data da última prestação (fica em OUI = desativado).", "S’il a une carte : désactive le robot jusqu’à la date de la dernière mensualité (OUI = désactivé)."] }
    ] },
    { p: ["<b>Notas</b>: na página de cobranças, use as notas propostas ou personalize a última linha. Só quando falou com o cliente (não duplicar a qualificação). Não use as notas riscadas a vermelho.", "<b>Notes</b> : sur la page recouvrement, utilise les notes proposées ou personnalise la dernière ligne. Seulement si tu as parlé au client (ne pas doubler la qualification). N’utilise pas les notes barrées en rouge."] }
  ] }],
  quiz: [
    { q: ["O cliente não atendeu e deixou caixa de voz.", "Le client n’a pas répondu, messagerie."], o: [["Anulo a pausa pós-chamada manualmente", "J’annule la pause post-appel manuellement"], ["Uso a pausa para descansar", "J’utilise la pause pour souffler"]], a: 0, w: ["A pausa de 1 min 30 é só quando houve contacto.", "La pause de 1 min 30 est seulement s’il y a eu contact."] },
    { q: ["O cliente paga em 2 vezes e tem cartão.", "Le client paie en 2 fois et a une carte."], o: [["Programo 2 chamadas e desativo o robô até à última data", "Je programme 2 appels et je désactive le robot jusqu’à la dernière date"], ["Deixo o robô", "Je laisse le robot"]], a: 0, w: ["Assim o robô não cobra antes das datas combinadas.", "Ainsi le robot ne prélève pas avant les dates convenues."] },
    { q: ["Cliente em Portugal enviou uma transferência. O comprovativo vai para:", "Client au Portugal a fait un virement. Le justificatif va à :"], o: [["gestaodecobrancas@wengo.com", "gestaodecobrancas@wengo.com"], ["apoiocliente@wengo.com", "apoiocliente@wengo.com"]], a: 0, w: ["Cada país tem o seu e-mail de cobranças.", "Chaque pays a son e-mail de recouvrement."] }
  ]
}
);

/* ---------------- PHASE 4 : OFFRES ET FIDÉLITÉ ---------------- */
BCF.modules.push(
{ id: "offres", phase: "fidelite", c: "#D35400", min: 10,
  title: ["Ofertas, vales, tarifas e apadrinhamento", "Offres, bons, tarifs et parrainage"],
  desc: ["Que oferta para que cliente, e como explicar o preço.", "Quelle offre pour quel client, et comment expliquer le prix."],
  lessons: [
  { t: ["Os tipos de ofertas", "Les types d’offres"], b: [
    { p: ["As ofertas aparecem ao clicar em «Consultation immédiate». A tabela mostra só as ofertas deste cliente. Clique numa linha para a ativar e ver os especialistas.", "Les offres apparaissent en cliquant sur « Consultation immédiate ». Le tableau n’affiche que les offres de ce client. Clique sur une ligne pour l’activer et voir les experts."] },
    { cards: [
      { i: "H", t: ["Oferta do dia", "Offre du jour"], p: ["Tempo limitado, para todos. Lembrar a validade.", "Durée limitée, pour tous. Rappeler la validité."] },
      { i: "D", t: ["Descoberta", "Découverte"], p: ["Só prospects, uma vez. Consulta de menos de 5 min: pode voltar a usar.", "Prospects seulement, une fois. Consultation de moins de 5 min : réutilisable."] },
      { i: "F", t: ["Pacotes", "Forfaits"], p: ["Duração e preço fixos, para controlar o gasto.", "Durée et prix fixes, pour maîtriser la dépense."] },
      { i: "E", t: ["Ofertas de especialistas", "Offres d’experts"], p: ["Descontos limitados, só certos especialistas.", "Réductions limitées, certains experts seulement."] },
      { i: "V", t: ["Vales de especialistas", "Bons d’experts"], p: ["Ex.: 10€ ou 5 min. Um por consulta, não acumulável.", "Ex. : 10€ ou 5 min. Un par consultation, non cumulable."] }
    ] },
    { shot: { f: "offre-it-expert.png", cap: ["Especialista em promoção: 1,92€/min em vez de 2,40€/min", "Expert en promo : 1,92€/min au lieu de 2,40€/min"] } }
  ] },
  { t: ["Os vales Wengo", "Les bons cadeaux Wengo"], b: [
    { p: ["A Wengo oferece um vale: no aniversário; 30 dias após a inscrição (ainda prospect); 30 dias após a 1.ª chamada (novo cliente); 180 dias após a última transação.", "Wengo offre un bon : à l’anniversaire ; 30 jours après l’inscription (toujours prospect) ; 30 jours après le 1er appel (nouveau client) ; 180 jours après la dernière transaction."] },
    { steps: [
      { t: ["Faixa azul «Cadeau disponible»", "Bandeau bleu « Cadeau disponible »"], p: ["Clique em «Ajouter au wallet».", "Clique sur « Ajouter au wallet »."] },
      { t: ["Verificar as condições", "Vérifier les conditions"], p: ["Data de nascimento, e-mail, telefone preenchidos e nenhuma dívida.", "Date de naissance, e-mail, téléphone remplis et aucun impayé."] },
      { t: ["OK no pop-in", "OK dans la pop-in"], p: ["O vale entra na Wallet.", "Le bon arrive dans le Wallet."] }
    ] },
    { shot: { f: "fiche-cadeau-reward.png", cap: ["Faixa azul: «Ajouter au wallet du client»", "Bandeau bleu : « Ajouter au wallet du client »"] } }
  ] },
  { t: ["Explicar o preço", "Expliquer le prix"], b: [
    { cards: [
      { i: "1", t: ["Cada minuto começado conta", "Chaque minute entamée compte"], p: ["Um minuto começado é um minuto inteiro.", "Une minute entamée est une minute complète."] },
      { i: "+", t: ["Sobretaxa telemóvel", "Surtaxe mobile"], p: ["0,20€/min na Europa, 0,30 USD/min na América do Sul.", "0,20€/min en Europe, 0,30 USD/min en Amérique du Sud."] }
    ] },
    { p: ["Faturas (bloco «Factures»): OK = paga, Erro = a aguardar pagamento, Falha = recarga não feita. Detalhe de promo ou vale: «Transactions» → ID → «Plus de détails».", "Factures (bloc « Factures ») : OK = payée, Erreur = en attente, Échec = recharge non effectuée. Détail promo ou bon : « Transactions » → ID → « Plus de détails »."] }
  ] },
  { t: ["Apadrinhamento", "Parrainage"], b: [
    { compare: [
      { cls: "good", h: ["O padrinho", "Le parrain"], tag: ["10€", "10€"], items: [["Cria um código de 6 a 8 caracteres", "Crée un code de 6 à 8 caractères"], ["Partilha-o (WhatsApp, Facebook, e-mail…)", "Le partage (WhatsApp, Facebook, e-mail…)"], ["Recebe 10€ se já gastou 30€ ou mais e o afilhado pagou uma consulta sem oferta", "Reçoit 10€ s’il a dépensé 30€ ou plus et que le filleul a payé une consultation sans offre"]] },
      { cls: "good", h: ["O afilhado", "Le filleul"], tag: ["30€", "30€"], items: [["Introduz o código em «tenho um código promocional»", "Saisit le code dans « j’ai un code promo »"], ["30€ creditados na Wallet", "30€ crédités dans le Wallet"], ["Tem de carregar pelo menos 1€ e ter um cartão", "Doit charger au moins 1€ et avoir une carte"], ["Na 1.ª consulta, à tarifa por minuto, sem boas-vindas nem promoções", "À la 1re consultation, au tarif minute, sans bienvenue ni promo"]] }
    ] },
    { warn: ["Um crédito de apadrinhamento sozinho não chega para lançar uma consulta: é preciso um meio de pagamento.", "Un crédit de parrainage seul ne suffit pas pour lancer une consultation : il faut un moyen de paiement."] }
  ] }],
  quiz: [
    { q: ["Consulta de descoberta de 3 min. Pode reutilizar?", "Consultation découverte de 3 min. Réutilisable ?"], o: [["Sim", "Oui"], ["Não", "Non"]], a: 0, w: ["Menos de 5 min: pode voltar a usar.", "Moins de 5 min : réutilisable."] },
    { q: ["Consulta de 7 min 10 s. Minutos faturados?", "Consultation de 7 min 10 s. Minutes facturées ?"], o: [["7", "7"], ["8", "8"]], a: 1, w: ["Cada minuto começado conta.", "Chaque minute entamée compte."] },
    { q: ["O afilhado quer usar os 30€ na oferta de boas-vindas.", "Le filleul veut utiliser ses 30€ sur l’offre de bienvenue."], o: [["Possível", "Possible"], ["Não: tarifa por minuto, sem promoções", "Non : tarif minute, sans promo"]], a: 1, w: ["Os 30€ são para a 1.ª consulta à tarifa por minuto.", "Les 30€ sont pour la 1re consultation au tarif minute."] }
  ]
},

{ id: "reward", phase: "fidelite", c: "#2874A6", min: 14,
  title: ["Wengo Reward (fidelidade)", "Wengo Reward (fidélité)"],
  desc: ["Inscrever, explicar os pontos e trocar por recompensas.", "Inscrire, expliquer les points et échanger contre des cadeaux."],
  lessons: [
  { t: ["As faixas no Bobi", "Les bandeaux dans Bobi"], b: [
    { chips: [
      { c: "s-mid", k: ["Laranja", "Orange"], p: ["Não inscrito, ou informações em falta → propor a inscrição.", "Pas inscrit, ou infos manquantes → proposer l’inscription."] },
      { c: "s-wait", k: ["Cinzento", "Gris"], p: ["Inscrito, mas ainda sem pontos suficientes.", "Inscrit, mais pas encore assez de points."] },
      { c: "s-ok", k: ["Azul", "Bleu"], p: ["Inscrito com pontos trocáveis → propor uma troca.", "Inscrit avec des points échangeables → proposer un échange."] }
    ] },
    { shot: { f: "fiche-bandeau-reward.png", cap: ["Faixa azul «Wengo Reward [inscrit]» na ficha: pontos disponíveis e recompensas", "Bandeau bleu « Wengo Reward [inscrit] » sur la fiche : points disponibles et récompenses"] } },
    { shot: { f: "reward-inscrit.png", cap: ["Cliente inscrito com 784 pontos: várias recompensas disponíveis", "Client inscrit avec 784 points : plusieurs récompenses disponibles"] } },
    { key: ["Inscrição gratuita. Precisa de: <b>e-mail válido, número de telemóvel, data de nascimento</b>.", "Inscription gratuite. Il faut : <b>e-mail valide, numéro de mobile, date de naissance</b>."] }
  ] },
  { t: ["Como se ganham pontos", "Comment on gagne des points"], b: [
    { table: { h: [["Ação", "Action"], ["Pontos", "Points"], ["Promo fim de semana", "Promo week-end"]], r: [
      [["Consulta de 5 min (chamada, chat, vídeo)", "Consultation de 5 min (appel, chat, vidéo)"], ["1", "1"], ["2", "2"]],
      [["15 min · 30 min", "15 min · 30 min"], ["3 · 6", "3 · 6"], ["6 · 12", "6 · 12"]],
      [["QPP simples · estudo QPP completo", "QPP simple · étude QPP complète"], ["2 · 4", "2 · 4"], ["4 · 8", "4 · 8"]],
      [["Avaliação (3 primeiros especialistas do mês)", "Avis (3 premiers experts du mois)"], ["5", "5"], ["—", "—"]],
      [["Favorito dado a um especialista", "Favori donné à un expert"], ["5", "5"], ["—", "—"]],
      [["Bónus avaliação (especialista com menos de 50 avaliações, ou sem avaliação há 7 dias, e sem avaliação do cliente há 30 dias)", "Bonus avis (expert avec moins de 50 avis, ou sans avis depuis 7 jours, et pas d’avis du client depuis 30 jours)"], ["+3", "+3"], ["—", "—"]],
      [["Afilhado inscrito", "Filleul inscrit"], ["10", "10"], ["—", "—"]]
    ] } },
    { tip: ["Uma única avaliação pode render até <b>13 pontos</b>. Só as consultas são duplicadas no fim de semana.", "Un seul avis peut rapporter jusqu’à <b>13 points</b>. Seules les consultations sont doublées le week-end."] }
  ] },
  { t: ["Os limites", "Les limites"], b: [
    { table: { h: [["Limite", "Limite"], ["Regra", "Règle"]], r: [
      [["Fatura não paga", "Facture impayée"], ["Sem pontos. Paga em 15 dias: creditados; senão, perdidos.", "Pas de points. Payée sous 15 jours : crédités ; sinon, perdus."]],
      [["Teto mensal", "Plafond mensuel"], ["200 pontos/mês por consultas (avaliações e apadrinhamento continuam).", "200 points/mois via consultations (avis et parrainage continuent)."]],
      [["Teto total", "Plafond total"], ["2000 pontos: tem de trocar para voltar a acumular.", "2000 points : il faut échanger pour réaccumuler."]],
      [["Gestos comerciais", "Gestes commerciaux"], ["Vales, minutos grátis, crédito oferecido: sem pontos. Descontos e pacotes: sim.", "Bons, minutes gratuites, crédit offert : pas de points. Réductions et forfaits : oui."]],
      [["Validade", "Validité"], ["12 meses; cada novo ponto prolonga todo o saldo 12 meses.", "12 mois ; chaque nouveau point prolonge tout le solde de 12 mois."]]
    ] } },
    { p: ["Pontos não creditados? Página do programa → bloco <b>«Registos de erros / Motivos de não crédito»</b>: tetos, transação inelegível, fatura não paga, gesto comercial, 3 avaliações já dadas no mês, avaliação já dada a este especialista, consulta demasiado curta.", "Points non crédités ? Page du programme → bloc <b>« Logs d’erreurs / Motifs de non-crédit »</b> : plafonds, transaction inéligible, facture impayée, geste commercial, 3 avis déjà laissés ce mois, avis déjà laissé à cet expert, consultation trop courte."] }
  ] },
  { t: ["Inscrever e trocar", "Inscrire et échanger"], b: [
    { steps: [
      { t: ["Abrir «Programme de fidélité»", "Ouvrir « Programme de fidélité »"], p: ["Botão de ação na ficha Bobi.", "Bouton d’action sur la fiche Bobi."] },
      { t: ["Completar as informações", "Compléter les infos"], p: ["Links clicáveis para adicionar e-mail, telemóvel, data de nascimento.", "Liens cliquables pour ajouter e-mail, mobile, date de naissance."] },
      { t: ["Inscrever", "Inscrire"], p: ["Botão de inscrição no Wengo Reward.", "Bouton d’inscription à Wengo Reward."] },
      { t: ["Ver o saldo", "Voir le solde"], p: ["Total, pontos do mês, pontos usados. Bloco «Opérations»: créditos e débitos.", "Total, points du mois, points utilisés. Bloc « Opérations » : crédits et débits."] },
      { t: ["Trocar", "Échanger"], p: ["«Échanger des points»: recompensas a preto = possíveis, a cinzento = pontos insuficientes. Uma nota é criada automaticamente.", "« Échanger des points » : récompenses en noir = possibles, en gris = pas assez de points. Une note est créée automatiquement."] }
    ] },
    { cards: [
      { i: "✦", t: ["Estudos e tiragens", "Études et tirages"], p: ["Caixas (documento + minutos) ou horóscopos.", "Box (document + minutes) ou horoscopes."] },
      { i: "⏱", t: ["Vales de compra", "Bons d’achat"], p: ["Pontos → minutos de consulta (chamada, chat, vídeo, RDV ou MER).", "Points → minutes de consultation (appel, chat, vidéo, RDV ou MER)."] },
      { i: "🎁", t: ["Outros", "Autres"], p: ["Joias, presentes, bilhetes para eventos.", "Bijoux, cadeaux, billets pour des événements."] }
    ] },
    { tip: ["Campanhas nos 3 primeiros dias de cada mês e promoções no fim de semana: aproveite para propor a troca.", "Campagnes les 3 premiers jours de chaque mois et promos le week-end : profites-en pour proposer l’échange."] },
    { script: [
      { s: ["«Vejo que ainda não está inscrito no Wengo Reward. É gratuito e já pode acumular pontos na próxima consulta.»", "« Je vois que vous n’êtes pas encore inscrit à Wengo Reward. C’est gratuit et vous pouvez déjà cumuler des points à la prochaine consultation. »"], tag: ["Inscrição", "Inscription"] },
      { s: ["«Faltam-lhe 6 pontos para o vale. Uma consulta de 15 minutos este fim de semana garante-os!»", "« Il vous manque 6 points pour le bon. Une consultation de 15 minutes ce week-end vous les garantit ! »"], tag: ["Incentivar", "Encourager"] },
      { s: ["«Com os seus pontos já pode ganhar uma caixa astrológica ou um vale para a próxima consulta!»", "« Avec vos points vous pouvez déjà gagner une box astro ou un bon pour votre prochaine consultation ! »"], tag: ["Troca", "Échange"] }
    ] }
  ] },
  { t: ["O especialista favorito do mês", "L’expert favori du mois"], b: [
    { p: ["Para dar um favorito, o cliente deve: ter pelo menos <b>3 consultas</b> desde a criação da conta; ter consultado no mês anterior (5 min ou mais, ou QPP); ter a conta ativa e um e-mail válido.", "Pour donner un favori, le client doit : avoir au moins <b>3 consultations</b> depuis la création du compte ; avoir consulté le mois précédent (5 min ou plus, ou QPP) ; avoir un compte actif et un e-mail valide."] },
    { key: ["Só <b>uma vez a cada 30 dias</b>. O cliente não consegue? Verifique a data do último favorito.", "Seulement <b>une fois tous les 30 jours</b>. Le client n’y arrive pas ? Vérifie la date du dernier favori."] }
  ] }],
  quiz: [
    { q: ["Faixa laranja Wengo Reward?", "Bandeau orange Wengo Reward ?"], o: [["Propor a inscrição", "Proposer l’inscription"], ["Propor uma troca", "Proposer un échange"]], a: 0, w: ["Laranja = não inscrito ou dados em falta; azul = pontos trocáveis.", "Orange = pas inscrit ou infos manquantes ; bleu = points échangeables."] },
    { q: ["O cliente tem 2000 pontos e não ganhou pontos ontem.", "Le client a 2000 points et n’a rien gagné hier."], o: [["Atingiu o teto total: tem de trocar", "Il a atteint le plafond total : il doit échanger"], ["Erro do sistema", "Bug du système"]], a: 0, w: ["Teto de 2000: trocar para voltar a acumular.", "Plafond de 2000 : échanger pour réaccumuler."] },
    { q: ["Consulta paga com minutos grátis. Ganha pontos?", "Consultation payée avec des minutes gratuites. Points ?"], o: [["Sim", "Oui"], ["Não", "Non"]], a: 1, w: ["Gestos comerciais não dão pontos.", "Les gestes commerciaux ne donnent pas de points."] },
    { q: ["Consulta de 15 min no fim de semana com a promo.", "Consultation de 15 min le week-end avec la promo."], o: [["3 pontos", "3 points"], ["6 pontos", "6 points"]], a: 1, w: ["3 pontos duplicados = 6.", "3 points doublés = 6."] }
  ]
},

{ id: "boutique", phase: "fidelite", c: "#A04000", min: 6,
  title: ["A loja Wengo", "La boutique Wengo"],
  desc: ["Orientar o cliente para comprar uma caixa ou um estudo.", "Orienter le client pour acheter une box ou une étude."],
  lessons: [
  { t: ["Comprar na loja", "Acheter dans la boutique"], b: [
    { lead: ["Os produtos (caixas, tiragens, estudos, guias) só se compram no site. O seu papel: guiar o cliente no espaço pessoal.", "Les produits (box, tirages, études, guides) s’achètent uniquement sur le site. Ton rôle : guider le client dans son espace."] },
    { steps: [
      { t: ["Entrar no espaço cliente", "Se connecter à l’espace client"], p: ["Página de login.", "Page de connexion."] },
      { t: ["Abrir a loja", "Ouvrir la boutique"], p: ["«Conheça os Tarotistas» → separador «Loja».", "« Découvrez les tarologues » → onglet « Boutique »."] },
      { t: ["Escolher um produto", "Choisir un produit"], p: ["«Ver o produto» para a descrição completa.", "« Voir le produit » pour la description complète."] },
      { t: ["Comprar ou oferecer", "Acheter ou offrir"], p: ["«Comprar» ou «Oferecer a um amigo» (outro e-mail).", "« Acheter » ou « Offrir à un ami » (autre e-mail)."] },
      { t: ["Pagar", "Payer"], p: ["Código promocional? «Tenho um código» antes de pagar.", "Code promo ? « J’ai un code » avant de payer."] }
    ] },
    { key: ["Depois da compra: <b>«Os meus conteúdos» → «Produtos da caixa»</b>. Os guias e estudos só se veem aí.", "Après l’achat : <b>« Mes contenus » → « Produits de la box »</b>. Les guides et études ne se voient que là."] }
  ] },
  { t: ["Os produtos", "Les produits"], b: [
    { p: ["Cada <b>caixa</b> = uma consulta de <b>15 min (França)</b> ou <b>20 min (outros países)</b> com um especialista participante, por telefone, vídeo ou chat, + um guia, estudo ou tiragem.", "Chaque <b>box</b> = une consultation de <b>15 min (France)</b> ou <b>20 min (autres pays)</b> avec un expert participant, par téléphone, vidéo ou chat, + un guide, une étude ou un tirage."] },
    { cards: [
      { i: "🎁", t: ["Caixas", "Box"], p: ["Horizonte, Tarot Amor, Tarot, Mercúrio retrógrado, Horas espelho, Compatibilidade, Numerológica, Love Box…", "Horizon, Tarot Amour, Tarot, Mercure rétrograde, Heures miroirs, Compatibilité, Numérologique, Love Box…"] },
      { i: "🃏", t: ["Tiragens", "Tirages"], p: ["Tarot do ano 11,90€ · Sim-Não 5,95€ · Anjos 8,99€ · Lenormand 9,99€ · Belline 9,99€ · Cruz celta 11€.", "Tarot de l’année 11,90€ · Oui-Non 5,95€ · Anges 8,99€ · Lenormand 9,99€ · Belline 9,99€ · Croix celtique 11€."] },
      { i: "📖", t: ["Estudos e guias", "Études et guides"], p: ["Horóscopo 9,90€ · Numerologia 11,90€ · Karma 9,75€ · Guias de 0€ a 4,90€.", "Horoscope 9,90€ · Numérologie 11,90€ · Karma 9,75€ · Guides de 0€ à 4,90€."] }
    ] }
  ] }],
  quiz: [
    { q: ["O cliente quer comprar uma caixa por telefone.", "Le client veut acheter une box par téléphone."], o: [["Faço a compra no Bobi", "Je fais l’achat dans Bobi"], ["Guio-o no espaço cliente → Loja", "Je le guide dans son espace → Boutique"]], a: 1, w: ["Os produtos só se compram no site.", "Les produits s’achètent uniquement sur le site."] },
    { q: ["Onde encontra o cliente o estudo comprado?", "Où le client trouve-t-il l’étude achetée ?"], o: [["Por e-mail", "Par e-mail"], ["«Os meus conteúdos» → «Produtos da caixa»", "« Mes contenus » → « Produits de la box »"]], a: 1, w: ["Só no espaço cliente.", "Seulement dans l’espace client."] },
    { q: ["Duração da consulta de uma caixa em Portugal?", "Durée de la consultation d’une box au Portugal ?"], o: [["15 min", "15 min"], ["20 min", "20 min"]], a: 1, w: ["15 min em França, 20 min nos outros países.", "15 min en France, 20 min dans les autres pays."] }
  ]
}
);

/* ---------------- PHASE 5 : COMPTE ET RÉCLAMATIONS ---------------- */
BCF.modules.push(
{ id: "compte", phase: "compte", c: "#117864", min: 8,
  title: ["Gerir a conta do cliente", "Gérer le compte client"],
  desc: ["Modificar dados, desbloquear o consumo, pedido de supressão.", "Modifier les infos, débloquer la conso, demande de suppression."],
  lessons: [
  { t: ["Modificar informações", "Modifier les informations"], b: [
    { steps: [
      { t: ["«Infos du compte»", "« Infos du compte »"], p: ["Bloco Ações → Compte, por baixo de «Ajouter un moyen de paiement».", "Bloc Actions → Compte, sous « Ajouter un moyen de paiement »."] },
      { t: ["Corrigir ou completar", "Corriger ou compléter"], p: ["Nacionalidade, fuso horário, e-mail, palavra-passe, código PIN, telefone principal e telemóvel, data de nascimento.", "Nationalité, fuseau horaire, e-mail, mot de passe, code PIN, téléphone principal et mobile, date de naissance."] },
      { t: ["«Valider» depois de cada modificação", "« Valider » après chaque modification"], p: ["Aparece um sinal verde. Não saia da página sem validar.", "Un signal vert apparaît. Ne quitte pas la page sans valider."] }
    ] },
    { shot: { f: "fiche-compte-liens.png", cap: ["Os links do bloco Compte: Infos du compte, Adresses, Abonnement news, Avis, Paramètres SMS", "Les liens du bloc Compte : Infos du compte, Adresses, Abonnement news, Avis, Paramètres SMS"] } },
    { warn: ["O <b>pseudónimo</b> (identificador de ligação) <b>não pode</b> ser modificado.", "Le <b>pseudo</b> (identifiant de connexion) <b>ne peut pas</b> être modifié."] },
    { p: ["O cliente recebe um e-mail automático quando o e-mail, o telefone principal ou o telemóvel mudam.", "Le client reçoit un e-mail automatique quand l’e-mail, le téléphone principal ou le mobile changent."] }
  ] },
  { t: ["Desbloquear o consumo", "Débloquer la consommation"], b: [
    { lead: ["Limite de consumo: <b>2000€</b> (Europa) ou <b>1500 USD</b> (clientes latinos). Para desbloquear, a identidade tem de estar verificada.", "Plafond de consommation : <b>2000€</b> (Europe) ou <b>1500 USD</b> (clients latinos). Pour débloquer, l’identité doit être vérifiée."] },
    { compare: [
      { cls: "bad", h: ["Identidade verificada: NÃO", "Identité vérifiée : NON"], tag: ["Pedir documento", "Demander la pièce"], items: [["Explicar que é obrigatório por razões legais", "Expliquer que c’est obligatoire pour des raisons légales"], ["Enviar o pedido de documento pelo Bobi: e-mail, ou SMS se não houver e-mail", "Envoyer la demande de pièce via Bobi : e-mail, ou SMS s’il n’y a pas d’e-mail"]] },
      { cls: "good", h: ["Identidade verificada: SIM", "Identité vérifiée : OUI"], tag: ["Desbloquear", "Débloquer"], items: [["Clicar no estado", "Cliquer sur le statut"], ["«Modifier le profil»", "« Modifier le profil »"], ["Botão verde «Débloquer client»", "Bouton vert « Débloquer client »"], ["O cliente recebe um e-mail automático", "Le client reçoit un e-mail automatique"]] }
    ] }
  ] },
  { t: ["Pedido de supressão da conta", "Demande de suppression du compte"], b: [
    { steps: [
      { t: ["«Envoyer email/sms»", "« Envoyer email/sms »"], p: ["Na ficha cliente.", "Sur la fiche client."] },
      { t: ["«Compte client»", "« Compte client »"], p: ["Categoria.", "Catégorie."] },
      { t: ["Assunto", "Sujet"], p: ["«Demande d’informations pour la suppression du compte». O cliente responde ao e-mail.", "« Demande d’informations pour la suppression du compte ». Le client répond à l’e-mail."] }
    ] },
    { tip: ["Para o encerramento definitivo, ver o módulo Reclamações: dívidas e saldo da Wallet a tratar antes.", "Pour la clôture définitive, voir le module Réclamations : impayés et solde Wallet à traiter avant."] }
  ] }],
  quiz: [
    { q: ["O cliente quer mudar de pseudónimo.", "Le client veut changer de pseudo."], o: [["Mudo em «Infos du compte»", "Je le change dans « Infos du compte »"], ["Impossível: o pseudónimo não se modifica", "Impossible : le pseudo ne se modifie pas"]], a: 1, w: ["O identificador de ligação é fixo.", "L’identifiant de connexion est fixe."] },
    { q: ["Cliente latino bloqueado. Qual é o limite?", "Client latino bloqué. Quel est le plafond ?"], o: [["2000€", "2000€"], ["1500 USD", "1500 USD"]], a: 1, w: ["2000€ na Europa, 1500 USD para latinos.", "2000€ en Europe, 1500 USD pour les latinos."] },
    { q: ["Identidade verificada = NÃO e o cliente quer desbloquear.", "Identité vérifiée = NON et le client veut débloquer."], o: [["Desbloqueio", "Je débloque"], ["Peço o documento de identidade pelo Bobi", "Je demande la pièce d’identité via Bobi"]], a: 1, w: ["Sem identidade verificada, não há desbloqueio.", "Sans identité vérifiée, pas de déblocage."] }
  ]
},

{ id: "reclamations", phase: "compte", c: "#CB4335", min: 14,
  title: ["Reclamações e escalada ao N2", "Réclamations et escalade au N2"],
  desc: ["Seguir, registar e tipos de reclamação.", "Suivre, enregistrer et types de réclamation."],
  lessons: [
  { t: ["Seguir uma reclamação", "Suivre une réclamation"], b: [
    { p: ["Ficha → seta «Réclamations» → «Réclamation en cours» → «Liste des réclamations». Veja a data, o conselheiro que a transmitiu e o conteúdo. Uma nota é adicionada automaticamente quando vai para o N2.", "Fiche → flèche « Réclamations » → « Réclamation en cours » → « Liste des réclamations ». Regarde la date, le conseiller qui l’a transmise et le contenu. Une note est ajoutée automatiquement au passage N2."] },
    { key: ["Prazo de tratamento: <b>24 a 48h úteis</b>. Ligar para saber o ponto da situação só atrasa. O serviço de e-mail fecha ao fim de semana e feriados.", "Délai de traitement : <b>24 à 48h ouvrées</b>. Appeler pour avoir des nouvelles ne fait que retarder. Le service e-mail est fermé le week-end et les jours fériés."] },
    { p: ["Mais de 48h úteis sem resposta? Peça ao cliente para verificar o e-mail e o spam; se necessário, relance a reclamação.", "Plus de 48h ouvrées sans réponse ? Demande au client de vérifier ses e-mails et ses spams ; si besoin, relance la réclamation."] },
    { cards: [
      { i: "€", t: ["Reembolsos", "Remboursements"], p: ["Assunto N2.", "Sujet N2."] },
      { i: "🔓", t: ["Desbloqueio de contas", "Déblocage de comptes"], p: ["Suspensas ou desativadas.", "Suspendus ou désactivés."] },
      { i: "☹", t: ["Insatisfação com especialista", "Insatisfaction expert"], p: ["Assunto N2.", "Sujet N2."] }
    ] }
  ] },
  { t: ["Registar uma reclamação", "Enregistrer une réclamation"], b: [
    { steps: [
      { t: ["Verificar as reclamações abertas", "Vérifier les réclamations ouvertes"], p: ["Evitar duplicados sobre o mesmo assunto.", "Éviter les doublons sur le même sujet."] },
      { t: ["Verificar o e-mail do cliente", "Vérifier l’e-mail du client"], p: ["Sem e-mail válido, o cliente não recebe a resposta.", "Sans e-mail valide, le client ne reçoit pas la réponse."] },
      { t: ["«Enregistrer une réclamation»", "« Enregistrer une réclamation »"], p: ["Escolher o tipo certo para o ticket ir à equipa certa.", "Choisir le bon type pour que le ticket aille à la bonne équipe."] },
      { t: ["Preencher e guardar", "Remplir et enregistrer"], p: ["N.º e data da transação, especialista, descrição precisa. «Se eu reler, percebe-se?»", "N° et date de transaction, expert, description précise. « Si je relis, c’est compréhensible ? »"] },
      { t: ["Informar o cliente", "Informer le client"], p: ["Resposta por e-mail em 48h úteis; não precisa de ligar antes.", "Réponse par e-mail sous 48h ouvrées ; pas besoin d’appeler avant."] }
    ] }
  ] },
  { t: ["Pedido de reembolso", "Demande de remboursement"], b: [
    { lead: ["Aceite só se a promoção não foi aplicada, ou se a consulta durou <b>menos de 4 minutos</b> (problema técnico). Diga-o logo ao cliente.", "Accepté seulement si la promo n’a pas été appliquée, ou si la consultation a duré <b>moins de 4 minutes</b> (problème technique). Dis-le tout de suite au client."] },
    { p: ["Peça detalhes (cortada, sem som, voz inaudível, oferta não aplicada) e indique especialista, data e n.º de transação.", "Demande les détails (coupée, sans son, voix inaudible, offre non appliquée) et indique expert, date et n° de transaction."] },
    { table: { h: [["Pacote interrompido", "Forfait interrompu"], ["Solução", "Solution"]], r: [
      [["Reembolso parcial", "Remboursement partiel"], ["Proporcional ao tempo não usado. Ex.: pacote 20 min/20€ cortado aos 10 min → 10€.", "Proportionnel au temps non utilisé. Ex. : forfait 20 min/20€ coupé à 10 min → 10€."]],
      [["Crédito para nova sessão", "Crédit pour une nouvelle séance"], ["O tempo não usado. Ex.: cortado aos 8 min → 12 min de crédito.", "Le temps non utilisé. Ex. : coupé à 8 min → 12 min de crédit."]],
      [["Reembolso total", "Remboursement total"], ["Se a falha vem da plataforma (não de uma desconexão do cliente).", "Si la panne vient de la plateforme (pas d’une déconnexion du client)."]]
    ] } }
  ] },
  { t: ["Os outros tipos", "Les autres types"], b: [
    { table: { h: [["Tipo", "Type"], ["O que fazer", "Que faire"]], r: [
      [["Deixar de ser contactado", "Ne plus être contacté"], ["Verificar se as <b>7 opções</b> da newsletter estão em «não». Se já estão: reclamação indicando o e-mail ou telefone a não contactar.", "Vérifier que les <b>7 options</b> newsletter sont sur « non ». Si c’est déjà le cas : réclamation en précisant l’e-mail ou le téléphone à ne plus contacter."]],
      [["Encerramento da conta", "Clôture du compte"], ["Dívidas ou chargeback: impossível encerrar antes de pagar (transferir para cobranças se preciso). Saldo na Wallet: propor uma consulta; se preferir reembolso, N2 reembolsa e encerra.", "Impayés ou chargeback : clôture impossible avant règlement (transférer au recouvrement si besoin). Solde Wallet : proposer une consultation ; s’il préfère un remboursement, le N2 rembourse et clôture."]],
      [["Insatisfação Wengo", "Insatisfaction Wengo"], ["Perguntas precisas para perceber a origem; registar de forma clara.", "Questions précises pour comprendre l’origine ; enregistrer clairement."]],
      [["Insatisfação com especialista", "Insatisfaction expert"], ["<b>Sem reembolso.</b> O especialista é independente; o cliente pode escrever-lhe pela mensagem do espaço cliente. Propor outro especialista (género, tema, especialidade) ou pedir um gesto comercial ao especialista.", "<b>Pas de remboursement.</b> L’expert est indépendant ; le client peut lui écrire via la messagerie de son espace. Proposer un autre expert (genre, thème, spécialité) ou demander un geste commercial à l’expert."]],
      [["Outro motivo", "Autre motif"], ["Tudo o resto: descrição concisa e precisa.", "Tout le reste : description concise et précise."]]
    ] } },
    { warn: ["Nunca prometa um reembolso ao cliente. Lembre que as consultas são caminhos de reflexão: a vidência não garante resultados.", "Ne promets jamais de remboursement. Rappelle que les consultations sont des pistes de réflexion : la voyance ne garantit pas de résultat."] }
  ] }],
  quiz: [
    { q: ["Consulta cortada aos 3 min por problema técnico.", "Consultation coupée à 3 min par un problème technique."], o: [["Reembolso possível: reclamação", "Remboursement possible : réclamation"], ["Sem reembolso", "Pas de remboursement"]], a: 0, w: ["Menos de 4 min = reembolso aceite.", "Moins de 4 min = remboursement accepté."] },
    { q: ["O cliente não gostou da especialista e quer o dinheiro de volta.", "Le client n’a pas aimé l’experte et veut être remboursé."], o: [["Prometo o reembolso", "Je promets le remboursement"], ["Explico que não há reembolso e proponho outra especialista", "J’explique qu’il n’y a pas de remboursement et propose une autre experte"]], a: 1, w: ["Insatisfação com especialista não dá direito a reembolso.", "L’insatisfaction expert ne donne pas droit à remboursement."] },
    { q: ["O cliente liga pela 3.ª vez para saber da reclamação de ontem.", "Le client appelle pour la 3e fois pour sa réclamation d’hier."], o: [["Crio outra reclamação", "Je crée une autre réclamation"], ["Explico o prazo de 48h úteis e que ligar atrasa", "J’explique le délai de 48h ouvrées et qu’appeler retarde"]], a: 1, w: ["E evite duplicados.", "Et évite les doublons."] },
    { q: ["Encerrar a conta de um cliente com 15€ na Wallet.", "Clôturer le compte d’un client avec 15€ dans son Wallet."], o: [["Proponho uma consulta; se preferir, reembolso via N2", "Je propose une consultation ; s’il préfère, remboursement via N2"], ["Encerro e o saldo perde-se", "Je clôture et le solde est perdu"]], a: 0, w: ["O N2 reembolsa o saldo e encerra.", "Le N2 rembourse le solde et clôture."] }
  ]
},

{ id: "foxi", phase: "compte", c: "#E67E22", min: 10,
  title: ["Foxi: os tickets", "Foxi : les tickets"],
  desc: ["Tratar os e-mails clientes como tickets.", "Traiter les e-mails clients comme des tickets."],
  lessons: [
  { t: ["A lista de tickets", "La liste des tickets"], b: [
    { lead: ["Cada pedido de cliente é um ticket, da criação à resolução. Referência única: <code>TKT-AAAA-NNNNNN</code>.", "Chaque demande client est un ticket, de la création à la résolution. Référence unique : <code>TKT-AAAA-NNNNNN</code>."] },
    { chips: [
      { c: "s-wait", k: ["Cliente", "Client"], p: ["Badge azul: e-mail do cliente.", "Badge bleu : e-mail du client."] },
      { c: "s-mid", k: ["Bobi", "Bobi"], p: ["Badge violeta: e-mail do sistema.", "Badge violet : e-mail du système."] },
      { c: "s-wait", k: ["CRM", "CRM"], p: ["Badge cinzento.", "Badge gris."] },
      { c: "s-bad", k: ["N2", "N2"], p: ["Badge laranja: escalado para o N2.", "Badge orange : escaladé au N2."] }
    ] },
    { p: ["<b>Filtros</b>: estado, prioridade, grupo, conselheiro, nível (N1 por defeito), tipo, período, «só não lidos». Os filtros ficam no URL: copie-o para partilhar. <b>Listas personalizadas</b>: botão + ao lado de «Listes de tickets» (nome, ícone, cor, filtros, partilha).", "<b>Filtres</b> : statut, priorité, groupe, conseiller, niveau (N1 par défaut), type, période, « non lus uniquement ». Les filtres sont dans l’URL : copie-la pour partager. <b>Listes perso</b> : bouton + à côté de « Listes de tickets » (nom, icône, couleur, filtres, partage)."] }
  ] },
  { t: ["Ciclo de vida", "Cycle de vie"], b: [
    { chips: [
      { c: "s-wait", k: ["Novo", "Nouveau"], p: ["Ainda não tratado.", "Pas encore pris en charge."] },
      { c: "s-mid", k: ["Em curso", "En cours"], p: ["Um agente trabalha nele.", "Un agent travaille dessus."] },
      { c: "s-wait", k: ["Espera cliente", "Attente client"], p: ["Aguarda resposta do cliente.", "Attend la réponse du client."] },
      { c: "s-wait", k: ["Espera interna", "Attente interne"], p: ["Aguarda outro serviço.", "Attend un autre service."] },
      { c: "s-ok", k: ["Resolvido", "Résolu"], p: ["Resolvido, a confirmar.", "Résolu, à confirmer."] },
      { c: "s-ok", k: ["Fechado", "Fermé"], p: ["Encerrado definitivamente.", "Clôturé définitivement."] }
    ] },
    { tip: ["Se o cliente responde a um ticket resolvido ou fechado, volta automaticamente a «Em curso».", "Si le client répond à un ticket résolu ou fermé, il repasse automatiquement « En cours »."] },
    { p: ["Mudar o estado, atribuir (a si ou a um colega) e mudar de grupo: painel <b>Actions</b> à direita do ticket.", "Changer le statut, assigner (à toi ou un collègue) et changer de groupe : panneau <b>Actions</b> à droite du ticket."] }
  ] },
  { t: ["Criar, escalar, colaborar", "Créer, escalader, collaborer"], b: [
    { steps: [
      { t: ["«Nouveau ticket»", "« Nouveau ticket »"], p: ["Objeto e grupo obrigatórios; depois categoria e subcategoria (em cascata), prioridade, contacto, descrição.", "Objet et groupe obligatoires ; puis catégorie et sous-catégorie (en cascade), priorité, contact, description."] },
      { t: ["Escalar para o N2", "Escalader en N2"], p: ["Botão laranja «Escalader en N2» → confirmar. O N1 deixa de ver o ticket.", "Bouton orange « Escalader en N2 » → confirmer. Le N1 ne voit plus le ticket."] },
      { t: ["Comentários internos", "Commentaires internes"], p: ["Painel Comentários: o cliente não os vê. Para instruções ou resultados de pesquisa.", "Panneau Commentaires : le client ne les voit pas. Pour des consignes ou des résultats de recherche."] }
    ] },
    { warn: ["Sem contacto selecionado, os e-mails do ticket não têm destinatário. Só managers e admins podem «désescalader» para N1.", "Sans contact sélectionné, les e-mails du ticket n’ont pas de destinataire. Seuls managers et admins peuvent désescalader en N1."] },
    { p: ["<b>Presença</b>: um olho âmbar mostra que um colega está no mesmo ticket (sinal a cada 30 s, desaparece ~90 s depois de sair). Não bloqueia: combinem para não tratar duas vezes.", "<b>Présence</b> : un œil ambre montre qu’un collègue est sur le même ticket (signal toutes les 30 s, disparaît ~90 s après départ). Ça ne bloque pas : coordonnez-vous pour ne pas traiter deux fois."] }
  ] }],
  quiz: [
    { q: ["O cliente responde a um ticket fechado.", "Le client répond à un ticket fermé."], o: [["Fica fechado", "Il reste fermé"], ["Volta a «Em curso»", "Il repasse « En cours »"]], a: 1, w: ["Automático.", "Automatique."] },
    { q: ["Escalou um ticket para o N2. Ainda o vê?", "Tu as escaladé un ticket en N2. Le vois-tu encore ?"], o: [["Sim", "Oui"], ["Não, o N1 não vê os tickets N2", "Non, le N1 ne voit pas les tickets N2"]], a: 1, w: ["Só N2, managers e admins.", "Seulement N2, managers et admins."] },
    { q: ["Vê um olho âmbar no ticket.", "Tu vois un œil ambre sur le ticket."], o: [["Um colega está a consultá-lo: combinamos", "Un collègue le consulte : on se coordonne"], ["O ticket está bloqueado", "Le ticket est bloqué"]], a: 0, w: ["É só informativo.", "C’est seulement informatif."] }
  ]
}
);

/* ---------------- CODES D’ERREUR ---------------- */
BCF.errors = [
  ["2024", ["Cartão já presente em 3 contas: não pode ser adicionado.", "Carte déjà présente sur 3 comptes : impossible de l’ajouter."]],
  ["2025", ["Máximo de 10 cartões: apagar um para adicionar outro.", "Maximum de 10 cartes : en supprimer une pour en ajouter une."]],
  ["2026", ["Mesmo cartão adicionado demasiadas vezes em 24h: pedir outro meio.", "Même carte ajoutée trop de fois en 24h : demander un autre moyen."]],
  ["2003", ["Fraude: cartão na lista negra.", "Fraude : carte sur liste noire."]],
  ["2009", ["Fraude: IP do cliente na lista negra.", "Fraude : IP du client sur liste noire."]],
  ["2029", ["Demasiadas ações de pagamento (20 em 5 min).", "Trop d’actions de paiement (20 en 5 min)."]],
  ["2030", ["BIN do cartão (6 primeiros dígitos) na lista negra.", "BIN de la carte (6 premiers chiffres) sur liste noire."]],
  ["2033", ["Número de telefone na lista negra.", "Numéro de téléphone sur liste noire."]],
  ["2040 · 2041 · 2042", ["Mais de um chargeback, mais de 7 impagos ou mais de 300€ em dívida (conta ou primas).", "Plus d’un chargeback, plus de 7 impayés ou plus de 300€ dus (compte ou cousins)."]],
  ["10128", ["Conta bloqueada: contactar o serviço de cobranças.", "Compte bloqué : contacter le service recouvrement."]],
  ["10570", ["Meio de pagamento inválido: pedir outro.", "Moyen de paiement invalide : en demander un autre."]],
  ["10601", ["Conta suspensa: informar e reclamação N2 se quiser desbloquear.", "Compte suspendu : informer et réclamation N2 s’il veut débloquer."]],
  ["10602", ["Consumo bloqueado num nível Wengo: informar e reclamação N2.", "Consommation bloquée à un palier Wengo : informer et réclamation N2."]],
  ["10608", ["Pay as you go modificado ou carteira bloqueada.", "Pay as you go modifié ou portefeuille bloqué."]],
  ["120020 · 120021 · 120026", ["Oferta já usada com outra conta (telefone, cartão ou PayPal em comum).", "Offre déjà utilisée avec un autre compte (téléphone, carte ou PayPal en commun)."]],
  ["39009", ["Transação recusada: tentar de novo, outro meio, ou orientar para o banco.", "Transaction refusée : réessayer, autre moyen, ou orienter vers la banque."]],
  ["39100", ["Fundos insuficientes (mínimo = 10 min de consulta).", "Fonds insuffisants (minimum = 10 min de consultation)."]],
  ["39103", ["CVC inválido: voltar a digitar; se persistir, outro meio ou banco.", "CVC invalide : ressaisir ; si ça persiste, autre moyen ou banque."]],
  ["39104", ["Meio de pagamento não aceite: outro meio ou banco.", "Moyen de paiement non accepté : autre moyen ou banque."]],
  ["39111", ["Cartão expirado: pedir outro meio.", "Carte expirée : demander un autre moyen."]],
  ["39118", ["Limite do cartão ultrapassado: aumentar no banco ou outro meio.", "Plafond de la carte dépassé : l’augmenter à la banque ou autre moyen."]]
];

/* ---------------- FICHE MÉMO ---------------- */
BCF.memo = [
  { n: "8h–23h", c: "#6C5CE7", q: ["Horário do serviço?", "Horaires du service ?"], a: ["Todos os dias.", "Tous les jours."] },
  { n: "2h", c: "#5D6D7E", q: ["Máximo na fila?", "Maximum en file ?"], a: ["Depois de 2h, o pedido falha.", "Après 2h, la demande échoue."] },
  { n: "20 min", c: "#5D6D7E", q: ["Quando relançar em posição 1?", "Quand relancer en position 1 ?"], a: ["Mais de 20 min e especialista sem pausa.", "Plus de 20 min et expert pas en pause."] },
  { n: "48h", c: "#1F8A5B", q: ["RDV automático?", "RDV automatique ?"], a: ["Menos de 48h e no horário do especialista.", "Moins de 48h et dans les horaires de l’expert."] },
  { n: "15 min", c: "#1F8A5B", q: ["RDV não validado?", "RDV non validé ?"], a: ["Anulado 15 min antes.", "Annulé 15 min avant."] },
  { n: "0,20€", c: "#2E86C1", q: ["Sobretaxa telemóvel?", "Surtaxe mobile ?"], a: ["Por minuto, só MER indireta. 0,30 USD na América do Sul.", "Par minute, seulement en MER indirecte. 0,30 USD en Amérique du Sud."] },
  { n: "10 min", c: "#16A085", q: ["Saldo mínimo sem cartão?", "Solde minimum sans carte ?"], a: ["O equivalente a 10 min de consulta.", "L’équivalent de 10 min de consultation."] },
  { n: "2h30", c: "#16A085", q: ["Saldo bloqueado por uma chamada?", "Solde bloqué par un appel ?"], a: ["Chat ~30 min, QPP 7 dias.", "Chat ~30 min, QPP 7 jours."] },
  { n: "30 j", c: "#C0392B", q: ["Anular um pedido de autorização?", "Annuler une demande d’autorisation ?"], a: ["Até 30 dias úteis.", "Jusqu’à 30 jours ouvrés."] },
  { n: "+5%", c: "#16A085", q: ["Bónus Wallet?", "Bonus Wallet ?"], a: ["Recarga de mais de 100€ pelo espaço cliente.", "Recharge de plus de 100€ depuis l’espace client."] },
  { n: "4 min", c: "#CB4335", q: ["Reembolso técnico?", "Remboursement technique ?"], a: ["Consulta de menos de 4 min, ou promo não aplicada.", "Consultation de moins de 4 min, ou promo non appliquée."] },
  { n: "48h", c: "#CB4335", q: ["Prazo de uma reclamação?", "Délai d’une réclamation ?"], a: ["24 a 48h úteis.", "24 à 48h ouvrées."] },
  { n: "100 pts", c: "#2874A6", q: ["Pontos de fidelidade?", "Points de fidélité ?"], a: ["A partir de 100, propor minutos gratuitos.", "Dès 100, proposer des minutes gratuites."] },
  { n: "200 · 2000", c: "#2874A6", q: ["Tetos Wengo Reward?", "Plafonds Wengo Reward ?"], a: ["200 pts/mês por consultas; 2000 no total.", "200 pts/mois via consultations ; 2000 au total."] },
  { n: "2000€", c: "#117864", q: ["Limite de consumo?", "Plafond de consommation ?"], a: ["1500 USD para latinos. Desbloquear com identidade verificada.", "1500 USD pour les latinos. Débloquer avec identité vérifiée."] },
  { n: "1 min 30", c: "#7D3C98", q: ["Pausa pós-chamada cobranças?", "Pause post-appel recouvrement ?"], a: ["Anular se o cliente não atendeu.", "À annuler si le client n’a pas répondu."] },
  { n: "3 · 10", c: "#B5493A", q: ["Limites de cartões?", "Limites de cartes ?"], a: ["Um cartão em 3 contas no máximo; 10 cartões por conta.", "Une carte sur 3 comptes max ; 10 cartes par compte."] },
  { n: "Paris", c: "#1F8A5B", q: ["Que hora mostra o Bobi?", "Quelle heure affiche Bobi ?"], a: ["A de Paris: converter para o cliente.", "Celle de Paris : convertir pour le client."] }
];

/* ---------------- CONTACTS ---------------- */
BCF.contacts = [
  { pays: ["🇵🇹 Portugal", "🇵🇹 Portugal"], rows: [
    [["Serviço cliente", "Service client"], "apoiocliente@wengo.com", "+351 308 803 009"],
    [["Cobranças", "Recouvrement"], "gestaodecobrancas@wengo.com", "+351 308 812 632"],
    [["Serviço especialistas", "Service experts"], "apoio.especialistas@wengo.com", ""] ] },
  { pays: ["🇫🇷 França", "🇫🇷 France"], rows: [
    [["Serviço cliente", "Service client"], "serviceclient@wengo.com", "+33 1 75 75 75 75"],
    [["Cobranças", "Recouvrement"], "recouvrement@wengo.com", "+33 1 75 75 75 22"],
    [["Serviço especialistas", "Service experts"], "serviceexperts@wengo.com", ""] ] },
  { pays: ["🇮🇹 Itália", "🇮🇹 Italie"], rows: [
    [["Serviço cliente", "Service client"], "assistenza@wengo.com", "+39 06 9480 1933"],
    [["Cobranças", "Recouvrement"], "recupero@wengo.com", "+39 06 9450 0064"],
    [["Serviço especialistas", "Service experts"], "esperti@wengo.com", ""] ] },
  { pays: ["🇪🇸 Espanha", "🇪🇸 Espagne"], rows: [
    [["Serviço cliente", "Service client"], "servicioclientela@wengo.com", "+34 911 011 669"],
    [["Cobranças", "Recouvrement"], "cobro@wengo.com", "+34 919 031 945"],
    [["Serviço especialistas", "Service experts"], "servicioexperto@wengo.com", ""] ] },
  { pays: ["🇬🇧🇺🇸 UK, US e outros", "🇬🇧🇺🇸 UK, US et autres"], rows: [
    [["Customer service", "Customer service"], "customerservice@astrofame.com", "+1 857 239 0321"] ] }
];
BCF.adresse = ["Morada para cheques (França): MyBestPro – 75 rue d’Amsterdam – 75008 Paris. O IBAN envia-se pelo Bobi (e-mail ou SMS).", "Adresse pour les chèques (France) : MyBestPro – 75 rue d’Amsterdam – 75008 Paris. L’IBAN s’envoie via Bobi (e-mail ou SMS)."];
