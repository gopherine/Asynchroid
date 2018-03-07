import classes from '../styles/style.scss'
import NEW from '../components/test';

const classhere=`${classes.example} ${classes.font}`
export default () =>
<div>
  <div className={classhere}>
    Hello World!
  </div>
  <NEW/>
  </div>
