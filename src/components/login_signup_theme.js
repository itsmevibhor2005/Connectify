import { extendTheme } from '@chakra-ui/react';

const login_sigmup_theme = extendTheme({
  styles: {
    global: {
      body: {
        background: 'radial-gradient(circle at 50% -50%, rgb(107, 39, 217) 0%, rgb(2, 6, 23) 58%)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        paddingTop: '10px',
        fontFamily: 'Arial, sans-serif',
        margin: '0',
        boxSizing: 'border-box',
      },
    },
  },
});

export default login_sigmup_theme;

