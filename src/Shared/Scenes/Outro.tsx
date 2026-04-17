import { CSSProperties } from "react"
import { NamedElement as E } from "../Helpers/components"
import { utils } from "../Helpers/utils"

export const Outro = () => {
    const spanStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        gap: '50px'
    }
    return <E.OutroComponent style={{
        fontFamily: 'Montserrat',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white',
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        ...utils.fade({
            frameFromTo: [0, 60],
            values: [0, 1]
        }),
        textAlign: 'center'
    }} >
        <E.CuNextTime style={{
            textTransform: 'capitalize',
            fontSize: '100px'
        }} >
            See you next time!
        </E.CuNextTime>
        <E.ChannelName
            style={{
                fontSize: '500px',
                fontWeight: 100
            }}
        >
            CODEMAGI
        </E.ChannelName>
        <E.CTALink style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'flex-start',
            fontSize: '100px',
            width: '100%'
        }} >
            <span style={spanStyle} >
                <span className="material-symbols-outlined" style={{
                    fontSize: '100px'
                }} >
                    subscriptions
                </span>
                SUBSCRIBE
            </span>
            <span style={spanStyle} >
                <span className="material-symbols-outlined" style={{
                    fontSize: '100px'
                }} >
                    thumb_up
                </span>
                LIKE
            </span>
            <span style={spanStyle} >
                <span className="material-symbols-outlined" style={{
                    fontSize: '100px'
                }} >
                    share
                </span>
                SHARE
            </span>
        </E.CTALink>
    </E.OutroComponent>
}