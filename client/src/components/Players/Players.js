import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import "./Players.scss";
import Typography from "@mui/material/Typography";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
export default function Players({ playersData }) {
  console.log(playersData);
  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      className="players-grid"
    >
      {playersData.map((player) => {
        return (
          <ListItem key={player._id}>
            <ListItemAvatar>
              <Avatar
                {...stringAvatar(`${player.firstName} ${player.lastName}`)}
              />
            </ListItemAvatar>
            <ListItemText
              primary={`${player.firstName} ${player.lastName}`}
              secondary={
                <>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {`${player.value}$`}
                  </Typography>
                  {` — ${player.state}`}
                </>
              }
            />
          </ListItem>
        );
      })}
    </List>
  );
}
