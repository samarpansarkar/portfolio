import React, { useState, useEffect } from 'react';
import api from '../../api/axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [projects, setProjects] = useState([]);
    const [skills, setSkills] = useState([]);
    const [activeTab, setActiveTab] = useState('projects');
    const [editingItem, setEditingItem] = useState(null);
    const navigate = useNavigate();

    // Form states
    const [projectForm, setProjectForm] = useState({
        name: '', image: '', stack: '', category: '', githubLink: '', liveLink: ''
    });
    const [skillForm, setSkillForm] = useState({
        name: '', icon: '', category: 'Web Development'
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [projectsRes, skillsRes] = await Promise.all([
                api.get('/projects'),
                api.get('/skills')
            ]);
            setProjects(projectsRes.data);
            setSkills(skillsRes.data);
        } catch (error) {
            console.error("Error fetching data", error);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        navigate('/admin/login');
    };

    const handleDelete = async (type, id) => {
        if (window.confirm('Are you sure?')) {
            try {
                await api.delete(`/${type}/${id}`);
                fetchData();
            } catch (error) {
                console.error("Error deleting", error);
            }
        }
    };

    const handleProjectSubmit = async (e) => {
        e.preventDefault();
        const data = { ...projectForm, stack: projectForm.stack.split(',').map(s => s.trim()) };
        try {
            if (editingItem) {
                await api.put(`/projects/${editingItem._id}`, data);
            } else {
                await api.post('/projects', data);
            }
            setProjectForm({ name: '', image: '', stack: '', category: '', githubLink: '', liveLink: '' });
            setEditingItem(null);
            fetchData();
        } catch (error) {
            console.error("Error saving project", error);
        }
    };

    const handleSkillSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingItem) {
                await api.put(`/skills/${editingItem._id}`, skillForm);
            } else {
                await api.post('/skills', skillForm);
            }
            setSkillForm({ name: '', icon: '', category: 'Web Development' });
            setEditingItem(null);
            fetchData();
        } catch (error) {
            console.error("Error saving skill", error);
        }
    };

    const startEdit = (item, type) => {
        setEditingItem(item);
        if (type === 'project') {
            setProjectForm({ ...item, stack: item.stack.join(', ') });
            setActiveTab('projects');
        } else {
            setSkillForm(item);
            setActiveTab('skills');
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 text-white p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                <button onClick={handleLogout} className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">Logout</button>
            </div>

            <div className="flex gap-4 mb-8">
                <button
                    onClick={() => { setActiveTab('projects'); setEditingItem(null); }}
                    className={`px-4 py-2 rounded ${activeTab === 'projects' ? 'bg-accent-primary' : 'bg-slate-700'}`}
                >
                    Projects
                </button>
                <button
                    onClick={() => { setActiveTab('skills'); setEditingItem(null); }}
                    className={`px-4 py-2 rounded ${activeTab === 'skills' ? 'bg-accent-primary' : 'bg-slate-700'}`}
                >
                    Skills
                </button>
            </div>

            {activeTab === 'projects' ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-slate-800 p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">{editingItem ? 'Edit Project' : 'Add Project'}</h2>
                        <form onSubmit={handleProjectSubmit} className="space-y-4">
                            <input placeholder="Name" className="w-full p-2 bg-slate-700 rounded" value={projectForm.name} onChange={e => setProjectForm({ ...projectForm, name: e.target.value })} required />
                            <input placeholder="Image URL" className="w-full p-2 bg-slate-700 rounded" value={projectForm.image} onChange={e => setProjectForm({ ...projectForm, image: e.target.value })} required />
                            <input placeholder="Stack (comma separated)" className="w-full p-2 bg-slate-700 rounded" value={projectForm.stack} onChange={e => setProjectForm({ ...projectForm, stack: e.target.value })} />
                            <input placeholder="Category" className="w-full p-2 bg-slate-700 rounded" value={projectForm.category} onChange={e => setProjectForm({ ...projectForm, category: e.target.value })} required />
                            <input placeholder="GitHub Link" className="w-full p-2 bg-slate-700 rounded" value={projectForm.githubLink} onChange={e => setProjectForm({ ...projectForm, githubLink: e.target.value })} required />
                            <input placeholder="Live Link" className="w-full p-2 bg-slate-700 rounded" value={projectForm.liveLink} onChange={e => setProjectForm({ ...projectForm, liveLink: e.target.value })} required />
                            <button type="submit" className="w-full bg-green-600 py-2 rounded hover:bg-green-700">{editingItem ? 'Update' : 'Add'}</button>
                            {editingItem && <button type="button" onClick={() => { setEditingItem(null); setProjectForm({ name: '', image: '', stack: '', category: '', githubLink: '', liveLink: '' }); }} className="w-full bg-gray-600 py-2 rounded hover:bg-gray-700 mt-2">Cancel</button>}
                        </form>
                    </div>
                    <div className="space-y-4">
                        {projects.map(p => (
                            <div key={p._id} className="bg-slate-800 p-4 rounded flex justify-between items-center">
                                <div>
                                    <h3 className="font-bold">{p.name}</h3>
                                    <p className="text-sm text-slate-400">{p.category}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button onClick={() => startEdit(p, 'project')} className="bg-blue-600 px-3 py-1 rounded text-sm">Edit</button>
                                    <button onClick={() => handleDelete('projects', p._id)} className="bg-red-600 px-3 py-1 rounded text-sm">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-slate-800 p-6 rounded-lg">
                        <h2 className="text-xl font-bold mb-4">{editingItem ? 'Edit Skill' : 'Add Skill'}</h2>
                        <form onSubmit={handleSkillSubmit} className="space-y-4">
                            <input placeholder="Name" className="w-full p-2 bg-slate-700 rounded" value={skillForm.name} onChange={e => setSkillForm({ ...skillForm, name: e.target.value })} required />
                            <input placeholder="Icon URL" className="w-full p-2 bg-slate-700 rounded" value={skillForm.icon} onChange={e => setSkillForm({ ...skillForm, icon: e.target.value })} required />
                            <select className="w-full p-2 bg-slate-700 rounded" value={skillForm.category} onChange={e => setSkillForm({ ...skillForm, category: e.target.value })}>
                                <option value="Web Development">Web Development</option>
                                <option value="Languages">Languages</option>
                                <option value="Tools & Others">Tools & Others</option>
                            </select>
                            <button type="submit" className="w-full bg-green-600 py-2 rounded hover:bg-green-700">{editingItem ? 'Update' : 'Add'}</button>
                            {editingItem && <button type="button" onClick={() => { setEditingItem(null); setSkillForm({ name: '', icon: '', category: 'Web Development' }); }} className="w-full bg-gray-600 py-2 rounded hover:bg-gray-700 mt-2">Cancel</button>}
                        </form>
                    </div>
                    <div className="space-y-4">
                        {skills.map(s => (
                            <div key={s._id} className="bg-slate-800 p-4 rounded flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <img src={s.icon} alt={s.name} className="w-8 h-8 object-contain" />
                                    <div>
                                        <h3 className="font-bold">{s.name}</h3>
                                        <p className="text-sm text-slate-400">{s.category}</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button onClick={() => startEdit(s, 'skill')} className="bg-blue-600 px-3 py-1 rounded text-sm">Edit</button>
                                    <button onClick={() => handleDelete('skills', s._id)} className="bg-red-600 px-3 py-1 rounded text-sm">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
