import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()((theme) => ({
  root: {
    overflow: 'auto',
  },
  paginate: {
    marginTop: theme.spacing(3),
  },
}));

export default useStyles;
