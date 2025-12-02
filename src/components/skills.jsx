import React, { useState, useEffect } from 'react';
import { LuLightbulb } from "react-icons/lu";
import api from '../api/axios';

const Skills = () => {
    const [filter, setFilter] = useState('All');
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    const categories = ['All', 'Web', 'Full Stack'];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [projectsRes, skillsRes] = await Promise.all([
                    api.get('/projects'),
                    api.get('/skills')
                ]);
                setProjects(projectsRes.data);
                setSkills(skillsRes.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    const SkillSection = ({ title, skills }) => (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-text-secondary border-l-4 border-accent-primary pl-3">{title}</h3>
            <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg blur opacity-20 group-hover:opacity-75 transition duration-500"></div>
                        <div className="relative bg-card-bg rounded-lg p-3 hover:scale-110 transition-transform duration-300 border border-slate-700/10">
                            <img src={skill.icon} alt={skill.name} className="w-10 h-10 object-contain" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    if (loading) {
        return <div className="text-text-primary text-center py-20">Loading...</div>;
    }

    // Group skills by category
    const webSkills = skills.filter(s => s.category === 'Web Development');
    const languageSkills = skills.filter(s => s.category === 'Languages');
    const toolSkills = skills.filter(s => s.category === 'Tools & Others');

    return (
        <div className="min-h-[calc(100vh-100px)] py-12 space-y-20 animate-fade-in-up">
            {/* Skills Section */}
            <div className="space-y-12">
                <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent-primary/10 rounded-full">
                        <LuLightbulb className="text-accent-primary" size={24} />
                    </div>
                    <h2 className="text-4xl font-bold text-text-primary">
                        Technical <span className="text-accent-secondary">Skills</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <SkillSection
                        title="Web Development"
                        skills={webSkills}
                    />

                    <div className="space-y-12">
                        <SkillSection
                            title="Languages"
                            skills={languageSkills}
                        />
                        <SkillSection
                            title="Tools & Others"
                            skills={toolSkills}
                        />
                    </div>
                </div>
            </div>

            {/* Projects Section */}
            <div className="space-y-12">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center space-x-4">
                        <div className="p-3 bg-accent-secondary/10 rounded-full">
                            <LuLightbulb className="text-accent-secondary" size={24} />
                        </div>
                        <h2 className="text-4xl font-bold text-text-primary">
                            Featured <span className="text-accent-primary">Projects</span>
                        </h2>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                    ? 'bg-accent-primary text-white shadow-lg shadow-accent-primary/25'
                                    : 'bg-card-bg text-text-secondary hover:bg-accent-primary/10 hover:text-accent-primary border border-slate-700/10'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((item, index) => (
                        <div key={item._id} className="group relative rounded-xl overflow-hidden bg-card-bg border border-slate-700/10 hover:border-accent-primary/50 transition-all duration-300 hover:-translate-y-2 animate-fade-in-up shadow-lg shadow-slate-900/5" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6 space-y-4">
                                <div className="flex justify-between items-start">
                                    <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-primary transition-colors">
                                        {item.name}
                                    </h3>
                                    <span className="text-xs font-medium px-2 py-1 rounded bg-bg-secondary text-text-secondary">
                                        {item.category}
                                    </span>
                                </div>
                                <p className="text-sm text-text-secondary font-mono bg-bg-secondary p-2 rounded">
                                    {item.stack.join(', ')}
                                </p>

                                <div className="flex gap-4 pt-2">
                                    <a
                                        href={item.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center py-2 rounded-lg bg-accent-primary text-white font-medium hover:bg-accent-primary/90 transition-colors"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={item.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center py-2 rounded-lg border border-slate-600/20 text-text-secondary hover:bg-bg-secondary hover:text-text-primary transition-colors"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Skills;