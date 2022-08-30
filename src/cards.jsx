import * as React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
//card view to display the card view of entries
export default function BasicCard({ apiData }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {(apiData?.API ?? "") + "API"}
        </Typography>
        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
          {apiData?.Description ?? ""}
        </Typography>
        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
          {apiData?.Category ?? ""}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={apiData?.Link}>LEARN MORE</Link>
      </CardActions>
    </Card>
  );
}
