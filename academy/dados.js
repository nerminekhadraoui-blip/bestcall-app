/* ==========================================================
   BestCall Academy — contenu (PT / FR)
   Chaque texte = [português, français].
   Les vidéos restent dans le Drive de Marta : on ne stocke ici que leur identifiant Drive.
   Pour ajouter une vidéo sans toucher au code : onglet Academy → « Ajouter une ressource » (admin/direction).
   ========================================================== */
window.BCA = window.BCA || {};

BCA.familias = [
  { id: "bobi", ico: "🖥️", t: ["Bobi e consultas", "Bobi et consultations"] },
  { id: "pagamentos", ico: "💳", t: ["Pagamentos e cobranças", "Paiements et recouvrement"] },
  { id: "conta", ico: "🔐", t: ["Conta do cliente", "Compte client"] },
  { id: "fidelidade", ico: "🎁", t: ["Fidelidade e apadrinhamento", "Fidélité et parrainage"] },
  { id: "ia", ico: "✨", t: ["Ferramentas IA", "Outils IA"] }
];

BCA.temas = [
  /* ---------------- BOBI ---------------- */
  {
    id: "ficha-cliente", fam: "bobi", dur: "20 min", data: "18/11/2026",
    video: "1B2bUVamw-MkvGZ7u9e0eqp3a0xOyPm-o", notas: "1bvgy0ZiNCjPLMMGL0bZa5PSirDD-CLOrkX5KrvSKlu4",
    t: ["A ficha do cliente no Bobi", "La fiche client dans Bobi"],
    intro: ["Visita guiada à primeira página da ficha: o que ver em 10 segundos para saber com quem estás a falar e o que lhe propor.",
            "Visite guidée de la première page de la fiche : ce qu'il faut voir en 10 secondes pour savoir à qui tu parles et quoi lui proposer."],
    pontos: [
      ["A primeira linha diz logo a tipologia: Prospect (0 transações), Novo (menos de 3 consultas), Inativo (ofertas especiais), Glow VIP (cliente muito ativo).",
       "La première ligne donne tout de suite la typologie : Prospect (0 transaction), Nouveau (moins de 3 consultations), Inactif (offres spéciales), Glow VIP (client très actif)."],
      ["Informações gerais: último consumo, pedidos em curso (e-mail, marcação, fila de espera), reclamações abertas ou resolvidas.",
       "Informations générales : dernière consommation, demandes en cours (e-mail, RDV, file d'attente), réclamations ouvertes ou résolues."],
      ["Histórico de e-mails e SMS enviados ao cliente (botão « aperçu ») e histórico das chamadas call center.",
       "Historique des e-mails et SMS envoyés au client (bouton « aperçu ») et historique des appels du call center."],
      ["Contas primas: contas ligadas pelo mesmo telefone, cartão ou PayPal — útil quando o cliente liga com outro nome.",
       "Comptes cousins (« primas ») : comptes liés par le même téléphone, la même carte ou le même PayPal — utile quand le client appelle sous un autre nom."],
      ["Informações detalhadas: verificar se a identidade já foi enviada (plafonds de 1500 € / 2000 €).",
       "Informations détaillées : vérifier si la pièce d'identité a déjà été envoyée (plafonds de 1 500 € / 2 000 €)."],
      ["Transações: canal, duração, valor pago; quadrado amarelo = promoção. Faturas pós-consulta ≠ faturas de carregamento do porta-moedas (pré-pago).",
       "Transactions : canal, durée, montant payé ; carré jaune = promotion. Factures post-consultation ≠ factures de chargement du porte-monnaie (prépayé)."],
      ["Info da conta: corrigir e-mail (2 vezes), telemóvel nos 2 campos (desbloqueia vale de aniversário e pontos), palavra-passe (8 caracteres, maiúscula no início), data de nascimento, preferências SMS/e-mail. O alias e o fuso horário não se mudam.",
       "Infos du compte : corriger l'e-mail (2 fois), mobile dans les 2 champs (débloque le bon d'anniversaire et les points), mot de passe (8 caractères, majuscule au début), date de naissance, préférences SMS/e-mail. L'alias et le fuseau horaire ne se modifient pas."]
    ],
    atencao: [
      ["Na « saúde da conta », o ÚNICO botão que podes usar é o de parar as cobranças (robô) até uma data. Proibido mexer nos outros.",
       "Dans la « santé du compte », le SEUL bouton autorisé est celui qui suspend les prélèvements (robot) jusqu'à une date. Interdit de toucher aux autres."],
      ["Lança sempre as consultas pela « Consulta imediata », nunca pelos especialistas favoritos: senão os pacotes/promoções podem não ser aplicados.",
       "Lance toujours les consultations par « Consultation immédiate », jamais depuis les spécialistes favoris : sinon les forfaits/promos risquent de ne pas s'appliquer."],
      ["Antes de criar uma reclamação, verifica se já há uma em aberto. Se houver, não crias outra.",
       "Avant de créer une réclamation, vérifie qu'il n'y en a pas déjà une ouverte. Si oui, n'en crée pas d'autre."],
      ["Um vale de 5 € não funciona com uma oferta em promoção: escolhe a tarifa normal para o cliente o poder usar.",
       "Un bon de 5 € ne fonctionne pas avec une offre en promotion : choisis le tarif normal pour que le client puisse l'utiliser."]
    ],
    quiz: [
      { q: ["Qual é o único botão da « saúde da conta » que o conselheiro pode usar?", "Quel est le seul bouton de la « santé du compte » que le conseiller peut utiliser ?"],
        o: [["Suspender a conta", "Suspendre le compte"], ["Parar as cobranças (robô) até uma data", "Suspendre les prélèvements (robot) jusqu'à une date"], ["Mudar o alias", "Changer l'alias"]], a: 1 },
      { q: ["Uma cliente tem um vale de 5 € e a especialista está em promoção. O que fazes?", "Une cliente a un bon de 5 € et la spécialiste est en promo. Que fais-tu ?"],
        o: [["Lanço a promoção, o vale aplica-se na mesma", "Je lance la promo, le bon s'applique quand même"], ["Escolho a tarifa normal para o vale poder ser usado", "Je choisis le tarif normal pour que le bon puisse être utilisé"], ["Crio uma reclamação", "Je crée une réclamation"]], a: 1 },
      { q: ["O que são as « contas primas »?", "Que sont les « comptes cousins » (primas) ?"],
        o: [["Contas da mesma família", "Les comptes d'une même famille"], ["Contas ligadas pelo mesmo telefone, cartão ou PayPal", "Des comptes liés par le même téléphone, carte ou PayPal"], ["Contas VIP", "Les comptes VIP"]], a: 1 }
    ]
  },
  {
    id: "nova-pagina-consulta", fam: "bobi", dur: "15 min", data: "20/10/2026",
    video: "1anzJSSmzY0miyW-DKSCazmEe6gKwpCJW",
    t: ["Nova página de lançamento de consulta", "Nouvelle page de lancement de consultation"],
    intro: ["A nova página do Bobi para lançar consultas: especialistas preferidos, especialistas a recomendar e verificação da oferta antes de lançar.",
            "La nouvelle page Bobi pour lancer les consultations : spécialistes préférés, spécialistes à recommander et vérification de l'offre avant de lancer."],
    pontos: [
      ["No topo: meios de pagamento do cliente, telefone (altera-se se for preciso) e uma oferta sugerida quando o cliente tem direito a uma.",
       "En haut : moyens de paiement du client, téléphone (à modifier si besoin) et une offre suggérée quand le client y a droit."],
      ["Especialistas preferidos: os que o cliente já consultou. Filtros « disponíveis » ou « em promoção » — tira um filtro antes de pôr outro.",
       "Spécialistes préférés : ceux que le client a déjà consultés. Filtres « disponibles » ou « en promo » — retire un filtre avant d'en mettre un autre."],
      ["Ofertas do especialista: tarifa standard, pacotes (12 min, 15 €, 20 €…) e o preço para telemóvel já aparece.",
       "Offres du spécialiste : tarif standard, forfaits (12 min, 15 €, 20 €…) et le prix pour mobile est maintenant affiché."],
      ["Especialistas a recomendar / a descobrir: para clientes que não sabem com quem falar. Já estão selecionados pela Wengo.",
       "Spécialistes à recommander / à découvrir : pour les clients qui ne savent pas avec qui parler. Ils sont déjà sélectionnés par Wengo."],
      ["Disponibilidade: passa o rato por cima do ícone chat / telefone / vídeo antes de prometer a consulta.",
       "Disponibilité : survole l'icône chat / téléphone / vidéo avant de promettre la consultation."],
      ["Especialista ocupado: o lançamento entra em fila de espera (vês quantas pessoas estão antes) ou fazes uma marcação (RDV).",
       "Spécialiste occupé : le lancement passe en file d'attente (tu vois combien de personnes sont avant) ou tu fais un RDV."],
      ["Escolha livre: escreve o nome de um especialista de outro anuário (ex.: Silvia de Espanha) e procura.",
       "Choix libre : écris le nom d'un spécialiste d'un autre annuaire (ex. : Silvia d'Espagne) et lance la recherche."]
    ],
    atencao: [
      ["Antes de lançar, verifica sempre a oferta selecionada (-20 %, -30 %, pacote…). Perder 2 segundos evita uma reclamação.",
       "Avant de lancer, vérifie toujours l'offre sélectionnée (-20 %, -30 %, forfait…). Perdre 2 secondes évite une réclamation."],
      ["As ofertas « VIC V 1000 », « 15 minutos » e « 50 % » do formato antigo não se utilizam.",
       "Les offres « VIC V 1000 », « 15 minutes » et « 50 % » de l'ancien format ne s'utilisent pas."],
      ["O limite de despesa (plafond) só existe para a França.", "Le plafond de dépense n'existe que pour la France."]
    ],
    quiz: [
      { q: ["Como confirmas que um especialista está disponível por telefone?", "Comment confirmes-tu qu'un spécialiste est disponible par téléphone ?"],
        o: [["Pela palavra « disponível »", "Avec le mot « disponible »"], ["Passando o rato por cima do ícone do canal", "En survolant l'icône du canal"], ["Perguntando ao cliente", "En demandant au client"]], a: 1 },
      { q: ["O especialista está ocupado e o cliente não quer esperar. O que propões?", "Le spécialiste est occupé et le client ne veut pas attendre. Que proposes-tu ?"],
        o: [["Um especialista recomendado ou uma marcação", "Un spécialiste recommandé ou un RDV"], ["Cancelar a chamada", "Raccrocher"], ["Lançar na mesma", "Lancer quand même"]], a: 0 }
    ]
  },
  {
    id: "consulta-email", fam: "bobi", dur: "8 min", data: "18/11/2026",
    video: "1KF_nHr5mZqWSmbhh2T81Hf9vb_FvvPGs", notas: "1iXtbzrEhUeTWiL2aFXqjirdK_tjP2sYkpb1AtVYTMoM",
    t: ["Lançar uma consulta por e-mail", "Lancer une consultation par e-mail"],
    intro: ["Passo a passo para lançar uma consulta por e-mail a partir da ficha do cliente.",
            "Pas à pas pour lancer une consultation par e-mail depuis la fiche client."],
    passos: [
      ["Verifica o saldo do porta-moedas ou o cartão associado (o saldo não pode ser promoção).", "Vérifie le solde du porte-monnaie ou la carte associée (le solde ne doit pas être une promo)."],
      ["Abre « Consulta por e-mail » e valida o cliente.", "Ouvre « Consultation par e-mail » et valide le client."],
      ["Escreve o nome do especialista (qualquer país — não depende do anuário) e valida.", "Écris le nom du spécialiste (n'importe quel pays — ça ne dépend pas de l'annuaire) et valide."],
      ["Escolhe o tipo: simples (15 linhas máx., resposta até 72 h) ou aprofundada.", "Choisis le type : simple (15 lignes max., réponse sous 72 h) ou approfondie."],
      ["Valida o meio de pagamento. Nome e data de nascimento do cliente vêm pré-preenchidos.", "Valide le moyen de paiement. Le nom et la date de naissance du client sont pré-remplis."],
      ["Se a consulta for para outra pessoa (filho, marido…), indica o nome e a data de nascimento dela.", "Si la consultation est pour quelqu'un d'autre (enfant, mari…), indique son nom et sa date de naissance."],
      ["Opcional: notificação SMS (+2 €) — confirma o telemóvel.", "Optionnel : notification SMS (+2 €) — confirme le mobile."],
      ["Põe um título (ex.: « Limpeza »), escreve a questão e clica em colocar a questão.", "Mets un titre (ex. : « Nettoyage »), écris la question et clique sur placer la question."]
    ],
    atencao: [
      ["Mesas radiónicas e limpezas = SEMPRE consulta aprofundada.", "Tables radioniques et nettoyages = TOUJOURS consultation approfondie."],
      ["O valor fica bloqueado (ex.: 60 €) e só é debitado quando o especialista responde (até 72 h).", "Le montant est bloqué (ex. : 60 €) et n'est débité que quand le spécialiste répond (sous 72 h)."],
      ["A resposta NUNCA vai para o e-mail pessoal do cliente: está no histórico das consultas do espaço cliente.", "La réponse ne va JAMAIS sur l'e-mail personnel du client : elle est dans l'historique des consultations de l'espace client."]
    ],
    quiz: [
      { q: ["Um cliente pede uma limpeza por e-mail. Que tipo de consulta?", "Un client demande un nettoyage par e-mail. Quel type de consultation ?"],
        o: [["Simples", "Simple"], ["Aprofundada", "Approfondie"], ["Imediata por telefone", "Immédiate par téléphone"]], a: 1 },
      { q: ["Onde o cliente lê a resposta do especialista?", "Où le client lit-il la réponse du spécialiste ?"],
        o: [["No seu e-mail pessoal", "Sur son e-mail personnel"], ["Por SMS", "Par SMS"], ["No histórico das consultas do espaço cliente", "Dans l'historique des consultations de l'espace client"]], a: 2 },
      { q: ["Quando é debitado o valor de uma consulta por e-mail?", "Quand le montant d'une consultation par e-mail est-il débité ?"],
        o: [["Logo ao colocar a questão", "Dès que la question est placée"], ["Quando o especialista responde", "Quand le spécialiste répond"], ["No fim do mês", "En fin de mois"]], a: 1 }
    ]
  },

  /* ---------------- PAGAMENTOS ---------------- */
  {
    id: "associar-cartao", fam: "pagamentos", dur: "6 min", data: "09/10/2026",
    video: "17D_WnrZ63wveB0c68OAgDTJNxy_SLUAa",
    t: ["Associar um cartão bancário", "Associer une carte bancaire"],
    intro: ["Como associar (ou apagar) um cartão quando o cliente está ao telefone, sem nunca ouvir os dados sensíveis.",
            "Comment associer (ou supprimer) une carte quand le client est au téléphone, sans jamais entendre les données sensibles."],
    passos: [
      ["ANTES DE TUDO: clica no botão vermelho do Graam para parar a gravação da chamada (passa a azul).", "AVANT TOUT : clique sur le bouton rouge de Graam pour arrêter l'enregistrement de l'appel (il passe en bleu)."],
      ["Vai a « Ajouter paiement » → cartão bancário → formulário.", "Va dans « Ajouter paiement » → carte bancaire → formulaire."],
      ["Pede só os 16 números da frente e o nome no cartão. A barra passa de vermelha a azul quando o número está certo.", "Demande seulement les 16 chiffres du recto et le nom sur la carte. La barre passe du rouge au bleu quand le numéro est correct."],
      ["Transfere a chamada para o sistema automático de segurança: o cliente marca a validade e o CVC no teclado. Pede-lhe para não desligar.", "Transfère l'appel vers le serveur de sécurité : le client tape la date d'expiration et le CVC sur son clavier. Demande-lui de ne pas raccrocher."],
      ["De volta contigo: marca as duas caixas de confirmação e valida. Barra verde = cartão associado.", "De retour avec toi : coche les deux cases de confirmation et valide. Barre verte = carte associée."]
    ],
    pontos: [
      ["Apagar um cartão: meios de pagamento → clicar no cartão → botão vermelho « supprimer ».", "Supprimer une carte : moyens de paiement → cliquer sur la carte → bouton rouge « supprimer »."],
      ["Não é possível apagar se o cliente tem dívida, consulta em curso ou marcação.", "Impossible de supprimer si le client a une dette, une consultation en cours ou un RDV."],
      ["Só se o cliente PEDIR (ex.: pessoa idosa com medo de errar), podes introduzir tu a validade e o CVC com o botão amarelo.", "Seulement si le client le DEMANDE (ex. : personne âgée qui a peur de se tromper), tu peux saisir toi-même la date et le CVC avec le bouton jaune."]
    ],
    atencao: [
      ["Nunca peças a data de validade nem o CVC ao telefone: é o sistema automático que os recolhe.", "Ne demande jamais la date d'expiration ni le CVC au téléphone : c'est le serveur automatique qui les recueille."],
      ["Cartões não aceites: Maestro e American Express.", "Cartes non acceptées : Maestro et American Express."]
    ],
    quiz: [
      { q: ["Qual é o primeiro gesto antes de recolher um cartão ao telefone?", "Quel est le premier geste avant de recueillir une carte au téléphone ?"],
        o: [["Pedir o CVC", "Demander le CVC"], ["Parar a gravação no Graam (botão vermelho → azul)", "Arrêter l'enregistrement dans Graam (bouton rouge → bleu)"], ["Enviar um e-mail", "Envoyer un e-mail"]], a: 1 },
      { q: ["Que dados pedes oralmente ao cliente?", "Quelles données demandes-tu oralement au client ?"],
        o: [["Os 16 números e o nome no cartão", "Les 16 chiffres et le nom sur la carte"], ["O número, a validade e o CVC", "Le numéro, la date et le CVC"], ["Só o CVC", "Seulement le CVC"]], a: 0 }
    ]
  },
  {
    id: "pre-pago", fam: "pagamentos", dur: "21 min", data: "19/11/2026",
    video: "1auY45x8-AOHMKqY6ld09d7_TR4R-IHYC", notas: "1qLpAzpxS7tytvGihbXShnuFhBvvm9bgOpDEl7h-b9TY",
    t: ["Pagamento pré-pago: Pay Link, Multibanco, MB Way, Bizum", "Paiement prépayé : Pay Link, Multibanco, MB Way, Bizum"],
    intro: ["Os meios de pagamento para clientes que querem limitar o consumo ao saldo do porta-moedas — e o erro « pay go » que custa reembolsos.",
            "Les moyens de paiement pour les clients qui veulent limiter leur consommation au solde du porte-monnaie — et l'erreur « pay go » qui coûte des remboursements."],
    tabela: {
      cab: [["Meio", "Moyen"], ["País", "Pays"], ["Onde", "Où"]],
      lin: [
        [["Pay Link", "Pay Link"], ["Todos", "Tous"], ["Bobi → Ajouter paiement → créditer wallet → Pay Link (SMS ou e-mail)", "Bobi → Ajouter paiement → créditer wallet → Pay Link (SMS ou e-mail)"]],
        [["Multibanco", "Multibanco"], ["Portugal", "Portugal"], ["Bobi → mesmo botão → Multibanco: entidade (5 dígitos) + referência (9), válida 3 dias, só para esse valor", "Bobi → même bouton → Multibanco : entité (5 chiffres) + référence (9), valable 3 jours, uniquement pour ce montant"]],
        [["Do cartão para o porta-moedas", "De la carte vers le porte-monnaie"], ["Todos", "Tous"], ["Bobi → créditer wallet → meio de pagamento da conta → valor → barra verde", "Bobi → créditer wallet → moyen de paiement du compte → montant → barre verte"]],
        [["MB Way", "MB Way"], ["Portugal", "Portugal"], ["Selfcare cliente (desktop) → porta-moedas → valor → MB Way → telefone; o cliente valida na app", "Selfcare client (desktop) → porte-monnaie → montant → MB Way → téléphone ; le client valide dans l'appli"]],
        [["Bizum", "Bizum"], ["Espanha", "Espagne"], ["Selfcare cliente (desktop), conta com faturação em Espanha", "Selfcare client (desktop), compte avec facturation en Espagne"]],
        [["Limite de despesa", "Plafond de dépense"], ["França", "France"], ["Na consulta imediata, ANTES de lançar: valor mínimo = 10 min", "Dans la consultation immédiate, AVANT de lancer : minimum = 10 min"]]
      ]
    },
    atencao: [
      ["Nunca mexas no botão « pay go » sem pedido claro do cliente: em « pay go sim » a consulta pode durar até 2 horas, mesmo com 5 € de saldo.",
       "Ne touche jamais au bouton « pay go » sans demande claire du client : en « pay go oui », la consultation peut durer jusqu'à 2 heures, même avec 5 € de solde."],
      ["França: o limite de despesa tem de ser posto ANTES de lançar. Depois de lançada, já não serve — e a Wengo reembolsa consultas de 100 €.",
       "France : le plafond doit être mis AVANT de lancer. Une fois lancée, c'est trop tard — et Wengo rembourse des consultations de 100 €."],
      ["Recargas de 100 € ou 250 € pelo espaço cliente = +5 % de bónus.", "Recharges de 100 € ou 250 € via l'espace client = +5 % de bonus."]
    ],
    quiz: [
      { q: ["Uma cliente portuguesa quer pagar por MB Way. Onde fazes o carregamento?", "Une cliente portugaise veut payer par MB Way. Où fais-tu le chargement ?"],
        o: [["No Bobi, botão Ajouter paiement", "Dans Bobi, bouton Ajouter paiement"], ["No Selfcare cliente (desktop)", "Dans le Selfcare client (desktop)"], ["Por Pay Link", "Par Pay Link"]], a: 1 },
      { q: ["Quanto tempo é válida uma referência Multibanco?", "Combien de temps une référence Multibanco est-elle valable ?"],
        o: [["24 horas", "24 heures"], ["3 dias", "3 jours"], ["1 mês", "1 mois"]], a: 1 },
      { q: ["Uma cliente francesa quer limitar a 40 €. Quando pões o limite?", "Une cliente française veut limiter à 40 €. Quand mets-tu le plafond ?"],
        o: [["Depois de lançar a consulta", "Après avoir lancé la consultation"], ["Antes de lançar a consulta", "Avant de lancer la consultation"], ["Não é possível", "Ce n'est pas possible"]], a: 1 }
    ]
  },
  {
    id: "cobrancas", fam: "pagamentos", dur: "22 min", data: "19/11/2026",
    video: "1Rf7a1NuxJQWoQD8w9ZHNmogZjpx6ZQST", notas: "1AqmWR2nOlFO8Dak_MZ7IsImf4-TpnFkA0Mfstja7QZI",
    t: ["Cobranças: clientes com dívida que nos ligam", "Recouvrement : clients en impayé qui nous appellent"],
    intro: ["O que fazer quando um cliente em dívida liga para pagar ou para consultar (chamadas de entrada — as chamadas de saída são de outra equipa).",
            "Que faire quand un client en impayé appelle pour payer ou pour consulter (appels entrants — les appels sortants sont gérés par une autre équipe)."],
    passos: [
      ["Identifica a dívida: palavra « recouvrement » na ficha.", "Repère la dette : mot « recouvrement » sur la fiche."],
      ["Abre « Gérer le recouvrement »: número de faturas, montante, fatura mais antiga, cartões, crédito no porta-moedas.", "Ouvre « Gérer le recouvrement » : nombre de factures, montant, facture la plus ancienne, cartes, crédit dans le porte-monnaie."],
      ["Confirma com o cliente os 4 últimos números do cartão e indica « cliente ao telefone ».", "Confirme avec le client les 4 derniers chiffres de la carte et indique « client au téléphone »."],
      ["Seleciona as faturas que o cliente quer pagar (o sistema escolhe a mais pequena por defeito).", "Sélectionne les factures que le client veut payer (le système prend la plus petite par défaut)."],
      ["Se há crédito no porta-moedas, deduz primeiro esse valor para amortizar.", "S'il y a du crédit dans le porte-monnaie, déduis d'abord ce montant pour amortir."],
      ["Tenta o pagamento. Se outro cartão: escolhe-o e faz « tout basculer » (ou fluxo a fluxo).", "Tente le paiement. Autre carte : sélectionne-la et fais « tout basculer » (ou flux par flux)."],
      ["Se falhar: envia um Pay Link, associa outro cartão, ou deixa uma nota.", "En cas d'échec : envoie un Pay Link, associe une autre carte, ou laisse une note."]
    ],
    pontos: [
      ["Bloqueio: a partir de 300 € OU 7 faturas, o cliente tem de pagar uma ou mais consultas antes de voltar a consultar.", "Blocage : à partir de 300 € OU 7 factures, le client doit payer une ou plusieurs consultations avant de reconsulter."],
      ["Erro 1008 / saldo insuficiente: não insistas. Erro « transação não autorizada »: o cliente contacta o banco.", "Erreur 1008 / solde insuffisant : n'insiste pas. Erreur « transaction non autorisée » : le client contacte sa banque."],
      ["Sem quadrado azul = cartão já não é válido (cartões provisórios expiram).", "Pas de carré bleu = la carte n'est plus valide (les cartes provisoires expirent)."],
      ["O cliente pede para não ser debitado até uma data: desativa o robô no calendário (ele tenta 2 a 3 vezes por dia).", "Le client demande à ne pas être prélevé jusqu'à une date : désactive le robot dans le calendrier (il tente 2 à 3 fois par jour)."]
    ],
    atencao: [
      ["Depois de deixar uma nota de promessa de pagamento, vai às notas e clica no ALFINETE: só assim a equipa de chamadas de saída a vê e não volta a ligar.",
       "Après une note de promesse de paiement, va dans les notes et clique sur l'ÉPINGLE : sinon l'équipe des appels sortants ne la voit pas et rappelle le client."],
      ["Cheque, transferência e programação de chamadas não são tratados por ti.", "Chèque, virement et programmation d'appels ne sont pas gérés par toi."],
      ["Muitas vezes, depois de pagar, o cliente quer consultar logo a seguir: propõe!", "Souvent, après avoir payé, le client veut consulter tout de suite : propose-le !"]
    ],
    quiz: [
      { q: ["A partir de quando um cliente em dívida não pode consultar?", "À partir de quand un client en impayé ne peut-il plus consulter ?"],
        o: [["100 € ou 3 faturas", "100 € ou 3 factures"], ["300 € ou 7 faturas", "300 € ou 7 factures"], ["500 € ou 10 faturas", "500 € ou 10 factures"]], a: 1 },
      { q: ["Deixaste uma nota « paga dia 28 ». O que falta fazer?", "Tu as laissé une note « paie le 28 ». Que reste-t-il à faire ?"],
        o: [["Nada", "Rien"], ["Clicar no alfinete para a nota ficar visível às cobranças", "Cliquer sur l'épingle pour que la note soit visible du recouvrement"], ["Enviar um e-mail ao nível 2", "Envoyer un e-mail au niveau 2"]], a: 1 },
      { q: ["O pagamento dá « transação não autorizada ». Qual é o conselho?", "Le paiement donne « transaction non autorisée ». Quel conseil ?"],
        o: [["Tentar 10 vezes", "Réessayer 10 fois"], ["O cliente contacta o banco + nota na ficha", "Le client contacte sa banque + note sur la fiche"], ["Apagar o cartão", "Supprimer la carte"]], a: 1 }
    ]
  },

  /* ---------------- CONTA ---------------- */
  {
    id: "suspensao-conta", fam: "conta", dur: "11 min", data: "19/11/2026",
    video: "1FWOfd36ZOUacxN5_gN4URfxlV9MmUVWj", notas: "1Hq5iCHP4Gr0JMnp2ZcnJj1k-fWiyF-yDHEXJsAFF9BQ",
    t: ["Suspender, reativar ou apagar uma conta", "Suspendre, réactiver ou supprimer un compte"],
    intro: ["Os três pedidos sobre o estado da conta e quem pode fazer o quê.", "Les trois demandes sur l'état du compte et qui peut faire quoi."],
    tabela: {
      cab: [["Pedido", "Demande"], ["O que fazes", "Ce que tu fais"]],
      lin: [
        [["Suspender", "Suspendre"], ["Saúde da conta → estado do perfil → motivo (ex.: limite económico) → confirmar. Envia o e-mail « confirmação da suspensão temporária ». O cliente já não consulta mas continua a aceder ao espaço.", "Santé du compte → état du profil → motif (ex. : limite économique) → confirmer. Envoie l'e-mail « confirmation de la suspension temporaire ». Le client ne peut plus consulter mais garde l'accès à son espace."]],
        [["Reativar", "Réactiver"], ["Lê as notas (nada que proíba?) → clica em « suspendu » → reativação → confirmar → nota « cliente pediu a reativação ».", "Lis les notes (rien qui l'interdit ?) → clique sur « suspendu » → réactivation → confirmer → note « le client a demandé la réactivation »."]],
        [["Apagar", "Supprimer"], ["Nunca ao telefone. E-mail « Demande d'informations pour la suppression du compte ». Se o cliente não quer usar e-mail: reclamação para o nível 2 (serviço web).", "Jamais au téléphone. E-mail « Demande d'informations pour la suppression du compte ». Si le client ne veut pas passer par e-mail : réclamation au niveau 2 (service web)."]],
        [["Reativar uma conta em purga", "Réactiver un compte en purge"], ["Bobi → técnico → purge et anonymisation → procurar o alias → anular → atualizar a ficha → ativar + reativação. Possível durante ~30 dias (RGPD).", "Bobi → technique → purge et anonymisation → chercher l'alias → annuler → actualiser la fiche → activer + réactivation. Possible pendant ~30 jours (RGPD)."]]
      ]
    },
    atencao: [
      ["Se uma nota proíbe a reativação (cliente complicado, jurídico…), não reativas: cria uma reclamação para o nível 2.", "Si une note interdit la réactivation (client compliqué, juridique…), ne réactive pas : crée une réclamation au niveau 2."],
      ["O nível 1 não tem direitos para apagar contas.", "Le niveau 1 n'a pas les droits pour supprimer un compte."]
    ],
    quiz: [
      { q: ["Um cliente pede para apagar a conta ao telefone. O que fazes?", "Un client demande au téléphone de supprimer son compte. Que fais-tu ?"],
        o: [["Apago a conta", "Je supprime le compte"], ["Envio o e-mail pré-feito de pedido de supressão", "J'envoie l'e-mail préparé de demande de suppression"], ["Suspendo a conta", "Je suspends le compte"]], a: 1 },
      { q: ["Uma conta suspensa: o cliente ainda pode…", "Un compte suspendu : le client peut encore…"],
        o: [["Consultar", "Consulter"], ["Aceder ao espaço e enviar mensagens", "Accéder à son espace et envoyer des messages"], ["Nada", "Rien"]], a: 1 }
    ]
  },
  {
    id: "consumo-bloqueado", fam: "conta", dur: "7 min", data: "19/11/2026",
    video: "1F7mMzvQ6v5De9FFMwlUZwo4MnGI4Ra3b", notas: "1oP3TM6Ug76XgN3z-I96OOc80f9orBOSiNMPXhFiWlIY",
    t: ["Consumo bloqueado a 1500 € e 2000 €", "Consommation bloquée à 1 500 € et 2 000 €"],
    intro: ["Dois plafonds, duas regras. A chave: a identidade está verificada (« oui ») ou não?", "Deux plafonds, deux règles. La clé : l'identité est-elle vérifiée (« oui ») ou non ?"],
    tabela: {
      cab: [["Plafond", "Plafond"], ["Quem desbloqueia", "Qui débloque"], ["Identidade não verificada", "Identité non vérifiée"]],
      lin: [
        [["1500 €", "1 500 €"], ["O cliente sozinho no espaço cliente, ou nós se a identidade estiver verificada", "Le client seul dans son espace, ou nous si l'identité est vérifiée"], ["O cliente desbloqueia sozinho, ou envia a identidade por e-mail", "Le client débloque seul, ou envoie sa pièce d'identité par e-mail"]],
        [["2000 €", "2 000 €"], ["Só o serviço cliente", "Seulement le service client"], ["E-mail (ou SMS) « pedido de identidade para consumo bloqueado »; desbloqueamos ao receber o documento", "E-mail (ou SMS) « demande de pièce d'identité pour consommation bloquée » ; on débloque à réception"]]
      ]
    },
    passos: [
      ["Modificar perfil → informações detalhadas → « identidade verificada ».", "Modifier le profil → informations détaillées → « identité vérifiée »."],
      ["Se estiver em « oui » (verde): desbloqueia logo, sem pedir documento.", "Si c'est « oui » (vert) : débloque tout de suite, sans demander de document."],
      ["Se estiver em « non »: pede o documento por e-mail.", "Si c'est « non » : demande le document par e-mail."]
    ],
    atencao: [["Só a pedido do cliente. Não é preciso criar reclamação.", "Seulement à la demande du client. Pas besoin de créer de réclamation."]],
    quiz: [
      { q: ["Cliente bloqueado a 2000 € com identidade verificada « oui ». O que fazes?", "Client bloqué à 2 000 € avec identité vérifiée « oui ». Que fais-tu ?"],
        o: [["Peço o documento de novo", "Je redemande le document"], ["Desbloqueio logo", "Je débloque tout de suite"], ["Crio uma reclamação", "Je crée une réclamation"]], a: 1 },
      { q: ["Quem pode desbloquear a 1500 €?", "Qui peut débloquer à 1 500 € ?"],
        o: [["Só o nível 2", "Seulement le niveau 2"], ["O cliente sozinho no espaço cliente (ou nós com identidade verificada)", "Le client seul dans son espace (ou nous avec identité vérifiée)"], ["Ninguém", "Personne"]], a: 1 }
    ]
  },

  /* ---------------- FIDELIDADE ---------------- */
  {
    id: "fidelidade", fam: "fidelidade", dur: "18 min", data: "19/11/2026",
    video: "1FVH6H8pUTYyO4Ym33qeceAInM69YwXiN", notas: "1opqwyuTKv9HENb-PNQGPbYkLxeSPtj1bN2580mnSSfs",
    t: ["Programa de fidelidade (Wengo Reward)", "Programme de fidélité (Wengo Reward)"],
    intro: ["Inscrever todos os clientes, explicar porque não acumularam pontos e propor as trocas no início do mês.",
            "Inscrire tous les clients, expliquer pourquoi ils n'ont pas cumulé de points et proposer les échanges en début de mois."],
    pontos: [
      ["Inscrição: precisa de data de nascimento, e-mail válido e telemóvel (no campo « portable »). Dá 5 pontos logo.", "Inscription : il faut une date de naissance, un e-mail valide et un mobile (dans le champ « portable »). Elle donne 5 points tout de suite."],
      ["Se o telemóvel já está noutra ficha como móvel, o sistema recusa: é preciso outro número.", "Si le mobile est déjà sur une autre fiche comme portable, le système refuse : il faut un autre numéro."],
      ["Trocas: mínimo 100 pontos para minutos, 30 pontos para relatórios astrológicos (estes só aparecem no espaço cliente, não no Bobi).", "Échanges : minimum 100 points pour des minutes, 30 points pour les rapports astrologiques (visibles seulement dans l'espace client, pas dans Bobi)."],
      ["5 min: chat, telefone ou vídeo · 10 min: SÓ chat ou vídeo · 15 min: chat, telefone ou vídeo.", "5 min : chat, téléphone ou vidéo · 10 min : SEULEMENT chat ou vidéo · 15 min : chat, téléphone ou vidéo."],
      ["Troca por engano ainda não usada: histórico das operações → anular + comentário → os pontos voltam.", "Échange par erreur pas encore utilisé : historique des opérations → annuler + commentaire → les points reviennent."],
      ["« Log de reg » = porque não acumulou: vale usado, transação < 30 s, fatura não paga.", "« Log de reg » = pourquoi pas de points : bon utilisé, transaction < 30 s, facture impayée."],
      ["Fatura não paga: se paga nos 14 dias, os pontos aparecem 24 h depois do pagamento.", "Facture impayée : si elle est payée sous 14 jours, les points arrivent 24 h après le paiement."],
      ["Limite de 200 pontos/mês para consultas; sem limite para comentários, consultas por e-mail e apadrinhamento.", "Limite de 200 points/mois pour les consultations ; pas de limite pour les commentaires, consultations par e-mail et parrainage."]
    ],
    atencao: [
      ["Sê proativa: inscreve TODOS os clientes, mesmo sem pedido. Evita reclamações de quem descobre o programa meses depois.", "Sois proactive : inscris TOUS les clients, même sans demande. Ça évite les réclamations de ceux qui découvrent le programme des mois après."],
      ["A troca de pontos só se faz a pedido do cliente.", "L'échange de points se fait uniquement à la demande du client."],
      ["Nos 3 primeiros dias do mês há promoções (ex.: 20 pontos em vez de 100 para 5 min): propõe aos clientes com pontos!", "Les 3 premiers jours du mois, il y a des promos (ex. : 20 points au lieu de 100 pour 5 min) : propose-les aux clients qui ont des points !"]
    ],
    quiz: [
      { q: ["Um cliente trocou pontos por 10 minutos e quer usá-los por telefone. É possível?", "Un client a échangé des points contre 10 minutes et veut les utiliser par téléphone. Possible ?"],
        o: [["Sim", "Oui"], ["Não, os 10 min são só chat ou vídeo — podes anular a troca se não foi usada", "Non, les 10 min sont chat ou vidéo seulement — tu peux annuler l'échange s'il n'est pas utilisé"], ["Só ao fim de semana", "Seulement le week-end"]], a: 1 },
      { q: ["Quantos pontos dá a inscrição no programa?", "Combien de points donne l'inscription au programme ?"],
        o: [["5", "5"], ["30", "30"], ["100", "100"]], a: 0 },
      { q: ["Inscreves um cliente no programa…", "Tu inscris un client au programme…"],
        o: [["Só se ele pedir", "Seulement s'il le demande"], ["Sempre, mesmo sem pedido", "Toujours, même sans demande"], ["Nunca", "Jamais"]], a: 1 }
    ]
  },
  {
    id: "apadrinhamento", fam: "fidelidade", dur: "8 min", data: "19/11/2026",
    video: "196g9ZDeuD8OMccK-tghOz0dw8hAII7Ra", notas: "1gc2idAV7XptiYVlBAgUDFR46vDe8CdN6B5GhMayHso8",
    t: ["Apadrinhamento (parrainage)", "Parrainage"],
    intro: ["Como funciona o código de apadrinhamento, o que ganham o padrinho e o afilhado, e as condições.", "Comment fonctionne le code de parrainage, ce que gagnent le parrain et le filleul, et les conditions."],
    passos: [
      ["O padrinho (já cliente, não prospect) vai ao espaço cliente → oferta de apadrinhamento e cria o seu código (6 a 8 caracteres).", "Le parrain (déjà client, pas prospect) va dans son espace → offre de parrainage et crée son code (6 à 8 caractères)."],
      ["Partilha o código: WhatsApp, SMS, Facebook, link ou convite por e-mail/SMS.", "Il partage le code : WhatsApp, SMS, Facebook, lien ou invitation par e-mail/SMS."],
      ["O afilhado aplica o código sozinho no espaço cliente → porta-moedas → código promocional → aplicar. Os 30 € aparecem logo.", "Le filleul applique le code lui-même dans son espace → porte-monnaie → code promo → appliquer. Les 30 € apparaissent aussitôt."],
      ["Quando o afilhado faz uma 2.ª consulta paga do bolso dele, o padrinho recebe 10 €.", "Quand le filleul fait une 2e consultation payée de sa poche, le parrain reçoit 10 €."]
    ],
    atencao: [
      ["Os 30 € são só para a 1.ª consulta, à tarifa normal ao minuto: não acumuláveis com boas-vindas nem com especialista em promoção.", "Les 30 € sont uniquement pour la 1re consultation, au tarif normal à la minute : non cumulables avec l'offre de bienvenue ni avec un spécialiste en promo."],
      ["Vale de apadrinhamento válido 1 mês, usado de uma só vez (não se divide).", "Bon de parrainage valable 1 mois, à utiliser en une seule fois (il ne se fractionne pas)."],
      ["Nós não aplicamos o código pelo Bobi: é o afilhado que o faz.", "On n'applique pas le code depuis Bobi : c'est le filleul qui le fait."],
      ["O saldo de apadrinhamento não chega para lançar uma consulta: é preciso um meio de pagamento válido associado.", "Le solde de parrainage ne suffit pas pour lancer une consultation : il faut un moyen de paiement valide associé."]
    ],
    quiz: [
      { q: ["Quando o padrinho recebe os 10 €?", "Quand le parrain reçoit-il les 10 € ?"],
        o: [["Quando o afilhado aplica o código", "Quand le filleul applique le code"], ["Quando o afilhado usa os 30 €", "Quand le filleul utilise les 30 €"], ["Quando o afilhado faz uma 2.ª consulta paga do bolso dele", "Quand le filleul fait une 2e consultation payée de sa poche"]], a: 2 },
      { q: ["O afilhado pode usar 15 € agora e 15 € depois?", "Le filleul peut-il utiliser 15 € maintenant et 15 € plus tard ?"],
        o: [["Sim", "Oui"], ["Não, é numa só consulta", "Non, c'est en une seule consultation"]], a: 1 }
    ]
  },

  /* ---------------- IA ---------------- */
  {
    id: "ferramentas-ia", fam: "ia", dur: "16 min", data: "18/11/2026",
    video: "1lS1_n3EiVRjO8ZXDtjYW0UnuzhsBnrvU",
    t: ["As ferramentas IA da BestCall", "Les outils IA de BestCall"],
    intro: ["Gems Gemini, Gemini Notebooks e a bolinha azul do Bobi: quando usar cada um e como lhes falar.",
            "Gems Gemini, Gemini Notebooks et la bulle bleue de Bobi : quand utiliser chacun et comment leur parler."],
    tabela: {
      cab: [["Ferramenta", "Outil"], ["Para quê", "Pour quoi"]],
      lin: [
        [["Gem « Marta » (apoio ao cliente)", "Gem « Marta » (service client)"], ["Qualquer dúvida de procedimento do serviço cliente", "Toute question de procédure du service client"]],
        [["Gems discurso / e-mails especialistas", "Gems discours / e-mails spécialistes"], ["Preparar o discurso com um especialista, responder aos e-mails dos especialistas", "Préparer le discours avec un spécialiste, répondre aux e-mails des spécialistes"]],
        [["Gems reclamação técnica", "Gems réclamation technique"], ["Reformular um bug para um ticket ao nível 2 (sobretudo Ana e Sandra)", "Reformuler un bug en ticket pour le niveau 2 (surtout Ana et Sandra)"]],
        [["Gemini Notebooks (guia prático, especialistas, cobranças)", "Gemini Notebooks (guide pratique, experts, recouvrement)"], ["Perguntas sobre os documentos de procedimentos", "Questions sur les documents de procédures"]],
        [["Bolinha azul do Bobi", "Bulle bleue de Bobi"], ["Perguntas sobre O cliente da ficha aberta (transações, vales, reembolso, pontos)", "Questions sur LE client de la fiche ouverte (transactions, bons, remboursement, points)"]]
      ]
    },
    pontos: [
      ["Sê objetiva na pergunta: dá o código de erro ou a mensagem exata.", "Sois précise dans ta question : donne le code d'erreur ou le message exact."],
      ["Não aceites a primeira resposta se não percebeste: reformula, pergunta outra vez.", "N'accepte pas la première réponse si tu n'as pas compris : reformule, redemande."],
      ["Um assunto = uma nova conversa. Não mistures assuntos.", "Un sujet = une nouvelle conversation. Ne mélange pas les sujets."],
      ["Fala com ele como com uma pessoa. Treina com perguntas imaginárias quando não tens chamadas.", "Parle-lui comme à une personne. Entraîne-toi avec des questions imaginaires quand tu n'as pas d'appel."],
      ["As novidades ficam nos grupos (BestCall Academia, procedimentos…): abre as respostas, não fiques pela primeira mensagem.", "Les nouveautés sont dans les groupes (BestCall Academia, procédures…) : ouvre les réponses, ne t'arrête pas au premier message."]
    ],
    links: [
      { t: ["Notebook « Podcast – Coaching » (podcasts, vídeos, flashcards)", "Notebook « Podcast – Coaching » (podcasts, vidéos, flashcards)"],
        url: "https://notebooklm.google.com/notebook/20f38d55-de53-43f7-97a3-f42a55f8c53b" }
    ],
    quiz: [
      { q: ["Queres saber porque o vale de UM cliente não foi descontado. Que ferramenta é a mais direta?", "Tu veux savoir pourquoi le bon d'UN client n'a pas été déduit. Quel outil est le plus direct ?"],
        o: [["A bolinha azul do Bobi na ficha do cliente", "La bulle bleue de Bobi sur la fiche du client"], ["Um e-mail ao nível 2", "Un e-mail au niveau 2"], ["O Google", "Google"]], a: 0 },
      { q: ["Mudaste de assunto com o Gemini. O que fazes?", "Tu changes de sujet avec Gemini. Que fais-tu ?"],
        o: [["Continuo na mesma conversa", "Je continue dans la même conversation"], ["Abro uma nova conversa", "J'ouvre une nouvelle conversation"]], a: 1 }
    ]
  }
];

/* Thèmes annoncés par Marta mais pas encore filmés */
BCA.embreve = [
  ["Serviço de especialistas", "Service experts"],
  ["Foxi: tickets e reclamações", "Foxi : tickets et réclamations"],
  ["Gestão dos avisos", "Gestion des avis"],
  ["Analisar uma fatura", "Analyser une facture"],
  ["Gerir um conflito com um cliente", "Gérer un conflit avec un client"]
];

/* ----------------------------------------------------------
   Flashcards « Suporte Wengo » (notebook « Podcast – Coaching » de Marta)
   [catégorie, [question PT, question FR], [réponse PT, réponse FR]]
   ---------------------------------------------------------- */
BCA.catFlash = {
  clientes: ["Tipologia de clientes", "Typologie des clients"],
  ofertas: ["Ofertas de boas-vindas", "Offres de bienvenue"],
  mer: ["Conexões (MER)", "Mises en relation (MER)"],
  erros: ["Códigos de erro", "Codes d'erreur"],
  rdv: ["Marcações e monitorização", "RDV et suivi des appels"],
  pagamentos: ["Pagamentos e cobranças", "Paiements et recouvrement"],
  reward: ["Fidelidade, apadrinhamento e caixas", "Fidélité, parrainage et box"],
  bobi: ["Bobi e Foxi", "Bobi et Foxi"]
};

BCA.flash = [
  ["clientes", ["Segundo a tipologia da Wengo, como se define um cliente 'Potencial' (Prospect)?", "Selon la typologie Wengo, comment définit-on un client « Potentiel » (Prospect) ?"],
   ["É um cliente que criou uma conta na plataforma, mas nunca realizou qualquer consulta paga.", "C'est un client qui a créé un compte sur la plateforme mais n'a jamais fait de consultation payante."]],
  ["clientes", ["Qual é a definição de um 'Novo Cliente' no sistema Wengo?", "Quelle est la définition d'un « Nouveau client » chez Wengo ?"],
   ["É um cliente registado há menos de 30 dias que realizou menos de 3 consultas no total.", "C'est un client inscrit depuis moins de 30 jours qui a fait moins de 3 consultations au total."]],
  ["clientes", ["Quais são os dois critérios que definem um cliente como 'Inativo' na Wengo?", "Quels sont les deux critères qui définissent un client « Inactif » chez Wengo ?"],
   ["Ter realizado pelo menos 1 consulta no total e ter feito a última consulta há mais de 3 meses.", "Avoir fait au moins 1 consultation au total et avoir fait la dernière il y a plus de 3 mois."]],
  ["clientes", ["Como é classificado um cliente 'Regular' na plataforma Wengo?", "Comment est classé un client « Régulier » sur Wengo ?"],
   ["Cliente com mais de 3 consultas no total e pelo menos uma consulta realizada nos últimos 30 dias.", "Client avec plus de 3 consultations au total et au moins une consultation dans les 30 derniers jours."]],
  ["clientes", ["Quais são as duas condições alternativas para classificar um cliente como 'Ocasional' na Wengo?", "Quelles sont les deux conditions possibles pour qu'un client soit « Occasionnel » chez Wengo ?"],
   ["Ter efetuado pelo menos 1 consulta nos últimos 3 meses, associado a: (1) menos de 3 consultas no total e 1 nos últimos 30 dias; OU (2) mais de 3 consultas no total e nenhuma nos últimos 30 dias.", "Avoir fait au moins 1 consultation dans les 3 derniers mois, avec : (1) moins de 3 consultations au total et 1 dans les 30 derniers jours ; OU (2) plus de 3 consultations au total et aucune dans les 30 derniers jours."]],
  ["clientes", ["Qual é a principal tarefa do Serviço de Apoio ao Cliente ao contactar um cliente Potencial (Prospect)?", "Quelle est la mission principale du service client face à un Prospect ?"],
   ["Explicar o funcionamento do serviço, reforçar a confidencialidade e o profissionalismo dos especialistas e apresentar ofertas de boas-vindas para dissipar dúvidas.", "Expliquer le fonctionnement du service, rassurer sur la confidentialité et le professionnalisme des experts et présenter les offres de bienvenue pour lever les doutes."]],
  ["ofertas", ["Qual é a oferta de boas-vindas standard para a primeira consulta por telefone fixo, chat ou vídeo em Portugal?", "Quelle est l'offre de bienvenue standard pour une 1re consultation par fixe, chat ou vidéo au Portugal ?"],
   ["1€ para os primeiros 10 minutos, seguido de 1,40€ por cada minuto adicional.", "1 € pour les 10 premières minutes, puis 1,40 € par minute supplémentaire."]],
  ["ofertas", ["Em Portugal, qual é a tarifa de boas-vindas de 10 minutos se a consulta for efetuada para telemóvel?", "Au Portugal, quel est le tarif de bienvenue de 10 minutes si la consultation se fait sur mobile ?"],
   ["3€ para os primeiros 10 minutos, sendo cada minuto adicional cobrado a 1,60€.", "3 € pour les 10 premières minutes, puis 1,60 € par minute supplémentaire."]],
  ["ofertas", ["Em Portugal, quais são os preços fixos disponíveis se um novo cliente pretender pacotes de mais de 10 minutos?", "Au Portugal, quels forfaits fixes existent si un nouveau client veut plus de 10 minutes ?"],
   ["11€ para 15 minutos de consulta ou 19€ para 20 minutos de consulta.", "11 € pour 15 minutes ou 19 € pour 20 minutes."]],
  ["ofertas", ["Qual é a oferta de descoberta standard para a França com despesas de telemóvel incluídas?", "Quelle est l'offre découverte standard pour la France, frais de mobile inclus ?"],
   ["5€ para 10 minutos, sendo cobrados 2,50€ por cada minuto adicional.", "5 € pour 10 minutes, puis 2,50 € par minute supplémentaire."]],
  ["ofertas", ["Qual é a oferta de descoberta para a Itália numa consulta efetuada para telefone fixo, chat ou vídeo?", "Quelle est l'offre découverte pour l'Italie (fixe, chat ou vidéo) ?"],
   ["1€ para os primeiros 10 minutos, e 1,80€ por cada minuto adicional.", "1 € pour les 10 premières minutes, puis 1,80 € par minute supplémentaire."]],
  ["ofertas", ["Qual é a tarifa da oferta de descoberta para Espanha?", "Quel est le tarif de l'offre découverte pour l'Espagne ?"],
   ["1€ para os primeiros 10 minutos, seguido de 1,50€ por minuto adicional.", "1 € pour les 10 premières minutes, puis 1,50 € par minute supplémentaire."]],
  ["ofertas", ["Como deve proceder o conselheiro se um cliente inscrito no anuário francês pretender consultar um especialista português ou espanhol?", "Que fait le conseiller si un client de l'annuaire français veut consulter un expert portugais ou espagnol ?"],
   ["Deve clicar no menu '+ FILTRES' e alterar o anuário para o país do especialista de modo a ter acesso às ofertas específicas desse país.", "Il clique sur « + FILTRES » et change l'annuaire pour le pays de l'expert, afin d'avoir les offres de ce pays."]],
  ["clientes", ["Quais são as informações obrigatórias a recolher do cliente para a criação da ficha de cliente e confirmação de maioridade?", "Quelles informations sont obligatoires pour créer la fiche client et confirmer la majorité ?"],
   ["Nome e apelido, endereço de e-mail, data de nascimento e número de telefone.", "Nom et prénom, adresse e-mail, date de naissance et numéro de téléphone."]],
  ["clientes", ["No processo de atendimento telefónico a um Prospect, em que momento se aborda o meio de pagamento?", "Avec un Prospect au téléphone, à quel moment parle-t-on du moyen de paiement ?"],
   ["Apenas após a criação da conta, a apresentação da oferta de boas-vindas e a seleção/valorização do especialista disponível.", "Seulement après la création du compte, la présentation de l'offre de bienvenue et le choix/la valorisation de l'expert disponible."]],
  ["mer", ["Qual é a diferença operacional entre uma Conexão (MER) Direta e uma Conexão (MER) Indireta?", "Quelle est la différence entre une MER directe et une MER indirecte ?"],
   ["Na MER Direta, o especialista está disponível e a chamada é transferida enquanto o conselheiro permanece em linha; na MER Indireta, existe fila de espera e o conselheiro desliga após o lançamento.", "En MER directe, l'expert est disponible et l'appel est transféré pendant que le conseiller reste en ligne ; en MER indirecte, il y a une file d'attente et le conseiller raccroche après le lancement."]],
  ["mer", ["Que requisito é imperativo para que um conselheiro possa efetuar uma MER Direta por telefone?", "Quelle condition est indispensable pour faire une MER directe par téléphone ?"],
   ["A chamada deve ser iniciada obrigatoriamente a partir da página do Bobi integrada na aplicação web Graam.", "L'appel doit obligatoirement être lancé depuis la page Bobi intégrée à l'application web Graam."]],
  ["mer", ["Qual é a consequência financeira para o cliente numa MER Indireta quando este utiliza um telemóvel?", "Quelle conséquence financière pour le client en MER indirecte depuis un mobile ?"],
   ["Aplica-se uma sobretaxa de telemóvel de 0,20€/min (ou 0,30 USD/min) para além da tarifa da consulta.", "Une surtaxe mobile de 0,20 €/min (ou 0,30 USD/min) s'ajoute au tarif de la consultation."]],
  ["mer", ["Existe cobrança adicional de telemóvel quando uma consulta é realizada através de uma MER Direta?", "Y a-t-il une surtaxe mobile en MER directe ?"],
   ["Não, na MER Direta não existe qualquer sobretaxa de telemóvel, mesmo que o cliente use um número móvel.", "Non, aucune surtaxe mobile en MER directe, même si le client appelle d'un portable."]],
  ["mer", ["Como é facultado o acesso ao cliente quando se inicia uma Conexão (MER) por Chat ou Vídeo?", "Comment le client accède-t-il à une MER par chat ou vidéo ?"],
   ["O conselheiro envia ao cliente um link de acesso à sala de consulta (live room) por SMS ou por e-mail.", "Le conseiller lui envoie un lien vers la salle de consultation (live room) par SMS ou e-mail."]],
  ["mer", ["Qual é a verificação obrigatória a realizar com o cliente imediatamente antes de clicar em 'Iniciar' a chamada?", "Quelle vérification faire juste avant de cliquer sur « Démarrer » l'appel ?"],
   ["Confirmar verbalmente com o cliente se o número de telefone registado é o número para o qual ele pretende ser contactado.", "Confirmer oralement que le numéro enregistré est bien celui sur lequel le client veut être appelé."]],
  ["mer", ["Qual mensagem de voz indica ao conselheiro que a MER Direta foi bem-sucedida e que ele pode desligar?", "Quel message vocal indique que la MER directe a réussi et qu'on peut raccrocher ?"],
   ["A mensagem de voz: 'A ligação foi estabelecida.'", "Le message : « La connexion a été établie. »"]],
  ["mer", ["O que acontece numa MER Direta quando o servidor de voz reproduz a mensagem 'A ligação falhou, irá voltar ao contacto com o cliente'?", "Que se passe-t-il en MER directe quand le serveur dit « La connexion a échoué, vous allez revenir vers le client » ?"],
   ["O conselheiro retoma a chamada direta com o cliente para explicar a situação e tentar reiniciar a ligação ou propor uma alternativa.", "Le conseiller reprend le client pour expliquer, relancer la connexion ou proposer une alternative."]],
  ["erros", ["O que indica a mensagem de erro Wengo com o código 2024?", "Que signifie l'erreur Wengo 2024 ?"],
   ["Indica que o cartão de crédito do cliente já está associado a 3 contas e não pode ser adicionado a mais nenhuma.", "La carte du client est déjà associée à 3 comptes et ne peut plus être ajoutée à un autre."]],
  ["erros", ["Qual é a causa do erro Wengo 10128 e qual a ação a tomar pelo conselheiro?", "Cause de l'erreur Wengo 10128 et action à faire ?"],
   ["A conta Wengo do cliente (ou outra associada ao cartão) está bloqueada. Deve-se convidar o cliente a contactar o serviço de recuperação.", "Le compte du client (ou un autre lié à la carte) est bloqué. On l'invite à contacter le service recouvrement."]],
  ["erros", ["Como proceder quando surge o código de erro Wengo 10601 (conta suspensa)?", "Que faire avec l'erreur Wengo 10601 (compte suspendu) ?"],
   ["Informar o cliente sobre a suspensão e enviar uma reclamação para o suporte N2 caso o cliente pretenda desbloquear a conta.", "Informer le client de la suspension et envoyer une réclamation au support N2 s'il veut débloquer son compte."]],
  ["erros", ["O que significa o código de erro Wengo 120020?", "Que signifie l'erreur Wengo 120020 ?"],
   ["Significa que a transação promocional não foi autorizada porque o cliente já beneficiou dessa oferta através de outra conta (primo).", "La transaction promo est refusée car le client a déjà profité de cette offre via un autre compte (cousin)."]],
  ["erros", ["Qual é o motivo do erro Wengo 2026 e que solução deve ser proposta?", "Cause de l'erreur Wengo 2026 et solution ?"],
   ["O cliente tentou adicionar o mesmo cartão de crédito 8 vezes em 24h (ou mais de 2 cartões em menos de 24h). Deve solicitar-se outro método de pagamento.", "Le client a essayé d'ajouter la même carte 8 fois en 24 h (ou plus de 2 cartes en moins de 24 h). Il faut demander un autre moyen de paiement."]],
  ["erros", ["O que indica o código de erro Wengo 2025 relativo a métodos de pagamento?", "Que signifie l'erreur Wengo 2025 (moyens de paiement) ?"],
   ["A conta atingiu o limite máximo de 10 cartões de crédito registados. É necessário eliminar um cartão antigo para adicionar um novo.", "Le compte a atteint la limite de 10 cartes enregistrées. Il faut supprimer une ancienne carte pour en ajouter une."]],
  ["erros", ["O que significa o código de erro bancário 39111?", "Que signifie l'erreur bancaire 39111 ?"],
   ["O cartão de crédito introduzido está expirado. É necessário solicitar um novo método de pagamento.", "La carte saisie est expirée. Il faut demander un autre moyen de paiement."]],
  ["erros", ["Quais são os passos recomendados ao obter o erro bancário 39009 (transação não autorizada)?", "Que faire avec l'erreur bancaire 39009 (transaction non autorisée) ?"],
   ["Tentar uma segunda vez, solicitar outro meio de pagamento ou orientar o cliente a contactar o seu banco para aprovar transações com a Wengo.", "Réessayer une fois, demander un autre moyen de paiement ou orienter le client vers sa banque pour autoriser Wengo."]],
  ["erros", ["O que sinaliza o código de erro 39103?", "Que signale l'erreur 39103 ?"],
   ["O código CVC do cartão não é válido. Deve reintroduzir-se os 3 dígitos do verso ou pedir outro meio de pagamento.", "Le CVC n'est pas valide. Il faut ressaisir les 3 chiffres au dos ou demander un autre moyen de paiement."]],
  ["erros", ["Qual é a causa do erro de faturação 39100?", "Cause de l'erreur de facturation 39100 ?"],
   ["Os fundos disponíveis no cartão não atingem o valor mínimo equivalente a 10 minutos de consulta.", "Les fonds disponibles sur la carte n'atteignent pas le minimum de 10 minutes de consultation."]],
  ["erros", ["O que significam os códigos de erro de fraude 2040, 2041 e 2042?", "Que signifient les erreurs fraude 2040, 2041 et 2042 ?"],
   ["A conta (ou contas associadas por cartão/telefone) tem mais de 1 chargeback e/ou mais de 7 itens não pagos, ou um valor pendente superior a 300€.", "Le compte (ou les comptes liés par carte/téléphone) a plus d'1 chargeback et/ou plus de 7 impayés, ou plus de 300 € en attente."]],
  ["rdv", ["Qual é a regra de aceitação automática de uma marcação (RDV) com um especialista?", "Quelle est la règle d'acceptation automatique d'un RDV ?"],
   ["A marcação é aceite automaticamente se for agendada dentro das 48 horas seguintes e dentro do horário de disponibilidade do especialista.", "Le RDV est accepté automatiquement s'il est dans les 48 h et dans les horaires de disponibilité de l'expert."]],
  ["rdv", ["O que acontece a uma marcação (RDV) efetuada fora do horário de agenda ou a mais de 48 horas de distância que não seja validada pelo especialista?", "Que devient un RDV hors agenda ou à plus de 48 h non validé par l'expert ?"],
   ["A marcação é cancelada automaticamente pelo sistema 15 minutos antes da hora agendada.", "Il est annulé automatiquement 15 minutes avant l'heure prévue."]],
  ["rdv", ["Qual é a regra de fuso horário específica para a introdução de alterações de agendamento (RDV) em Portugal?", "Quelle règle de fuseau horaire pour saisir un RDV pour le Portugal ?"],
   ["Deve-se somar sempre +1 hora ao horário solicitado pelo cliente PT ao inserir no Bobi (pois o sistema Bobi utiliza o fuso horário de Paris).", "Toujours ajouter +1 h à l'heure demandée par le client PT dans Bobi (Bobi est à l'heure de Paris)."]],
  ["rdv", ["Quais são as três colunas indispensáveis a adicionar na tabela de 'Transações em Curso' do Bobi?", "Quelles sont les 3 colonnes indispensables dans « Transactions en cours » de Bobi ?"],
   ["Bridged (hora de início da consulta), Raison (estado atual da consulta) e Durée autorisée (tempo previsto de consulta).", "Bridged (heure de début), Raison (état actuel) et Durée autorisée (durée prévue)."]],
  ["rdv", ["Na monitorização de chamadas, o que significa o estado 'Bridged'?", "Dans le suivi des appels, que signifie « Bridged » ?"],
   ["Significa que a consulta está em andamento e a ligação entre cliente e especialista foi estabelecida com sucesso.", "La consultation est en cours : client et expert sont bien connectés."]],
  ["rdv", ["O que significa o estado 'Hunting' na página de transações em curso?", "Que signifie « Hunting » dans les transactions en cours ?"],
   ["Indica que o sistema está ativamente a tentar contactar o cliente ou o especialista para concretizar a ligação.", "Le système essaie de joindre le client ou l'expert pour établir la connexion."]],
  ["rdv", ["Qual é a duração máxima que um pedido permanece em fila de espera (caça) antes de falhar automaticamente?", "Combien de temps maximum une demande reste-t-elle en file d'attente avant d'échouer ?"],
   ["Um pedido permanece em fila de espera durante um limite máximo de 2 horas.", "2 heures maximum."]],
  ["rdv", ["Em que situações o conselheiro deve clicar no botão 'Reiniciar' uma Conexão (MER) em curso?", "Quand faut-il cliquer sur « Relancer » une MER en cours ?"],
   ["Quando o cliente está na posição 1 e o pedido está em 'falha', quando o especialista está offline, ou quando a espera excede 20 minutos sem que o especialista esteja em pausa.", "Quand le client est en position 1 et la demande en « échec », quand l'expert est hors ligne, ou quand l'attente dépasse 20 minutes sans que l'expert soit en pause."]],
  ["rdv", ["Por que razão nunca se deve clicar em 'Terminer la session' quando o estado da chamada é 'Bridged'?", "Pourquoi ne jamais cliquer sur « Terminer la session » quand l'appel est « Bridged » ?"],
   ["Porque clicar nesse botão iria interromper imediatamente a comunicação ativa entre o cliente e o especialista.", "Parce que ça couperait immédiatement la consultation en cours entre le client et l'expert."]],
  ["pagamentos", ["Qual é a diferença entre o pagamento Pré-pago e o Pós-pago na Wengo?", "Différence entre prépayé et post-payé chez Wengo ?"],
   ["No Pré-pago, utilizam-se os fundos da carteira eletrónica e a chamada é cortada ao esgotar o saldo; no Pós-pago, é debitado o cartão bancário após a consulta e a chamada não é cortada.", "Prépayé : on utilise le porte-monnaie et l'appel est coupé quand le solde est épuisé. Post-payé : la carte est débitée après la consultation et l'appel n'est pas coupé."]],
  ["pagamentos", ["Quais são os cartões bancários expressamente NÃO aceites na plataforma Wengo?", "Quelles cartes ne sont PAS acceptées chez Wengo ?"],
   ["Os cartões das redes Maestro e American Express.", "Les cartes Maestro et American Express."]],
  ["pagamentos", ["O que é o Pedido de Autorização (DA/AR) efetuado no cartão do cliente?", "Qu'est-ce que la demande d'autorisation (DA/AR) sur la carte du client ?"],
   ["É uma verificação/reserva temporária de fundos antes da consulta para garantir a capacidade de pagamento. Não constitui uma cobrança imediata.", "Une vérification/réservation temporaire de fonds avant la consultation pour garantir le paiement. Ce n'est pas un débit immédiat."]],
  ["pagamentos", ["Qual é a regra de segurança de dados obrigatória ao introduzir dados de cartão bancário durante uma chamada?", "Quelle règle de sécurité appliquer quand on saisit une carte pendant un appel ?"],
   ["Pausar/parar a gravação de chamadas na ferramenta Graam clicando no botão vermelho (que passa a azul).", "Arrêter l'enregistrement dans Graam en cliquant sur le bouton rouge (qui passe en bleu)."]],
  ["pagamentos", ["Quando é que o robô automático de recuperação de impayés deve ser desativado no Bobi?", "Quand faut-il désactiver le robot de recouvrement dans Bobi ?"],
   ["Quando o cliente negoceia um plano de pagamento prestacional (parcelamento) da sua dívida.", "Quand le client négocie un paiement échelonné de sa dette."]],
  ["pagamentos", ["O que acontece ao saldo pré-carregado na carteira (Wallet) do cliente quando este solicita uma consulta?", "Que devient le solde du porte-monnaie quand le client demande une consultation ?"],
   ["O sistema bloqueia temporariamente o valor correspondente a 10 minutos de consulta para o reservar ao especialista selecionado.", "Le système bloque temporairement l'équivalent de 10 minutes pour le réserver à l'expert choisi."]],
  ["reward", ["Como é que o cliente acumula pontos no programa de fidelidade Wengo Reward ao deixar avaliações?", "Comment le client gagne-t-il des points Wengo Reward en laissant des avis ?"],
   ["Ganha 5 pontos por cada avaliação deixada sobre os três primeiros especialistas do mês (+3 pontos extra em peritos elegíveis).", "5 points par avis sur les 3 premiers experts du mois (+3 points bonus sur les experts éligibles)."]],
  ["reward", ["Quais são os limites máximos de acumulação de pontos no programa Wengo Reward?", "Quelles sont les limites de cumul de points Wengo Reward ?"],
   ["Um limite máximo mensal de 200 pontos e um limite global acumulado de 2000 pontos.", "200 points maximum par mois et 2 000 points cumulés au total."]],
  ["reward", ["No Bobi, o que indica o banner de cor Laranja relativo ao Wengo Reward?", "Dans Bobi, que signifie le bandeau orange Wengo Reward ?"],
   ["Indica que o cliente não está inscrito no programa ou que lhe faltam dados obrigatórios na ficha (e-mail, telemóvel ou data de nascimento).", "Le client n'est pas inscrit ou il manque des données obligatoires (e-mail, mobile ou date de naissance)."]],
  ["reward", ["O que sinaliza o banner de cor Azul na secção Wengo Reward do Bobi?", "Que signale le bandeau bleu Wengo Reward dans Bobi ?"],
   ["Sinaliza que o cliente está inscrito no programa e possui saldo de pontos acumulados suficiente para resgatar recompensas.", "Le client est inscrit et a assez de points pour échanger des récompenses."]],
  ["reward", ["Quais são as regras para que um cliente possa escolher o seu 'Especialista Favorito do Mês'?", "Quelles règles pour choisir son « Expert favori du mois » ?"],
   ["Ter realizado pelo menos 3 consultas históricas, ter consultado no mês M-1 (min. 5 min ou QPP), ter conta ativa e aguardar 30 dias desde a última escolha.", "Au moins 3 consultations au total, avoir consulté le mois précédent (min. 5 min ou QPP), compte actif et 30 jours depuis le dernier choix."]],
  ["reward", ["O saldo de carteira creditado por um processo de Apadrinhamento é suficiente para iniciar uma consulta?", "Le solde de parrainage suffit-il pour lancer une consultation ?"],
   ["Não. É obrigatório associar um método de pagamento válido (cartão de crédito ou recarga) para validar o processo de consulta.", "Non. Il faut un moyen de paiement valide associé (carte ou recharge) pour valider la consultation."]],
  ["reward", ["Qual é a duração da consulta telefónica incluída nas Caixas (BOX) da Wengo em Portugal e restantes países (exceto França)?", "Quelle durée de consultation est incluse dans les Box Wengo (hors France) ?"],
   ["Cada caixa inclui 20 minutos de consulta telefónica, chat ou vídeo (em França são 15 minutos).", "20 minutes par téléphone, chat ou vidéo (15 minutes en France)."]],
  ["reward", ["Em que secção do seu espaço pessoal pode o cliente aceder aos manuais ou estudos astrológicos incluídos nas Caixas?", "Où le client trouve-t-il les guides ou études astrologiques de sa Box ?"],
   ["Na secção 'Meus Conteúdos' >>> 'Produtos na Caixa'.", "Dans « Mes contenus » > « Produits de la Box »."]],
  ["reward", ["Onde deve ser efetuada a compra de Caixas ou produtos digitais Wengo?", "Où acheter les Box ou produits digitaux Wengo ?"],
   ["A compra é realizada exclusivamente online pelo próprio cliente através do seu espaço pessoal na loja Wengo.", "Uniquement en ligne, par le client lui-même, dans la boutique de son espace personnel."]],
  ["bobi", ["Como é efetuado o escalamento de um ticket do Suporte N1 para o Suporte N2 na ferramenta Foxi?", "Comment escalader un ticket du N1 vers le N2 dans Foxi ?"],
   ["Abre-se o ticket, acede-se ao painel 'Actions', clica-se no botão laranja 'Escalader en N2' e confirma-se a operação.", "Ouvrir le ticket, aller dans « Actions », cliquer sur le bouton orange « Escalader en N2 » et confirmer."]],
  ["bobi", ["Como identificar contas 'primas' de um cliente no Bobi através do número de telefone?", "Comment repérer les comptes cousins d'un client par téléphone dans Bobi ?"],
   ["No fundo da página da ficha de cliente, consultando o bloco 'Contas de primos por número de telefone durante as transações'.", "En bas de la fiche client, dans le bloc « Comptes cousins par numéro de téléphone pendant les transactions »."]],
  ["bobi", ["Qual é o procedimento para responder a um pedido de eliminação de conta efetuado por um cliente?", "Quelle procédure pour une demande de suppression de compte ?"],
   ["Enviar um e-mail a partir do Bobi selecionando a categoria 'Compte client' e o assunto 'Demande d'informations pour la suppression du compte'.", "Envoyer depuis Bobi l'e-mail catégorie « Compte client », objet « Demande d'informations pour la suppression du compte »."]],
  ["bobi", ["O que indica a cor verde num ícone de canal de consulta na lista de Especialistas Favoritos do Bobi?", "Que signifie l'icône de canal verte dans les experts favoris de Bobi ?"],
   ["Indica que o especialista está totalmente disponível para a consulta nesse canal específico.", "L'expert est disponible sur ce canal."]],
  ["bobi", ["O que representa a cor Laranja no ícone de canal de consulta de um especialista no Bobi?", "Que signifie l'icône de canal orange dans Bobi ?"],
   ["Indica que o especialista se encontra de momento ocupado em consulta.", "L'expert est en consultation en ce moment."]],
  ["bobi", ["Quais são os passos para adicionar manualmente uma nota no histórico da ficha de cliente no Bobi?", "Comment ajouter une note à la main dans l'historique de la fiche client ?"],
   ["Clicar no botão '+', selecionar o tipo de nota, marcar a caixa temática correspondente ou redigir o texto e clicar em guardar.", "Cliquer sur « + », choisir le type de note, cocher la case thématique ou écrire le texte, puis enregistrer."]],
  ["pagamentos", ["Qual é a ação correta quando um cliente em falta de pagamento pede o IBAN para efetuar transferência bancária?", "Que faire quand un client en impayé demande l'IBAN pour faire un virement ?"],
   ["Enviar a mensagem pré-definida de regularização via Bobi na categoria 'Recouvrement' com as coordenadas bancárias da Wengo.", "Envoyer via Bobi le message type de régularisation, catégorie « Recouvrement », avec les coordonnées bancaires de Wengo."]],
  ["bobi", ["O que se deve verificar prioritariamente na secção 'Créditos Wallet e Vales' antes de aconselhar uma consulta?", "Que vérifier en priorité dans « Crédits wallet et bons » avant de conseiller une consultation ?"],
   ["Verificar o saldo real disponível (em euros ou minutos) e a existência de vales específicos ou ofertas promocionais dentro do prazo de validade.", "Le solde réel disponible (en euros ou en minutes) et les bons ou offres promo encore valides."]],
  ["rdv", ["Se um cliente regular em posição 1 da fila de espera não pretender aguardar 2 horas pela disponibilidade do especialista, qual é a atitude do conselheiro?", "Un client régulier en position 1 ne veut pas attendre 2 h. Que fait le conseiller ?"],
   ["Cancelar o pedido de ligação atual e propor imediatamente um especialista alternativo disponível ou agendar uma marcação (RDV).", "Annuler la demande en cours et proposer tout de suite un autre expert disponible ou un RDV."]],
  ["ofertas", ["No script de atendimento telefónico, como deve o conselheiro apresentar a oferta de boas-vindas ao cliente?", "Dans le script d'appel, comment présenter l'offre de bienvenue ?"],
   ["Informar com clareza sobre o valor promocional inicial (1€ nos primeiros 10 min em rede fixa/chat/vídeo) e o custo adicional por minuto seguinte (1,40€/min).", "Annoncer clairement le prix promo de départ (1 € les 10 premières minutes en fixe/chat/vidéo) et le prix de la minute suivante (1,40 €/min)."]],
  ["rdv", ["O que significa o estado 'Pending' na monitorização de transações em curso?", "Que signifie l'état « Pending » dans les transactions en cours ?"],
   ["É o estado inicial de qualquer solicitação de consulta enquanto o sistema processa os pré-requisitos antes de iniciar a caça.", "C'est l'état de départ de toute demande, pendant que le système vérifie les prérequis avant de chercher la connexion."]],
  ["pagamentos", ["Qual é a conduta quando um cliente agenda o pagamento parcelado de uma dívida em 3 mensalidades?", "Que faire quand un client échelonne sa dette en 3 mensualités ?"],
   ["Programar 3 chamadas de acompanhamento no calendário do Bobi para as datas acordadas e desativar o robô automático de cobrança.", "Programmer 3 appels de suivi dans le calendrier Bobi aux dates convenues et désactiver le robot de recouvrement."]],
  ["bobi", ["No Foxi, o que se deve fazer ao reatribuir um ticket de suporte a outro grupo de trabalho?", "Dans Foxi, comment réattribuer un ticket à un autre groupe ?"],
   ["Alterar o grupo no painel 'Actions'. O ticket ficará visível para os membros do novo grupo e será gerada uma notificação automática.", "Changer le groupe dans « Actions ». Le ticket devient visible pour le nouveau groupe et une notification est envoyée."]],
  ["bobi", ["Como é tratada uma reclamação de cliente sobre 'falha de áudio/voz inaudível' durante uma consulta?", "Comment traiter une réclamation « son coupé / voix inaudible » pendant une consultation ?"],
   ["Identifica-se a data, o especialista e o ID da transação, recolhem-se os detalhes específicos do incidente técnico e submete-se o ticket de reclamação para análise.", "Noter la date, l'expert et l'ID de transaction, recueillir les détails de l'incident et envoyer le ticket de réclamation pour analyse."]],
  ["clientes", ["O que distingue a abordagem do Apoio ao Cliente para um 'Cliente Regular' em comparação com um 'Cliente Inativo'?", "Quelle différence d'approche entre un client « Régulier » et un « Inactif » ?"],
   ["Para o Regular, o foco é a agilidade e a valorização da fidelidade; para o Inativo, o objetivo é compreender os motivos da ausência e reconquistá-lo com ofertas promocionais.", "Régulier : rapidité et valorisation de sa fidélité. Inactif : comprendre pourquoi il est parti et le reconquérir avec des offres promo."]],
  ["bobi", ["Qual é a função do atalho 'Consultation immédiate' presente no bloco de atividades da ficha de cliente do Bobi?", "À quoi sert le raccourci « Consultation immédiate » de la fiche client ?"],
   ["Redireciona diretamente para o formulário de lançamento de chamada com todos os dados do cliente pré-preenchidos.", "Il ouvre directement le formulaire de lancement d'appel avec les données du client pré-remplies."]],
  ["pagamentos", ["Quais os métodos de pagamento eletrónicos locais aceites para além de cartões bancários em Portugal e Espanha?", "Quels moyens de paiement locaux, en plus des cartes, au Portugal et en Espagne ?"],
   ["Multibanco e MBWay em Portugal; Bizum em Espanha.", "Multibanco et MB Way au Portugal ; Bizum en Espagne."]]
];
