import { CacheProvider } from '@emotion/react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import createEmotionCache from './createEmotionCache'

const emotionCache = createEmotionCache()

export default function MuiProvider({
    children,
    theme
}: {
    children: React.ReactNode,
    theme:any
  }) {

    return <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </CacheProvider>

}