import { ACCESS_LEVEL, Category, PrismaClient, Technology, TECHNOLOGY } from "@prisma/client";
const prisma = new PrismaClient();

type TechList = {
  group: TECHNOLOGY,
  techs: string[]
}

const technologies: TechList[] = [
  {
    group: TECHNOLOGY.DATABASE,
    techs: ["MySQL", "PostgreSQL", "Prisma"]
  },
  {
    group: TECHNOLOGY.PLATFORM,
    techs: ["Desktop", "Mobile", "Console", "API", "Library"]
  },
  {
    group: TECHNOLOGY.LANGUAGE,
    techs: ["C++", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "PHP", "Python", "GML"]
  },
  {
    group: TECHNOLOGY.TOOL,
    techs: ["VSCode", "IntelliJ", "Eclipse", "Android Studio", "VIM", "Photoshop", "Premiere", "Lightroom", "Chrome"]
  },
  {
    group: TECHNOLOGY.ENVIRONMENT,
    techs: ["Linux", "iOS", "Web", "Windows", "MacOS"]
  },
  {
    group: TECHNOLOGY.DEPLOYMENT,
    techs: ["GitHub", "Docker", "Vercel", "AWS"]
  },
  {
    group: TECHNOLOGY.SERVICE,
    techs: ["Spring", "React", "NextJS", "TailwindCSS"]
  }
]

const tech_icons = {
  "React": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
}

const post_categories: Category[] = [
  { // development parent category
    category_name: "Development",
    parent_cateogry: null,
    slug: "development",
    description: "All development/programming related posts",
    colour: "#145876"
  },
  { // web dev
    category_name: "Web Dev",
    parent_cateogry: "Development",
    slug: "webdev",
    description: "Posts related to my web development journey and experiences",
    colour: "#147516",
  }, 
  { // game development
    category_name: "Game Dev",
    parent_cateogry: "Development",
    slug: "gamedev",
    description: "Posts related to my game development journey and experiences",
    colour: "#157781"
  },
  { // hobby parent category
    category_name: "Hobbies",
    parent_cateogry: null,
    slug: "hobbies",
    description: "Posts relating to my hobbies (not programming related)",
    colour: "#156671"
  },
  {
    category_name: "Photography",
    parent_cateogry: "Hobbies",
    slug: "photography",
    description: "Posts showcasing my amazing photography skills",
    colour: "#147566"
  },
  {
    category_name: "Fitness",
    parent_cateogry: "Hobbies",
    slug: "fitness",
    description: "Posts describing my physical activies (fitness & sport)",
    colour: "#175656"
  }
]

const addTechnology = async (techs: string[], group: TECHNOLOGY) => {
  techs.forEach(async (tech) => {
    await prisma.technology.upsert({
      where: {
        name: tech
      },
      update: {
        name: tech,
        tech_group: group
      },
      create: {
        name: tech,
        tech_group: group 
      }
    });
  })
}

async function main() {
    for (const item of technologies) {
      await addTechnology(item.techs, item.group);
    }
    Object.entries(tech_icons).forEach(async ([key, value]) => {
      await prisma.technology.update({
        where: {
          name: key
        },
        data: {
          icon_url: value
        }
      })
    });
    for (const cat of post_categories) {
      await prisma.category.upsert({
        where: {
          category_name: cat.category_name
        },
        update: cat,
        create: cat
      })
    }
    const f0rbit = await prisma.blogUser.upsert({
      where: {
        id: "0b93ba98-5cc5-4485-98ca-b02c63d081e7"
      },
      update: {},
      create: {
        id: "0b93ba98-5cc5-4485-98ca-b02c63d081e7",
        user_name: "forbit",
        access_level: ACCESS_LEVEL.ADMIN
      },
    })
    const hidden_post = await prisma.post.upsert({
      where: {
        post_id: 0
      },
      update: {},
      create: {
        post_id: 0,
        title: "Development Post",
        content: "You should not be able to see this post, unless you are forbit himself.",
        post_status: "HIDDEN",
        slug: "test-post",
        metadata: {},
        cover_picture: null,
        author_id: f0rbit.id,
        categories: {
          connect: {
            category_name: "Hobbies"
          }
        }
      }
    }) 
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
