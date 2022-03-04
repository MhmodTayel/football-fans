import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./TeamCard.scss";
import { Players } from "..";
export default function TeamCard({data}) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div" className="team-card">
           
            <span>{data.user.team.name}</span>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary" className="team-card">
            {data.user.country}
          </Typography>
          <Players playersData={data.players}/>
        </CardContent>
      </Card>
    </Box>
  );
}
