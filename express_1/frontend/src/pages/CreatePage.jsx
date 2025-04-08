import {
  Heading,
  Container,
  Box,
  VStack,
  useColorModeValue,
  Input,
  Button,
  useToast
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useProductStore } from '../store/product';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    image: '',
    price: '',
    description: ''
  });
  const toast = useToast();


  const { createProduct } = useProductStore();

  const handleProduct = async () => {
    const preparedProduct = {
      ...newProduct,
      price: parseFloat(newProduct.price)
    };

    console.log("Sending to backend:", preparedProduct);

    const { success, message } = await createProduct(preparedProduct);
    console.log("Success:", success);
    console.log("Message:", message);
    if(!success){
      toast({
        title: 'Error.',
        description: message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }else{
      toast({
        title: 'Success.',
        description: message,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    }
    setNewProduct({
      name: '',
      image: '',
      price: '',
      description: ''
    });
    
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
              type="number"
              step="0.01"
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
