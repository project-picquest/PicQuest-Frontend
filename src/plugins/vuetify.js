// src/plugins/vuetify.js
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#ffffff',
          primary: '#1976D2',
        },
        typography: {
          fontFamily: '"Noto Sans KR", sans-serif',  // 원하는 폰트로 변경
        },
      },
    },
  },
})
