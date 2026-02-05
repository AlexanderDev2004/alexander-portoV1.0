export interface TechStack {
  name: string;
  icon: string; // iconify icon name
  docLink: string; // link to documentation
}

export interface ProjectItem {
  id: string; // untuk URL slug
  title: string;
  year: string;
  description: string;
  fullDescription: string;
  image?: string; // image URL untuk detail page
  projectLink: string; // can be empty string
  repoLink: string; // can be empty string
  technologies: TechStack[];
  detailedContent?: string; // HTML atau markdown content untuk detail page
}

export const projects: ProjectItem[] = [
  {
    id: "FloraQuest",
    title: "Flora Quest",
    year: "2022",
    description:
      "Flora Quest is a game that combines exploration, combat, and storytelling. You will fight, upgrade, and survive.",
    fullDescription:
      "Flora Quest is a game that combines exploration, combat, and storytelling. You will fight, upgrade, and survive. The game is built using Unity and C#. It features a unique combat system, dynamic lighting, and a captivating storyline. The game is available on PC platforms. Btw This Project is made in 72 hours for a Game Jam + 2023.",
    image: "https://alexanderar.vercel.app/image/Games/FloraQuest.png",
    projectLink: "https://poligamedev.itch.io/floraquest-the-last-seed",
    repoLink: "",
    detailedContent: `<h2>Project Overview</h2>
<p>Flora Quest is a game that combines exploration, combat, and storytelling. You will fight, upgrade, and survive. The game is built using Unity and C#. It features a unique combat system, dynamic lighting, and a captivating storyline. The game is available on PC platforms. Btw This Project is made in 72 hours for a Game Jam + 2023.</p>

<h3>Key Features</h3>
<ul>
    <li><strong>Exploration:</strong> Navigate through diverse environments filled with hidden secrets and challenges.</li>
    <li><strong>Combat:</strong> Engage in dynamic combat with a diverse arsenal of weapons and enemies.</li>
    <li><strong>Storyline:</strong> Witness a gripping storyline that unfolds as you progress through the game.</li>
    <li><strong>User Interface:</strong> A modern and intuitive user interface that enhances the overall gaming experience.</li>
    <li><strong>Performance:</strong> Optimized for fast loading times and smooth gameplay on various platforms.</li>
    <li><Strong>Desain Game:</Strong> Engaging and challenging game mechanics to keep players engaged.</li>
</ul>

<h3>Technical Implementation</h3>
<p>The game is developed using Unity, leveraging its powerful features for 2D game development. C# is used for scripting game mechanics, AI behavior, and user interactions. The game utilizes Unity's built-in lighting system to create dynamic and immersive environments. and in project my role is Game Desain </p>`,
    technologies: [
      {
        name: "Unity",
        icon: "mdi:unity",
        docLink: "https://unity.com",
      },
      {
        name: "C#",
        icon: "mdi:language-csharp",
        docLink: "https://learn.microsoft.com/en-us/dotnet/csharp/",
      },
      {
        name: "Game Design",
        icon: "mdi:gamepad-variant",
        docLink: "https://en.wikipedia.org/wiki/Game_design",
      },
    ],
  },
  {
    id: "EscapefromAlex",
    title: "Escape from Alex",
    year: "2022",
    description:
      "Escape From Alex is a game horror game where you have to escape from a haunted house. I used Unity and C# to develop this game.",
    fullDescription:
      "Escape From Alex is a horror game where you must escape from a haunted house. I used Unity and C# to develop this game, and it was created as a requirement for my vocational school graduation.",
    image: "https://alexanderar.vercel.app/image/Games/EscapeFromAlex.png",
    projectLink: "https://alex-game-dev-indonesia.itch.io/escape-from-alex",
    repoLink: "",
    detailedContent: `<h2>Project Overview</h2>
<p> Escape From ALex is a game Horror game where you have to escape from a haunted house. I used Unity and C# to develop this game, and it was created as a requirement for my vocational school graduation. with my team.</p>

<h3>Key Features</h3>
<ul>
    <li><strong>Exploration:</strong> Navigate through diverse environments filled with hidden secrets and challenges.</li>
    <li><Strong> Desain Game:</Strong> Engaging and challenging game mechanics to keep players engaged.</li>
    <li><strong>Combat:</strong> Engage in dynamic combat with a diverse arsenal of weapons and enemies.</li>
    <li><strong>Storyline:</strong> Witness a gripping storyline that unfolds as you progress through the game.</li>
    <li><strong>User Interface:</strong> A modern and intuitive user interface that enhances the overall gaming experience.</li>
    <li><strong>Performance:</strong> Optimized for fast loading times and smooth gameplay on various platforms.</li>
</ul>

<h3>Technical Implementation</h3>
<p> The game is developed using Unity, leveraging its powerful features for 2D game development. C# is used for scripting game mechanics, AI behavior, and user interactions. The game utilizes Unity's built-in lighting system to create dynamic and immersive environments. and in project my role is Game Desain and Game Developer </p>`,
    technologies: [
      {
        name: "Unity",
        icon: "mdi:unity",
        docLink: "https://unity.com",
      },
      {
        name: "C#",
        icon: "mdi:language-csharp",
        docLink: "https://learn.microsoft.com/en-us/dotnet/csharp/",
      },
      {
        name: "Game Design",
        icon: "mdi:gamepad-variant",
        docLink: "https://en.wikipedia.org/wiki/Game_design",
      },
    ],
  },

  {
    id: "PersonalWebsiteAlex",
    title: "Portofolio Alex",
    year: "2026",
    description:
      "This is My website Personal Portofolio",
    fullDescription:
      "I using Astro, Tailwindcss, Svelte, Bun for make Website Portofolio",
    image: "/images/PortoAlx.png",
    projectLink: "",
    repoLink: "https://github.com/AlexanderDev2004/alexander-portoV1.0",
    detailedContent: `<h2>Project Overview</h2>
<p> Personal Portofolio Website using Astro, Tailwindcss, Svelte, Bun for make Website Portofolio</p>

<h3>Key Features</h3>
<ul>
    <li><strong>Fast Performance:</strong> Optimized for fast loading times and smooth navigation.</li>
    <li><strong>Responsive Design:</strong> Ensures a seamless experience across all devices, from desktops to mobile phones.</li>
    <li><strong>Modern UI/UX:</strong> A clean and intuitive user interface that enhances user engagement.</li>
    <li><strong>Content Management:</strong> Easy to update and manage content using Astro's content collections.</li>
    <li><Strong> Integration:</Strong> Integrated with various social media platforms and contact forms for better connectivity.</li>
</ul>

<h3>Technical Implementation</h3>
<p> The website is developed using Astro, Svelte, and Tailwind CSS. It utilizes Astro's content collections to manage content, and integrates with various social media platforms and contact forms for better connectivity. The website is optimized for fast loading times and smooth navigation, ensuring a seamless experience across all devices. The website's responsive design ensures a consistent user experience on desktops, tablets, and mobile phones. The website's modern UI/UX features a clean and intuitive interface that enhances user engagement. Overall, this project demonstrates my skills in web development and my ability to create visually appealing and user-friendly websites.</p>`,
    technologies: [
      {
        name: "Astro",
        icon: "simple-icons:astro",
        docLink: "https://astro.build/",
      },
      {
        name: "Svelte",
        icon: "simple-icons:svelte",
        docLink: "https://svelte.dev/",
      },
      {
        name: "Bun",
        icon: "simple-icons:bun",
        docLink: "https://bun.com/",
      },
      {
        name: "Tailwind CSS",
        icon: "mdi:tailwind",
        docLink: "https://tailwindcss.com/",
      },
      
    ],
  }
];
