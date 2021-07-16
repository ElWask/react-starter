import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useStyles from "./AstroCard.css";

const AstroCard = ({ astro }) => {
  const classes = useStyles();
  const { wZodiac, birthstone, cZodiac, horo } = astro;
  return (
    <Card className={classes.mainCard}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          Zodiac sign
        </Typography>
        <Typography variant="body2" component="p">
          {wZodiac}
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          Chinese zodiac sign
        </Typography>
        <Typography variant="body2" component="p">
          {cZodiac}
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          Birthstone
        </Typography>
        <Typography variant="body2" component="p">
          {birthstone}
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          Horoscope
        </Typography>
        <Typography variant="body2" component="p">
          {horo}
        </Typography>
      </CardContent> 
    </Card>
  );
};

export default AstroCard;
