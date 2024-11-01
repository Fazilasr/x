// script.js
const creatures = [
    {
        name: "Wolf",
        image: "./images/wolf.jpeg",
        description: "The gray wolf is known for its haunting howl and plays a crucial role in maintaining ecosystem balance.",
        soundUrl: "sounds/wolf.mp3",
        diet: "Carnivore",
        lifespan: "6-8 years in the wild",
        habitat: "Forests, mountains, tundra, grasslands"
    },
    {
        name: "Whale",
        image: "./images/whale.jpeg",
        description: "Whales are known for their complex songs that can travel for miles through the ocean.",
        soundUrl: "sounds/whale.mp3",
        diet: "Carnivore (fish, squid, krill)",
        lifespan: "30-90 years depending on species",
        habitat: "Oceans"
    },
    {
        name: "Sparrow",
        image: "./images/sparrow.jpeg",
        description: "These small birds are known for their cheerful chirping and are common in urban areas.",
        soundUrl: "sounds/sparrow.mp3",
        diet: "Omnivore",
        lifespan: "3-5 years",
        habitat: "Urban areas, forests, fields"
    },
    {
        name: "Owl",
        image: "./images/owl.jpeg",
        description: "Nocturnal birds known for their distinctive hooting and exceptional night vision.",
        soundUrl: "sounds/owl.mp3",
        diet: "Carnivore (small mammals, birds, insects)",
        lifespan: "10-15 years in the wild",
        habitat: "Forests, deserts, grasslands"
    },
    {
        name: "Killer Whale",
        image: "./images/killer whale.jpeg",
        description: "Also known as Orcas, they use echolocation and have complex vocal communications.",
        soundUrl: "sounds/killer whale.mp3",
        diet: "Carnivore (fish, seals, other marine mammals)",
        lifespan: "50-80 years",
        habitat: "Oceans, coastal waters"
    },
    {
        name: "Fox",
        image: "./images/fox.jpeg",
        description: "Known for their distinctive calls and vocalizations, especially during mating season.",
        soundUrl: "sounds/fox.mp3",
        diet: "Omnivore",
        lifespan: "3-4 years in the wild",
        habitat: "Forests, grasslands, deserts"
    },
    {
        name: "Eagle",
        image: "./images/eagle.jpeg",
        description: "These majestic birds are known for their sharp calls and incredible hunting abilities.",
        soundUrl: "sounds/eagle.mp3",
        diet: "Carnivore (fish, small mammals)",
        lifespan: "20-30 years",
        habitat: "Mountains, forests, near water bodies"
    },
    {
        name: "Crow",
        image: "./images/crow.jpeg",
        description: "Highly intelligent birds with a complex system of caws and calls.",
        soundUrl: "sounds/crow.mp3",
        diet: "Omnivore",
        lifespan: "7-14 years",
        habitat: "Forests, urban areas, grasslands"
    },
    {
        name: "Cricket",
        image: "./images/cricket.jpeg",
        description: "Creates its chirping sound by rubbing its wings together, mostly active at night.",
        soundUrl: "sounds/cricket.mp3",
        diet: "Herbivore",
        lifespan: "3-12 months",
        habitat: "Grasslands, forests, gardens"
    },
    {
        name: "Cicada",
        image: "./images/cicada.jpeg",
        description: "Known for their loud buzzing sounds produced by special organs called tymbals.",
        soundUrl: "sounds/cicada.mp3",
        diet: "Herbivore (sap from trees)",
        lifespan: "2-5 years, depending on species",
        habitat: "Forests, woodlands, grasslands"
    },
    {
        name: "Bee",
        image: "./images/bee.jpeg",
        description: "Produces buzzing sounds by beating their wings at high frequencies.",
        soundUrl: "sounds/bee.mp3",
        diet: "Herbivore (nectar, pollen)",
        lifespan: "Worker: 6 weeks, Queen: up to 5 years",
        habitat: "Gardens, forests, meadows"
    },
    {
        name: "Beetle",
        image: "./images/beetle.jpeg",
        description: "Beetles are a type of insect known for their hard exoskeletons and diverse range of species.",
        soundUrl: "sounds/beetle.mp3",
        diet: "Varies by species (some are herbivores, others carnivores)",
        lifespan: "1-2 years",
        habitat: "Forests, gardens, grasslands"
    },
    {
        name: "Panda",
        image: "./images/panda.jpeg",
        description: "Pandas are large black-and-white bears native to the mountain forests of central China.",
        soundUrl: "sounds/panda.mp3",
        diet: "Herbivore (mainly bamboo)",
        lifespan: "15-20 years in the wild",
        habitat: "Mountain forests"
    },
    {
        name: "Peacock",
        image: "./images/peacock.jpeg",
        description: "Peacocks are known for their elaborate, colorful tail feathers and distinct calls.",
        soundUrl: "sounds/peacock.mp3",
        diet: "Omnivore",
        lifespan: "15-20 years",
        habitat: "Forests, grasslands"
    },
    {
        name: "Elk",
        image: "./images/elk.jpeg",
        description: "Elk are large deer species known for their impressive antlers and bugling calls.",
        soundUrl: "sounds/elk.mp3",
        diet: "Herbivore (grasses, plants, leaves)",
        lifespan: "10-13 years in the wild",
        habitat: "Forests, grasslands, meadows"
    },
    {
        name: "Coyote",
        image: "./images/coyote.jpeg",
        description: "Coyotes are adaptable predators known for their distinctive howls and yipping sounds.",
        soundUrl: "sounds/coyote.mp3",
        diet: "Omnivore",
        lifespan: "10-14 years in the wild",
        habitat: "Forests, grasslands, deserts, urban areas"
    },
    {
        name: "Bear",
        image: "./images/bear.jpeg",
        description: "Bears are powerful mammals known for their distinctive growls and vocalizations, especially when protecting their territory or cubs.",
        soundUrl: "sounds/bear.mp3",
        diet: "Omnivore",
        lifespan: "20-30 years",
        habitat: "Forests, mountains, tundra"
    },
    {
        name: "Grasshopper",
        image: "./images/grass hopper.jpeg",
        description: "Grasshoppers create their characteristic sounds by rubbing their hind legs against their wings, a process called stridulation.",
        soundUrl: "sounds/grasshopper.mp3",
        diet: "Herbivore",
        lifespan: "1 year",
        habitat: "Grasslands, forests, fields"
    },
    {
        name: "Woodpecker",
        image: "./images/wood pecker.jpeg",
        description: "Woodpeckers are known for their rapid drumming on trees to find food and communicate with other woodpeckers.",
        soundUrl: "sounds/woodpecker.mp3",
        diet: "Omnivore (insects, fruits, nuts)",
        lifespan: "4-12 years",
        habitat: "Forests, woodlands"
    },
    {
        name: "Wasp",
        image: "./images/wasp.jpeg",
        description: "Wasps produce a distinctive buzzing sound through the rapid beating of their wings during flight.",
        soundUrl: "sounds/wasp.mp3",
        diet: "Carnivore (insects)",
        lifespan: "12-22 days (workers), up to a year (queens)",
        habitat: "Forests, meadows, gardens"
    },
    {
        name: "Shark",
        image: "./images/shark.jpeg",
        description: "While sharks are generally silent, some species can produce low-frequency sounds through their movements in water.",
        soundUrl: "sounds/shark.mp3",
        diet: "Carnivore",
        lifespan: "20-30 years, depending on species",
        habitat: "Oceans"
    },
    {
        name: "Kingfisher",
        image: "./images/king fisher.jpeg",
        description: "Kingfishers are known for their sharp, high-pitched calls and can often be heard near water bodies where they hunt.",
        soundUrl: "sounds/kingfisher.mp3",
        diet: "Carnivore (fish, insects)",
        lifespan: "6-10 years",
        habitat: "Rivers, lakes, coasts"
    },
    {
        name: "Robin",
        image: "./images/robin.jpeg",
        description: "Known for their cheerful morning songs and distinctive red breast feathers.",
        soundUrl: "sounds/robin.m4a",
        diet: "Omnivore (insects, fruits, seeds)",
        lifespan: "2 years",
        habitat: "Gardens, woodlands"
    },
    {
        name: "Blue Jay",
        image: "./images/blue jay.jpeg",
        description: "Blue Jays are known for their intelligent, loud, and sometimes harsh calls.",
        soundUrl: "sounds/blue-jay.m4a",
        diet: "Omnivore",
        lifespan: "7 years in the wild",
        habitat: "Forests, urban areas"
    },
    {
        name: "Spider",
        image: "./images/spider.jpeg",
        description: "While most spiders are silent, some species can create sounds through stridulation.",
        soundUrl: "sounds/spider.m4a",
        diet: "Carnivore",
        lifespan: "1-2 years",
        habitat: "Forests, grasslands, urban areas"
    },
    {
        name: "Scorpion",
        image: "./images/scorpion.jpeg",
        description: "Scorpions can produce subtle sounds by rubbing their pedipalps against their bodies.",
        soundUrl: "sounds/scorpion.m4a",
        diet: "Carnivore (insects, small animals)",
        lifespan: "2-6 years",
        habitat: "Deserts, forests"
    },
    {
        name: "Manatee",
        image: "./images/manatee.jpeg",
        description: "These gentle marine mammals communicate using a variety of chirps, whistles, and squeaks.",
        soundUrl: "sounds/manatee.m4a",
        diet: "Herbivore (sea grass, algae)",
        lifespan: "50-60 years",
        habitat: "Coastal waters, rivers"
    },
    {
        name: "Dolphin",
        image: "./images/dolphin.jpeg",
        description: "Dolphins communicate through clicks, whistles, and other vocalizations.",
        soundUrl: "sounds/dolphin.m4a",
        diet: "Carnivore (fish, squid)",
        lifespan: "20-50 years",
        habitat: "Oceans, rivers"
    },
    {
        name: "Cheetah",
        image: "./images/cheetah.jpeg",
        description: "Cheetahs communicate through chirps, purrs, and distinctive high-pitched calls.",
        soundUrl: "sounds/cheetah.m4a",
        diet: "Carnivore (small to medium-sized ungulates)",
        lifespan: "10-12 years in the wild",
        habitat: "Savannahs, grasslands"
    },
    {
        name: "Rabbit",
        image: "./images/rabbit.jpeg",
        description: "Rabbits communicate through soft grunts, purrs, and warning thumps.",
        soundUrl: "sounds/rabbit.m4a",
        diet: "Herbivore",
        lifespan: "1-2 years in the wild",
        habitat: "Meadows, forests"
    },
    {
        name: "Moose",
        image: "./images/moose.jpeg",
        description: "Male moose are known for their loud bellowing calls during mating season.",
        soundUrl: "sounds/moose.m4a",
        diet: "Herbivore",
        lifespan: "15-20 years",
        habitat: "Forests, wetlands"
    },
    {
        name: "Lion",
        image: "./images/lion.jpeg",
        description: "Lions are famous for their powerful roars that can be heard for miles.",
        soundUrl: "sounds/lion.m4a",
        diet: "Carnivore",
        lifespan: "10-14 years in the wild",
        habitat: "Savannahs, grasslands"
    },
    {
        name: "Squirrel",
        image: "./images/squirrel.jpeg",
        description: "Squirrels communicate through various chirps and barking sounds.",
        soundUrl: "sounds/squirrel.m4a",
        diet: "Omnivore",
        lifespan: "6-12 years",
        habitat: "Forests, urban areas"
    },
    {
        name: "Otter",
        image: "./images/otter.jpeg",
        description: "Otters communicate through whistles, chirps, and other vocalizations.",
        soundUrl: "sounds/otter.m4a",
        diet: "Carnivore (fish, crustaceans)",
        lifespan: "10-15 years",
        habitat: "Rivers, lakes, oceans"
    },
    {
        name: "Seagull",
        image: "./images/seagull.jpeg",
        description: "Seagulls are known for their distinctive squawking and screeching calls.",
        soundUrl: "sounds/seagull.m4a",
        diet: "Omnivore",
        lifespan: "10-15 years",
        habitat: "Coastal areas, lakes"
    },
    {
        name: "Yak",
        image: "./images/yak.jpeg",
        description: "Yaks communicate through grunts and unique vocalizations.",
        soundUrl: "sounds/yak.m4a",
        diet: "Herbivore",
        lifespan: "15-20 years",
        habitat: "Mountain ranges"
    },
    {
        name: "Penguin",
        image: "./images/penguin.jpeg",
        description: "Penguins communicate through various calls to find mates and offspring.",
        soundUrl: "sounds/penguin.m4a",
        diet: "Carnivore (fish, krill)",
        lifespan: "15-20 years",
        habitat: "Antarctica, coastal regions"
    },
    {
        name: "Heron",
        image: "./images/heron.jpeg",
        description: "Herons make croaking and squawking sounds, especially when alarmed.",
        soundUrl: "sounds/heron.m4a",
        diet: "Carnivore (fish, small animals)",
        lifespan: "15 years",
        habitat: "Wetlands, lakes, rivers"
    },
    {
        name: "Hedgehog",
        image: "./images/hedgehog.jpeg",
        description: "Hedgehogs make various snuffling and grunting sounds.",
        soundUrl: "sounds/hedgehog.m4a",
        diet: "Omnivore",
        lifespan: "3-7 years",
        habitat: "Forests, grasslands, deserts"
    },
    {
        name: "Leopard",
        image: "./images/leopard.jpeg",
        description: "Leopards communicate through roars, growls, and rasping calls.",
        soundUrl: "sounds/leopard.m4a",
        diet: "Carnivore",
        lifespan: "12-17 years in the wild",
        habitat: "Forests, grasslands, mountains"
    },
    {
        name: "Pelican",
        image: "./images/pelican.jpeg",
        description: "Pelicans make low grunting sounds, especially during breeding season.",
        soundUrl: "sounds/pelican.m4a",
        diet: "Carnivore (fish)",
        lifespan: "15-25 years",
        habitat: "Coastal areas, rivers, lakes"
    },
    {
        name: "Canary",
        image: "./images/canary.jpeg",
        description: "Canaries are known for their melodious singing abilities.",
        soundUrl: "sounds/canary.m4a",
        diet: "Omnivore (seeds, small insects)",
        lifespan: "10-15 years",
        habitat: "Forests, grasslands"
    },
    {
        name: "Bat",
        image: "./images/bat.jpeg",
        description: "Bats use echolocation and make high-frequency chirping sounds.",
        soundUrl: "sounds/bat.m4a",
        diet: "Carnivore (insects), some species eat fruit",
        lifespan: "5-20 years",
        habitat: "Caves, forests"
    },
    {
        name: "Alpaca",
        image: "./images/alpaca.jpeg",
        description: "Alpacas communicate through humming and other gentle vocalizations.",
        soundUrl: "sounds/alpaca.m4a",
        diet: "Herbivore",
        lifespan: "15-20 years",
        habitat: "Mountains, grasslands"
    },
    {
        name: "Turkey",
        image: "./images/turkey.jpeg",
        description: "Turkeys are known for their distinctive gobbling sounds.",
        soundUrl: "sounds/turkey.m4a",
        diet: "Omnivore",
        lifespan: "3-5 years in the wild",
        habitat: "Forests, grasslands"
    },
    {
        name: "Swan",
        image: "./images/swan.jpeg",
        description: "Swans make various hissing and trumpeting sounds.",
        soundUrl: "sounds/swan.m4a",
        diet: "Herbivore",
        lifespan: "10-20 years",
        habitat: "Lakes, rivers"
    },
    {
        name: "Camel",
        image: "./images/camel.jpeg",
        description: "Camels make deep grunting and bellowing sounds.",
        soundUrl: "sounds/camel.m4a",
        diet: "Herbivore",
        lifespan: "40-50 years",
        habitat: "Deserts"
    },
    {
        name: "Butterfly",
        image: "./images/butterfly.jpeg",
        description: "While most butterflies are silent, some species can produce subtle sounds with their wings.",
        soundUrl: "sounds/butterfly.m4a",
        diet: "Herbivore (nectar)",
        lifespan: "2-4 weeks",
        habitat: "Gardens, forests, meadows"
    }
];

          


       
          

// Current audio player
let currentAudio = null;

// DOM Elements
const gallery = document.getElementById('gallery');
const infoPanel = document.getElementById('infoPanel');
const overlay = document.getElementById('overlay');
const creatureName = document.getElementById('creatureName');
const creatureDesc = document.getElementById('creatureDesc');
const creatureImg = document.getElementById('creatureImg');
const playBtn = document.getElementById('playBtn');

// Create creature cards
creatures.forEach((creature, index) => {
    const card = document.createElement('div');
    card.className = 'creature-card';
    card.style.setProperty('--i', index);
    card.innerHTML = `
        <div class="creature-image">
            <img src="${creature.image}" alt="${creature.name}">
        </div>
        <div class="creature-name">${creature.name}</div>
    `;
    card.addEventListener('click', () => showCreatureInfo(creature));
    gallery.appendChild(card);
});

// Show creature info function
// Enhanced script.js

function showCreatureInfo(creature) {
    // Clear any previous content added
    document.querySelectorAll('.creature-habitat, .creature-diet, .creature-lifespan').forEach(el => el.remove());

    creatureName.textContent = creature.name;
    creatureDesc.textContent = creature.description;
    creatureImg.src = creature.image;
    creatureImg.alt = creature.name;

    // Add extra details for enhanced view
    const modalExtraDetails = `
        <div class="creature-habitat">🌍 Habitat: ${creature.habitat || "Various"}</div>
        <div class="creature-diet">🍴 Diet: ${creature.diet || "Omnivore"}</div>
        <div class="creature-lifespan">⌛ Lifespan: ${creature.lifespan || "Unknown"}</div>
    `;
    creatureDesc.insertAdjacentHTML("afterend", modalExtraDetails);

    infoPanel.style.display = 'block';
    overlay.style.display = 'block';

    // Trigger active states with slight delay
    setTimeout(() => {
        infoPanel.classList.add('active');
        overlay.classList.add('active');
    }, 10);

    // Reset play button
    playBtn.textContent = 'Play Sound';
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }

    playBtn.onclick = () => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio = null;
            playBtn.textContent = 'Play Sound';
        } else {
            currentAudio = new Audio(creature.soundUrl);
            currentAudio.play().catch(e => {
                console.log('Audio play failed:', e);
                alert('Sound file not found. This is a demo version.');
            });
            playBtn.textContent = 'Pause Sound';

            currentAudio.onended = () => {
                playBtn.textContent = 'Play Sound';
                currentAudio = null;
            };
        }
    };
}



// Close panel function
function closePanel() {
    infoPanel.classList.remove('active');
    overlay.classList.remove('active');
    
    // Delay actual removal from DOM
    setTimeout(() => {
        infoPanel.style.display = 'none';
        overlay.style.display = 'none';
        if (currentAudio) {
            currentAudio.pause();
            currentAudio = null;
        }
    }, 500);
}

// Add close button click handlers
const closeBtn = document.querySelector('.close-btn');
if (closeBtn) {
    closeBtn.addEventListener('click', closePanel);
}
overlay.addEventListener('click', closePanel);

// Close panel with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePanel();
});

// Enhanced Interactions
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Enhanced gallery card loading
    const cards = document.querySelectorAll('.creature-card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });

    
  
    // Enhanced modal transitions
    function showCreatureInfo(creature) {
      const modal = document.getElementById('infoPanel');
      const overlay = document.getElementById('overlay');
      const image = document.getElementById('creatureImg');
  
      // Preload image
      const preloadImage = new Image();
      preloadImage.src = creature.image;
      preloadImage.onload = () => {
        image.src = creature.image;
        modal.classList.add('active');
        overlay.classList.add('active');
        
        // Subtle image animation
        setTimeout(() => {
          image.style.transform = 'scale(1)';
        }, 300);
      };
    }

    const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.style.transition = 'background-color 0.6s var(--transition), color 0.6s var(--transition)';
  document.body.classList.toggle('dark');
});
  
    // Enhanced theme toggle with localStorage
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Set initial theme based on system preference
    if (localStorage.getItem('theme') === null) {
      document.body.classList.toggle('dark', prefersDark.matches);
    }
  
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
    });
  
    // Update time with animation
    function updateTime() {
      const timeElement = document.querySelector('.current-time');
      const now = new Date();
      const time = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      
      if (timeElement.textContent !== time) {
        timeElement.style.opacity = '0';
        setTimeout(() => {
          timeElement.textContent = time;
          timeElement.style.opacity = '1';
        }, 200);
      }
    }

    // JavaScript to apply typing effect
function openAboutModal() {
    const aboutModal = document.getElementById("aboutModal");
    const aboutText = document.querySelector(".about-text");

    // Show modal
    aboutModal.style.display = "flex";
    
    // Reset the typing effect by removing and re-adding the class
    aboutText.classList.remove("typing-effect");
    void aboutText.offsetWidth; // Trigger reflow to restart animation
    aboutText.classList.add("typing-effect");
}

// Close modal function remains the same
function closeAboutModal() {
    document.getElementById("aboutModal").style.display = "none";
}

    
    setInterval(updateTime, 1000);
    updateTime();
  
    // Enhanced modal close
    function closePanel() {
      const modal = document.getElementById('infoPanel');
      const overlay = document.getElementById('overlay');
      const image = document.getElementById('creatureImg');
      
      image.style.transform = 'scale(1.05)';
      modal.classList.remove('active');
      overlay.classList.remove('active');
      
      if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
      }
    }


    // Add smooth image loading
function loadImage(img) {
    img.style.opacity = '0';
    img.onload = () => {
      img.style.opacity = '1';
    };
  }
  
  
    // Enhance audio controls
    let currentAudio = null;
    const volumeSlider = document.querySelector('.volume-slider');
    const volumeProgress = document.querySelector('.volume-progress');
    
    volumeSlider.addEventListener('click', (e) => {
      const rect = volumeSlider.getBoundingClientRect();
      const volume = (e.clientX - rect.left) / rect.width;
      volumeProgress.style.width = `${volume * 100}%`;
      
      if (currentAudio) {
        currentAudio.volume = volume;
      }
    });
  });

  // JavaScript to reveal footer on scroll to bottom
document.addEventListener("scroll", () => {
    const footer = document.querySelector(".unique-copyright");
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 10) { // Near the bottom
        footer.classList.add("visible");
    } else {
        footer.classList.remove("visible");
    }
});

  

  