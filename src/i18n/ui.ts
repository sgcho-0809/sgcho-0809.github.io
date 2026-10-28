export const languages = {
	en: 'English',
	ko: '한국어',
	ja: '日本語',
	zh: '中文',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

/** Top-level pages, in menu order. Each lives at /<slug>/ and /<lang>/<slug>/. */
export const pages = ['about', 'research', 'projects', 'publications'] as const;

export type Page = (typeof pages)[number];

export const ui = {
	en: {
		'site.title': 'Sang-Gyu Cho | Portfolio',
		'site.description':
			'Sang-Gyu Cho — M.S. student at Hanyang University researching smart manufacturing simulation, digital twins, and collaborative intelligence for heterogeneous robots.',
		'nav.about': 'About',
		'nav.research': 'Research',
		'nav.projects': 'Projects',
		'nav.publications': 'Publications',
		'lang.label': 'Language',
		'theme.toggle': 'Toggle light/dark mode',
		'hero.name': 'Sang-Gyu Cho',
		'hero.role': 'M.S. Student, Industrial & Management Engineering, Hanyang University',
		'hero.affiliation': 'Hanyang University · Next Simulation Lab',
		'hero.identity': 'Smart Manufacturing Simulation & Digital Twin',
		'hero.cta.projects': 'View projects',
		'hero.cta.contact': 'Email me',
		'hero.intro':
			'I model manufacturing and logistics systems with DEVS, Unity, and Isaac Sim, focusing on virtual operational validation and collaborative robot operation.',
		'profile.bio': 'Simulation, digital twins, and collaborative intelligence for heterogeneous robots.',
		'profile.location': 'Seoul, Korea',
		'profile.email': 'Email',
		'profile.github': 'GitHub',
		'profile.lab': 'Next Simulation Lab',
		'section.about': 'About',
		'section.research': 'Research Interests',
		'section.projects': 'Projects',
		'section.publications': 'Publications & Presentations',
		'section.awards': 'Awards',
		'section.skills': 'Skills',
		'summary.about': 'Background, education, awards, and skills.',
		'summary.research': 'Digital twins, manufacturing simulation, and multi-robot collaboration.',
		'summary.projects': 'Industry and government R&D projects with LG Electronics, KITECH, and KEIT.',
		'summary.publications': 'Journal papers and conference presentations.',
		'common.comingSoon': 'Content coming soon.',
	},
	ko: {
		'site.title': '조상규 | 포트폴리오',
		'site.description':
			'조상규 — 한양대학교 산업경영공학과 석사과정. 스마트 제조 시뮬레이션, 디지털 트윈, 이기종 로봇 협업 지능을 연구합니다.',
		'nav.about': '소개',
		'nav.research': '연구',
		'nav.projects': '프로젝트',
		'nav.publications': '논문',
		'lang.label': '언어',
		'theme.toggle': '라이트/다크 모드 전환',
		'hero.name': '조상규',
		'hero.role': '한양대학교 산업경영공학과 석사과정',
		'hero.affiliation': '한양대학교 · 차세대시뮬레이션연구실',
		'hero.identity': '스마트 제조 시뮬레이션 & 디지털 트윈',
		'hero.cta.projects': '프로젝트 보기',
		'hero.cta.contact': '이메일 보내기',
		'hero.intro':
			'DEVS, Unity, Isaac Sim으로 제조·물류 시스템을 모델링하고, 가상 운영 검증과 이기종 로봇 협업 운영을 연구합니다.',
		'profile.bio': '시뮬레이션, 디지털 트윈, 이기종 로봇 협업 지능',
		'profile.location': '서울, 대한민국',
		'profile.email': '이메일',
		'profile.github': 'GitHub',
		'profile.lab': '차세대시뮬레이션연구실',
		'section.about': '소개',
		'section.research': '연구 분야',
		'section.projects': '프로젝트',
		'section.publications': '논문 및 발표',
		'section.awards': '수상',
		'section.skills': '기술',
		'summary.about': '학력, 경력, 수상, 보유 기술',
		'summary.research': '디지털 트윈, 제조 시뮬레이션, 이기종 로봇 협업',
		'summary.projects': 'LG전자 · KITECH · KEIT 산학 및 국가 R&D 과제',
		'summary.publications': '학술지 논문과 학회 발표',
		'common.comingSoon': '내용 준비 중입니다.',
	},
	ja: {
		'site.title': 'チョ・サンギュ | ポートフォリオ',
		'site.description':
			'チョ・サンギュ — 漢陽大学校 産業経営工学科 修士課程。スマート製造シミュレーション、デジタルツイン、異種ロボットの協調知能を研究しています。',
		'nav.about': 'プロフィール',
		'nav.research': '研究',
		'nav.projects': 'プロジェクト',
		'nav.publications': '業績',
		'lang.label': '言語',
		'theme.toggle': 'ライト/ダークモード切替',
		'hero.name': 'チョ・サンギュ',
		'hero.role': '漢陽大学校 産業経営工学科 修士課程',
		'hero.affiliation': '漢陽大学校 · Next Simulation Lab',
		'hero.identity': 'スマート製造シミュレーション & デジタルツイン',
		'hero.cta.projects': 'プロジェクトを見る',
		'hero.cta.contact': 'メールを送る',
		'hero.intro':
			'DEVS、Unity、Isaac Simを用いて製造・物流システムをモデル化し、仮想運用検証と異種ロボットの協調運用を研究しています。',
		'profile.bio': 'シミュレーション、デジタルツイン、異種ロボットの協調知能',
		'profile.location': 'ソウル、韓国',
		'profile.email': 'メール',
		'profile.github': 'GitHub',
		'profile.lab': 'Next Simulation Lab',
		'section.about': 'プロフィール',
		'section.research': '研究分野',
		'section.projects': 'プロジェクト',
		'section.publications': '論文・発表',
		'section.awards': '受賞',
		'section.skills': 'スキル',
		'summary.about': '学歴、経歴、受賞、スキル',
		'summary.research': 'デジタルツイン、製造シミュレーション、異種ロボット協調',
		'summary.projects': 'LGエレクトロニクス・KITECH・KEITとの産学連携および国家R&D課題',
		'summary.publications': '学術論文と学会発表',
		'common.comingSoon': '準備中です。',
	},
	zh: {
		'site.title': 'Sang-Gyu Cho | 作品集',
		'site.description':
			'Sang-Gyu Cho — 汉阳大学产业经营工学专业硕士研究生，研究智能制造仿真、数字孪生与异构机器人协同智能。',
		'nav.about': '简介',
		'nav.research': '研究',
		'nav.projects': '项目',
		'nav.publications': '论文',
		'lang.label': '语言',
		'theme.toggle': '切换浅色/深色模式',
		'hero.name': 'Sang-Gyu Cho',
		'hero.role': '汉阳大学 产业经营工学 硕士研究生',
		'hero.affiliation': '汉阳大学 · Next Simulation Lab',
		'hero.identity': '智能制造仿真 & 数字孪生',
		'hero.cta.projects': '查看项目',
		'hero.cta.contact': '发送邮件',
		'hero.intro':
			'我使用 DEVS、Unity 和 Isaac Sim 对制造与物流系统进行建模，专注于虚拟运营验证与异构机器人协同运营。',
		'profile.bio': '仿真、数字孪生、异构机器人协同智能',
		'profile.location': '韩国首尔',
		'profile.email': '邮箱',
		'profile.github': 'GitHub',
		'profile.lab': 'Next Simulation Lab',
		'section.about': '简介',
		'section.research': '研究方向',
		'section.projects': '项目',
		'section.publications': '论文与学术报告',
		'section.awards': '获奖',
		'section.skills': '技能',
		'summary.about': '教育背景、经历、获奖与技能',
		'summary.research': '数字孪生、制造仿真、异构机器人协同',
		'summary.projects': '与 LG电子、KITECH、KEIT 合作的产学及国家研发项目',
		'summary.publications': '期刊论文与学术会议报告',
		'common.comingSoon': '内容即将上线。',
	},
} as const;

export type UiKey = keyof (typeof ui)[typeof defaultLang];

export function useTranslations(lang: Lang) {
	return (key: UiKey) => ui[lang][key] ?? ui[defaultLang][key];
}

export function pageTitleKey(page: Page): UiKey {
	return `section.${page}`;
}

export function toLang(locale: string | undefined): Lang {
	return locale && locale in languages ? (locale as Lang) : defaultLang;
}

const prefixedLangs = (Object.keys(languages) as Lang[]).filter((lang) => lang !== defaultLang);
const localePrefix = new RegExp(`^/(${prefixedLangs.join('|')})(?=/|$)`);

/** Map a pathname to the same page in another language ('/foo' <-> '/ko/foo'). */
export function localizePath(pathname: string, target: Lang): string {
	const stripped = pathname.replace(localePrefix, '') || '/';
	return target === defaultLang ? stripped : `/${target}${stripped === '/' ? '/' : stripped}`;
}

/** getStaticPaths for src/pages/[lang]/: one copy of each page per non-default language. */
export function localizedPaths() {
	return prefixedLangs.map((lang) => ({ params: { lang } }));
}
