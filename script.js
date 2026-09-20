const githubUrl = "https://github.com/WendyGiraffe";

const translations = {
  en: {
    skip: "Skip to content",
    nav: { cases: "Case Studies", visuals: "Visuals", capabilities: "Capabilities", experience: "Experience", github: "GitHub", contact: "Contact" },
    hero: {
      eyebrow: "AI Product Manager · Technical PM · Developer",
      title: "Building agentic product systems from problem framing to production delivery.",
      desc: "I connect product strategy, AI architecture, and engineering execution across AI agents, RAG, workflow automation, enterprise security SaaS, and API/platform products.",
      primaryCta: "Explore my work",
      secondaryCta: "Print / save résumé",
      githubCta: "GitHub profile",
      panelTitle: "agent-product-loop.yaml"
    },
    intro: {
      label: "Positioning",
      title: "A product leader who can go deep with engineers.",
      body: "With a computer engineering background and Java/Spring delivery experience, I translate ambiguous business problems into product requirements, technical workflows, API designs, acceptance criteria, and releases that teams can execute."
    },
    cases: {
      label: "Selected Work",
      title: "Case studies across AI agents, engineering platforms, and security SaaS.",
      desc: "A concise view of products where I owned discovery, product design, technical alignment, delivery coordination, and measurable outcomes."
    },
    visuals: {
      label: "Product Visuals",
      title: "Prototype screens and system design artifacts.",
      desc: "Selected UI prototypes and product diagrams from local project work, curated to show how I move from workflows and architecture to shippable product interfaces."
    },
    capabilities: {
      label: "Capability Map",
      title: "Product thinking plus implementation literacy.",
      desc: "I work best at the boundary where customer problems, AI capability design, platform architecture, and delivery governance meet."
    },
    workflow: {
      label: "How I Work",
      title: "From uncertainty to a shipped product loop.",
      desc: "I make complex AI products controllable through explicit milestones, domain modeling, checkpoints, acceptance metrics, and human-in-the-loop mechanisms."
    },
    experience: { label: "Experience", title: "Building products in AI, security, and enterprise platforms." },
    education: { label: "Education & Credentials", title: "Engineering foundation with international training." },
    github: {
      label: "Public GitHub",
      title: "Code footprint and learning archive.",
      desc: "Public repositories visible on GitHub. I keep this section factual and link directly to source."
    },
    contact: {
      label: "Contact",
      title: "Let's build AI products that survive real delivery.",
      desc: "Open to AI Product Manager, Technical Product Manager, and Platform Product Manager opportunities."
    },
    footer: { note: "Designed as a static bilingual portfolio for GitHub Pages." }
  },
  zh: {
    skip: "跳转到正文",
    nav: { cases: "项目案例", visuals: "原型图", capabilities: "能力地图", experience: "工作经历", github: "GitHub", contact: "联系我" },
    hero: {
      eyebrow: "AI 产品经理 · 技术产品经理 · 开发者",
      title: "从问题定义到生产交付，构建真正可落地的 Agent 产品系统。",
      desc: "我连接产品策略、AI 架构与工程执行，专注于 AI Agent、RAG、工作流自动化、企业安全 SaaS 及 API / 平台产品。",
      primaryCta: "查看我的项目",
      secondaryCta: "打印 / 保存简历",
      githubCta: "访问 GitHub",
      panelTitle: "agent-product-loop.yaml"
    },
    intro: {
      label: "我的定位",
      title: "懂产品，也能和工程师深入协作。",
      body: "我具备计算机工程背景和 Java / Spring 交付经验，能够把模糊的业务问题转化为产品需求、技术工作流、API 设计、验收标准与团队可以执行的版本计划。"
    },
    cases: {
      label: "精选项目",
      title: "覆盖 AI Agent、工程协作平台与安全 SaaS 的产品实践。",
      desc: "这些项目体现了我在需求洞察、产品设计、技术对齐、交付协同以及结果度量上的完整参与。"
    },
    visuals: {
      label: "产品视觉",
      title: "原型界面与系统设计成果。",
      desc: "精选本地项目中的 UI 原型与产品设计图，展示我如何把工作流和架构推进为可交付的产品界面。"
    },
    capabilities: {
      label: "能力地图",
      title: "产品思维与工程实现能力的交叉点。",
      desc: "我擅长在客户问题、AI 能力设计、平台架构和交付治理之间建立清晰连接。"
    },
    workflow: {
      label: "工作方式",
      title: "把不确定性变成可交付的产品闭环。",
      desc: "通过明确的里程碑、领域建模、关键检查点、验收指标和 Human-in-the-loop 机制，让复杂 AI 产品更可控。"
    },
    experience: { label: "工作经历", title: "在 AI、安全与企业平台领域持续构建产品。" },
    education: { label: "教育与资质", title: "工程背景与国际化学习经历。" },
    github: {
      label: "公开 GitHub",
      title: "代码足迹与持续学习记录。",
      desc: "以下内容来自 GitHub 公开仓库，信息保持克制，并直接链接到源页面。"
    },
    contact: {
      label: "联系我",
      title: "一起打造经得起真实交付的 AI 产品。",
      desc: "目前关注 AI 产品经理、技术产品经理和平台产品经理机会。"
    },
    footer: { note: "为 GitHub Pages 打造的静态双语个人作品集。" }
  }
};

const data = {
  metrics: {
    en: [
      ["4+", "years across AI & technical products"],
      ["5", "product lines supported with AI upgrades"],
      ["40%+", "knowledge retrieval efficiency improvement"],
      ["95%+", "on-time delivery in current role"]
    ],
    zh: [
      ["4+", "年 AI 与技术产品经验"],
      ["5", "条产品线完成智能化升级"],
      ["40%+", "知识检索效率提升"],
      ["95%+", "当前岗位按期交付率"]
    ]
  },
  systemNodes: {
    en: [
      ["01", "Frame the problem", "customer signal → product bet"],
      ["02", "Compose capabilities", "agent · RAG · workflow · tools"],
      ["03", "Design the control plane", "state · permissions · checkpoints"],
      ["04", "Ship with the team", "PRD · API · UAT · release"],
      ["↻", "Learn from production", "feedback → next iteration"]
    ],
    zh: [
      ["01", "定义问题", "客户信号 → 产品判断"],
      ["02", "组合能力", "Agent · RAG · Workflow · Tools"],
      ["03", "设计控制平面", "状态 · 权限 · 检查点"],
      ["04", "和团队一起交付", "PRD · API · UAT · 发布"],
      ["↻", "从生产环境学习", "反馈 → 下一轮迭代"]
    ]
  },
  cases: {
    en: [
      {
        type: "01 / AI testing",
        title: "AI Operating System Testing & Verification Platform",
        desc: "Planned an AI testing loop connecting requirement parsing, code understanding, test generation, C code generation, simulation execution, log analysis, and report generation.",
        tags: ["Agent", "RAG", "Workflow", "Human-in-the-loop"],
        result: "E2E",
        resultLabel: "requirements → reports"
      },
      {
        type: "02 / platform",
        title: "VxSPACE Intelligent Engineering Collaboration",
        desc: "Defined a Cloud · Desktop · CLI · Host product series for device access, task execution, knowledge services, asset distribution, observability, audit, and governance.",
        tags: ["Platform", "Edge autonomy", "Domain model"],
        result: "4-way",
        resultLabel: "cross-end product model"
      },
      {
        type: "03 / enterprise SaaS",
        title: "AI Security Management Platform",
        desc: "Led product evolution across vulnerability scanning, log and database audit, network audit, web tamper protection, risk scoring, and northbound API integration.",
        tags: ["Security SaaS", "API", "Risk scoring", "Team lead"],
        result: "25%",
        resultLabel: "user activity improvement"
      }
    ],
    zh: [
      {
        type: "01 / AI 测试",
        title: "AI 操作系统测试与验证平台",
        desc: "规划 AI 测试闭环，连接需求解析、代码理解、测试用例生成、C 代码生成、仿真执行、日志分析与报告生成。",
        tags: ["Agent", "RAG", "Workflow", "Human-in-the-loop"],
        result: "E2E",
        resultLabel: "需求 → 测试报告"
      },
      {
        type: "02 / 平台产品",
        title: "VxSPACE 智能工程协作软件系列",
        desc: "定义 Cloud · Desktop · CLI · Host 产品系列，连接设备接入、任务执行、知识服务、工程资产分发、可观测、审计与治理。",
        tags: ["平台", "边缘自治", "领域建模"],
        result: "4 端",
        resultLabel: "跨端产品模型"
      },
      {
        type: "03 / 企业 SaaS",
        title: "AI 安全管理平台",
        desc: "负责漏洞扫描、日志与数据库审计、网络审计、Web 防篡改、风险评分和北向 API 集成等能力的产品迭代。",
        tags: ["安全 SaaS", "API", "风险评分", "团队管理"],
        result: "25%",
        resultLabel: "用户活跃度提升"
      }
    ]
  },
  visuals: {
    en: {
      feature: {
        src: "assets/vxspace-ota-prototype.png",
        alt: "VxSPACE Runtime OTA module update prototype screen",
        eyebrow: "Featured prototype · VxSPACE",
        title: "Runtime OTA update flow for edge devices",
        desc: "A desktop prototype for device detail, update range selection, update feedback, failure handling, and progress visibility in a weak-network engineering environment.",
        tags: ["Desktop prototype", "OTA workflow", "Edge device", "Operational feedback"]
      },
      items: [
        {
          src: "assets/os-testing-prototype.png",
          alt: "Operating system testing verification module prototype",
          title: "OS testing verification workbench",
          desc: "Prototype screen for requirement review progress, issue items, and tester confirmation flow."
        },
        {
          src: "assets/os-static-review.png",
          alt: "Static review page for operating system testing verification platform",
          title: "Static review confirmation detail",
          desc: "A detailed review table connecting requirements, code mapping, implementation status, and verification actions."
        },
        {
          src: "assets/vxspace-cloud-console.png",
          alt: "VxDock Cloud private deployment login prototype",
          title: "VxDock Cloud private console",
          desc: "Cloud-side entry prototype for private deployment and organization-level governance."
        },
        {
          src: "assets/ai-agent-architecture.png",
          alt: "AI agent product architecture relationship diagram",
          title: "AI agent capability architecture",
          desc: "Design artifact mapping model invocation, knowledge retrieval, workflow editing, observability, collaboration, permissions, and outcomes."
        },
        {
          src: "assets/ai-requirement-flow.png",
          alt: "AI requirement analysis agent sub-requirement flow",
          title: "Requirement analysis agent flow",
          desc: "Sub-requirement relationship diagram for multi-source input parsing, context control, knowledge retrieval, and index enhancement."
        },
        {
          src: "assets/ai-coding-flow.png",
          alt: "AI coding agent sub-requirement flow",
          title: "AI coding agent flow",
          desc: "System design flow for model configuration, workflow state, human review, and integration support."
        }
      ]
    },
    zh: {
      feature: {
        src: "assets/vxspace-ota-prototype.png",
        alt: "VxSPACE Runtime OTA 模块更新原型界面",
        eyebrow: "重点原型 · VxSPACE",
        title: "面向边缘设备的 Runtime OTA 更新流程",
        desc: "桌面端原型覆盖设备详情、更新范围选择、结果反馈、失败处理与进度可视化，适用于弱网工程交付场景。",
        tags: ["桌面端原型", "OTA 工作流", "边缘设备", "运行反馈"]
      },
      items: [
        {
          src: "assets/os-testing-prototype.png",
          alt: "操作系统测试验证模块原型界面",
          title: "操作系统测试验证工作台",
          desc: "展示需求审查进度、问题项与测试人员确认流程的原型页面。"
        },
        {
          src: "assets/os-static-review.png",
          alt: "操作系统测试验证平台静态审查页面",
          title: "静态审查确认明细",
          desc: "将需求项、映射代码、功能实现、审查结论和复验操作连接在同一张表内。"
        },
        {
          src: "assets/vxspace-cloud-console.png",
          alt: "VxDock Cloud 私有化部署登录原型",
          title: "VxDock Cloud 私有化控制台",
          desc: "云侧私有化部署与组织级治理的入口原型。"
        },
        {
          src: "assets/ai-agent-architecture.png",
          alt: "AI 智能体产品架构关系图",
          title: "AI 智能体能力架构",
          desc: "设计图覆盖模型调用、知识检索、流程编排、运行观测、协作集成、权限与成果管理。"
        },
        {
          src: "assets/ai-requirement-flow.png",
          alt: "需求分析智能体子需求关系图",
          title: "需求分析智能体流程",
          desc: "展示多源输入解析、上下文控制、知识库调用与检索增强的子需求关系。"
        },
        {
          src: "assets/ai-coding-flow.png",
          alt: "AI 辅助编码智能体子需求关系图",
          title: "AI 辅助编码智能体流程",
          desc: "展示模型配置、流程状态、人审机制与集成支撑等系统设计关系。"
        }
      ]
    }
  },
  capabilities: {
    en: [
      ["✦", "AI product architecture", "Turn model capabilities into reliable user journeys, tool calls, workflow states, and review checkpoints.", ["Agent", "RAG", "Prompt design", "Tool Calling"]],
      ["↗", "Technical product delivery", "Translate requirements into domain models, APIs, interface specs, acceptance criteria, and integration plans.", ["Java / Spring", "SQL", "Swagger", "ApiFox", "Postman"]],
      ["◎", "Enterprise platform thinking", "Design for permissions, governance, auditability, offline capability, lifecycle management, and cross-end consistency.", ["SaaS", "RBAC", "Audit", "Lifecycle"]],
      ["◌", "Execution & alignment", "Keep product, engineering, QA, deployment, operations, and customers moving toward the same release outcome.", ["PRD", "Roadmap", "UAT", "Risk tracking"]],
      ["⌘", "Development literacy", "Hands-on experience with backend delivery and the tools needed to make technical trade-offs concrete.", ["Redis", "MyBatis", "Python", "C++", "Jenkins"]],
      ["↺", "Responsible AI delivery", "Use human review, traceability, source-grounded answers, structured outputs, and explicit success metrics.", ["HITL", "Citations", "Evaluation", "Local LLM"]]
    ],
    zh: [
      ["✦", "AI 产品架构", "将模型能力转化为可靠的用户路径、工具调用、工作流状态与审核检查点。", ["Agent", "RAG", "Prompt 设计", "Tool Calling"]],
      ["↗", "技术产品交付", "把需求转化为领域模型、API、接口规格、验收标准和集成计划。", ["Java / Spring", "SQL", "Swagger", "ApiFox", "Postman"]],
      ["◎", "企业平台思维", "关注权限、治理、可审计、离线能力、生命周期管理与跨端一致性。", ["SaaS", "RBAC", "审计", "生命周期"]],
      ["◌", "执行与对齐", "让产品、研发、测试、部署、运营与客户共同奔向同一个版本结果。", ["PRD", "路线图", "UAT", "风险跟踪"]],
      ["⌘", "开发理解力", "具备后端交付经验，能够把技术取舍落到具体实现与协作工具上。", ["Redis", "MyBatis", "Python", "C++", "Jenkins"]],
      ["↺", "负责任的 AI 交付", "通过人工审核、可追溯性、基于来源的回答、结构化输出与明确指标提升可靠性。", ["HITL", "引用", "评测", "本地 LLM"]]
    ]
  },
  workflow: {
    en: [
      ["01", "Start with the real constraint", "Research customer workflows, operating environments, and the cost of the current workaround before choosing an AI solution."],
      ["02", "Model the product system", "Make capabilities, data, states, permissions, dependencies, and failure paths explicit so engineering can build with less ambiguity."],
      ["03", "Design the AI control loop", "Specify prompts, tools, structured outputs, citations, human checkpoints, and evaluation metrics—not just a chat interface."],
      ["04", "Ship, measure, and learn", "Coordinate integration, QA, deployment, UAT, documentation, and feedback into a repeatable release rhythm."]
    ],
    zh: [
      ["01", "从真实约束开始", "先研究客户工作流、运行环境与现有替代方案的成本，再决定 AI 应该解决什么问题。"],
      ["02", "建模产品系统", "明确能力、数据、状态、权限、依赖关系和失败路径，降低研发实现歧义。"],
      ["03", "设计 AI 控制闭环", "不止设计聊天界面，还要明确 Prompt、工具、结构化输出、引用、人工检查点与评测指标。"],
      ["04", "交付、度量、学习", "将集成、测试、部署、UAT、文档和反馈组织成可复用的发布节奏。"]
    ]
  },
  experience: {
    en: [
      {
        date: "May 2026 — Present",
        role: "Product Manager, Software Defined Business Unit",
        company: "Shanghai Fenglei Technology Co., Ltd.",
        bullets: ["Led AI Agent, knowledge base, workflow, and AI software factory solutions across 5 product lines.", "Designed task orchestration with context passing, tool invocation, result feedback, and multi-turn interaction.", "Built knowledge taxonomy, tagging, retrieval, and update systems; improved retrieval efficiency by 40%+.", "Coordinated product, engineering, deployment, QA, and operations with 95%+ on-time delivery."]
      },
      {
        date: "Jan 2022 — Mar 2026",
        role: "Product Manager & Development Team Lead, Security R&D",
        company: "China Telecom Shanghai Research Institute",
        bullets: ["Planned and iterated an enterprise security SaaS platform spanning 11 security atomic capabilities.", "Served customers across 18 provinces and participated in deployment, testing, and launch of 33 capability-pool VMs.", "Led an 8-person frontend, backend, and operations team; delivered 10 requirement iterations from v1.0 to v3.0.", "Improved user activity by 25% and delivery efficiency by approximately 15% through product and technical optimization."]
      }
    ],
    zh: [
      {
        date: "2026 年 5 月 — 至今",
        role: "软件定义事业部 产品经理",
        company: "上海风雷科技有限公司",
        bullets: ["负责 AI Agent、知识库、工作流与 AI 软件工厂方案，支持 5 条产品线智能化升级。", "设计支持上下文传递、工具调用、结果反馈与多轮交互的 Agent 任务编排架构。", "建设知识分类、标签、检索与更新体系，检索效率提升 40%+。", "协同产品、研发、部署、测试与运营，按期交付率达到 95%+。"]
      },
      {
        date: "2022 年 1 月 — 2026 年 3 月",
        role: "安全研发部 产品经理兼开发团队负责人",
        company: "中国电信上海研究院",
        bullets: ["负责覆盖 11 项安全原子能力的企业安全 SaaS 平台规划与迭代。", "服务 18 个省份客户，参与 33 台能力池虚拟机的部署、测试与上线。", "管理前端、后端和运营组成的 8 人团队，完成 v1.0 至 v3.0 的 10 次需求迭代。", "通过产品与技术优化提升用户活跃度 25%，交付效率约提升 15%。"]
      }
    ]
  },
  education: {
    en: [
      ["Tufts University", "M.S. in Electrical and Computer Engineering · Boston", "Sep 2019 — Jun 2021", "Software engineering, database systems, algorithms. Teaching assistant for Python.", ["TOEFL 95", "CET-6"]],
      ["Southwest University", "B.S. in Automation · Chongqing", "Sep 2015 — Jun 2019", "Data structures, computer networks, Java. Teaching assistant for Data Structures and Analysis.", ["CISP", "Intermediate Computer Professional Title"]],
      ["Technical toolkit", "Product, development & operations", "Ongoing practice", "Java · SQL · Python · C++ · MySQL · Oracle · Redis · MyBatis · Prometheus · Grafana · OpenTelemetry · ELK · Axure · Figma", ["Patent holder", "Encrypted cuckoo filter"]]
    ],
    zh: [
      ["Tufts University 塔夫茨大学", "电气与计算机工程 · 硕士 · 波士顿", "2019 年 9 月 — 2021 年 6 月", "学习软件工程、数据库系统与算法；担任 Python 课程助教。", ["TOEFL 95", "CET-6"]],
      ["西南大学", "自动化 · 学士 · 重庆", "2015 年 9 月 — 2019 年 6 月", "学习数据结构、计算机网络与 Java；担任数据结构与分析课程助教。", ["CISP", "中级计算机专业技术资格"]],
      ["技术工具箱", "产品、开发与运维", "持续实践", "Java · SQL · Python · C++ · MySQL · Oracle · Redis · MyBatis · Prometheus · Grafana · OpenTelemetry · ELK · Axure · Figma", ["专利", "加密布谷鸟过滤器"]]
    ]
  },
  repos: {
    en: [
      ["module5-solution", "Public repository", "JavaScript", "2021"],
      ["module4-solution", "Public repository", "JavaScript", "2021"],
      ["Module3_Solution", "Public repository", "Code archive", "2021"],
      ["module2-solution", "This is assignment for module2", "Code archive", "2021"],
      ["cousera-test", "Cousera test repository", "Code archive", "2021"],
      ["Leetcode-Everyday", "A site I upload my code for leetcode everyday!", "Code archive", "2020"]
    ],
    zh: [
      ["module5-solution", "公开仓库", "JavaScript", "2021"],
      ["module4-solution", "公开仓库", "JavaScript", "2021"],
      ["Module3_Solution", "公开仓库", "代码归档", "2021"],
      ["module2-solution", "Module 2 课程作业", "代码归档", "2021"],
      ["cousera-test", "Coursera 测试仓库", "代码归档", "2021"],
      ["Leetcode-Everyday", "每日上传 LeetCode 代码的仓库", "代码归档", "2020"]
    ]
  }
};

let currentLang = localStorage.getItem("chang-zhou-lang") || "en";

function getPath(object, path) {
  return path.split(".").reduce((value, key) => value && value[key], object);
}

function setTextContent() {
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getPath(translations[currentLang], element.dataset.i18n);
    if (value) element.textContent = value;
  });
  document.querySelector(".lang-current").textContent = currentLang === "en" ? "EN" : "中";
  document.querySelector(".lang-next").textContent = currentLang === "en" ? "中" : "EN";
  document.title = currentLang === "en" ? "Chang Zhou — AI Technical Product Manager" : "周畅 — AI 技术型产品经理";
}

function renderMetrics() {
  document.getElementById("metricsStrip").innerHTML = data.metrics[currentLang].map(([value, label]) => `
    <div class="metric"><div class="metric-value">${value}</div><div class="metric-label">${label}</div></div>
  `).join("");
}

function renderSystemLoop() {
  document.getElementById("systemLoop").innerHTML = data.systemNodes[currentLang].map(([icon, name, meta]) => `
    <div class="loop-node"><span class="loop-icon">${icon}</span><div><div class="loop-name">${name}</div><div class="loop-meta">${meta}</div></div></div>
  `).join("");
}

function renderCases() {
  document.getElementById("caseGrid").innerHTML = data.cases[currentLang].map((item) => `
    <article class="case-card reveal">
      <div><div class="case-kicker"><span>${item.type}</span><span>↗</span></div><h3>${item.title}</h3><p>${item.desc}</p></div>
      <div class="case-bottom"><div class="case-tags">${item.tags.map((tag) => `<span class="case-tag">${tag}</span>`).join("")}</div><div><div class="case-result">${item.result}</div><div class="case-result-label">${item.resultLabel}</div></div></div>
    </article>
  `).join("");
}

function renderVisuals() {
  const visuals = data.visuals[currentLang];
  document.getElementById("visualFeature").innerHTML = `
    <div class="visual-feature-media"><img src="${visuals.feature.src}" alt="${visuals.feature.alt}" loading="lazy"></div>
    <div class="visual-feature-copy">
      <div class="visual-eyebrow">${visuals.feature.eyebrow}</div>
      <h3>${visuals.feature.title}</h3>
      <p>${visuals.feature.desc}</p>
      <div class="visual-tags">${visuals.feature.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
    </div>
  `;
  document.getElementById("visualGrid").innerHTML = visuals.items.map((item) => `
    <article class="visual-card reveal">
      <div class="visual-thumb"><img src="${item.src}" alt="${item.alt}" loading="lazy"></div>
      <div class="visual-card-copy"><h3>${item.title}</h3><p>${item.desc}</p></div>
    </article>
  `).join("");
}

function renderCapabilities() {
  document.getElementById("capabilityGrid").innerHTML = data.capabilities[currentLang].map(([icon, title, desc, tags]) => `
    <article class="capability-card reveal"><div class="capability-icon">${icon}</div><h3>${title}</h3><p>${desc}</p><div class="capability-list">${tags.map((tag) => `<span>${tag}</span>`).join("")}</div></article>
  `).join("");
}

function renderWorkflow() {
  document.getElementById("workflowList").innerHTML = data.workflow[currentLang].map(([number, title, desc]) => `
    <div class="workflow-step"><div class="workflow-number">${number}</div><div><h3>${title}</h3><p>${desc}</p></div></div>
  `).join("");
}

function renderTimeline() {
  document.getElementById("timeline").innerHTML = data.experience[currentLang].map((item) => `
    <article class="timeline-item reveal"><span class="timeline-dot"></span><div class="timeline-meta"><strong>${item.date}</strong>${item.company}</div><div class="timeline-content"><h3>${item.role}</h3><div class="company">${item.company}</div><ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul></div></article>
  `).join("");
}

function renderEducation() {
  document.getElementById("educationGrid").innerHTML = data.education[currentLang].map(([name, degree, date, desc, credentials]) => `
    <article class="education-card reveal"><h3>${name}</h3><div class="edu-meta">${degree} · ${date}</div><p>${desc}</p><div class="credential-row">${credentials.map((credential) => `<span class="credential">${credential}</span>`).join("")}</div></article>
  `).join("");
}

function renderRepos() {
  document.getElementById("repoGrid").innerHTML = data.repos[currentLang].map(([name, desc, language, year]) => `
    <a class="repo-card reveal" href="${githubUrl}/${name}" target="_blank" rel="noreferrer"><div><div class="repo-top"><span class="repo-name">${name}</span><span class="repo-arrow">↗</span></div><p class="repo-desc">${desc}</p></div><div class="repo-foot"><span>${language}</span><span>${year}</span></div></a>
  `).join("");
}

function renderAll() {
  setTextContent();
  renderMetrics();
  renderSystemLoop();
  renderCases();
  renderVisuals();
  renderCapabilities();
  renderWorkflow();
  renderTimeline();
  renderEducation();
  renderRepos();
  observeReveals();
}

let revealObserver;
function observeReveals() {
  if (revealObserver) revealObserver.disconnect();
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = document.querySelectorAll(".reveal:not(.is-visible)");
  if (prefersReducedMotion) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .1, rootMargin: "0px 0px -35px" });
  items.forEach((item) => revealObserver.observe(item));
}

const nav = document.querySelector(".site-nav");
window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 12), { passive: true });

document.querySelector(".lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "zh" : "en";
  localStorage.setItem("chang-zhou-lang", currentLang);
  renderAll();
});

document.getElementById("printResume").addEventListener("click", () => window.print());

document.querySelector(".menu-toggle").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const links = document.getElementById("nav-links");
  const open = links.classList.toggle("open");
  button.setAttribute("aria-expanded", String(open));
  button.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});

document.querySelectorAll(".nav-links a").forEach((link) => link.addEventListener("click", () => {
  document.getElementById("nav-links").classList.remove("open");
  document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
}));

document.getElementById("year").textContent = new Date().getFullYear();
renderAll();
if (window.location.hash) {
  setTimeout(() => document.querySelector(window.location.hash)?.scrollIntoView(), 0);
}
