/* =========================================================
   BUSH MINI APP — app.js (Part 1/3) — FINAL (No Flicker)
   ========================================================= */

const API_BASE = "https://bush-backend-at9f.onrender.com";
const TG = window.Telegram?.WebApp;

/* =========================================================
   ADSGRAM TASK BLOCK ID
   ========================================================= */
const ADSGRAM_TASK_BLOCK_ID = "task-47617";

/* =========================================================
   AD PROVIDERS
   ========================================================= */
const AD_PROVIDERS = {
  adsgram: {
    label: "Adsgram",
    sub: "Rewarded Video",
    icon: "play",
    badge: "Rewarded"
  },
  onclicka: {
    label: "OnClickA",
    sub: "Rewarded Video",
    icon: "play",
    badge: "Rewarded"
  },
  richads_rewarded: {
    label: "RichAds 1",
    sub: "Rewarded Video",
    icon: "play",
    badge: "Rewarded"
  },
  richads_interstitial: {
    label: "RichAds 2",
    sub: "Short Video",
    icon: "video",
    badge: "Interstitial"
  }
};

/* =========================================================
   SETTINGS LABELS
   ========================================================= */
const SETTING_LABELS = {
  daily_bonus_bp: "مكافأة البونص اليومي (BP)",
  referral_reward_bp: "مكافأة الإحالة (BP)",
  referral_required_videos: "عدد الفيديوهات المطلوبة للإحالة",
  withdraw_min_bp: "الحد الأدنى للسحب (BP)",
  withdraw_min_referrals: "عدد الإحالات المطلوبة للسحب",
  bp_per_usd: "عدد BP لكل دولار",
  uc_per_usd: "عدد UC لكل دولار",
  promo_code_reward_bp: "مكافأة الكود الترويجي (BP)",
  promo_code_chat_id: "معرف قناة الرمز الترويجي (Chat ID)",
  payments_channel_id: "معرف قناة إثباتات الدفع (Chat ID)",
  competition_prize_bp: "جائزة المسابقة الأسبوعية (BP)",
  adsgram_reward_bp: "مكافأة إعلان Adsgram (BP)",
  adsgram_daily_limit: "الحد اليومي لإعلانات Adsgram",
  adsgram_bonus_3_bp: "مكافأة Adsgram 3 فيديو (BP)",
  adsgram_bonus_6_bp: "مكافأة Adsgram 6 فيديو (BP)",
  adsgram_bonus_10_bp: "مكافأة Adsgram 10 فيديو (BP)",
  adsgram_task_reward_bp: "مكافأة Adsgram Task (BP)",
  adsgram_task_daily_limit: "الحد اليومي لـ Adsgram Task",
  adsgram_task_bonus_3_bp: "مكافأة Adsgram Task 3 (BP)",
  adsgram_task_bonus_6_bp: "مكافأة Adsgram Task 6 (BP)",
  adsgram_task_bonus_10_bp: "مكافأة Adsgram Task 10 (BP)",
  onclicka_reward_bp: "مكافأة إعلان OnClickA (BP)",
  onclicka_daily_limit: "الحد اليومي لإعلانات OnClickA",
  onclicka_bonus_3_bp: "مكافأة OnClickA 3 فيديو (BP)",
  onclicka_bonus_6_bp: "مكافأة OnClickA 6 فيديو (BP)",
  onclicka_bonus_10_bp: "مكافأة OnClickA 10 فيديو (BP)",
  onclicka_spot_id: "معرف OnClickA Spot ID",
  richads_rewarded_reward_bp: "مكافأة RichAds 1 (BP)",
  richads_rewarded_daily_limit: "الحد اليومي لـ RichAds 1",
  richads_rewarded_bonus_3_bp: "مكافأة RichAds 1 - 3 (BP)",
  richads_rewarded_bonus_6_bp: "مكافأة RichAds 1 - 6 (BP)",
  richads_rewarded_bonus_10_bp: "مكافأة RichAds 1 - 10 (BP)",
  richads_interstitial_reward_bp: "مكافأة RichAds 2 (BP)",
  richads_interstitial_daily_limit: "الحد اليومي لـ RichAds 2",
  richads_interstitial_bonus_3_bp: "مكافأة RichAds 2 - 3 (BP)",
  richads_interstitial_bonus_6_bp: "مكافأة RichAds 2 - 6 (BP)",
  richads_interstitial_bonus_10_bp: "مكافأة RichAds 2 - 10 (BP)",
  richads_publisher_id: "معرف الناشر في RichAds",
  richads_promotional_enabled: "تفعيل الرسائل الدعائية (1/0)",
  richads_promo_bid_floor: "سعر المزايدة الأدنى في RichAds",
  ad_cooldown_seconds: "الفاصل بين الإعلانات (ثانية)",
  ad_session_ttl_seconds: "صلاحية جلسة الإعلان (ثانية)",
  initdata_ttl_seconds: "صلاحية initData (ثانية)",
  rate_limit_max_requests: "أقصى عدد طلبات في النافذة",
  rate_limit_window_seconds: "نافذة Rate Limit (ثانية)",
  fraud_warning_threshold: "حد الإنذار",
  fraud_temp_block_days: "مدة الحظر المؤقت (أيام)",
  fraud_permanent_block_threshold: "حد الحظر النهائي",
  reminder_1_utc: "وقت التذكير 1 (UTC)",
  reminder_2_utc: "وقت التذكير 2 (UTC)",
  reminder_3_utc: "وقت التذكير 3 (UTC)",
  reminder_4_utc: "وقت التذكير 4 (UTC)"
};

/* =========================================================
   LANGUAGES — 14 لغة
   ========================================================= */
const LANGS = [
  { code: "ar", name: "العربية" },
  { code: "en", name: "English" },
  { code: "ru", name: "Русский" },
  { code: "es", name: "Español" },
  { code: "zh", name: "中文" },
  { code: "id", name: "Indonesia" },
  { code: "tr", name: "Türkçe" },
  { code: "fr", name: "Français" },
  { code: "fa", name: "فارسی" },
  { code: "hi", name: "हिन्दी" },
  { code: "de", name: "Deutsch" },
  { code: "pt", name: "Português" },
  { code: "vi", name: "Tiếng Việt" },
  { code: "bn", name: "বাংলা" }
];

/* =========================================================
   I18N — 14 لغة
   ========================================================= */
const I18N = {
  en: {
    home: "Home", competition: "Competition", tasks: "Tasks", referrals: "Invite",
    withdraw: "Withdraw", watchEarn: "Watch & Earn", daily: "Daily Bonus",
    dailySub: "Claim once every 24 hours", claim: "Claim", available: "Available",
    completed: "Completed", remaining: "remaining", videos: "videos", bonus: "Bonus",
    inviteTitle: "Invite Friends", accepted: "Accepted", pending: "Pending",
    copy: "Copy Link", share: "Share", reward: "Reward",
    conditionText: "Your friend must watch at least {n} rewarded videos before the invitation becomes qualified.",
    withdrawTitle: "Withdraw", cash: "USDT Cash", cashSub: "USDT BEP20",
    uc: "PUBG UC", ucSub: "Recharge by Player ID", wallet: "USDT BEP20 wallet address",
    player: "PUBG Player ID", selectPackage: "Select UC package",
    submit: "Request Withdrawal", minimum: "Minimum", requiredInvites: "Required invites",
    history: "Withdrawal history", pendingStatus: "Pending review", approved: "Approved",
    rejected: "Rejected", noHistory: "No withdrawal requests yet.",
    noTasks: "No tasks available right now.", start: "Start", verify: "Verify",
    wait: "Wait", limit: "Limit", settings: "Settings", save: "Save",
    addTask: "Add Task", title: "Title", description: "Description",
    rewardBp: "Reward BP", maxUsers: "Maximum users", taskType: "Task type",
    targetUrl: "Target URL", chatId: "Telegram Chat ID",
    help: "How to get it?",
    chatIdHelp: "Use /chatid @channel in the bot. Example: /chatid @Bus7App",
    loading: "Loading...",
    reports: "Reports", users: "Users", newToday: "New today", newWeek: "New 7 days",
    newMonth: "New 30 days", activeToday: "Active today", videoViews: "Video views",
    adminWithdrawals: "Withdrawal requests", reason: "Rejection reason",
    send: "Send", close: "Close", language: "Language", error: "Something went wrong.",
    notTelegram: "Open this Mini App from Telegram to continue.",
    copied: "Referral link copied.", saved: "Saved.",
    requested: "Withdrawal request submitted.", balance: "Balance",
    usd: "USD", ucAmount: "UC", bpCost: "BP cost",
    adsTitle: "Rewarded Ads", adsSub: "Watch and earn BP instantly",
    competitionTitle: "Weekly Competition", competitionSub: "Compete for the grand prize",
    weeklyWinner: "Last Week's Winner", grandPrize: "Grand Prize",
    topPlayers: "Top Players", yourRank: "Your Rank", yourPoints: "Your Points",
    cooldown: "Cooldown", ready: "Ready", waiting: "Waiting",
    adminPanel: "Admin Panel", stats: "Statistics", taskMgmt: "Tasks",
    settingsTab: "Settings", withdrawalsTab: "Withdrawals",
    back: "Back",
    promoTitle: "Promo Code",
    promoSub: "Enter today's code to claim BP",
    promoPlaceholder: "Enter promo code",
    botTasks: "Bot Tasks",
    adsgramTasks: "AdsGram Tasks"
  },
  ar: {
    home: "الرئيسية", competition: "المسابقة", tasks: "المهام", referrals: "دعوة",
    withdraw: "السحب", watchEarn: "شاهد واربح", daily: "البونص اليومي",
    dailySub: "مرة واحدة كل 24 ساعة", claim: "مطالبة", available: "متاح",
    completed: "مكتمل", remaining: "متبقي", videos: "فيديو", bonus: "بونص",
    inviteTitle: "دعوة صديق", accepted: "مقبول", pending: "تحت المعالجة",
    copy: "نسخ الرابط", share: "مشاركة", reward: "المكافأة",
    conditionText: "يجب أن يشاهد صديقك {n} فيديوهات مكافأة على الأقل حتى تصبح الدعوة مؤهلة.",
    withdrawTitle: "السحب", cash: "USDT نقدي", cashSub: "USDT BEP20",
    uc: "شدات PUBG", ucSub: "الشحن عبر ID اللاعب", wallet: "عنوان محفظة USDT BEP20",
    player: "PUBG Player ID", selectPackage: "اختر باقة الشدات",
    submit: "طلب السحب", minimum: "الحد الأدنى", requiredInvites: "الدعوات المطلوبة",
    history: "سجل السحب", pendingStatus: "في انتظار المراجعة", approved: "تمت الموافقة",
    rejected: "مرفوض", noHistory: "لا توجد طلبات سحب بعد.",
    noTasks: "لا توجد مهام متاحة حالياً.", start: "ابدأ", verify: "تحقق",
    wait: "انتظر", limit: "الحد", settings: "الإعدادات", save: "حفظ",
    addTask: "إضافة مهمة", title: "العنوان", description: "الوصف",
    rewardBp: "مكافأة BP", maxUsers: "الحد الأقصى للمستخدمين", taskType: "نوع المهمة",
    targetUrl: "رابط المهمة", chatId: "معرف دردشة تيليجرام",
    help: "كيف أحصل عليه؟",
    chatIdHelp: "استخدم الأمر /chatid @اسم_القناة في البوت. مثال: /chatid @Bus7App",
    loading: "جاري التحميل...",
    reports: "التقارير", users: "المستخدمون", newToday: "جديد اليوم", newWeek: "آخر 7 أيام",
    newMonth: "آخر 30 يوماً", activeToday: "نشط اليوم", videoViews: "مشاهدات الفيديو",
    adminWithdrawals: "طلبات السحب", reason: "سبب الرفض",
    send: "إرسال", close: "إغلاق", language: "اللغة", error: "حدث خطأ.",
    notTelegram: "افتح Mini App من Telegram للمتابعة.",
    copied: "تم نسخ رابط الدعوة.", saved: "تم الحفظ.",
    requested: "تم إرسال طلب السحب.", balance: "الرصيد",
    usd: "دولار", ucAmount: "UC", bpCost: "تكلفة BP",
    adsTitle: "إعلانات المكافأة", adsSub: "شاهد واربح BP فوراً",
    competitionTitle: "المسابقة الأسبوعية", competitionSub: "تنافس على الجائزة الكبرى",
    weeklyWinner: "فائز الأسبوع الماضي", grandPrize: "الجائزة الكبرى",
    topPlayers: "أفضل اللاعبين", yourRank: "ترتيبك", yourPoints: "نقاطك",
    cooldown: "العد التنازلي", ready: "جاهز", waiting: "ينتظر",
    adminPanel: "لوحة التحكم", stats: "الإحصائيات", taskMgmt: "إدارة المهام",
    settingsTab: "الإعدادات", withdrawalsTab: "طلبات السحب",
    back: "رجوع",
    promoTitle: "الرمز الترويجي",
    promoSub: "أدخل رمز اليوم لتحصل على BP",
    promoPlaceholder: "أدخل الرمز الترويجي",
    botTasks: "مهام البوت",
    adsgramTasks: "مهام AdsGram"
  },
  ru: {
    home: "Главная", competition: "Конкурс", tasks: "Задания", referrals: "Пригласить",
    withdraw: "Вывод", watchEarn: "Смотри и зарабатывай", daily: "Ежедневный бонус",
    dailySub: "Раз в 24 часа", claim: "Получить", available: "Доступно",
    completed: "Выполнено", remaining: "осталось", videos: "видео", bonus: "Бонус",
    inviteTitle: "Пригласить друзей", accepted: "Приняты", pending: "В обработке",
    copy: "Копировать", share: "Поделиться", reward: "Награда",
    conditionText: "Друг должен посмотреть минимум {n} наградных видео.",
    withdrawTitle: "Вывод", cash: "USDT", cashSub: "USDT BEP20",
    uc: "PUBG UC", ucSub: "По ID игрока", wallet: "Адрес USDT BEP20",
    player: "PUBG Player ID", selectPackage: "Выберите пакет UC",
    submit: "Запросить вывод", minimum: "Минимум", requiredInvites: "Нужно приглашений",
    history: "История", pendingStatus: "На проверке", approved: "Одобрено",
    rejected: "Отклонено", noHistory: "Запросов пока нет.",
    noTasks: "Заданий сейчас нет.", start: "Начать", verify: "Проверить",
    wait: "Ждите", limit: "Лимит", settings: "Настройки", save: "Сохранить",
    addTask: "Добавить", title: "Название", description: "Описание",
    rewardBp: "Награда BP", maxUsers: "Макс. пользователей", taskType: "Тип задания",
    targetUrl: "Ссылка", chatId: "Telegram Chat ID",
    help: "Как получить?",
    chatIdHelp: "Используйте /chatid @channel в боте. Пример: /chatid @Bus7App",
    loading: "Загрузка...",
    reports: "Отчёты", users: "Пользователи", newToday: "Сегодня", newWeek: "7 дней",
    newMonth: "30 дней", activeToday: "Активны сегодня", videoViews: "Просмотры видео",
    adminWithdrawals: "Выводы", reason: "Причина",
    send: "Отправить", close: "Закрыть", language: "Язык", error: "Произошла ошибка.",
    notTelegram: "Откройте Mini App из Telegram.",
    copied: "Ссылка скопирована.", saved: "Сохранено.",
    requested: "Запрос отправлен.", balance: "Баланс",
    usd: "USD", ucAmount: "UC", bpCost: "Стоимость BP",
    adsTitle: "Наградные видео", adsSub: "Смотри и зарабатывай BP",
    competitionTitle: "Недельный конкурс", competitionSub: "Соревнуйтесь за главный приз",
    weeklyWinner: "Победитель прошлой недели", grandPrize: "Главный приз",
    topPlayers: "Лучшие игроки", yourRank: "Ваше место", yourPoints: "Ваши очки",
    cooldown: "Ожидание", ready: "Готово", waiting: "Ожидание",
    adminPanel: "Админ-панель", stats: "Статистика", taskMgmt: "Задания",
    settingsTab: "Настройки", withdrawalsTab: "Выводы",
    back: "Назад",
    promoTitle: "Промокод",
    promoSub: "Введите код дня для получения BP",
    promoPlaceholder: "Введите промокод",
    botTasks: "Задания бота",
    adsgramTasks: "Задания AdsGram"
  },
  es: {
    home: "Inicio", competition: "Concurso", tasks: "Tareas", referrals: "Invitar",
    withdraw: "Retirar", watchEarn: "Mira y gana", daily: "Bono diario",
    dailySub: "Una vez cada 24 horas", claim: "Reclamar", available: "Disponible",
    completed: "Completado", remaining: "restante", videos: "vídeos", bonus: "Bono",
    inviteTitle: "Invitar amigos", accepted: "Aceptados", pending: "Pendientes",
    copy: "Copiar enlace", share: "Compartir", reward: "Recompensa",
    conditionText: "Tu amigo debe ver al menos {n} vídeos recompensados para que la invitación sea válida.",
    withdrawTitle: "Retirar", cash: "USDT", cashSub: "USDT BEP20",
    uc: "PUBG UC", ucSub: "Recarga por ID", wallet: "Dirección USDT BEP20",
    player: "PUBG Player ID", selectPackage: "Selecciona paquete UC",
    submit: "Solicitar retiro", minimum: "Mínimo", requiredInvites: "Invitaciones requeridas",
    history: "Historial", pendingStatus: "En revisión", approved: "Aprobado",
    rejected: "Rechazado", noHistory: "Aún no hay retiros.",
    noTasks: "No hay tareas disponibles.", start: "Iniciar", verify: "Verificar",
    wait: "Espera", limit: "Límite", settings: "Ajustes", save: "Guardar",
    addTask: "Añadir tarea", title: "Título", description: "Descripción",
    rewardBp: "Recompensa BP", maxUsers: "Máx. usuarios", taskType: "Tipo",
    targetUrl: "Enlace", chatId: "Telegram Chat ID",
    help: "¿Cómo obtenerlo?",
    chatIdHelp: "Usa /chatid @channel en el bot. Ejemplo: /chatid @Bus7App",
    loading: "Cargando...",
    reports: "Informes", users: "Usuarios", newToday: "Hoy", newWeek: "7 días",
    newMonth: "30 días", activeToday: "Activos hoy", videoViews: "Vistas de vídeo",
    adminWithdrawals: "Retiros", reason: "Motivo",
    send: "Enviar", close: "Cerrar", language: "Idioma", error: "Algo salió mal.",
    notTelegram: "Abre el Mini App desde Telegram.",
    copied: "Enlace copiado.", saved: "Guardado.",
    requested: "Solicitud enviada.", balance: "Saldo",
    usd: "USD", ucAmount: "UC", bpCost: "Coste BP",
    adsTitle: "Vídeos recompensados", adsSub: "Mira y gana BP",
    competitionTitle: "Concurso semanal", competitionSub: "Compite por el gran premio",
    weeklyWinner: "Ganador de la semana pasada", grandPrize: "Gran Premio",
    topPlayers: "Mejores jugadores", yourRank: "Tu rango", yourPoints: "Tus puntos",
    cooldown: "Espera", ready: "Listo", waiting: "Esperando",
    adminPanel: "Panel Admin", stats: "Estadísticas", taskMgmt: "Tareas",
    settingsTab: "Ajustes", withdrawalsTab: "Retiros",
    back: "Atrás",
    promoTitle: "Código Promocional",
    promoSub: "Ingresa el código de hoy para reclamar BP",
    promoPlaceholder: "Ingresa el código",
    botTasks: "Tareas del bot",
    adsgramTasks: "Tareas AdsGram"
  },
  zh: {
    home: "首页", competition: "竞赛", tasks: "任务", referrals: "邀请",
    withdraw: "提现", watchEarn: "观看赚取", daily: "每日奖励",
    dailySub: "每24小时一次", claim: "领取", available: "可用",
    completed: "已完成", remaining: "剩余", videos: "视频", bonus: "奖励",
    inviteTitle: "邀请好友", accepted: "已接受", pending: "处理中",
    copy: "复制链接", share: "分享", reward: "奖励",
    conditionText: "好友至少观看 {n} 个奖励视频后，邀请才会生效。",
    withdrawTitle: "提现", cash: "USDT", cashSub: "USDT BEP20",
    uc: "PUBG UC", ucSub: "通过玩家 ID 充值", wallet: "USDT BEP20 钱包地址",
    player: "PUBG Player ID", selectPackage: "选择 UC 套餐",
    submit: "提交提现", minimum: "最低", requiredInvites: "所需邀请",
    history: "提现记录", pendingStatus: "审核中", approved: "已批准",
    rejected: "已拒绝", noHistory: "暂无提现记录。",
    noTasks: "暂无任务。", start: "开始", verify: "验证",
    wait: "等待", limit: "上限", settings: "设置", save: "保存",
    addTask: "添加任务", title: "标题", description: "描述",
    rewardBp: "BP 奖励", maxUsers: "最大用户数", taskType: "任务类型",
    targetUrl: "任务链接", chatId: "Telegram Chat ID",
    help: "如何获取？",
    chatIdHelp: "在机器人中使用 /chatid @channel。示例：/chatid @Bus7App",
    loading: "加载中...",
    reports: "报告", users: "用户", newToday: "今日新增", newWeek: "7天新增",
    newMonth: "30天新增", activeToday: "今日活跃", videoViews: "视频观看",
    adminWithdrawals: "提现请求", reason: "拒绝原因",
    send: "发送", close: "关闭", language: "语言", error: "发生错误。",
    notTelegram: "请从 Telegram 打开 Mini App。",
    copied: "邀请链接已复制。", saved: "已保存。",
    requested: "提现请求已提交。", balance: "余额",
    usd: "美元", ucAmount: "UC", bpCost: "BP 成本",
    adsTitle: "激励视频", adsSub: "观看并赚取 BP",
    competitionTitle: "每周竞赛", competitionSub: "争夺大奖",
    weeklyWinner: "上周获胜者", grandPrize: "大奖",
    topPlayers: "顶级玩家", yourRank: "你的排名", yourPoints: "你的积分",
    cooldown: "等待中", ready: "就绪", waiting: "等待中",
    adminPanel: "管理面板", stats: "统计", taskMgmt: "任务",
    settingsTab: "设置", withdrawalsTab: "提现",
    back: "返回",
    promoTitle: "促销代码",
    promoSub: "输入今天的代码以领取 BP",
    promoPlaceholder: "输入促销代码",
    botTasks: "机器人任务",
    adsgramTasks: "AdsGram 任务"
  },
  id: {
    home: "Beranda", competition: "Kompetisi", tasks: "Tugas", referrals: "Undang",
    withdraw: "Tarik", watchEarn: "Tonton & Hasilkan", daily: "Bonus Harian",
    dailySub: "Sekali setiap 24 jam", claim: "Klaim", available: "Tersedia",
    completed: "Selesai", remaining: "tersisa", videos: "video", bonus: "Bonus",
    inviteTitle: "Undang Teman", accepted: "Diterima", pending: "Menunggu",
    copy: "Salin Tautan", share: "Bagikan", reward: "Hadiah",
    conditionText: "Teman Anda harus menonton minimal {n} video berhadiah agar undangan valid.",
    withdrawTitle: "Penarikan", cash: "USDT", cashSub: "USDT BEP20",
    uc: "PUBG UC", ucSub: "Isi ulang dengan Player ID", wallet: "Alamat USDT BEP20",
    player: "PUBG Player ID", selectPackage: "Pilih paket UC",
    submit: "Minta Penarikan", minimum: "Minimum", requiredInvites: "Undangan diperlukan",
    history: "Riwayat", pendingStatus: "Sedang ditinjau", approved: "Disetujui",
    rejected: "Ditolak", noHistory: "Belum ada penarikan.",
    noTasks: "Tidak ada tugas saat ini.", start: "Mulai", verify: "Verifikasi",
    wait: "Tunggu", limit: "Batas", settings: "Pengaturan", save: "Simpan",
    addTask: "Tambah Tugas", title: "Judul", description: "Deskripsi",
    rewardBp: "Hadiah BP", maxUsers: "Maks pengguna", taskType: "Jenis tugas",
    targetUrl: "URL Target", chatId: "Telegram Chat ID",
    help: "Bagaimana mendapatkannya?",
    chatIdHelp: "Gunakan /chatid @channel di bot. Contoh: /chatid @Bus7App",
    loading: "Memuat...",
    reports: "Laporan", users: "Pengguna", newToday: "Baru hari ini", newWeek: "7 hari",
    newMonth: "30 hari", activeToday: "Aktif hari ini", videoViews: "Tampilan video",
    adminWithdrawals: "Permintaan penarikan", reason: "Alasan penolakan",
    send: "Kirim", close: "Tutup", language: "Bahasa", error: "Terjadi kesalahan.",
    notTelegram: "Buka Mini App dari Telegram.",
    copied: "Tautan disalin.", saved: "Disimpan.",
    requested: "Permintaan dikirim.", balance: "Saldo",
    usd: "USD", ucAmount: "UC", bpCost: "Biaya BP",
    adsTitle: "Iklan Berhadiah", adsSub: "Tonton dan hasilkan BP",
    competitionTitle: "Kompetisi Mingguan", competitionSub: "Bersaing untuk hadiah utama",
    weeklyWinner: "Pemenang minggu lalu", grandPrize: "Hadiah Utama",
    topPlayers: "Pemain Teratas", yourRank: "Peringkat Anda", yourPoints: "Poin Anda",
    cooldown: "Tunggu", ready: "Siap", waiting: "Menunggu",
    adminPanel: "Panel Admin", stats: "Statistik", taskMgmt: "Tugas",
    settingsTab: "Pengaturan", withdrawalsTab: "Penarikan",
    back: "Kembali",
    promoTitle: "Kode Promo",
    promoSub: "Masukkan kode hari ini untuk klaim BP",
    promoPlaceholder: "Masukkan kode promo",
    botTasks: "Tugas Bot",
    adsgramTasks: "Tugas AdsGram"
  },
  tr: {
    home: "Ana Sayfa", competition: "Yarışma", tasks: "Görevler", referrals: "Davet",
    withdraw: "Çekim", watchEarn: "İzle & Kazan", daily: "Günlük Bonus",
    dailySub: "24 saatte bir kez", claim: "Al", available: "Mevcut",
    completed: "Tamamlandı", remaining: "kaldı", videos: "video", bonus: "Bonus",
    inviteTitle: "Arkadaş Davet Et", accepted: "Kabul Edildi", pending: "Bekliyor",
    copy: "Bağlantıyı Kopyala", share: "Paylaş", reward: "Ödül",
    conditionText: "Davetin geçerli olması için arkadaşınız en az {n} ödüllü video izlemelidir.",
    withdrawTitle: "Çekim", cash: "USDT Nakit", cashSub: "USDT BEP20",
    uc: "PUBG UC", ucSub: "Player ID ile yükleme", wallet: "USDT BEP20 cüzdan adresi",
    player: "PUBG Player ID", selectPackage: "UC paketi seçin",
    submit: "Çekim Talep Et", minimum: "Minimum", requiredInvites: "Gerekli davet",
    history: "Çekim geçmişi", pendingStatus: "İnceleniyor", approved: "Onaylandı",
    rejected: "Reddedildi", noHistory: "Henüz çekim talebi yok.",
    noTasks: "Şu anda görev yok.", start: "Başla", verify: "Doğrula",
    wait: "Bekle", limit: "Limit", settings: "Ayarlar", save: "Kaydet",
    addTask: "Görev Ekle", title: "Başlık", description: "Açıklama",
    rewardBp: "Ödül BP", maxUsers: "Maks kullanıcı", taskType: "Görev türü",
    targetUrl: "Hedef URL", chatId: "Telegram Chat ID",
    help: "Nasıl alınır?",
    chatIdHelp: "Botta /chatid @kanal kullanın. Örnek: /chatid @Bus7App",
    loading: "Yükleniyor...",
    reports: "Raporlar", users: "Kullanıcılar", newToday: "Bugün yeni", newWeek: "7 gün",
    newMonth: "30 gün", activeToday: "Bugün aktif", videoViews: "Video görüntüleme",
    adminWithdrawals: "Çekim talepleri", reason: "Red sebebi",
    send: "Gönder", close: "Kapat", language: "Dil", error: "Bir hata oluştu.",
    notTelegram: "Devam etmek için Mini App'i Telegram'dan açın.",
    copied: "Davet bağlantısı kopyalandı.", saved: "Kaydedildi.",
    requested: "Çekim talebi gönderildi.", balance: "Bakiye",
    usd: "USD", ucAmount: "UC", bpCost: "BP maliyeti",
    adsTitle: "Ödüllü Reklamlar", adsSub: "İzle ve anında BP kazan",
    competitionTitle: "Haftalık Yarışma", competitionSub: "Büyük ödül için yarış",
    weeklyWinner: "Geçen haftanın kazananı", grandPrize: "Büyük Ödül",
    topPlayers: "En İyi Oyuncular", yourRank: "Sıralamanız", yourPoints: "Puanlarınız",
    cooldown: "Bekleme", ready: "Hazır", waiting: "Bekleniyor",
    adminPanel: "Yönetici Paneli", stats: "İstatistikler", taskMgmt: "Görevler",
    settingsTab: "Ayarlar", withdrawalsTab: "Çekimler",
    back: "Geri",
    promoTitle: "Promosyon Kodu",
    promoSub: "BP almak için bugünün kodunu girin",
    promoPlaceholder: "Promosyon kodu girin",
    botTasks: "Bot Görevleri",
    adsgramTasks: "AdsGram Görevleri"
  },
  fr: {
    home: "Accueil", competition: "Concours", tasks: "Tâches", referrals: "Inviter",
    withdraw: "Retrait", watchEarn: "Regarder & Gagner", daily: "Bonus quotidien",
    dailySub: "Une fois toutes les 24 heures", claim: "Réclamer", available: "Disponible",
    completed: "Terminé", remaining: "restant", videos: "vidéos", bonus: "Bonus",
    inviteTitle: "Inviter des amis", accepted: "Acceptés", pending: "En attente",
    copy: "Copier le lien", share: "Partager", reward: "Récompense",
    conditionText: "Votre ami doit regarder au moins {n} vidéos récompensées pour que l'invitation soit validée.",
    withdrawTitle: "Retrait", cash: "USDT Espèces", cashSub: "USDT BEP20",
    uc: "PUBG UC", ucSub: "Recharge par Player ID", wallet: "Adresse portefeuille USDT BEP20",
    player: "PUBG Player ID", selectPackage: "Sélectionnez le pack UC",
    submit: "Demander le retrait", minimum: "Minimum", requiredInvites: "Invitations requises",
    history: "Historique des retraits", pendingStatus: "En cours d'examen", approved: "Approuvé",
    rejected: "Rejeté", noHistory: "Aucune demande de retrait pour le moment.",
    noTasks: "Aucune tâche disponible pour le moment.", start: "Commencer", verify: "Vérifier",
    wait: "Attendre", limit: "Limite", settings: "Paramètres", save: "Enregistrer",
    addTask: "Ajouter une tâche", title: "Titre", description: "Description",
    rewardBp: "Récompense BP", maxUsers: "Utilisateurs max", taskType: "Type de tâche",
    targetUrl: "URL cible", chatId: "Telegram Chat ID",
    help: "Comment l'obtenir ?",
    chatIdHelp: "Utilisez /chatid @chaîne dans le bot. Exemple : /chatid @Bus7App",
    loading: "Chargement...",
    reports: "Rapports", users: "Utilisateurs", newToday: "Nouveaux aujourd'hui", newWeek: "7 jours",
    newMonth: "30 jours", activeToday: "Actifs aujourd'hui", videoViews: "Vues vidéo",
    adminWithdrawals: "Demandes de retrait", reason: "Motif du rejet",
    send: "Envoyer", close: "Fermer", language: "Langue", error: "Une erreur s'est produite.",
    notTelegram: "Ouvrez ce Mini App depuis Telegram pour continuer.",
    copied: "Lien d'invitation copié.", saved: "Enregistré.",
    requested: "Demande de retrait soumise.", balance: "Solde",
    usd: "USD", ucAmount: "UC", bpCost: "Coût BP",
    adsTitle: "Vidéos récompensées", adsSub: "Regardez et gagnez des BP instantanément",
    competitionTitle: "Concours hebdomadaire", competitionSub: "Rivalisez pour le grand prix",
    weeklyWinner: "Gagnant de la semaine dernière", grandPrize: "Grand Prix",
    topPlayers: "Meilleurs joueurs", yourRank: "Votre rang", yourPoints: "Vos points",
    cooldown: "Attente", ready: "Prêt", waiting: "En attente",
    adminPanel: "Panneau Admin", stats: "Statistiques", taskMgmt: "Tâches",
    settingsTab: "Paramètres", withdrawalsTab: "Retraits",
    back: "Retour",
    promoTitle: "Code Promo",
    promoSub: "Entrez le code du jour pour réclamer des BP",
    promoPlaceholder: "Entrez le code promo",
    botTasks: "Tâches du bot",
    adsgramTasks: "Tâches AdsGram"
  },
  fa: {
    home: "خانه", competition: "مسابقه", tasks: "وظایف", referrals: "دعوت",
    withdraw: "برداشت", watchEarn: "تماشا و درآمد", daily: "پاداش روزانه",
    dailySub: "یک بار در هر 24 ساعت", claim: "دریافت", available: "موجود",
    completed: "تکمیل شده", remaining: "باقی‌مانده", videos: "ویدیو", bonus: "پاداش",
    inviteTitle: "دعوت دوستان", accepted: "پذیرفته شده", pending: "در انتظار",
    copy: "کپی لینک", share: "اشتراک‌گذاری", reward: "پاداش",
    conditionText: "دوست شما باید حداقل {n} ویدیو پاداش‌دار تماشا کند تا دعوت معتبر شود.",
    withdrawTitle: "برداشت", cash: "USDT نقدی", cashSub: "USDT BEP20",
    uc: "PUBG UC", ucSub: "شارژ با Player ID", wallet: "آدرس کیف پول USDT BEP20",
    player: "PUBG Player ID", selectPackage: "بسته UC را انتخاب کنید",
    submit: "درخواست برداشت", minimum: "حداقل", requiredInvites: "دعوت‌های مورد نیاز",
    history: "تاریخچه برداشت", pendingStatus: "در حال بررسی", approved: "تأیید شده",
    rejected: "رد شده", noHistory: "هنوز درخواست برداشتی وجود ندارد.",
    noTasks: "در حال حاضر وظیفه‌ای موجود نیست.", start: "شروع", verify: "تأیید",
    wait: "صبر کنید", limit: "محدودیت", settings: "تنظیمات", save: "ذخیره",
    addTask: "افزودن وظیفه", title: "عنوان", description: "توضیحات",
    rewardBp: "پاداش BP", maxUsers: "حداکثر کاربران", taskType: "نوع وظیفه",
    targetUrl: "URL هدف", chatId: "شناسه چت تلگرام",
    help: "چگونه دریافت کنم؟",
    chatIdHelp: "از /chatid @channel در ربات استفاده کنید. مثال: /chatid @Bus7App",
    loading: "در حال بارگذاری...",
    reports: "گزارش‌ها", users: "کاربران", newToday: "امروز جدید", newWeek: "7 روز",
    newMonth: "30 روز", activeToday: "فعال امروز", videoViews: "بازدید ویدیو",
    adminWithdrawals: "درخواست‌های برداشت", reason: "دلیل رد",
    send: "ارسال", close: "بستن", language: "زبان", error: "خطایی رخ داد.",
    notTelegram: "برای ادامه Mini App را از تلگرام باز کنید.",
    copied: "لینک دعوت کپی شد.", saved: "ذخیره شد.",
    requested: "درخواست برداشت ارسال شد.", balance: "موجودی",
    usd: "دلار", ucAmount: "UC", bpCost: "هزینه BP",
    adsTitle: "تبلیغات پاداش‌دار", adsSub: "تماشا کنید و فوراً BP کسب کنید",
    competitionTitle: "مسابقه هفتگی", competitionSub: "برای جایزه بزرگ رقابت کنید",
    weeklyWinner: "برنده هفته گذشته", grandPrize: "جایزه بزرگ",
    topPlayers: "بهترین بازیکنان", yourRank: "رتبه شما", yourPoints: "امتیازات شما",
    cooldown: "انتظار", ready: "آماده", waiting: "در انتظار",
    adminPanel: "پنل مدیریت", stats: "آمار", taskMgmt: "وظایف",
    settingsTab: "تنظیمات", withdrawalsTab: "برداشت‌ها",
    back: "بازگشت",
    promoTitle: "کد تبلیغاتی",
    promoSub: "کد امروز را وارد کنید تا BP دریافت کنید",
    promoPlaceholder: "کد تبلیغاتی را وارد کنید",
    botTasks: "وظایف ربات",
    adsgramTasks: "وظایف AdsGram"
  },
  hi: {
    home: "होम", competition: "प्रतियोगिता", tasks: "कार्य", referrals: "आमंत्रित करें",
    withdraw: "निकासी", watchEarn: "देखें और कमाएँ", daily: "दैनिक बोनस",
    dailySub: "हर 24 घंटे में एक बार", claim: "दावा करें", available: "उपलब्ध",
    completed: "पूर्ण", remaining: "शेष", videos: "वीडियो", bonus: "बोनस",
    inviteTitle: "मित्रों को आमंत्रित करें", accepted: "स्वीकृत", pending: "लंबित",
    copy: "लिंक कॉपी करें", share: "साझा करें", reward: "इनाम",
    conditionText: "आमंत्रण योग्य होने के लिए आपके मित्र को कम से कम {n} इनाम वाले वीडियो देखने होंगे।",
    withdrawTitle: "निकासी", cash: "USDT नकद", cashSub: "USDT BEP20",
    uc: "PUBG UC", ucSub: "Player ID से रिचार्ज", wallet: "USDT BEP20 वॉलेट पता",
    player: "PUBG Player ID", selectPackage: "UC पैकेज चुनें",
    submit: "निकासी का अनुरोध", minimum: "न्यूनतम", requiredInvites: "आवश्यक आमंत्रण",
    history: "निकासी इतिहास", pendingStatus: "समीक्षा में", approved: "स्वीकृत",
    rejected: "अस्वीकृत", noHistory: "अभी तक कोई निकासी अनुरोध नहीं।",
    noTasks: "अभी कोई कार्य उपलब्ध नहीं।", start: "प्रारंभ", verify: "सत्यापित करें",
    wait: "प्रतीक्षा करें", limit: "सीमा", settings: "सेटिंग्स", save: "सहेजें",
    addTask: "कार्य जोड़ें", title: "शीर्षक", description: "विवरण",
    rewardBp: "BP इनाम", maxUsers: "अधिकतम उपयोगकर्ता", taskType: "कार्य प्रकार",
    targetUrl: "लक्ष्य URL", chatId: "Telegram Chat ID",
    help: "कैसे प्राप्त करें?",
    chatIdHelp: "बॉट में /chatid @channel का उपयोग करें। उदाहरण: /chatid @Bus7App",
    loading: "लोड हो रहा है...",
    reports: "रिपोर्ट", users: "उपयोगकर्ता", newToday: "आज नए", newWeek: "7 दिन",
    newMonth: "30 दिन", activeToday: "आज सक्रिय", videoViews: "वीडियो व्यूज़",
    adminWithdrawals: "निकासी अनुरोध", reason: "अस्वीकृति का कारण",
    send: "भेजें", close: "बंद करें", language: "भाषा", error: "कुछ गलत हो गया।",
    notTelegram: "जारी रखने के लिए Telegram से Mini App खोलें।",
    copied: "रेफ़रल लिंक कॉपी हो गया।", saved: "सहेजा गया।",
    requested: "निकासी अनुरोध सबमिट हो गया।", balance: "शेष राशि",
    usd: "USD", ucAmount: "UC", bpCost: "BP लागत",
    adsTitle: "इनाम वाले विज्ञापन", adsSub: "देखें और तुरंत BP कमाएँ",
    competitionTitle: "साप्ताहिक प्रतियोगिता", competitionSub: "भव्य पुरस्कार के लिए प्रतिस्पर्धा करें",
    weeklyWinner: "पिछले सप्ताह का विजेता", grandPrize: "भव्य पुरस्कार",
    topPlayers: "शीर्ष खिलाड़ी", yourRank: "आपकी रैंक", yourPoints: "आपके अंक",
    cooldown: "प्रतीक्षा", ready: "तैयार", waiting: "प्रतीक्षारत",
    adminPanel: "एडमिन पैनल", stats: "आंकड़े", taskMgmt: "कार्य",
    settingsTab: "सेटिंग्स", withdrawalsTab: "निकासी",
    back: "वापस",
    promoTitle: "प्रोमो कोड",
    promoSub: "BP दावा करने के लिए आज का कोड दर्ज करें",
    promoPlaceholder: "प्रोमो कोड दर्ज करें",
    botTasks: "बॉट कार्य",
    adsgramTasks: "AdsGram कार्य"
  },
  de: {
    home: "Startseite", competition: "Wettbewerb", tasks: "Aufgaben", referrals: "Einladen",
    withdraw: "Abheben", watchEarn: "Ansehen & Verdienen", daily: "Täglicher Bonus",
    dailySub: "Einmal alle 24 Stunden", claim: "Beanspruchen", available: "Verfügbar",
    completed: "Abgeschlossen", remaining: "verbleibend", videos: "Videos", bonus: "Bonus",
    inviteTitle: "Freunde einladen", accepted: "Akzeptiert", pending: "Ausstehend",
    copy: "Link kopieren", share: "Teilen", reward: "Belohnung",
    conditionText: "Ihr Freund muss mindestens {n} belohnte Videos ansehen, damit die Einladung gültig wird.",
    withdrawTitle: "Abheben", cash: "USDT Bargeld", cashSub: "USDT BEP20",
    uc: "PUBG UC", ucSub: "Aufladen per Player ID", wallet: "USDT BEP20 Wallet-Adresse",
    player: "PUBG Player ID", selectPackage: "UC-Paket wählen",
    submit: "Auszahlung anfordern", minimum: "Minimum", requiredInvites: "Erforderliche Einladungen",
    history: "Auszahlungsverlauf", pendingStatus: "In Prüfung", approved: "Genehmigt",
    rejected: "Abgelehnt", noHistory: "Noch keine Auszahlungsanfragen.",
    noTasks: "Derzeit keine Aufgaben verfügbar.", start: "Starten", verify: "Überprüfen",
    wait: "Warten", limit: "Limit", settings: "Einstellungen", save: "Speichern",
    addTask: "Aufgabe hinzufügen", title: "Titel", description: "Beschreibung",
    rewardBp: "BP-Belohnung", maxUsers: "Max. Benutzer", taskType: "Aufgabentyp",
    targetUrl: "Ziel-URL", chatId: "Telegram Chat ID",
    help: "Wie bekomme ich es?",
    chatIdHelp: "Verwenden Sie /chatid @channel im Bot. Beispiel: /chatid @Bus7App",
    loading: "Wird geladen...",
    reports: "Berichte", users: "Benutzer", newToday: "Heute neu", newWeek: "7 Tage",
    newMonth: "30 Tage", activeToday: "Heute aktiv", videoViews: "Videoaufrufe",
    adminWithdrawals: "Auszahlungsanfragen", reason: "Ablehnungsgrund",
    send: "Senden", close: "Schließen", language: "Sprache", error: "Etwas ist schiefgelaufen.",
    notTelegram: "Öffnen Sie diese Mini App von Telegram aus.",
    copied: "Empfehlungslink kopiert.", saved: "Gespeichert.",
    requested: "Auszahlungsanfrage gesendet.", balance: "Guthaben",
    usd: "USD", ucAmount: "UC", bpCost: "BP-Kosten",
    adsTitle: "Belohnte Anzeigen", adsSub: "Ansehen und sofort BP verdienen",
    competitionTitle: "Wöchentlicher Wettbewerb", competitionSub: "Kämpfen Sie um den Hauptpreis",
    weeklyWinner: "Letzte Woche Gewinner", grandPrize: "Hauptpreis",
    topPlayers: "Top-Spieler", yourRank: "Ihr Rang", yourPoints: "Ihre Punkte",
    cooldown: "Abklingzeit", ready: "Bereit", waiting: "Warten",
    adminPanel: "Admin-Panel", stats: "Statistiken", taskMgmt: "Aufgaben",
    settingsTab: "Einstellungen", withdrawalsTab: "Auszahlungen",
    back: "Zurück",
    promoTitle: "Promo-Code",
    promoSub: "Geben Sie den heutigen Code ein, um BP zu erhalten",
    promoPlaceholder: "Promo-Code eingeben",
    botTasks: "Bot-Aufgaben",
    adsgramTasks: "AdsGram-Aufgaben"
  },
  pt: {
    home: "Início", competition: "Competição", tasks: "Tarefas", referrals: "Convidar",
    withdraw: "Sacar", watchEarn: "Assistir & Ganhar", daily: "Bônus Diário",
    dailySub: "Uma vez a cada 24 horas", claim: "Resgatar", available: "Disponível",
    completed: "Concluído", remaining: "restante", videos: "vídeos", bonus: "Bônus",
    inviteTitle: "Convidar Amigos", accepted: "Aceitos", pending: "Pendentes",
    copy: "Copiar Link", share: "Compartilhar", reward: "Recompensa",
    conditionText: "Seu amigo deve assistir pelo menos {n} vídeos recompensados para o convite ser válido.",
    withdrawTitle: "Sacar", cash: "USDT Dinheiro", cashSub: "USDT BEP20",
    uc: "PUBG UC", ucSub: "Recarga por Player ID", wallet: "Endereço da carteira USDT BEP20",
    player: "PUBG Player ID", selectPackage: "Selecione o pacote UC",
    submit: "Solicitar Saque", minimum: "Mínimo", requiredInvites: "Convites necessários",
    history: "Histórico de saques", pendingStatus: "Em análise", approved: "Aprovado",
    rejected: "Rejeitado", noHistory: "Nenhuma solicitação de saque ainda.",
    noTasks: "Nenhuma tarefa disponível agora.", start: "Iniciar", verify: "Verificar",
    wait: "Aguarde", limit: "Limite", settings: "Configurações", save: "Salvar",
    addTask: "Adicionar Tarefa", title: "Título", description: "Descrição",
    rewardBp: "Recompensa BP", maxUsers: "Máx. usuários", taskType: "Tipo de tarefa",
    targetUrl: "URL de destino", chatId: "Telegram Chat ID",
    help: "Como obter?",
    chatIdHelp: "Use /chatid @canal no bot. Exemplo: /chatid @Bus7App",
    loading: "Carregando...",
    reports: "Relatórios", users: "Usuários", newToday: "Novos hoje", newWeek: "7 dias",
    newMonth: "30 dias", activeToday: "Ativos hoje", videoViews: "Visualizações de vídeo",
    adminWithdrawals: "Solicitações de saque", reason: "Motivo da rejeição",
    send: "Enviar", close: "Fechar", language: "Idioma", error: "Algo deu errado.",
    notTelegram: "Abra este Mini App pelo Telegram para continuar.",
    copied: "Link de indicação copiado.", saved: "Salvo.",
    requested: "Solicitação de saque enviada.", balance: "Saldo",
    usd: "USD", ucAmount: "UC", bpCost: "Custo BP",
    adsTitle: "Anúncios Recompensados", adsSub: "Assista e ganhe BP instantaneamente",
    competitionTitle: "Competição Semanal", competitionSub: "Compita pelo grande prêmio",
    weeklyWinner: "Vencedor da semana passada", grandPrize: "Grande Prêmio",
    topPlayers: "Melhores Jogadores", yourRank: "Sua Posição", yourPoints: "Seus Pontos",
    cooldown: "Espera", ready: "Pronto", waiting: "Aguardando",
    adminPanel: "Painel Admin", stats: "Estatísticas", taskMgmt: "Tarefas",
    settingsTab: "Configurações", withdrawalsTab: "Saques",
    back: "Voltar",
    promoTitle: "Código Promocional",
    promoSub: "Digite o código de hoje para resgatar BP",
    promoPlaceholder: "Digite o código promocional",
    botTasks: "Tarefas do Bot",
    adsgramTasks: "Tarefas AdsGram"
  },
  vi: {
    home: "Trang chủ", competition: "Cuộc thi", tasks: "Nhiệm vụ", referrals: "Mời",
    withdraw: "Rút tiền", watchEarn: "Xem & Kiếm", daily: "Thưởng hàng ngày",
    dailySub: "Mỗi 24 giờ một lần", claim: "Nhận", available: "Có sẵn",
    completed: "Hoàn thành", remaining: "còn lại", videos: "video", bonus: "Thưởng",
    inviteTitle: "Mời bạn bè", accepted: "Đã chấp nhận", pending: "Đang chờ",
    copy: "Sao chép liên kết", share: "Chia sẻ", reward: "Phần thưởng",
    conditionText: "Bạn của bạn phải xem ít nhất {n} video có thưởng để lời mời có hiệu lực.",
    withdrawTitle: "Rút tiền", cash: "USDT Tiền mặt", cashSub: "USDT BEP20",
    uc: "PUBG UC", ucSub: "Nạp qua Player ID", wallet: "Địa chỉ ví USDT BEP20",
    player: "PUBG Player ID", selectPackage: "Chọn gói UC",
    submit: "Yêu cầu rút tiền", minimum: "Tối thiểu", requiredInvites: "Lời mời cần thiết",
    history: "Lịch sử rút tiền", pendingStatus: "Đang xem xét", approved: "Đã phê duyệt",
    rejected: "Bị từ chối", noHistory: "Chưa có yêu cầu rút tiền nào.",
    noTasks: "Hiện không có nhiệm vụ nào.", start: "Bắt đầu", verify: "Xác minh",
    wait: "Chờ", limit: "Giới hạn", settings: "Cài đặt", save: "Lưu",
    addTask: "Thêm nhiệm vụ", title: "Tiêu đề", description: "Mô tả",
    rewardBp: "Thưởng BP", maxUsers: "Người dùng tối đa", taskType: "Loại nhiệm vụ",
    targetUrl: "URL mục tiêu", chatId: "Telegram Chat ID",
    help: "Làm thế nào để có được?",
    chatIdHelp: "Sử dụng /chatid @channel trong bot. Ví dụ: /chatid @Bus7App",
    loading: "Đang tải...",
    reports: "Báo cáo", users: "Người dùng", newToday: "Mới hôm nay", newWeek: "7 ngày",
    newMonth: "30 ngày", activeToday: "Hoạt động hôm nay", videoViews: "Lượt xem video",
    adminWithdrawals: "Yêu cầu rút tiền", reason: "Lý do từ chối",
    send: "Gửi", close: "Đóng", language: "Ngôn ngữ", error: "Đã xảy ra lỗi.",
    notTelegram: "Mở Mini App này từ Telegram để tiếp tục.",
    copied: "Đã sao chép liên kết giới thiệu.", saved: "Đã lưu.",
    requested: "Yêu cầu rút tiền đã được gửi.", balance: "Số dư",
    usd: "USD", ucAmount: "UC", bpCost: "Chi phí BP",
    adsTitle: "Quảng cáo có thưởng", adsSub: "Xem và kiếm BP ngay lập tức",
    competitionTitle: "Cuộc thi hàng tuần", competitionSub: "Cạnh tranh cho giải thưởng lớn",
    weeklyWinner: "Người thắng tuần trước", grandPrize: "Giải thưởng lớn",
    topPlayers: "Người chơi hàng đầu", yourRank: "Thứ hạng của bạn", yourPoints: "Điểm của bạn",
    cooldown: "Chờ đợi", ready: "Sẵn sàng", waiting: "Đang chờ",
    adminPanel: "Bảng quản trị", stats: "Thống kê", taskMgmt: "Nhiệm vụ",
    settingsTab: "Cài đặt", withdrawalsTab: "Rút tiền",
    back: "Quay lại",
    promoTitle: "Mã khuyến mãi",
    promoSub: "Nhập mã hôm nay để nhận BP",
    promoPlaceholder: "Nhập mã khuyến mãi",
    botTasks: "Nhiệm vụ Bot",
    adsgramTasks: "Nhiệm vụ AdsGram"
  },
  bn: {
    home: "হোম", competition: "প্রতিযোগিতা", tasks: "টাস্ক", referrals: "আমন্ত্রণ",
    withdraw: "উত্তোলন", watchEarn: "দেখুন এবং উপার্জন করুন", daily: "দৈনিক বোনাস",
    dailySub: "প্রতি 24 ঘন্টায় একবার", claim: "দাবি করুন", available: "উপলব্ধ",
    completed: "সম্পন্ন", remaining: "বাকি", videos: "ভিডিও", bonus: "বোনাস",
    inviteTitle: "বন্ধুদের আমন্ত্রণ জানান", accepted: "গৃহীত", pending: "মুলতুবি",
    copy: "লিঙ্ক কপি করুন", share: "শেয়ার করুন", reward: "পুরস্কার",
    conditionText: "আমন্ত্রণ বৈধ হতে আপনার বন্ধুকে কমপক্ষে {n}টি পুরস্কারপ্রাপ্ত ভিডিও দেখতে হবে।",
    withdrawTitle: "উত্তোলন", cash: "USDT নগদ", cashSub: "USDT BEP20",
    uc: "PUBG UC", ucSub: "Player ID দিয়ে রিচার্জ", wallet: "USDT BEP20 ওয়ালেট ঠিকানা",
    player: "PUBG Player ID", selectPackage: "UC প্যাকেজ নির্বাচন করুন",
    submit: "উত্তোলনের অনুরোধ", minimum: "সর্বনিম্ন", requiredInvites: "প্রয়োজনীয় আমন্ত্রণ",
    history: "উত্তোলনের ইতিহাস", pendingStatus: "পর্যালোচনায়", approved: "অনুমোদিত",
    rejected: "প্রত্যাখ্যাত", noHistory: "এখনও কোন উত্তোলনের অনুরোধ নেই।",
    noTasks: "এই মুহূর্তে কোন টাস্ক নেই।", start: "শুরু করুন", verify: "যাচাই করুন",
    wait: "অপেক্ষা করুন", limit: "সীমা", settings: "সেটিংস", save: "সংরক্ষণ করুন",
    addTask: "টাস্ক যোগ করুন", title: "শিরোনাম", description: "বিবরণ",
    rewardBp: "BP পুরস্কার", maxUsers: "সর্বোচ্চ ব্যবহারকারী", taskType: "টাস্কের ধরন",
    targetUrl: "লক্ষ্য URL", chatId: "টেলিগ্রাম চ্যাট ID",
    help: "কিভাবে পাব?",
    chatIdHelp: "বটে /chatid @channel ব্যবহার করুন। উদাহরণ: /chatid @Bus7App",
    loading: "লোড হচ্ছে...",
    reports: "রিপোর্ট", users: "ব্যবহারকারী", newToday: "আজ নতুন", newWeek: "7 দিন",
    newMonth: "30 দিন", activeToday: "আজ সক্রিয়", videoViews: "ভিডিও ভিউ",
    adminWithdrawals: "উত্তোলনের অনুরোধ", reason: "প্রত্যাখ্যানের কারণ",
    send: "পাঠান", close: "বন্ধ করুন", language: "ভাষা", error: "কিছু ভুল হয়েছে।",
    notTelegram: "চালিয়ে যেতে টেলিগ্রাম থেকে Mini App খুলুন।",
    copied: "রেফারেল লিঙ্ক কপি হয়েছে।", saved: "সংরক্ষিত হয়েছে।",
    requested: "উত্তোলনের অনুরোধ জমা হয়েছে।", balance: "ব্যালেন্স",
    usd: "USD", ucAmount: "UC", bpCost: "BP খরচ",
    adsTitle: "পুরস্কারপ্রাপ্ত বিজ্ঞাপন", adsSub: "দেখুন এবং তাৎক্ষণিক BP অর্জন করুন",
    competitionTitle: "সাপ্তাহিক প্রতিযোগিতা", competitionSub: "গ্র্যান্ড প্রাইজের জন্য প্রতিদ্বন্দ্বিতা করুন",
    weeklyWinner: "গত সপ্তাহের বিজয়ী", grandPrize: "গ্র্যান্ড প্রাইজ",
    topPlayers: "শীর্ষ খেলোয়াড়", yourRank: "আপনার র‌্যাঙ্ক", yourPoints: "আপনার পয়েন্ট",
    cooldown: "অপেক্ষা", ready: "প্রস্তুত", waiting: "অপেক্ষমাণ",
    adminPanel: "অ্যাডমিন প্যানেল", stats: "পরিসংখ্যান", taskMgmt: "টাস্ক",
    settingsTab: "সেটিংস", withdrawalsTab: "উত্তোলন",
    back: "ফিরে যান",
    promoTitle: "প্রোমো কোড",
    promoSub: "BP দাবি করতে আজকের কোড লিখুন",
    promoPlaceholder: "প্রোমো কোড লিখুন",
    botTasks: "বট টাস্ক",
    adsgramTasks: "AdsGram টাস্ক"
  }
};

/* =========================================================
   STATE
   ========================================================= */
const state = {
  page: "home",
  lang: "en",
  me: null,
  settings: {},
  providerProgress: {},
  tasks: [],
  referrals: null,
  withdrawals: [],
  competition: null,
  admin: false,
  adminReports: null,
  adminSettings: [],
  adminWithdrawals: [],
  adminTasks: [],
  adminTab: "stats",
  withdrawType: "cash",
  uc: 60,
  wallet: "",
  player: "",
  lastInteraction: Date.now(),
  adCooldowns: {},
  taskCountdowns: {},
  dailyCountdown: null,
  bpPerUsd: 10000,
  _adsgramTaskRendered: false
};

/* =========================================================
   HELPERS
   ========================================================= */
function t(key, vars = {}) {
  const dict = I18N[state.lang] || I18N.en;
  let s = dict[key] ?? I18N.en[key] ?? key;
  for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, v);
  return s;
}

function fmt(n) {
  return new Intl.NumberFormat().format(Number(n || 0));
}

function usdShort(n) {
  return `$${Number(n || 0).toFixed(3)}`;
}

function usdFull(n) {
  return `$${Number(n || 0).toFixed(6)}`;
}

function bpToUsd(bp) {
  return usdShort(Number(bp || 0) / (state.bpPerUsd || 10000));
}

function initData() {
  return TG?.initData || "";
}

function headers(json = false) {
  const h = { "X-Telegram-Init-Data": initData() };
  if (json) h["Content-Type"] = "application/json";
  return h;
}

async function api(path, options = {}) {
  const res = await fetch(API_BASE + path, {
    ...options,
    headers: { ...headers(!!options.body), ...(options.headers || {}) }
  });
  let data = null;
  try { data = await res.json(); } catch {}
  if (!res.ok) {
    const detail = data?.detail;
    const msg = typeof detail === "string" ? detail : (detail?.message || t("error"));
    const e = new Error(msg);
    e.status = res.status;
    e.data = data;
    throw e;
  }
  return data;
}

function toast(msg) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.remove("show"), 2200);
}

function esc(s) {
  return String(s ?? "").replace(/[&<>"']/g, m => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[m]));
}

function setBtnLoading(btn, text) {
  if (!btn) return;
  btn.dataset._html = btn.dataset._html || btn.innerHTML;
  btn.disabled = true;
  btn.classList.add("loading");
  btn.innerHTML = `<span class="icon" data-icon="clock"></span>${text || t("loading")}`;
  hydrateIcons();
}
function restoreBtn(btn) {
  if (!btn) return;
  if (btn.dataset._html) btn.innerHTML = btn.dataset._html;
  btn.disabled = false;
  btn.classList.remove("loading");
}

/* =========================================================
   ICONS
   ========================================================= */
function icon(name) {
  const paths = {
    home: '<path d="m3 10 9-7 9 7"/><path d="M5 9v11h14V9"/><path d="M9 20v-6h6v6"/>',
    tasks: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 9h8M8 13h8M8 17h5"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="7" r="4"/><path d="M17 11a4 4 0 1 0 0-8M21 21v-2a4 4 0 0 0-3-3.87"/>',
    wallet: '<path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H20v14H6.5A2.5 2.5 0 0 1 4 16.5z"/><path d="M4 8h13a2 2 0 0 1 2 2v2H4"/><circle cx="16" cy="12" r="1"/>',
    play: '<path d="m9 7 8 5-8 5z"/>',
    video: '<rect x="2" y="6" width="14" height="12" rx="2"/><path d="m22 8-6 4 6 4z"/>',
    gift: '<path d="M20 12v9H4v-9"/><path d="M2 7h20v5H2z"/><path d="M12 7v14"/><path d="M12 7H7.5a2.5 2.5 0 1 1 0-5C10 2 12 7 12 7ZM12 7h4.5a2.5 2.5 0 1 0 0-5C14 2 12 7 12 7Z"/>',
    copy: '<rect x="9" y="9" width="10" height="10" rx="2"/><path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    trophy: '<path d="M6 9H4a2 2 0 0 0 0 4h2M18 9h2a2 2 0 0 1 0 4h-2"/><path d="M6 4h12v6a6 6 0 0 1-12 0z"/><path d="M9 20h6M12 16v4"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    arrow: '<path d="M19 12H5M12 5l-7 7 7 7"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 0 1 5 0c0 1.5-2.5 2-2.5 3.5"/><circle cx="12" cy="16.5" r=".5"/>'
  };
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.tasks}</svg>`;
}

function hydrateIcons() {
  document.querySelectorAll(".icon[data-icon]").forEach(x => {
    x.innerHTML = icon(x.dataset.icon);
  });
}

/* =========================================================
   COUNTDOWN HELPERS
   ========================================================= */
function fmtTime(seconds) {
  if (seconds <= 0) return "";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

let _tickTimer = null;
function startTicker() {
  if (_tickTimer) return;
  _tickTimer = setInterval(() => {
    if (state.dailyCountdown && state.dailyCountdown > 0) {
      state.dailyCountdown -= 1;
      if (state.dailyCountdown <= 0) {
        state.dailyCountdown = null;
        if (state.page === "home") renderHome();
      } else {
        const el = document.getElementById("dailyCountdown");
        if (el) el.textContent = `${t("cooldown")}: ${fmtTime(state.dailyCountdown)}`;
      }
    }
    for (const [id, endTime] of Object.entries(state.taskCountdowns)) {
      const remain = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
      const el = document.getElementById(`task-countdown-${id}`);
      if (el) {
        if (remain > 0) {
          el.style.display = "block";
          el.textContent = `${t("cooldown")}: ${remain}s`;
        } else {
          el.style.display = "none";
          delete state.taskCountdowns[id];
          if (state.page === "tasks") renderTasks();
        }
      }
    }
    for (const [prov, endTime] of Object.entries(state.adCooldowns)) {
      const remain = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
      if (remain <= 0) {
        delete state.adCooldowns[prov];
      }
    }
  }, 1000);
}

/* =========================================================
   PROFILE
   ========================================================= */
function setProfile() {
  const u = state.me?.user;
  if (!u) return;
  const name = [u.first_name, u.last_name].filter(Boolean).join(" ")
    || (u.username ? `@${u.username}` : "Bush User");
  document.getElementById("profileName").textContent = name;
  document.getElementById("profileId").textContent = u.id;
  document.getElementById("balanceBp").textContent = `${fmt(u.balance_bp)} BP`;
  document.getElementById("balanceUsd").textContent = usdFull(u.balance_usd);
  const avatar = TG?.initDataUnsafe?.user?.photo_url;
  if (avatar) {
    document.getElementById("avatar").src = avatar;
    document.getElementById("avatar").style.display = "block";
    document.getElementById("avatarFallback").style.display = "none";
  } else {
    document.getElementById("avatarFallback").textContent = (name[0] || "B").toUpperCase();
  }
}

/* =========================================================
   UPDATE BALANCE UI — بدون إعادة رسم كامل (بدون وميض)
   ========================================================= */
function updateBalanceUI() {
  const u = state.me?.user;
  if (!u) return;

  const bpEl = document.getElementById("balanceBp");
  const usdEl = document.getElementById("balanceUsd");
  if (bpEl) bpEl.textContent = `${fmt(u.balance_bp)} BP`;
  if (usdEl) usdEl.textContent = usdFull(u.balance_usd);

  const heroBalance = document.querySelector(".hero-balance");
  if (heroBalance) heroBalance.innerHTML = `${fmt(u.balance_bp)} <span>BP</span>`;
  const heroUsdTag = document.querySelector(".hero .bp-usd-tag");
  if (heroUsdTag) heroUsdTag.textContent = bpToUsd(u.balance_bp);
  const heroUsdt = document.querySelector(".hero-usdt span");
  if (heroUsdt) heroUsdt.textContent = usdShort(u.balance_usd);

  const withdrawBig = document.querySelector(".withdraw-balance .big");
  if (withdrawBig) withdrawBig.textContent = `${fmt(u.balance_bp)} BP`;
  const withdrawUsdTag = document.querySelector(".withdraw-balance .bp-usd-tag");
  if (withdrawUsdTag) withdrawUsdTag.textContent = bpToUsd(u.balance_bp);
  const withdrawSmall = document.querySelector(".withdraw-balance .small");
  if (withdrawSmall) withdrawSmall.textContent = usdShort(u.balance_usd);
}

/* =========================================================
   UPDATE AD CARDS — بدون إعادة رسم كامل
   ========================================================= */
function updateAdCards() {
  const el = document.getElementById("adsList");
  if (!el) return;
  Object.keys(AD_PROVIDERS).forEach(provider => {
    const watchBtn = el.querySelector(`[data-watch="${provider}"]`);
    if (!watchBtn) return;
    const card = watchBtn.closest(".ad-card");
    if (!card) return;
    const progress = state.providerProgress?.[provider] || {};
    const views = progress.views_today || 0;
    const limit = progress.daily_limit || 20;
    const badge = card.querySelector(".ad-badge");
    if (badge) badge.textContent = `${views}/${limit}`;
    const btnText = watchBtn.querySelector("span:last-child") || watchBtn;
    if (views >= limit) {
      watchBtn.disabled = true;
    }
  });
}

/* =========================================================
   SDK LOADING
   ========================================================= */
function waitForSDK(checkFn, timeoutMs = 10000) {
  return new Promise((resolve, reject) => {
    if (checkFn()) { resolve(); return; }
    const start = Date.now();
    const interval = setInterval(() => {
      if (checkFn()) {
        clearInterval(interval);
        resolve();
      } else if (Date.now() - start > timeoutMs) {
        clearInterval(interval);
        reject(new Error("SDK load timeout"));
      }
    }, 100);
  });
}

let _richadsReady = false;
let _onclickaReady = false;
let _adsgramReady = false;

async function initRichAds() {
  if (_richadsReady) return;
  try {
    await waitForSDK(() => typeof window.TelegramAdsController === "function");
    window._richAds = new window.TelegramAdsController();
    window._richAds.initialize({ pubId: "1007361", appId: "8749" });
    _richadsReady = true;
    console.log("✅ RichAds ready");
  } catch (e) {
    console.warn("❌ RichAds init failed:", e.message);
  }
}

async function initOnClickA() {
  if (_onclickaReady) return;
  try {
    await waitForSDK(() => typeof window.initCdTma === "function");
    const show = await window.initCdTma({ id: "6146212" });
    window._onclickaShow = show;
    _onclickaReady = true;
    console.log("✅ OnClickA ready");
  } catch (e) {
    console.warn("❌ OnClickA init failed:", e.message);
  }
}

const ADSGRAM_BLOCK_ID = "";
async function initAdsGram() {
  if (_adsgramReady || !ADSGRAM_BLOCK_ID) return;
  try {
    await waitForSDK(() => typeof window.Adsgram !== "undefined");
    window._adsgramController = window.Adsgram.init({ blockId: ADSGRAM_BLOCK_ID });
    _adsgramReady = true;
    console.log("✅ AdsGram ready");
  } catch (e) {
    console.warn("❌ AdsGram init failed:", e.message);
  }
}

/* =========================================================
   AD SESSION + WATCH
   ========================================================= */
async function startAdSession(provider) {
  const data = await api(`/api/ads/${provider}/start-session`, {
    method: "POST",
    body: JSON.stringify({ provider })
  });
  return data.session_id;
}

async function completeAdSession(provider, sessionId) {
  return await api(`/api/ads/${provider}/complete-session`, {
    method: "POST",
    body: JSON.stringify({ session_id: sessionId })
  });
}

async function watchAd(provider) {
  if (state.adCooldowns[provider] && state.adCooldowns[provider] > Date.now()) {
    const remain = Math.ceil((state.adCooldowns[provider] - Date.now()) / 1000);
    toast(`${t("cooldown")}: ${remain}s`);
    return;
  }

  try {
    if (provider === "richads_rewarded" || provider === "richads_interstitial") {
      await initRichAds();
    } else if (provider === "onclicka") {
      await initOnClickA();
    } else if (provider === "adsgram") {
      await initAdsGram();
    }
  } catch {}

  let ready = false;
  if (provider === "richads_rewarded" || provider === "richads_interstitial") ready = _richadsReady;
  else if (provider === "onclicka") ready = _onclickaReady;
  else if (provider === "adsgram") ready = _adsgramReady;

  if (!ready) {
    if (provider === "adsgram") {
      toast("AdsGram غير مفعّل بعد");
    } else {
      toast("الإعلان غير جاهز، حاول مرة أخرى بعد لحظات");
    }
    return;
  }

  const btn = document.querySelector(`[data-watch="${provider}"]`);
  setBtnLoading(btn);

  let sessionId = null;
  try {
    sessionId = await startAdSession(provider);
  } catch (e) {
    toast(e.message);
    restoreBtn(btn);
    return;
  }

  try {
    if (provider === "richads_rewarded") {
      await new Promise((res, rej) => {
        window._richAds.triggerNativeNotification()
          .then(res).catch(() => rej(new Error("تم إلغاء الإعلان")));
      });
    } else if (provider === "richads_interstitial") {
      await new Promise((res, rej) => {
        window._richAds.triggerInterstitialBanner()
          .then(res).catch(() => rej(new Error("تم إلغاء الإعلان")));
      });
    } else if (provider === "onclicka") {
      await new Promise((res, rej) => {
        window._onclickaShow()
          .then(res).catch(() => rej(new Error("تم إلغاء الإعلان")));
      });
    } else if (provider === "adsgram") {
      await new Promise((res, rej) => {
        window._adsgramController.show()
          .then(res).catch(() => rej(new Error("تم إلغاء الإعلان")));
      });
    }

    const result = await completeAdSession(provider, sessionId);
    toast(`+${fmt(result.reward_bp)} BP`);

    state.adCooldowns[provider] = Date.now() + 10000;

    await Promise.all([refreshMe(), loadAdProgress()]);
    // ✅ بدون re-render
    updateAdCards();
    restoreBtn(btn);
  } catch (e) {
    console.warn("Ad failed:", e);
    toast(e.message || "لم تكتمل المشاهدة");
    restoreBtn(btn);
  }
}

/* =========================================================
   PART 1 ENDS HERE — أرسل "التالي" للجزء 2
   ========================================================= */
/* =========================================================
   BUSH MINI APP — app.js (Part 2/3) — FINAL (No Flicker)
   ========================================================= */

/* =========================================================
   HOME PAGE
   ========================================================= */
function renderHome() {
  const d = state.me;
  if (!d) return;
  const u = d.user;

  if (d.daily_bonus?.claimed && d.daily_bonus?.cooldown_remaining_seconds > 0) {
    state.dailyCountdown = d.daily_bonus.cooldown_remaining_seconds;
  } else if (!d.daily_bonus?.claimed) {
    state.dailyCountdown = null;
  }

  const dailyClaimed = d.daily_bonus?.claimed;
  const dailyCooldown = state.dailyCountdown;

  let dailyBtnText = t("claim");
  let dailyBtnDisabled = false;
  if (dailyClaimed && dailyCooldown && dailyCooldown > 0) {
    dailyBtnText = fmtTime(dailyCooldown);
    dailyBtnDisabled = true;
  }

  document.getElementById("page-home").innerHTML = `
    <div class="hero">
      <div class="hero-content">
        <div class="hero-left">
          <div class="eyebrow">BUSH REWARDS</div>
          <div class="hero-title">${t("home")}</div>
          <div class="hero-label">${t("balance")}</div>
          <div class="hero-balance">${fmt(u.balance_bp)} <span>BP</span></div>
          <div class="bp-usd-tag">${bpToUsd(u.balance_bp)}</div>
          <div class="hero-usdt">
            <img src="usdt.png" alt="USDT" onerror="this.style.display='none'">
            <span>${usdShort(u.balance_usd)}</span>
          </div>
          <div class="hero-user">${esc(u.first_name || "User")} ${esc(u.last_name || "")}</div>
        </div>
      </div>
      <div class="hero-actions">
        <div style="font-size:10px;color:var(--text-muted);">
          ${t("adsSub")}
        </div>
        <button class="lang-globe" id="langBtn" aria-label="${t("language")}">
          <span class="icon" data-icon="globe"></span>
        </button>
      </div>
    </div>

    <div class="section-head">
      <div class="section-title">${t("adsTitle")}</div>
    </div>
    <div class="ads-list" id="adsList"></div>

    <div class="daily-card">
      <div class="feature-icon icon" data-icon="gift"></div>
      <div class="daily-copy">
        <b>${t("daily")}</b>
        <span>${t("dailySub")} · ${fmt(d.daily_bonus.amount_bp)} BP</span>
        <div class="bp-usd-tag">${bpToUsd(d.daily_bonus.amount_bp)}</div>
        ${dailyBtnDisabled ? `<div class="daily-cooldown" id="dailyCountdown">${t("cooldown")}: ${fmtTime(dailyCooldown)}</div>` : ""}
      </div>
      <button class="btn primary" id="dailyBtn" ${dailyBtnDisabled ? "disabled" : ""}>${dailyBtnText}</button>
    </div>

    <div class="promo-card">
      <div class="promo-head">
        <div class="promo-icon icon" data-icon="gift"></div>
        <div class="promo-head-copy">
          <b>${t("promoTitle")}</b>
          <span>${t("promoSub")}</span>
        </div>
      </div>
      <input class="promo-input" id="promoInput" placeholder="${t("promoPlaceholder")}" maxlength="20" autocomplete="off">
      <button class="promo-btn" id="promoBtn">${t("claim")}</button>
    </div>
  `;

  hydrateIcons();
  renderAdProviders();
  document.getElementById("dailyBtn")?.addEventListener("click", claimDaily);
  document.getElementById("langBtn")?.addEventListener("click", openLanguage);
  document.getElementById("promoBtn")?.addEventListener("click", claimPromo);
  startTicker();
}

/* =========================================================
   AD PROVIDERS LIST
   ========================================================= */
function renderAdProviders() {
  const el = document.getElementById("adsList");
  if (!el) return;
  el.innerHTML = Object.entries(AD_PROVIDERS).map(([key, cfg]) => {
    const progress = state.providerProgress?.[key] || {};
    const views = progress.views_today || 0;
    const limit = progress.daily_limit || 20;
    const rewardBp = progress.reward_bp || 10;
    const bonus3 = progress.bonus_3 || { claimed: false, reward_bp: 25 };
    const bonus6 = progress.bonus_6 || { claimed: false, reward_bp: 50 };
    const bonus10 = progress.bonus_10 || { claimed: false, reward_bp: 80 };

    const cooldown = state.adCooldowns[key];
    const onCooldown = cooldown && cooldown > Date.now();
    const watchDisabled = views >= limit || onCooldown ? "disabled" : "";

    return `
      <div class="ad-card">
        <div class="ad-head">
          <div class="ad-brand">
            <div class="ad-brand-icon icon" data-icon="${cfg.icon}"></div>
            <div>
              <div class="ad-name">${cfg.label}</div>
              <div class="ad-sub">${cfg.sub}</div>
            </div>
          </div>
          <div class="ad-badge">${views}/${limit}</div>
        </div>
        <button class="ad-watch-btn" data-watch="${key}" ${watchDisabled}>
          <span class="icon" data-icon="play"></span>
          <span>${views >= limit ? t("limit") : onCooldown ? t("cooldown") : t("watchEarn")}</span>
        </button>
        <div class="bp-usd-tag" style="text-align:center;margin-top:6px;">+${fmt(rewardBp)} BP · ${bpToUsd(rewardBp)}</div>
        <div class="ad-bonuses">
          ${adBonusBtn(key, 3, bonus3)}
          ${adBonusBtn(key, 6, bonus6)}
          ${adBonusBtn(key, 10, bonus10)}
        </div>
      </div>
    `;
  }).join("");

  hydrateIcons();
  el.querySelectorAll("[data-watch]").forEach(btn => {
    btn.addEventListener("click", () => watchAd(btn.dataset.watch));
  });
  el.querySelectorAll("[data-ad-bonus]").forEach(btn => {
    btn.addEventListener("click", () => claimAdBonus(
      btn.dataset.adProvider,
      Number(btn.dataset.adBonus),
      btn
    ));
  });
}

function adBonusBtn(provider, num, bonusData) {
  const claimed = bonusData?.claimed;
  const disabled = claimed ? "disabled" : "";
  const cls = claimed ? "ad-bonus done" : "ad-bonus";
  const reward = bonusData?.reward_bp || 0;
  const status = claimed ? t("completed") : t("claim");
  return `
    <button class="${cls}" data-ad-bonus="${num}" data-ad-provider="${provider}" ${disabled}>
      <div class="bn-title">${num} ${t("videos")}</div>
      <div class="bn-reward">+${fmt(reward)}</div>
      <div class="bn-usd">${bpToUsd(reward)}</div>
      <div class="bn-status">${status}</div>
    </button>
  `;
}

async function claimAdBonus(provider, num, btn) {
  setBtnLoading(btn);
  try {
    const data = await api(`/api/ads/${provider}/bonus/${num}/claim`, {
      method: "POST"
    });
    toast(`+${fmt(data.reward_bp)} BP`);
    await refreshMe();
    await loadAdProgress();
    // ✅ تحديث الزر نفسه بدون re-render كامل
    btn.classList.add("done");
    btn.disabled = true;
    const status = btn.querySelector(".bn-status");
    if (status) status.textContent = t("completed");
    // ✅ تحديث البطاقات
    updateAdCards();
  } catch (e) {
    toast(e.message);
    restoreBtn(btn);
  }
}

async function loadAdProgress() {
  const providers = Object.keys(AD_PROVIDERS);
  const results = await Promise.all(
    providers.map(p => api(`/api/ads/${p}/progress`).catch(() => null))
  );
  providers.forEach((p, i) => {
    if (results[i]) state.providerProgress[p] = results[i];
  });
}

async function claimDaily() {
  const btn = document.getElementById("dailyBtn");
  setBtnLoading(btn);
  try {
    await api("/api/daily-bonus/claim", { method: "POST" });
    const amount = state.me?.daily_bonus?.amount_bp || 200;
    toast(`+${fmt(amount)} BP`);
    state.dailyCountdown = 86400;
    await refreshMe();
    renderHome();
  } catch (e) {
    toast(e.message);
    restoreBtn(btn);
  }
}

/* =========================================================
   PROMO CODE
   ========================================================= */
async function claimPromo() {
  const input = document.getElementById("promoInput");
  const btn = document.getElementById("promoBtn");
  const code = (input?.value || "").trim().toUpperCase();
  if (!code) {
    toast(t("promoPlaceholder"));
    return;
  }
  setBtnLoading(btn);
  try {
    const data = await api("/api/promo/claim", {
      method: "POST",
      body: JSON.stringify({ code })
    });
    toast(`+${fmt(data.reward_bp)} BP`);
    if (input) input.value = "";
    await refreshMe();
    renderHome();
  } catch (e) {
    toast(e.message);
    restoreBtn(btn);
  }
}

/* =========================================================
   TASKS PAGE — صندوقان + بدون وميض
   ========================================================= */
function renderTasks() {
  const el = document.getElementById("page-tasks");
  const list = state.tasks || [];

  // ✅ أول مرة فقط: نبني الصفحة كاملة (مع adsgram-task)
  if (!state._adsgramTaskRendered) {
    el.innerHTML = `
      <div class="page-heading">
        <h2>${t("tasks")}</h2>
        <p id="tasksCount">${list.length} ${t("available")}</p>
      </div>

      <!-- ═══════════════════════════════════════
           صندوق 1: مهام البوت (فوق)
           ═══════════════════════════════════════ -->
      <div class="glass" style="padding:14px;border-radius:22px;">
        <div class="section-head" style="margin:0 0 10px 0;">
          <div class="section-title">🎯 ${t("botTasks")}</div>
        </div>
        <div class="task-list" id="botTaskList"></div>
      </div>

      <!-- ═══════════════════════════════════════
           فاصل: AdsGram Tasks
           ═══════════════════════════════════════ -->
      <div class="tasks-divider">
        <span>${t("adsgramTasks")}</span>
      </div>

      <!-- ═══════════════════════════════════════
           صندوق 2: مهام AdsGram (تحت)
           ═══════════════════════════════════════ -->
      <div class="adsgram-task-card">
        <div class="adsgram-task-title">
          <span class="icon" data-icon="tasks"></span>
          ${t("adsgramTasks")}
        </div>
        ${ADSGRAM_TASK_BLOCK_ID ? `
          <adsgram-task
            data-block-id="${ADSGRAM_TASK_BLOCK_ID}"
            class="adsgram-task-component"
          ></adsgram-task>
        ` : `
          <div class="empty">AdsGram Task Block ID غير مُهيّأ</div>
        `}
      </div>
    `;

    hydrateIcons();
    attachAdsgramTaskListeners();
    state._adsgramTaskRendered = true;
  } else {
    // ✅ فقط نحدّث عنوان الصفحة
    const titleEl = el.querySelector(".page-heading h2");
    if (titleEl) titleEl.textContent = t("tasks");
    const countEl = document.getElementById("tasksCount");
    if (countEl) countEl.textContent = `${list.length} ${t("available")}`;
  }

  // ✅ نحدّث قسم Bot Tasks فقط (بدون لمس adsgram-task)
  const botList = document.getElementById("botTaskList");
  if (botList) {
    botList.innerHTML = list.length
      ? list.map(taskCard).join("")
      : `<div class="empty">${t("noTasks")}</div>`;
  }

  hydrateIcons();
  attachTaskListeners();
}

function resetAdsgramTask() {
  state._adsgramTaskRendered = false;
}

function taskCard(x) {
  const done = x.completed;
  const started = x.started;
  const remaining = x.max_completions > 0
    ? Math.max(0, x.max_completions - x.completed_count)
    : null;
  const countdownEnd = state.taskCountdowns[x.id];
  const hasCountdown = countdownEnd && countdownEnd > Date.now();

  return `
    <div class="task-card glass">
      <div class="task-top">
        <div class="task-icon icon" data-icon="tasks"></div>
        <div class="task-info">
          <div class="task-title">${esc(x.title)}</div>
          <div class="task-desc">${esc(x.description || "")}</div>
        </div>
        <div class="reward-pill">
          +${fmt(x.reward_bp)} BP
          <div class="bp-usd-inline">${bpToUsd(x.reward_bp)}</div>
        </div>
      </div>
      <div class="task-bottom">
        ${done
          ? `<button class="btn ghost" disabled>${t("completed")}</button>`
          : started
            ? hasCountdown
              ? `<button class="btn verify-waiting" disabled>${t("cooldown")} ${Math.floor((countdownEnd - Date.now()) / 1000)}s</button>`
              : `<button class="btn primary" data-task-verify="${x.id}">${t("verify")}</button>`
            : `<button class="btn primary" data-task-start="${x.id}">${t("start")}</button>`}
        <div class="task-status">
          ${remaining === null ? "∞" : `${fmt(remaining)} ${t("remaining")}`}
        </div>
      </div>
      <div class="task-countdown" id="task-countdown-${x.id}"
           style="display:${hasCountdown ? "block" : "none"};">
        ${hasCountdown ? `${t("cooldown")}: ${Math.floor((countdownEnd - Date.now()) / 1000)}s` : ""}
      </div>
    </div>
  `;
}

function attachTaskListeners() {
  const el = document.getElementById("page-tasks");
  if (!el) return;
  el.querySelectorAll("[data-task-start]").forEach(b =>
    b.addEventListener("click", () => startTask(Number(b.dataset.taskStart), b))
  );
  el.querySelectorAll("[data-task-verify]").forEach(b =>
    b.addEventListener("click", () => verifyTask(Number(b.dataset.taskVerify), b))
  );
}

/* =========================================================
   ADSGRAM TASK — Event Listeners
   ========================================================= */
function attachAdsgramTaskListeners() {
  const el = document.querySelector("adsgram-task");
  if (!el) return;
  if (el.dataset._listenersAttached === "1") return;
  el.dataset._listenersAttached = "1";

  el.addEventListener("reward", (event) => {
    console.log("✅ AdsGram Task reward:", event.detail);
    toast(`+${fmt(state.providerProgress?.adsgram_task?.reward_bp || 30)} BP`);
    setTimeout(() => refreshMe(), 1500);
  });

  el.addEventListener("onError", (event) => {
    console.warn("❌ AdsGram Task error:", event.detail);
  });

  el.addEventListener("onBannerNotFound", (event) => {
    console.warn("⚠️ AdsGram Task: no banner:", event.detail);
  });

  el.addEventListener("onTooLongSession", () => {
    toast("الجلسة طويلة جداً. أعد فتح التطبيق.");
  });
}

/* =========================================================
   START / VERIFY TASK
   ========================================================= */
async function startTask(id, btn) {
  setBtnLoading(btn);
  try {
    const data = await api(`/api/tasks/${id}/start`, { method: "POST", body: "{}" });
    const task = state.tasks.find(x => x.id === id);
    if (task?.target_url) {
      try {
        TG?.openLink
          ? TG.openLink(task.target_url)
          : window.open(task.target_url, "_blank");
      } catch {}
    }
    await loadTasks();
    toast(data.message || t("start"));
    const wait = data.wait_seconds || 0;
    if (wait > 0) {
      state.taskCountdowns[id] = Date.now() + wait * 1000;
      startTicker();
      if (state.page === "tasks") renderTasks();
      setTimeout(() => loadTasks(), wait * 1000);
    }
  } catch (e) {
    const task = state.tasks.find(x => x.id === id);
    if (task?.target_url) {
      try {
        TG?.openLink
          ? TG.openLink(task.target_url)
          : window.open(task.target_url, "_blank");
      } catch {}
    }
    toast(e.message);
    restoreBtn(btn);
  }
}

async function verifyTask(id, btn) {
  setBtnLoading(btn);
  try {
    const data = await api(`/api/tasks/${id}/verify`, {
      method: "POST",
      body: JSON.stringify({ proof: "" })
    });
    delete state.taskCountdowns[id];
    await Promise.all([refreshMe(), loadTasks()]);
    toast(data.message || `+${fmt(data.reward_bp)} BP`);
  } catch (e) {
    toast(e.message);
    restoreBtn(btn);
  }
}

/* =========================================================
   REFERRALS PAGE
   ========================================================= */
function renderReferrals() {
  const r = state.referrals || {};
  document.getElementById("page-referrals").innerHTML = `
    <div class="page-heading">
      <h2>${t("referrals")}</h2>
      <p>${t("reward")}: ${fmt(r.referral_reward_bp)} BP</p>
    </div>
    <div class="ref-hero">
      <div class="section-title">${t("inviteTitle")}</div>
      <div class="hero-sub" style="margin-top:8px;">${t("conditionText", { n: fmt(r.required_videos) })}</div>
      <div class="ref-code">${esc(r.link || "—")}</div>
      <div class="ref-actions">
        <button class="btn primary" id="copyRef">
          <span class="icon" data-icon="copy"></span>${t("copy")}
        </button>
        <button class="btn ghost" id="shareRef">${t("share")}</button>
      </div>
    </div>
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">${t("accepted")}</div>
        <div class="stat-value">${fmt(r.accepted)}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">${t("pending")}</div>
        <div class="stat-value">${fmt(r.pending)}</div>
      </div>
    </div>
  `;
  hydrateIcons();
  document.getElementById("copyRef")?.addEventListener("click", copyReferral);
  document.getElementById("shareRef")?.addEventListener("click", shareReferral);
}

async function copyReferral() {
  const link = state.referrals?.link;
  if (!link) return;
  try { await navigator.clipboard.writeText(link); }
  catch {
    const ta = document.createElement("textarea");
    ta.value = link;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  toast(t("copied"));
}

function shareReferral() {
  const link = state.referrals?.link;
  if (!link) return;
  if (TG?.openTelegramLink) {
    TG.openTelegramLink(`https://t.me/share/url?url=${encodeURIComponent(link)}`);
  } else if (navigator.share) {
    navigator.share({ url: link });
  } else {
    copyReferral();
  }
}

/* =========================================================
   WITHDRAW PAGE
   ========================================================= */
function renderWithdraw() {
  const u = state.me.user, w = state.me.withdraw;
  const packages = [60, 300, 600, 1500, 3000];
  document.getElementById("page-withdraw").innerHTML = `
    <div class="page-heading">
      <h2>${t("withdrawTitle")}</h2>
      <p>${fmt(u.balance_bp)} BP · ${usdShort(u.balance_usd)}</p>
    </div>
    <div class="withdraw-card">
      <div class="withdraw-balance">
        <div class="big">${fmt(u.balance_bp)} BP</div>
        <div class="bp-usd-tag">${bpToUsd(u.balance_bp)}</div>
        <div class="small">${usdShort(u.balance_usd)}</div>
      </div>
      <div class="choice-grid">
        <button class="choice ${state.withdrawType === "cash" ? "active" : ""}" data-type="cash">
          <b>${t("cash")}</b><span>${t("cashSub")}</span>
        </button>
        <button class="choice ${state.withdrawType === "pubg_uc" ? "active" : ""}" data-type="pubg_uc">
          <b>${t("uc")}</b><span>${t("ucSub")}</span>
        </button>
      </div>
      ${state.withdrawType === "cash"
        ? `<div class="field">
            <label>${t("wallet")}</label>
            <input id="walletInput" class="input" value="${esc(state.wallet)}" placeholder="0x…">
          </div>`
        : `<div class="field">
            <label>${t("player")}</label>
            <input id="playerInput" class="input" value="${esc(state.player)}" inputmode="numeric" placeholder="123456789">
          </div>
          <div class="field">
            <label>${t("selectPackage")}</label>
            <div class="uc-grid">
              ${packages.map(x => `<button class="uc-option ${state.uc === x ? "active" : ""}" data-uc="${x}">${fmt(x)} UC</button>`).join("")}
            </div>
          </div>`}
      <div class="withdraw-summary">
        <div class="summary-row"><span>${t("minimum")}</span><strong>${fmt(w.minimum_bp)} BP</strong></div>
        <div class="summary-row"><span>${t("requiredInvites")}</span><strong>${fmt(w.required_referrals)}</strong></div>
        <div class="summary-row"><span>${t("bpCost")}</span><strong>${fmt(w.bp_per_usd)} BP = $1</strong></div>
        ${state.withdrawType === "pubg_uc"
          ? `<div class="summary-row">
              <span>${t("ucAmount")}</span>
              <strong>${fmt(state.uc)} UC = ${fmt(Math.ceil(state.uc / w.uc_per_usd * w.bp_per_usd))} BP</strong>
            </div>`
          : ""}
      </div>
      <button class="btn primary" id="withdrawSubmit" style="width:100%;margin-top:12px">${t("submit")}</button>
    </div>
    <div class="section-head" style="margin-top:18px">
      <div class="section-title">${t("history")}</div>
    </div>
    <div class="history">
      ${state.withdrawals.length
        ? state.withdrawals.map(withdrawalItem).join("")
        : `<div class="empty">${t("noHistory")}</div>`}
    </div>
  `;
  document.querySelectorAll("[data-type]").forEach(b =>
    b.addEventListener("click", () => { state.withdrawType = b.dataset.type; renderWithdraw(); })
  );
  document.querySelectorAll("[data-uc]").forEach(b =>
    b.addEventListener("click", () => { state.uc = Number(b.dataset.uc); renderWithdraw(); })
  );
  document.getElementById("walletInput")?.addEventListener("input", e => state.wallet = e.target.value);
  document.getElementById("playerInput")?.addEventListener("input", e => state.player = e.target.value);
  document.getElementById("withdrawSubmit")?.addEventListener("click", (e) => submitWithdraw(e.target));
}

function withdrawalItem(x) {
  const status = x.status === "pending" ? t("pendingStatus")
    : x.status === "approved" ? t("approved")
    : t("rejected");
  return `
    <div class="history-item glass">
      <div>
        <b>${x.withdraw_type === "cash" ? "USDT" : `${fmt(x.uc_amount)} UC`}</b>
        <div style="color:var(--text-muted);margin-top:4px">${fmt(x.amount_bp)} BP · ${usdShort(x.amount_usd)}</div>
      </div>
      <div class="status-${x.status}">${status}</div>
    </div>
  `;
}

async function submitWithdraw(btn) {
  const w = state.me.withdraw;
  if (state.me.user.balance_bp < w.minimum_bp) {
    toast(`${t("minimum")}: ${fmt(w.minimum_bp)} BP`); return;
  }
  if (state.referrals?.accepted < w.required_referrals) {
    toast(`${t("requiredInvites")}: ${fmt(w.required_referrals)}`); return;
  }
  const payload = { withdraw_type: state.withdrawType };
  if (state.withdrawType === "cash") {
    payload.wallet_address = state.wallet.trim();
    if (payload.wallet_address.length < 20) { toast(t("wallet")); return; }
  } else {
    payload.pubg_player_id = state.player.trim();
    if (!payload.pubg_player_id) { toast(t("player")); return; }
    const bp = Math.ceil(state.uc / w.uc_per_usd * w.bp_per_usd);
    if (bp > state.me.user.balance_bp) { toast(t("minimum")); return; }
  }
  setBtnLoading(btn);
  try {
    await api("/api/withdraw", { method: "POST", body: JSON.stringify(payload) });
    await Promise.all([refreshMe(), loadWithdrawals(), loadReferrals()]);
    toast(t("requested"));
  } catch (e) {
    toast(e.message);
    restoreBtn(btn);
  }
}

/* =========================================================
   COMPETITION PAGE
   ========================================================= */
function renderCompetition() {
  const c = state.competition;
  const el = document.getElementById("page-competition");
  if (!c) {
    el.innerHTML = `<div class="page-heading"><h2>${t("competitionTitle")}</h2><p>${t("competitionSub")}</p></div><div class="empty">...</div>`;
    return;
  }

  const winner = c.last_winner;
  const top = c.top || [];
  const me = c.me || { points: 0, rank: 1 };

  el.innerHTML = `
    <div class="page-heading">
      <h2>${t("competitionTitle")}</h2>
      <p>${t("competitionSub")} · ${fmt(c.prize_bp)} BP</p>
    </div>

    ${winner ? `
      <div class="competition-winner">
        <div class="comp-winner-title">🏆 ${t("weeklyWinner")}</div>
        <div class="comp-winner-body">
          <div class="comp-winner-avatar">${(winner.name || "W")[0].toUpperCase()}</div>
          <div class="comp-winner-info">
            <div class="comp-winner-name">${esc(winner.name || winner.username || winner.user_id)}</div>
            ${winner.username ? `<div class="comp-winner-username">@${esc(winner.username)}</div>` : ""}
            <div class="comp-winner-prize">${t("grandPrize")}: ${fmt(winner.prize_bp)} BP</div>
            <div class="comp-winner-week">${winner.week_start} → ${c.week_end}</div>
          </div>
        </div>
      </div>
    ` : ""}

    <div class="stats-grid" style="margin-bottom:12px">
      <div class="stat-card">
        <div class="stat-label">${t("yourRank")}</div>
        <div class="stat-value">#${fmt(me.rank)}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">${t("yourPoints")}</div>
        <div class="stat-value">${fmt(me.points)}</div>
      </div>
    </div>

    <div class="section-head">
      <div class="section-title">${t("topPlayers")}</div>
      <div class="section-note">${c.week_start} → ${c.week_end}</div>
    </div>
    <div class="competition-top">
      ${top.length ? top.map(row => compRow(row, me)).join("") : `<div class="empty">—</div>`}
    </div>
  `;
}

function compRow(row, me) {
  let rankCls = "comp-rank";
  if (row.rank === 1) rankCls += " gold";
  else if (row.rank === 2) rankCls += " silver";
  else if (row.rank === 3) rankCls += " bronze";
  const isMe = row.rank === me.rank;
  return `
    <div class="comp-row ${isMe ? "me" : ""}">
      <div class="${rankCls}">${row.rank}</div>
      <div class="comp-name">${esc(row.name || row.username || row.user_id)}</div>
      <div class="comp-points">${fmt(row.points)}</div>
    </div>
  `;
}

/* =========================================================
   PART 2 ENDS HERE — أرسل "التالي" للجزء 3
   ========================================================= */
/* =========================================================
   BUSH MINI APP — app.js (Part 3/3) — FINAL (No Flicker + Fixed Settings)
   ========================================================= */

/* =========================================================
   LANGUAGE
   ========================================================= */
function openLanguage() {
  const body = LANGS.map(l =>
    `<button class="choice ${l.code === state.lang ? "active" : ""}" data-lang="${l.code}" style="margin-bottom:8px;width:100%;text-align:left">
      <b>${l.name}</b><span>${l.code.toUpperCase()}</span>
    </button>`
  ).join("");
  openModal(`
    <div class="modal-head">
      <div class="modal-title">${t("language")}</div>
      <button class="close" data-close>${icon("close")}</button>
    </div>
    <div class="modal-section">${body}</div>
  `);
  document.querySelectorAll("[data-lang]").forEach(b =>
    b.addEventListener("click", () => changeLanguage(b.dataset.lang))
  );
}

async function changeLanguage(lang) {
  state.lang = lang;
  localStorage.setItem("bush_lang", lang);
  closeModal();
  applyLang();

  try {
    await api("/api/user/language", {
      method: "POST",
      body: JSON.stringify({ language: lang })
    });
  } catch (e) {
    console.warn("Language sync failed:", e);
  }
}

function applyLang() {
  // ✅ دعم RTL للعربية والفارسية
  const isRTL = state.lang === "ar" || state.lang === "fa";
  document.documentElement.lang = state.lang;
  document.documentElement.dir = isRTL ? "rtl" : "ltr";
  document.body.classList.toggle("rtl", isRTL);
  document.querySelectorAll("[data-i18n]").forEach(x => x.textContent = t(x.dataset.i18n));

  if (state.page === "home" && state.me) renderHome();
  if (state.page === "tasks") { resetAdsgramTask(); renderTasks(); }
  if (state.page === "referrals") renderReferrals();
  if (state.page === "withdraw" && state.me) renderWithdraw();
  if (state.page === "competition") renderCompetition();
  if (state.page === "admin") renderAdminPage();

  hydrateIcons();
}

/* =========================================================
   MODAL
   ========================================================= */
function openModal(content) {
  const root = document.getElementById("modalRoot");
  root.innerHTML = `<div class="modal-backdrop" data-backdrop><div class="modal">${content}</div></div>`;
  root.querySelector("[data-close]")?.addEventListener("click", closeModal);
  root.querySelector("[data-backdrop]")?.addEventListener("click", e => {
    if (e.target.dataset.backdrop !== undefined) closeModal();
  });
}
function closeModal() {
  document.getElementById("modalRoot").innerHTML = "";
}

/* =========================================================
   ADMIN PAGE
   ========================================================= */
async function openAdmin() {
  try {
    const [reports, settings, withdrawals, tasks] = await Promise.all([
      api("/api/admin/reports"),
      api("/api/admin/settings"),
      api("/api/admin/withdrawals"),
      api("/api/admin/tasks")
    ]);
    state.admin = true;
    state.adminReports = reports;
    state.adminSettings = settings.settings || [];
    state.adminWithdrawals = withdrawals.withdrawals || [];
    state.adminTasks = tasks.tasks || [];

    switchPage("admin");
  } catch (e) {
    toast(e.status === 401 || e.status === 403 ? "غير مصرح" : e.message);
  }
}

function renderAdminPage() {
  const el = document.getElementById("page-admin");
  if (!el) return;

  const r = state.adminReports || {};
  const pending = (state.adminWithdrawals || []).filter(x => x.status === "pending");
  const tasks = state.adminTasks || [];
  const settingsMap = Object.fromEntries((state.adminSettings || []).map(x => [x.key, x.value]));

  const statsPanel = `
    <div class="admin-grid">
      <div class="admin-card"><div class="stat-label">${t("users")}</div><div class="stat-value">${fmt(r.users?.total)}</div></div>
      <div class="admin-card"><div class="stat-label">${t("activeToday")}</div><div class="stat-value">${fmt(r.users?.active_today)}</div></div>
      <div class="admin-card"><div class="stat-label">${t("newToday")}</div><div class="stat-value">${fmt(r.users?.new_today)}</div></div>
      <div class="admin-card"><div class="stat-label">${t("newWeek")}</div><div class="stat-value">${fmt(r.users?.new_week)}</div></div>
      <div class="admin-card"><div class="stat-label">${t("newMonth")}</div><div class="stat-value">${fmt(r.users?.new_month)}</div></div>
      <div class="admin-card"><div class="stat-label">${t("videoViews")}</div><div class="stat-value">${fmt(r.videos?.total_views)}</div></div>
    </div>
  `;

  const taskPanel = `
    <div class="section-head" style="margin-top:0">
      <div class="section-title">${t("taskMgmt")}</div>
      <button class="btn primary" id="newTaskBtn" style="min-height:32px;font-size:10px">
        ${t("addTask")}
      </button>
    </div>
    <div>
      ${tasks.length ? tasks.map(adminTaskCard).join("") : `<div class="empty">${t("noTasks")}</div>`}
    </div>
  `;

  const settingsKeys = [
    "daily_bonus_bp", "referral_reward_bp", "referral_required_videos",
    "withdraw_min_bp", "withdraw_min_referrals", "bp_per_usd", "uc_per_usd",
    "promo_code_reward_bp", "promo_code_chat_id", "payments_channel_id",
    "competition_prize_bp",
    "adsgram_reward_bp", "adsgram_daily_limit",
    "adsgram_bonus_3_bp", "adsgram_bonus_6_bp", "adsgram_bonus_10_bp",
    "adsgram_task_reward_bp", "adsgram_task_daily_limit",
    "adsgram_task_bonus_3_bp", "adsgram_task_bonus_6_bp", "adsgram_task_bonus_10_bp",
    "onclicka_reward_bp", "onclicka_daily_limit",
    "onclicka_bonus_3_bp", "onclicka_bonus_6_bp", "onclicka_bonus_10_bp",
    "onclicka_spot_id",
    "richads_rewarded_reward_bp", "richads_rewarded_daily_limit",
    "richads_rewarded_bonus_3_bp", "richads_rewarded_bonus_6_bp", "richads_rewarded_bonus_10_bp",
    "richads_interstitial_reward_bp", "richads_interstitial_daily_limit",
    "richads_interstitial_bonus_3_bp", "richads_interstitial_bonus_6_bp", "richads_interstitial_bonus_10_bp",
    "richads_publisher_id", "richads_promotional_enabled", "richads_promo_bid_floor",
    "ad_cooldown_seconds", "ad_session_ttl_seconds", "initdata_ttl_seconds",
    "rate_limit_max_requests", "rate_limit_window_seconds",
    "fraud_warning_threshold", "fraud_temp_block_days", "fraud_permanent_block_threshold",
    "reminder_1_utc", "reminder_2_utc", "reminder_3_utc", "reminder_4_utc"
  ];
  const settingsRows = settingsKeys.map(k =>
    `<div class="setting-row">
      <label>${SETTING_LABELS[k] || k}</label>
      <input class="input" data-setting="${k}" value="${esc(settingsMap[k] ?? "")}">
    </div>`
  ).join("");
  const settingsPanel = `
    <div class="section-title" style="margin-bottom:10px">${t("settingsTab")}</div>
    ${settingsRows}
    <button class="btn primary" id="saveSettings" style="width:100%;margin-top:10px">
      ${t("save")}
    </button>
  `;

  const withdrawPanel = `
    <div class="section-title" style="margin-bottom:10px">
      ${t("withdrawalsTab")} (${pending.length})
    </div>
    <div class="withdraw-admin">
      ${pending.length ? pending.map(adminWithdrawal).join("") : `<div class="empty">${t("noHistory")}</div>`}
    </div>
  `;

  el.innerHTML = `
    <div class="admin-page-header">
      <button class="admin-back-btn" id="adminBackBtn" aria-label="${t("back")}">
        <span class="icon" data-icon="arrow"></span>
      </button>
      <div>
        <div class="page-heading" style="padding:0">
          <h2 style="font-size:20px;">${t("adminPanel")}</h2>
        </div>
      </div>
    </div>
    <div class="admin-tabs">
      <button class="admin-tab active" data-tab="stats">${t("stats")}</button>
      <button class="admin-tab" data-tab="tasks">${t("taskMgmt")}</button>
      <button class="admin-tab" data-tab="settings">${t("settingsTab")}</button>
      <button class="admin-tab" data-tab="withdrawals">${t("withdrawalsTab")} (${pending.length})</button>
    </div>
    <div class="admin-panel active" data-panel="stats">${statsPanel}</div>
    <div class="admin-panel" data-panel="tasks">${taskPanel}</div>
    <div class="admin-panel" data-panel="settings">${settingsPanel}</div>
    <div class="admin-panel" data-panel="withdrawals">${withdrawPanel}</div>
  `;

  hydrateIcons();

  document.getElementById("adminBackBtn")?.addEventListener("click", () => {
    switchPage("home");
  });

  document.querySelectorAll(".admin-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".admin-tab").forEach(x => x.classList.remove("active"));
      document.querySelectorAll(".admin-panel").forEach(x => x.classList.remove("active"));
      tab.classList.add("active");
      document.querySelector(`[data-panel="${tab.dataset.tab}"]`)?.classList.add("active");
    });
  });

  document.getElementById("saveSettings")?.addEventListener("click", saveAdminSettings);
  document.getElementById("newTaskBtn")?.addEventListener("click", () => openTaskEditor());
  document.querySelectorAll("[data-task-edit]").forEach(b =>
    b.addEventListener("click", () => openTaskEditor(Number(b.dataset.taskEdit)))
  );
  document.querySelectorAll("[data-task-status]").forEach(b =>
    b.addEventListener("click", () => toggleAdminTask(Number(b.dataset.taskStatus), b.dataset.active === "true"))
  );
  document.querySelectorAll("[data-task-delete]").forEach(b =>
    b.addEventListener("click", () => deleteAdminTask(Number(b.dataset.taskDelete)))
  );
  document.querySelectorAll("[data-task-stats]").forEach(b =>
    b.addEventListener("click", () => showTaskStats(Number(b.dataset.taskStats)))
  );
  document.querySelectorAll("[data-approve]").forEach(b =>
    b.addEventListener("click", () => approveWithdrawal(Number(b.dataset.approve)))
  );
  document.querySelectorAll("[data-reject]").forEach(b =>
    b.addEventListener("click", () => rejectWithdrawal(Number(b.dataset.reject)))
  );
}

function adminTaskCard(x) {
  return `
    <div class="admin-task">
      <div class="admin-task-head">
        <div class="admin-task-title">${esc(x.title)}</div>
        <div class="reward-pill">+${fmt(x.reward_bp)} BP</div>
      </div>
      <div class="admin-task-meta">
        ${x.is_active ? "● نشط" : "○ متوقف"} ·
        ${x.completed_by_users || 0}/${x.max_completions || "∞"} مكتمل ·
        تم التحقق ${x.verified_by_users || 0}<br>
        النوع: ${esc(x.task_type || "join")}
      </div>
      <div class="admin-actions">
        <button class="btn ghost" data-task-edit="${x.id}">تعديل</button>
        <button class="btn ghost" data-task-status="${x.id}" data-active="${x.is_active}">
          ${x.is_active ? "إيقاف" : "تشغيل"}
        </button>
        <button class="btn ghost" data-task-stats="${x.id}">إحصائيات</button>
      </div>
      <button class="btn danger" data-task-delete="${x.id}" style="width:100%;margin-top:6px">
        حذف نهائي
      </button>
    </div>
  `;
}

/* =========================================================
   TASK EDITOR
   ========================================================= */
function taskEditorHtml(x = {}) {
  const isEdit = !!x.id;
  return `
    <div class="modal-head">
      <div class="modal-title">${isEdit ? "تعديل مهمة" : "إضافة مهمة"}</div>
      <button class="close" data-close>${icon("close")}</button>
    </div>
    <div class="field"><label>${t("title")}</label><input class="input" id="etTitle" value="${esc(x.title || "")}"></div>
    <div class="field"><label>${t("description")}</label><input class="input" id="etDesc" value="${esc(x.description || "")}"></div>
    <div class="admin-grid">
      <div class="field"><label>${t("rewardBp")}</label><input class="input" id="etReward" type="number" min="0" value="${Number(x.reward_bp || 100)}"></div>
      <div class="field"><label>${t("maxUsers")}</label><input class="input" id="etMax" type="number" min="0" value="${Number(x.max_completions || 0)}"></div>
    </div>
    <div class="field"><label>${t("taskType")}</label>
      <select class="input" id="etType">
        <option value="telegram_channel">قناة تيليجرام</option>
        <option value="telegram_group">مجموعة تيليجرام</option>
        <option value="telegram_bot">بوت تيليجرام</option>
        <option value="telegram_mini_app">ميني آب تيليجرام</option>
        <option value="external">رابط خارجي</option>
        <option value="join">انضمام (قديم)</option>
      </select>
    </div>
    <div class="field"><label>${t("targetUrl")}</label><input class="input" id="etUrl" value="${esc(x.target_url || "")}"></div>
    <div class="field" id="chatIdField" style="display:none;">
      <label style="display:flex;align-items:center;justify-content:space-between;">
        <span>${t("chatId")}</span>
        <button type="button" class="help-btn" id="chatIdHelpBtn" title="${t("help")}">?</button>
      </label>
      <input class="input" id="etChat" value="${esc(x.telegram_chat_id || "")}" placeholder="-100...">
    </div>
    <button class="btn primary" id="saveTask" style="width:100%;margin-top:12px">${t("save")}</button>
  `;
}

function openTaskEditor(id = null) {
  const x = id ? (state.adminTasks || []).find(t => t.id === id) : null;
  openModal(taskEditorHtml(x || {}));

  const typeSelect = document.getElementById("etType");
  const chatField = document.getElementById("chatIdField");

  const updateChatVisibility = () => {
    const isMembership = typeSelect.value === "telegram_channel" || typeSelect.value === "telegram_group";
    chatField.style.display = isMembership ? "block" : "none";
  };

  if (x) {
    typeSelect.value = x.task_type || "join";
  }
  updateChatVisibility();
  typeSelect.addEventListener("change", updateChatVisibility);

  document.getElementById("chatIdHelpBtn")?.addEventListener("click", () => {
    alert(t("chatIdHelp"));
  });

  document.getElementById("saveTask")?.addEventListener("click", (e) => saveTaskEditor(id, e.target));
}

async function saveTaskEditor(id, btn) {
  const p = {
    title: document.getElementById("etTitle").value.trim(),
    description: document.getElementById("etDesc").value.trim(),
    reward_bp: Number(document.getElementById("etReward").value || 0),
    max_completions: Number(document.getElementById("etMax").value || 0),
    task_type: document.getElementById("etType").value,
    target_url: document.getElementById("etUrl").value.trim()
  };
  const chatField = document.getElementById("chatIdField");
  if (chatField && chatField.style.display !== "none") {
    const chat = document.getElementById("etChat").value.trim();
    if (chat) p.telegram_chat_id = Number(chat);
  }
  if (!p.title) { toast(t("title")); return; }

  setBtnLoading(btn);
  try {
    await api(id ? `/api/admin/tasks/${id}` : "/api/admin/tasks", {
      method: id ? "PUT" : "POST",
      body: JSON.stringify(p)
    });
    toast(t("saved"));
    closeModal();
    const tasks = await api("/api/admin/tasks");
    state.adminTasks = tasks.tasks || [];
    renderAdminPage();
    loadTasks();
  } catch (e) {
    toast(e.message);
    restoreBtn(btn);
  }
}

async function toggleAdminTask(id, active) {
  try {
    await api(`/api/admin/tasks/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ is_active: !active })
    });
    const tasks = await api("/api/admin/tasks");
    state.adminTasks = tasks.tasks || [];
    renderAdminPage();
  } catch (e) { toast(e.message); }
}

async function deleteAdminTask(id) {
  if (!confirm("حذف هذه المهمة نهائياً؟")) return;
  try {
    await api(`/api/admin/tasks/${id}`, { method: "DELETE" });
    toast("تم الحذف");
    const tasks = await api("/api/admin/tasks");
    state.adminTasks = tasks.tasks || [];
    renderAdminPage();
    await loadTasks();
  } catch (e) { toast(e.message); }
}

async function showTaskStats(id) {
  try {
    const s = await api(`/api/admin/tasks/${id}/stats`);
    openModal(`
      <div class="modal-head">
        <div class="modal-title">إحصائيات المهمة</div>
        <button class="close" data-close>${icon("close")}</button>
      </div>
      <div class="admin-grid">
        <div class="admin-card"><div class="stat-label">بدأ</div><div class="stat-value">${fmt(s.stats.started)}</div></div>
        <div class="admin-card"><div class="stat-label">فتح</div><div class="stat-value">${fmt(s.stats.opened)}</div></div>
        <div class="admin-card"><div class="stat-label">تحقق</div><div class="stat-value">${fmt(s.stats.verified)}</div></div>
        <div class="admin-card"><div class="stat-label">حصل على مكافأة</div><div class="stat-value">${fmt(s.stats.rewarded)}</div></div>
      </div>
    `);
  } catch (e) { toast(e.message); }
}

function adminWithdrawal(x) {
  const who = [x.first_name, x.last_name].filter(Boolean).join(" ") || x.username || x.user_id;
  return `
    <div class="admin-withdraw">
      <div><b>#${x.id} · ${esc(who)}</b></div>
      <div class="meta">
        ID: ${x.user_id}<br>
        النوع: ${x.withdraw_type}<br>
        BP: ${fmt(x.amount_bp)} · USD: ${usdShort(x.amount_usd)}<br>
        ${x.withdraw_type === "cash"
          ? `المحفظة: <code>${esc(x.wallet_address || "")}</code><br>الشبكة: ${esc(x.network || "USDT BEP20")}`
          : `Player ID: <code>${esc(x.pubg_player_id || "")}</code><br>UC: ${fmt(x.uc_amount)}`}
      </div>
      <div class="actions">
        <button class="btn primary" data-approve="${x.id}">موافقة</button>
        <button class="btn danger" data-reject="${x.id}">رفض</button>
      </div>
    </div>
  `;
}

/* =========================================================
   ✅ SAVE ADMIN SETTINGS — محدّث: يرسل فقط اللي تغير + متسلسل
   ========================================================= */
async function saveAdminSettings(e) {
  const btn = e?.target;
  const rows = [...document.querySelectorAll("[data-setting]")];
  setBtnLoading(btn);

  // ✅ نبني map للإعدادات الأصلية للمقارنة
  const originalMap = Object.fromEntries(
    (state.adminSettings || []).map(s => [s.key, s.value])
  );

  // ✅ نحفظ فقط القيم اللي تغيرت
  const toSave = rows.filter(input => {
    const key = input.dataset.setting;
    const newVal = input.value;
    const oldVal = originalMap[key] ?? "";
    return String(newVal) !== String(oldVal);
  });

  if (toSave.length === 0) {
    toast(t("saved"));
    restoreBtn(btn);
    return;
  }

  let successCount = 0;
  let lastError = null;

  // ✅ حفظ متسلسل (طلب ورا طلب) مع تأخير بسيط
  for (const input of toSave) {
    try {
      await api("/api/admin/settings", {
        method: "POST",
        body: JSON.stringify({
          key: input.dataset.setting,
          value: input.value
        })
      });
      successCount++;
      // ✅ تأخير 80ms بين الطلبات لتفادي Rate Limit
      await new Promise(r => setTimeout(r, 80));
    } catch (err) {
      lastError = err;
      console.warn(`❌ فشل حفظ ${input.dataset.setting}:`, err.message);
    }
  }

  if (successCount === toSave.length) {
    toast(`${t("saved")} (${successCount})`);
  } else if (successCount > 0) {
    toast(`تم حفظ ${successCount}/${toSave.length} — بعض الإعدادات فشلت`);
  } else {
    toast(lastError?.message || t("error"));
  }

  // ✅ نحدّث البيانات المحلية
  try {
    await loadSettings();
    const settings = await api("/api/admin/settings");
    state.adminSettings = settings.settings || [];
  } catch (err) {
    console.warn("Failed to reload settings:", err);
  }

  restoreBtn(btn);
}

/* =========================================================
   WITHDRAW APPROVE / REJECT — مع tx_hash modal
   ========================================================= */
async function approveWithdrawal(id) {
  openModal(`
    <div class="modal-head">
      <div class="modal-title">رقم الإثبات (TX Hash / Order ID)</div>
      <button class="close" data-close>${icon("close")}</button>
    </div>
    <div class="field">
      <label>للـ Cash: TX Hash (0x...) — للـ UC: Order ID</label>
      <input class="input" id="txHashInput" placeholder="0x... أو UC-..." autocomplete="off">
    </div>
    <div style="display:flex;gap:8px;margin-top:12px;">
      <button class="btn primary" id="txConfirmBtn" style="flex:1">تأكيد الموافقة</button>
      <button class="btn ghost" id="txSkipBtn" style="flex:0 0 auto">تخطي</button>
    </div>
  `);

  const send = async (txHash) => {
    const btn = document.getElementById("txConfirmBtn");
    setBtnLoading(btn);
    try {
      await api(`/api/admin/withdrawals/${id}/approve`, {
        method: "POST",
        body: JSON.stringify({ tx_hash: txHash })
      });
      toast(t("approved"));
      closeModal();
      const withdrawals = await api("/api/admin/withdrawals");
      state.adminWithdrawals = withdrawals.withdrawals || [];
      renderAdminPage();
    } catch (e) {
      toast(e.message);
      restoreBtn(btn);
    }
  };

  document.getElementById("txConfirmBtn")?.addEventListener("click", () => {
    const val = (document.getElementById("txHashInput").value || "").trim() || "Unknown";
    send(val);
  });
  document.getElementById("txSkipBtn")?.addEventListener("click", () => {
    send("Unknown");
  });
}

async function rejectWithdrawal(id) {
  openModal(`
    <div class="modal-head">
      <div class="modal-title">${t("reason")}</div>
      <button class="close" data-close>${icon("close")}</button>
    </div>
    <div class="field">
      <textarea id="rejectReason" class="input" rows="5"></textarea>
    </div>
    <button class="btn danger" id="sendReject" style="width:100%;margin-top:10px">${t("send")}</button>
  `);
  document.getElementById("sendReject")?.addEventListener("click", async (e) => {
    setBtnLoading(e.target);
    try {
      await api(`/api/admin/withdrawals/${id}/reject`, {
        method: "POST",
        body: JSON.stringify({ reason: document.getElementById("rejectReason").value })
      });
      toast(t("rejected"));
      closeModal();
      const withdrawals = await api("/api/admin/withdrawals");
      state.adminWithdrawals = withdrawals.withdrawals || [];
      renderAdminPage();
    } catch (e2) {
      toast(e2.message);
      restoreBtn(e.target);
    }
  });
}

/* =========================================================
   NAVIGATION
   ========================================================= */
function switchPage(page) {
  if (state.page === page) return;

  state.page = page;
  document.querySelectorAll(".page").forEach(x =>
    x.classList.toggle("active", x.id === `page-${page}`)
  );
  document.querySelectorAll(".nav-item").forEach(x =>
    x.classList.toggle("active", x.dataset.page === page)
  );

  if (page === "admin" && state.admin) {
    renderAdminPage();
    return;
  }

  if (page === "home" && state.me) renderHome();
  if (page === "tasks" && state.tasks.length) renderTasks();
  if (page === "referrals" && state.referrals) renderReferrals();
  if (page === "withdraw" && state.me) renderWithdraw();
  if (page === "competition" && state.competition) renderCompetition();

  if (page === "tasks") loadTasks();
  if (page === "referrals") loadReferrals();
  if (page === "withdraw") { loadReferrals(); loadWithdrawals(); }
  if (page === "competition") loadCompetition();

  state.lastInteraction = Date.now();
}

/* =========================================================
   DATA LOADERS
   ========================================================= */
async function loadTasks() {
  try {
    const d = await api("/api/tasks");
    state.tasks = d.tasks || [];
    if (state.page === "tasks") renderTasks();
  } catch (e) { console.warn("loadTasks:", e); }
}
async function loadReferrals() {
  try {
    state.referrals = await api("/api/referrals");
    if (state.page === "referrals") renderReferrals();
  } catch (e) { console.warn("loadReferrals:", e); }
}
async function loadWithdrawals() {
  try {
    state.withdrawals = (await api("/api/withdrawals")).withdrawals || [];
    if (state.page === "withdraw") renderWithdraw();
  } catch (e) { console.warn("loadWithdrawals:", e); }
}
async function loadCompetition() {
  try {
    state.competition = await api("/api/competition");
    if (state.page === "competition") renderCompetition();
  } catch (e) { console.warn("loadCompetition:", e); }
}
async function loadSettings() {
  try {
    const d = await api("/api/settings");
    state.settings = d.settings || {};
    if (state.settings.bp_per_usd) {
      state.bpPerUsd = Number(state.settings.bp_per_usd) || 10000;
    }
  } catch (e) { console.warn("loadSettings:", e); }
}

/* =========================================================
   REFRESH ME — بدون وميض
   ========================================================= */
async function refreshMe() {
  try {
    state.me = await api("/api/me");
    if (state.me?.conversion?.bp_per_usd) {
      state.bpPerUsd = Number(state.me.conversion.bp_per_usd) || 10000;
    }
    // ✅ تحديث النصوص فقط — بدون re-render
    setProfile();
    updateBalanceUI();
  } catch (e) { console.warn("refreshMe:", e); }
}

/* =========================================================
   BOOT
   ========================================================= */
async function boot() {
  if (TG) {
    TG.ready();
    TG.expand();
    try {
      TG.setHeaderColor("#050510");
      TG.setBackgroundColor("#050510");
    } catch {}
  }
  if (!initData()) {
    document.getElementById("loading").innerHTML = `
      <div class="loading-bg"></div>
      <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;z-index:3;">
        <div style="font-size:16px;font-weight:900;color:#00D4FF;">BUSH</div>
        <div style="font-size:10px;color:#A0A0A0;margin-top:8px;">${t("notTelegram")}</div>
      </div>`;
    return;
  }

  try {
    const saved = localStorage.getItem("bush_lang");
    if (saved && LANGS.some(x => x.code === saved)) state.lang = saved;

    state.me = await api("/api/me");
    state.lang = state.me.user.language || state.lang;
    if (state.me?.conversion?.bp_per_usd) {
      state.bpPerUsd = Number(state.me.conversion.bp_per_usd) || 10000;
    }

    setProfile();
    applyLang();

    document.getElementById("loading").classList.add("hide");

    document.querySelectorAll(".nav-item").forEach(b =>
      b.addEventListener("click", () => switchPage(b.dataset.page))
    );
    document.getElementById("bpOrbBtn")?.addEventListener("click", () => switchPage("home"));

    document.getElementById("adminOpen").addEventListener("click", openAdmin);
    try {
      await api("/api/admin/reports");
      document.getElementById("adminBar").classList.remove("hidden");
    } catch {
      document.getElementById("adminBar").classList.add("hidden");
    }

    Promise.allSettled([
      loadSettings(),
      loadTasks(),
      loadReferrals(),
      loadWithdrawals(),
      loadCompetition(),
      loadAdProgress()
    ]).then(() => {
      if (state.page === "home") renderHome();
      if (state.page === "competition") renderCompetition();
    });

    initRichAds();
    initOnClickA();
    initAdsGram();

    startTicker();

    // ✅ تحديث الرصيد كل 30 ثانية بدون وميض
    setInterval(() => refreshMe(), 30000);
    // ✅ تحديث بطاقات الإعلانات كل 60 ثانية بدون وميض
    setInterval(() => loadAdProgress().then(() => {
      if (state.page === "home") updateAdCards();
    }), 60000);
  } catch (e) {
    // ✅ معالجة الحظر المؤقت
    if (e.status === 403) {
      const msg = e.message || "";
      const isTempBlock = msg.includes("blocked until") || msg.includes("temporarily");
      document.getElementById("loading").innerHTML = `
        <div class="loading-bg"></div>
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;padding:20px;z-index:3;max-width:340px;">
          <div style="font-size:32px;margin-bottom:12px;">${isTempBlock ? "⏳" : "⛔"}</div>
          <div style="font-size:16px;font-weight:900;color:#FF6B7A;">${isTempBlock ? "حسابك محظور مؤقتاً" : "حسابك محظور"}</div>
          <div style="font-size:11px;color:#A0A0A0;margin-top:12px;line-height:1.6;">${esc(msg)}</div>
        </div>`;
      return;
    }
    document.getElementById("loading").innerHTML = `
      <div class="loading-bg"></div>
      <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;padding:20px;z-index:3;">
        <div style="font-size:16px;font-weight:900;color:#00D4FF;">BUSH</div>
        <div style="font-size:10px;color:#FF6B7A;margin-top:8px;">${esc(e.message || t("error"))}</div>
      </div>`;
  }
}

/* =========================================================
   LAUNCH
   ========================================================= */
boot();