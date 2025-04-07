import {
    Heading,
    Container,
    Box,
    VStack,
    useColorModeValue,
    Input,
    Button
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
  
  const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
      name: '',
      price: '',
      image: '',
      description: ''
    });
  
    const handleProduct = () => {
      console.log(newProduct);
    };
  
    return (
      <Container maxW="container.sm">
        <VStack spacing={8}>
          <Heading as="h1" size="2xl" textAlign="center" mb={8}>
            Create New Product
          </Heading>
          <Box
            w="full"
            bg={useColorModeValue('white', 'gray.800')}
            p={6}
            rounded="lg"
            shadow="md"
          >
            <VStack spacing={4}>
              <Input
                placeholder="Product Name"
                name="name"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
              />
              <Input
                placeholder="Product Price"
                name="price"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, price: e.target.value })
                }
              />
              <Input
                placeholder="Product Image"
                name="image"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, image: e.target.value })
                }
              />
              <Input
                placeholder="Product Description"
                name="description"
                value={newProduct.description}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, description: e.target.value })
                }
              />
              <Button w="full" colorScheme="blue" onClick={handleProduct}>
                Add Product
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    );
  };
  
  export default CreatePage;
  