import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PageHero } from "@/components/PageHero";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionDetail } from "@/components/SectionDetail";
import { WorkTogether } from "@/components/WorkTogether";
import { getProjectCategoryPage, projectCategoryPages } from "@/lib/section-pages";
import { projectCategories, projects } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectCategoryPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getProjectCategoryPage(slug);
  if (!page) return { title: "Projects" };

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/projects/category/${slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `/projects/category/${slug}`,
    },
  };
}

export default async function ProjectCategoryPage({ params }: Props) {
  const { slug } = await params;
  const page = getProjectCategoryPage(slug);
  if (!page) notFound();

  const category = projectCategories.find((c) => c.id === slug);
  const listed = category?.projectIds.length
    ? projects.filter((p) => category.projectIds.includes(p.id))
    : [];

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <PageHero
          eyebrow={page.eyebrow}
          title={page.title}
          description={page.description}
        />
        <SectionDetail
          page={page}
          hubHref="/projects"
          hubLabel="All projects"
          showWorkTogether={false}
        />

        {listed.length > 0 && (
          <section className="border-t border-navy/8 bg-sand py-14 sm:py-20">
            <div className="mx-auto max-w-6xl px-5 md:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-forest">
                Listings in {page.title}
              </p>
              <div className="mt-8 flex flex-col items-center gap-10 md:flex-row md:flex-wrap md:items-end md:justify-center md:gap-8">
                {listed.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            </div>
          </section>
        )}

        <WorkTogether />
      </main>
      <Footer />
    </>
  );
}