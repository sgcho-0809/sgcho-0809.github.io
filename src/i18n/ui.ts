export const languages = {
	en: 'English',
	ko: '한국어',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

/** Top-level pages, in menu order. Each lives at /<slug>/ and /ko/<slug>/. */
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
		'lang.switch': '한국어',
		'hero.name': 'Sang-Gyu Cho',
		'hero.role': 'M.S. Student, Industrial & Management Engineering',
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
		'lang.switch': 'English',
		'hero.name': '조상규',
		'hero.role': '산업경영공학과 석사과정',
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

/** Map a pathname to the same page in another language ('/foo' <-> '/ko/foo'). */
export function localizePath(pathname: string, target: Lang): string {
	const stripped = pathname.replace(/^\/ko(?=\/|$)/, '') || '/';
	return target === defaultLang ? stripped : `/${target}${stripped === '/' ? '/' : stripped}`;
}
