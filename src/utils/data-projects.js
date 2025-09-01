export const PROJECTS = [
  {
    id: 1,
    name: 'RailsConf Lightning Talk (2025)',
    description: 'Presented a lightning talk on Ruby\'s Data class, highlighting its syntax, intent to provide immutability, and how it communicates intent in code.',
    image: '/assets/images/projects/portfolioPage/dataTalk.png',
    imageDesktop: '/assets/images/projects/portfolioPage/dataTalk.png',
    projectInfo: {
      languages: 'Ruby',
      concepts: 'Encapsulation / Data Class / Design Communication',
      link: 'https://git.sr.ht/~kells/railsconf2025-lightning-talk/tree/main/item/WELCOME.md',
      background: 'As a 2025 RailsConf Scholar, I delivered a 5-minute lightning talk on Ruby’s newly introduced Data class. Beyond covering syntax, I framed the class in terms of design choices—immutability, value objects, and communication of intent—contrasting it with Struct. Preparing for the talk required distilling research into accessible examples and designing visuals that reinforced the message.',
      hero: [
        '/assets/images/projects/portfolioPage/dataTalk.png'
      ],
      previewOne: [
        '/assets/images/projects/projectPages/dataTalk/dataVsStructMethods.png'
      ],
      previewTwo: [
        '/assets/images/projects/projectPages/dataTalk/dataWith.png'
      ]
    }
  },
  {
    id: 2,
    name: 'Temperature Converter',
    description: 'A Ruby CLI app that converts temperatures between seven or more units—including Celsius, Fahrenheit, Kelvin, Rankine, Rømer, Réaumur, and Newton—parsing flexible user input with doctested validation and providing clear output reports.',
    image: '/assets/images/projects/portfolioPage/temperatureConverter.png',
    imageDesktop: '/assets/images/projects/portfolioPage/temperatureConverter.png',
    projectInfo: {
      languages: 'Ruby',
      concepts: 'Command-line applications, Object-oriented design, Data structures, Regular expressions.',
      link: 'https://git.sr.ht/~kells/temperature-converter-library',
      background: 'A Ruby command-line app that converts temperatures between multiple scales with flexible input parsing, accurate unit conversions, and clear output. The design uses focused classes, modules, and immutable data structures to handle edge cases like impossible temperatures. Tested with doctests to ensure reliability and easy future extension.',
      hero: [
        '/assets/images/projects/portfolioPage/temperatureConverter.png'
      ],
      previewOne: [
        '/assets/images/projects/projectPages/temperatureConverter/binConvert.png'
      ],
      previewTwo: [
        '/assets/images/projects/projectPages/temperatureConverter/unit.png'
      ]
    }

  },
  {
    id: 3,
    name: 'Mastermind',
    description: 'A command-line version of the classic Mastermind game. Players can break or create a secret code, with multiple difficulty levels and variable peg/color combinations. Built with Ruby and tested using RSpec for reliability and replayability.',
    image: '/assets/images/projects/portfolioPage/mastermind.png',
    imageDesktop: '/assets/images/projects/portfolioPage/mastermindWelcome.png',
    projectInfo: {
      languages: 'Ruby / RSpec / CLI Application',
      concepts: 'Back-End Development / Command-Line Applications / TDD / Object-Oriented Design / Algorithmic Logic',
      link: 'https://github.com/kellyky/mastermind',
      background: 'I built a Ruby command-line Mastermind with multiple difficulty levels and replayable gameplay. Easier modes and the Rainbow gem make it beginner-friendly. The game handles abbreviations, typos, and dynamic color banks. Modular classes manage color selection, scoring, and display, sharpening my skills in object-oriented design and problem-solving.',
      hero: [
        '/assets/images/projects/projectPages/mastermind/mastermindPlay.png'
      ],
      previewOne: [
        '/assets/images/projects/portfolioPage/mastermindWelcome.png'
      ],
      previewTwo: [
        '/assets/images/projects/projectPages/mastermind/mastermindCodeMaker.png'
      ]
    }
  },
  {
    id: 4,
    name: 'Hangman',
    description: 'A command-line word-guessing game where players try to identify a hidden word from a list of 10,000 words before running out of guesses. Players can start a new game, save their progress, or continue a previously saved game.',
    image: '/assets/images/projects/portfolioPage/hangman.png',
    imageDesktop: '/assets/images/projects/portfolioPage/hangman.png',
    projectInfo: {
      languages: 'Ruby / YAML',
      concepts: 'Back-End Development / StandardIn, StandardOut / Serialization / Interactive CLI ',
      link: 'https://github.com/kellyky/hangman',
      background: 'I built a Ruby command-line Hangman with 10,000 words and replayable gameplay. The game tracks guesses, reveals letters dynamically, and saves progress using YAML, letting players pick up where they left off. I designed the CLI to be clear and engaging, using Rainbow for colored text and a structured interface that guides the player through each turn. This project strengthened my skills in handling input/output, and crafting interactive command-line applications.',
      hero: [
        '/assets/images/projects/portfolioPage/hangman.png'
      ],
      previewOne: [
        '/assets/images/projects/projectPages/hangman/hangmanSaved.png'
      ],
      previewTwo: [
        '/assets/images/projects/projectPages/hangman/hangmanSavedTwo.png'
      ]
    }
  }
]
