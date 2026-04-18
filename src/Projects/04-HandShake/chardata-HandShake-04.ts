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
        eyeBrows: {
            left: [
                { x: 0, y: 0, frame: 0, rotation: 0 },
                { x: 0, y: 0, frame: 30, rotation: 0 },
            ],
            right: [
                { x: 0, y: 0, frame: 0, rotation: 0 },
                { x: 0, y: 0, frame: 30, rotation: 0 },
            ]
        },
        eyes: [],
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
        leftLeg: {
            thighs: [],
            feet: []
        },
        rightLeg: {
            thighs: [],
            feet: []
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
        eyes: [],
        head: [
            { rotation: 0, frame: 0 },
            { rotation: 0, frame: 1143 },
        ],
        eyeBrows: {
            left: [
                { x: 0, y: 0, frame: 0, rotation: 0 },
                { x: 0, y: 0, frame: 30, rotation: 0 },
            ],
            right: [
                { x: 0, y: 0, frame: 0, rotation: 0 },
                { x: 0, y: 0, frame: 30, rotation: 0 },
            ]
        },
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
        leftLeg: {
            thighs: [],
            feet: []
        },
        rightLeg: {
            thighs: [],
            feet: []
        }
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
        eyes: [],
        eyeType: [
            { type: 'funky', isEnabled: [320, 440] },
        ],
        head: [
            { rotation: 0, frame: 0 },
            { rotation: 0, frame: 1143 },
        ],
        eyeBrows: {
            left: [
                { x: 0, y: 0, frame: 0, rotation: 0 },
                { x: 0, y: 0, frame: 30, rotation: 0 },
            ],
            right: [
                { x: 0, y: 0, frame: 0, rotation: 0 },
                { x: 0, y: 0, frame: 30, rotation: 0 },
            ]
        },
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
        eyes: [],
        head: [
            { rotation: 0, frame: 30 },
            { rotation: 10, frame: 60 },
            { rotation: 10, frame: 205 },
            { rotation: 0, frame: 225 },
        ],
        eyeBrows: {
            left: [
                { x: 0, y: 0, frame: 0, rotation: 0 },
                { x: 0, y: 0, frame: 30, rotation: 0 },
            ],
            right: [
                { x: 0, y: 0, frame: 0, rotation: 0 },
                { x: 0, y: 0, frame: 30, rotation: 0 },
            ]
        },
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
        leftLeg: {
            thighs: [
                { degree: 0, frame: 0 },
                { degree: 0, frame: 1 }
            ],
            feet: [
                { degree: 0, frame: 0 },
                { degree: 0, frame: 1 }
            ]
        },
        rightLeg: {
            thighs: [
                { degree: 0, frame: 0 },
                { degree: 0, frame: 1 }
            ],
            feet: [
                { degree: 0, frame: 0 },
                { degree: 0, frame: 1 }
            ]
        }
    },
    CachingIntro: {
        mouth: [],
        eyes: [],
        head: [],
        eyeBrows: {
            left: [
                { x: 0, y: 0, frame: 0, rotation: 0 },
                { x: 0, y: 0, frame: 30, rotation: 0 },
            ],
            right: [
                { x: 0, y: 0, frame: 0, rotation: 0 },
                { x: 0, y: 0, frame: 30, rotation: 0 },
            ]
        },
        leftHand: {
            shoulder: [],
            arms: []
        },
        rightHand: {
            shoulder: [],
            arms: []
        },
        leftLeg: {
            thighs: [],
            feet: []
        },
        rightLeg: {
            thighs: [],
            feet: []
        }
    },
    DataBunker: {
        mouth: [],
        eyes: [],
        head: [],
        eyeBrows: {
            left: [],
            right: []
        },
        leftHand: {
            shoulder: [],
            arms: []
        },
        rightHand: {
            shoulder: [],
            arms: []
        },
        leftLeg: {
            thighs: [],
            feet: []
        },
        rightLeg: {
            thighs: [],
            feet: []
        }
    },
    ClingyOffline: {
        mouth: [],
        eyes: [],
        head: [],
        eyeBrows: {
            left: [],
            right: []
        },
        leftHand: {
            shoulder: [],
            arms: []
        },
        rightHand: {
            shoulder: [],
            arms: []
        },
        leftLeg: {
            thighs: [],
            feet: []
        },
        rightLeg: {
            thighs: [],
            feet: []
        }
    },
    RuntimeGenerator: {
        mouth: [],
        eyes: [],
        head: [],
        eyeBrows: {
            left: [],
            right: []
        },
        leftHand: {
            shoulder: [],
            arms: []
        },
        rightHand: {
            shoulder: [],
            arms: []
        },
        leftLeg: {
            thighs: [],
            feet: []
        },
        rightLeg: {
            thighs: [],
            feet: []
        }
    },
    QuizLogic: {
        mouth: [],
        eyes: [],
        head: [],
        eyeBrows: {
            left: [],
            right: []
        },
        leftHand: {
            shoulder: [],
            arms: []
        },
        rightHand: {
            shoulder: [],
            arms: []
        },
        leftLeg: {
            thighs: [],
            feet: []
        },
        rightLeg: {
            thighs: [],
            feet: []
        }
    },
    SummaryOutro: {
        mouth: [],
        eyes: [],
        head: [],
        eyeBrows: {
            left: [],
            right: []
        },
        leftHand: {
            shoulder: [],
            arms: []
        },
        rightHand: {
            shoulder: [],
            arms: []
        },
        leftLeg: {
            thighs: [],
            feet: []
        },
        rightLeg: {
            thighs: [],
            feet: []
        }
    }
} satisfies Record<string, MagiTypes['MagiProps']>