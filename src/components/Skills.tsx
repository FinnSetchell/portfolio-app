"use client";

import { SkillCard } from "./SkillCards";

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ backgroundColor: "var(--background)", color: "var(--text)" }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16"
    >
      <div className="flex flex-col items-center justify-center gap-4 text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl" style={{ color: "var(--text)" }}>
          Skills & Technologies
        </h2>
        <p className="mx-auto max-w-[700px] md:text-xl" style={{ color: "var(--mutedText)" }}>
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
          name="Git"
          description="Proficient in version control and collaboration using Git and GitHub."
          icon={<i className="fab fa-git-alt"></i>}
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
