import type { Language } from "./i18n";
import type { ResourceSummary } from "./resources";

const body = (paragraphs: string[]) => paragraphs.join("\n\n");

const commonMeta = {
  type: "article",
  status: "published" as const,
  audience: "all",
  published_at: "2026-07-30"
};

export const missionaryLayEssayResources: Record<Language, ResourceSummary[]> = {
  ko: [
    {
      ...commonMeta,
      id: -401,
      language: "ko",
      slug: "essay-faithfulness-over-proving-yourself",
      title: "성공보다 신실함",
      author_name: "최용진",
      summary: "우리는 자주 자신을 증명하며 살아갑니다. 그러나 복음은 우리의 가치가 성과나 인정이 아니라 예수 그리스도 안에서 이미 받은 하나님의 사랑에 있음을 보여 줍니다.",
      body: body([
        "우리는 자주 자신을 증명하며 살아갑니다. 학교에서는 성적으로, 회사에서는 실적으로, 교회에서는 맡은 일과 헌신으로, 가정에서는 책임감으로 자신이 괜찮은 사람이라는 것을 보여 주려 합니다. 누군가의 기대에 미치지 못하면 마음이 쉽게 흔들리고, 작은 실패에도 “나는 부족한 사람인가?”라는 생각이 올라옵니다.",
        "일터에서는 더 그렇습니다. 회사에서 인정받기 위해 더 늦게까지 일하고, 실수하지 않으려고 마음을 졸이며, 다른 사람보다 뒤처지지 않으려고 자신을 계속 몰아붙입니다. 좋은 평가를 받으면 잠시 안심하지만, 다음 평가와 다음 결과 앞에서 다시 불안해집니다. 사람의 마음은 성공을 붙잡고도 오래 쉬지 못합니다.",
        "그러나 복음은 우리에게 다른 정체성을 줍니다. 우리는 우리의 능력과 성과로 하나님 앞에 설 수 있는 사람이 아닙니다. 동시에 우리는 실패와 부족함 때문에 하나님께 버려진 사람도 아닙니다. 예수 그리스도 안에서 우리는 이미 하나님의 자녀입니다. 하나님은 우리를 그리스도 안에서 받으셨고, 사랑하시며, 기뻐하십니다.",
        "이 사실은 게으르게 살아도 된다는 뜻이 아닙니다. 오히려 우리를 더 자유롭게 신실하게 살게 합니다. 더 이상 인정받기 위해 일하는 사람이 아니라, 이미 받은 사랑 안에서 충성하는 사람이 되는 것입니다. 성공이 우리의 주인이 되지 않을 때, 우리는 맡겨진 자리에서 더 정직하고 더 담대하게 살아갈 수 있습니다.",
        "회사에서 눈에 띄는 성과가 없을 때도, 가정에서 아무도 알아주지 않는 일을 반복할 때도, 교회에서 작은 섬김을 조용히 감당할 때도 주님은 보십니다. 하나님은 세상의 박수만 보시는 분이 아닙니다. 사람들의 눈에 작아 보이는 순종도 하나님 앞에서는 귀합니다.",
        "그러므로 오늘 자신을 너무 몰아붙이지 않아도 됩니다. 당신의 가치는 오늘의 성과로 결정되지 않습니다. 당신의 이름은 이미 그리스도 안에서 하나님께 알려져 있습니다. 오늘 필요한 것은 완벽한 성공이 아니라, 하나님 앞에서의 작은 신실함입니다."
      ])
    },
    {
      ...commonMeta,
      id: -402,
      language: "ko",
      slug: "essay-first-love-as-direction",
      title: "처음 사랑은 감정이 아니라 방향입니다",
      author_name: "최용진",
      summary: "처음 사랑은 과거의 뜨거운 감정을 붙잡는 것이 아니라, 오늘 다시 주님께 마음의 방향을 돌리는 것입니다.",
      body: body([
        "신앙생활을 시작할 때 우리는 뜨거운 감정을 경험하기도 합니다. 예배가 새롭고, 말씀 한 구절이 마음 깊이 들어오고, 기도할 때 눈물이 나기도 합니다. 그때 우리는 주님을 사랑한다고 고백합니다. 그러나 시간이 지나면 감정은 잔잔해집니다. 예배가 익숙해지고, 말씀을 읽어도 예전만큼 큰 감동이 없고, 기도도 때로는 건조하게 느껴집니다.",
        "그럴 때 많은 사람이 걱정합니다. “내 믿음이 식은 것일까? 나는 처음 사랑을 잃어버린 것일까?” 물론 우리의 마음은 쉽게 식고, 주님보다 다른 것을 더 사랑할 때가 있습니다. 그러나 처음 사랑은 단순히 처음 느꼈던 감정의 강도로만 판단할 수 없습니다.",
        "처음 사랑은 마음의 방향입니다. 내가 어디를 향해 돌아서 있는가, 무엇을 가장 귀하게 여기며 살아가는가의 문제입니다. 감정이 뜨겁지 않은 날에도 주님께 다시 마음을 돌이키는 것, 넘어졌을 때 숨지 않고 주님께 나아가는 것, 바쁜 하루 속에서도 주님의 말씀 앞에 서려는 것, 그것이 사랑의 방향입니다.",
        "사랑은 항상 감정으로만 표현되지 않습니다. 피곤한 아침에도 가족을 위해 식사를 준비하는 것, 마음이 무거운 날에도 맡은 책임을 감당하는 것, 상처를 받았지만 다시 대화를 시작하는 것, 이런 일들이 사랑을 보여 줍니다. 신앙도 그렇습니다. 어떤 날은 뜨거운 찬양보다 조용한 순종이 더 깊은 사랑의 고백일 수 있습니다.",
        "그러므로 감정이 약해졌다고 해서 낙심하지 마십시오. 주님은 우리의 순간적인 감정만 보지 않으십니다. 주님은 우리의 마음이 다시 어디로 향하는지를 보십니다. 오늘도 주님께 돌아가십시오. 말씀 앞에 서고, 짧게라도 기도하고, 작은 순종을 시작하십시오.",
        "처음 사랑은 과거의 뜨거웠던 순간을 붙잡는 것이 아니라, 오늘 다시 주님께 방향을 돌리는 것입니다. 주님은 돌아오는 자를 꾸짖기보다 품으시는 분입니다. 우리의 사랑은 약하지만, 우리를 붙드시는 주님의 사랑은 변하지 않습니다."
      ])
    },
    {
      ...commonMeta,
      id: -403,
      language: "ko",
      slug: "essay-prayer-as-fellowship",
      title: "기도는 하나님을 설득하는 시간이 아닙니다",
      author_name: "최용진",
      summary: "기도는 하나님을 움직이기 위한 기술이 아니라, 사랑하시는 아버지 앞에 머물며 마음을 열어 드리는 은혜의 자리입니다.",
      body: body([
        "기도를 생각할 때 우리는 먼저 응답을 떠올립니다. 필요한 것을 말하고, 문제를 해결해 달라고 구하고, 원하는 일이 이루어지기를 바랍니다. 물론 하나님은 우리의 필요를 아시고, 자녀의 간구를 들으시는 아버지이십니다. 우리는 담대히 구할 수 있습니다.",
        "그러나 기도는 단지 하나님을 설득하는 시간이 아닙니다. 기도는 하나님과의 인격적인 대화이며 교제입니다. 우리가 기도할 때 하나님은 멀리 계신 힘이 아니라 우리를 아시는 아버지로 우리를 맞아 주십니다. 우리는 기도 속에서 하나님께 말하고, 동시에 하나님의 성품과 뜻 앞에 우리의 마음을 내려놓는 법을 배웁니다.",
        "때로 우리는 기도를 거래처럼 생각합니다. 더 오래 기도하면 하나님이 더 빨리 응답하실 것 같고, 더 간절히 말하면 하나님이 마음을 바꾸실 것처럼 느낍니다. 그러나 성경의 기도는 그런 방식이 아닙니다. 기도는 우리가 하나님을 움직이기 위해 쌓아 올리는 공로가 아닙니다. 오히려 기도는 하나님께서 우리를 붙드시도록 자신을 여는 시간입니다.",
        "자녀가 아버지에게 말할 때 모든 말을 완벽하게 정리해서 말하지 않아도 됩니다. 울면서 말하기도 하고, 더듬거리며 말하기도 하고, 때로는 아무 말 없이 곁에 앉아 있기도 합니다. 기도도 그렇습니다. 하나님은 우리의 문장보다 마음을 아십니다. 우리의 말이 부족해도, 하나님은 우리의 탄식을 들으십니다.",
        "기도는 상황을 바꾸기도 하지만, 그보다 먼저 우리를 하나님께로 돌이킵니다. 염려하던 마음이 하나님의 손에 맡겨지고, 분노하던 마음이 주님의 긍휼 앞에서 누그러지고, 두려워하던 마음이 하나님의 신실하심을 다시 붙잡습니다.",
        "그러므로 기도할 때 너무 잘하려고 애쓰지 않아도 됩니다. 하나님께 나아가십시오. 감사도 말하고, 두려움도 말하고, 죄도 고백하고, 이해되지 않는 마음도 주님께 가져가십시오. 기도는 하나님을 설득하는 기술이 아니라, 사랑하시는 아버지와 함께 머무는 은혜의 자리입니다."
      ])
    },
    {
      ...commonMeta,
      id: -404,
      language: "ko",
      slug: "essay-living-between-sin-and-mercy",
      title: "죄와 긍휼 사이에서 사는 사람",
      author_name: "최용진",
      summary: "죄를 부인하지 말고, 동시에 절망하지도 마십시오. 그리스도 안에서 하나님의 긍휼은 우리의 죄보다 깊습니다.",
      body: body([
        "우리는 죄를 너무 가볍게 생각할 때가 있습니다. 단지 성격의 문제, 습관의 문제, 조금 부족한 도덕성의 문제로만 여깁니다. 그러나 성경은 죄를 하나님과의 관계 안에서 말합니다. 죄는 단지 실수나 약점이 아니라, 하나님을 사랑하고 의지해야 할 사람이 하나님을 떠나 자기 뜻대로 살려는 마음입니다.",
        "그래서 죄는 우리를 하나님 앞에서 숨게 만듭니다. 잘못을 인정하기보다 변명하게 하고, 책임을 회피하게 하며, 다른 사람의 잘못을 더 크게 보게 합니다. 우리는 누군가에게 상처를 주고도 “나도 힘들었어”라고 말하며 마음을 닫아 버릴 때가 있습니다. 그러나 복음은 우리를 숨는 자리에서 불러냅니다.",
        "하나님의 긍휼은 죄를 대충 넘어가는 부드러움이 아닙니다. 하나님은 죄를 죄라고 부르십니다. 그러나 그 죄인을 버리지 않으시고 그리스도 안에서 용서하시며 다시 세우십니다. 십자가는 죄가 얼마나 심각한지를 보여 주며, 동시에 하나님의 긍휼이 얼마나 깊은지를 보여 줍니다.",
        "우리는 날마다 이 긍휼을 구해야 합니다. 한 번 용서받았다는 사실만 기억하는 것이 아니라, 오늘도 주님의 긍휼이 필요한 사람으로 살아야 합니다. 자신의 마음속 교만, 무관심, 미움, 자기중심성을 주님 앞에 가져가며 “주님, 나를 불쌍히 여겨 주십시오”라고 구해야 합니다.",
        "그런 사람이 다른 사람에게도 긍휼을 베울 수 있습니다. 자신이 용서받은 사람임을 아는 사람은 다른 사람의 연약함을 무조건 정죄하기보다, 진실하게 권면하면서도 오래 참는 법을 배웁니다. 긍휼을 받은 사람이 긍휼을 흘려보낼 수 있습니다.",
        "오늘도 우리는 죄와 긍휼 사이에서 삽니다. 죄를 부인하지 말고, 동시에 절망하지도 마십시오. 그리스도께 나아가십시오. 하나님은 회개하는 자를 외면하지 않으십니다. 그분의 긍휼은 우리의 죄보다 깊고, 그분의 은혜는 우리를 다시 순종의 길로 이끄십니다."
      ])
    },
    {
      ...commonMeta,
      id: -405,
      language: "ko",
      slug: "essay-home-first-place-of-love",
      title: "가정은 사랑을 실천하는 최우선 자리입니다",
      author_name: "최용진",
      summary: "가정은 우리의 연약함이 가장 많이 드러나는 곳이지만, 동시에 복음의 은혜가 가장 실제적으로 나타나야 할 자리입니다.",
      body: body([
        "우리는 신앙이 있고, 교회에서 열심히 섬기며, 사람들 앞에서는 친절하고 헌신적인 그리스도인으로 보일 수 있습니다. 그러나 정작 가장 가까운 가족에게는 전혀 다른 모습으로 비칠 때가 있습니다. 밖에서는 부드럽지만 집에서는 쉽게 화를 내고, 교회에서는 오래 참지만 배우자나 자녀에게는 차갑게 말하고, 다른 사람의 아픔에는 공감하면서도 가족의 마음은 지나쳐 버릴 때가 있습니다.",
        "가정은 사랑을 실천하는 최우선 자리입니다. 왜냐하면 가정은 우리의 가장 꾸며지지 않은 모습이 드러나는 곳이기 때문입니다. 그래서 가정은 어렵습니다. 동시에 가정은 복음이 가장 실제적으로 드러나야 할 자리입니다.",
        "우리는 완벽한 부모나 완벽한 배우자가 될 수 없습니다. 그러나 하나님을 의지하는 부모, 하나님 앞에서 회개할 줄 아는 배우자는 될 수 있습니다. 자녀에게 늘 옳은 모습만 보여 주려 하기보다, 때로는 “아빠가, 엄마가 잘못했어. 미안해. 하나님께도 회개하고 너에게도 용서를 구하고 싶어”라고 말할 수 있어야 합니다. 그런 고백은 권위를 무너뜨리는 것이 아니라, 복음 안에서 세워지는 겸손을 보여 줍니다.",
        "배우자에게도 마찬가지입니다. 특히 아직 믿지 않는 배우자와 함께 사는 사람은 말로 신앙을 설명하기 전에 삶으로 복음을 보여 주어야 할 때가 많습니다. 모든 것을 한 번에 바꿀 수는 없지만, 정직한 사과와 조용한 섬김, 오래 참는 태도는 복음의 향기를 전할 수 있습니다.",
        "가정에서의 사랑은 큰 사건보다 작은 반복 속에서 자랍니다. 말을 부드럽게 하는 것, 피곤해도 한 번 더 들어 주는 것, 상대의 수고를 알아주는 것, 먼저 손을 내미는 것, 이런 작은 순종들이 가정을 복음의 자리로 만들어 갑니다.",
        "가정은 우리의 연약함이 가장 많이 드러나는 곳이지만, 동시에 은혜가 가장 자주 필요한 곳입니다. 그러므로 오늘 가족 앞에서 다시 시작하십시오. 완벽한 사람이 되려고 하기보다, 하나님의 은혜를 의지하는 사람으로 서십시오. 주님은 우리의 가정에도 복음의 빛을 비추기 원하십니다."
      ])
    },
    {
      ...commonMeta,
      id: -406,
      language: "ko",
      slug: "essay-grace-for-weary-parents",
      title: "부모의 마음이 지치는 날에도",
      author_name: "최용진",
      published_at: "2026-08-03",
      summary: "부모가 자녀를 사랑하기에 지치고 무너지는 날에도, 하나님은 자녀의 마음뿐 아니라 부모의 마음까지 은혜로 붙드시고 다시 사랑하게 하십니다.",
      body: body([
        "아침에는 오늘만큼은 아이에게 화내지 않겠다고 다짐합니다. 그러나 같은 말을 여러 번 반복해도 아이가 듣지 않고, 해야 할 일은 쌓여 가며, 예상하지 못한 문제까지 겹치면 어느새 목소리가 높아집니다.",
        "조금 전까지 사랑한다고 말했던 아이에게 날카로운 말을 하고, 아이가 잠든 뒤에는 마음이 무거워집니다.",
        "“나는 왜 또 그랬을까?”\n“내가 정말 좋은 부모가 될 수 있을까?”\n“내 아이가 잘못되는 것은 아닐까?”",
        "부모의 마음이 무너지는 순간은 대개 자녀를 사랑하지 않아서가 아니라, 너무 사랑하기 때문에 찾아옵니다. 잘 키우고 싶은 마음이 크기에 작은 변화에도 조급해지고, 다른 가정과 비교하며, 눈앞의 결과로 자신을 평가하게 됩니다.",
        "그러나 자녀의 모든 결과를 부모가 책임질 수는 없습니다.",
        "부모에게 책임이 없다는 뜻은 아닙니다. 부모는 자녀를 사랑하고, 가르치고, 잘못을 바로잡으며, 말씀과 기도로 양육해야 합니다. 하지만 자녀의 마음을 강제로 변화시키거나 믿음을 만들어 낼 수는 없습니다. 마음을 새롭게 하시고 믿음을 주시는 분은 하나님이십니다.",
        "부모는 자녀의 인생을 통제하는 사람이 아니라, 하나님께서 맡기신 한 생명을 신실하게 돌보는 사람입니다.",
        "그래서 부모에게 필요한 것은 모든 문제를 즉시 해결하는 능력이 아니라, 오늘 해야 할 순종을 포기하지 않는 믿음입니다. 같은 말을 다시 가르치고, 잘못을 바로잡고, 아이의 이야기를 들어 주며, 함께 기도하는 작은 일들이 부모의 사명입니다.",
        "그 순종은 때로 매우 평범해 보입니다.",
        "아이를 깨우고, 밥을 먹이고, 학교에 보내고, 숙제를 살피며, 밤이 되면 이불을 덮어 주는 일입니다. 같은 질문에 다시 대답하고, 실망했어도 다시 손을 내미는 일입니다.",
        "부모는 이런 작은 일들이 아무 변화도 만들지 못한다고 느낄 수 있습니다. 그러나 하나님은 부모가 작게 여기는 순종도 사용하십니다. 우리가 보지 못하는 시간에도 하나님은 자녀의 마음과 삶을 다루고 계십니다.",
        "부모도 실수합니다.",
        "피곤해서 화를 내기도 하고, 자녀의 말을 끝까지 듣지 않기도 하며, 사랑보다 성적과 결과를 앞세울 때도 있습니다. 그럴 때 필요한 것은 자신의 잘못을 감추거나 부모의 권위 뒤에 숨는 일이 아닙니다.",
        "자녀의 방문 앞에서 망설이고 있다면, 문을 두드리고 먼저 말할 수 있습니다.",
        "“아까 엄마가 너무 심하게 말했어. 미안해.”\n“아빠가 네 이야기를 제대로 듣지 않았어. 용서해 줘.”",
        "부모가 자녀에게 사과하는 것은 권위를 잃는 일이 아닙니다. 오히려 죄를 인정하고 용서를 구하며 다시 관계를 세우는 복음의 모습을 보여 주는 일입니다.",
        "우리는 잘못했을 때 죄책감 속에 계속 머물 필요가 없습니다. 예수 그리스도께서 우리의 죄를 대신하여 십자가에서 형벌을 받으셨기 때문입니다. 부모가 죄 가운데 넘어졌을 때에도 그리스도의 십자가는 충분합니다.",
        "우리의 죄는 용서받을 수 있고, 우리의 연약함은 하나님의 은혜 안에서 다시 세워질 수 있습니다.",
        "그러므로 실패한 날은 부모로서 모든 것이 끝난 날이 아닙니다. 회개하고, 용서를 구하고, 다시 사랑할 수 있는 날입니다.",
        "자녀는 부모의 모든 가르침을 기억하지 못할 수 있습니다. 그러나 부모가 잘못을 인정하고, 용서하며, 다시 하나님께 나아가는 모습은 오래 기억할 수 있습니다. 완벽한 모습을 통해서가 아니라, 은혜를 필요로 하는 부모의 모습을 통해 복음을 배우기도 합니다.",
        "다른 가정과 자신을 비교하지 마십시오.",
        "다른 집 아이가 더 순종적으로 보이고, 다른 부모가 더 지혜롭고 여유 있어 보일 수 있습니다. 그러나 우리는 그 가정의 모든 사정을 알지 못합니다. 하나님께서는 모든 가정을 같은 방법과 같은 속도로 이끌지 않으십니다.",
        "지금 내게 맡겨진 자녀를 바라보고, 오늘 내가 감당해야 할 사랑과 훈계와 기도에 충실하면 됩니다.",
        "오늘 하루가 또 엉망이 될 수도 있습니다. 아이가 말을 듣지 않을 수도 있고, 부모 역시 다시 실수할 수 있습니다. 그러나 하나님의 일하심은 부모의 감정이나 하루의 성패에 달려 있지 않습니다.",
        "아이를 위해 드린 기도와 사랑으로 다시 내민 손은 헛되지 않습니다.",
        "하나님은 자녀만 돌보시는 것이 아니라, 부모의 마음도 함께 다루고 계십니다. 자녀를 양육하는 동안 부모 자신도 인내와 겸손, 회개와 믿음을 배우게 하십니다.",
        "그러니 오늘 모든 것을 잘해 내지 못했다고 해서 자신을 포기하지 마십시오.",
        "자녀를 가장 깊이 사랑하시는 분은 부모보다 하나님이십니다. 부모의 손은 부족할 수 있지만, 하나님의 손은 부족하지 않습니다.",
        "오늘 필요한 은혜는 오늘 주어질 것입니다.",
        "그리고 내일도 하나님은 다시 필요한 은혜를 주실 것입니다."
      ])
    }
  ],
  th: [
    {
      ...commonMeta,
      id: -411,
      language: "th",
      slug: "essay-faithfulness-over-proving-yourself",
      title: "ความสัตย์ซื่อสำคัญกว่าการพิสูจน์ตัวเอง",
      author_name: "Yongjin Choi",
      summary: "ข่าวประเสริฐบอกเราว่า คุณค่าของเราไม่ได้อยู่ที่ผลงานหรือคำชม แต่เราได้รับการต้อนรับในพระคริสต์แล้ว จึงสามารถสัตย์ซื่อในสิ่งเล็ก ๆ ได้อย่างเป็นอิสระ",
      body: body([
        "เรามักใช้ชีวิตเหมือนต้องพิสูจน์ตัวเองอยู่เสมอ ตอนเป็นนักเรียน เราอยากพิสูจน์ตัวเองด้วยผลการเรียน เมื่อทำงาน เราอยากพิสูจน์ตัวเองด้วยผลงาน ในคริสตจักร เราอยากพิสูจน์ตัวเองด้วยการรับใช้ และในครอบครัว เราก็อยากพิสูจน์ว่าเราเป็นคนที่รับผิดชอบและมีคุณค่า",
        "ในที่ทำงาน ความรู้สึกนี้มักชัดเจนมาก เรากลัวทำผิด กลัวถูกมองว่าไม่เก่ง กลัวถูกเปรียบเทียบกับคนอื่น จึงพยายามทำงานให้มากขึ้น เร็วขึ้น และดีขึ้น บางครั้งเมื่อได้รับคำชม เราก็สบายใจได้เพียงไม่นาน เพราะไม่นานเราก็ต้องเจอกับงานชิ้นใหม่ การประเมินครั้งใหม่ และความกังวลครั้งใหม่อีก",
        "แต่ข่าวประเสริฐให้ตัวตนใหม่แก่เรา เราไม่ได้ยืนต่อหน้าพระเจ้าด้วยความสามารถหรือความสำเร็จของเรา และเราก็ไม่ได้ถูกพระเจ้าทอดทิ้งเพราะความล้มเหลวหรือความอ่อนแอของเรา ในพระเยซูคริสต์ เราเป็นบุตรของพระเจ้าแล้ว พระเจ้าทรงรับเราไว้ในพระคริสต์ ทรงรักเรา และทรงพอพระทัยในเราเพราะพระบุตรของพระองค์",
        "ความจริงนี้ไม่ได้ทำให้เราเกียจคร้าน แต่ทำให้เราเป็นอิสระที่จะสัตย์ซื่อมากขึ้น เราไม่ต้องทำงานเพื่อพิสูจน์ว่าเรามีคุณค่า แต่เราทำงานด้วยใจขอบพระคุณ เพราะเราได้รับความรักแล้ว เมื่อความสำเร็จไม่ใช่เจ้านายของเรา เราจึงสามารถทำสิ่งที่ได้รับมอบหมายด้วยความซื่อสัตย์และความกล้าหาญมากขึ้น",
        "แม้ไม่มีใครเห็นความพยายามของเราในที่ทำงาน แม้ไม่มีใครชื่นชมงานเล็ก ๆ ในบ้าน หรือแม้การรับใช้ในคริสตจักรดูเหมือนเป็นงานที่ไม่มีใครสังเกตเห็น พระเจ้าทรงเห็น พระองค์ไม่ได้มองเพียงเสียงปรบมือของมนุษย์ แต่ทรงเห็นความสัตย์ซื่อเล็ก ๆ ที่ถวายแด่พระองค์",
        "ดังนั้น วันนี้อย่ากดดันตัวเองจนเกินไป คุณค่าของคุณไม่ได้ถูกกำหนดด้วยผลงานของวันนี้ ชื่อของคุณเป็นที่รู้จักต่อพระเจ้าแล้วในพระคริสต์ สิ่งที่เราต้องการในวันนี้ไม่ใช่ความสำเร็จที่สมบูรณ์แบบ แต่คือความสัตย์ซื่อเล็ก ๆ ต่อพระเจ้าผู้ทรงสัตย์ซื่อ"
      ])
    },
    {
      ...commonMeta,
      id: -412,
      language: "th",
      slug: "essay-first-love-as-direction",
      title: "ความรักแรกไม่ใช่เพียงความรู้สึก แต่คือทิศทางของหัวใจ",
      author_name: "Yongjin Choi",
      summary: "ความรักแรกไม่ใช่การย้อนกลับไปหาความรู้สึกเดิม แต่คือการหันหัวใจกลับมาหาพระเจ้าอีกครั้งในวันนี้",
      body: body([
        "เมื่อเราเริ่มเชื่อพระเจ้าใหม่ ๆ หลายคนเคยมีความรู้สึกที่สดใหม่มาก การนมัสการรู้สึกมีชีวิต พระวจนะข้อหนึ่งแตะต้องหัวใจอย่างลึกซึ้ง และบางครั้งเราก็ร้องไห้ในคำอธิษฐาน ในเวลานั้นเราสารภาพอย่างจริงใจว่าเรารักพระเจ้า",
        "แต่เมื่อเวลาผ่านไป ความรู้สึกมักเปลี่ยนไป การนมัสการเริ่มคุ้นเคย การอ่านพระคัมภีร์อาจไม่ทำให้เรารู้สึกตื่นเต้นเหมือนเดิม และการอธิษฐานบางวันก็ดูแห้งแล้ง เราอาจเริ่มถามตัวเองว่า “ความเชื่อของฉันเย็นลงหรือเปล่า? ฉันสูญเสียความรักแรกไปแล้วหรือ?”",
        "แน่นอน หัวใจของเราสามารถเย็นลงได้ และเราสามารถรักสิ่งอื่นมากกว่าพระเจ้าได้จริง แต่ความรักแรกไม่ได้หมายถึงความรู้สึกแรงกล้าเหมือนวันแรกเท่านั้น ความรักแรกคือทิศทางของหัวใจ คำถามคือ วันนี้หัวใจของเราหันไปทางไหน และเรากำลังให้สิ่งใดเป็นสิ่งสำคัญที่สุดในชีวิต",
        "แม้ในวันที่ความรู้สึกไม่ร้อนแรง การหันกลับมาหาพระเจ้าอีกครั้งคือความรัก การไม่ซ่อนตัวเมื่อทำผิด แต่กลับมาสารภาพต่อพระองค์คือความรัก การยืนต่อหน้าพระวจนะในวันที่ยุ่งและเหนื่อยคือความรัก การเชื่อฟังเล็ก ๆ ในวันที่ไม่มีใครเห็นก็อาจเป็นคำสารภาพรักที่ลึกมากเช่นกัน",
        "ความรักไม่ได้แสดงออกด้วยความรู้สึกเท่านั้น คนเป็นพ่อแม่อาจตื่นขึ้นมาดูแลลูกทั้งที่เหนื่อย คนเป็นสามีภรรยาอาจเริ่มพูดคุยกันอีกครั้งทั้งที่เคยเจ็บปวด คนหนึ่งอาจรับผิดชอบงานเล็ก ๆ ซ้ำ ๆ โดยไม่มีใครชม สิ่งเหล่านี้คือความรักที่ลงมือทำ ความเชื่อก็เช่นเดียวกัน",
        "ดังนั้น อย่าท้อใจเพียงเพราะความรู้สึกไม่เหมือนเดิม พระเจ้าไม่ได้ทอดพระเนตรเพียงอารมณ์ชั่วคราวของเรา พระองค์ทรงทอดพระเนตรว่าหัวใจของเรากำลังหันกลับมาหาพระองค์หรือไม่ วันนี้จงกลับมาหาพระองค์ อ่านพระวจนะ อธิษฐานสั้น ๆ และเริ่มเชื่อฟังในสิ่งเล็ก ๆ",
        "ความรักแรกไม่ใช่การพยายามย้อนกลับไปจับความรู้สึกในอดีต แต่คือการหันหัวใจกลับมาหาพระเจ้าในวันนี้ ความรักของเรามักอ่อนแอ แต่ความรักของพระเจ้าที่ทรงยึดเราไว้นั้นไม่เคยเปลี่ยนแปลง"
      ])
    },
    {
      ...commonMeta,
      id: -413,
      language: "th",
      slug: "essay-prayer-as-fellowship",
      title: "การอธิษฐานไม่ใช่การโน้มน้าวพระเจ้า แต่คือการสนทนากับพระบิดา",
      author_name: "Yongjin Choi",
      summary: "การอธิษฐานแบบคริสเตียนไม่ใช่การสะสมบุญหรือการแลกเปลี่ยนกับพระเจ้า แต่คือการเข้าหาพระบิดาผู้ทรงรักเราในพระคริสต์",
      body: body([
        "เมื่อพูดถึงการอธิษฐาน เรามักคิดถึงคำตอบก่อน เรามีเรื่องที่ต้องการ มีปัญหาที่อยากให้แก้ไข มีความกลัวที่อยากให้หมดไป และมีความปรารถนาที่อยากให้เกิดขึ้น พระเจ้าทรงเป็นพระบิดาผู้ฟังคำอธิษฐานของบุตรของพระองค์ เราจึงสามารถทูลขอต่อพระองค์ได้อย่างกล้าหาญ",
        "แต่การอธิษฐานไม่ใช่การโน้มน้าวพระเจ้า และไม่ใช่วิธีสะสมความดีเพื่อแลกกับคำตอบจากพระองค์ ในสังคมไทย หลายคนคุ้นเคยกับความคิดเรื่องการสวด การทำบุญ หรือการสะสมบุญเพื่อให้ชีวิตดีขึ้น ได้รับพร หรือได้รับสิ่งที่ปรารถนา แต่การอธิษฐานแบบคริสเตียนแตกต่างจากสิ่งนั้นอย่างลึกซึ้ง",
        "การอธิษฐานคือการสนทนากับพระบิดาผู้ทรงรักเรา เราไม่ได้พยายามทำให้พระเจ้าประทับใจด้วยถ้อยคำที่สวยงาม หรือทำให้พระองค์ใจอ่อนด้วยความพยายามของเรา แต่เราเข้ามาหาพระองค์ในฐานะลูกที่ได้รับการต้อนรับในพระคริสต์ เราทูลความจริงต่อพระองค์ และเรียนรู้ที่จะวางใจในพระทัยและน้ำพระทัยของพระองค์",
        "ลูกไม่จำเป็นต้องเรียบเรียงคำพูดให้สมบูรณ์แบบก่อนจะพูดกับพ่อ บางครั้งลูกพูดทั้งน้ำตา บางครั้งพูดไม่เป็นคำ บางครั้งเพียงนั่งอยู่ใกล้ ๆ ก็เพียงพอ การอธิษฐานก็เช่นกัน พระเจ้าทรงรู้จักหัวใจของเราก่อนที่เราจะพูดครบถ้วนเสียอีก พระองค์ทรงได้ยินแม้เสียงถอนใจของเรา",
        "การอธิษฐานอาจเปลี่ยนสถานการณ์ แต่บ่อยครั้งก่อนหน้านั้น พระเจ้าทรงเปลี่ยนหัวใจของเรา ความกังวลค่อย ๆ ถูกวางไว้ในพระหัตถ์ของพระองค์ ความโกรธค่อย ๆ อ่อนลงต่อหน้าพระเมตตาของพระองค์ และความกลัวค่อย ๆ เรียนรู้ที่จะพึ่งพาความสัตย์ซื่อของพระองค์",
        "ดังนั้น อย่าคิดว่าคุณต้องอธิษฐานให้เก่งก่อนจึงจะมาหาพระเจ้าได้ จงมาหาพระองค์อย่างจริงใจ ขอบพระคุณพระองค์ ทูลความกลัวของคุณ สารภาพบาปของคุณ และนำความสับสนของคุณมาวางต่อพระองค์ การอธิษฐานไม่ใช่เทคนิคในการโน้มน้าวพระเจ้า แต่คือที่แห่งพระคุณซึ่งเราพำนักอยู่กับพระบิดาผู้ทรงรักเรา"
      ])
    },
    {
      ...commonMeta,
      id: -414,
      language: "th",
      slug: "essay-living-between-sin-and-mercy",
      title: "คนที่ได้รับพระเมตตาทุกวัน ย่อมเรียนรู้ที่จะเมตตาผู้อื่น",
      author_name: "Yongjin Choi",
      summary: "พระเมตตาของพระเจ้าไม่ใช่เพียงความใจดีแบบมนุษย์ แต่คือพระคุณที่เผชิญบาปอย่างจริงจังและยกคนบาปขึ้นในพระคริสต์",
      body: body([
        "เรามักมองบาปเบาเกินไป บางครั้งเราคิดว่าบาปเป็นเพียงนิสัยที่ไม่ดี เป็นข้อบกพร่องทางศีลธรรม หรือเป็นความอ่อนแอของบุคลิกภาพ แต่พระคัมภีร์พูดถึงบาปในความสัมพันธ์กับพระเจ้า บาปไม่ใช่เพียงความผิดพลาดต่อมนุษย์ แต่คือหัวใจที่หันออกจากพระเจ้าผู้ทรงสร้างและทรงรักเรา",
        "เมื่อมองบาปเช่นนี้ เราจะเห็นว่าบาปลึกกว่าการกระทำภายนอก มันทำให้เราซ่อนตัวจากพระเจ้า ทำให้เราแก้ตัวแทนที่จะสารภาพ ทำให้เราโยนความผิดให้ผู้อื่น และทำให้เรามองเห็นความผิดของคนอื่นชัดกว่าความผิดของตัวเอง",
        "ในวัฒนธรรมไทย เราคุ้นเคยกับคำว่าเมตตาและความกรุณา หลายครั้งความเมตตาถูกเข้าใจว่าเป็นความใจดี ความอ่อนโยน หรือความสงสารแบบมนุษย์ ซึ่งเป็นสิ่งที่มีคุณค่า แต่พระเมตตาของพระเจ้าในพระคัมภีร์ลึกกว่านั้น พระเจ้าไม่ได้เพียงสงสารเรา พระองค์ทรงเผชิญกับบาปของเราอย่างจริงจัง และทรงประทานพระบุตรของพระองค์เพื่อช่วยคนบาปให้กลับคืนดีต่อพระองค์",
        "กางเขนจึงแสดงให้เห็นสองสิ่งพร้อมกัน คือบาปของเราร้ายแรงเพียงใด และพระเมตตาของพระเจ้าลึกเพียงใด พระเจ้าไม่ได้มองข้ามบาปอย่างง่าย ๆ แต่ในพระคริสต์ พระองค์ทรงให้อภัย ยกเราให้ลุกขึ้น และนำเรากลับสู่ทางแห่งการเชื่อฟัง",
        "เราจึงต้องแสวงหาพระเมตตานี้ทุกวัน ไม่ใช่เพียงจดจำว่าเราเคยได้รับการอภัยครั้งหนึ่ง แต่ต้องดำเนินชีวิตในฐานะคนที่ยังต้องการพระเมตตาของพระเจ้าในวันนี้ เรานำความหยิ่ง ความเฉยเมย ความโกรธ ความเห็นแก่ตัว และความไม่รักของเรามาต่อพระองค์ แล้วทูลว่า “พระเจ้า ขอทรงเมตตาข้าพระองค์”",
        "คนที่ได้รับพระเมตตาเช่นนี้ ย่อมเรียนรู้ที่จะเมตตาผู้อื่น คนที่รู้ว่าตนเองได้รับการอภัย จะไม่รีบตัดสินคนอื่นอย่างแข็งกระด้าง แต่จะเรียนรู้ที่จะตักเตือนด้วยความจริง อดทนด้วยความรัก และให้อภัยด้วยหัวใจที่จำได้ว่าตนเองก็เป็นคนที่พระเจ้าทรงเมตตา",
        "วันนี้เราอยู่ระหว่างบาปและพระเมตตา อย่าปฏิเสธบาปของตนเอง แต่ก็อย่าสิ้นหวัง จงมาหาพระคริสต์ พระเมตตาของพระองค์ลึกกว่าบาปของเรา และพระคุณของพระองค์สามารถนำเราให้กลับมาเดินในทางของพระเจ้าได้อีกครั้ง"
      ])
    },
    {
      ...commonMeta,
      id: -415,
      language: "th",
      slug: "essay-home-first-place-of-love",
      title: "ครอบครัวคือที่แรกที่เราฝึกใช้ความรัก",
      author_name: "Yongjin Choi",
      summary: "บ้านเป็นที่ที่ความอ่อนแอของเราปรากฏชัดที่สุด และเป็นที่ที่ข่าวประเสริฐควรปรากฏอย่างจริงที่สุดผ่านการถ่อมใจ การขอโทษ และความรักที่อดทน",
      body: body([
        "เราอาจเป็นคริสเตียนที่มีความเชื่อ เข้าคริสตจักรอย่างสม่ำเสมอ รับใช้อย่างกระตือรือร้น และดูอ่อนโยนต่อหน้าคนอื่น แต่บางครั้งคนที่อยู่ใกล้เราที่สุดกลับเห็นอีกด้านหนึ่งของเรา เราอาจพูดดีนอกบ้าน แต่พูดแรงในบ้าน เราอาจอดทนกับคนในคริสตจักร แต่หมดความอดทนกับคู่สมรสหรือลูกอย่างรวดเร็ว เราอาจฟังความเจ็บปวดของคนอื่น แต่กลับมองข้ามหัวใจของคนในครอบครัว",
        "ครอบครัวคือที่แรกที่เราฝึกใช้ความรัก เพราะที่บ้านคือที่ที่ตัวตนของเราปรากฏอย่างไม่ปิดบัง ด้วยเหตุนี้ ครอบครัวจึงเป็นพื้นที่ยาก แต่ก็เป็นพื้นที่ที่ข่าวประเสริฐควรปรากฏอย่างจริงที่สุดเช่นกัน",
        "เราไม่สามารถเป็นพ่อแม่ที่สมบูรณ์แบบ หรือเป็นสามีภรรยาที่สมบูรณ์แบบได้ แต่เราสามารถเป็นพ่อแม่และคู่สมรสที่พึ่งพาพระเจ้าได้ เราสามารถเป็นคนที่รู้จักกลับใจต่อพระเจ้า และรู้จักขอโทษต่อคนในบ้านได้",
        "บางครั้งเราต้องกล้าพูดกับลูกว่า “พ่อผิดเอง” หรือ “แม่ขอโทษนะ แม่พูดแรงเกินไป แม่ต้องกลับใจต่อพระเจ้า และอยากขอให้ลูกยกโทษให้ด้วย” คำพูดเช่นนี้ไม่ได้ทำลายสิทธิอำนาจของพ่อแม่ แต่กลับแสดงให้เห็นความถ่อมใจที่ข่าวประเสริฐสร้างขึ้น",
        "ต่อคู่สมรสก็เช่นเดียวกัน โดยเฉพาะเมื่อคู่สมรสยังไม่เชื่อพระเจ้า บางครั้งคำอธิบายเรื่องความเชื่ออาจยังไปไม่ถึงหัวใจ แต่ชีวิตที่ถ่อมใจ การขอโทษอย่างจริงใจ การรับใช้เงียบ ๆ และการอดทนด้วยความรัก สามารถเป็นกลิ่นหอมของข่าวประเสริฐได้",
        "ความรักในครอบครัวไม่ได้เติบโตจากเหตุการณ์ใหญ่เพียงอย่างเดียว แต่มักเติบโตผ่านการเชื่อฟังเล็ก ๆ ที่เกิดซ้ำทุกวัน การพูดให้นุ่มนวลขึ้น การฟังให้นานขึ้น การเห็นคุณค่าของงานเล็ก ๆ ของกันและกัน การเป็นฝ่ายเริ่มคืนดี สิ่งเหล่านี้คือทางเล็ก ๆ ที่พระเจ้าทรงใช้ให้บ้านของเรากลายเป็นพื้นที่แห่งพระคุณ",
        "ครอบครัวเป็นที่ที่ความอ่อนแอของเราปรากฏมากที่สุด แต่ก็เป็นที่ที่เราต้องการพระคุณบ่อยที่สุดเช่นกัน ดังนั้น วันนี้จงเริ่มต้นใหม่ต่อหน้าคนในบ้านของคุณ ไม่ใช่ในฐานะคนสมบูรณ์แบบ แต่ในฐานะคนที่พึ่งพาพระคุณของพระเจ้า พระเจ้าทรงปรารถนาให้แสงสว่างของข่าวประเสริฐส่องเข้ามาในบ้านของเราด้วย"
      ])
    },
    {
      ...commonMeta,
      id: -416,
      language: "th",
      slug: "essay-grace-for-weary-parents",
      title: "พระคุณของพระเจ้าในวันที่พ่อแม่อ่อนแรง",
      author_name: "Yongjin Choi",
      published_at: "2026-08-03",
      summary: "เมื่อพ่อแม่เหนื่อย อ่อนแรง และรู้สึกผิด พระคุณของพระเจ้ายังประคองทั้งหัวใจของลูกและหัวใจของพ่อแม่ ให้กลับใจ เริ่มต้นใหม่ และรักด้วยความสัตย์ซื่ออีกครั้ง",
      body: body([
        "เมื่อการเลี้ยงลูกไม่เป็นอย่างที่เราหวัง",
        "ตอนเช้าเราอาจตั้งใจว่า วันนี้จะพูดกับลูกดี ๆ จะไม่ดุ และจะพยายามใจเย็นให้มากขึ้น",
        "แต่เมื่อพูดเรื่องเดิมหลายครั้งแล้วลูกยังไม่ฟัง งานก็ยังไม่เสร็จ ความเหนื่อยสะสม และปัญหาหลายอย่างเข้ามาพร้อมกัน เราอาจเผลอพูดเสียงดัง หรือพูดคำที่ทำให้ลูกเสียใจ",
        "พอทุกอย่างเงียบลง ความรู้สึกผิดก็ตามมา",
        "“ทำไมเราถึงเป็นแบบนี้อีกแล้ว”\n“เราเป็นพ่อแม่ที่ดีพอหรือเปล่า”\n“ลูกของเราจะเป็นอย่างไรต่อไป”",
        "หลายครั้งที่พ่อแม่เหนื่อยใจ ไม่ใช่เพราะไม่รักลูก แต่เพราะรักมาก และอยากเห็นลูกเติบโตไปในทางที่ดี",
        "เมื่อรักมาก เราก็อาจกังวลมาก เร่งรีบมาก และเผลอวัดคุณค่าของตัวเองจากพฤติกรรมหรือความสำเร็จของลูก",
        "แต่ชีวิตของลูกไม่ใช่สิ่งที่พ่อแม่สามารถควบคุมได้ทั้งหมด",
        "ไม่ได้หมายความว่าพ่อแม่ไม่มีหน้าที่ พ่อแม่ยังต้องรัก สอน ตักเตือน วางขอบเขต และอธิษฐานเผื่อลูกอย่างจริงจัง",
        "แต่พ่อแม่ไม่สามารถบังคับหัวใจของลูกให้เปลี่ยนแปลงได้ มีเพียงพระเจ้าเท่านั้นที่สามารถเปลี่ยนหัวใจ ประทานความเชื่อ และนำชีวิตของลูกได้",
        "หน้าที่ของพ่อแม่จึงไม่ใช่การควบคุมทุกอย่าง แต่คือการดูแลชีวิตที่พระเจ้าทรงมอบหมายให้ด้วยความซื่อสัตย์",
        "บางวันสิ่งที่เราทำอาจดูเล็กน้อยมาก",
        "ปลุกลูกให้ตื่น เตรียมอาหาร พาไปโรงเรียน ช่วยทำการบ้าน ฟังเรื่องเดิมอีกครั้ง หรือห่มผ้าให้ก่อนนอน",
        "หลายครั้งเราต้องพูดเรื่องเดิมซ้ำ ๆ ต้องอดทนกับคำถามเดิม และต้องยื่นมือไปหาลูกอีกครั้ง แม้ก่อนหน้านั้นเราจะผิดหวังหรือเสียใจก็ตาม",
        "พ่อแม่อาจรู้สึกว่า สิ่งเล็ก ๆ เหล่านี้ไม่เห็นทำให้เกิดการเปลี่ยนแปลงอะไรเลย",
        "แต่พระเจ้าทรงใช้ความซื่อสัตย์ในเรื่องเล็กน้อย พระองค์ยังทรงทำงาน แม้ในเวลาที่เราไม่เห็น และแม้ในเวลาที่ลูกยังไม่ตอบสนองอย่างที่เราหวัง",
        "พ่อแม่ก็เป็นคนที่ผิดพลาดได้",
        "บางครั้งเราอาจดุลูกแรงเกินไป ไม่ฟังลูกจนจบ หรือให้ความสำคัญกับคะแนนและความสำเร็จมากกว่าหัวใจของลูก",
        "เมื่อเราทำผิด สิ่งที่ควรทำไม่ใช่ซ่อนความผิด หรือคิดว่าพ่อแม่ไม่จำเป็นต้องขอโทษลูก",
        "หากวันนี้เราพูดทำร้ายจิตใจลูก เราสามารถเดินไปหาเขาและพูดว่า",
        "“เมื่อกี้แม่พูดแรงเกินไป แม่ขอโทษนะ”\n“พ่อไม่ได้ฟังลูกให้ดี พ่อขอโทษ”",
        "การขอโทษลูกไม่ได้ทำให้พ่อแม่หมดความน่าเคารพ ตรงกันข้าม ลูกจะได้เห็นว่า ผู้ใหญ่ก็ต้องยอมรับผิด ขอการอภัย และเริ่มต้นใหม่เช่นกัน",
        "นี่เป็นส่วนหนึ่งของการสอนเรื่องพระกิตติคุณผ่านชีวิตจริง",
        "เมื่อเราทำผิด เราไม่จำเป็นต้องซ่อนตัวจากพระเจ้า หรือจมอยู่กับความรู้สึกผิดตลอดไป เพราะพระเยซูคริสต์ทรงรับโทษบาปแทนเราบนไม้กางเขนแล้ว",
        "เพราะพระคริสต์ เราจึงสามารถกลับมาหาพระเจ้า สารภาพบาป รับการอภัย และเริ่มต้นใหม่ด้วยพระคุณของพระองค์",
        "วันที่เราพลาด จึงไม่จำเป็นต้องเป็นวันที่ทุกอย่างจบลง",
        "วันนั้นอาจกลายเป็นวันที่เราเรียนรู้ที่จะถ่อมใจ ขอการอภัย และรักลูกอย่างจริงใจมากขึ้น",
        "ลูกอาจจำคำสอนของเราไม่ได้ทุกคำ แต่เขาจะค่อย ๆ เรียนรู้จากสิ่งที่เห็น",
        "เขาจะเห็นว่าเรายอมรับผิดหรือไม่ เราให้อภัยหรือไม่ เราอธิษฐานหรือไม่ และเมื่อเราล้มลง เรากลับไปหาพระเจ้าหรือไม่",
        "ลูกไม่ได้เรียนรู้พระคุณจากพ่อแม่ที่ไม่เคยผิดพลาดเท่านั้น แต่ยังเรียนรู้พระคุณจากพ่อแม่ที่รู้ว่าตัวเองต้องการพระเจ้า",
        "อย่าเปรียบเทียบครอบครัวของเรากับครอบครัวอื่น",
        "ลูกของคนอื่นอาจดูเชื่อฟังกว่า พ่อแม่คนอื่นอาจดูใจเย็นกว่า หรือครอบครัวอื่นอาจดูมีความสุขและพร้อมกว่าเรา",
        "แต่เราไม่รู้เรื่องราวทั้งหมดของเขา และพระเจ้าก็ไม่ได้ทรงนำทุกครอบครัวด้วยวิธีเดียวกันหรือในเวลาเดียวกัน",
        "สิ่งสำคัญคือ เราดูแลลูกที่พระเจ้าทรงมอบหมายให้เรา และซื่อสัตย์ในหน้าที่ของวันนี้",
        "วันนี้ลูกอาจยังไม่เปลี่ยน วันนี้เราอาจยังเหนื่อย และวันนี้เราอาจพลาดอีกครั้ง",
        "แต่การทำงานของพระเจ้าไม่ได้ขึ้นอยู่กับว่า วันนี้เราทำได้ดีเพียงใด",
        "คำอธิษฐานที่เราถวายเพื่อลูกไม่สูญเปล่า มือที่เรายื่นไปหาลูกอีกครั้งไม่สูญเปล่า ความรักที่อดทนและการสอนที่ซื่อสัตย์ไม่สูญเปล่า",
        "พระเจ้าไม่ได้ทรงดูแลเพียงหัวใจของลูก แต่พระองค์กำลังทรงเปลี่ยนหัวใจของพ่อแม่ไปพร้อมกัน",
        "ผ่านการเลี้ยงลูก พระองค์ทรงสอนเราให้รู้จักความอดทน ความถ่อมใจ การกลับใจ และการวางใจในพระองค์มากขึ้น",
        "ดังนั้น อย่าเพิ่งตัดสินตัวเองจากวันที่ยากลำบากเพียงวันเดียว",
        "พระเจ้าทรงรักลูกของคุณมากกว่าที่คุณสามารถรักได้ และพระหัตถ์ของพระองค์ไม่เคยอ่อนแรง",
        "พระคุณที่คุณต้องการสำหรับวันนี้ พระองค์จะประทานให้ในวันนี้",
        "และเมื่อถึงวันพรุ่งนี้ พระองค์จะทรงประทานพระคุณที่เพียงพอให้อีกครั้ง"
      ])
    }
  ],
  en: [
    {
      ...commonMeta,
      id: -421,
      language: "en",
      slug: "essay-faithfulness-over-proving-yourself",
      title: "Faithfulness Is Better Than Proving Yourself",
      author_name: "Yongjin Choi",
      translation_notice: "Adapted in English from essays by Yongjin Choi",
      summary: "The gospel frees us from building our identity on performance, approval, and success. In Christ, we are already received as God’s children and called to simple faithfulness.",
      body: body([
        "Many of us live as though we must keep proving ourselves.",
        "Students try to prove themselves through grades. Workers try to prove themselves through performance. In church, we may try to prove our seriousness through service and commitment. At home, we may try to prove that we are responsible, useful, and dependable. When we fall short of someone’s expectations, our hearts can quickly become unsettled. Even a small failure can whisper, “Maybe I am not enough.”",
        "This feeling is especially strong in the workplace. We work late to be noticed. We worry about making mistakes. We compare ourselves with people who seem faster, wiser, or more capable. A good review may comfort us for a moment, but soon another project, another deadline, and another evaluation begin. The human heart cannot truly rest when success becomes its master.",
        "The gospel gives us a different identity.",
        "We cannot stand before God by our ability, achievement, discipline, or usefulness. But neither are we abandoned by God because of our weakness, failure, or inconsistency. In Jesus Christ, we are already received as God’s children. God knows us, loves us, and welcomes us in His Son.",
        "This does not make us lazy. It makes us free. We no longer work in order to earn our worth. We work because we have already been loved. We no longer serve in order to become acceptable. We serve because we have already been accepted in Christ.",
        "When success is no longer our lord, we can become more honest, more courageous, and more faithful in the place God has given us. We can do good work without worshiping our work. We can serve others without needing their praise to keep us alive.",
        "The Lord sees what others may never notice. He sees the quiet effort at work, the repeated tasks at home, the small acts of service in church, and the ordinary obedience that receives no applause. Nothing done before Him in faith is wasted.",
        "So do not crush your soul under the weight of proving yourself today. Your worth is not decided by today’s results. Your name is already known to God in Christ. What you need today is not perfect success, but simple faithfulness before the Lord who is faithful to you."
      ])
    },
    {
      ...commonMeta,
      id: -422,
      language: "en",
      slug: "essay-first-love-as-direction",
      title: "First Love Is Not Only a Feeling, but a Direction",
      author_name: "Yongjin Choi",
      translation_notice: "Adapted in English from essays by Yongjin Choi",
      summary: "First love is not the attempt to recreate an old spiritual feeling, but the daily turning of the heart back to Christ.",
      body: body([
        "When we first come to faith, everything may feel new. Worship feels alive. A verse of Scripture seems to enter the heart with unusual power. Prayer may come with tears. In those early days, we may sincerely say, “Lord, I love You.”",
        "But over time, our feelings often become quieter. Worship becomes familiar. Bible reading may not always feel fresh. Prayer may sometimes feel dry. Then we begin to wonder, “Has my faith grown cold? Have I lost my first love?”",
        "It is true that our hearts can grow cold. It is true that we can begin to love other things more than the Lord. But first love is not measured only by the intensity of our early emotions.",
        "First love is a direction of the heart.",
        "The question is not merely, “Do I feel the way I once felt?” The deeper question is, “Where is my heart turning now?” When we turn back to Christ on a day when we feel little, that is love. When we stop hiding after sin and come again to the Lord, that is love. When we open the Word in the middle of a tired week, that is love. When we take one small step of obedience that no one sees, that may be a deeper confession of love than a moment of strong emotion.",
        "Love is not always dramatic. A parent rises early to care for a child though exhausted. A husband or wife begins a difficult conversation again after being hurt. Someone quietly carries a responsibility day after day without being praised. These are not always emotional moments, but they are acts of love.",
        "Faith is similar. Some days our love for Christ is expressed through tears and songs. Other days it is expressed through returning, enduring, repenting, listening, and obeying.",
        "So do not despair simply because your feelings are not as strong as they once were. The Lord does not look only at passing emotions. He sees the direction of the heart. Come back to Him today. Stand before His Word. Pray, even briefly. Take the next small step of obedience.",
        "First love is not trying to recreate yesterday’s spiritual emotion. It is turning your heart to Christ again today. Our love is often weak, but His love that holds us is never weak and never changing."
      ])
    },
    {
      ...commonMeta,
      id: -423,
      language: "en",
      slug: "essay-prayer-as-fellowship",
      title: "Prayer Is Not Persuading God, but Fellowship with the Father",
      author_name: "Yongjin Choi",
      translation_notice: "Adapted in English from essays by Yongjin Choi",
      summary: "Prayer is not a technique for controlling heaven. It is the grace of remaining with the Father who already loves His children in Christ.",
      body: body([
        "When we think about prayer, we often think first about answers. We bring our needs, our fears, our troubles, our desires, and our unanswered questions before God. And this is right. God is a Father who hears the cries of His children. We are invited to ask Him boldly.",
        "But prayer is not merely a way to persuade God.",
        "Prayer is personal fellowship with God. It is conversation with the Father who knows us, welcomes us, and loves us in Christ. In prayer, we speak honestly before Him, but we also learn to place our hearts under His wisdom, His goodness, and His will.",
        "Sometimes we begin to treat prayer like a transaction. If we pray longer, we think God may answer faster. If we pray with more emotion, we think God may be more willing to help. If we use the right words, we imagine that our words might move God to become kinder toward us.",
        "But biblical prayer is not a work we offer in order to earn God’s attention. Prayer is not a spiritual payment. It is not a technique for controlling heaven. Prayer is the open door of grace, where weak children come to a faithful Father.",
        "A child does not need perfect sentences before speaking to a father. A child may speak with tears, confusion, silence, or half-formed words. A loving father understands more than the words themselves. So it is with our God. He knows our hearts before we finish speaking. He hears even our sighs.",
        "Prayer may change our circumstances. Often, before that, prayer changes us. Anxiety is slowly placed into God’s hands. Anger softens before His mercy. Fear learns again to rest in His faithfulness. Confession opens the heart to grace. Thanksgiving teaches the soul to see what it had forgotten.",
        "So do not wait until you can pray well before you come to God. Come as you are, but come to Him. Bring your gratitude, fear, sin, confusion, pain, and longing. Prayer is not the skill of persuading God. It is the grace of remaining with the Father who already loves His children in Christ."
      ])
    },
    {
      ...commonMeta,
      id: -424,
      language: "en",
      slug: "essay-living-between-sin-and-mercy",
      title: "Living Between Sin and Mercy",
      author_name: "Yongjin Choi",
      translation_notice: "Adapted in English from essays by Yongjin Choi",
      summary: "Do not deny your sin, but do not despair either. God’s mercy in Christ is deeper than our sin and leads us back into obedience.",
      body: body([
        "We often think too lightly of sin. We may call it a personality problem, a bad habit, a weakness, or a moral failure. Of course, sin appears in those ways. But Scripture speaks of sin more deeply. Sin is not merely a mistake before people. It is a broken relationship with God. It is the heart turning away from the Creator who made us, owns us, and loves us.",
        "That is why sin makes us hide. We defend ourselves instead of confessing. We shift blame instead of taking responsibility. We notice the failures of others more clearly than our own. We hurt someone and then say, “But I was hurting too,” as though our pain cancels out our sin.",
        "The gospel calls us out of hiding.",
        "God’s mercy is not a soft willingness to pretend sin does not matter. God names sin as sin. But He does not abandon sinners who come to Him. In Christ, He forgives, restores, and raises us up again.",
        "The cross shows us both the seriousness of sin and the depth of God’s mercy. If sin were small, the cross would not be necessary. If mercy were small, sinners would have no hope. But at the cross, God tells the truth about our sin while opening the way for our forgiveness.",
        "This mercy is not something we need only once. We need it every day. We need to come before God with our pride, indifference, bitterness, selfishness, impatience, and coldness of heart. We need to pray, “Lord, have mercy on me.”",
        "And those who receive mercy learn to show mercy. A person who knows he has been forgiven becomes slower to condemn others harshly. He can still speak truth, but he learns to speak it with patience. He can still confront wrong, but he does so remembering that he too stands only by grace.",
        "Mercy received becomes mercy given.",
        "Today we live between sin and mercy. Do not deny your sin. But do not despair either. Come to Christ. God does not reject the repentant. His mercy is deeper than your sin, and His grace is able to lead you again into the path of obedience."
      ])
    },
    {
      ...commonMeta,
      id: -425,
      language: "en",
      slug: "essay-home-first-place-of-love",
      title: "The Home Is the First Place to Practice Love",
      author_name: "Yongjin Choi",
      translation_notice: "Adapted in English from essays by Yongjin Choi",
      summary: "The home is where our weakness is often most visible, and therefore one of the most important places for the gospel to become visible.",
      body: body([
        "We may be sincere Christians. We may attend church faithfully, serve with energy, speak kindly to others, and appear patient and committed in public. Yet the people closest to us may see another side of us.",
        "Outside the home, we may be gentle. Inside the home, we may become easily irritated. At church, we may listen patiently. With a spouse or child, we may speak sharply. We may show compassion to the pain of others, while passing over the quiet wounds of our own family.",
        "The home is the first place to practice love.",
        "This is not because the home is easy. It is because the home reveals us most honestly. It is where our unpolished self appears. For that reason, family life can be painful and humbling. But it is also one of the most important places where the gospel must become visible.",
        "We cannot be perfect parents. We cannot be perfect husbands or wives. But we can be parents and spouses who depend on God. We can be people who repent before the Lord and ask forgiveness from those closest to us.",
        "Sometimes we need to say to our children, “I was wrong. I spoke harshly. I need to repent before God, and I want to ask your forgiveness.” Such words do not destroy parental authority. They show the humility that the gospel creates.",
        "The same is true with a spouse. This may be especially important when a husband or wife does not yet believe in Christ. Sometimes explanations about faith do not reach the heart immediately. But a humble life, an honest apology, quiet service, and patient love can carry the fragrance of the gospel.",
        "Love in the home usually grows not through grand moments, but through repeated small acts of obedience: speaking more gently, listening a little longer, noticing another person’s labor, saying thank you, being the first to seek peace, confessing weakness instead of hiding it.",
        "The home is where our weakness is often most visible. It is also where we need grace most often. So begin again today with the people closest to you. Do not try to stand before them as a perfect person. Stand as someone who depends on the grace of God. The Lord desires the light of the gospel to shine in our homes too."
      ])
    }
  ]
};
