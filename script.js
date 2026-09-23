const translations = {
  en: {
    skip: "Skip to content",
    nav: { cases: "Case Studies", delivery: "Delivery", visuals: "Visuals", capabilities: "Capabilities", experience: "Experience", contact: "Contact" },
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
    delivery: {
      label: "Delivery Snapshot",
      title: "Recent Formal-Tech work turned into concrete delivery evidence.",
      desc: "A richer view of current product work across IIA Cloud, VxSPACE, operating-system testing, ladder-diagram conversion, and agent product exploration.",
      panelTitle: "Project progress"
    },
    visuals: {
      label: "Product Visuals",
      title: "Six delivery angles from real product work.",
      desc: "Browse the artifacts behind product delivery: prototype handoff, interaction handoff, functional module design, PRD delivery, task management, and user-material delivery."
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
    contact: {
      label: "Contact",
      title: "Let's build AI products that survive real delivery.",
      desc: "Open to AI Product Manager, Technical Product Manager, and Platform Product Manager opportunities."
    },
    footer: { note: "Designed as a static bilingual portfolio for GitHub Pages.", views: "Views:", visitors: "Visitors:" }
  },
  zh: {
    skip: "跳转到正文",
    nav: { cases: "项目案例", delivery: "交付进展", visuals: "产品视觉", capabilities: "能力地图", experience: "工作经历", contact: "联系我" },
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
    delivery: {
      label: "交付进展",
      title: "把丰蕾近期工作经历转化为可量化的交付证据。",
      desc: "更完整地呈现 IIA Cloud、VxSPACE、操作系统测试、梯形图转换与智能体探索中的产品推进工作。",
      panelTitle: "项目进展"
    },
    visuals: {
      label: "产品视觉",
      title: "从六个交付角度呈现真实产品工作。",
      desc: "按原型交付、交互交付、功能模块设计、PRD 交付、任务管理和用户材料交付浏览产品成果，让每张截图都对应具体职责。"
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
    contact: {
      label: "联系我",
      title: "一起打造经得起真实交付的 AI 产品。",
      desc: "目前关注 AI 产品经理、技术产品经理和平台产品经理机会。"
    },
    footer: { note: "为 GitHub Pages 打造的静态双语个人作品集。", views: "访问量：", visitors: "访客：" }
  }
};

const data = {
  metrics: {
    en: [
      ["4+", "years across AI & technical products"],
      ["5", "current Formal-Tech projects supported"],
      ["148", "IIA Cloud requirements structured"],
      ["45", "core features tracked through delivery"]
    ],
    zh: [
      ["4+", "年 AI 与技术产品经验"],
      ["5", "个丰蕾当前项目支持"],
      ["148", "IIA Cloud 需求梳理项"],
      ["45", "核心功能交付跟踪项"]
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
  delivery: {
    en: {
      metrics: [
        ["148", "IIA Cloud requirements structured"],
        ["13", "requirement and product docs updated"],
        ["10+", "reviews organized or joined"],
        ["45", "core features developed, tested, or accepted"],
        ["53", "VxSPACE requirements organized"],
        ["117", "OS testing requirements and scope items clarified"]
      ],
      projects: [
        ["IIA Cloud", "Completed three development phases and four demos; tracked requirements, documents, reviews, schedules, development, testing, and acceptance feedback."],
        ["VxSPACE", "Organized 53 requirements into six modules, supported milestone planning, and closed 18 issues or defects while phase-one development continued."],
        ["Operating-system testing", "Clarified 117 testing requirements, completed prototype and requirement-document confirmation, and moved the first development milestone into testing."],
        ["Ladder-diagram conversion", "Completed requirement collection and scheduling, entered development, and established weekly customer progress reporting."],
        ["Agent exploration", "Discussed customer scenarios, clarified product form and usage flow, and submitted a requirement explanation to the customer."]
      ],
      practices: [
        ["Requirement → module → task → acceptance", "Break down business needs into functional modules, task nodes, delivery artifacts, and acceptance evidence before committing them to a schedule."],
        ["Delivery judged by artifacts", "Use documents, versions, demos, test conclusions, and closed-loop issues as evidence of milestone completion instead of relying on meeting updates."],
        ["Issue impact triage", "Classify feedback by delivery impact, prioritize core function, compatibility, and stability problems, and verify fixes through regression."],
        ["Unified tracking", "Record requirement changes, technical constraints, owners, dates, version impact, and test results in one traceable operating rhythm."]
      ]
    },
    zh: {
      metrics: [
        ["148", "IIA Cloud 需求梳理项"],
        ["13", "需求与产品文档输出 / 更新"],
        ["10+", "组织 / 参与需求评审"],
        ["45", "核心功能开发 / 测试 / 验收项"],
        ["53", "VxSPACE 需求整理项"],
        ["117", "操作系统测试需求 / 范围梳理项"]
      ],
      projects: [
        ["IIA Cloud", "完成三期开发和四次演示，持续跟进需求、文档、评审、排期、开发、测试与验收反馈。"],
        ["VxSPACE", "将 53 项需求拆解为 6 个功能模块，支持里程碑排期，并在一期开发过程中闭环 18 个问题 / 缺陷。"],
        ["操作系统测试", "梳理 117 项测试需求与范围，完成原型和需求文档确认，第一期开发节点完成后进入测试阶段。"],
        ["梯形图转换", "完成需求收集与项目排期，项目进入开发阶段，并建立每周客户进度汇报机制。"],
        ["智能体探索", "参与客户场景讨论，明确产品形态和使用流程，已向客户提交需求说明。"]
      ],
      practices: [
        ["需求项 → 功能模块 → 任务节点 → 验收结果", "先将业务需求拆解为功能模块、任务节点、交付物和验收证据，再纳入排期。"],
        ["用交付物判断节点", "以文档、版本、演示、测试结论和闭环问题作为节点完成依据，而不是只依赖会议同步。"],
        ["按影响范围处理问题", "根据交付影响划分反馈优先级，优先处理核心功能、兼容性和稳定性问题，并通过回归验证确认修复。"],
        ["统一过程记录", "统一记录需求变更、技术约束、责任人、完成时间、版本影响和测试结果，减少跨团队信息差。"]
      ]
    }
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
        type: "02 / AI platform",
        title: "IIA Cloud AI-assisted Engineering Platform",
        desc: "Designed a collaborative workspace that turns team conversations into issues, structures product knowledge, orchestrates AI agents, and connects requirements, design, development, testing, and release decisions.",
        tags: ["IIA Cloud", "AI Agent", "Issue workflow", "Knowledge base"],
        result: "1 loop",
        resultLabel: "chat → issue → delivery"
      },
      {
        type: "03 / platform",
        title: "VxSPACE Intelligent Engineering Collaboration",
        desc: "Defined a Cloud · Desktop · CLI · Host product series for device access, task execution, knowledge services, asset distribution, observability, audit, and governance.",
        tags: ["Platform", "Edge autonomy", "Domain model"],
        result: "4-way",
        resultLabel: "cross-end product model"
      },
      {
        type: "04 / enterprise SaaS",
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
        type: "02 / AI 平台",
        title: "IIA Cloud AI 辅助工程平台",
        desc: "设计协同工作台，将团队沟通沉淀为 Issue，结构化产品知识，编排 AI Agent，并连接需求、设计、开发、测试与发布决策。",
        tags: ["IIA Cloud", "AI Agent", "Issue 流程", "知识库"],
        result: "1 个闭环",
        resultLabel: "沟通 → Issue → 交付"
      },
      {
        type: "03 / 平台产品",
        title: "VxSPACE 智能工程协作软件系列",
        desc: "定义 Cloud · Desktop · CLI · Host 产品系列，连接设备接入、任务执行、知识服务、工程资产分发、可观测、审计与治理。",
        tags: ["平台", "边缘自治", "领域建模"],
        result: "4 端",
        resultLabel: "跨端产品模型"
      },
      {
        type: "04 / 企业 SaaS",
        title: "AI 安全管理平台",
        desc: "负责漏洞扫描、日志与数据库审计、网络审计、Web 防篡改、风险评分和北向 API 集成等能力的产品迭代。",
        tags: ["安全 SaaS", "API", "风险评分", "团队管理"],
        result: "25%",
        resultLabel: "用户活跃度提升"
      }
    ]
  },
  visuals: {
    en: [
      {
        category: "Prototype",
        responsibility: "Validate product direction before development",
        src: "assets/iia-cloud-structure-list.png",
        alt: "IIA Cloud structure list prototype screen",
        title: "Workspace structure prototype",
        desc: "High-fidelity screen used to align navigation, document structure, ownership, versioning, and cross-workspace information architecture.",
        tags: ["Hi-fi prototype", "Information architecture", "Workspace UX"]
      },
      {
        category: "Framework",
        responsibility: "Define boundaries between user experience, agent orchestration, and platform services",
        src: "assets/iia-cloud-framework.svg",
        alt: "IIA Cloud product framework diagram",
        title: "AI engineering platform framework",
        desc: "A product framework for the user workspace, message routing, iia.agent orchestration, sandbox execution, and core platform services.",
        tags: ["System boundary", "Agent orchestration", "Platform services"]
      },
      {
        category: "Logic",
        responsibility: "Turn team collaboration into a repeatable delivery loop",
        src: "assets/iia-cloud-logic-flow.svg",
        alt: "IIA Cloud product logic flow diagram",
        title: "Conversation-to-delivery logic flow",
        desc: "Logic map connecting team chat, AI-created issues, requirement analysis, solution design, implementation, verification, release, and knowledge reuse.",
        tags: ["Business logic", "Delivery loop", "Knowledge sedimentation"]
      },
      {
        category: "Jira management",
        responsibility: "Manage issue states, relationships, owners, and delivery evidence",
        src: "assets/iia-cloud-issue-management.png",
        alt: "IIA Cloud issue management detail screen",
        title: "Issue governance and relation management",
        desc: "A Jira-like management view showing issue source, linked requirements, blockers, child tasks, documents, screenshots, meetings, comments, and ownership.",
        tags: ["Issue workflow", "Traceability", "Delivery governance"]
      },
      {
        category: "Sequence",
        responsibility: "Make agent interaction, latency, ownership, and feedback visible",
        src: "assets/iia-cloud-sequence.svg",
        alt: "IIA Cloud agent run sequence diagram",
        title: "Agent run sequence and feedback path",
        desc: "Sequence view of user message routing, run creation, sandbox allocation, tool calls, core-service operations, and real-time progress feedback.",
        tags: ["Sequence diagram", "MCP tools", "Human-in-the-loop"]
      }
    ],
    zh: [
      {
        category: "原型图",
        responsibility: "在研发前验证产品方向",
        src: "assets/iia-cloud-structure-list.png",
        alt: "IIA Cloud 结构列表原型界面",
        title: "工作空间结构原型",
        desc: "高保真界面用于对齐导航、文档结构、负责人、版本信息与跨工作空间的信息架构。",
        tags: ["高保真原型", "信息架构", "工作台体验"]
      },
      {
        category: "框架图",
        responsibility: "定义用户体验、Agent 编排与平台服务边界",
        src: "assets/iia-cloud-framework.svg",
        alt: "IIA Cloud 产品框架图",
        title: "AI 工程平台产品框架",
        desc: "从用户工作台、消息路由、iia.agent 编排、沙箱执行到核心平台服务，明确产品边界与协作关系。",
        tags: ["系统边界", "Agent 编排", "平台服务"]
      },
      {
        category: "逻辑图",
        responsibility: "把团队协作转化为可复用的交付闭环",
        src: "assets/iia-cloud-logic-flow.svg",
        alt: "IIA Cloud 产品逻辑流程图",
        title: "从沟通到交付的业务逻辑",
        desc: "连接团队沟通、AI 创建 Issue、需求分析、方案设计、开发实现、测试验证、发布决策与知识沉淀。",
        tags: ["业务逻辑", "交付闭环", "知识沉淀"]
      },
      {
        category: "Jira 管理图",
        responsibility: "管理 Issue 状态、关联关系、负责人和交付证据",
        src: "assets/iia-cloud-issue-management.png",
        alt: "IIA Cloud Issue 管理详情界面",
        title: "Issue 治理与关联管理",
        desc: "类 Jira 管理视图展示来源、关联需求、阻塞关系、子任务、文档、截图、会议、评论与负责人。",
        tags: ["Issue 流程", "可追溯", "交付治理"]
      },
      {
        category: "时序图",
        responsibility: "让 Agent 交互、延迟、责任归属与反馈路径可见",
        src: "assets/iia-cloud-sequence.svg",
        alt: "IIA Cloud Agent 运行时序图",
        title: "Agent 运行时序与反馈路径",
        desc: "展示用户消息路由、Run 创建、沙箱分配、工具调用、核心服务操作与实时进度反馈。",
        tags: ["时序图", "MCP 工具", "Human-in-the-loop"]
      }
    ]
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
        bullets: ["Owned product requirement analysis, scheduling, reviews, development follow-up, testing follow-up, and delivery coordination across IIA Cloud, VxSPACE, operating-system testing, ladder-diagram conversion, and agent exploration.", "For IIA Cloud, structured 148 requirements, updated 13 product documents, organized or joined 10+ reviews, tracked 45 core features through development, testing, and acceptance, and supported three development phases plus four demos.", "For VxSPACE, organized 53 requirements into six modules, supported milestone planning, and closed 18 issues or defects while phase-one development and phase-two design planning moved forward.", "For operating-system testing, clarified 117 testing requirements and scope items, completed prototype and requirement-document confirmation, and moved the first development milestone into testing."]
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
        bullets: ["负责 IIA Cloud、VxSPACE、操作系统测试、梯形图转换和智能体探索等项目的需求梳理、排期、评审、开发跟进、测试跟进与交付协同。", "在 IIA Cloud 中完成 148 项需求梳理、13 份产品文档输出 / 更新，组织或参与 10+ 次需求评审，跟进 45 项核心功能开发、测试与验收，并支持三期开发和四次项目演示。", "在 VxSPACE 中整理 53 项需求并拆解为 6 个功能模块，支持阶段排期，在一期开发和二期设计推进过程中跟进并闭环 18 个问题 / 缺陷。", "在操作系统测试项目中完成 117 项测试需求 / 范围梳理，推动原型和需求文档确认，第一期开发节点完成后进入测试阶段。"]
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
  }
};

const visualSlides = {
  en: [
    {
      category: "Prototype Delivery",
      responsibility: "Turn concepts into screens engineers can build from",
      slides: [
        ["assets/visual-prototype-01.png", "Knowledge package detail prototype", "Knowledge package detail", "Prototype screenshot for a knowledge package detail page, including package metadata, version table, and confirmation dialogs."],
        ["assets/visual-prototype-02.png", "VxSPACE device registration prototype with annotations", "Device registration feedback", "Annotated prototype for device registration success, state feedback, and user guidance after adding a device."],
        ["assets/visual-prototype-03.png", "VxSPACE product form relationship and function architecture", "Product form and function architecture", "Prototype documentation showing Cloud and Desktop product forms, positioning, data scope, and functional hierarchy."],
        ["assets/visual-prototype-04.png", "VxSPACE asset package list prototype", "Asset package list", "Prototype screenshot for resource package browsing, status display, filtering, and operation entry points."],
        ["assets/visual-prototype-05.png", "VxSPACE dark device dashboard prototype", "Dark device dashboard", "Prototype for a dark-mode device dashboard with summary metrics, navigation, and empty-state handling."]
      ]
    },
    {
      category: "Interaction Delivery",
      responsibility: "Clarify user actions, AI feedback, and review points",
      slides: [
        ["assets/visual-interaction-01.png", "IIA Cloud structure interaction screenshot", "Structure navigation interaction", "Interaction screenshot showing workspace structure, hover states, document hierarchy, and operation entry points."],
        ["assets/visual-interaction-02.png", "Operating system static review interaction screenshot", "Static review interaction", "Interaction screenshot for requirement review, issue confirmation, regeneration, and report generation actions."],
        ["assets/visual-interaction-03.png", "Issue board interaction screenshot", "Kanban task interaction", "Interaction screenshot for issue search, swimlane switching, status columns, cards, priorities, and progress tracking."]
      ]
    },
    {
      category: "Functional Module Design",
      responsibility: "Split product scope into modules, rules, and reusable loops",
      slides: [
        ["assets/visual-module-01.png", "VxDock functional architecture diagram", "VxDock functional architecture", "Module design diagram connecting Agent / CLI, Desktop modules, server integration, OTA platform, and RAGFlow knowledge base."],
        ["assets/visual-module-02.png", "Device detail module update static prototype", "Module update static prototype", "Module design screenshot for device detail, check-update flow, result feedback, update selection, and confirmation behavior."],
        ["assets/visual-module-03.png", "Functional module design screenshot", "Functional module design", "Design artifact that breaks product capability into clearer module responsibilities, states, and delivery boundaries."]
      ]
    },
    {
      category: "PRD Delivery",
      responsibility: "Document requirements, fields, acceptance context, and delivery evidence",
      slides: [
        ["assets/visual-prd-01.png", "PRD delivery screenshot one", "PRD requirement page", "Requirement-delivery screenshot showing how product rules, feature scope, and acceptance context are documented."],
        ["assets/visual-prd-02.png", "PRD delivery screenshot two", "PRD detail specification", "PRD screenshot for clarifying interaction rules, field definitions, and the handoff context for implementation."],
        ["assets/visual-prd-03.png", "PRD delivery screenshot three", "PRD supplemental detail", "Supplemental PRD artifact used to align developers, testers, and reviewers on concrete delivery expectations."]
      ]
    },
    {
      category: "Task Management",
      responsibility: "Track scope, dependencies, owners, progress, and issue closure",
      slides: [
        ["assets/visual-task-01.png", "Task management screenshot one", "Task tracking view", "Management screenshot for tracking task state, ownership, progress, and follow-up across product delivery."],
        ["assets/visual-task-02.png", "Task management screenshot two", "Issue planning board", "Task-management artifact showing backlog, active work, review queue, completed items, priorities, and status movement."],
        ["assets/visual-task-03.png", "Task management screenshot three", "Delivery issue list", "Screenshot used to manage task breakdown, defects, acceptance status, and the path to closure."],
        ["assets/visual-task-04.png", "Task management screenshot four", "Task closure evidence", "Management artifact for summarizing delivery progress, unresolved risks, and closure evidence."]
      ]
    },
    {
      category: "User Materials Delivery",
      responsibility: "Package product knowledge for users, teams, and operations",
      slides: [
        ["assets/visual-user-materials-01.png", "User material delivery screenshot one", "User material page", "User-material screenshot for packaging product knowledge into content that users, teams, or operations can consume."],
        ["assets/visual-user-materials-02.png", "User material delivery screenshot two", "User guide material", "Delivery screenshot for guides, explanations, or operational materials that support onboarding and handoff."]
      ]
    }
  ],
  zh: [
    {
      category: "原型交付",
      responsibility: "把概念转化为研发可理解的界面方案",
      slides: [
        ["assets/visual-prototype-01.png", "知识包详情页原型截图", "知识包详情页", "展示知识包元信息、版本表格与确认弹窗的原型截图。"],
        ["assets/visual-prototype-02.png", "VxSPACE 设备登记成功原型标注图", "设备登记反馈", "用于说明设备登记成功、状态反馈和添加设备后的用户引导。"],
        ["assets/visual-prototype-03.png", "VxSPACE 产品形态关系与功能架构", "产品形态与功能架构", "说明 Cloud 与 Desktop 产品形态、定位、数据范围和功能层级。"],
        ["assets/visual-prototype-04.png", "VxSPACE 资产包列表页原型", "资产包列表页", "展示资源包浏览、状态展示、筛选与操作入口的原型截图。"],
        ["assets/visual-prototype-05.png", "VxSPACE 深色设备看板原型", "深色设备看板", "展示深色模式下的设备总览、指标、导航与空状态处理。"]
      ]
    },
    {
      category: "交互交付",
      responsibility: "明确用户动作、AI 反馈和人审节点",
      slides: [
        ["assets/visual-interaction-01.png", "IIA Cloud 结构交互截图", "Structure 导航交互", "展示工作空间结构、悬浮状态、文档层级和操作入口。"],
        ["assets/visual-interaction-02.png", "操作系统静态审查交互截图", "静态审查交互", "展示需求审查、问题确认、重新生成和报告生成等交互动作。"],
        ["assets/visual-interaction-03.png", "Issue 看板交互截图", "看板任务交互", "展示 Issue 搜索、视图切换、状态列、卡片、优先级和进度跟踪。"]
      ]
    },
    {
      category: "功能模块设计",
      responsibility: "把产品范围拆成模块、规则和可复用闭环",
      slides: [
        ["assets/visual-module-01.png", "VxDock 功能架构图", "VxDock 功能架构", "连接 Agent / CLI、Desktop 模块、服务端集成、OTA 平台与 RAGFlow 知识库的模块设计图。"],
        ["assets/visual-module-02.png", "设备详情页模块更新静态原型", "模块更新静态原型", "说明设备详情、检查更新、结果反馈、更新选择与确认行为的模块设计截图。"],
        ["assets/visual-module-03.png", "功能模块设计截图", "功能模块设计", "用于拆解产品能力、模块职责、状态和交付边界的设计材料。"]
      ]
    },
    {
      category: "PRD 交付",
      responsibility: "沉淀需求、字段、验收上下文和交付证据",
      slides: [
        ["assets/visual-prd-01.png", "PRD 交付截图一", "PRD 需求页面", "展示产品规则、功能范围和验收上下文如何沉淀为需求交付物。"],
        ["assets/visual-prd-02.png", "PRD 交付截图二", "PRD 细节说明", "用于说明交互规则、字段定义和实现交接上下文的 PRD 截图。"],
        ["assets/visual-prd-03.png", "PRD 交付截图三", "PRD 补充细节", "用于让开发、测试和评审人员对齐具体交付预期的补充需求材料。"]
      ]
    },
    {
      category: "任务管理",
      responsibility: "跟踪范围、依赖、负责人、进度和问题闭环",
      slides: [
        ["assets/visual-task-01.png", "任务管理截图一", "任务跟踪视图", "用于跟踪任务状态、负责人、进度和产品交付后续动作的管理截图。"],
        ["assets/visual-task-02.png", "任务管理截图二", "Issue 规划看板", "展示待办、进行中、待评审、已完成、优先级和状态流转的任务管理材料。"],
        ["assets/visual-task-03.png", "任务管理截图三", "交付问题列表", "用于管理任务拆解、缺陷、验收状态和闭环路径的截图。"],
        ["assets/visual-task-04.png", "任务管理截图四", "任务闭环证据", "用于总结交付进度、未决风险和闭环证据的管理材料。"]
      ]
    },
    {
      category: "用户材料交付",
      responsibility: "把产品知识包装给用户、团队和运营使用",
      slides: [
        ["assets/visual-user-materials-01.png", "用户材料交付截图一", "用户材料页面", "把产品知识整理成用户、团队或运营可直接阅读和使用的材料。"],
        ["assets/visual-user-materials-02.png", "用户材料交付截图二", "用户指南材料", "用于支持上线说明、使用引导、培训或交接的用户材料截图。"]
      ]
    }
  ]
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

function renderDelivery() {
  const delivery = data.delivery[currentLang];
  document.getElementById("deliveryMetrics").innerHTML = delivery.metrics.map(([value, label]) => `
    <div class="delivery-metric"><strong>${value}</strong><span>${label}</span></div>
  `).join("");
  document.getElementById("deliveryProjects").innerHTML = delivery.projects.map(([name, desc], index) => `
    <article class="delivery-project"><div class="delivery-project-index">0${index + 1}</div><div><h3>${name}</h3><p>${desc}</p></div></article>
  `).join("");
  document.getElementById("deliveryPractices").innerHTML = delivery.practices.map(([title, desc]) => `
    <article class="practice-card reveal"><span class="practice-mark">↗</span><h3>${title}</h3><p>${desc}</p></article>
  `).join("");
}

function renderVisuals() {
  const visualGrid = document.getElementById("visualGrid");
  visualGrid.innerHTML = visualSlides[currentLang].map((item, categoryIndex) => `
    <article class="artifact-card reveal" tabindex="0" data-carousel="${categoryIndex}">
      <div class="artifact-media carousel" aria-label="${item.category} image carousel">
        <img class="carousel-image" src="${item.slides[0][0]}" alt="${item.slides[0][1]}" loading="lazy">
        <button class="carousel-button carousel-prev" type="button" aria-label="Previous image">‹</button>
        <button class="carousel-button carousel-next" type="button" aria-label="Next image">›</button>
        <div class="carousel-footer"><span class="carousel-count">1 / ${item.slides.length}</span><div class="carousel-dots" role="tablist" aria-label="${item.category} images">${item.slides.map((slide, index) => `<button class="carousel-dot${index === 0 ? " is-active" : ""}" type="button" role="tab" aria-label="Show image ${index + 1}" aria-selected="${index === 0}"></button>`).join("")}</div></div>
      </div>
      <div class="artifact-copy">
        <div class="artifact-meta"><span>${item.category}</span><span>${item.responsibility}</span></div>
        <h3 class="artifact-title">${item.slides[0][2]}</h3>
        <p class="artifact-desc">${item.slides[0][3]}</p>
      </div>
    </article>
  `).join("");

  visualGrid.querySelectorAll(".artifact-card").forEach((card, categoryIndex) => {
    const item = visualSlides[currentLang][categoryIndex];
    const image = card.querySelector(".carousel-image");
    const title = card.querySelector(".artifact-title");
    const desc = card.querySelector(".artifact-desc");
    const count = card.querySelector(".carousel-count");
    const dots = [...card.querySelectorAll(".carousel-dot")];
    let current = 0;
    let touchStartX = 0;

    const showSlide = (nextIndex) => {
      current = (nextIndex + item.slides.length) % item.slides.length;
      const [src, alt, slideTitle, slideDesc] = item.slides[current];
      image.src = src;
      image.alt = alt;
      title.textContent = slideTitle;
      desc.textContent = slideDesc;
      count.textContent = `${current + 1} / ${item.slides.length}`;
      dots.forEach((dot, index) => {
        const active = index === current;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-selected", String(active));
      });
    };

    card.querySelector(".carousel-prev").addEventListener("click", () => showSlide(current - 1));
    card.querySelector(".carousel-next").addEventListener("click", () => showSlide(current + 1));
    dots.forEach((dot, index) => dot.addEventListener("click", () => showSlide(index)));
    card.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); showSlide(current - 1); }
      if (event.key === "ArrowRight") { event.preventDefault(); showSlide(current + 1); }
    });
    card.addEventListener("touchstart", (event) => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
    card.addEventListener("touchend", (event) => {
      const distance = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(distance) > 40) showSlide(distance > 0 ? current - 1 : current + 1);
    }, { passive: true });
  });
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

function renderAll() {
  setTextContent();
  renderMetrics();
  renderSystemLoop();
  renderCases();
  renderDelivery();
  renderVisuals();
  renderCapabilities();
  renderWorkflow();
  renderTimeline();
  renderEducation();
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

function revealVisitStats(attempt = 0) {
  const value = document.getElementById("busuanzi_value_site_pv");
  const stats = document.getElementById("visitStats");
  if (!value || !stats || attempt > 20) return;
  if (value.textContent.trim()) { stats.style.display = ""; return; }
  setTimeout(() => revealVisitStats(attempt + 1), 500);
}
revealVisitStats();
if (window.location.hash) {
  setTimeout(() => document.querySelector(window.location.hash)?.scrollIntoView(), 0);
}
