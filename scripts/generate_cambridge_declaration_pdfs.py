# -*- coding: utf-8 -*-
from __future__ import annotations

from pathlib import Path
import html


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "tmp" / "cambridge-declaration"
OUT.mkdir(parents=True, exist_ok=True)

SOURCE_URL = "https://alliancenet.org/about/cambridge-declaration/english/"
SOURCE_NAME = "Alliance of Confessing Evangelicals"


EN = {
    "code": "en",
    "lang": "en",
    "title": "The Cambridge Declaration",
    "subtitle": "April 20, 1996",
    "cover_note": "Original English text",
    "source": f"Source: {SOURCE_NAME}",
    "translator": "",
    "permission": "This declaration may be reproduced without permission. Please credit the source by citing the Alliance of Confessing Evangelicals.",
    "sections": [
        ("", [
            "Evangelical churches today are increasingly dominated by the spirit of this age rather than by the Spirit of Christ. As evangelicals, we call ourselves to repent of this sin and to recover the historic Christian faith.",
            "In the course of history words change. In our day this has happened to the word “evangelical.” In the past it served as a bond of unity between Christians from a wide diversity of church traditions. Historic evangelicalism was confessional. It embraced the essential truths of Christianity as those were defined by the great ecumenical councils of the church. In addition, evangelicals also shared a common heritage in the “solas” of the sixteenth century Protestant Reformation.",
            "Today the light of the Reformation has been significantly dimmed. The consequence is that the word “evangelical” has become so inclusive as to have lost its meaning. We face the peril of losing the unity it has taken centuries to achieve. Because of this crisis and because of our love of Christ, his gospel and his church, we endeavor to assert anew our commitment to the central truths of the Reformation and of historic evangelicalism. These truths we affirm not because of their role in our traditions, but because we believe that they are central to the Bible.",
        ]),
        ("Sola Scriptura: The Erosion of Authority", [
            "Scripture alone is the inerrant rule of the church’s life, but the evangelical church today has separated Scripture from its authoritative function. In practice, the church is guided, far too often, by the culture. Therapeutic technique, marketing strategies, and the beat of the entertainment world often have far more to say about what the church wants, how it functions and what it offers, than does the Word of God. Pastors have neglected their rightful oversight of worship, including the doctrinal content of the music. As biblical authority has been abandoned in practice, as its truths have faded from Christian consciousness, and as its doctrines have lost their saliency, the church has been increasingly emptied of its integrity, moral authority and direction.",
            "Rather than adapting Christian faith to satisfy the felt needs of consumers, we must proclaim the law as the only measure of true righteousness and the gospel as the only announcement of saving truth. Biblical truth is indispensable to the church’s understanding, nurture and discipline.",
            "Scripture must take us beyond our perceived needs to our real needs and liberate us from seeing ourselves through the seductive images, cliches, promises and priorities of mass culture. It is only in the light of God’s truth that we understand ourselves aright and see God’s provision for our need. The Bible, therefore, must be taught and preached in the church. Sermons must be expositions of the Bible and its teachings, not expressions of the preacher’s opinions or the ideas of the age. We must settle for nothing less than what God has given.",
            "The work of the Holy Spirit in personal experience cannot be disengaged from Scripture. The Spirit does not speak in ways that are independent of Scripture. Apart from Scripture we would never have known of God’s grace in Christ. The biblical Word, rather than spiritual experience, is the test of truth.",
        ]),
        ("Thesis One: Sola Scriptura", [
            "We reaffirm the inerrant Scripture to be the sole source of written divine revelation, which alone can bind the conscience. The Bible alone teaches all that is necessary for our salvation from sin and is the standard by which all Christian behavior must be measured.",
            "We deny that any creed, council or individual may bind a Christian’s conscience, that the Holy Spirit speaks independently of or contrary to what is set forth in the Bible, or that personal spiritual experience can ever be a vehicle of revelation.",
        ]),
        ("Solus Christus: The Erosion of Christ-Centered Faith", [
            "As evangelical faith becomes secularized, its interests have been blurred with those of the culture. The result is a loss of absolute values, permissive individualism, and a substitution of wholeness for holiness, recovery for repentance, intuition for truth, feeling for belief, chance for providence, and immediate gratification for enduring hope. Christ and his cross have moved from the center of our vision.",
        ]),
        ("Thesis Two: Solus Christus", [
            "We reaffirm that our salvation is accomplished by the mediatorial work of the historical Christ alone. His sinless life and substitutionary atonement alone are sufficient for our justification and reconciliation to the Father.",
            "We deny that the gospel is preached if Christ’s substitutionary work is not declared and faith in Christ and his work is not solicited.",
        ]),
        ("Sola Gratia: The Erosion of The Gospel", [
            "Unwarranted confidence in human ability is a product of fallen human nature. This false confidence now fills the evangelical world; from the self-esteem gospel, to the health and wealth gospel, from those who have transformed the gospel into a product to be sold and sinners into consumers who want to buy, to others who treat Christian faith as being true simply because it works. This silences the doctrine of justification regardless of the official commitments of our churches. God’s grace in Christ is not merely necessary but is the sole efficient cause of salvation. We confess that human beings are born spiritually dead and are incapable even of cooperating with regenerating grace.",
        ]),
        ("Thesis Three: Sola Gratia", [
            "We reaffirm that in salvation we are rescued from God’s wrath by his grace alone. It is the supernatural work of the Holy Spirit that brings us to Christ by releasing us from our bondage to sin and raising us from spiritual death to spiritual life.",
            "We deny that salvation is in any sense a human work. Human methods, techniques or strategies by themselves cannot accomplish this transformation. Faith is not produced by our unregenerated human nature.",
        ]),
        ("Sola Fide: The Erosion of The Chief Article", [
            "Justification is by grace alone through faith alone because of Christ alone. This is the article by which the church stands or falls. Today this article is often ignored, distorted or sometimes even denied by leaders, scholars and pastors who claim to be evangelical. Although fallen human nature has always recoiled from recognizing its need for Christ’s imputed righteousness, modernity greatly fuels the fires of this discontent with the biblical Gospel. We have allowed this discontent to dictate the nature of our ministry and what it is we are preaching.",
            "Many in the church growth movement believe that sociological understanding of those in the pew is as important to the success of the gospel as is the biblical truth which is proclaimed. As a result, theological convictions are frequently divorced from the work of the ministry. The marketing orientation in many churches takes this even further, erasing the distinction between the biblical Word and the world, robbing Christ’s cross of its offense, and reducing Christian faith to the principles and methods which bring success to secular corporations.",
            "While the theology of the cross may be believed, these movements are actually emptying it of its meaning. There is no gospel except that of Christ’s substitution in our place whereby God imputed to him our sin and imputed to us his righteousness. Because he bore our judgment, we now walk in his grace as those who are forever pardoned, accepted and adopted as God’s children. There is no basis for our acceptance before God except in Christ’s saving work, not in our patriotism, churchly devotion or moral decency. The gospel declares what God has done for us in Christ. It is not about what we can do to reach him.",
        ]),
        ("Thesis Four: Sola Fide", [
            "We reaffirm that justification is by grace alone through faith alone because of Christ alone. In justification Christ’s righteousness is imputed to us as the only possible satisfaction of God’s perfect justice.",
            "We deny that justification rests on any merit to be found in us, or upon the grounds of an infusion of Christ’s righteousness in us, or that an institution claiming to be a church that denies or condemns sola fide can be recognized as a legitimate church.",
        ]),
        ("Soli Deo Gloria: The Erosion of God-Centered Worship", [
            "Wherever in the church biblical authority has been lost, Christ has been displaced, the gospel has been distorted, or faith has been perverted, it has always been for one reason: our interests have displaced God’s and we are doing his work in our way. The loss of God’s centrality in the life of today’s church is common and lamentable. It is this loss that allows us to transform worship into entertainment, gospel preaching into marketing, believing into technique, being good into feeling good about ourselves, and faithfulness into being successful. As a result, God, Christ and the Bible have come to mean too little to us and rest too inconsequentially upon us.",
            "God does not exist to satisfy human ambitions, cravings, the appetite for consumption, or our own private spiritual interests. We must focus on God in our worship, rather than the satisfaction of our personal needs. God is sovereign in worship; we are not. Our concern must be for God’s kingdom, not our own empires, popularity or success.",
        ]),
        ("Thesis Five: Soli Deo Gloria", [
            "We reaffirm that because salvation is of God and has been accomplished by God, it is for God’s glory and that we must glorify him always. We must live our entire lives before the face of God, under the authority of God and for his glory alone.",
            "We deny that we can properly glorify God if our worship is confused with entertainment, if we neglect either Law or Gospel in our preaching, or if self-improvement, self-esteem or self-fulfillment are allowed to become alternatives to the gospel.",
        ]),
        ("A Call To Repentance & Reformation", [
            "The faithfulness of the evangelical church in the past contrasts sharply with its unfaithfulness in the present. Earlier in this century, evangelical churches sustained a remarkable missionary endeavor, and built many religious institutions to serve the cause of biblical truth and Christ’s kingdom. That was a time when Christian behavior and expectations were markedly different from those in the culture. Today they often are not. The evangelical world today is losing its biblical fidelity, moral compass and missionary zeal.",
            "We repent of our worldliness. We have been influenced by the “gospels” of our secular culture, which are no gospels. We have weakened the church by our own lack of serious repentance, our blindness to the sins in ourselves which we see so clearly in others, and our inexcusable failure to adequately tell others about God’s saving work in Jesus Christ.",
            "We also earnestly call back erring professing evangelicals who have deviated from God’s Word in the matters discussed in this Declaration. This includes those who declare that there is hope of eternal life apart from explicit faith in Jesus Christ, who claim that those who reject Christ in this life will be annihilated rather than endure the just judgment of God through eternal suffering, or who claim that evangelicals and Roman Catholics are one in Jesus Christ even where the biblical doctrine of justification is not believed.",
            "The Alliance of Confessing Evangelicals asks all Christians to give consideration to implementing this Declaration in the church’s worship, ministry, policies, life and evangelism.",
            "For Christ’s sake. Amen.",
        ]),
    ],
}


KO = {
    "code": "ko",
    "lang": "ko",
    "title": "케임브리지 선언",
    "subtitle": "1996년 4월 20일",
    "cover_note": "한국어 번역본",
    "source": f"원문 출처: {SOURCE_NAME}",
    "translator": "번역: 최용진",
    "permission": "이 선언문은 허락 없이 재생산할 수 있습니다. 출처는 Alliance of Confessing Evangelicals로 밝혀 주십시오.",
    "sections": [
        ("", [
            "오늘날 복음주의 교회들은 그리스도의 영보다 이 시대의 정신에 점점 더 지배받고 있다. 우리는 복음주의자로서 이 죄를 회개하고 역사적 기독교 신앙을 회복하도록 우리 자신을 부른다.",
            "역사의 흐름 속에서 단어의 의미는 변한다. 오늘날 ‘복음주의’라는 말에도 그런 일이 일어났다. 과거 이 말은 서로 다양한 교회 전통에 속한 그리스도인들을 하나로 묶어 주는 끈이었다. 역사적 복음주의는 고백적 신앙이었다. 그것은 교회의 위대한 보편 공의회들이 정의한 기독교의 본질적 진리를 받아들였다. 또한 복음주의자들은 16세기 종교개혁의 ‘오직’들, 곧 솔라들 안에서 공동의 유산을 함께 나누었다.",
            "그러나 오늘날 종교개혁의 빛은 크게 흐려졌다. 그 결과 ‘복음주의’라는 말은 너무 넓은 의미로 쓰이게 되어, 사실상 그 뜻을 잃어버릴 위험에 처했다. 우리는 수 세기에 걸쳐 이루어진 일치를 잃을 위험 앞에 서 있다. 이 위기 때문에, 그리고 그리스도와 그분의 복음과 그분의 교회를 사랑하기 때문에, 우리는 종교개혁과 역사적 복음주의의 중심 진리에 대한 우리의 헌신을 새롭게 고백하고자 한다. 우리는 이 진리들이 단지 우리의 전통 안에서 중요한 역할을 하기 때문이 아니라, 그것들이 성경의 중심 진리라고 믿기 때문에 고백한다.",
        ]),
        ("Sola Scriptura: 권위의 침식", [
            "성경만이 교회 생활의 오류 없는 규범이다. 그러나 오늘날 복음주의 교회는 성경을 그 권위 있는 기능으로부터 분리해 왔다. 실제로 교회는 너무 자주 문화의 인도를 받는다. 치료 기법, 마케팅 전략, 오락 산업의 흐름이 하나님의 말씀보다 교회가 무엇을 원하고, 어떻게 기능하며, 무엇을 제공해야 하는지를 더 많이 말하는 경우가 많다. 목회자들은 예배, 특히 음악의 교리적 내용에 대한 정당한 감독 책임을 소홀히 해 왔다. 성경의 권위가 실제 삶에서 버려지고, 그 진리가 그리스도인의 의식 속에서 희미해지며, 그 교리가 선명함을 잃어감에 따라 교회는 점점 더 온전함과 도덕적 권위와 방향을 잃어 왔다.",
            "우리는 소비자의 체감 욕구를 만족시키기 위해 기독교 신앙을 조정할 것이 아니라, 율법을 참된 의의 유일한 척도로 선포하고 복음을 구원의 진리에 대한 유일한 선포로 전해야 한다. 성경적 진리는 교회가 자신을 이해하고, 양육하며, 권징하는 데 없어서는 안 된다.",
            "성경은 우리가 느끼는 필요를 넘어 우리의 참된 필요를 보게 하며, 대중문화의 매혹적인 이미지와 상투어와 약속과 우선순위를 통해 자신을 바라보는 데서 우리를 해방해야 한다. 오직 하나님의 진리의 빛 안에서만 우리는 자신을 바르게 이해하고 우리의 필요를 위한 하나님의 공급을 볼 수 있다. 그러므로 성경은 교회 안에서 가르쳐지고 선포되어야 한다. 설교는 성경과 그 가르침의 해설이어야 하며, 설교자의 의견이나 시대의 사상을 표현하는 것이 되어서는 안 된다. 우리는 하나님께서 주신 것보다 적은 것에 만족해서는 안 된다.",
            "개인의 경험 속에서 일하시는 성령의 사역은 성경과 분리될 수 없다. 성령께서는 성경과 독립되거나 성경과 별개의 방식으로 말씀하지 않으신다. 성경이 없었다면 우리는 그리스도 안에 있는 하나님의 은혜를 결코 알 수 없었을 것이다. 영적 경험이 아니라 성경의 말씀이 진리의 기준이다.",
        ]),
        ("제1논제: 오직 성경", [
            "우리는 오류 없는 성경이 기록된 신적 계시의 유일한 원천이며, 오직 성경만이 양심을 묶을 수 있음을 재확인한다. 성경만이 죄로부터의 구원을 위해 필요한 모든 것을 가르치며, 모든 그리스도인의 행위가 측정되어야 할 기준이다.",
            "우리는 어떤 신조나 공의회나 개인도 그리스도인의 양심을 묶을 수 없음을 부인한다. 또한 성령께서 성경에 제시된 것과 독립되거나 그와 반대로 말씀하신다는 주장과, 개인의 영적 경험이 계시의 통로가 될 수 있다는 주장을 부인한다.",
        ]),
        ("Solus Christus: 그리스도 중심 신앙의 침식", [
            "복음주의 신앙이 세속화되면서 그 관심은 문화의 관심과 뒤섞여 흐려졌다. 그 결과 절대적 가치가 상실되고, 방종한 개인주의가 퍼졌으며, 거룩함 대신 온전함이, 회개 대신 회복이, 진리 대신 직관이, 믿음 대신 감정이, 섭리 대신 우연이, 오래 견디는 소망 대신 즉각적 만족이 자리 잡았다. 그리스도와 그분의 십자가는 우리의 시야 중심에서 밀려났다.",
        ]),
        ("제2논제: 오직 그리스도", [
            "우리는 우리의 구원이 역사적 그리스도의 중보 사역만으로 성취되었음을 재확인한다. 그분의 죄 없는 생애와 대속적 속죄만이 우리의 칭의와 아버지와의 화목에 충분하다.",
            "우리는 그리스도의 대속 사역이 선포되지 않고, 그리스도와 그분의 사역에 대한 믿음이 요청되지 않는다면 복음이 선포된 것이 아님을 부인한다.",
        ]),
        ("Sola Gratia: 복음의 침식", [
            "인간 능력에 대한 근거 없는 확신은 타락한 인간 본성의 산물이다. 이 거짓 확신은 오늘날 복음주의 세계를 가득 채우고 있다. 자존감 복음에서 건강과 부의 복음에 이르기까지, 복음을 판매할 상품으로 바꾸고 죄인을 그것을 사려는 소비자로 바꾼 이들로부터, 기독교 신앙이 단지 효과가 있기 때문에 참되다고 여기는 이들에 이르기까지 그러하다. 이것은 우리 교회들의 공식적 입장이 무엇이든 간에 칭의 교리를 침묵하게 만든다. 그리스도 안에 있는 하나님의 은혜는 단지 필요한 것이 아니라 구원의 유일하고도 실제적인 원인이다. 우리는 인간이 영적으로 죽은 상태로 태어나며, 중생하게 하시는 은혜에 협력할 능력조차 없음을 고백한다.",
        ]),
        ("제3논제: 오직 은혜", [
            "우리는 구원에서 우리가 하나님의 진노로부터 구출되는 것이 오직 그분의 은혜로 말미암는다는 사실을 재확인한다. 우리를 죄의 종 됨에서 풀어 주시고 영적 죽음에서 영적 생명으로 일으키심으로 그리스도께로 이끄시는 것은 성령의 초자연적 사역이다.",
            "우리는 구원이 어떤 의미에서도 인간의 일이 아님을 부인한다. 인간의 방법과 기법과 전략 자체는 이 변화를 이루어 낼 수 없다. 믿음은 거듭나지 않은 인간 본성에서 생겨나는 것이 아니다.",
        ]),
        ("Sola Fide: 으뜸 조항의 침식", [
            "칭의는 오직 은혜로, 오직 믿음을 통해, 오직 그리스도 때문에 주어진다. 이것은 교회가 서거나 넘어지는 조항이다. 오늘날 이 조항은 복음주의자라고 주장하는 지도자와 학자와 목회자들에 의해 종종 무시되고, 왜곡되며, 때로는 부인되기까지 한다. 타락한 인간 본성은 언제나 그리스도의 전가된 의가 필요하다는 사실을 인정하기를 거부해 왔지만, 현대성은 성경적 복음에 대한 이 불만의 불길을 더욱 크게 부채질한다. 우리는 이 불만이 우리의 사역의 성격과 우리가 전하는 내용까지 결정하도록 허용해 왔다.",
            "교회성장 운동 안의 많은 이들은 회중석에 앉은 사람들을 사회학적으로 이해하는 것이 선포되는 성경적 진리만큼이나 복음의 성공에 중요하다고 믿는다. 그 결과 신학적 확신은 자주 사역의 실제와 분리된다. 많은 교회의 마케팅 지향성은 이를 더 멀리 밀고 나가 성경의 말씀과 세상 사이의 구별을 지우고, 그리스도의 십자가가 지닌 거침돌을 빼앗으며, 기독교 신앙을 세속 기업의 성공을 가져오는 원리와 방법으로 축소한다.",
            "십자가의 신학을 믿는다고 말할지라도, 이러한 운동들은 실제로 그 의미를 비워 내고 있다. 하나님께서 우리의 죄를 그리스도께 전가하시고 그분의 의를 우리에게 전가하신, 우리를 대신하신 그리스도의 대속 외에는 복음이 없다. 그리스도께서 우리의 심판을 담당하셨으므로, 우리는 영원히 용서받고 받아들여졌으며 하나님의 자녀로 입양된 자들로서 이제 그분의 은혜 안에서 걷는다. 하나님 앞에서 우리가 받아들여지는 근거는 우리의 애국심이나 교회적 헌신이나 도덕적 품위가 아니라, 오직 그리스도의 구원 사역에 있다. 복음은 하나님께서 그리스도 안에서 우리를 위해 행하신 일을 선포한다. 복음은 우리가 하나님께 이르기 위해 무엇을 할 수 있는가에 관한 것이 아니다.",
        ]),
        ("제4논제: 오직 믿음", [
            "우리는 칭의가 오직 은혜로, 오직 믿음을 통해, 오직 그리스도 때문에 주어진다는 사실을 재확인한다. 칭의에서 그리스도의 의는 하나님의 완전한 공의를 만족시킬 수 있는 유일한 것으로 우리에게 전가된다.",
            "우리는 칭의가 우리 안에서 발견되는 어떤 공로나, 우리 안에 주입된 그리스도의 의를 근거로 삼는다는 주장을 부인한다. 또한 오직 믿음으로 말미암는 칭의를 부인하거나 정죄하는 기관이 교회라고 주장할지라도, 그것을 합법적인 교회로 인정할 수 있음을 부인한다.",
        ]),
        ("Soli Deo Gloria: 하나님 중심 예배의 침식", [
            "교회 안에서 성경의 권위가 상실되고, 그리스도께서 밀려나며, 복음이 왜곡되고, 믿음이 변질되는 곳마다 그 이유는 언제나 하나다. 우리의 관심이 하나님의 관심을 밀어내고, 우리가 하나님의 일을 우리의 방식으로 하고 있기 때문이다. 오늘날 교회의 삶에서 하나님 중심성이 상실된 것은 흔하고도 슬픈 일이다. 바로 이 상실 때문에 우리는 예배를 오락으로, 복음 설교를 마케팅으로, 믿음을 기법으로, 선함을 자신에 대해 좋게 느끼는 것으로, 신실함을 성공으로 바꾸어 버린다. 그 결과 하나님과 그리스도와 성경은 우리에게 너무 하찮게 여겨지고, 우리 삶에 너무 가볍게 놓이게 되었다.",
            "하나님은 인간의 야망과 갈망과 소비 욕구와 사적인 영적 관심을 만족시키기 위해 존재하지 않으신다. 우리는 예배에서 우리의 개인적 필요의 만족이 아니라 하나님께 초점을 맞추어야 한다. 예배에서 하나님이 주권자이시지 우리가 주권자가 아니다. 우리의 관심은 우리 자신의 왕국과 인기와 성공이 아니라 하나님의 나라여야 한다.",
        ]),
        ("제5논제: 오직 하나님께 영광", [
            "우리는 구원이 하나님께 속하고 하나님에 의해 성취되었으므로, 그것이 하나님의 영광을 위한 것이며 우리가 항상 그분께 영광을 돌려야 함을 재확인한다. 우리는 우리의 전 생애를 하나님의 얼굴 앞에서, 하나님의 권위 아래에서, 오직 그분의 영광을 위해 살아야 한다.",
            "우리는 우리의 예배가 오락과 혼동되거나, 설교에서 율법이나 복음 중 어느 하나를 소홀히 하거나, 자기계발과 자존감과 자기실현이 복음의 대안이 되도록 허용한다면 하나님께 합당하게 영광을 돌릴 수 있다는 주장을 부인한다.",
        ]),
        ("회개와 개혁을 향한 부름", [
            "과거 복음주의 교회의 신실함은 오늘날의 불신실함과 뚜렷하게 대조된다. 금세기 초 복음주의 교회들은 놀라운 선교적 노력을 지속했고, 성경적 진리와 그리스도의 나라를 섬기기 위해 많은 종교 기관을 세웠다. 그때에는 그리스도인의 행동과 기대가 문화의 행동과 기대와 뚜렷이 달랐다. 그러나 오늘날에는 그렇지 않은 경우가 많다. 오늘의 복음주의 세계는 성경적 신실함과 도덕적 나침반과 선교적 열심을 잃어가고 있다.",
            "우리는 우리의 세속성을 회개한다. 우리는 세속 문화의 ‘복음들’에 영향을 받아 왔지만, 그것들은 복음이 아니다. 우리는 진지한 회개의 부족, 다른 사람에게서 너무나 분명히 보는 죄를 우리 자신 안에서는 보지 못하는 눈멀음, 그리고 예수 그리스도 안에서 이루신 하나님의 구원 사역을 다른 이들에게 충분히 전하지 못한 변명의 여지 없는 실패로 교회를 약화시켰다.",
            "우리는 또한 이 선언에서 다룬 문제들에 있어 하나님의 말씀에서 벗어난, 잘못된 길에 있는 복음주의 신앙 고백자들을 간절히 다시 부른다. 여기에는 예수 그리스도에 대한 분명한 믿음 없이도 영생의 소망이 있다고 선언하는 이들, 이 생애에서 그리스도를 거부한 자들이 영원한 고통을 통한 하나님의 공의로운 심판을 견디는 것이 아니라 소멸될 것이라고 주장하는 이들, 그리고 성경적 칭의 교리가 믿어지지 않는 상황에서도 복음주의자들과 로마 가톨릭이 예수 그리스도 안에서 하나라고 주장하는 이들이 포함된다.",
            "Alliance of Confessing Evangelicals는 모든 그리스도인에게 이 선언을 교회의 예배와 사역과 정책과 삶과 전도 안에서 실천할 것을 숙고해 달라고 요청한다.",
            "그리스도를 위하여. 아멘.",
        ]),
    ],
}


TH = {
    "code": "th",
    "lang": "th",
    "title": "คำประกาศเคมบริดจ์",
    "subtitle": "20 เมษายน 1996",
    "cover_note": "ฉบับแปลภาษาไทย",
    "source": f"แหล่งที่มาต้นฉบับ: {SOURCE_NAME}",
    "translator": "แปลโดย Yongjin Choi",
    "permission": "คำประกาศนี้สามารถนำไปทำซ้ำได้โดยไม่ต้องขออนุญาต กรุณาระบุแหล่งที่มาโดยอ้างถึง Alliance of Confessing Evangelicals",
    "sections": [
        ("", [
            "คริสตจักรอีแวนเจลิคัลในปัจจุบันกำลังถูกครอบงำโดยจิตวิญญาณของยุคสมัยมากกว่าพระวิญญาณของพระคริสต์มากขึ้นเรื่อย ๆ ในฐานะผู้เชื่ออีแวนเจลิคัล เราขอเรียกตนเองให้กลับใจจากบาปนี้ และให้ฟื้นคืนความเชื่อคริสเตียนตามประวัติศาสตร์",
            "ตลอดประวัติศาสตร์ ความหมายของถ้อยคำย่อมเปลี่ยนแปลงได้ ในสมัยของเรา สิ่งนี้เกิดขึ้นกับคำว่า “อีแวนเจลิคัล” ในอดีตคำนี้เคยเป็นสายสัมพันธ์แห่งเอกภาพระหว่างคริสเตียนจากประเพณีคริสตจักรที่หลากหลาย อีแวนเจลิคัลตามประวัติศาสตร์เป็นความเชื่อที่ยึดคำสารภาพเชื่อ รับเอาความจริงสำคัญของคริสต์ศาสนาตามที่สภาสากลสำคัญของคริสตจักรได้อธิบายไว้ นอกจากนี้ ผู้เชื่ออีแวนเจลิคัลยังมีมรดกร่วมกันในหลัก “โซลา” ของการปฏิรูปศาสนาโปรเตสแตนต์ในศตวรรษที่สิบหก",
            "ทุกวันนี้ แสงสว่างแห่งการปฏิรูปศาสนาถูกทำให้มัวลงอย่างมาก ผลที่ตามมาก็คือคำว่า “อีแวนเจลิคัล” ถูกใช้กว้างจนแทบสูญเสียความหมาย เรากำลังเผชิญอันตรายที่จะสูญเสียเอกภาพซึ่งต้องใช้เวลาหลายศตวรรษกว่าจะได้มา เพราะวิกฤตนี้ และเพราะความรักที่เรามีต่อพระคริสต์ ข่าวประเสริฐของพระองค์ และคริสตจักรของพระองค์ เราจึงตั้งใจยืนยันอีกครั้งถึงความผูกพันของเราต่อความจริงสำคัญของการปฏิรูปศาสนาและของอีแวนเจลิคัลตามประวัติศาสตร์ เราขอยืนยันความจริงเหล่านี้ ไม่ใช่เพียงเพราะมันมีบทบาทในประเพณีของเรา แต่เพราะเราเชื่อว่ามันเป็นศูนย์กลางของพระคัมภีร์",
        ]),
        ("Sola Scriptura: การกัดกร่อนของสิทธิอำนาจ", [
            "พระคัมภีร์เท่านั้นเป็นกฎเกณฑ์ที่ไม่ผิดพลาดสำหรับชีวิตของคริสตจักร แต่คริสตจักรอีแวนเจลิคัลในปัจจุบันได้แยกพระคัมภีร์ออกจากหน้าที่แห่งสิทธิอำนาจของพระคัมภีร์ ในทางปฏิบัติ คริสตจักรมักถูกนำโดยวัฒนธรรมบ่อยเกินไป เทคนิคเชิงบำบัด กลยุทธ์การตลาด และจังหวะของโลกบันเทิง มักมีอิทธิพลต่อสิ่งที่คริสตจักรต้องการ วิธีที่คริสตจักรดำเนินงาน และสิ่งที่คริสตจักรเสนอ มากกว่าพระวจนะของพระเจ้า ศิษยาภิบาลละเลยความรับผิดชอบอันชอบธรรมในการดูแลการนมัสการ รวมถึงเนื้อหาหลักคำสอนในบทเพลง เมื่อสิทธิอำนาจของพระคัมภีร์ถูกละทิ้งในทางปฏิบัติ เมื่อความจริงของพระคัมภีร์เลือนหายจากจิตสำนึกของคริสเตียน และเมื่อหลักคำสอนสูญเสียความคมชัด คริสตจักรก็ถูกทำให้ว่างเปล่าจากความสัตย์ซื่อภายใน สิทธิอำนาจทางศีลธรรม และทิศทางมากขึ้นเรื่อย ๆ",
            "แทนที่จะปรับความเชื่อคริสเตียนให้ตอบสนองความต้องการที่ผู้บริโภครู้สึก เราต้องประกาศธรรมบัญญัติว่าเป็นมาตรฐานเดียวของความชอบธรรมแท้ และประกาศข่าวประเสริฐว่าเป็นการแจ้งข่าวเดียวแห่งความจริงที่ช่วยให้รอด ความจริงตามพระคัมภีร์เป็นสิ่งจำเป็นต่อความเข้าใจ การเลี้ยงดู และการวินัยของคริสตจักร",
            "พระคัมภีร์ต้องนำเราให้ไปไกลกว่าความต้องการที่เราคิดว่าเรามี ไปสู่ความต้องการแท้จริงของเรา และปลดปล่อยเราให้พ้นจากการมองตนเองผ่านภาพลวง คำซ้ำซาก คำสัญญา และลำดับความสำคัญอันเย้ายวนของวัฒนธรรมมวลชน เฉพาะในแสงสว่างแห่งความจริงของพระเจ้าเท่านั้นที่เราจะเข้าใจตนเองอย่างถูกต้องและเห็นการจัดเตรียมของพระเจ้าสำหรับความจำเป็นของเรา ดังนั้น พระคัมภีร์ต้องได้รับการสอนและประกาศในคริสตจักร คำเทศนาต้องเป็นการอธิบายพระคัมภีร์และคำสอนของพระคัมภีร์ ไม่ใช่การแสดงความเห็นของผู้เทศน์หรือแนวคิดของยุคสมัย เราต้องไม่ยอมรับสิ่งใดที่น้อยกว่าสิ่งที่พระเจ้าประทานให้",
            "พระราชกิจของพระวิญญาณบริสุทธิ์ในประสบการณ์ส่วนตัวไม่อาจถูกแยกออกจากพระคัมภีร์ พระวิญญาณไม่ตรัสในทางที่เป็นอิสระจากพระคัมภีร์ หากปราศจากพระคัมภีร์ เราจะไม่มีวันรู้จักพระคุณของพระเจ้าในพระคริสต์ พระวจนะตามพระคัมภีร์ ไม่ใช่ประสบการณ์ฝ่ายวิญญาณ เป็นเครื่องทดสอบความจริง",
        ]),
        ("ข้อเสนอที่หนึ่ง: พระคัมภีร์เท่านั้น", [
            "เราขอยืนยันอีกครั้งว่า พระคัมภีร์ที่ไม่ผิดพลาดเป็นแหล่งเดียวของการเปิดเผยจากพระเจ้าที่เป็นลายลักษณ์อักษร และมีเพียงพระคัมภีร์เท่านั้นที่สามารถผูกมัดมโนธรรมได้ พระคัมภีร์เท่านั้นสอนทุกสิ่งที่จำเป็นต่อความรอดจากบาปของเรา และเป็นมาตรฐานซึ่งพฤติกรรมคริสเตียนทั้งหมดต้องถูกวัด",
            "เราขอปฏิเสธว่า หลักข้อเชื่อ สภา หรือบุคคลใด ๆ จะผูกมัดมโนธรรมของคริสเตียนได้ เราปฏิเสธว่าพระวิญญาณบริสุทธิ์ตรัสโดยเป็นอิสระจาก หรือขัดแย้งกับสิ่งที่กล่าวไว้ในพระคัมภีร์ และปฏิเสธว่าประสบการณ์ฝ่ายวิญญาณส่วนตัวจะเป็นช่องทางของการเปิดเผยได้",
        ]),
        ("Solus Christus: การกัดกร่อนของความเชื่อที่มีพระคริสต์เป็นศูนย์กลาง", [
            "เมื่อความเชื่ออีแวนเจลิคัลถูกทำให้เป็นแบบโลก ความสนใจของมันก็พร่าเลือนไปกับความสนใจของวัฒนธรรม ผลที่เกิดขึ้นคือการสูญเสียคุณค่าอันเด็ดขาด ปัจเจกนิยมที่ยอมตามใจตนเอง และการแทนที่ความบริสุทธิ์ด้วยความครบถ้วนภายใน แทนที่การกลับใจด้วยการเยียวยาฟื้นตัว แทนที่ความจริงด้วยสัญชาตญาณ แทนที่ความเชื่อด้วยความรู้สึก แทนที่พระปกครองของพระเจ้าด้วยความบังเอิญ และแทนที่ความหวังอันยั่งยืนด้วยความพึงพอใจทันที พระคริสต์และกางเขนของพระองค์ได้ถูกย้ายออกจากศูนย์กลางสายตาของเรา",
        ]),
        ("ข้อเสนอที่สอง: พระคริสต์เท่านั้น", [
            "เราขอยืนยันอีกครั้งว่า ความรอดของเราสำเร็จโดยพระราชกิจแห่งการเป็นคนกลางของพระคริสต์ในประวัติศาสตร์เท่านั้น ชีวิตที่ปราศจากบาปของพระองค์และการชดใช้แทนของพระองค์เท่านั้นเพียงพอสำหรับการทรงนับว่าเราเป็นผู้ชอบธรรมและการคืนดีกับพระบิดา",
            "เราขอปฏิเสธว่ามีการประกาศข่าวประเสริฐแล้ว หากไม่ได้ประกาศพระราชกิจการรับโทษแทนของพระคริสต์ และไม่ได้เรียกร้องให้มีความเชื่อในพระคริสต์และพระราชกิจของพระองค์",
        ]),
        ("Sola Gratia: การกัดกร่อนของข่าวประเสริฐ", [
            "ความมั่นใจอย่างไร้เหตุผลในความสามารถของมนุษย์เป็นผลผลิตของธรรมชาติมนุษย์ที่ล้มลง ความมั่นใจเท็จนี้กำลังเต็มอยู่ในโลกอีแวนเจลิคัล ตั้งแต่ข่าวประเสริฐเรื่องความนับถือตนเอง ไปจนถึงข่าวประเสริฐเรื่องสุขภาพและความมั่งคั่ง ตั้งแต่ผู้ที่เปลี่ยนข่าวประเสริฐให้เป็นสินค้าที่ขายได้และเปลี่ยนคนบาปให้เป็นผู้บริโภคที่ต้องการซื้อ ไปจนถึงผู้ที่ถือว่าความเชื่อคริสเตียนเป็นความจริงเพียงเพราะมันได้ผล สิ่งนี้ทำให้หลักคำสอนเรื่องการทรงนับว่าเป็นผู้ชอบธรรมเงียบลง ไม่ว่าคริสตจักรของเราจะมีคำประกาศอย่างเป็นทางการอย่างไรก็ตาม พระคุณของพระเจ้าในพระคริสต์ไม่ใช่เพียงสิ่งจำเป็น แต่เป็นสาเหตุอันทรงประสิทธิผลเพียงประการเดียวของความรอด เราสารภาพว่ามนุษย์เกิดมาโดยตายฝ่ายวิญญาณ และไม่สามารถแม้แต่จะร่วมมือกับพระคุณที่ทำให้บังเกิดใหม่ได้",
        ]),
        ("ข้อเสนอที่สาม: พระคุณเท่านั้น", [
            "เราขอยืนยันอีกครั้งว่า ในความรอด เราถูกช่วยให้พ้นจากพระพิโรธของพระเจ้าโดยพระคุณของพระองค์เท่านั้น พระราชกิจเหนือธรรมชาติของพระวิญญาณบริสุทธิ์เป็นสิ่งที่นำเราไปหาพระคริสต์ โดยปลดปล่อยเราจากพันธนาการของบาป และยกเราจากความตายฝ่ายวิญญาณสู่ชีวิตฝ่ายวิญญาณ",
            "เราขอปฏิเสธว่าความรอดเป็นงานของมนุษย์ในความหมายใดก็ตาม วิธีการ เทคนิค หรือกลยุทธ์ของมนุษย์โดยตัวมันเองไม่สามารถทำให้เกิดการเปลี่ยนแปลงนี้ได้ ความเชื่อไม่ได้เกิดจากธรรมชาติมนุษย์ที่ยังไม่บังเกิดใหม่ของเรา",
        ]),
        ("Sola Fide: การกัดกร่อนของบทความหลัก", [
            "การทรงนับว่าเป็นผู้ชอบธรรมเกิดขึ้นโดยพระคุณเท่านั้น ผ่านความเชื่อเท่านั้น เพราะพระคริสต์เท่านั้น นี่คือบทความที่คริสตจักรจะตั้งอยู่หรือล้มลง ทุกวันนี้บทความนี้มักถูกละเลย ถูกบิดเบือน หรือบางครั้งถึงกับถูกปฏิเสธโดยผู้นำ นักวิชาการ และศิษยาภิบาลที่อ้างว่าเป็นอีแวนเจลิคัล แม้ว่าธรรมชาติมนุษย์ที่ล้มลงจะถอยหนีอยู่เสมอจากการยอมรับว่าตนต้องการความชอบธรรมของพระคริสต์ที่ถูกนับให้ แต่ความเป็นสมัยใหม่ยิ่งโหมไฟแห่งความไม่พอใจต่อข่าวประเสริฐตามพระคัมภีร์นี้ เราได้ยอมให้ความไม่พอใจนี้กำหนดลักษณะของพันธกิจของเราและสิ่งที่เรากำลังประกาศ",
            "หลายคนในขบวนการเติบโตของคริสตจักรเชื่อว่า ความเข้าใจเชิงสังคมวิทยาเกี่ยวกับคนที่นั่งอยู่ในที่ประชุมมีความสำคัญต่อความสำเร็จของข่าวประเสริฐเท่ากับความจริงตามพระคัมภีร์ที่ถูกประกาศ ผลก็คือ ความเชื่อมั่นทางศาสนศาสตร์มักถูกแยกออกจากงานพันธกิจ แนวคิดแบบการตลาดในหลายคริสตจักรผลักสิ่งนี้ให้ไกลยิ่งขึ้น ลบเส้นแบ่งระหว่างพระวจนะตามพระคัมภีร์กับโลก ปล้นเอาความสะดุดของกางเขนพระคริสต์ไป และลดทอนความเชื่อคริสเตียนให้เหลือเพียงหลักการและวิธีการที่นำความสำเร็จมาให้บริษัทฝ่ายโลก",
            "แม้อาจมีการเชื่อในศาสนศาสตร์แห่งกางเขน แต่ขบวนการเหล่านี้กำลังทำให้ความหมายของมันกลวงเปล่า ในความจริง ไม่มีข่าวประเสริฐใดนอกจากข่าวประเสริฐเรื่องการแทนที่ของพระคริสต์เพื่อเรา ซึ่งพระเจ้าทรงนับบาปของเราให้แก่พระองค์ และทรงนับความชอบธรรมของพระองค์ให้แก่เรา เพราะพระองค์ทรงรับการพิพากษาแทนเรา บัดนี้เราจึงดำเนินในพระคุณของพระองค์ ในฐานะผู้ที่ได้รับการอภัยตลอดไป ได้รับการยอมรับ และได้รับการรับเป็นบุตรของพระเจ้า ไม่มีรากฐานใดที่เราจะได้รับการยอมรับต่อพระพักตร์พระเจ้า นอกจากพระราชกิจแห่งความรอดของพระคริสต์ ไม่ใช่ความรักชาติ ความอุทิศตนต่อคริสตจักร หรือความดีทางศีลธรรมของเรา ข่าวประเสริฐประกาศสิ่งที่พระเจ้าได้ทรงกระทำเพื่อเราในพระคริสต์ ไม่ใช่เรื่องที่ว่าเราสามารถทำอะไรเพื่อไปถึงพระองค์ได้",
        ]),
        ("ข้อเสนอที่สี่: ความเชื่อเท่านั้น", [
            "เราขอยืนยันอีกครั้งว่า การทรงนับว่าเป็นผู้ชอบธรรมเกิดขึ้นโดยพระคุณเท่านั้น ผ่านความเชื่อเท่านั้น เพราะพระคริสต์เท่านั้น ในการทรงนับว่าเป็นผู้ชอบธรรม ความชอบธรรมของพระคริสต์ถูกนับให้แก่เรา เป็นสิ่งเดียวที่สามารถทำให้ความยุติธรรมอันสมบูรณ์ของพระเจ้าพอพระทัยได้",
            "เราขอปฏิเสธว่าการทรงนับว่าเป็นผู้ชอบธรรมตั้งอยู่บนคุณความดีใด ๆ ที่พบในตัวเรา หรือบนพื้นฐานของความชอบธรรมของพระคริสต์ที่ถูกเทใส่เข้ามาในเรา และเราปฏิเสธว่าสถาบันที่อ้างว่าเป็นคริสตจักร แต่ปฏิเสธหรือตัดสินลงโทษหลักความเชื่อเท่านั้น จะสามารถได้รับการยอมรับว่าเป็นคริสตจักรที่ชอบธรรมได้",
        ]),
        ("Soli Deo Gloria: การกัดกร่อนของการนมัสการที่มีพระเจ้าเป็นศูนย์กลาง", [
            "ที่ใดก็ตามในคริสตจักรที่สิทธิอำนาจตามพระคัมภีร์สูญหาย พระคริสต์ถูกแทนที่ ข่าวประเสริฐถูกบิดเบือน หรือความเชื่อถูกทำให้ผิดเพี้ยน เหตุผลก็มีเพียงอย่างเดียวเสมอ คือความสนใจของเราได้แทนที่ความสนใจของพระเจ้า และเรากำลังทำงานของพระองค์ตามวิธีของเราเอง การสูญเสียความเป็นศูนย์กลางของพระเจ้าในชีวิตคริสตจักรปัจจุบันเป็นเรื่องทั่วไปและน่าเศร้า การสูญเสียนี้เองเปิดทางให้เราเปลี่ยนการนมัสการเป็นความบันเทิง เปลี่ยนการประกาศข่าวประเสริฐเป็นการตลาด เปลี่ยนการเชื่อเป็นเทคนิค เปลี่ยนการเป็นคนดีเป็นการรู้สึกดีกับตัวเอง และเปลี่ยนความสัตย์ซื่อเป็นความสำเร็จ ผลก็คือ พระเจ้า พระคริสต์ และพระคัมภีร์มีความหมายน้อยเกินไปต่อเรา และมีน้ำหนักเบาเกินไปในชีวิตของเรา",
            "พระเจ้าไม่ได้ดำรงอยู่เพื่อสนองความทะเยอทะยาน ความอยาก ความกระหายในการบริโภค หรือความสนใจฝ่ายวิญญาณส่วนตัวของมนุษย์ เราต้องมุ่งที่พระเจ้าในการนมัสการ ไม่ใช่ที่การตอบสนองความต้องการส่วนตัวของเรา พระเจ้าทรงเป็นองค์อธิปไตยในการนมัสการ เราไม่ใช่ ความห่วงใยของเราต้องเป็นเรื่องอาณาจักรของพระเจ้า ไม่ใช่อาณาจักรของเราเอง ความนิยม หรือความสำเร็จของเรา",
        ]),
        ("ข้อเสนอที่ห้า: พระเกียรติสิริแด่พระเจ้าเท่านั้น", [
            "เราขอยืนยันอีกครั้งว่า เพราะความรอดเป็นของพระเจ้าและสำเร็จโดยพระเจ้า ความรอดจึงเป็นไปเพื่อพระเกียรติสิริของพระเจ้า และเราต้องถวายพระเกียรติแด่พระองค์เสมอ เราต้องดำเนินชีวิตทั้งหมดของเราต่อพระพักตร์พระเจ้า ภายใต้สิทธิอำนาจของพระเจ้า และเพื่อพระเกียรติสิริของพระองค์เท่านั้น",
            "เราขอปฏิเสธว่าเราจะถวายพระเกียรติแด่พระเจ้าได้อย่างถูกต้อง หากการนมัสการของเราสับสนกับความบันเทิง หากเราละเลยธรรมบัญญัติหรือข่าวประเสริฐในการเทศนา หรือหากการพัฒนาตนเอง ความนับถือตนเอง หรือการเติมเต็มตนเองได้รับอนุญาตให้เป็นทางเลือกแทนข่าวประเสริฐ",
        ]),
        ("การเรียกให้กลับใจและปฏิรูป", [
            "ความสัตย์ซื่อของคริสตจักรอีแวนเจลิคัลในอดีตตัดกันอย่างชัดเจนกับความไม่สัตย์ซื่อในปัจจุบัน ในช่วงต้นศตวรรษนี้ คริสตจักรอีแวนเจลิคัลได้ดำเนินงานมิชชันนารีอย่างน่าทึ่ง และสร้างสถาบันทางศาสนามากมายเพื่อรับใช้ความจริงตามพระคัมภีร์และอาณาจักรของพระคริสต์ นั่นเป็นเวลาที่พฤติกรรมและความคาดหวังของคริสเตียนแตกต่างอย่างเห็นได้ชัดจากวัฒนธรรม แต่ทุกวันนี้มักไม่เป็นเช่นนั้น โลกอีแวนเจลิคัลในปัจจุบันกำลังสูญเสียความสัตย์ซื่อตามพระคัมภีร์ เข็มทิศทางศีลธรรม และความกระตือรือร้นด้านพันธกิจ",
            "เรากลับใจจากความเป็นแบบโลกของเรา เราได้รับอิทธิพลจาก “ข่าวประเสริฐ” ของวัฒนธรรมฝ่ายโลก ซึ่งแท้จริงไม่ใช่ข่าวประเสริฐ เราทำให้คริสตจักรอ่อนแอลงด้วยการขาดการกลับใจอย่างจริงจัง ด้วยความมืดบอดต่อบาปในตัวเราเอง ทั้งที่เราเห็นบาปเหล่านั้นในผู้อื่นอย่างชัดเจน และด้วยความล้มเหลวที่ไม่มีข้อแก้ตัวในการบอกผู้อื่นอย่างเพียงพอถึงพระราชกิจแห่งความรอดของพระเจ้าในพระเยซูคริสต์",
            "เรายังขอเรียกอย่างจริงใจให้ผู้ที่ประกาศตนว่าเป็นอีแวนเจลิคัลแต่หลงผิด และได้เบี่ยงเบนจากพระวจนะของพระเจ้าในประเด็นที่กล่าวถึงในคำประกาศนี้ กลับมา สิ่งนี้รวมถึงผู้ที่ประกาศว่ามีความหวังแห่งชีวิตนิรันดร์ได้โดยปราศจากความเชื่ออย่างชัดเจนในพระเยซูคริสต์ ผู้ที่อ้างว่าผู้ปฏิเสธพระคริสต์ในชีวิตนี้จะถูกทำลายให้หมดสิ้นแทนที่จะต้องทนรับการพิพากษาอันยุติธรรมของพระเจ้าผ่านความทุกข์นิรันดร์ หรือผู้ที่อ้างว่าอีแวนเจลิคัลกับโรมันคาทอลิกเป็นหนึ่งเดียวกันในพระเยซูคริสต์ แม้ในที่ซึ่งไม่ได้เชื่อหลักคำสอนเรื่องการทรงนับว่าเป็นผู้ชอบธรรมตามพระคัมภีร์",
            "Alliance of Confessing Evangelicals ขอให้คริสเตียนทุกคนพิจารณานำคำประกาศนี้ไปปฏิบัติในการนมัสการ พันธกิจ นโยบาย ชีวิต และการประกาศข่าวประเสริฐของคริสตจักร",
            "เพื่อเห็นแก่พระคริสต์ อาเมน",
        ]),
    ],
}


def paragraph(text: str) -> str:
    return f"<p>{html.escape(text)}</p>"


def render(doc: dict) -> str:
    title = html.escape(doc["title"])
    subtitle = html.escape(doc["subtitle"])
    source = html.escape(doc["source"])
    translator = html.escape(doc["translator"])
    permission = html.escape(doc["permission"])
    direction_lang = html.escape(doc["lang"])
    section_html = []
    for heading, paragraphs in doc["sections"]:
        if heading:
            section_html.append(f"<h2>{html.escape(heading)}</h2>")
        section_html.extend(paragraph(p) for p in paragraphs)
    translator_html = f"<p class='translator'>{translator}</p>" if translator else ""
    return f"""<!doctype html>
<html lang="{direction_lang}">
<head>
<meta charset="utf-8">
<title>{title}</title>
<style>
@page {{ size: A4; margin: 25mm 23mm 23mm; }}
@font-face {{
  font-family: "TFLM Noto Sans Thai";
  src: url("file:///Users/udmission/Library/Fonts/NotoSansThai-VariableFont_wdth,wght.ttf") format("truetype");
  font-weight: 100 900;
}}
@font-face {{
  font-family: "TFLM Kanit";
  src: url("file:///Users/udmission/Library/Fonts/Kanit-SemiBold.ttf") format("truetype");
  font-weight: 600;
}}
@font-face {{
  font-family: "TFLM Kanit";
  src: url("file:///Users/udmission/Library/Fonts/Kanit-Regular.ttf") format("truetype");
  font-weight: 400;
}}
@font-face {{
  font-family: "TFLM Mitr";
  src: url("file:///Users/udmission/Library/Fonts/Mitr-SemiBold.ttf") format("truetype");
  font-weight: 600;
}}
@font-face {{
  font-family: "TFLM Mitr";
  src: url("file:///Users/udmission/Library/Fonts/Mitr-Regular.ttf") format("truetype");
  font-weight: 400;
}}
* {{ box-sizing: border-box; }}
body {{
  margin: 0;
  color: #173f35;
  background: white;
  font-family: -apple-system, BlinkMacSystemFont, "Avenir Next", "Apple SD Gothic Neo", "Thonburi", "Noto Sans Thai", "Noto Sans", Arial, sans-serif;
  font-size: 13.2pt;
  line-height: 1.9;
}}
.cover {{
  height: 235mm;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  page-break-after: always;
  border: 1.4mm solid #d6ad4b;
  border-radius: 14mm;
  padding: 24mm;
  background: radial-gradient(circle at 50% 28%, #ffffff 0, #f8f5eb 48%, #edf4ef 100%);
}}
h1 {{ margin: 0; font-family: Georgia, "Times New Roman", "Apple SD Gothic Neo", serif; font-size: 40pt; line-height: 1.14; color: #102f28; }}
.subtitle {{ margin: 18px 0 0; color: #6f5a2b; font-size: 16pt; font-weight: 700; }}
.cover-note {{ margin: 30px 0 0; color: #44645b; font-weight: 700; letter-spacing: .04em; }}
.translator {{ margin: 10px 0 0; color: #44645b; font-weight: 700; }}
.source {{ margin-top: 48px; padding-top: 16px; border-top: 1px solid #d7ded9; color: #5d6f68; font-size: 10.5pt; }}
.body-title {{ margin: 0 0 22px; padding-bottom: 14px; border-bottom: 2px solid #d6ad4b; font-family: Georgia, "Times New Roman", "Apple SD Gothic Neo", serif; font-size: 28pt; line-height: 1.2; color: #102f28; }}
h2 {{ margin: 30px 0 11px; color: #0f5a48; font-size: 17.5pt; line-height: 1.4; page-break-after: avoid; }}
html[lang="th"] h1,
html[lang="th"] .body-title,
html[lang="th"] h2,
html[lang="th"] .subtitle,
html[lang="th"] .cover-note {{
  font-family: "TFLM Mitr", "Mitr", "TFLM Kanit", "Kanit", "TFLM Noto Sans Thai", "Noto Sans Thai", sans-serif;
  font-weight: 600;
  letter-spacing: .01em;
}}
html[lang="th"] body {{
  font-family: "TFLM Noto Sans Thai", "Noto Sans Thai", "Sarabun", "Thonburi", sans-serif;
}}
html[lang="th"] h1 {{
  font-size: 40pt;
  line-height: 1.22;
}}
html[lang="th"] .body-title {{
  font-family: "TFLM Kanit", "Kanit", "TFLM Mitr", "Mitr", "TFLM Noto Sans Thai", "Noto Sans Thai", sans-serif;
  font-size: 30pt;
}}
html[lang="th"] h2 {{
  font-family: "TFLM Kanit", "Kanit", "TFLM Mitr", "Mitr", "TFLM Noto Sans Thai", "Noto Sans Thai", sans-serif;
  font-size: 20pt;
  line-height: 1.45;
}}
p {{ margin: 0 0 15px; orphans: 3; widows: 3; }}
html[lang="ko"] main p:not(.permission),
html[lang="en"] main p:not(.permission) {{
  text-align: justify;
  text-justify: inter-word;
}}
.permission {{ margin-top: 32px; padding: 16px 18px; border-left: 5px solid #d6ad4b; background: #fbf6e9; color: #594719; font-size: 11pt; line-height: 1.75; }}
.url {{ overflow-wrap: anywhere; color: #426159; font-size: 10pt; }}
</style>
</head>
<body>
  <section class="cover">
    <h1>{title}</h1>
    <p class="subtitle">{subtitle}</p>
    <p class="cover-note">{html.escape(doc["cover_note"])}</p>
    {translator_html}
    <p class="source">{source}<br><span class="url">{SOURCE_URL}</span></p>
  </section>
  <main>
    <h1 class="body-title">{title}</h1>
    {''.join(section_html)}
    <p class="permission">{permission}<br>{source}<br><span class="url">{SOURCE_URL}</span></p>
  </main>
</body>
</html>"""


def main() -> None:
    for doc in (EN, KO, TH):
        (OUT / f"cambridge-declaration-{doc['code']}.html").write_text(render(doc), encoding="utf-8")
    print(OUT)


if __name__ == "__main__":
    main()
