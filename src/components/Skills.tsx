import { SkillCard } from "./SkillCards";

export default function Skills({ backgroundColor }: { backgroundColor: string }) {
  return (
    <section
      id="skills"
      style={{ backgroundColor }}
      className="min-h-screen flex flex-col items-center justify-center px-4 text-gray-900 py-16 pt-16"
    >
      <div className="flex flex-col items-center justify-center gap-4 text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Skills & Technologies
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
          The tools and technologies I work with
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        <SkillCard
          name="Java"
          description="Experienced in building scalable backend systems and applications using Java."
          icon={<i className="fab fa-java"></i>}
        />
        <SkillCard
          name="React"
          description="Proficient in building dynamic and responsive web applications using React."
          icon={<i className="fab fa-react"></i>}
        />
        <SkillCard
          name="Next.js"
          description="Skilled in creating server-rendered React applications with Next.js."
          icon={<i className="fas fa-layer-group"></i>}
        />
        <SkillCard
          name="Tailwind CSS"
          description="Expert in designing modern and responsive UIs using Tailwind CSS."
          icon={<i className="fas fa-paint-brush"></i>}
        />
        <SkillCard
          name="TypeScript"
          description="Experienced in using TypeScript for building type-safe and maintainable applications."
          icon={<i className="fas fa-code"></i>}
        />
        <SkillCard
          name="GraphQL"
          description="Skilled in designing and querying APIs using GraphQL for efficient data fetching."
          icon={<i className="fas fa-database"></i>}
        />
        <SkillCard
          name="Git"
          description="Proficient in version control and collaboration using Git and GitHub."
          icon={<i className="fab fa-git-alt"></i>}
        />
        <SkillCard
          name="Docker"
          description="Experienced in containerizing applications and managing environments using Docker."
          icon={<i className="fab fa-docker"></i>}
        />
        <SkillCard
          name="Python"
          description="Proficient in Python for scripting, automation, and data analysis."
          icon={<i className="fab fa-python"></i>}
        />
        <SkillCard
          name="JSON"
          description="Experienced in working with JSON for data exchange and API integrations."
          icon={<i className="fas fa-file-code"></i>}
        />
        <SkillCard
          name="Node.js"
          description="Skilled in building scalable server-side applications using Node.js."
          icon={<i className="fab fa-node-js"></i>}
        />
        <SkillCard
          name="MongoDB"
          description="Proficient in using MongoDB for building and managing NoSQL databases."
          icon={<i className="fas fa-database"></i>}
        />
        <SkillCard
          name="Fusion 360"
          description="Experienced in 3D modeling and CAD design using Fusion 360."
          icon={<i className="fas fa-cube"></i>}
        />
        <SkillCard
          name="Prusa Printers"
          description="Skilled in 3D printing and optimizing prints using Prusa printers."
          icon={<i className="fas fa-print"></i>}
        />
        <SkillCard
          name="Raspberry Pi"
          description="Experienced in building IoT and embedded systems using Raspberry Pi."
          icon={<i className="fas fa-microchip"></i>}
        />
        <SkillCard
          name="Fabric"
          description="Proficient in creating Minecraft mods using the Fabric modding platform."
          icon={<i className="fas fa-cubes"></i>}
        />
        <SkillCard
          name="NeoForge"
          description="Experienced in modding Minecraft using the NeoForge platform."
          icon={<i className="fas fa-cogs"></i>}
        />
        <SkillCard
          name="Forge"
          description="Skilled in developing Minecraft mods using the Forge modding platform."
          icon={<i className="fas fa-hammer"></i>}
        />
      </div>
    </section>
  );
}
