import { Img, ImgProps, staticFile, Html5Video as HTML5Video, Html5Audio as HTML5Audio, RemotionVideoProps as VideoProps } from "remotion";
import { ComponentProps, DetailedHTMLProps, HTMLAttributes, useEffect, useMemo, useState } from "react";
import { SafeAsset } from "../Helpers/components";

type AudioProps = ComponentProps<typeof HTML5Audio>

const assetPath = {
    imgFile: (value: string) => `images/${value}`,
    svgFile: (value: string) => `svgs/${value}`,
    gifFile: (value: string) => `gifs/${value}`,
    videoFile: (value: string) => `videos/${value}`,
    audioFile: (value: string) => `audios/${value}`,
    bgAudioFile: (value: string) => `audios/${value}`,
}

const Scene6Bg = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Scene6Bg" src={staticFile(assetPath.imgFile('scene6.jpeg'))} />)
}

const MaskMeme = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MaskMeme" src={staticFile(assetPath.imgFile('mask-meme.jpg'))} />)
}

const ClockHand = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="ClockHand" src={staticFile(assetPath.svgFile('clock_hand.svg'))} />)
}

const Clock = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Clock" src={staticFile(assetPath.svgFile('clock.svg'))} />)
}

const Pub = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Pub" src={staticFile(assetPath.imgFile('pub.jpeg'))} />)
}

const ConvRev = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="ConvRev" src={staticFile(assetPath.svgFile('conv-rev.svg'))} />)
}

const Conv = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Conv" src={staticFile(assetPath.svgFile('conv.svg'))} />)
}

const Download = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Download" src={staticFile(assetPath.svgFile('download.svg'))} />)
}

const LocalStorage = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="LocalStorage" src={staticFile(assetPath.svgFile('localstorage.svg'))} />)
}

const CdnSoftware = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="CdnSoftware" src={staticFile(assetPath.svgFile('CDN-software.svg'))} />)
}

const MetaJsonEnterDoor = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MetaJsonEnterDoor" src={staticFile(assetPath.svgFile('meta-json-enter-door.svg'))} />)
}

const MetaJsonDoorClosed = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MetaJsonDoorClosed" src={staticFile(assetPath.svgFile('meta-json-door-closed.svg'))} />)
}

const Jsdelivr = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Jsdelivr" src={staticFile(assetPath.svgFile('jsdelivr.svg'))} />)
}

const Github = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Github" src={staticFile(assetPath.svgFile('github.svg'))} />)
}

const MoneyChair = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MoneyChair" src={staticFile(assetPath.svgFile('money-chair.svg'))} />)
}

const Database = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Database" src={staticFile(assetPath.svgFile('database.svg'))} />)
}

const Politician = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Politician" src={staticFile(assetPath.svgFile('politician.svg'))} />)
}

const JsFramework = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="JsFramework" src={staticFile(assetPath.svgFile('js-framework.svg'))} />)
}

const AppIcon = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="AppIcon" src={staticFile(assetPath.svgFile('app-icon.svg'))} />)
}

const JSONIcon = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="JSONIcon" src={staticFile(assetPath.imgFile('json-icon.png'))} />)
}

const KcmsBlueprint2 = (props: Omit<AudioProps, 'src'>) => {
    return (<SafeAsset component={HTML5Audio} {...props} data-asset="KcmsBlueprint2" src={staticFile(assetPath.audioFile('kcms-blueprint-2.m4a'))} />);
}

const MarioSong = (props: Omit<AudioProps, 'src'>) => {
    return (<SafeAsset component={HTML5Audio} {...props} data-asset="MarioSong" src={staticFile(assetPath.audioFile('mario_song.mp3'))} />);
}

const Song2 = (props: Omit<AudioProps, 'src'>) => {
    return (<SafeAsset component={HTML5Audio} {...props} data-asset="Song2" src={staticFile(assetPath.audioFile('song2.mp3'))} />);
}

const SuperMarioExtender = (props: Omit<AudioProps, 'src'>) => {
    return (<SafeAsset component={HTML5Audio} {...props} data-asset="SuperMarioExtender" src={staticFile(assetPath.audioFile('super_mario_extender.mp3'))} />);
}

const Voice2 = (props: Omit<AudioProps, 'src'>) => {
    return (<SafeAsset component={HTML5Audio} {...props} data-asset="Voice2" src={staticFile(assetPath.audioFile('voice2.m4a'))} />);
}

const KcmsBlueprint = (props: Omit<AudioProps, 'src'>) => {
    return (<SafeAsset component={HTML5Audio} {...props} data-asset="KcmsBlueprint" src={staticFile(assetPath.audioFile('kcms-blueprint.m4a'))} />);
}

const IntroMusic = (props: Omit<AudioProps, 'src'>) => {
    return (<SafeAsset component={HTML5Audio} {...props} data-asset="IntroMusic" src={staticFile(assetPath.audioFile('intro-music.mp3'))} />);
}

const Song = (props: Omit<AudioProps, 'src'>) => {
    return (<SafeAsset component={HTML5Audio} {...props} data-asset="Song" src={staticFile(assetPath.audioFile('song.mp3'))} />);
}

const UmsBlueprint = (props: Omit<AudioProps, 'src'>) => {
    return (<SafeAsset component={HTML5Audio} {...props} data-asset="UmsBlueprint" src={staticFile(assetPath.audioFile('ums-blueprint.m4a'))} />);
}

const Voice = (props: Omit<AudioProps, 'src'>) => {
    return (<SafeAsset component={HTML5Audio} {...props} data-asset="Voice" src={staticFile(assetPath.audioFile('voice.m4a'))} />);
}

const Blueprint = (props: Omit<VideoProps, 'src'>) => {
    return (<SafeAsset component={HTML5Video} {...props} data-asset="Blueprint" src={staticFile(assetPath.videoFile('blueprint.mp4'))} />);
}

const LastVideo = (props: Omit<VideoProps, 'src'>) => {
    return (<SafeAsset component={HTML5Video} {...props} data-asset="LastVideo" src={staticFile(assetPath.videoFile('last-video.mp4'))} />);
}

const PowerfulArchitecture = (props: Omit<VideoProps, 'src'>) => {
    return (<SafeAsset component={HTML5Video} {...props} data-asset="PowerfulArchitecture" src={staticFile(assetPath.videoFile('powerful_architecture.mp4'))} />);
}

const BuildingAnApp = (props: Omit<VideoProps, 'src'>) => {
    return (<SafeAsset component={HTML5Video} {...props} data-asset="BuildingAnApp" src={staticFile(assetPath.videoFile('buildingAnApp.mp4'))} />);
}

const MenInBlack = (props: Omit<VideoProps, 'src'>) => {
    return (<SafeAsset component={HTML5Video} {...props} data-asset="MenInBlack" src={staticFile(assetPath.videoFile('men-in-black.mp4'))} />);
}

const RomanticAutumnCherryTreeVideo = (props: Omit<VideoProps, 'src'>) => {
    return (<SafeAsset component={HTML5Video} {...props} data-asset="RomanticAutumnCherryTreeVideo" src={staticFile(assetPath.videoFile('Romantic_Autumn_Cherry_Tree_Video.mp4'))} />);
}

const Circuit = (props: Omit<VideoProps, 'src'>) => {
    return (<SafeAsset component={HTML5Video} {...props} data-asset="Circuit" src={staticFile(assetPath.videoFile('circuit.mp4'))} />);
}

const Namskara = (props: Omit<VideoProps, 'src'>) => {
    return (<SafeAsset component={HTML5Video} {...props} data-asset="Namskara" src={staticFile(assetPath.videoFile('namskara.mp4'))} />);
}

const RomanticBirthdayVideoCreation = (props: Omit<VideoProps, 'src'>) => {
    return (<SafeAsset component={HTML5Video} {...props} data-asset="RomanticBirthdayVideoCreation" src={staticFile(assetPath.videoFile('Romantic_Birthday_Video_Creation.mp4'))} />);
}

const FreeMoneyRain = (props: Omit<VideoProps, 'src'>) => {
    return (<SafeAsset component={HTML5Video} {...props} data-asset="FreeMoneyRain" src={staticFile(assetPath.videoFile('Free_Money_Rain.mp4'))} />);
}

const PokemonStyleEvolutionVideo = (props: Omit<VideoProps, 'src'>) => {
    return (<SafeAsset component={HTML5Video} {...props} data-asset="PokemonStyleEvolutionVideo" src={staticFile(assetPath.videoFile('Pokemon_Style_Evolution_Video.pm4'))} />);
}

const IntroBG = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="IntroBG" src={staticFile(assetPath.imgFile('intro-bg.png'))} />);
}

const HomeOffice = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="HomeOffice" src={staticFile(assetPath.imgFile('home-office.png'))} />);
}

const Image2 = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Image2" src={staticFile(assetPath.imgFile('image2.png'))} />);
}

const Mibfreeze = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Mibfreeze" src={staticFile(assetPath.imgFile('MIBFreeze.png'))} />);
}

const Rocket = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Rocket" src={staticFile(assetPath.imgFile('rocket.webp'))} />);
}

const BrainClipart = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="BrainClipart" src={staticFile(assetPath.imgFile('brain-clipart.png'))} />);
}

const Housefly = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Housefly" src={staticFile(assetPath.imgFile('housefly.jpg'))} />);
}

const UmsThumbnail = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Image" src={staticFile(assetPath.imgFile('ums-thumbnail.png'))} />);
}

const NoHint = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="NoHint" src={staticFile(assetPath.imgFile('no-hint.webp'))} />);
}

const Star = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Star" src={staticFile(assetPath.imgFile('star.png'))} />);
}

const Conversation = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Conversation" src={staticFile(assetPath.imgFile('conversation.png'))} />);
}

const Image12 = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Image12" src={staticFile(assetPath.imgFile('image1-2.png'))} />);
}

const ImageWebp = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="ImageWebp" src={staticFile(assetPath.imgFile('image.webp'))} />);
}

const Optimized = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Optimized" src={staticFile(assetPath.imgFile('optimized.jpg'))} />);
}

const IntroStars = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="IntroStars" src={staticFile(assetPath.imgFile('intro-stars.png'))} />);
}

const GateKeeper = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="GateKeeper" src={staticFile(assetPath.imgFile('gate-keeper.png'))} />);
}

const Image1 = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Image1" src={staticFile(assetPath.imgFile('image1.png'))} />);
}

const KcmsThumbnail = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="KcmsThumbnail" src={staticFile(assetPath.imgFile('kcms-thumbnail.png'))} />);
}

const OptimizedPng = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="OptimizedPng" src={staticFile(assetPath.imgFile('optimized.png'))} />);
}

const TimePressure = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="TimePressure" src={staticFile(assetPath.imgFile('time-pressure.jpg'))} />);
}

const AndroidIcon = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="AndroidIcon" src={staticFile(assetPath.svgFile('android-icon.svg'))} />);
}

const Gear = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Gear" src={staticFile(assetPath.svgFile('gear.svg'))} />);
}

const MarioStand = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MarioStand" src={staticFile(assetPath.svgFile('mario-stand.svg'))} />);
}

const Safe = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Safe" src={staticFile(assetPath.svgFile('safe.svg'))} />);
}

const AppIconSvg = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="AppIconSvg" src={staticFile(assetPath.svgFile('app-icon.svg'))} />);
}

const Glasses = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Glasses" src={staticFile(assetPath.svgFile('glasses.svg'))} />);
}

const MobileScreenshotBlur = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MobileScreenshotBlur" src={staticFile(assetPath.svgFile('mobile-screenshot-blur.svg'))} />);
}

const ServerLogo = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="ServerLogo" src={staticFile(assetPath.svgFile('server-logo.svg'))} />);
}

const ArchitectureLogo = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="ArchitectureLogo" src={staticFile(assetPath.svgFile('architecture-logo.svg'))} />);
}

const HeadBase = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="HeadBase" src={staticFile(assetPath.svgFile('head-base.svg'))} />);
}

const Mobile = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Mobile" src={staticFile(assetPath.svgFile('mobile.svg'))} />);
}

const Shoulder = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Shoulder" src={staticFile(assetPath.svgFile('shoulder.svg'))} />);
}

const Arms = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Arms" src={staticFile(assetPath.svgFile('arms.svg'))} />);
}

const Heart = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Heart" src={staticFile(assetPath.svgFile('heart.svg'))} />);
}

const Mouse = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Mouse" src={staticFile(assetPath.svgFile('mouse.svg'))} />);
}

const SkipChapter = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="SkipChapter" src={staticFile(assetPath.svgFile('skip-chapter.svg'))} />);
}

const BackendLogo = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="BackendLogo" src={staticFile(assetPath.svgFile('backend-logo.svg'))} />);
}

const Home = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Home" src={staticFile(assetPath.svgFile('home.svg'))} />);
}

const MouthAAaAh = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MouthAAaAh" src={staticFile(assetPath.svgFile('mouth-a-aa-ah.svg'))} />);
}

const Stability = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Stability" src={staticFile(assetPath.svgFile('stability.svg'))} />);
}

const Background = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Background" src={staticFile(assetPath.svgFile('background.svg'))} />);
}

const JsonData = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="JsonData" src={staticFile(assetPath.svgFile('json-data.svg'))} />);
}

const MouthChJ = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MouthChJ" src={staticFile(assetPath.svgFile('mouth-ch-j.svg'))} />);
}

const GoldenStarSvg = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="GoldenStarSvg" src={staticFile(assetPath.svgFile('golden-star.svg'))} />);
}

const BodyBase = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} data-asset="BodyBase" src={staticFile(assetPath.svgFile('body-base.svg'))} />);
}

const JsonFile = (props: Omit<ImgProps, 'src'>) => {
    return (<Img {...props} data-asset="JsonFile" src={staticFile(assetPath.svgFile('json-file.svg'))} />);
}

const MouthEIi = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MouthEIi" src={staticFile(assetPath.svgFile('mouth-e-ii.svg'))} />);
}

const StraightLine = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="StraightLine" src={staticFile(assetPath.svgFile('straight-line.svg'))} />);
}

const Bus = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Bus" src={staticFile(assetPath.svgFile('bus.svg'))} />);
}

const Laptop = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Laptop" src={staticFile(assetPath.svgFile('laptop.svg'))} />);
}

const MouthFV = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MouthFV" src={staticFile(assetPath.svgFile('mouth-f-v.svg'))} />);
}

const Sync = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Sync" src={staticFile(assetPath.svgFile('sync.svg'))} />);
}

const Chapter = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Chapter" src={staticFile(assetPath.svgFile('chapter.svg'))} />);
}

const Localstorage = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Localstorage" src={staticFile(assetPath.svgFile('localstorage.svg'))} />);
}

const MouthMBp = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MouthMBp" src={staticFile(assetPath.svgFile('mouth-m-b-p.svg'))} />);
}

const Tedious = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Tedious" src={staticFile(assetPath.svgFile('tedious.svg'))} />);
}

const CloudLink = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="CloudLink" src={staticFile(assetPath.svgFile('cloud-link.svg'))} />);
}

const ManualOverwrite = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="ManualOverwrite" src={staticFile(assetPath.svgFile('manual-overwrite.svg'))} />);
}

const MouthNSt = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MouthNSt" src={staticFile(assetPath.svgFile('mouth-n-s-t.svg'))} />);
}

const ThankYou = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="ThankYou" src={staticFile(assetPath.svgFile('thank-you.svg'))} />);
}

const CommunityLogo = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="CommunityLogo" src={staticFile(assetPath.svgFile('community-logo.svg'))} />);
}

const MarioBigJump = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MarioBigJump" src={staticFile(assetPath.svgFile('mario-big-jump.svg'))} />);
}

const MouthO = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MouthO" src={staticFile(assetPath.svgFile('mouth-o.svg'))} />);
}

const Thigh = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Thigh" src={staticFile(assetPath.svgFile('thigh.svg'))} />);
}

const CrossDevice = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="CrossDevice" src={staticFile(assetPath.svgFile('cross-device.svg'))} />);
}

const MarioBlock = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MarioBlock" src={staticFile(assetPath.svgFile('mario-block.svg'))} />);
}

const MouthSmile = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MouthSmile" src={staticFile(assetPath.svgFile('mouth-smile.svg'))} />);
}

const Tick = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Tick" src={staticFile(assetPath.svgFile('tick.svg'))} />);
}

const DatabaseLogo = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="DatabaseLogo" src={staticFile(assetPath.svgFile('database-logo.svg'))} />);
}

const MarioBush = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MarioBush" src={staticFile(assetPath.svgFile('mario-bush.svg'))} />);
}

const MouthUoo = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MouthUoo" src={staticFile(assetPath.svgFile('mouth-u-oo.svg'))} />);
}

const Traceability = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Traceability" src={staticFile(assetPath.svgFile('traceability.svg'))} />);
}

const Error = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Error" src={staticFile(assetPath.svgFile('error.svg'))} />);
}

const MarioCloud = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MarioCloud" src={staticFile(assetPath.svgFile('mario-cloud.svg'))} />);
}

const MultipleUsers = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MultipleUsers" src={staticFile(assetPath.svgFile('multiple-users.svg'))} />);
}

const Update = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Update" src={staticFile(assetPath.svgFile('update.svg'))} />);
}

const Eyebrow = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Eyebrow" src={staticFile(assetPath.svgFile('eyebrow.svg'))} />);
}

const MarioMountain = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MarioMountain" src={staticFile(assetPath.svgFile('mario-mountain.svg'))} />);
}

const Net = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Net" src={staticFile(assetPath.svgFile('net.svg'))} />);
}

const UserAngry = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="UserAngry" src={staticFile(assetPath.svgFile('user_angry.svg'))} />);
}

const EyeClose = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="EyeClose" src={staticFile(assetPath.svgFile('eye-close.svg'))} />);
}

const MarioPalace = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MarioPalace" src={staticFile(assetPath.svgFile('mario-palace.svg'))} />);
}

const Page = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Page" src={staticFile(assetPath.svgFile('page.svg'))} />);
}

const UserNone = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="UserNone" src={staticFile(assetPath.svgFile('user_none.svg'))} />);
}

const EyeFunky = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="EyeFunky" src={staticFile(assetPath.svgFile('eye-funky.svg'))} />);
}

const MarioPipe = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MarioPipe" src={staticFile(assetPath.svgFile('mario-pipe.svg'))} />);
}

const Pc = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Pc" src={staticFile(assetPath.svgFile('pc.svg'))} />);
}

const User = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="User" src={staticFile(assetPath.svgFile('user.svg'))} />);
}

const EyeNormal = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="EyeNormal" src={staticFile(assetPath.svgFile('eye-normal.svg'))} />);
}

const MarioPipeV2 = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MarioPipeV2" src={staticFile(assetPath.svgFile('mario-pipe-v2.svg'))} />);
}

const Privacy = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Privacy" src={staticFile(assetPath.svgFile('privacy.svg'))} />);
}

const Feet = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Feet" src={staticFile(assetPath.svgFile('feet.svg'))} />);
}

const MarioRun = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MarioRun" src={staticFile(assetPath.svgFile('mario-run.svg'))} />);
}

const PrivateAndroidIcon = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="PrivateAndroidIcon" src={staticFile(assetPath.svgFile('private-android-icon.svg'))} />);
}

const ForcedExam = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="ForcedExam" src={staticFile(assetPath.svgFile('forced-exam.svg'))} />);
}

const MarioSmallRun = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MarioSmallRun" src={staticFile(assetPath.svgFile('mario-small-run.svg'))} />);
}

const QuestionMark = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="QuestionMark" src={staticFile(assetPath.svgFile('question-mark.svg'))} />);
}

const FrontendLogo = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="FrontendLogo" src={staticFile(assetPath.svgFile('frontend-logo.svg'))} />);
}

const MarioSmallStand = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="MarioSmallStand" src={staticFile(assetPath.svgFile('mario-small-stand.svg'))} />);
}

const Quiz = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Quiz" src={staticFile(assetPath.svgFile('quiz.svg'))} />);
}

const BuildApp = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="BuildApp" src={staticFile(assetPath.gifFile('build-app.gif'))} />);
}

const BombExplosion = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="BombExplosion" src={staticFile(assetPath.gifFile('bomb-explosion.webp'))} />);
}

const Ensure = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Ensure" src={staticFile(assetPath.gifFile('Ensure.gif'))} />);
}

const HiWavingEmoji = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="HiWavingEmoji" src={staticFile(assetPath.gifFile('hi-waving-emoji.gif'))} />);
}

const Kannada = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Kannada" src={staticFile(assetPath.gifFile('kannada.gif'))} />);
}

const RunTime = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="RunTime" src={staticFile(assetPath.gifFile('run-time.gif'))} />);
}

const Cat = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Cat" src={staticFile(assetPath.gifFile('cat.gif'))} />);
}

const FlutterAppDevelopment = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="FlutterAppDevelopment" src={staticFile(assetPath.gifFile('flutter-app-development.gif'))} />);
}

const KannadaFlag = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="KannadaFlag" src={staticFile(assetPath.gifFile('kannada-flag.gif'))} />);
}

const Namaste = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Namaste" src={staticFile(assetPath.gifFile('namaste.gif'))} />);
}

const Giu1 = (props: Omit<ImgProps, 'src'>) => {

    return (<SafeAsset component={Img} {...props} data-asset="Giu1" src={staticFile(assetPath.svgFile('giu.svg'))} />)
}

const Giu2 = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Giu2" src={staticFile(assetPath.svgFile('giu-2.svg'))} />)
}

const Giu3 = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Giu3" src={staticFile(assetPath.svgFile('giu-3.svg'))} />)
}

const Slipper = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Slipper" src={staticFile(assetPath.svgFile('slipper.svg'))} />)
}

const Internet = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Internet" src={staticFile(assetPath.svgFile('internet.svg'))} />)
}

const InternetSlow = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="InternetSlow" src={staticFile(assetPath.svgFile('internet-slow.svg'))} />)
}

const InternetCut = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="InternetCut" src={staticFile(assetPath.svgFile('internet-cut.svg'))} />)
}

const JsonFile = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="JsonFile" src={staticFile(assetPath.svgFile('json-file.svg'))} />)
}

const Picture = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Picture" src={staticFile(assetPath.svgFile('image-icon.svg'))} />)
}

const Soul = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Soul" src={staticFile(assetPath.svgFile('soul.svg'))} />)
}

const Audio = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Audio" src={staticFile(assetPath.svgFile('audio.svg'))} />)
}

const Boss = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Boss" src={staticFile(assetPath.svgFile('boss.svg'))} />)
}

const Generator = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Generator" src={staticFile(assetPath.svgFile('generator.svg'))} />)
}

const Martini = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Martini" src={staticFile(assetPath.svgFile('martini.svg'))} />)
}

const Algorithm = (props: Omit<ImgProps, 'src'>) => {
    return (<SafeAsset component={Img} {...props} data-asset="Algorithm" src={staticFile(assetPath.svgFile('algorithm.svg'))} />)
}

const CatoonBombSound = (props: Omit<AudioProps, 'src'>) => {
    return (<SafeAsset component={HTML5Audio} {...props} data-asset="CartoonBombSound" src={staticFile(assetPath.audioFile('cartoon-bomb-explosion.mp3'))} />);
}

const Fah = (props: Omit<AudioProps, 'src'>) => {
    return (<SafeAsset component={HTML5Audio} {...props} data-asset="CartoonBombSound" src={staticFile(assetPath.audioFile('fah.mp3'))} />);
}

const Mandala = (props: Omit<ImgProps, 'src'> & {svgNo: number}) => {
    const {svgNo, ...rest} = props
    return (<SafeAsset component={Img} {...rest} data-asset={"Mandala-" + svgNo} src={staticFile(assetPath.svgFile(`mandala/${svgNo || 1}.svg`))} />);
}

const RainBow  = (props: Omit<ImgProps, 'src'> ) => {
    return (<SafeAsset component={Img} {...props} data-asset="RainBow" src={staticFile(assetPath.svgFile(`rainbow.svg`))} />);
}

const Coffee  = (props: Omit<ImgProps, 'src'> ) => {
    return (<SafeAsset component={Img} {...props} data-asset="Coffee" src={staticFile(assetPath.svgFile(`coffee.svg`))} />);
}

//================================================
// Voice files
//================================================

const Voice4Handshake = (props: { clip: string }) => {
    return (<SafeAsset component={HTML5Audio} src={staticFile(assetPath.audioFile(`4-handshake/4-${props.clip}.mp3`))} />)
}

const Voice5UiDesign = (props: { clip: string }) => {
    return (<SafeAsset component={HTML5Audio} src={staticFile(assetPath.audioFile(`5-ui-design/5_${props.clip}.mp3`))} />)
}

/**
 * Assets
 */
export const Assets = {
    Voice4Handshake, CatoonBombSound, Fah, Voice5UiDesign, Mandala, RainBow, Coffee,
    Scene6Bg, MaskMeme, ClockHand, Clock, Pub, ConvRev, Conv, Download, LocalStorage, CdnSoftware, MetaJsonEnterDoor, MetaJsonDoorClosed, Jsdelivr,
    Github, MoneyChair, Database, Politician, JsFramework, UmsThumbnail,
    Giu1, Giu2, Giu3, Slipper, Internet, InternetSlow, InternetCut,
    AppIcon,
    JSONIcon,
    KcmsBlueprint2,
    MarioSong,
    Song2,
    SuperMarioExtender,
    Voice2,
    KcmsBlueprint,
    IntroMusic,
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
    IntroBG,
    HomeOffice,
    Image2,
    Mibfreeze,
    Rocket,
    BrainClipart,
    Housefly,
    NoHint,
    Star,
    Conversation,
    Image12,
    ImageWebp,
    Optimized,
    IntroStars,
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
    GoldenStarSvg,
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
    BombExplosion,
    Ensure,
    HiWavingEmoji,
    Kannada,
    RunTime,
    Cat,
    FlutterAppDevelopment,
    KannadaFlag,
    Namaste
}
