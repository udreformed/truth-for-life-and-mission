globalThis.process ??= {};
globalThis.process.env ??= {};
//#region src/lib/i18n.ts
var supportedLanguages = [
	"th",
	"ko",
	"en"
];
var isLanguage = (value) => supportedLanguages.includes(value);
var copy = {
	th: {
		siteName: "ความจริงเพื่อชีวิตและพันธกิจ",
		shortName: "Truth for Life and Mission",
		nav: {
			home: "หน้าหลัก",
			courses: "หลักสูตร",
			bibleReading: "อ่านพระคัมภีร์",
			library: "คลังความรู้",
			usefulLinks: "เว็บไซต์แนะนำ",
			search: "ค้นหา",
			admin: "ผู้ดูแล"
		},
		heroEyebrow: "พระวจนะ · คริสตจักร · พันธกิจ",
		heroTitle: "รู้จักพระคริสต์ผ่านพระคัมภีร์",
		heroBody: "คลังสื่อฟรี ข่าวประเสริฐ คำใคร่ครวญ และบทเรียน",
		browse: "สำรวจคลังความรู้",
		latest: "เนื้อหาแนะนำ",
		searchPlaceholder: "ค้นหาพระคัมภีร์ หลักคำสอน หรือคำถามชีวิต",
		searchAction: "ค้นหา",
		empty: "ยังไม่พบเนื้อหาที่ตรงกับคำค้น",
		all: "ทั้งหมด",
		read: "อ่านต่อ",
		missionTitle: "ความรู้ที่นำไปสู่การดำเนินชีวิต",
		missionBody: "ทุกแหล่งข้อมูลควรช่วยให้เราเข้าใจพระวจนะ นมัสการพระเจ้า รับใช้คริสตจักร และมีส่วนในพันธกิจของพระองค์"
	},
	ko: {
		siteName: "삶과 선교를 위한 진리",
		shortName: "Truth for Life and Mission",
		nav: {
			home: "홈",
			courses: "강좌",
			bibleReading: "성경통독",
			library: "자료실",
			usefulLinks: "추천 사이트",
			search: "검색",
			admin: "관리자"
		},
		heroEyebrow: "말씀 · 교회 · 선교",
		heroTitle: "성경을 통해 그리스도를 알아갑니다",
		heroBody: "태국 교회와 선교를 위한 복음·묵상·강좌 자료실",
		browse: "자료실 둘러보기",
		latest: "추천 자료",
		searchPlaceholder: "성경, 교리 또는 삶의 질문을 검색하세요",
		searchAction: "검색",
		empty: "검색 결과가 없습니다.",
		all: "전체",
		read: "계속 읽기",
		missionTitle: "삶으로 이어지는 지식",
		missionBody: "모든 자료는 말씀을 이해하고 하나님을 예배하며 교회와 선교에 참여하도록 돕습니다."
	},
	en: {
		siteName: "Truth for Life and Mission",
		shortName: "Truth for Life and Mission",
		nav: {
			home: "Home",
			courses: "Courses",
			bibleReading: "Bible Reading",
			library: "Library",
			usefulLinks: "Recommend",
			search: "Search",
			admin: "Admin"
		},
		heroEyebrow: "Scripture · Church · Mission",
		heroTitle: "Know Christ through Scripture",
		heroBody: "Gospel, devotional, and course resources for Thai church and mission.",
		browse: "Explore the library",
		latest: "Recommended resources",
		searchPlaceholder: "Search Scripture, doctrine, or a question about life",
		searchAction: "Search",
		empty: "No matching resources were found.",
		all: "All",
		read: "Continue reading",
		missionTitle: "Knowledge that leads to faithful living",
		missionBody: "Every resource should help people understand Scripture, worship God, serve the Church, and participate in mission."
	}
};
var typeLabels = {
	th: {
		article: "บทความ",
		book: "หนังสือ",
		video: "วิดีโอ",
		pdf: "PDF",
		course: "หลักสูตร",
		devotional: "เฝ้าเดี่ยว",
		sermon: "คำเทศนา",
		sunday_school: "บทเรียนรวีวารศึกษา"
	},
	ko: {
		article: "에세이",
		book: "도서",
		video: "영상",
		pdf: "PDF",
		course: "강좌",
		devotional: "묵상",
		sermon: "설교",
		sunday_school: "주일학교"
	},
	en: {
		article: "Article",
		book: "Book",
		video: "Video",
		pdf: "PDF",
		course: "Course",
		devotional: "Devotional",
		sermon: "Sermon",
		sunday_school: "Sunday School"
	}
};
//#endregion
export { isLanguage as n, typeLabels as r, copy as t };
