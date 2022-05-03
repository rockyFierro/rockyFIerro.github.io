import { Global } from "@emotion/react"
// Roboto
// Barlow
// Nunito
// PressStart2P
const Fonts = () => (
    <Global
        styles={`
        @import url('https://fonts.googleapis.com/css2?family=Barlow&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Nunito&family=Roboto:wght@700&display=swap');
        `}
    />
)

export default Fonts