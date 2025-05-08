import { Product } from '../types';

export const regionProducts: Record<string, Product[]> = {
  tamilnadu: [
    {
      id: 'tn001',
      name: 'Tanjore Painting - Dancing Krishna',
      price: 5800,
      image: 'https://cdn.exoticindia.com/images/products/original/paintings-2019/pab167.jpg',
      artisan: 'Meenakshi Sundaram',
      description: 'Handcrafted Tanjore painting with gold foil work featuring Dancing Krishna. Traditional technique from Tamil Nadu.',
      category: 'Wall Hangings',
      region: 'tamilnadu',
      technique: 'Tanjore Painting'
    },
    {
      id: 'tn002',
      name: 'Kanchipuram Silk Saree',
      price: 12500,
      image: 'https://pashudh.com/cdn/shop/files/5_73_478f45be-1982-47da-bd61-cbc81b269757_1080x.jpg?v=1736141453',
      artisan: 'Selvaraj Weavers',
      description: 'Pure handwoven Kanchipuram silk saree with zari work in maroon and gold. Each saree takes 15-20 days to create.',
      category: 'Textiles',
      region: 'tamilnadu',
      technique: 'Silk Weaving'
    },
    {
      id: 'tn003',
      name: 'Bronze Nataraja Statue',
      price: 8900,
      image: 'https://c9admin.cottage9.com/uploads/2623/nataraja-statue-is-masterpiece-of-indian-art.jpg',
      artisan: 'Kumar Sthapati',
      description: 'Traditional lost-wax method bronze statue of Lord Nataraja, the cosmic dancer. Made by artisans in Swamimalai.',
      category: 'Pottery',
      region: 'tamilnadu',
      technique: 'Bronze Casting'
    },
    {
      id: 'tn004',
      name: 'Chettinad Cotton Bag',
      price: 1200,
      image: 'https://images.app.goo.gl/sapSgU6gAQRpj3TG8',
      artisan: 'Lakshmi Crafts Collective',
      description: 'Handwoven Chettinad cotton bag with traditional patterns. Perfect for everyday use and sustainable shopping.',
      category: 'Bags',
      region: 'tamilnadu',
      technique: 'Cotton Weaving'
    }
  ],
  rajasthan: [
    {
      id: 'rj001',
      name: 'Block Print Bedsheet Set',
      price: 3400,
      image: 'https://cdn.shopify.com/s/files/1/1526/0654/files/1._Header_de5cd3d4-83bc-4ef4-830a-c03e1fbf1d43.jpg?v=1738214470',
      artisan: 'Jaipur Printing Collective',
      description: 'Hand block printed king-size bedsheet with 2 pillow covers, using natural dyes. Traditional Sanganeri print.',
      category: 'Textiles',
      region: 'rajasthan',
      technique: 'Block Printing'
    },
    {
      id: 'rj002',
      name: 'Blue Pottery Vase Set',
      price: 2800,
      image: 'https://5.imimg.com/data5/ANDROID/Default/2022/6/IJ/JS/JL/97527935/product-jpeg-500x500.jpg',
      artisan: 'Akbar Ali Pottery',
      description: 'Set of 3 hand-painted blue pottery vases from Jaipur. Persian-influenced design with intricate floral patterns.',
      category: 'Pottery',
      region: 'rajasthan',
      technique: 'Blue Pottery'
    },
    {
      id: 'rj003',
      name: 'Bandhani Silk Dupatta',
      price: 1800,
      image: 'https://www.vasangini.com/wp-content/uploads/2022/12/Gaji-Silk-Dupatta-Womens-Bandhani-Chunri-Red.webp',
      artisan: 'Meera Bandhej',
      description: 'Hand-tied bandhani silk dupatta in vibrant red and yellow. Made using traditional tie-dye technique from Jodhpur.',
      category: 'Textiles',
      region: 'rajasthan',
      technique: 'Bandhani'
    },
    {
      id: 'rj004',
      name: 'Miniature Painting - Royal Court',
      price: 4500,
      image: 'https://www.artudaipur.com/cdn/shop/products/RoyalIndianPaintings.jpg?v=1628585473',
      artisan: 'Rahul Sharma',
      description: 'Traditional Rajasthani miniature painting depicting a royal court scene. Handmade using natural colors on handmade paper.',
      category: 'Wall Hangings',
      region: 'rajasthan',
      technique: 'Miniature Painting'
    }
  ],
  kerala: [
    {
      id: 'kl001',
      name: 'Aranmula Mirror',
      price: 9500,
      image: 'https://www.shutterstock.com/image-photo/aranmula-kannadi-aka-metal-mirror-600nw-2217773565.jpg',
      artisan: 'Aranmula Craft Collective',
      description: 'Traditional metal mirror made with a special alloy, unique to Aranmula village. Considered auspicious and handcrafted by skilled artisans.',
      category: 'Wall Hangings',
      region: 'kerala',
      technique: 'Metal Alloy Crafting'
    },
    {
      id: 'kl002',
      name: 'Coir Doormat Set',
      price: 980,
      image: 'https://www.lpdoormats.com/cdn/shop/products/7198330409393_2048x.jpg?v=1647425597',
      artisan: 'Alappuzha Coir Cooperative',
      description: 'Set of 2 handwoven coir doormats with geometric designs. Made from natural coconut fiber by artisans in Alappuzha.',
      category: 'Textiles',
      region: 'kerala',
      technique: 'Coir Weaving'
    },
    {
      id: 'kl003',
      name: 'Bell Metal Uruli',
      price: 4200,
      image: 'https://5.imimg.com/data5/ECOM/Default/2024/9/453459526/DL/CT/PE/159110959/handmade-bronze-uruli-extra-large-80s-cookware-sustainable-cookware-brown-living-bronze-urulichatti-.jpg',
      artisan: 'Murugan Moosari',
      description: 'Traditional bell metal cooking vessel used in Kerala cuisine and Ayurvedic preparations. Handcrafted using ancient techniques.',
      category: 'Pottery',
      region: 'kerala',
      technique: 'Bell Metal Casting'
    },
    {
      id: 'kl004',
      name: 'Kasavu Saree with Gold Border',
      price: 4800,
      image: 'https://kuberansilks.com/cdn/shop/products/1098427_20_4_1080x.jpg?v=1606135980',
      artisan: 'Balaramapuram Weavers',
      description: 'Handwoven Kerala Kasavu saree with pure gold zari border. Traditional cream and gold color combination made on handlooms.',
      category: 'Textiles',
      region: 'kerala',
      technique: 'Handloom Weaving'
    }
  ],
  gujarat: [
    {
      id: 'gj001',
      name: 'Patola Silk Dupatta',
      price: 18500,
      image: 'https://clothsvilla.com/cdn/shop/products/Maroon-Color-Digital-Patola-Printed-Pure-Gaji-Silk-Dupatta-With-Tassels-in-women-fashion-by-looknbook-art.jpg',
      artisan: 'Salvi Family Weavers',
      description: 'Double ikat patola silk dupatta from Patan. Features traditional geometric and floral patterns with intricate weaving.',
      category: 'Textiles',
      region: 'gujarat',
      technique: 'Patola Weaving'
    },
    {
      id: 'gj002',
      name: 'Rogan Art Wall Hanging',
      price: 6500,
      image: 'https://itokri.com/cdn/shop/products/wallpainting-72-2.jpg?v=1653733909&width=1445',
      artisan: 'Abdul Khatri',
      description: 'Hand-painted Rogan art piece on cotton fabric. This rare craft uses castor oil-based paint applied with a stylus without touching the fabric.',
      category: 'Wall Hangings',
      region: 'gujarat',
      technique: 'Rogan Art'
    },
    {
      id: 'gj003',
      name: 'Kutch Embroidered Tote Bag',
      price: 2200,
      image: 'https://shop.gaatha.com/image/catalog/data/Hansiba/Hand-Embroidered-Tote-Bag-7.jpg',
      artisan: 'Kutch Artisan Collective',
      description: 'Hand-embroidered tote bag with traditional Kutch mirror work and vibrant thread embroidery. Each piece is unique.',
      category: 'Bags',
      region: 'gujarat',
      technique: 'Kutch Embroidery'
    },
    {
      id: 'gj004',
      name: 'Bandhani Silk Saree',
      price: 9800,
      image: 'https://i.etsystatic.com/25473399/r/il/66663c/5456317979/il_570xN.5456317979_8y0j.jpg',
      artisan: 'Jamnagar Bandhani Craftsmen',
      description: 'Fine silk saree with intricate bandhani work featuring over 10,000 tiny knots. Traditional Gujarati design in red and gold.',
      category: 'Textiles',
      region: 'gujarat',
      technique: 'Bandhani'
    }
  ],
  odisha: [
    {
      id: 'od001',
      name: 'Pattachitra Painting - Krishna Leela',
      price: 4800,
      image: 'https://cdn.exoticindia.com/images/products/original/paintings-2019/pab533_a01.jpg',
      artisan: 'Rabindra Mohapatra',
      description: 'Traditional scroll painting on cloth canvas depicting Krishna Leela. Hand-painted using natural colors and detailed brushwork.',
      category: 'Wall Hangings',
      region: 'odisha',
      technique: 'Pattachitra'
    },
    {
      id: 'od002',
      name: 'Silver Filigree Box',
      price: 7500,
      image: 'https://www.benjanssens.com/wp-content/uploads/bfi_thumb/TEFAF-2016-75-Silver-Filigree-Box-mmwhncv8bmtfxyiylqkxfa7l9yul4bksg9hpz1juv4.jpg',
      artisan: 'Cuttack Silver Artisans',
      description: 'Intricate silver filigree jewelry box from Cuttack. This delicate metalwork features twisted silver wires formed into intricate patterns.',
      category: 'Pottery',
      region: 'odisha',
      technique: 'Silver Filigree'
    },
    {
      id: 'od003',
      name: 'Sambalpuri Ikat Saree',
      price: 5900,
      image: 'https://priyaodisha.com/cdn/shop/products/handloom-sambalpuri-cotton-ikkat-saree-handloom-sareesambalpuri-cotton-priyadarshini-handloom-655013.jpg?v=1678781464&width=1080',
      artisan: 'Bargarh Weavers Cooperative',
      description: 'Hand-woven Sambalpuri Ikat cotton saree featuring traditional bandha technique. The pattern is created by tie-dyeing the threads before weaving.',
      category: 'Textiles',
      region: 'odisha',
      technique: 'Ikat Weaving'
    },
    {
      id: 'od004',
      name: 'Applique Work Wall Hanging',
      price: 3400,
      image: 'https://www.gitagged.com/wp-content/uploads/2020/02/APLIQ-02-RADHA-KRISHNA-SWING-1-1.jpg',
      artisan: 'Pipili Crafts Village',
      description: 'Colorful applique work wall hanging from Pipili featuring traditional designs. Made by cutting and stitching fabric pieces onto a base cloth.',
      category: 'Wall Hangings',
      region: 'odisha',
      technique: 'Applique Work'
    }
  ],
  andhrapradesh: [
    {
      id: 'ap001',
      name: 'Kalamkari Hand-painted Cloth',
      price: 3800,
      image: 'https://i.pinimg.com/736x/bd/68/75/bd6875d2066bce777eef5d36d2d90c25.jpg',
      artisan: 'Srikalahasti Artisans',
      description: 'Hand-painted Kalamkari textile with natural dyes and traditional motifs. Features Hindu mythology scenes created using a bamboo pen.',
      category: 'Textiles',
      region: 'andhrapradesh',
      technique: 'Kalamkari'
    },
    {
      id: 'ap002',
      name: 'Kondapalli Wooden Bullock Cart',
      price: 2200,
      image: 'https://m.media-amazon.com/images/I/71T41D0VqbL._AC_UF894,1000_QL80_.jpg',
      artisan: 'Ramana Toymakers',
      description: 'Traditional wooden toy from Kondapalli village depicting a farmer with bullock cart. Made from softwood and painted with vegetable dyes.',
      category: 'Pottery',
      region: 'andhrapradesh',
      technique: 'Kondapalli Toymaking'
    },
    {
      id: 'ap003',
      name: 'Etikoppaka Lacquer Bowl Set',
      price: 1800,
      image: 'https://asiainch.org/wp-content/uploads/2001/06/IMG_20191114_145145.jpg',
      artisan: 'Kumar Vishwakarma',
      description: 'Set of 3 wooden lacquerware bowls from Etikoppaka village. Hand-turned on lathe and colored using natural vegetable dyes with lac technique.',
      category: 'Pottery',
      region: 'andhrapradesh',
      technique: 'Etikoppaka Lacquerware'
    },
    {
      id: 'ap004',
      name: 'Pochampally Ikat Dress Material',
      price: 4200,
      image: 'https://itokri.com/cdn/shop/files/3T1A2586.jpg?v=1742388899&width=480',
      artisan: 'Pochampally Handloom Park',
      description: 'Handwoven Pochampally Ikat cotton dress material with geometric patterns. The unique resist-dyeing technique creates distinctive patterns.',
      category: 'Textiles',
      region: 'andhrapradesh',
      technique: 'Pochampally Ikat'
    }
  ],
  northeast: [
    {
      id: 'ne001',
      name: 'Bamboo Multipurpose Basket',
      price: 1400,
      image: 'https://www.habereindia.com/cdn/shop/files/IMG_6268.jpg?v=1740650227',
      artisan: 'Assam Crafts Collective',
      description: 'Hand-woven bamboo multipurpose basket from Assam. Durable and sustainable, perfect for storage or decoration.',
      category: 'Bags',
      region: 'northeast',
      technique: 'Bamboo Weaving'
    },
    {
      id: 'ne002',
      name: 'Naga Tribal Shawl',
      price: 5800,
      image: 'https://i.etsystatic.com/31914699/r/il/9761fa/6766163793/il_fullxfull.6766163793_a5mi.jpg',
      artisan: 'Naga Women Weavers Association',
      description: 'Traditional hand-woven Naga shawl with tribal motifs and designs. Each pattern represents stories and status in the community.',
      category: 'Textiles',
      region: 'northeast',
      technique: 'Tribal Weaving'
    },
    {
      id: 'ne003',
      name: 'Cane Table and Chair Set',
      price: 12500,
      image: 'https://www.ethicaonline.com/wp-content/uploads/2022/10/WhatsApp-Image-2022-09-11-at-3.04.50-PM-2.jpeg',
      artisan: 'Arunachal Cane Crafts',
      description: 'Handcrafted cane furniture set including a table and two chairs. Made by artisans in Arunachal Pradesh using traditional techniques.',
      category: 'Pottery',
      region: 'northeast',
      technique: 'Cane Craft'
    },
    {
      id: 'ne004',
      name: 'Manipuri Hand-Embroidered Handbag',
      price: 2800,
      image: 'https://m.media-amazon.com/images/I/91pzr5FCsOL._AC_UY1000_.jpg',
      artisan: 'Manipur Women Artisans',
      description: 'Handcrafted handbag with traditional Manipuri embroidery work. Features colorful floral patterns and mirror work.',
      category: 'Bags',
      region: 'northeast',
      technique: 'Manipuri Embroidery'
    }
  ]
};