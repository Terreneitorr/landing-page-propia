import Link from "next/link";
import { profile } from "@/lib/data/profile";
import { skills } from "@/lib/data/skills";
import { posts } from "@/lib/data/posts";
import { projects } from "@/lib/data/projects";
import Thumb from "@/components/Thumb";

export default function LandingPage() {
  const latestPost = posts[posts.length - 1];
  const socialLinks = [
    { label: "Correo", href: `mailto:${profile.social.email}` },
    {
      label: "GitHub",
      href: profile.social.github,
    },
    ...(profile.social.linkedin && !profile.social.linkedin.includes("tu-usuario")
      ? [{ label: "LinkedIn", href: profile.social.linkedin }]
      : []),
  ];

  return (
    <>
      <div className="container hero">
        <div className="avatar">
          {profile.avatarImage ? (
            <img
              src={profile.avatarImage}
              alt={profile.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
            />
          ) : (
            profile.name?.trim()?.[0] || "?"
          )}
        </div>
        <div className="hero-text">
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <p className="tagline">{profile.tagline}</p>
          <div className="btn-row">
            <Link href="/devblog" className="btn btn-primary">
              Ver DevBlog
            </Link>
            <a href={`mailto:${profile.social.email}`} className="btn btn-outline">
              Contacto
            </a>
          </div>
        </div>
      </div>

      <section id="sobre-mi" className="container section">
        <h2>Sobre mí</h2>
        <p style={{ marginTop: 12, maxWidth: "65ch" }}>{profile.about}</p>
      </section>

      <section className="container section">
        <h2>Educación</h2>
        <div className="profile-grid" style={{ marginTop: 16 }}>
          {profile.education.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p className="meta" style={{ marginTop: 8 }}>{item.period}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section">
        <h2>Experiencia</h2>
        <ul className="timeline" style={{ marginTop: 16 }}>
          {profile.experience.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p className="meta" style={{ marginTop: 4 }}>{item.period}</p>
              <p style={{ marginTop: 8 }}>{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container section">
        <h2>Redes y contacto</h2>
        <div className="chip-row" style={{ marginTop: 16 }}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              className="chip"
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <section id="habilidades" className="container section">
        <h2>Habilidades</h2>
        <div className="skills-grid" style={{ marginTop: 16 }}>
          {skills.map((skill) => (
            <div key={skill.id} className="skill-chip">
              <h3>{skill.name}</h3>
              <div className="bar">
                <span style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="proyectos" className="container section">
        <h2>Proyectos</h2>
        <div className="posts-grid" style={{ marginTop: 16 }}>
          {projects.map((project) => (
            <div key={project.id} className="post-row" style={{ flexDirection: "column" }}>
              <Thumb src={project.image} alt={project.title} style={{ width: "100%", height: 120 }} />
              <div style={{ marginTop: 8 }}>
                <h3>{project.title}</h3>
                <p style={{ marginTop: 4, fontSize: 14 }}>{project.description}</p>
                <div className="chip-row" style={{ marginTop: 8 }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container section" style={{ borderBottom: "none" }}>
        <h2>Último post del DevBlog</h2>
        <Link href={`/devblog/${latestPost.slug}`} className="post-row" style={{ marginTop: 16 }}>
          <Thumb src={latestPost.image} alt={latestPost.title} />
          <div>
            <h3>{latestPost.title}</h3>
            <p className="meta">{latestPost.date}</p>
            <p style={{ marginTop: 4 }}>{latestPost.excerpt}</p>
          </div>
        </Link>
      </section>
    </>
  );
}
