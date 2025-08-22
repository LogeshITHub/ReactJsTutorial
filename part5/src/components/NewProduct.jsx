import React, { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  CloudUpload as CloudUploadIcon,
} from "@mui/icons-material";

const VisuallyHiddenInput = (props) => (
  <input
    {...props}
    style={{
      clip: "rect(0 0 0 0)",
      clipPath: "inset(50%)",
      height: 1,
      overflow: "hidden",
      position: "absolute",
      bottom: 0,
      left: 0,
      whiteSpace: "nowrap",
      width: 1,
    }}
  />
);

const NewProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    slug: "",
    images: [],
    category: {},
    creationAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!product.title.trim()) newErrors.title = "Title is required";
    if (!product.description.trim())
      newErrors.description = "Description is required";
    if (!product.price || product.price <= 0)
      newErrors.price = "Valid price is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const images = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setProduct((prev) => ({ ...prev, images: [...prev.images, ...images] }));
  };

  const removeImage = (index) => {
    setProduct((prev) => {
      const updated = [...prev.images];
      updated.splice(index, 1);
      return { ...prev, images: updated };
    });
  };

  const handleSubmit = () => {
    debugger;
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const formattedProduct = {
      id: Date.now(), // temporary ID, server can overwrite
      title: product.title,
      slug: product.slug || product.title.toLowerCase().replace(/\s+/g, "-"), // auto-slug if empty
      price: Number(product.price),
      description: product.description,
      category: {},
      images: product.images.map((img) => img.preview),
      creationAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setSubmitting(true);
    fetch("http://localhost:5000/Products", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(formattedProduct),
    })
      .then(() => {
        setSubmitting(false);
        setProduct({
          title: "",
          description: "",
          price: "",
          slug: "",
          images: [],
          category: {},
          creationAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        });
        setErrors({});
        alert("Product saved successfully!");
      })
      .catch((e) => console.log(e));
  };

  return (
    <Paper
      elevation={3}
      sx={{ p: 4, maxWidth: 900, margin: "40px auto", borderRadius: 2 }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#1976d2" }}
      >
        Add New Product
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                Title
              </Typography>
              <TextField
                fullWidth
                name="title"
                value={product.title}
                onChange={handleChange}
                variant="outlined"
                placeholder="Enter product title"
                error={!!errors.title}
                helperText={errors.title}
                sx={{ backgroundColor: "#fff" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                Description
              </Typography>
              <TextField
                fullWidth
                name="description"
                value={product.description}
                onChange={handleChange}
                variant="outlined"
                placeholder="Enter product description"
                error={!!errors.description}
                helperText={errors.description}
                sx={{ backgroundColor: "#fff" }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                Price
              </Typography>
              <TextField
                fullWidth
                name="price"
                value={product.price}
                onChange={handleChange}
                variant="outlined"
                type="number"
                error={!!errors.price}
                helperText={errors.price}
                sx={{ backgroundColor: "#fff" }}
                inputProps={{ min: 0 }}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Product Images */}
        <Grid item xs={12}>
          <Grid container spacing={3} alignItems="flex-start">
            <Grid item xs={12} md={8}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", mr: 1 }}
                >
                  Product Images
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ({product.images.length} uploaded)
                </Typography>
              </Box>
              <Button
                component="label"
                variant="outlined"
                startIcon={<CloudUploadIcon />}
                sx={{
                  mb: 2,
                  border: "2px dashed #1976d2",
                  color: "#1976d2",
                  "&:hover": { borderColor: "#115293" },
                }}
              >
                Upload Images
                <VisuallyHiddenInput
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </Button>
              {product.images.length > 0 && (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                  {product.images.map((image, index) => (
                    <Box key={index} sx={{ position: "relative" }}>
                      <img
                        src={image.preview}
                        alt={`Preview ${index + 1}`}
                        style={{
                          width: 120,
                          height: 120,
                          objectFit: "cover",
                          borderRadius: 8,
                          border: "1px solid #ddd",
                        }}
                      />
                      <IconButton
                        size="small"
                        onClick={() => removeImage(index)}
                        sx={{
                          position: "absolute",
                          top: -10,
                          right: -10,
                          backgroundColor: "#d32f2f",
                          color: "#fff",
                          "&:hover": { backgroundColor: "#b71c1c" },
                        }}
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    </Box>
                  ))}
                </Box>
              )}
            </Grid>
          </Grid>
        </Grid>

        {/* Save Button */}
        <Grid item xs={12} sx={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={submitting}
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: "bold",
              fontSize: "1rem",
              borderRadius: 8,
            }}
          >
            {submitting ? "Saving..." : "Save Product"}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default NewProduct;
