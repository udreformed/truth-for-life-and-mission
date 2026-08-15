import type { Language } from "./i18n";
import type { ResourceSummary } from "./resources";

const body = (paragraphs: string[]) => paragraphs.join("\n\n");

const commonMeta = {
  type: "article",
  status: "published" as const,
  audience: "all",
  published_at: "2026-07-30"
};

export const bookletEssaySummaryResources: Record<Language, ResourceSummary[]> = {
  ko: [
    {
      ...commonMeta,
      id: -301,
      language: "ko",
      slug: "article-what-is-the-gospel",
      title: "복음이란 무엇인가",
      author_name: "최용진",
      summary: "하나님께서 이 세상을 사랑하셨다는 말은 막연한 위로가 아닙니다. 그 사랑은 죄인을 위해 오신 예수 그리스도 안에서 역사 속에 드러났고, 십자가와 부활을 통해 우리에게 생명의 길을 열었습니다.",
      body: body([
        "하나님께서 이 세상을 사랑하셨다는 말은 막연한 위로가 아닙니다. 그 사랑은 죄인을 위해 오신 예수 그리스도 안에서 역사 속에 드러났고, 십자가와 부활을 통해 우리에게 생명의 길을 열었습니다. 복음은 종교적 분위기나 착하게 살자는 권면보다 훨씬 깊고 분명한 소식입니다.",
        "이 글은 성경이 말하는 복음의 핵심을 차분히 따라갑니다. 하나님은 누구신지, 인간의 죄는 왜 가볍게 넘길 수 없는지, 심판 앞에 선 사람에게 왜 예수 그리스도만이 유일한 구원자인지, 그리고 믿음과 회개가 어떤 은혜인지 설명합니다.",
        "## 종교가 줄 수 없는 확신",
        "사람은 죽음 이후의 일을 자기 경험으로 확인할 수 없습니다. 전통, 관습, 선행, 종교적 열심이 마음에 잠시 안정을 줄 수는 있어도 죄를 씻고 하나님 앞에 의롭게 서게 할 수는 없습니다. 그래서 복음은 먼저 우리에게 묻습니다. 내가 의지하고 있는 것이 참으로 나를 구원할 수 있는가?",
        "## 하나님과 인간을 바로 보는 일",
        "성경은 하나님을 거룩하시고 선하시며 공의로우신 창조주로 보여 줍니다. 동시에 인간은 그 하나님을 떠나 자기 길로 간 죄인이라고 말합니다. 죄는 단지 실수나 약점이 아니라 하나님을 거스르는 마음의 방향입니다. 그러므로 인간에게 필요한 것은 더 나은 자기계발이 아니라 하나님과의 화목입니다.",
        "## 십자가에서 열린 구원의 길",
        "하나님은 죄를 모른 척하지 않으셨습니다. 사랑이 풍성하신 하나님은 자신의 아들 예수 그리스도를 보내셔서 죄인이 받아야 할 형벌을 담당하게 하셨고, 그리스도의 완전한 의를 믿는 자에게 입혀 주셨습니다. 십자가는 하나님의 사랑과 공의가 함께 드러난 자리입니다.",
        "## 믿음과 회개는 은혜의 응답",
        "복음은 우리에게 공로를 쌓으라고 요구하지 않습니다. 예수 그리스도를 믿고 죄에서 돌이키라고 부릅니다. 믿음은 그리스도께 자신을 맡기는 것이며, 회개는 하나님 없이 살던 길에서 돌아서는 것입니다. 이 둘은 사람이 자랑할 업적이 아니라 성령께서 주시는 은혜의 열매입니다.",
        "## 오늘 복음을 들으십시오",
        "예수 그리스도의 복음은 단지 처음 교회에 나온 사람만을 위한 기초가 아닙니다. 이미 믿는 사람도 날마다 다시 들어야 할 생명의 소식입니다. 자신의 선함보다 그리스도의 은혜를 바라보십시오. 죄책감보다 십자가를 바라보고, 막연한 두려움보다 부활하신 주님을 바라보십시오. 복음은 죄인에게 주시는 하나님의 가장 분명하고 따뜻한 초대입니다."
      ])
    },
    {
      ...commonMeta,
      id: -302,
      language: "ko",
      slug: "article-justification-and-regeneration",
      title: "칭의와 거듭남",
      author_name: "최용진",
      summary: "구원은 하나님께서 죄인을 용서하시는 것으로만 끝나지 않습니다. 하나님은 그리스도 안에서 죄인을 의롭다 하시고, 성령으로 새 생명을 주셔서 하나님을 사랑하는 사람으로 다시 빚으십니다.",
      body: body([
        "구원은 하나님께서 죄인을 용서하시는 것으로만 끝나지 않습니다. 하나님은 그리스도 안에서 죄인을 의롭다 하시고, 성령으로 새 생명을 주셔서 하나님을 사랑하는 사람으로 다시 빚으십니다. 칭의와 거듭남은 서로 다르지만 결코 떨어질 수 없는 하나님의 은혜입니다.",
        "이 글은 죄인이 하나님 앞에서 어떻게 받아들여지는지, 그리고 그 받아들여진 사람이 어떻게 새 마음과 새 삶을 얻게 되는지를 따뜻하게 설명합니다. 구원의 영광이 왜 처음부터 끝까지 하나님께 속하는지도 함께 보여 줍니다.",
        "## 사랑과 공의가 만나는 자리",
        "하나님이 사랑이시라면 그냥 용서하시면 되지 않느냐고 물을 수 있습니다. 그러나 하나님은 사랑이실 뿐 아니라 공의로우십니다. 죄는 실제이며, 죄의 형벌도 실제입니다. 하나님은 죄를 가볍게 여기지 않으시면서도 죄인을 구원하시는 길을 여셨습니다.",
        "## 칭의: 의롭다고 선언하시는 은혜",
        "칭의는 하나님께서 예수 그리스도를 믿는 죄인의 죄를 용서하시고, 그리스도의 의를 그 사람의 것으로 인정하여 의롭다고 선언하시는 은혜입니다. 우리의 죄는 그리스도께 담당되었고, 그리스도의 의는 우리에게 전가되었습니다. 그래서 신자의 확신은 자기 변화의 정도가 아니라 그리스도의 완성된 의 위에 섭니다.",
        "## 믿음은 빈손으로 그리스도를 받는 것",
        "믿음은 하나님께 내세우는 또 하나의 공로가 아닙니다. 믿음은 빈손으로 그리스도를 받는 것입니다. 참된 믿음은 예수님이 누구신지 알고, 그분의 약속을 신뢰하며, 죄와 자기 의지에서 돌이켜 그분께 자신을 맡깁니다. 그래서 믿음은 행위의 반대편에 있지만, 결코 열매 없는 믿음으로 머물지 않습니다.",
        "## 거듭남: 위로부터 주어지는 새 생명",
        "거듭남은 성령께서 죄로 죽은 사람에게 새 생명을 주시는 일입니다. 사람은 스스로 하나님을 사랑하는 마음을 만들어 낼 수 없습니다. 성령께서 마음을 새롭게 하실 때 비로소 죄를 미워하고, 그리스도를 귀하게 여기며, 하나님의 말씀에 귀를 기울이는 생명의 움직임이 시작됩니다.",
        "## 구원의 모든 영광은 하나님께",
        "칭의는 우리의 신분을 바꾸고, 거듭남은 우리의 생명을 새롭게 합니다. 하나님은 우리를 법정적으로 받아들이실 뿐 아니라 실제로 새롭게 하십니다. 그러므로 신자는 자랑할 것이 없습니다. 죄인을 의롭다 하시는 분도 하나님이시며, 죄인을 새롭게 하시는 분도 하나님이십니다. 모든 영광은 하나님께 있습니다."
      ])
    },
    {
      ...commonMeta,
      id: -303,
      language: "ko",
      slug: "article-what-is-reformed-faith",
      title: "개혁신앙이란 무엇인가",
      author_name: "최용진",
      summary: "개혁신앙은 특정 인물이나 교파를 높이는 이름이 아니라, 교회와 성도의 믿음과 삶을 하나님의 말씀 앞에서 계속 바로잡으려는 신앙입니다.",
      body: body([
        "개혁신앙은 특정 인물이나 교파를 높이는 이름이 아니라, 교회와 성도의 믿음과 삶을 하나님의 말씀 앞에서 계속 바로잡으려는 신앙입니다. 그 중심에는 하나님이 누구신지, 은혜가 얼마나 크고 깊은지, 인간의 삶이 무엇을 위해 존재하는지가 놓여 있습니다.",
        "이 글은 개혁신앙의 핵심을 다섯 솔라, 은혜의 교리, 언약신학, 하나님의 주권과 인간의 책임, 그리고 하나님께 영광 돌리는 삶이라는 흐름으로 정리합니다. 단순한 교리 설명이 아니라, 성도가 하나님 안에서 겸손하고 기쁘게 살도록 초대합니다.",
        "## 성경으로 돌아가는 믿음",
        "개혁신앙은 먼저 성경으로 돌아가려는 믿음입니다. 성경은 교회의 전통이나 개인의 경험보다 높으며, 우리의 믿음과 예배와 삶을 판단하는 최종 기준입니다. 그래서 개혁신앙은 늘 묻습니다. 이것이 하나님의 말씀과 맞는가?",
        "## 은혜로 시작하고 은혜로 완성되는 구원",
        "다섯 솔라는 복음의 방향을 분명하게 세웁니다. 우리는 오직 성경에 근거하여, 오직 은혜로, 오직 믿음으로, 오직 그리스도 안에서 구원받고, 모든 영광을 오직 하나님께 돌립니다. 이 고백은 인간의 자랑을 낮추고 그리스도의 은혜를 크게 보게 합니다.",
        "## 하나님의 주권은 차가운 운명론이 아닙니다",
        "하나님이 주권적으로 구원하신다는 말은 사람의 책임이 사라진다는 뜻이 아닙니다. 오히려 기도와 전도와 순종이 하나님 손 안에서 의미 있게 쓰인다는 뜻입니다. 하나님은 목적만 정하시는 분이 아니라 그 목적을 이루는 길도 정하시는 분입니다.",
        "## 성경 전체를 하나의 은혜 이야기로 읽기",
        "언약신학은 성경이 흩어진 이야기들의 모음이 아니라, 하나님께서 그리스도 안에서 자기 백성을 구원하시는 하나의 큰 이야기임을 보여 줍니다. 창조, 타락, 약속, 성취, 교회, 새 하늘과 새 땅은 모두 하나님의 은혜로운 구속 이야기 안에 연결되어 있습니다.",
        "## 교리에서 삶으로",
        "개혁신앙은 머리로만 붙드는 체계가 아닙니다. 은혜를 아는 사람은 겸손해지고, 교회를 사랑하며, 자기 소명을 따라 충성하고, 고난 속에서도 하나님의 섭리를 신뢰합니다. 우리의 목적은 하나님께 영광을 돌리고 그분을 영원토록 기뻐하는 것입니다. 이 고백이 삶의 방향이 될 때 교리는 따뜻한 예배가 됩니다."
      ])
    },
    {
      ...commonMeta,
      id: -304,
      language: "ko",
      slug: "article-sanctification-and-mortification",
      title: "성화와 죄 죽임",
      author_name: "최용진",
      summary: "그리스도인의 삶은 죄 사함의 기쁨에서 멈추지 않습니다. 구원받은 사람은 성령의 능력 안에서 죄와 싸우며, 조금씩 그리스도를 닮아 가는 길을 걷습니다.",
      body: body([
        "그리스도인의 삶은 죄 사함의 기쁨에서 멈추지 않습니다. 구원받은 사람은 성령의 능력 안에서 죄와 싸우며, 조금씩 그리스도를 닮아 가는 길을 걷습니다. 이 싸움은 우리를 버림받지 않기 위한 두려운 노동이 아니라, 이미 그리스도 안에서 받아들여진 자녀의 믿음의 걸음입니다.",
        "이 글은 성화가 무엇인지, 왜 신자 안에 죄와의 싸움이 계속되는지, 죄 죽임이 무엇인지, 그리고 실제 삶에서 어떻게 은혜의 수단을 붙들 수 있는지를 설명합니다.",
        "## 성화는 구원의 조건이 아니라 은혜의 변화",
        "칭의에서 하나님은 죄인을 단번에 의롭다 하십니다. 성화에서 성령은 그 사람의 실제 삶을 평생에 걸쳐 변화시키십니다. 칭의는 완전하고 반복되지 않지만, 성화는 점진적이며 때로 느리고 고통스럽게 느껴집니다. 그러나 하나님은 시작하신 일을 포기하지 않으십니다.",
        "## 왜 여전히 죄와 싸워야 하는가",
        "거듭난 사람에게도 죄의 흔적과 욕망은 남아 있습니다. 그래서 신자는 죄를 가볍게 여기지 않고, 동시에 절망하지도 않습니다. 죄와 싸우는 것은 하나님께 받아들여지기 위한 조건이 아니라 이미 하나님의 자녀가 되었기 때문에 시작되는 새로운 삶의 방향입니다.",
        "## 죄 죽임은 성령을 의지하는 실제 순종",
        "죄 죽임은 우리 안에 남아 있는 죄의 욕망과 습관과 지배력을 성령의 능력으로 약화시키고, 죄에게 순종하지 않는 것입니다. 단순히 나쁜 행동을 억누르는 정도가 아닙니다. 마음의 사랑과 욕망이 그리스도께로 돌이켜지는 일입니다.",
        "## 은혜의 수단을 붙드십시오",
        "죄와의 싸움에는 마법 같은 비밀 공식이 없습니다. 성도는 말씀, 기도, 예배, 성례, 교회의 도움을 통해 꾸준히 은혜를 공급받아야 합니다. 죄를 구체적으로 인정하고, 유혹의 통로를 끊고, 넘어졌을 때 변명하지 말고 즉시 그리스도께 돌아가야 합니다.",
        "## 넘어져도 다시 은혜 안에서 일어나십시오",
        "성화의 길은 완벽한 사람의 길이 아니라 회개하며 걷는 사람의 길입니다. 오늘도 작은 순종을 시작하십시오. 그리스도는 죄와 싸우는 연약한 성도를 버리지 않으십니다. 성령께서 우리를 붙드시며, 마침내 우리를 그리스도의 형상으로 빚어 가십니다."
      ])
    },
    {
      ...commonMeta,
      id: -305,
      language: "ko",
      slug: "article-mission-and-missionary",
      title: "선교와 선교사",
      author_name: "최용진",
      summary: "선교는 먼 나라에 있는 몇몇 특별한 사람의 일이 아닙니다. 하나님께서 복음을 교회에 맡기셨고, 교회와 성도는 각자의 자리에서 그 복음을 이웃과 모든 민족에게 전하도록 부름받았습니다.",
      body: body([
        "선교는 먼 나라에 있는 몇몇 특별한 사람의 일이 아닙니다. 하나님께서 복음을 교회에 맡기셨고, 교회와 성도는 각자의 자리에서 그 복음을 이웃과 모든 민족에게 전하도록 부름받았습니다. 선교사는 교회와 분리된 영웅이 아니라, 교회가 함께 보내고 함께 책임지는 성도입니다.",
        "이 글은 선교의 의미, 선교사의 자리, 지역교회와 성도의 참여, 이주민과 외국인을 향한 시선, 그리고 모든 민족이 하나님을 예배할 날을 바라보는 소망을 이야기합니다.",
        "## 선교는 복음을 전하고 교회를 세우는 일",
        "선교는 단순히 좋은 일을 하는 것만으로 설명되지 않습니다. 선교의 중심에는 예수 그리스도의 복음을 전하고, 말씀으로 제자를 세우며, 하나님을 예배하는 교회를 세우는 일이 있습니다. 선한 섬김은 중요하지만, 복음이 사라지면 선교의 중심도 사라집니다.",
        "## 선교사는 특별 계급이 아니라 파송받은 성도",
        "선교사는 더 높은 종류의 신자가 아닙니다. 그는 여전히 연약하고 은혜가 필요한 성도입니다. 다만 교회가 그를 언어와 문화의 경계를 넘어 복음을 전하도록 파송한 것입니다. 그래서 선교는 선교사 개인의 외로운 사업이 아니라 교회의 공동 사명입니다.",
        "## 모든 성도는 자기 자리에서 참여합니다",
        "모든 사람이 같은 방식으로 선교에 참여하지는 않습니다. 어떤 사람은 가고, 어떤 사람은 보내며, 어떤 사람은 기도하고 돌보고 후원합니다. 또 어떤 사람은 자기 가족과 이웃, 직장과 지역사회에서 복음을 전합니다. 중요한 것은 내가 있는 자리에서 복음의 사명을 외면하지 않는 것입니다.",
        "## 가까이 온 모든 민족",
        "오늘 우리 주변에는 이미 여러 민족과 문화의 사람들이 함께 살아갑니다. 이주민과 외국인은 멀리 있는 선교 대상이 아니라 하나님께서 가까이 보내신 이웃일 수 있습니다. 그들이 복음을 듣고 그리스도를 믿게 될 때, 다시 자기 가족과 민족에게 복음의 통로가 될 수 있습니다.",
        "## 교회는 보내는 공동체입니다",
        "교회는 선교사를 준비시키고, 파송하고, 기도하며, 돌보고, 함께 책임져야 합니다. 작은 교회도 선교에 참여할 수 있습니다. 선교의 크기는 숫자나 예산만으로 정해지지 않습니다. 하나님께서 맡기신 복음을 사랑하고, 모든 민족이 주님을 예배할 날을 바라보며 충성하는 교회가 선교하는 교회입니다."
      ])
    }
  ],
  th: [
    {
      ...commonMeta,
      id: -311,
      language: "th",
      slug: "article-what-is-the-gospel",
      title: "ข่าวประเสริฐคืออะไร",
      author_name: "Yongjin Choi",
      summary: "ข่าวประเสริฐไม่ใช่เพียงคำสอนทางศาสนาที่ปลอบใจเราในยามลำบาก แต่เป็นข่าวดีว่าพระเจ้าผู้บริสุทธิ์ทรงเปิดทางให้คนบาปกลับคืนดีกับพระองค์ผ่านพระเยซูคริสต์",
      body: body([
        "ข่าวประเสริฐไม่ใช่เพียงคำสอนทางศาสนาที่ปลอบใจเราในยามลำบาก แต่เป็นข่าวดีว่าพระเจ้าผู้บริสุทธิ์ทรงเปิดทางให้คนบาปกลับคืนดีกับพระองค์ผ่านพระเยซูคริสต์ ข่าวนี้แตะต้องคำถามลึกที่สุดของมนุษย์ คือเรามาจากไหน เราผิดต่อพระเจ้าอย่างไร และเราจะมีชีวิตนิรันดร์ได้อย่างไร",
        "บทความนี้สรุปเนื้อหาหลักของข่าวประเสริฐอย่างเป็นลำดับ เริ่มจากความจริงเรื่องพระเจ้า ความบาป การพิพากษา พระคริสต์ผู้ช่วยให้รอด ความเชื่อ การกลับใจ และชีวิตใหม่ที่พระวิญญาณบริสุทธิ์ทรงประทาน",
        "## ศาสนาให้ความมั่นใจสุดท้ายไม่ได้",
        "ในสังคมไทย หลายคนคุ้นเคยกับการทำบุญ ความเชื่อประจำครอบครัว หรือการแสวงหาความคุ้มครองจากสิ่งศักดิ์สิทธิ์ สิ่งเหล่านี้อาจทำให้ใจสบายชั่วคราว แต่ไม่อาจลบความผิดบาปหรือรับประกันชีวิตหลังความตายได้ ข่าวประเสริฐจึงชวนเราถามอย่างจริงใจว่า สิ่งที่เราพึ่งอยู่นั้นช่วยเราให้ยืนต่อพระพักตร์พระเจ้าได้จริงหรือ",
        "## พระเจ้าทรงบริสุทธิ์ และมนุษย์เป็นคนบาป",
        "พระคัมภีร์เปิดเผยว่าพระเจ้าทรงเป็นพระผู้สร้าง ผู้บริสุทธิ์ ยุติธรรม และเปี่ยมด้วยความดี ส่วนมนุษย์ไม่ได้เป็นเพียงคนที่ทำผิดพลาดเป็นครั้งคราว แต่เป็นคนที่หันออกจากพระเจ้าและดำเนินตามทางของตนเอง บาปจึงไม่ใช่เรื่องเล็กน้อย แต่เป็นการกบฏต่อพระเจ้าผู้ทรงสร้างเรา",
        "## ไม้กางเขนคือทางรอดที่พระเจ้าทรงจัดเตรียม",
        "พระเจ้าไม่ทรงมองข้ามบาป แต่ในความรัก พระองค์ทรงประทานพระบุตรของพระองค์คือพระเยซูคริสต์ พระเยซูทรงรับโทษบาปแทนคนบาป และทรงทำความชอบธรรมอย่างสมบูรณ์ เมื่อพระองค์สิ้นพระชนม์และทรงเป็นขึ้นจากตาย ทางแห่งการอภัยและชีวิตใหม่จึงเปิดออก",
        "## ความเชื่อและการกลับใจเป็นการตอบสนองต่อพระคุณ",
        "พระเจ้าไม่ได้เรียกให้เรานำบุญหรือความดีมาแลกความรอด แต่เรียกให้เราวางใจในพระคริสต์และกลับใจจากบาป ความเชื่อคือการมอบตนเองไว้กับพระคริสต์ ส่วนการกลับใจคือการหันจากทางเดิมกลับมาหาพระเจ้า ทั้งสองสิ่งนี้ไม่ใช่ผลงานที่เราใช้โอ้อวด แต่เป็นของประทานแห่งพระคุณ",
        "## จงฟังข่าวดีนี้ด้วยใจสงบ",
        "ข่าวประเสริฐไม่ใช่เพียงบทเรียนแรกสำหรับคนเริ่มต้นเท่านั้น แต่เป็นข่าวดีที่ผู้เชื่อต้องกลับมาฟังซ้ำทุกวัน หากท่านยังไม่แน่ใจว่าตนเองรู้จักพระคริสต์อย่างแท้จริงหรือไม่ ขอให้หยุดนิ่งและพิจารณา พระคริสต์ทรงเพียงพอสำหรับคนบาป พระคุณของพระองค์ลึกกว่าความผิดของเรา และข่าวประเสริฐคือคำเชิญอันอ่อนโยนของพระเจ้าถึงท่านในวันนี้"
      ])
    },
    {
      ...commonMeta,
      id: -312,
      language: "th",
      slug: "article-justification-and-regeneration",
      title: "การทรงนับว่าเป็นผู้ชอบธรรมและการบังเกิดใหม่",
      author_name: "Yongjin Choi",
      summary: "ความรอดไม่ใช่เพียงการที่พระเจ้าทรงยกโทษให้เราเท่านั้น แต่พระองค์ทรงนับผู้เชื่อว่าเป็นผู้ชอบธรรมในพระคริสต์ และทรงประทานชีวิตใหม่โดยพระวิญญาณบริสุทธิ์",
      body: body([
        "ความรอดไม่ใช่เพียงการที่พระเจ้าทรงยกโทษให้เราเท่านั้น แต่พระองค์ทรงนับผู้เชื่อว่าเป็นผู้ชอบธรรมในพระคริสต์ และทรงประทานชีวิตใหม่โดยพระวิญญาณบริสุทธิ์ การทรงนับว่าเป็นผู้ชอบธรรมและการบังเกิดใหม่จึงต่างกัน แต่เป็นพระคุณเดียวกันที่แยกจากกันไม่ได้",
        "บทความนี้ช่วยให้ผู้อ่านมองเห็นว่า คนบาปได้รับการยอมรับต่อพระพักตร์พระเจ้าได้อย่างไร และคนที่ได้รับการยอมรับนั้นเริ่มมีใจใหม่ ชีวิตใหม่ และความรักใหม่ต่อพระเจ้าได้อย่างไร",
        "## ความรักของพระเจ้าไม่ขัดกับความยุติธรรม",
        "บางคนอาจถามว่า ถ้าพระเจ้าทรงรัก ทำไมพระองค์ไม่ทรงยกโทษให้ทุกคนเสียเลย คำตอบคือพระเจ้าทรงรักและทรงยุติธรรมพร้อมกัน บาปเป็นความผิดจริง และโทษของบาปก็เป็นจริง พระเจ้าจึงไม่ทรงช่วยคนบาปด้วยการละเลยความยุติธรรม แต่ทรงช่วยผ่านพระคริสต์ผู้รับโทษแทนเรา",
        "## การทรงนับว่าเป็นผู้ชอบธรรม",
        "การทรงนับว่าเป็นผู้ชอบธรรมหมายถึง พระเจ้าทรงยกโทษบาปของผู้ที่เชื่อในพระคริสต์ และทรงนับความชอบธรรมของพระคริสต์เป็นของผู้นั้น ความผิดของเราอยู่กับพระคริสต์ และความชอบธรรมของพระคริสต์อยู่กับเรา ดังนั้นความมั่นใจของผู้เชื่อไม่ได้อยู่ที่ความดีของตน แต่อยู่ที่พระราชกิจที่สำเร็จแล้วของพระคริสต์",
        "## ความเชื่อคือมือเปล่าที่รับพระคริสต์",
        "ความเชื่อไม่ใช่บุญอีกชนิดหนึ่งที่เรานำไปถวายพระเจ้า แต่เป็นมือเปล่าที่รับพระคริสต์ ผู้เชื่อไม่ได้รอดเพราะความเชื่อของตนมีคุณค่าในตัวเอง แต่เพราะความเชื่อนั้นยึดพระคริสต์ผู้ทรงมีคุณค่าสูงสุดไว้ ความเชื่อแท้ย่อมนำไปสู่การกลับใจและการเชื่อฟัง แต่ผลเหล่านั้นเป็นหลักฐาน ไม่ใช่รากฐานของความรอด",
        "## การบังเกิดใหม่คือชีวิตจากเบื้องบน",
        "การบังเกิดใหม่คือพระราชกิจของพระวิญญาณบริสุทธิ์ที่ประทานชีวิตใหม่แก่คนที่ตายฝ่ายวิญญาณ มนุษย์ไม่สามารถสร้างหัวใจที่รักพระเจ้าได้ด้วยตนเอง แต่เมื่อพระวิญญาณทรงเปลี่ยนใจ คนบาปเริ่มเห็นความงามของพระคริสต์ เกลียดบาป และอยากดำเนินตามพระวจนะ",
        "## พระสิริทั้งหมดเป็นของพระเจ้า",
        "การทรงนับว่าเป็นผู้ชอบธรรมเปลี่ยนสถานะของเรา ส่วนการบังเกิดใหม่เปลี่ยนชีวิตของเรา พระเจ้าทรงประกาศให้ผู้เชื่อเป็นผู้ชอบธรรม และทรงทำให้เขามีชีวิตใหม่ด้วย ดังนั้นผู้เชื่อไม่มีสิ่งใดจะโอ้อวดได้ ความรอดตั้งแต่ต้นจนจบเป็นพระคุณ และพระสิริทั้งหมดเป็นของพระเจ้า"
      ])
    },
    {
      ...commonMeta,
      id: -313,
      language: "th",
      slug: "article-what-is-reformed-faith",
      title: "ความเชื่อปฏิรูปคืออะไร",
      author_name: "Yongjin Choi",
      summary: "ความเชื่อปฏิรูปไม่ใช่การยกย่องบุคคลหรือนิกายหนึ่งเหนือพระคัมภีร์ แต่เป็นความเชื่อที่นำคำสอน การนมัสการ และชีวิตกลับมาตรวจสอบกับพระวจนะของพระเจ้าเสมอ",
      body: body([
        "ความเชื่อปฏิรูปไม่ใช่การยกย่องบุคคลหรือนิกายหนึ่งเหนือพระคัมภีร์ แต่เป็นความเชื่อที่นำคำสอน การนมัสการ และชีวิตกลับมาตรวจสอบกับพระวจนะของพระเจ้าเสมอ หัวใจของความเชื่อนี้คือ พระเจ้าทรงเป็นศูนย์กลาง พระคุณทรงครอบครอง และมนุษย์ถูกสร้างมาเพื่อถวายพระสิริแด่พระเจ้า",
        "บทความนี้สรุปความเชื่อปฏิรูปผ่านห้าคำประกาศสำคัญ หลักคำสอนแห่งพระคุณ เทววิทยาพันธสัญญา พระอธิปไตยของพระเจ้า และชีวิตที่ดำเนินเพื่อพระสิริของพระองค์",
        "## กลับสู่พระคัมภีร์",
        "ความเชื่อปฏิรูปเริ่มจากการยอมให้พระคัมภีร์เป็นอำนาจสูงสุดเหนือความคิด ประสบการณ์ และธรรมเนียมของเรา คริสตจักรและผู้เชื่อต้องกลับมาตรวจสอบตนเองอยู่เสมอว่า สิ่งที่เราสอน เชื่อ และปฏิบัตินั้นสอดคล้องกับพระวจนะของพระเจ้าหรือไม่",
        "## ความรอดเป็นพระคุณตั้งแต่ต้นจนจบ",
        "ห้าคำประกาศของการปฏิรูปย้ำว่า เรารู้จักความจริงโดยพระคัมภีร์เท่านั้น ได้รับความรอดโดยพระคุณเท่านั้น ผ่านความเชื่อเท่านั้น ในพระคริสต์เท่านั้น และถวายพระสิริแด่พระเจ้าเท่านั้น คำประกาศเหล่านี้ทำให้ความเย่อหยิ่งของมนุษย์ลดลง และทำให้พระคุณของพระคริสต์ใหญ่ขึ้นในสายตาเรา",
        "## พระอธิปไตยของพระเจ้าไม่ใช่ชะตากรรม",
        "การที่พระเจ้าทรงครอบครองเหนือความรอดไม่ได้ทำให้การอธิษฐาน การประกาศ หรือการเชื่อฟังไร้ความหมาย ตรงกันข้าม พระเจ้าทรงใช้สิ่งเหล่านี้เป็นหนทางในแผนการของพระองค์ ผู้เชื่อจึงประกาศข่าวประเสริฐด้วยความมั่นใจ เพราะความรอดเป็นพระราชกิจของพระเจ้า",
        "## พระคัมภีร์ทั้งเล่มเป็นเรื่องเดียวของพระคุณ",
        "เทววิทยาพันธสัญญาช่วยให้เราเห็นว่าพระคัมภีร์ไม่ได้เป็นเรื่องแยกส่วน แต่เป็นเรื่องเดียวกันของพระเจ้าผู้ทรงช่วยประชากรของพระองค์ในพระคริสต์ ตั้งแต่การทรงสร้าง การตกในบาป พระสัญญา การไถ่ คริสตจักร และความหวังสุดท้าย ทุกอย่างเชื่อมอยู่ในเรื่องราวแห่งพระคุณ",
        "## หลักคำสอนที่นำไปสู่ชีวิต",
        "ความเชื่อปฏิรูปไม่ควรทำให้เราหยิ่ง แต่ควรทำให้เราถ่อมใจ รักคริสตจักร ซื่อสัตย์ต่อการทรงเรียก และไว้วางใจพระเจ้าในความทุกข์ จุดมุ่งหมายสูงสุดของชีวิตคือถวายพระสิริแด่พระเจ้าและชื่นชมยินดีในพระองค์ตลอดไป เมื่อความจริงนี้ลงสู่ชีวิต หลักคำสอนก็กลายเป็นการนมัสการ"
      ])
    },
    {
      ...commonMeta,
      id: -314,
      language: "th",
      slug: "article-sanctification-and-mortification",
      title: "การชำระให้บริสุทธิ์และการประหารบาป",
      author_name: "Yongjin Choi",
      summary: "ชีวิตคริสเตียนไม่ได้หยุดอยู่ที่ความยินดีเรื่องการอภัยบาป ผู้ที่ได้รับความรอดแล้วถูกเรียกให้ต่อสู้กับบาปและเติบโตให้เหมือนพระคริสต์โดยฤทธิ์เดชของพระวิญญาณ",
      body: body([
        "ชีวิตคริสเตียนไม่ได้หยุดอยู่ที่ความยินดีเรื่องการอภัยบาป ผู้ที่ได้รับความรอดแล้วถูกเรียกให้ต่อสู้กับบาปและเติบโตให้เหมือนพระคริสต์โดยฤทธิ์เดชของพระวิญญาณ การต่อสู้นี้ไม่ใช่ความพยายามเพื่อให้พระเจ้ารับเรา แต่เป็นการดำเนินชีวิตของคนที่ได้รับการยอมรับแล้วในพระคริสต์",
        "บทความนี้อธิบายว่าการชำระให้บริสุทธิ์คืออะไร เหตุใดผู้เชื่อยังต้องต่อสู้กับบาป การประหารบาปหมายถึงอะไร และเราจะใช้หนทางแห่งพระคุณในชีวิตประจำวันได้อย่างไร",
        "## การชำระให้บริสุทธิ์คือการเปลี่ยนแปลงโดยพระคุณ",
        "ในการทรงนับว่าเป็นผู้ชอบธรรม พระเจ้าทรงประกาศให้ผู้เชื่อเป็นผู้ชอบธรรมครั้งเดียวอย่างสมบูรณ์ แต่ในการชำระให้บริสุทธิ์ พระวิญญาณทรงเปลี่ยนชีวิตจริงของผู้เชื่ออย่างค่อยเป็นค่อยไป เส้นทางนี้อาจช้าและเจ็บปวด แต่พระเจ้าผู้เริ่มต้นงานดีจะทรงทำให้สำเร็จ",
        "## ทำไมผู้เชื่อยังต้องต่อสู้กับบาป",
        "แม้ผู้เชื่อได้รับชีวิตใหม่แล้ว แต่ความปรารถนาเก่าและนิสัยบาปยังคงต่อสู้ในใจเรา ดังนั้นเราจึงไม่ควรประมาทบาป และไม่ควรสิ้นหวังเมื่อเห็นความอ่อนแอของตน การต่อสู้กับบาปเป็นเครื่องหมายของชีวิตใหม่ ไม่ใช่หลักฐานว่าพระเจ้าทรงละทิ้งเรา",
        "## การประหารบาปคือการไม่ยอมให้บาปครอบครอง",
        "การประหารบาปคือการพึ่งพระวิญญาณเพื่อทำให้ความปรารถนา นิสัย และอำนาจของบาปอ่อนกำลังลง ไม่ใช่เพียงการกดพฤติกรรมภายนอกไว้ แต่เป็นการหันความรักและความปรารถนาของหัวใจกลับมาหาพระคริสต์",
        "## ใช้หนทางแห่งพระคุณอย่างสม่ำเสมอ",
        "ไม่มีสูตรลับที่ทำให้บาปหายไปในวันเดียว ผู้เชื่อต้องใช้พระวจนะ การอธิษฐาน การนมัสการ พิธีศักดิ์สิทธิ์ และความช่วยเหลือจากคริสตจักรอย่างสม่ำเสมอ ต้องยอมรับบาปอย่างเฉพาะเจาะจง ตัดช่องทางของการล่อลวง และกลับมาหาพระคริสต์ทันทีเมื่อพลาดล้ม",
        "## ล้มแล้วอย่าหนี จงกลับมาหาพระคริสต์",
        "เส้นทางแห่งความบริสุทธิ์ไม่ใช่เส้นทางของคนที่ไม่เคยล้ม แต่เป็นเส้นทางของคนที่กลับใจและลุกขึ้นโดยพระคุณ พระคริสต์ไม่ทรงทอดทิ้งผู้เชื่อที่อ่อนแอซึ่งต่อสู้กับบาป จงเริ่มการเชื่อฟังเล็ก ๆ วันนี้ และวางใจว่าพระวิญญาณจะทรงทำให้เราเป็นเหมือนพระคริสต์มากขึ้น"
      ])
    },
    {
      ...commonMeta,
      id: -315,
      language: "th",
      slug: "article-mission-and-missionary",
      title: "พันธกิจและมิชชันนารี",
      author_name: "Yongjin Choi",
      summary: "พันธกิจไม่ใช่งานของคนพิเศษเพียงไม่กี่คนในประเทศไกล ๆ แต่เป็นภารกิจข่าวประเสริฐที่พระเจ้าทรงมอบไว้กับคริสตจักร และผู้เชื่อทุกคนมีส่วนได้จากที่ที่ตนอยู่",
      body: body([
        "พันธกิจไม่ใช่งานของคนพิเศษเพียงไม่กี่คนในประเทศไกล ๆ แต่เป็นภารกิจข่าวประเสริฐที่พระเจ้าทรงมอบไว้กับคริสตจักร และผู้เชื่อทุกคนมีส่วนได้จากที่ที่ตนอยู่ มิชชันนารีไม่ใช่วีรบุรุษที่แยกจากคริสตจักร แต่เป็นผู้เชื่อที่คริสตจักรส่งออกไปและร่วมรับผิดชอบด้วยกัน",
        "บทความนี้ชวนให้มองพันธกิจอย่างกว้างและลึกขึ้น ทั้งความหมายของพันธกิจ ชีวิตของมิชชันนารี บทบาทของคริสตจักร การมีส่วนของผู้เชื่อ และโอกาสที่พระเจ้าทรงนำชนชาติต่าง ๆ มาใกล้เราแล้ว",
        "## พันธกิจคือการประกาศข่าวประเสริฐและตั้งคริสตจักร",
        "พันธกิจไม่ใช่เพียงการทำกิจกรรมดีหรือช่วยเหลือสังคม แม้สิ่งเหล่านั้นมีคุณค่า แต่หัวใจของพันธกิจคือการประกาศข่าวประเสริฐของพระคริสต์ เลี้ยงดูผู้เชื่อด้วยพระวจนะ และตั้งคริสตจักรที่นมัสการพระเจ้า หากข่าวประเสริฐหายไป ศูนย์กลางของพันธกิจก็หายไปด้วย",
        "## มิชชันนารีคือผู้เชื่อที่ถูกส่งออกไป",
        "มิชชันนารีไม่ใช่ผู้เชื่อชนิดพิเศษที่สูงกว่าคนอื่น เขายังเป็นคนอ่อนแอที่ต้องพึ่งพระคุณเหมือนเรา ความพิเศษของมิชชันนารีอยู่ที่การถูกส่งข้ามภาษาและวัฒนธรรมเพื่อประกาศพระคริสต์ ดังนั้นพันธกิจจึงไม่ใช่งานเดี่ยวของมิชชันนารี แต่เป็นงานร่วมกันของคริสตจักร",
        "## ผู้เชื่อทุกคนมีส่วนได้",
        "บางคนถูกส่งออกไป บางคนส่ง บางคนอธิษฐาน บางคนดูแลและสนับสนุน บางคนประกาศข่าวประเสริฐแก่ครอบครัว เพื่อนบ้าน เพื่อนร่วมงาน หรือคนต่างชาติที่อยู่ใกล้ตัว เราไม่ได้มีหน้าที่เหมือนกันทุกคน แต่ไม่มีผู้เชื่อคนใดควรอยู่นอกภารกิจข่าวประเสริฐของพระเจ้า",
        "## ชนชาติต่าง ๆ อยู่ใกล้เราแล้ว",
        "ในโลกปัจจุบัน ผู้คนจากหลายภาษาและวัฒนธรรมอยู่ใกล้เราแล้ว ผู้ย้ายถิ่นและชาวต่างชาติไม่ใช่เพียงคนแปลกหน้า แต่เป็นเพื่อนบ้านที่พระเจ้าอาจทรงนำมาให้เราได้รักและประกาศข่าวประเสริฐ เมื่อพวกเขาเชื่อในพระคริสต์ พวกเขาอาจกลายเป็นสะพานนำข่าวประเสริฐกลับไปยังครอบครัวและชนชาติของตน",
        "## คริสตจักรคือชุมชนที่ส่งออกไป",
        "คริสตจักรต้องเตรียม ส่ง ดูแล และร่วมรับผิดชอบกับมิชชันนารี แม้คริสตจักรเล็กก็มีส่วนในพันธกิจได้ เพราะพันธกิจไม่ได้วัดด้วยจำนวนหรือเงินเท่านั้น แต่วัดด้วยความสัตย์ซื่อต่อข่าวประเสริฐและความรักต่อชนทุกชาติ คริสตจักรที่รอคอยวันที่ทุกชนชาติจะนมัสการพระเจ้า คือคริสตจักรที่เรียนรู้จะส่งออกไป"
      ])
    }
  ],
  en: [
    {
      ...commonMeta,
      id: -321,
      language: "en",
      slug: "article-what-is-the-gospel",
      title: "What Is the Gospel?",
      author_name: "Yongjin Choi",
      translation_notice: "AI translation / summary based on the Korean text",
      summary: "The Gospel is not merely a religious encouragement for difficult days. It is the good news that the holy God has opened the way for sinners to be reconciled to him through Jesus Christ.",
      body: body([
        "The Gospel is not merely a religious encouragement for difficult days. It is the good news that the holy God has opened the way for sinners to be reconciled to him through Jesus Christ. It answers the deepest questions of human life: Who is God? What is wrong with us? What happens after death? How can sinners receive eternal life?",
        "This essay gently follows the main line of the biblical Gospel: God the Creator, human sin, divine judgment, Christ the Savior, faith, repentance, and the new life given by the Holy Spirit.",
        "## Religion Cannot Give Final Assurance",
        "Many people look to tradition, morality, spiritual practices, or personal effort for peace. These things may give temporary comfort, but they cannot remove guilt or make a sinner righteous before God. The Gospel asks us honestly: Can what I am trusting truly save me before the living God?",
        "## God Is Holy, and We Are Sinners",
        "Scripture reveals God as the holy, good, and righteous Creator. It also reveals that human beings have turned from him and chosen their own way. Sin is not a small mistake or a weakness to be excused. It is rebellion against the God who made us and deserves our love.",
        "## The Cross Is God’s Way of Salvation",
        "God did not ignore sin. In love, he sent his Son, Jesus Christ, to bear the punishment sinners deserved and to fulfill perfect righteousness. At the cross, God’s justice and mercy meet. Through Christ’s death and resurrection, forgiveness and new life are opened to all who believe.",
        "## Faith and Repentance Are Gifts of Grace",
        "The Gospel does not ask us to purchase salvation with our goodness. It calls us to trust Christ and turn from sin. Faith is resting in Christ, and repentance is turning from the old way back to God. Both are not achievements we boast in, but gracious works of God in the heart.",
        "## Hear the Good News Today",
        "The Gospel is not only the first lesson for new believers. It is the life-giving message Christians must hear again and again. Look away from your own goodness and look to Christ. Look beyond guilt to the cross, beyond fear to the risen Lord. The Gospel is God’s clear and tender invitation to sinners."
      ])
    },
    {
      ...commonMeta,
      id: -322,
      language: "en",
      slug: "article-justification-and-regeneration",
      title: "Justification and Regeneration",
      author_name: "Yongjin Choi",
      translation_notice: "AI translation / summary based on the Korean text",
      summary: "Salvation is more than forgiveness. In Christ, God declares sinners righteous, and by the Holy Spirit he gives them new life so that they begin to love him.",
      body: body([
        "Salvation is more than forgiveness. In Christ, God declares sinners righteous, and by the Holy Spirit he gives them new life so that they begin to love him. Justification and regeneration are distinct works of grace, but they are never separated in the salvation God gives.",
        "This essay explains how sinners can be accepted before God and how those accepted by grace begin to live with a new heart, a new direction, and a new love for God.",
        "## Love and Justice Meet in Christ",
        "Some may ask: If God is loving, why does he not simply forgive everyone? The answer is that God is both loving and just. Sin is real, and its guilt must be dealt with. God saves sinners not by ignoring justice, but by satisfying justice through Christ.",
        "## Justification: God Declares the Sinner Righteous",
        "Justification means that God forgives the sins of those who believe in Christ and counts Christ’s righteousness as theirs. Our guilt was placed on Christ, and his righteousness is counted to us. Therefore the believer’s assurance does not rest on personal improvement, but on the finished work of Christ.",
        "## Faith Receives Christ with Empty Hands",
        "Faith is not another work we offer to God. It is the empty hand that receives Christ. Saving faith knows who Jesus is, trusts God’s promise, and rests in Christ rather than in self. True faith bears fruit in repentance and obedience, but those fruits are evidence, not the foundation of salvation.",
        "## Regeneration: New Life from Above",
        "Regeneration is the work of the Holy Spirit giving life to those who were spiritually dead. We cannot create a heart that loves God by our own strength. When the Spirit renews the heart, the sinner begins to see the beauty of Christ, hate sin, and listen to the Word of God.",
        "## All Glory Belongs to God",
        "Justification changes our status; regeneration renews our life. God both declares believers righteous and makes them new. Therefore there is no room for boasting. The God who justifies is the God who gives new birth. From beginning to end, salvation is grace, and all glory belongs to God."
      ])
    },
    {
      ...commonMeta,
      id: -323,
      language: "en",
      slug: "article-what-is-reformed-faith",
      title: "What Is Reformed Faith?",
      author_name: "Yongjin Choi",
      translation_notice: "AI translation / summary based on the Korean text",
      summary: "Reformed faith is not the exaltation of one person or denomination. It is a faith that continually brings doctrine, worship, and life back under the authority of God’s Word.",
      body: body([
        "Reformed faith is not the exaltation of one person or denomination. It is a faith that continually brings doctrine, worship, and life back under the authority of God’s Word. At its center stand the glory of God, the greatness of grace, and the purpose for which human beings were created.",
        "This essay summarizes Reformed faith through the five solas, the doctrines of grace, covenant theology, God’s sovereignty and human responsibility, and a life lived for the glory of God.",
        "## Returning to Scripture",
        "Reformed faith begins by allowing Scripture to stand above our traditions, experiences, and preferences. The church and every believer must keep asking: Is what we believe, teach, and practice faithful to the Word of God?",
        "## Salvation Is Grace from Beginning to End",
        "The five solas give the Gospel its proper shape: Scripture alone, grace alone, faith alone, Christ alone, and glory to God alone. These confessions humble human pride and magnify Christ’s grace. Salvation is not a monument to our effort, but a gift that displays God’s mercy.",
        "## God’s Sovereignty Is Not Fatalism",
        "God’s sovereign grace does not make prayer, evangelism, or obedience meaningless. Rather, God uses these means in his wise plan. Because salvation belongs to the Lord, believers can proclaim the Gospel with confidence and pray with hope.",
        "## Reading the Bible as One Story of Grace",
        "Covenant theology helps us see Scripture not as scattered religious stories, but as one unfolding account of God saving his people in Christ. Creation, fall, promise, redemption, the church, and the final hope all belong to the one story of grace.",
        "## Doctrine Becoming Life",
        "Reformed faith should not make us proud. It should make us humble, prayerful, church-loving, obedient, and hopeful in suffering. The chief purpose of human life is to glorify God and enjoy him forever. When this truth reaches the heart, doctrine becomes worship."
      ])
    },
    {
      ...commonMeta,
      id: -324,
      language: "en",
      slug: "article-sanctification-and-mortification",
      title: "Sanctification and Mortification",
      author_name: "Yongjin Choi",
      translation_notice: "AI translation / summary based on the Korean text",
      summary: "The Christian life does not stop at the joy of forgiveness. Those who are saved are called to fight sin and grow in Christlikeness by the power of the Holy Spirit.",
      body: body([
        "The Christian life does not stop at the joy of forgiveness. Those who are saved are called to fight sin and grow in Christlikeness by the power of the Holy Spirit. This battle is not a fearful attempt to earn God’s acceptance; it is the walk of children who have already been accepted in Christ.",
        "This essay explains sanctification, the ongoing struggle with sin, the meaning of mortification, and the ordinary means of grace by which believers grow.",
        "## Sanctification Is Gracious Transformation",
        "In justification, God declares the believer righteous once for all. In sanctification, the Holy Spirit gradually changes the believer’s actual life. Justification is complete and unrepeatable; sanctification is progressive and often slow. Yet God does not abandon the work he has begun.",
        "## Why Believers Still Fight Sin",
        "Even after new birth, sinful desires and habits remain. So believers must not treat sin lightly, but they also must not despair when they see their weakness. The struggle against sin is not proof that God has rejected us; it is a sign that a new life has begun.",
        "## Mortification Means Refusing Sin’s Rule",
        "Mortification is the Spirit-empowered weakening of sinful desires, habits, and patterns so that we no longer obey sin as master. It is more than outward restraint. It is the turning of the heart’s loves and longings back toward Christ.",
        "## Use the Means of Grace",
        "There is no secret formula that removes all sin in a moment. Believers need the Word, prayer, worship, the sacraments, and the help of the church. We must name sin honestly, cut off paths of temptation, examine our desires by Scripture, and return to Christ quickly when we fall.",
        "## When You Fall, Return to Christ",
        "The path of holiness is not the path of people who never stumble. It is the path of those who repent and rise again by grace. Christ does not abandon weak believers who are fighting sin. Begin again today with small obedience, trusting the Spirit to make you more like Christ."
      ])
    },
    {
      ...commonMeta,
      id: -325,
      language: "en",
      slug: "article-mission-and-missionary",
      title: "Mission and Missionaries",
      author_name: "Yongjin Choi",
      translation_notice: "AI translation / summary based on the Korean text",
      summary: "Mission is not the work of a few special people in distant countries. God has entrusted the Gospel to the church, and every believer can share in that calling from where they are.",
      body: body([
        "Mission is not the work of a few special people in distant countries. God has entrusted the Gospel to the church, and every believer can share in that calling from where they are. A missionary is not a hero detached from the church, but a believer sent by the church and supported by the church’s shared responsibility.",
        "This essay reflects on the meaning of mission, the place of missionaries, the role of the local church, the participation of ordinary believers, and the opportunity God gives as the nations come near to us.",
        "## Mission Means Proclaiming the Gospel and Planting Churches",
        "Mission cannot be reduced to doing good activities, though mercy and service matter deeply. At the center of mission is the proclamation of the Gospel of Jesus Christ, the making of disciples through the Word, and the planting of churches that worship God. If the Gospel disappears, the heart of mission disappears.",
        "## A Missionary Is a Sent Believer",
        "A missionary is not a higher class of Christian. He or she is still a weak believer who needs grace. What is distinct is the calling and location: the church sends this believer across language and culture to proclaim Christ. Mission, therefore, is not the lonely project of an individual, but the shared calling of the church.",
        "## Every Believer Can Participate",
        "Some go, some send, some pray, some care, some give, and some bear witness to family, neighbors, coworkers, and nearby foreigners. Not everyone participates in the same way, but no believer should live outside God’s Gospel mission.",
        "## The Nations Are Near Us",
        "In today’s world, people from many languages and cultures already live near us. Migrants and foreigners are not merely strangers; they may be neighbors whom God has brought close. When they hear the Gospel and believe in Christ, they may become bridges of the Gospel back to their families and peoples.",
        "## The Church Is a Sending Community",
        "The church must prepare, send, care for, and share responsibility with missionaries. Even a small church can participate in mission. The measure of mission is not only numbers or money, but faithfulness to the Gospel and love for all nations. A church that waits for the day when every people worships God is a church learning to send."
      ])
    }
  ]
};
