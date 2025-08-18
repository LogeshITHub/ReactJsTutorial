import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const NewProduct = () => {
  const [Product, setProduct] = useState({
    title: "",
    description: "",
    rating: {
      count: 0,
      price: 0,
    },
  });
  function handleChange(e) {
    let { value, name } = e.target;

    if (name.includes("rating")) {
      let subname = name.split(".")[1];
      setProduct((prev) => ({
        ...prev,
        rating: {
          ...prev.rating,
          [subname]: value,
        },
      }));
    } else {
      setProduct((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }
  function buttonSubmit() {
    console.log(Product);
  }
  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 500, margin: "40px auto" }}>
      <Grid container spacing={2} direction="column">
        <Grid item>
          <Typography variant="h5" gutterBottom style={{ textAlign: "center" }}>
            Add New Product
          </Typography>
        </Grid>

        <Grid item>
          <TextField
            value={Product.title}
            id="title"
            name="title"
            label="Title"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
        </Grid>

        <Grid item>
          <TextField
            id="description"
            name="description"
            value={Product.description}
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={2}
            onChange={handleChange}
          />
        </Grid>

        <Grid item>
          <div style={{ display: "flex", gap: "16px" }}>
            <TextField
              id="rating.price"
              name="rating.price"
              value={Product.rating.price}
              label="Price"
              variant="outlined"
              type="number"
              style={{ flex: 1 }}
              onChange={handleChange}
            />
            <TextField
              id="rating.count"
              name="rating.count"
              value={Product.rating.count}
              label="Count"
              variant="outlined"
              type="number"
              style={{ flex: 1 }}
              onChange={handleChange}
            />
          </div>
        </Grid>

        <Grid item sx={{ textAlign: "center" }}>
          <Button variant="contained" color="primary" onClick={buttonSubmit}>
            Save Product
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default NewProduct;
