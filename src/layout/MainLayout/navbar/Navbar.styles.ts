import { createUseStyles } from 'react-jss';

interface ThemeInterface {
  spacing: {
    4: number;
    8: number;
    10: number;
  };
  palette: {
    primary: {
      500: string;
    };
    common: {
      black: string;
    };
  };
}

export const useStyles = createUseStyles((theme: ThemeInterface) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed',
    top: 0,
    left: 0,
    padding: `${theme.spacing[4]}px ${theme.spacing[8]}px`,
    width: '100%',
    zIndex: 100,
    backgroundColor: theme.palette.common.black,
  },
  logo: {
    marginRight: theme.spacing[10],
    cursor: 'pointer',
  },
  menu: {
    '& ul': {
      display: 'flex',
      alignItems: 'center',
      '& li': {
        padding: 10,
        '& a': {
          color: '#fff',
        },
        '& a.active': {
          color: theme.palette.primary[500],
        },
      },
    },
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  user: {},
}));
