// eslint-disable-next-line no-unused-vars
const plants = [
  {
    id: 0,
    name: "Hoya",
    botanicalName: "Hoya carnosa",
    img: "https://unsplash.com/photos/M0cN5m0fekk",
    waterFrequency: 7,
    feedFrequency: 30,
    light: "Bright, indirect sunlight",
    care: "As a tropical plant, hoyas thrive in warm and moist, humid climates. The plants produce woody stems with waxy leaves, which remain evergreen. You can train a hoya plant as a vine, or allow it to trail over the side of the container. Either way, expect the full length or height of the plant to be 2-4 feet. Hoyas thrive best when they get bright, non-direct sunlight. Hoyas should be watered weekly, and left to let dry completely between waterings.",
  },
  {
    id: 1,
    name: "Coffee",
    botanicalName: "Coffea arabica",
    img: "https://unsplash.com/photos/ICAYc8e2pls",
    waterFrequency: 7,
    feedFrequency: 14,
    light: "Bright, indirect sunlight",
    care: "The best environment in which to grow coffee plants is to mimic its natural conditions found on a tropical, mid-elevation mountainside: plenty of water with good drainage, high humidity, relatively cool temperatures, and rich, slightly acidic soil.Indoors, coffee plants do best placed near a window but not in direct sunlight. Make sure to keep the plant away from drafts, such as those produced from air conditioning. Be prepared to water at least weekly to keep the soil moist.",
  },
  {
    id: 2,
    name: "Prayer Plant",
    botanicalName: "Maranta leuconeura",
    img: "https://unsplash.com/photos/J-nfuMjUEH0",
    waterFrequency: 7,
    feedFrequency: 14,
    light: "Bright, indirect sunlight",
    care: "Prayer plants are low-growing, spreading plants that thrive best when provided with greenhouse-like conditions, including warm, moist, gentle airflow, and plenty of fertilizer. Plants that are kept too cool or too dry are likely to lose their leaves or suffer from fungal infections that can cause the plant to die from root rot or collapse. Likewise, plants that are exposed to too much sun can become washed out and develop brown blotches on their leaves. In the winter, when the plants go into dormancy (and sometimes die back completely), provide them with bright light to maintain growth.",
  },
  {
    id: 3,
    name: "Japanese Bird's Nest Fern",
    botanicalName: "Asplenium nidus 'Osaka'",
    img: "https://unsplash.com/photos/WOrC3kJdFKQ",
    waterFrequency: 3,
    feedFrequency: 30,
    light: "Partial, shade",
    care: "The key to a healthy bird's nest fern is providing it with ample warmth, humidity, and moisture. The ferns prefer a consistent amount of soil moisture, but they don’t do well sitting in soggy soil. Water whenever the top inch of soil is dry. Avoid watering directly into the center of the plant, as this can encourage mold growth and rot in the dense nest. Aim water at the soil to avoid wetting the fern's fronds.",
  },
  {
    id: 4,
    name: "String of Pearls",
    botanicalName: "Curio rowleyanus",
    img: "https://unsplash.com/photos/N7oHWhK9UDM",
    waterFrequency: 7,
    feedFrequency: 14,
    light: "Full, partial",
    care: "The string of pearls plant is not particular about its conditions. Given enough light and fertilizer, it will grow quite vigorously in a season. A single plant will survive for about five years if properly cared for, but if you propagate new plants from stem cuttings, you can effectively keep it alive indefinitely.Keep the plant's soil lightly moist during the growing season in the spring and summer, then reduce water during the winter months. If you notice the succulent's spherical leaves flattening, it's a good indicator that the plant needs more water.",
  },
  {
    id: 5,
    name: "Pothos",
    botanicalName: "Epipremnum aureum",
    img: "https://unsplash.com/photos/IZz3sboy1g8",
    waterFrequency: 7,
    feedFrequency: 14,
    light: "Full sun, partial shade",
    care: "While pothos likes bright, indirect light, it can also thrive in low-light areas or those with only fluorescent lighting, making it an excellent option for offices and dorm rooms. Pothos likes sun or shade, but you need to watch if it's in too much of either one. When grown indoors, pothos prefers bright but indirect light. A pothos plant likes to have its soil dry out completely between waterings. If left in continually damp soil, the plant's roots will rot.",
  },
  {
    id: 6,
    name: "Jade",
    botanicalName: "Crassula ovata",
    img: "https://unsplash.com/photos/nKyN0Lfy-1w",
    waterFrequency: 7,
    feedFrequency: 14,
    light: "Full sun, partial shade",
    care: "Jade plant care is generally undemanding, regardless of whether you're growing your jade plant outdoors or indoors. However, the plants are susceptible to too much moisture and a selection of diseases. As with all succulents, overwatering is sure to be fatal, so err on the side of keeping the soil too dry rather than too wet. Jade plants also need a lot of sun to develop to their fullest potential. Aim for at least six hours of bright, indirect sunlight per day. ",
  },
  {
    id: 7,
    name: "Snake Plant",
    botanicalName: "Dracaena trifasciata",
    img: "https://unsplash.com/photos/pWXrJ6Xj52M",
    waterFrequency: 14,
    feedFrequency: 60,
    light: "Shade, partial sun",
    care: "Snake plant is an ideal choice for beginner gardeners because it is difficult to kill. It's great in a container and grows well on the floor or on tabletop displays. Snake plant thrives in warm weather and struggles in cold conditions. This plant is drought-resistant but is susceptible to overwatering which lead to root rot. Only water the plant if the soil feels dry. These plants can go two months between waterings in the winter months. In warmer months, water no more than every two weeks.",
  },
  {
    id: 8,
    name: "Christmas Cactus",
    botanicalName: "Schlumbergera x buckleyi",
    img: "https://unsplash.com/photos/vEJmNFiaap0",
    waterFrequency: 4,
    feedFrequency: 30,
    light: "Partial sun",
    care: "The holiday cactus is a tropical rainforest native and needs regular water to remain healthy. The flattened leaves are stemmed segments that hang and drape from containers and hanging baskets. Flowers form at the ends of the stems—so the more stems your plant has, the more flowers it will have. Though it is a cactus, its tropical origins make this plant crave more water than most. Water the plant thoroughly, allowing excess water to run out through the drainage holes. Let the soil dry almost completely between waterings. Don't feed once you notice flower buds.",
  },
  {
    id: 9,
    name: "Aloe Vera",
    botanicalName: "Schlumbergera x buckleyi",
    img: "https://unsplash.com/photos/nU9U66FMutc",
    waterFrequency: 4,
    feedFrequency: 30,
    light: "Partial sun",
    care: "Aloe vera needs sandy soil or a cactus potting medium to thrive in containers. Aloe requires little watering and virtually no fertilizing, making it an easy-care houseplant for beginner gardeners. Aloe Vera needs bright, natural light in order to thrive. Direct sun can burn its tender skin, yet lack of light will cause the plant to grow leggy and weaken its leaves, causing them to crease. Aloe prefers to be watered regularly, as long as the soil dries out completely in between waterings.",
  },
  {
    id: 10,
    name: "Maidenhair Fern",
    botanicalName: "Adiantum raddianum",
    img: "https://unsplash.com/photos/qPEI1x-ETVs",
    waterFrequency: 2,
    feedFrequency: null,
    light: "Partial sun, shade",
    care: "Maidenhair ferns can be difficult to keep healthy indoors, as they're quite particular about their growing conditions. The most important environmental factor when it comes to caring for this fern with success is humidity—it thrives on moisture and needs a lot to survive, which can often be difficult to achieve in indoor environments. To successfully grow the fern indoors, try and mimic the forest conditions by finding a spot in your home that receives indirect sunlight only. Moisture is vital--but drainage is important to avoid root rot",
  },
  {
    id: 11,
    name: "Shamrock",
    botanicalName: "Oxalis triangularis",
    img: "https://unsplash.com/photos/QnAfP9cNrqw",
    waterFrequency: 7,
    feedFrequency: 30,
    light: "Full, partial sun",
    care: "The key to a healthy plant is providing it with a sunny spot and watering it whenever the soil starts to dry out. Also, plan to feed your shamrock throughout its growing season to encourage healthy growth. It’s important to note that purple shamrock plants actively grow and flower during the fall to spring and go dormant in the summer. This might not happen every year, especially for houseplants, but it’s a possibility that requires some different care. When they are dormant, the foliage will degrade. If you see this occur, reduce watering and stop feeding your plant. As soon as you see new foliage begin to grow, resume your plant’s normal care routine.",
  },
  {
    id: 12,
    name: "Montsera",
    botanicalName: "Monstera deliciosa",
    img: "https://unsplash.com/photos/TpALGJoHFP8",
    waterFrequency: 7,
    feedFrequency: 14,
    light: "Bright indirect sunlight, partial shade",
    care: "This evergreen prefers bright, indirect sunlight in temperatures that remain consistently between 65 and 75 degrees Fahrenheit. Too much direct light in warmer months may burn the foliage. Still, set indoor plants outside at least once a year in direct sunlight to encourage lush growth. Water until excess drains through drainage holes. Do not put the excess water back into the plant's container because the plant has taken all the water it needs. The soil will need to dry out slightly in between waterings. Water only occasionally in fall and winter. ",
  },
  {
    id: 13,
    name: "Chinese Money Plant",
    botanicalName: "Pilea peperomioides ",
    img: "https://unsplash.com/photos/JbPeqCpacc8",
    waterFrequency: 7,
    feedFrequency: 30,
    light: "Bright indirect sunlight",
    care: "Provide your Pilea peperomioides with bright light, semi-regular watering, and some light feeding in the spring and summer months and it will thrive. The Pilea peperomioides thrives in medium to bright indirect light. Rotate your plant regularly to keep it looking symmetrical. Avoid locations that receive harsh, direct light as it will burn the delicate leaves. While this plant can adapt to lower light conditions; it will become leggy, grow fewer offshoots, and the coin-shaped leaves may become smaller. Overall, this plant is healthiest and most attractive when grown in bright light conditions.",
  },
];
