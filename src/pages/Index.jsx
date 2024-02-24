import React from "react";
import { Box, Heading, Text, Flex, Image, VStack, HStack, Container, SimpleGrid, Button, useBreakpointValue, chakra } from "@chakra-ui/react";
import { FaBookOpen, FaZombie, FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Carousel for game sliders
const CarouselItem = ({ src }) => <Image borderRadius="md" src={src} alt="Project Zomboid image" boxSize="full" objectFit="cover" />;

const Carousel = ({ items }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((s) => (s === items.length - 1 ? 0 : s + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? items.length - 1 : s - 1));
  };

  return (
    <Flex position="relative" overflow="hidden" borderRadius="md">
      <Button onClick={prevSlide} position="absolute" left="0" top="50%" transform="translateY(-50%)">
        <FaArrowLeft />
      </Button>
      <Button onClick={nextSlide} position="absolute" right="0" top="50%" transform="translateY(-50%)">
        <FaArrowRight />
      </Button>
      <CarouselItem src={items[currentSlide]} />
    </Flex>
  );
};

const Index = () => {
  // Game sliders
  const gameSliders = ['https://images.unsplash.com/photo-1594652634010-275456c808d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxQcm9qZWN0JTIwWm9tYm9pZCUyMGdhbWUlMjBzbGlkZXIlMjAxfGVufDB8fHx8MTcwODczNDgzMXww&ixlib=rb-4.0.3&q=80&w=1080', 'https://images.unsplash.com/photo-1594652634010-275456c808d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxQcm9qZWN0JTIwWm9tYm9pZCUyMGdhbWUlMjBzbGlkZXIlMjAyfGVufDB8fHx8MTcwODczNDgzMXww&ixlib=rb-4.0.3&q=80&w=1080', 'https://images.unsplash.com/photo-1594652634010-275456c808d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxQcm9qZWN0JTIwWm9tYm9pZCUyMGdhbWUlMjBzbGlkZXIlMjAzfGVufDB8fHx8MTcwODczNDgzMXww&ixlib=rb-4.0.3&q=80&w=1080'];

  // Use responsive breakpoints
  const carouselSize = useBreakpointValue({ base: "300px", md: "500px", lg: "600px" });

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        {/* Hero Section */}
        <Box textAlign="center">
          <Heading mb={4}>Welcome to the World of Project Zomboid</Heading>
          <Text fontSize="lg">Dive into the ultimate zombie survival experience with guides, trivia, and stunning visuals!</Text>
        </Box>

        {/* Carousel Section */}
        <Box w="full" h={carouselSize}>
          <Carousel items={gameSliders} />
        </Box>

        {/* Guides Section */}
        <Box as="section">
          <Heading mb={4}>Game Guides</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5}>
            {/* Replace with actual guides data */}
            <GuideCard title="Survival Guide" icon={<FaBookOpen />} />
            <GuideCard title="Base Building" icon={<FaBookOpen />} />
            <GuideCard title="Combat Tips" icon={<FaBookOpen />} />
          </SimpleGrid>
        </Box>

        {/* Interesting Facts Section */}
        <Box as="section">
          <Heading mb={4}>Interesting Facts</Heading>
          <Text>Did you know that in Project Zomboid, the sound design is so detailed that you can hear the direction and distance of zombies based on their groans? Learn more intriguing facts as you explore our site!</Text>
        </Box>

        {/* Pictures from the Game Section */}
        <Box as="section">
          <Heading mb={4}>Gallery</Heading>
          <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} spacing={5}>
            {/* Replace with actual game images */}
            <Image src="https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxQcm9qZWN0JTIwWm9tYm9pZCUyMHNjcmVlbnNob3R8ZW58MHx8fHwxNzA4NzM0ODMxfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
            <Image src="https://images.unsplash.com/photo-1566241477600-ac026ad43874?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxQcm9qZWN0JTIwWm9tYm9pZCUyMHNjcmVlbnNob3R8ZW58MHx8fHwxNzA4NzM0ODMxfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
            <Image src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxQcm9qZWN0JTIwWm9tYm9pZCUyMHNjcmVlbnNob3R8ZW58MHx8fHwxNzA4NzM0ODMxfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
            <Image src="https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw0fHxQcm9qZWN0JTIwWm9tYm9pZCUyMHNjcmVlbnNob3R8ZW58MHx8fHwxNzA4NzM0ODMxfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

// Guide card component
const GuideCard = ({ title, icon }) => (
  <VStack p={5} boxShadow="md" border="1px" borderColor="gray.200" borderRadius="md" _hover={{ boxShadow: "lg" }} transition="box-shadow 0.2s ease-in-out">
    <chakra.span fontSize="3xl" mb={4}>
      {icon}
    </chakra.span>
    <Text fontWeight="semibold">{title}</Text>
  </VStack>
);

export default Index;
