import { Img, ImgProps, staticFile, Html5Video as HTML5Video, Html5Audio as HTML5Audio, RemotionAudioProps as AudioProps, RemotionVideoProps as VideoProps } from "remotion";

const assetPath = {
    imgFile: (value: string) => `images/${value}`,
    svgFile: (value: string) => `svgs/${value}`,
    gifFile: (value: string) => `gifs/${value}`,
    videoFile: (value: string) => `videos/${value}`,
    audioFile: (value: string) => `audios/${value}`,
    bgAudioFile: (value: string) => `audios/${value}`,
}

const AppIcon = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.imgFile('app-icon.png'))} />)
}

const JSONIcon = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.imgFile('json-icon.png'))} />)
}

const KcmsBlueprint2 = (props: Omit<AudioProps, 'src'>) => {
    return (<HTML5Audio {...props} src={staticFile(assetPath.audioFile('kcms-blueprint-2.m4a'))} />);
}

const MarioSong = (props: Omit<AudioProps, 'src'>) => {
    return (<HTML5Audio {...props} src={staticFile(assetPath.audioFile('mario_song.mp3'))} />);
}

const Song2 = (props: Omit<AudioProps, 'src'>) => {
    return (<HTML5Audio {...props} src={staticFile(assetPath.audioFile('song2.mp3'))} />);
}

const SuperMarioExtender = (props: Omit<AudioProps, 'src'>) => {
    return (<HTML5Audio {...props} src={staticFile(assetPath.audioFile('super_mario_extender.mp3'))} />);
}

const Voice2 = (props: Omit<AudioProps, 'src'>) => {
    return (<HTML5Audio {...props} src={staticFile(assetPath.audioFile('voice2.m4a'))} />);
}

const KcmsBlueprint = (props: Omit<AudioProps, 'src'>) => {
    return (<HTML5Audio {...props} src={staticFile(assetPath.audioFile('kcms-blueprint.m4a'))} />);
}

const Music = (props: Omit<AudioProps, 'src'>) => {
    return (<HTML5Audio {...props} src={staticFile(assetPath.audioFile('music.mp3'))} />);
}

const Song = (props: Omit<AudioProps, 'src'>) => {
    return (<HTML5Audio {...props} src={staticFile(assetPath.audioFile('song.mp3'))} />);
}

const UmsBlueprint = (props: Omit<AudioProps, 'src'>) => {
    return (<HTML5Audio {...props} src={staticFile(assetPath.audioFile('ums-blueprint.m4a'))} />);
}

const Voice = (props: Omit<AudioProps, 'src'>) => {
    return (<HTML5Audio {...props} src={staticFile(assetPath.audioFile('voice.m4a'))} />);
}

const Blueprint = (props: Omit<VideoProps, 'src'>) => {
    return (<HTML5Video {...props} src={staticFile(assetPath.videoFile('blueprint.mp4'))} />);
}

const LastVideo = (props: Omit<VideoProps, 'src'>) => {
    return (<HTML5Video {...props} src={staticFile(assetPath.videoFile('last-video.mp4'))} />);
}

const PowerfulArchitecture = (props: Omit<VideoProps, 'src'>) => {
    return (<HTML5Video {...props} src={staticFile(assetPath.videoFile('powerful_architecture.mp4'))} />);
}

const BuildingAnApp = (props: Omit<VideoProps, 'src'>) => {
    return (<HTML5Video {...props} src={staticFile(assetPath.videoFile('buildingAnApp.mp4'))} />);
}

const MenInBlack = (props: Omit<VideoProps, 'src'>) => {
    return (<HTML5Video {...props} src={staticFile(assetPath.videoFile('men-in-black.mp4'))} />);
}

const RomanticAutumnCherryTreeVideo = (props: Omit<VideoProps, 'src'>) => {
    return (<HTML5Video {...props} src={staticFile(assetPath.videoFile('Romantic_Autumn_Cherry_Tree_Video.mp4'))} />);
}

const Circuit = (props: Omit<VideoProps, 'src'>) => {
    return (<HTML5Video {...props} src={staticFile(assetPath.videoFile('circuit.mp4'))} />);
}

const Namskara = (props: Omit<VideoProps, 'src'>) => {
    return (<HTML5Video {...props} src={staticFile(assetPath.videoFile('namskara.mp4'))} />);
}

const RomanticBirthdayVideoCreation = (props: Omit<VideoProps, 'src'>) => {
    return (<HTML5Video {...props} src={staticFile(assetPath.videoFile('Romantic_Birthday_Video_Creation.mp4'))} />);
}

const FreeMoneyRain = (props: Omit<VideoProps, 'src'>) => {
    return (<HTML5Video {...props} src={staticFile(assetPath.videoFile('Free_Money_Rain.mp4'))} />);
}

const PokemonStyleEvolutionVideo = (props: Omit<VideoProps, 'src'>) => {
    return (<HTML5Video {...props} src={staticFile(assetPath.videoFile('Pokemon_Style_Evolution_Video.pm4'))} />);
}

const Bg = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.imgFile('bg.png'))} />);
}

const HomeOffice = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.imgFile('home-office.png'))} />);
}

const Image2 = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.imgFile('image2.png'))} />);
}

const Mibfreeze = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.imgFile('MIBFreeze.png'))} />);
}

const Rocket = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.imgFile('rocket.webp'))} />);
}

const BrainClipart = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.imgFile('brain-clipart.png'))} />);
}

const Housefly = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.imgFile('housefly.jpg'))} />);
}

const Image = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.imgFile('image.png'))} />);
}

const NoHint = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.imgFile('no-hint.webp'))} />);
}

const Star = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.imgFile('star.png'))} />);
}

const Conversation = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.imgFile('conversation.png'))} />);
}

const Image12 = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.imgFile('image1-2.png'))} />);
}

const ImageWebp = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.imgFile('image.webp'))} />);
}

const Optimized = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.imgFile('optimized.jpg'))} />);
}

const Stars = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.imgFile('stars.png'))} />);
}

const GateKeeper = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.imgFile('gate-keeper.png'))} />);
}

const Image1 = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.imgFile('image1.png'))} />);
}

const KcmsThumbnail = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.imgFile('kcms-thumbnail.png'))} />);
}

const OptimizedPng = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.imgFile('optimized.png'))} />);
}

const TimePressure = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.imgFile('time-pressure.jpg'))} />);
}

const AndroidIcon = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('android-icon.svg'))} />);
}

const Gear = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('gear.svg'))} />);
}

const MarioStand = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mario-stand.svg'))} />);
}

const Safe = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('safe.svg'))} />);
}

const AppIconSvg = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('app-icon.svg'))} />);
}

const Glasses = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('glasses.svg'))} />);
}

const MobileScreenshotBlur = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mobile-screenshot-blur.svg'))} />);
}

const ServerLogo = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('server-logo.svg'))} />);
}

const ArchitectureLogo = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('architecture-logo.svg'))} />);
}

const HeadBase = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('head-base.svg'))} />);
}

const Mobile = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mobile.svg'))} />);
}

const Shoulder = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('shoulder.svg'))} />);
}

const Arms = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('arms.svg'))} />);
}

const Heart = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('heart.svg'))} />);
}

const Mouse = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mouse.svg'))} />);
}

const SkipChapter = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('skip-chapter.svg'))} />);
}

const BackendLogo = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('backend-logo.svg'))} />);
}

const Home = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('home.svg'))} />);
}

const MouthAAaAh = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mouth-a-aa-ah.svg'))} />);
}

const Stability = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('stability.svg'))} />);
}

const Background = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('background.svg'))} />);
}

const JsonData = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('json-data.svg'))} />);
}

const MouthChJ = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mouth-ch-j.svg'))} />);
}

const StarSvg = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('star.svg'))} />);
}

const BodyBase = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('body-base.svg'))} />);
}

const JsonFile = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('json-file.svg'))} />);
}

const MouthEIi = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mouth-e-ii.svg'))} />);
}

const StraightLine = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('straight-line.svg'))} />);
}

const Bus = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('bus.svg'))} />);
}

const Laptop = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('laptop.svg'))} />);
}

const MouthFV = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mouth-f-v.svg'))} />);
}

const Sync = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('sync.svg'))} />);
}

const Chapter = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('chapter.svg'))} />);
}

const Localstorage = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('localstorage.svg'))} />);
}

const MouthMBp = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mouth-m-b-p.svg'))} />);
}

const Tedious = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('tedious.svg'))} />);
}

const CloudLink = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('cloud-link.svg'))} />);
}

const ManualOverwrite = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('manual-overwrite.svg'))} />);
}

const MouthNSt = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mouth-n-s-t.svg'))} />);
}

const ThankYou = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('thank-you.svg'))} />);
}

const CommunityLogo = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('community-logo.svg'))} />);
}

const MarioBigJump = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mario-big-jump.svg'))} />);
}

const MouthO = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mouth-o.svg'))} />);
}

const Thigh = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('thigh.svg'))} />);
}

const CrossDevice = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('cross-device.svg'))} />);
}

const MarioBlock = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mario-block.svg'))} />);
}

const MouthSmile = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mouth-smile.svg'))} />);
}

const Tick = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('tick.svg'))} />);
}

const DatabaseLogo = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('database-logo.svg'))} />);
}

const MarioBush = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mario-bush.svg'))} />);
}

const MouthUoo = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mouth-u-oo.svg'))} />);
}

const Traceability = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('traceability.svg'))} />);
}

const Error = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('error.svg'))} />);
}

const MarioCloud = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mario-cloud.svg'))} />);
}

const MultipleUsers = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('multiple-users.svg'))} />);
}

const Update = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('update.svg'))} />);
}

const Eyebrow = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('eyebrow.svg'))} />);
}

const MarioMountain = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mario-mountain.svg'))} />);
}

const Net = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('net.svg'))} />);
}

const UserAngry = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('user_angry.svg'))} />);
}

const EyeClose = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('eye-close.svg'))} />);
}

const MarioPalace = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mario-palace.svg'))} />);
}

const Page = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('page.svg'))} />);
}

const UserNone = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('user_none.svg'))} />);
}

const EyeFunky = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('eye-funky.svg'))} />);
}

const MarioPipe = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mario-pipe.svg'))} />);
}

const Pc = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('pc.svg'))} />);
}

const User = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('user.svg'))} />);
}

const EyeNormal = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('eye-normal.svg'))} />);
}

const MarioPipeV2 = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mario-pipe-v2.svg'))} />);
}

const Privacy = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('privacy.svg'))} />);
}

const Feet = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('feet.svg'))} />);
}

const MarioRun = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mario-run.svg'))} />);
}

const PrivateAndroidIcon = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('private-android-icon.svg'))} />);
}

const ForcedExam = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('forced-exam.svg'))} />);
}

const MarioSmallRun = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mario-small-run.svg'))} />);
}

const QuestionMark = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('question-mark.svg'))} />);
}

const FrontendLogo = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('frontend-logo.svg'))} />);
}

const MarioSmallStand = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('mario-small-stand.svg'))} />);
}

const Quiz = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.svgFile('quiz.svg'))} />);
}

const BuildApp = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.gifFile('build-app.gif'))} />);
}

const Ensure = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.gifFile('Ensure.gif'))} />);
}

const HiWavingEmoji = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.gifFile('hi-waving-emoji.gif'))} />);
}

const Kannada = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.gifFile('kannada.gif'))} />);
}

const RunTime = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.gifFile('run-time.gif'))} />);
}

const Cat = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.gifFile('cat.gif'))} />);
}

const FlutterAppDevelopment = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.gifFile('flutter-app-development.gif'))} />);
}

const KannadaFlag = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.gifFile('kannada-flag.gif'))} />);
}

const Namaste = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} src={staticFile(assetPath.gifFile('namaste.gif'))} />);
}

/**
 * Assets
 */
 export const Assets = {
    AppIcon,
    JSONIcon,
    KcmsBlueprint2,
    MarioSong,
    Song2,
    SuperMarioExtender,
    Voice2,
    KcmsBlueprint,
    Music,
    Song,
    UmsBlueprint,
    Voice,
    Blueprint,
    LastVideo,
    PowerfulArchitecture,
    BuildingAnApp,
    MenInBlack,
    RomanticAutumnCherryTreeVideo,
    Circuit,
    Namskara,
    RomanticBirthdayVideoCreation,
    FreeMoneyRain,
    PokemonStyleEvolutionVideo,
    Bg,
    HomeOffice,
    Image2,
    Mibfreeze,
    Rocket,
    BrainClipart,
    Housefly,
    Image,
    NoHint,
    Star,
    Conversation,
    Image12,
    ImageWebp,
    Optimized,
    Stars,
    GateKeeper,
    Image1,
    KcmsThumbnail,
    OptimizedPng,
    TimePressure,
    AndroidIcon,
    Gear,
    MarioStand,
    Safe,
    AppIconSvg,
    Glasses,
    MobileScreenshotBlur,
    ServerLogo,
    ArchitectureLogo,
    HeadBase,
    Mobile,
    Shoulder,
    Arms,
    Heart,
    Mouse,
    SkipChapter,
    BackendLogo,
    Home,
    MouthAAaAh,
    Stability,
    Background,
    JsonData,
    MouthChJ,
    StarSvg,
    BodyBase,
    JsonFile,
    MouthEIi,
    StraightLine,
    Bus,
    Laptop,
    MouthFV,
    Sync,
    Chapter,
    Localstorage,
    MouthMBp,
    Tedious,
    CloudLink,
    ManualOverwrite,
    MouthNSt,
    ThankYou,
    CommunityLogo,
    MarioBigJump,
    MouthO,
    Thigh,
    CrossDevice,
    MarioBlock,
    MouthSmile,
    Tick,
    DatabaseLogo,
    MarioBush,
    MouthUoo,
    Traceability,
    Error,
    MarioCloud,
    MultipleUsers,
    Update,
    Eyebrow,
    MarioMountain,
    Net,
    UserAngry,
    EyeClose,
    MarioPalace,
    Page,
    UserNone,
    EyeFunky,
    MarioPipe,
    Pc,
    User,
    EyeNormal,
    MarioPipeV2,
    Privacy,
    Feet,
    MarioRun,
    PrivateAndroidIcon,
    ForcedExam,
    MarioSmallRun,
    QuestionMark,
    FrontendLogo,
    MarioSmallStand,
    Quiz,
    BuildApp,
    Ensure,
    HiWavingEmoji,
    Kannada,
    RunTime,
    Cat,
    FlutterAppDevelopment,
    KannadaFlag,
    Namaste
}
