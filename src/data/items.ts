import { Product } from "@/domain/Product";

const items: Product[] = [
  {
    id: 1,
    title: "Macbook Pro",
    price: 2500.0,
    image:
      "https://a-static.mlcdn.com.br/280x210/notebook-macbook-air-133-apple-m1-8gb-256gb-ssd-prateado/magazineluiza/227625500/43ed459d5a87a2e62e35e5eb394b0c94.jpg",
    description:
      "O Macbook Pro é uma obra-prima da Apple, projetado para proporcionar a melhor experiência de computação. Com um processador M1 de última geração, este laptop oferece desempenho excepcional e eficiência energética. Sua tela Retina de alta resolução proporciona cores vibrantes e detalhes nítidos. É perfeito para profissionais criativos e entusiastas da tecnologia que buscam potência e elegância.",
    rating: (Math.random() * (5 - 3) + 3).toFixed(2),
  },
  {
    id: 2,
    title: "Asus ROG Gaming",
    price: 1000.0,
    image:
      "https://a-static.mlcdn.com.br/280x210/placa-mae-asus-rog-strix-b550-e-gaming-amd-am4-atx-ddr4/kabum/113864/f49dc2e476249d919350478bb9576120.jpeg",
    description:
      "O Asus ROG Gaming é uma placa-mãe de alta qualidade projetada para gamers exigentes. Com suporte para processadores AMD AM4 e tecnologia DDR4, esta placa oferece desempenho excepcional para jogos intensos. Além disso, possui iluminação RGB personalizável para uma aparência incrível em seu gabinete de PC.",
    rating: (Math.random() * (5 - 3) + 3).toFixed(2),
  },
  {
    id: 3,
    title: "Amazon Kindle",
    price: 150.0,
    image:
      "https://a-static.mlcdn.com.br/280x210/kindle-paperwhite-amazon-68-16gb-300-ppi-wi-fi-luz-embutida-preto/magazineluiza/236575700/b2675afd69e986d2bcad022057fb4df2.jpg",
    description:
      "O Amazon Kindle é o leitor de e-books mais popular do mundo, conhecido por sua tela Paperwhite de alta resolução e iluminação embutida. Com 16GB de armazenamento, você pode levar milhares de livros com você para ler em qualquer lugar. A bateria de longa duração significa que você pode passar semanas lendo sem recarregar.",
    rating: (Math.random() * (5 - 3) + 3).toFixed(2),
  },
  {
    id: 4,
    title: "Tablet Fire HD 8 Kids",
    price: 320,
    image:
      "https://a-static.mlcdn.com.br/280x210/tablet-amazon-fire-hd-geracao-2023-infantil-inportado/vemkitemprodutosonline/0ee91dd61a0011eeace74201ac185049/2db6ebd5694279e765166083ca906e72.jpeg",
    description:
      "O Tablet Fire HD 8 Kids é projetado especialmente para crianças, oferecendo entretenimento educacional e seguro. Ele vem com uma capa resistente a quedas e um ano de Amazon Kids+ gratuito, que oferece acesso a milhares de livros, jogos, aplicativos e vídeos apropriados para crianças. Os pais podem controlar o tempo de uso e o conteúdo.",
    rating: (Math.random() * (5 - 3) + 3).toFixed(2),
  },
  {
    id: 5,
    title: "Beats Headphone by Dr. Dre",
    price: 500,
    image:
      "https://a-static.mlcdn.com.br/352x470/headphone-fone-de-ouvido-beats-ep-vermelho/magazineluiza/218451400/6a944559acf71d3312caccd06d8b5df3.jpg",
    description:
      "Os fones de ouvido Beats by Dr. Dre são conhecidos por seu som premium e estilo elegante. O modelo Beats EP oferece qualidade sonora excepcional e conforto durante o uso prolongado. Seu design dobrável facilita o transporte, e o cabo removível com controle de reprodução permite que você ajuste a música e atenda chamadas com facilidade.",
    rating: (Math.random() * (5 - 3) + 3).toFixed(2),
  },
  {
    id: 6,
    title: "Teclado Yamaha Psr-e473 E-473",
    price: 2380,
    image: "https://m.media-amazon.com/images/I/51uCnvCONhL._AC_SY355_.jpg",
    description:
      "Uma revolução na música portátil O teclado sensível ao toque e poderoso motor de som do PSR-E473 trazem um excelente som e a ótima sensação em um instrumento totalmente novo. A série PSR-400 é uma ótima opção de 61 teclas que é ideal para quem está iniciando, mas também representa uma alternativa robusta para músicos experientes.",
    rating: (Math.random() * (5 - 3) + 3).toFixed(2),
  },
  {
    id: 7,
    title: "Roteador AX1500 Wi-Fi 6 TP-Link Archer AX12, Dual Band 2.4/5 GHz",
    price: 327,
    image:
      "https://m.media-amazon.com/images/I/61-50f0Z7iL.__AC_SX300_SY300_QL70_ML2_.jpg",
    description:
      "Tecnologia Wi-Fi 6: Experimente a velocidade e a confiabilidade incomparáveis com o roteador Archer AX12 equipado com a tecnologia Wi-Fi 6 de última geração. Com velocidades mais rápidas, maior capacidade e redução de congestionamento na rede, você pode desfrutar de uma conexão Wi-Fi mais rápida e estável do que nunca. Atualize para o Archer AX12 e experimente a diferença que o Wi-Fi 6 pode fazer!",
    rating: (Math.random() * (5 - 3) + 3).toFixed(2),
  },
  {
    id: 8,
    title: "HD SSD Kingston SA400S37 480GB",
    price: 165,
    image:
      "https://m.media-amazon.com/images/I/81Yleainj1L.__AC_SY300_SX300_QL70_ML2_.jpg",
    description:
      "O SSD Kingston SA400S37 480GB é uma escolha excelente para quem busca melhorar significativamente o desempenho de seu computador ou laptop. Com sua capacidade generosa de 480GB, este SSD oferece espaço de armazenamento suficiente para acomodar seus aplicativos, jogos e arquivos importantes.",
    rating: (Math.random() * (5 - 3) + 3).toFixed(2),
  },
  {
    id: 9,
    title: "Monitor para PC Full HD UltraWide LG LED IPS 29” - 29WK600",
    price: 1149,
    image: "https://m.media-amazon.com/images/I/61QUveKcmIL._AC_SX425_.jpg",
    description:
      "O monitor para PC Full HD UltraWide LG LED IPS 29” 29WK600 é a escolha perfeita para aqueles que desejam elevar sua experiência de visualização a um novo patamar. Com sua tela ultralarga de 29 polegadas e tecnologia IPS, este monitor oferece imagens nítidas e cores vibrantes que proporcionam uma experiência visual imersiva",
    rating: (Math.random() * (5 - 3) + 3).toFixed(2),
  },
];

export default items;
