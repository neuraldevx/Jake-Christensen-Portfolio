import Link from 'next/link';
import { getProjects } from 'app/projects/utils';


function ProjectsSection() {
  const projects = getProjects(); // This function should return an array of projects

  return (
    <section className="py-12 md:py-20 lg:py-28 transition-all duration-500 ease-in-out bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-2">Featured Projects</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            Check out some of my recent work and see what I can do.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.slug} className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105">
              <img
                alt={project.metadata.title}
                className="w-full h-48 object-cover"
                src={project.metadata.image || '/placeholder.svg'} // Fallback to placeholder if no image available
                style={{
                  aspectRatio: "400/300",
                  objectFit: "cover",
                }}
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{project.metadata.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">{project.metadata.summary}</p>
                <Link
                  className="inline-flex items-center justify-center h-9 px-4 rounded-md bg-gray-900 text-gray-50 text-sm font-medium transition-colors hover:bg-gray-900/90 focus:outline-none focus:ring-1 focus:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90"
                  href={`/projects/${project.slug}`}
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;