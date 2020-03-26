import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Typography,
  Button,
  makeStyles,
  TextField,
  Grid
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import Autocomplete from "@material-ui/lab/Autocomplete";

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: 350
  },
  paper: {
    margin: theme.spacing(2),
    display: "flex",
    flexDirection: "column"
  },
  spacing: {
    marginTop: theme.spacing(1)
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Article() {
  const classes = useStyles();

  const [data, setData] = useState("");
  const [quantites, setQuantites] = useState([]);
  const [alert, setAlert] = useState("");

  const [quantite, setQuantite] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (quantite === "") {
      setAlert(() => (
        <Alert severity="error">Veuillez choisir la quantité</Alert>
      ));
      setTimeout(() => {
        setAlert("");
      }, 5000);
    } else {
      if (localStorage.getItem("cart-cookie")) {
        const array = JSON.parse(localStorage.getItem("cart-cookie"));
        let i = 0;
        let c = false;
        while (i !== array.length && c === false) {
          if (array[i]._id === data._id) {
            array[i].quantite += parseInt(quantite);
            c = true;
          } else {
            i++;
          }
        }
        if (i === array.length) {
          array.push({ _id: data._id, quantite: parseInt(quantite) });
        }

        localStorage.setItem("cart-cookie", JSON.stringify(array));
      } else {
        const array = [];
        array.push({ _id: data._id, quantite: parseInt(quantite) });
        localStorage.setItem("cart-cookie", JSON.stringify(array));
      }
      window.location = "/Panier";
    }
  };

  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/articles/recherche/" +
          window.location.pathname.substring(9, window.location.pathname.length)
      )
      .then(resultat => {
        setData(resultat.data);
        for (let i = 1; i <= resultat.data.quantite; i++) {
          setQuantites(quantites => [
            ...quantites,
            {
              title: i.toString()
            }
          ]);
        }
      });
  }, []);
  return (
    <Grid container className={classes.container}>
      <div className={classes.paper}>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Typography variant="h5" className={classes.spacing}>
            {data.nom}
          </Typography>
          <Typography
            variant="h4"
            color="secondary"
            className={classes.spacing}
          >
            {data.prix} DT
          </Typography>
          {alert}
          <Autocomplete
            className={classes.spacing}
            id="combo-box-demo"
            onInputChange={(event, value) => setQuantite(value)}
            options={quantites}
            getOptionLabel={option => option.title}
            renderInput={params => (
              <TextField {...params} label="quantité" variant="outlined" />
            )}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            fullWidth
          >
            Ajouter au panier
          </Button>
        </form>
      </div>
    </Grid>
  );
}