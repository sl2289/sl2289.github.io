# Research 页内容

Research 页（`/research`）从这里的 markdown 文件自动生成，格式与 [academicpages](https://github.com/academicpages/academicpages.github.io) 的 `_publications/`、`_teaching/` 兼容，可以直接从模版复制条目过来。

- `profile.yml` — 左侧个人信息栏：头像、姓名、简介、所在地、学校、链接（Email / Google Scholar / ORCID / GitHub / LinkedIn）。头像放到 `public/images/` 后把 `avatar` 改成 `"/images/文件名.jpg"`；留空显示默认头像
- `research-about.md` — About Me 正文
- `_publications/*.md` — 每篇论文一个文件，按 `date` 倒序排列
- `honors.yml` — Honors & Awards，按文件里的顺序显示
- `education.yml` — Education，按文件里的顺序显示
- `_teaching/*.md` — 每段教学经历一个文件，按 `date` 倒序排列（目前隐藏：`src/app/components/ResearchPage.tsx` 顶部 `SHOW_TEACHING` 改成 `true` 即可恢复）

改完保存即可，`npm run dev` 会热更新；push 到 main 后自动部署。

想暂时隐藏某篇论文或某段教学经历、又不想删文件：在它的 front matter 里加 `published: false`（academicpages 的标准写法），删掉这行或改成 `true` 即可恢复显示。

## 新增论文

`content/_publications/2026-my-paper.md`：

```yaml
---
title: "Paper Title"
date: 2026-05-01                 # 决定排序，年份显示在徽章上
venue: "CHI 2026"
authors: "Shengyang Liu, Co-author A"   # 本站扩展字段
status: "Under Review at CHI 2026"      # 本站扩展字段，可选；有则替代 venue 显示
image: "/images/publications/my-paper.png"  # 本站扩展字段，可选；图片放 public/images/publications/
excerpt: "一句话简介（可选）"
paperurl: "https://..."          # 可选，显示 PDF 链接
slidesurl: "https://..."         # 可选，显示 Slides 链接
bibtexurl: "https://..."         # 可选，显示 BibTeX 链接
---
```

academicpages 的其他字段（`collection`、`permalink`、`category`、`citation`）可以保留，页面会忽略。

## 新增教学经历

`content/_teaching/2026-fall-course.md`：

```yaml
---
title: "Course Name"
date: 2026-08-01
term: "Fall 2026"                # 本站扩展字段，显示在徽章上
role: "Teaching Assistant"       # 本站扩展字段；没有则显示 type
type: "Undergraduate course"
---

课程描述，支持 markdown。
```
