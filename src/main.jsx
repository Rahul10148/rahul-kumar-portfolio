import React,{useEffect,useState} from 'react';
import {createRoot} from 'react-dom/client';
function Icon({name,size=18}) {
 const paths={
  arrow:'M5 12h13M12 5l7 7-7 7',
  mail:'M3 5h18v14H3z M3 6l9 7 9-7',
  map:'M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z M9 3v15 M15 6v15',
  menu:'M4 6h16M4 12h16M4 18h16',
  close:'M6 6l12 12M18 6L6 18',
  code:'M8 9l-3 3 3 3M16 9l3 3-3 3M14 5l-4 14',
  server:'M4 5h16v6H4z M4 13h16v6H4z M7 8h.01M7 16h.01',
  database:'M5 5c0-2 14-2 14 0v14c0 2-14 2-14 0V5z M5 5c0 2 14 2 14 0M5 12c0 2 14 2 14 0',
  spark:'M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3z',
  zap:'M13 2L4 14h7l-1 8 9-12h-7l1-8z'
 };
 const d=paths[name]||paths.arrow;
 return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d}/></svg>;
}
const ArrowUpRight=({size=18})=><Icon name="arrow" size={size}/>;
const Mail=({size=18})=><Icon name="mail" size={size}/>;
const MapPin=({size=18})=><Icon name="map" size={size}/>;
const Menu=({size=18})=><Icon name="menu" size={size}/>;
const X=({size=18})=><Icon name="close" size={size}/>;
const Code2=({size=18})=><Icon name="code" size={size}/>;
const Server=({size=18})=><Icon name="server" size={size}/>;
const Database=({size=18})=><Icon name="database" size={size}/>;
const Sparkles=({size=18})=><Icon name="spark" size={size}/>;
const Zap=({size=18})=><Icon name="zap" size={size}/>;
import './styles.css';

const skills=[
 ['C# / .NET','Core engineering','dotnet'],['ASP.NET Core','Web APIs','api'],['Blazor','WASM + Server','ui'],['Angular','Frontend','angular'],['SQL Server','Data','sql'],['EF Core','ORM','data'],['Clean Architecture','Design','arch'],['Docker','Containers','docker'],['Git / CI-CD','Delivery','git'],['Java / Spring Boot','Expanding stack','java'],['REST APIs','Integration','api'],['System Design','Architecture','arch']
];
const projects=[
 {title:'Regulatory Compliance System',tag:'Enterprise • .NET 8',desc:'Internal compliance platform built with Blazor WebAssembly, ASP.NET Core APIs and Clean Architecture. Includes role-based workflows, CQRS/MediatR, EF Core and structured logging.',tech:['.NET 8','Blazor WASM','CQRS','EF Core'],icon:'◈'},
 {title:'IPM / TNMS Engineering',tag:'Nokia • Optical Networking',desc:'Worked across modern Blazor UI and legacy backend flows, activating product features, debugging data paths and reverse-engineering optical network domain behavior.',tech:['Blazor','.NET','VB.NET','Docker'],icon:'⌁'},
 {title:'YouDeserveBetter',tag:'Startup • Women’s Health',desc:'Co-building a digital healthcare product focused on PCOS/PCOD journeys, habit tracking, analytics, AI-assisted guidance and personalized routines.',tech:['Product','Analytics','AI','Mobile'],icon:'✦'},
 {title:'BlackBox.com',tag:'Web • Sitefinity',desc:'Developed and supported content-driven experiences, webinars, insights pages, social panels and interactive UI enhancements for a global enterprise website.',tech:['Sitefinity','JavaScript','jQuery','CMS'],icon:'▣'}
];
const timeline=[
 {date:'2024 — Present',role:'Software Developer',company:'Nokia • VCTI Payroll',desc:'Working on TNMS and IPM products with Blazor, .NET and legacy backend technologies. Building UI features, debugging end-to-end flows and understanding optical fibre/network management systems.'},
 {date:'2022 — 2024',role:'Software Developer',company:'Black Box',desc:'Worked on Regulatory Compliance System using .NET 8, Blazor WASM, ASP.NET Core Web API and Clean Architecture. Also contributed to BlackBox.com Sitefinity development and support.'}
];
function App(){
 const [open,setOpen]=useState(false); const [active,setActive]=useState('home');
 useEffect(()=>{const on=()=>{const ids=['home','about','experience','projects','skills','contact'];let cur='home';ids.forEach(id=>{const el=document.getElementById(id);if(el&&window.scrollY>=el.offsetTop-180)cur=id});setActive(cur)};window.addEventListener('scroll',on,{passive:true});return()=>window.removeEventListener('scroll',on)},[]);
 const go=id=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setOpen(false)};
 return <div className="site">
  <div className="noise"/><header><div className="nav wrap"><button className="brand" onClick={()=>go('home')}><span>RK</span><b>Rahul Kumar</b></button><nav className={open?'show':''}>{['about','experience','projects','skills','contact'].map(x=><button key={x} className={active===x?'active':''} onClick={()=>go(x)}>{x}</button>)}<a className="nav-cta" href="mailto:rahul.dev@example.com">Let's talk <ArrowUpRight size={15}/></a></nav><button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header>
  <main>
   <section id="home" className="hero wrap"><div className="hero-copy"><div className="eyebrow"><i/> Available for opportunities <span>•</span> Bengaluru, India</div><h1>Building <em>reliable</em><br/>software for the real world.</h1><p className="lead">I'm Rahul Kumar, a Software Developer focused on <strong>.NET, Blazor, APIs and modern full-stack engineering</strong>. I turn complex business problems into clean, maintainable products.</p><div className="actions"><button className="primary" onClick={()=>go('projects')}>View my work <ArrowUpRight size={18}/></button><a className="secondary" href="#contact">Get in touch <Mail size={17}/></a></div><div className="mini-stats"><div><b>4+</b><span>Years experience</span></div><div><b>.NET</b><span>Primary stack</span></div><div><b>∞</b><span>Curiosity</span></div></div></div><div className="hero-card"><div className="orb"><div className="orb-core">RK</div></div><div className="code-card"><div className="dots"><i/><i/><i/></div><pre><span className="kw">const</span> developer = {'{'}
  name: <span className="str">"Rahul Kumar"</span>,
  stack: [<span className="str">".NET"</span>, <span className="str">"Angular"</span>],
  focus: <span className="str">"clean systems"</span>
{'}'}</pre></div></div></section>
   <section id="about" className="section wrap"><div className="section-head"><span>01</span><h2>About me</h2></div><div className="about-grid"><div className="about-main"><p className="big">I enjoy sitting between <em>product thinking</em> and engineering.</p><p>My experience spans enterprise applications, network and optical-fibre systems, compliance software and startup product development. I care about readable code, thoughtful architecture and interfaces that make complicated systems feel simple.</p><p>Currently I work with Nokia on TNMS/IPM projects while continuing to deepen my full-stack skills across Angular, .NET, system design, cloud and AI-enabled products.</p></div><div className="quote"><Sparkles size={22}/><p>“Good software is not just code that works. It is code that another engineer can understand six months later.”</p><span>— Engineering principle</span></div></div></section>
   <section id="experience" className="section wrap"><div className="section-head"><span>02</span><h2>Experience</h2></div><div className="timeline">{timeline.map((t,i)=><article className="job" key={i}><div className="job-date">{t.date}</div><div className="job-line"><i/></div><div className="job-body"><h3>{t.role}</h3><h4>{t.company}</h4><p>{t.desc}</p><div className="chips">{(i===0?['Blazor','C# / .NET','TNMS','IPM','Optical Networking']:['.NET 8','Blazor WASM','ASP.NET Core','Clean Architecture','Sitefinity']).map(x=><span key={x}>{x}</span>)}</div></div></article>)}</div></section>
   <section id="projects" className="section wrap"><div className="section-head"><span>03</span><h2>Selected work</h2></div><div className="project-grid">{projects.map((p,i)=><article className="project" key={p.title}><div className="project-top"><span className="project-icon">{p.icon}</span><span className="project-num">0{i+1}</span></div><small>{p.tag}</small><h3>{p.title}</h3><p>{p.desc}</p><div className="chips">{p.tech.map(x=><span key={x}>{x}</span>)}</div><button className="arrow" aria-label="Project details"><ArrowUpRight size={18}/></button></article>)}</div></section>
   <section id="skills" className="section wrap"><div className="section-head"><span>04</span><h2>Tech stack</h2></div><div className="skills-grid">{skills.map(([name,sub,kind])=><div className="skill" key={name}><div className={'skill-icon '+kind}>{kind==='dotnet'?<Code2/>:kind==='sql'?<Database/>:kind==='api'?<Server/>:kind==='arch'?<Zap/>:<Code2/>}</div><div><b>{name}</b><small>{sub}</small></div></div>)}</div></section>
   <section id="contact" className="contact wrap"><div><span className="eyebrow"><i/> 05 • Contact</span><h2>Have a project,<br/><em>opportunity</em> or idea?</h2><p>Let's talk about what you're building, the problem you're solving, or where I can contribute.</p></div><div className="contact-card"><a href="mailto:rahul.dev@example.com"><Mail/> <span><small>Email</small><b>rahul.dev@example.com</b></span><ArrowUpRight/></a><a href="https://www.linkedin.com/" target="_blank"><span className="linkedin-mark">in</span> <span><small>LinkedIn</small><b>Connect professionally</b></span><ArrowUpRight/></a><div><MapPin/> <span><small>Based in</small><b>Bengaluru, India</b></span></div></div></section>
  </main><footer><div className="wrap footer"><span>© {new Date().getFullYear()} Rahul Kumar</span><span>Designed & built with curiosity.</span><div><a href="#home">Back to top ↑</a></div></div></footer>
 </div>
}
createRoot(document.getElementById('root')).render(<App/>);
