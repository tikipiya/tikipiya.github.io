import { AnimatedContent } from "../../components/AnimatedContent";
import { ProjectCard } from "../../components/ProjectCard";

const projects = [
  {
    title: "asyncx",
    description: "非同期タスク管理・同期/非同期変換ライブラリ",
    technologies: ["Python"],
    demoLink: "https://pypi.org/project/asyncx-tools/",
    githubLink: "https://github.com/tikipiya/asyncx",
  },
  {
    title: "pdfforge",
    description: "様々な形式の画像をPDFに変換するPythonライブラリ",
    technologies: ["Python"],
    demoLink: "https://pypi.org/project/pdfforge/",
    githubLink: "https://github.com/tikipiya/pdfforge"
  },
];

export default async function Works() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <AnimatedContent>
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Works</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>
      </AnimatedContent>
    </main>
  );
} 