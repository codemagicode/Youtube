import { MagiTypes } from "../../Shared/Characters/Magi/Magi"
import { handActions } from "../../Shared/Characters/Magi/predefined/hands"
import { speak } from "../../Shared/Characters/Magi/predefined/words"

const recapIntroHi = handActions.wave(4, 20, 10)
export const charData04 = {
    RecapIntro: {
        mouth: [
            ...speak.welcome(25), ...speak.back(45),
            { viseme: 'smile', frame: 72 },
            ...speak.if(99), ...speak.you(108), ...speak.are(120), ...speak.new(124), ...speak.here(153),
            { viseme: 'smile', frame: 177 },
            ...speak.i(194), ...speak.am(212), ...speak.building(234), { viseme: 'a', frame: 247 }, ...speak.language(257), ...speak.app(277), ...speak.called(297), ...speak.hello(336), ...speak.kannada(363),
            { viseme: 'smile', frame: 415 },
            ...speak.if(417), ...speak.you(426), ...speak.are(438), ...speak.returning(460),
            ...speak.i(485), ...speak.assume(504), ...speak.your(529), ...speak.netflix(552), ...speak.subscription(582), ...speak.expired(612),
            ...speak.and(660), ...speak.you(675), ...speak.have(680), ...speak.nothing(699), ...speak.better(720), { viseme: 'uu', frame: 743 },
            { viseme: 'smile', frame: 755 },
            ...speak.in(822), ...speak.the(832), ...speak.last(842), ...speak.video(852),
            ...speak.i(882), ...speak.explained(900), ...speak.the(925),
            ...speak.user(944), ...speak.management(966), ...speak.system(996),
            { viseme: 'smile', frame: 1031 },
            ...speak.it(1070), { viseme: 'smile', frame: 1080 }, ...speak.was(1092), ...speak.riveting(1105),
            { viseme: 'smile', frame: 1140 },
            ...speak.i(1147), { viseme: 'smile', frame: 1157 }, ...speak.almost(1160), { viseme: 'smile', frame: 1185 }, ...speak.bored(1189), ...speak.myself(1206), ...speak.to(1229), { viseme: 'smile', frame: 1239 }, ...speak.sleep(1247),
            { viseme: 'smile', frame: 1250 },
            ...speak.and(1262), { viseme: 'smile', frame: 1272 }, ...speak.i(1308), ...speak.dont(1317), ...speak.even(1335), ...speak.sleep(1347),
            { viseme: 'smile', frame: 1354 },
        ],
        eyeType: [
            { type: 'close', isEnabled: [1143, 1243] },
        ],
        head: [
            { rotation: 0, frame: 0 },
            { rotation: 0, frame: 1143 },
            { rotation: -15, frame: 1203 },
            { rotation: -15, frame: 1243 },
            { rotation: 0, frame: 1253 },
        ],
        leftHand: {
            shoulder: [
                ...recapIntroHi.shoulder,
                { degree: 0, frame: 338 },
                { degree: 30, frame: 358 },
                { degree: 30, frame: 400 },
                { degree: 0, frame: 420 },
            ],
            arms: [
                ...recapIntroHi.arms,
                { degree: 0, frame: 338 },
                { degree: 90, frame: 358 },
                { degree: 90, frame: 400 },
                { degree: 0, frame: 420 },
            ]
        },
        rightHand: {
            shoulder: [
                { degree: 0, frame: 526 },
                { degree: -30, frame: 546 },
                { degree: -30, frame: 598 },
                { degree: 0, frame: 618 },
            ],
            arms: [
                { degree: 0, frame: 526 },
                { degree: -90, frame: 546 },
                { degree: -90, frame: 598 },
                { degree: 0, frame: 618 },
            ]
        },
    },
    TheEngine: {
        mouth: [
            ...speak.today(30),
            { viseme: 'smile', frame: 63 },
            ...speak.we(77),
            ...speak.are(98),
            ...speak.building(110),
            ...speak.the(145),
            ...speak.engine(150),
            { viseme: 'smile', frame: 180 },
            ...speak.because(215),
            ...speak.right(250),
            ...speak.now(270),
            ...speak.the(291),
            ...speak.app(312),
            ...speak.is(333),
            ...speak.just(342),
            ...speak.a(357),
            ...speak.fancy(371),
            ...speak.empty(391),
            ...speak.shell(417),
            { viseme: 'smile', frame: 438 },
            ...speak.like(462),
            ...speak.a(484),
            ...speak.politician(493),
            ...speak.or(518),
            ...speak.a(546),
            ...speak.javascript(554),
            ...speak.framework(575),
            ...speak.released(623),
            ...speak.in(653),
            ...speak.twentyTwentyFour(658),
        ],
        leftHand: {
            shoulder: [
                { degree: 0, frame: 0 },
                { degree: 0, frame: 90 },
                { degree: 160, frame: 110 },
                { degree: 160, frame: 250 },
                { degree: 0, frame: 270 },
                { degree: 0, frame: 461 },
                { degree: 30, frame: 480 },
            ],
            arms: [
                { degree: 0, frame: 0 },
                { degree: 0, frame: 10 },
                { degree: 0, frame: 461 },
                { degree: 100, frame: 480 },
                { degree: 100, frame: 548 },
                { degree: 30, frame: 568 },
            ]
        },
        rightHand: {
            shoulder: [
                { degree: 0, frame: 0 },
                { degree: 0, frame: 90 },
                { degree: -160, frame: 110 },
                { degree: -160, frame: 250 },
                { degree: 0, frame: 270 },
            ],
            arms: [
                { degree: 0, frame: 0 },
                { degree: 0, frame: 10 },
            ]
        },
    },
    FetchingStrategy: {
        mouth: [
            ...speak.first(0), { viseme: 'smile', frame: 20 },
            ...speak.we(52),
            ...speak.need(59),
            ...speak.to(70),
            ...speak.fetch(82),
            ...speak.data(92), { viseme: 'smile', frame: 112 },
            ...speak.now(151),
            ...speak.a(176),
            ...speak.normal(182),
            ...speak.developer(203),
            ...speak.would(236), { viseme: 'smile', frame: 251 },
            ...speak.use(257),
            ...speak.a(276), { viseme: 'smile', frame: 276 },
            ...speak.database(286), { viseme: 'smile', frame: 321 },
            ...speak.but(341),
            ...speak.i(354), { viseme: 'smile', frame: 354 },
            ...speak.am(366), { viseme: 'smile', frame: 376 },
            ...speak.not(377),
            ...speak.normal(390), { viseme: 'm', frame: 420 },
            ...speak.i(440),
            ...speak.am(446), { viseme: 'smile', frame: 456 },
            ...speak.cheap(457), { viseme: 'm', frame: 477 },
            ...speak.so(516), { viseme: 'smile', frame: 536 },
            ...speak.i(536),
            ...speak.am(546), { viseme: 'smile', frame: 556 },
            ...speak.hosting(559),
            ...speak.everything(581),
            ...speak.on(612), { viseme: 'smile', frame: 622 },
            ...speak.github(630),
            ...speak.and(649), { viseme: 'smile', frame: 659 },
            ...speak.serving(677),
            ...speak.it(702), { viseme: 'smile', frame: 712 },
            ...speak.via(716),
            ...speak.jsdelivr(732), { viseme: 'smile', frame: 762 },
            ...speak.but(805), { viseme: 'smile', frame: 825 },
            ...speak.how(833),
            ...speak.does(848),
            ...speak.the(863),
            ...speak.app(874),
            ...speak.know(887), { viseme: 'smile', frame: 902 },
            ...speak.what(905),
            ...speak.to(922), { viseme: 'smile', frame: 932 },
            ...speak.fetch(934), { viseme: 'smile', frame: 964 },
            ...speak.enter(1002),
            ...speak.meta(1019),
            ...speak.json(1042),
            { viseme: 'smile', frame: 1072 },
        ],
        eyeType: [
            { type: 'funky', isEnabled: [320, 440] },
        ],
        leftHand: {
            shoulder: [
                { degree: 0, frame: 0 },
                { degree: 140, frame: 1 },
                { degree: 140, frame: 130 },
                { degree: 0, frame: 150 },
                { degree: 0, frame: 220 },
                { degree: 60, frame: 250 },
                { degree: 60, frame: 330 },
                { degree: 0, frame: 390 },
                { degree: 0, frame: 440 },
                { degree: 10, frame: 441 },
                { degree: 0, frame: 596 },
                { degree: 100, frame: 616 },
                { degree: 100, frame: 763 },
                { degree: 0, frame: 793 },
            ],
            arms: [
                { degree: 0, frame: 0 },
                { degree: 90, frame: 1 },
                { degree: 90, frame: 130 },
                { degree: 0, frame: 150 },
                { degree: 0, frame: 220 },
                { degree: 20, frame: 250 },
                { degree: 20, frame: 330 },
                { degree: 0, frame: 390 },
                { degree: 0, frame: 440 },
                { degree: 60, frame: 441 },
                { degree: 90, frame: 596 },
                { degree: 30, frame: 616 },
            ]
        },
        rightHand: {
            shoulder: [
                { degree: 0, frame: 0 },
                { degree: -140, frame: 1 },
                { degree: -140, frame: 130 },
                { degree: 0, frame: 150 },
                { degree: -10, frame: 440 },
            ],
            arms: [
                { degree: 0, frame: 0 },
                { degree: -90, frame: 1 },
                { degree: -90, frame: 130 },
                { degree: 0, frame: 150 },
                { degree: 0, frame: 440 },
                { degree: 40, frame: 441 },
            ]
        },
        leftLeg: {
            thighs: [
                { degree: 0, frame: 0 },
                { degree: 0, frame: 440 },
                { degree: 90, frame: 441 }
            ],
            feet: [
                { degree: 0, frame: 0 },
                { degree: 0, frame: 440 },
                { degree: -90, frame: 441 }
            ]
        },
        rightLeg: {
            thighs: [
                { degree: 0, frame: 0 },
                { degree: 0, frame: 440 },
                { degree: 90, frame: 441 }
            ],
            feet: [
                { degree: 0, frame: 0 },
                { degree: 0, frame: 440 },
                { degree: -90, frame: 441 }
            ]
        }
    },
    ContentSource: {
        mouth: [
            ...speak.now(25), { viseme: 'smile', frame: 45 }, ...speak.where(108), { viseme: 'smile', frame: 123 }, ...speak.does(131), ...speak.the(143), { viseme: 'smile', frame: 153 }, ...speak.content(155), ...speak.come(171), { viseme: 'smile', frame: 186 }, ...speak.from(200), { viseme: 'smile', frame: 215 }, ...speak.i(266), ...speak.decided(273), ...speak.that(303), ...speak.simple(319), { viseme: 'smile', frame: 339 }, ...speak.flashcards(342), { viseme: 'smile', frame: 382 }, ...speak.were(385), ...speak.it(399), { viseme: 'smile', frame: 409 }, ...speak.babies(417), { viseme: 'smile', frame: 442 }, ...speak.i(485), { viseme: 'smile', frame: 495 }, ...speak.wanted(499), ...speak.complex(516), { viseme: 'smile', frame: 541 }, ...speak.sentence(552), ...speak.structures(572), ...speak.it(607), { viseme: 'smile', frame: 617 }, ...speak.deep(633), { viseme: 'smile', frame: 653 }, ...speak.grammatical(654), { viseme: 'smile', frame: 699 }, ...speak.metadata(701), { viseme: 'smile', frame: 736 }, ...speak.writing(783), ...speak.it(799), { viseme: 'smile', frame: 809 }, ...speak.it(817), { viseme: 'smile', frame: 827 }, ...speak.raw(837), ...speak.json(854), { viseme: 'smile', frame: 874 }, ...speak.is(881), { viseme: 'smile', frame: 891 }, ...speak.a(899), ...speak.form(907), { viseme: 'smile', frame: 922 }, ...speak.of(927), { viseme: 'smile', frame: 937 }, ...speak.torture(945), ...speak.banned(967), { viseme: 'smile', frame: 987 }, ...speak.by(990), { viseme: 'smile', frame: 1000 }, ...speak.the(1008), ...speak.geneva(1016), ...speak.convention(1038), { viseme: 'smile', frame: 1078 }, ...speak.so(1103), { viseme: 'smile', frame: 1113 }, ...speak.we(1117), { viseme: 'smile', frame: 1127 }, ...speak.will(1130), ...speak.build(1142), { viseme: 'smile', frame: 1157 }, ...speak.another(1158), { viseme: 'smile', frame: 1183 }, ...speak.app(1187), { viseme: 'smile', frame: 1197 }, ...speak.called(1206), { viseme: 'smile', frame: 1226 }, ...speak.it(1238), { viseme: 'smile', frame: 1248 }, ...speak.teacher(1284), { viseme: 'smile', frame: 1304 }, ...speak.yes(1373), { viseme: 'smile', frame: 1393 }, ...speak.we(1406), ...speak.will(1413), ...speak.build(1424), { viseme: 'smile', frame: 1439 }, ...speak.a(1443), ...speak.frontend(1453), { viseme: 'smile', frame: 1478 }, ...speak.to(1479), { viseme: 'smile', frame: 1489 }, ...speak.generate(1507), ...speak.the(1533), { viseme: 'smile', frame: 1543 }, ...speak.backend(1550), ...speak.it(1567), { viseme: 'smile', frame: 1577 }, ...speak.my(1587), { viseme: 'smile', frame: 1597 }, ...speak.frontend(1601),
        ],
        head: [
            { rotation: 0, frame: 30 },
            { rotation: 10, frame: 60 },
            { rotation: 10, frame: 205 },
            { rotation: 0, frame: 225 },
        ],
        leftHand: {
            shoulder: [
                { degree: 0, frame: 0 },
                { degree: 0, frame: 1 },
                { degree: 0, frame: 1279 },
                { degree: 20, frame: 1280 },
                { degree: 20, frame: 1449 },
                { degree: 0, frame: 1450 }
            ],
            arms: [
                { degree: 0, frame: 0 },
                { degree: 0, frame: 1 },
                { degree: 0, frame: 1279 },
                { degree: 30, frame: 1280 },
                { degree: 30, frame: 1449 },
                { degree: 0, frame: 1450 }
            ]
        },
        rightHand: {
            shoulder: [
                { degree: 0, frame: 0 },
                { degree: 0, frame: 1 },
                { degree: 0, frame: 1279 },
                { degree: -150, frame: 1280 },
                { degree: -150, frame: 1449 },
                { degree: 0, frame: 1450 }
            ],
            arms: [
                { degree: 0, frame: 0 },
                { degree: 0, frame: 1 },
                { degree: 0, frame: 1279 },
                { degree: -30, frame: 1280 },
                { degree: -30, frame: 1449 },
                { degree: 0, frame: 1450 }
            ]
        },
    },
    CachingIntro: {
        mouth: [
            ...speak.let(0), ...speak.talk(62), ...speak.about(73), ...speak.caching(92), ...speak.like(118), ...speak.everyone(146), ...speak.in(177), ...speak.india(194), ...speak.i(218), ...speak.have(244), ...speak.trust(256), ...speak.issues(273), ...speak.with(307), ...speak.the(324), ...speak.internet(333), ...speak.it(385), ...speak.is(402), ...speak.slow(410), ...speak.it(454), ...speak.cuts(469), ...speak.out(482), ...speak.it(532), ...speak.is(546), ...speak.full(554), ...speak.of(566), ...speak.people(577), ...speak.arguing(597), ...speak.like(627), ...speak.my(645), ...speak.girlfriend(660), ...speak.i(686), ...speak.want(723), ...speak.my(736), ...speak.app(752), ...speak.to(770), ...speak.be(782), ...speak.a(793), ...speak.safe(801), ...speak.space(817), ...speak.a(877), ...speak.sanctuary(883),
        ],
        leftLeg: {
            thighs: [
                { frame: 677, degree: 0 },
                { frame: 687, degree: 90 },
                { frame: 726, degree: 90 },
                { frame: 736, degree: 0 }
            ],
            feet: [
                { frame: 677, degree: 0 },
                { frame: 687, degree: 0 }
            ]
        },
        rightLeg: {
            thighs: [
                { frame: 677, degree: 0 },
                { frame: 687, degree: 90 },
                { frame: 726, degree: 90 },
                { frame: 736, degree: 0 }
            ],
            feet: [
                { frame: 677, degree: 0 },
                { frame: 687, degree: 0 }
            ]
        }
    },
    ClingyOffline: {
        mouth: [
            ...speak.this(0), ...speak.means(19), ...speak.you(33), ...speak.can(58), ...speak.learn(70), ...speak.kannada(88), ...speak.while(124), ...speak.stuck(151), ...speak.in(172), ...speak.an(188), ...speak.elevator(198), ...speak.or(223), ...speak.while(258), ...speak.pretending(276), ...speak.to(301), ...speak.listen(318), ...speak.to(333), ...speak.your(346), ...speak.boss(355),
            {viseme: 'smile', frame: 376},
            ...speak.the(414), ...speak.app(416), ...speak.becomes(430), ...speak.clingy(462), 
            {viseme: 'smile', frame: 483},
            ...speak.it(534), ...speak.refuses(540), ...speak.to(565), ...speak.let(585), ...speak.go(595), ...speak.of(610), ...speak.the(624), ...speak.data(632), 
            {viseme: 'smile', frame: 663},
            ...speak.even(679), ...speak.if(699), ...speak.you(714), ...speak.go(721), ...speak.offline(733), ...speak.the(777), ...speak.app(778), ...speak.is(798), ...speak.still(808), ...speak.there(820), 
            {viseme: 'smile', frame: 852},
            ...speak.watching(864), ...speak.waiting(910),
            {viseme: 'smile', frame: 941}
        ]
    },
    QuizLogic: {
        mouth: [
            ...speak.sometimes(0), ...speak.it(28), ...speak.asks(49), ...speak.you(69), ...speak.to(87), ...speak.translate(98), ...speak.a(129), ...speak.word(145), ...speak.sometimes(198), ...speak.it(225), ...speak.asks(240), ...speak.you(261), ...speak.to(276), ...speak.build(283), ...speak.a(297), ...speak.sentence(309), ...speak.sometimes(378), ...speak.it(404), ...speak.gives(426), ...speak.you(439), ...speak.four(454), ...speak.options(469), ...speak.because(501), ...speak.the(559), ...speak.distractors(572), ...speak.are(619), ...speak.randomized(631), ...speak.you(692), ...speak.cannot(697), ...speak.cheat(715), ...speak.you(770), ...speak.actually(787), ...speak.have(813), ...speak.to(828), ...speak.use(838), ...speak.your(850), ...speak.brain(865), ...speak.i(912), ...speak.know(925), ...speak.i(955), ...speak.am(962), ...speak.sorry(969), ...speak.it(1027), ...speak.is(1035), ...speak.a(1042), ...speak.terrible(1051), ...speak.feature(1069), ...speak.but(1120), ...speak.it(1130), ...speak.is(1143), ...speak.necessary(1152)
        ],
        leftHand: {
            shoulder: [
                {frame: 0, degree: 0},
                {frame: 30, degree: 30},
                {frame: 400, degree: 30},
                {frame: 430, degree: 0},
                {frame: 778, degree: 0},
                {frame: 800, degree: 140},
                {frame: 820, degree: 120},
                {frame: 843, degree: 120},
                {frame: 870, degree: 0}
            ],
            arms: [
                {frame: 0, degree: 0},
                {frame: 60, degree: 100},
                {frame: 400, degree: 100},
                {frame: 430, degree: 0},
                {frame: 778, degree: 0},
                {frame: 800, degree: 100},
                {frame: 820, degree: 70},
                {frame: 840, degree: 70},
                {frame: 843, degree: 0},
            ]
        }
    },
    SummaryOutro: {
        mouth:[
            ...speak.so(0), ...speak.to(55), ...speak.summarize(61), ...speak.we(123), ...speak.have(138), ...speak.a(148), ...speak.handshake(159), ...speak.that(182), ...speak.feels(199), ...speak.like(216), ...speak.a(235), ...speak.drug(247), ...speak.deal(258), ...speak.we(313), ...speak.have(331), ...speak.a(343), ...speak.content(351), ...speak.generator(368), ...speak.born(400), ...speak.from(434), ...speak.my(456), ...speak.laziness(471), ...speak.we(542), ...speak.have(559), ...speak.a(571), ...speak.caching(580), ...speak.system(597), ...speak.that(626), ...speak.creates(643), ...speak.a(664), ...speak.data(680), ...speak.bunker(696), ...speak.and(716), ...speak.a(742), ...speak.quiz(753), ...speak.engine(768), ...speak.that(794), ...speak.enjoys(812), ...speak.watching(832), ...speak.you(862), ...speak.struggle(874), ...speak.the(937), ...speak.back(958), ...speak.end(974), ...speak.is(986), ...speak.dead(1004), ...speak.long(1046), ...speak.live(1062), ...speak.the(1081), ...speak.json(1094), ...speak.next(1162), ...speak.time(1176), ...speak.we(1194), ...speak.will(1209), ...speak.make(1220), ...speak.the(1231), ...speak.app(1245), ...speak.look(1256), ...speak.pretty(1270), ...speak.because(1324), ...speak.right(1346), ...speak.now(1364), ...speak.it(1383), ...speak.looks(1400), ...speak.like(1411), ...speak.it(1429), ...speak.was(1440), ...speak.designed(1450), ...speak.in(1472), ...speak.microsoft(1490), ...speak.excel(1522), ...speak.like(1612), ...speak.and(1620), ...speak.subscribe(1636), ...speak.or(1668), ...speak.dont(1699), ...speak.entropy(1734), ...speak.consumes(1756), ...speak.us(1788), ...speak.all(1803), ...speak.anyway(1821), ...speak.bye(1869)
        ]
    }
} satisfies Record<string, MagiTypes['MagiProps']>
